import { classToPlain, plainToClass, ClassConstructor, plainToClassFromExist } from "class-transformer";
import { validateOrReject, validate } from "class-validator";
import { QueryValidationError } from "../errors/QueryValidationError";
import { NextFunction, Request, Response } from "express";
import { ExpressMiddlewareInterface, HttpError } from "routing-controllers";
import { Service } from "typedi";
import { RequestFactory } from "../controllers/requests/RequestFactory";

@Service()
export class QueryValidatorMiddleware implements ExpressMiddlewareInterface {
  async use(request: Request, response: Response, next: NextFunction) {
    if (request.query) {
      let queryStringObj = classToPlain(request.query);
      let searchQueryInstance = RequestFactory.getRequestInstance(request.path);
      let statsQuery = plainToClassFromExist(searchQueryInstance, this.lowercaseKeys(queryStringObj));
      validate(statsQuery, {
          whitelist: true,
          forbidNonWhitelisted: true,
          skipMissingProperties: true,
      }).then( errors => {
        if (errors.length > 0) {
          next(new QueryValidationError(errors));
        } else {
          request.findOptions = statsQuery.mapToFindOptions();
          next();
        }
      });
    }
    else {
      next();
    }
  }

  private lowercaseKeys(input: Object) {
    return Object.keys(input).reduce((newObj, key) => {
      newObj[key.toLowerCase()] = input[key];
      return newObj;
    }, {});
  }
}
