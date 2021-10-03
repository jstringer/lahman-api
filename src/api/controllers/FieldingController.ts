import { Response } from 'express';
import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { FieldingService } from '../services/FieldingService';
import { SearchQuery } from './querys/SearchQuery';

@Service()
@JsonController()
export class FieldingController {
  private readonly fieldingService: FieldingService;

  @Get('/stats/fielding')
  public async getFieldingStats(@QueryParams() query: SearchQuery, @Res() response: Response) {
    let result;
    if (Object.keys(query).length >= 1) {
      result = await this.fieldingService.getByOptions(query);
      if (result !== undefined) {
        return response.status(200).send(result);
      }
      else {
        return response.status(404).send("Didn't find anything");
      }
    }
    else {
      return response.send("Paginated data...")
    }
  }
}