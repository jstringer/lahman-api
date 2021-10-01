import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req } from 'routing-controllers';
import { ObjectLiteral } from '../../database/QueryOptions';
import { BattingService } from '../services/BattingService';
import { Batting } from '../models/Batting'
import { Request, response } from 'express';

@JsonController()
export class BattingController {
  constructor(
    private readonly battingService: BattingService = new BattingService()
  ) {}
  
  @Get('/stats/batting/')
  public async get(@QueryParams() query?: Batting) {
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
}