import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res } from 'routing-controllers';
import { BattingService } from '../services/BattingService';
import { SearchQuery } from './querys/SearchQuery';
import { Request, Response } from 'express';
import { Service } from 'typedi';

@Service()
@JsonController()
export class BattingController {
  constructor(
    private readonly battingService: BattingService
  ) {}
  
  @Get('/stats/batting')
  public async getBattingStats(@QueryParams() query: SearchQuery, @Res() response: Response ) {
    let result;
    if (Object.keys(query).length >= 1) {
      result = await this.battingService.getByOptions(query);
      if (result !== undefined) {
        return response.status(200).send(result);
      }
    }
    else {
      return response.send("Paginated data...");
    }
  }
}