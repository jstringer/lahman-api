import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore } from 'routing-controllers';
import { BattingService } from '../services/BattingService';
import { Request, Response } from 'express';
import { QueryValidatorMiddleware } from '../middleware/QueryValidatorMiddleware';
import { Service } from 'typedi';

@Service()
@JsonController()
export class BattingController {
  constructor(
    private readonly battingService: BattingService
  ) {};
  
  @Get('/stats/batting')
  @UseBefore(QueryValidatorMiddleware)
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