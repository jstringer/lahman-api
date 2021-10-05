import { classToPlain, plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";
import { Service } from "typedi";
import { StatsRequest } from "../controllers/requests/StatsRequest";

@Service()
export class QueryFormatterMiddleware implements ExpressMiddlewareInterface {
  async use(request: Request, response: Response, next?: NextFunction) {
    if (request.query) {
      let queryStringObj = classToPlain(request.query);
      let statsQuery = plainToClass(StatsRequest, this.lowercaseKeys(queryStringObj), { excludeExtraneousValues: true });
      try { 
        await validate(statsQuery, {
          skipMissingProperties: true
        });
        request.findOptions = this.transform(statsQuery);
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

  private transform(statsRequest: StatsRequest): any {
    let findOptions = {
      where: {}
    }
    
    if (statsRequest.playerid != null) {
      findOptions.where['player'] = {'playerID': statsRequest.playerid};
    }
    if (statsRequest.year != null) {
      findOptions.where['yearID'] = statsRequest.year;
    }
    if (statsRequest.teamid != null) {
      findOptions.where['team'] = {'teamID': statsRequest.teamid};
    }

    return findOptions;
  }
}
