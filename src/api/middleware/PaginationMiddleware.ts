import { NextFunction, Request, Response } from "express";
import { ExpressMiddlewareInterface } from "routing-controllers";
import { Service } from "typedi";

@Service()
export class PaginationMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.query.limit) {
      if (typeof req.query.limit === "string") {
        res.locals.limit = parseInt(req.query.limit, 10);
      } //Need to handle case where query param is not a string

      const baseNextLink = 'http://' + req.hostname + req.originalUrl;
      
      if (!req.query.offset) {
        res.locals.nextPage = new URL(baseNextLink.concat(`&offset=${res.locals.limit * 2}`))
      }
      else {
        if (typeof req.query.offset === "string") {
          const offset = parseInt(req.query.offset);
          res.locals.nextPage = new URL(baseNextLink.replace(`offset=${offset}`, `offset=${offset * 2}`))
        }
      }
    }
    next();
  }
}