import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore, UseInterceptor, UseAfter } from 'routing-controllers';
import { BattingService } from '../services/BattingService';
import { Request, Response } from 'express';
import { QueryValidatorMiddleware } from '../middleware/QueryValidatorMiddleware';
import { PaginationMiddleware } from '../middleware/PaginationMiddleware';
import { Service } from 'typedi';

@Service()
@JsonController()
export class BattingController {
  constructor(
    private readonly battingService: BattingService
  ) {};
  
  @Get('/stats/batting')
  @UseBefore(QueryValidatorMiddleware, PaginationMiddleware)
  public async getBattingStats(@Req() request: Request, @Res() response: Response) {
    let results = await this.battingService.getByOptions(request.findOptions ? request.findOptions : null)
    if (results) {
      response.locals.results = results;
      return response.status(200).send(response.locals);
    }
    else {
      return response.status(404).send('Not found')
    }
  }
}