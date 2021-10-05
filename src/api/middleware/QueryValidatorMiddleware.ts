import { classToPlain, plainToClass, ClassConstructor, plainToClassFromExist } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";
import { Service } from "typedi";
import { RequestFactory } from "../controllers/requests/RequestFactory";

@Service()
export class QueryValidatorMiddleware implements ExpressMiddlewareInterface {
  async use(request: Request, response: Response, next: NextFunction) {
    if (request.query) {
      let queryStringObj = classToPlain(request.query);
      let searchQueryInstance = RequestFactory.getRequestInstance(request.path);
      let statsQuery = plainToClassFromExist(searchQueryInstance,this.lowercaseKeys(queryStringObj), { excludeExtraneousValues: true });
      try { 
        await validate(statsQuery, {
          skipMissingProperties: true
        });
        request.findOptions = statsQuery.mapToFindOptions();
        next();
      }
      catch (errors) {
        next(errors);
      }
    }
  }

  private lowercaseKeys(input: Object) {
    return Object.keys(input).reduce((newObj, key) => {
      newObj[key.toLowerCase()] = input[key];
      return newObj;
    }, {});
  }
}
