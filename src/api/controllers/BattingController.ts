import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore } from 'routing-controllers';
import { BattingService } from '../services/BattingService';
import { StatsRequest } from './requests/StatsRequest';
import { Request, Response } from 'express';
import { QueryFormatterMiddleware } from '../middleware/QueryFormatterMiddleware';
import { Service } from 'typedi';

@Service()
@JsonController()
export class BattingController {
  constructor(
    private readonly battingService: BattingService
  ) {}
  
  @Get('/stats/batting')
  @UseBefore(QueryFormatterMiddleware)
  public async getBattingStats(@Req() request: Request, @Res() response: Response) {
    if (request.findOptions) {
      let result = await this.battingService.getByOptions(request.findOptions);
      if (result !== undefined) {
        return response.status(200).send(result);
      }
    }
    else {
      return response.send("Paginated data...");
    }
  }
}