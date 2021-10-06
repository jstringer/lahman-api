import { Request, Response } from 'express';
import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore } from 'routing-controllers';
import { Service } from 'typedi';
import { QueryValidatorMiddleware } from '../middleware/QueryValidatorMiddleware';
import { FieldingService } from '../services/FieldingService';

@Service()
@JsonController()
export class FieldingController {
  constructor(
    private readonly fieldingService: FieldingService
  ) {};

  @Get('/stats/fielding')
  @UseBefore(QueryValidatorMiddleware)
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