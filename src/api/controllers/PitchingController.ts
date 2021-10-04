import { Request, Response } from 'express';
import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res, UseBefore } from 'routing-controllers';
import { Service } from 'typedi';
import { QueryFormatterMiddleware } from '../middleware/QueryFormatterMiddleware';
import { PitchingService } from '../services/PitchingService';

@Service()
@JsonController()
export class PitchingController {
  private readonly pitchingService: PitchingService;

  @Get('/stats/pitching')
  @UseBefore(QueryFormatterMiddleware)
  public async getPitchingStats(@Req() request: Request, @Res() response: Response) {
    if(request.findOptions) {
      let result = await this.pitchingService.getByOptions(request.findOptions);
      if (result !== undefined) {
        return response.status(200).send(result);
      }
      else {
       return response.status(404).send("Couldn't find nuthin"); 
      }
    }
    else {
      return response.send("Paginated data...");
    }
  }
}