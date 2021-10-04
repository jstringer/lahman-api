import { Request, request, Response } from 'express';
import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore } from 'routing-controllers';
import { Service } from 'typedi';
import { QueryFormatterMiddleware } from '../middleware/QueryFormatterMiddleware';
import { FieldingService } from '../services/FieldingService';
import { StatsRequest } from './requests/StatsRequest';

@Service()
@JsonController()
export class FieldingController {
  private readonly fieldingService: FieldingService;

  @Get('/stats/fielding')
  @UseBefore(QueryFormatterMiddleware)
  public async getFieldingStats(@Req() request: Request, @Res() response: Response) {
    if (request.findOptions) {
      let result = await this.fieldingService.getByOptions(request.findOptions);
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