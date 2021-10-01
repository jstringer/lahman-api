import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req } from 'routing-controllers';
import { BattingService } from '../services/BattingService';
import { StatsQuery } from './querys/StatsQuery';
import { Request, response } from 'express';
import { get } from 'http';

@JsonController()
export class StatsController {
  constructor(
    private readonly battingService: BattingService = new BattingService() //Update this to be dependency injected
  ) {}
  
  @Get('/stats/batting')
  public async getBattingStats(@QueryParams() query?: StatsQuery) {
    let result;
    if (query) {
      result = await this.battingService.getByOptions(query);
      if (result !== undefined) {
        return response.status(200).send(result);
      }
    }
    else {
      //return paginated data
    }
  }

  @Post('/stats/batting/:playerId')
  public async createBattingStats() {}
}