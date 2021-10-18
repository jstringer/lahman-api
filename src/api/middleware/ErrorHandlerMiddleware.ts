import { Request, Response, NextFunction  } from "express";
import { ExpressErrorMiddlewareInterface, HttpError, Middleware } from "routing-controllers";
import { Service } from "typedi";

@Service()
@Middleware({ type: 'after' })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  public error(err: HttpError, req: Request, res: Response, next: NextFunction): void { 
    res.status(err.httpCode || 500);
    res.json({
      name: err.name,
      message: err.message
    })
    //if we are in production, log the error name and message
    //otherwise, log the error name and the stack trace
  }
}
