import { Request, Response } from 'express';
import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore } from 'routing-controllers';
import { Service } from 'typedi';
import { PaginationMiddleware } from '../middleware/PaginationMiddleware';
import { QueryValidatorMiddleware } from '../middleware/QueryValidatorMiddleware';
import { FieldingService } from '../services/FieldingService';

@Service()
@JsonController()
export class FieldingController {
  constructor(
    private readonly fieldingService: FieldingService
  ) {};

  @Get('/stats/fielding')
  @UseBefore(QueryValidatorMiddleware, PaginationMiddleware)
  public async getFieldingStats(@Req() request: Request, @Res() response: Response) {
    let results = await this.fieldingService.getByOptions(request.findOptions ? request.findOptions : null);
    if (results) {
      response.locals.results = results;
      return response.status(200).send(response.locals);
    }
    else {
      return response.status(404).send("Didn't find anything");
    }
  }
}