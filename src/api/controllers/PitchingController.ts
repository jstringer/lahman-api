import { Response } from 'express';
import { JsonController, QueryParams, Param, Body, Get, Post, Put, Delete, Req, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { PitchingService } from '../services/PitchingService';
import { SearchQuery } from './querys/SearchQuery';

@Service()
@JsonController()
export class PitchingController {
  private readonly pitchingService: PitchingService;

  @Get('/stats/pitching')
  public async getPitchingStats(@QueryParams() query: SearchQuery, @Res() response: Response) {
    let result;
    if(Object.keys(query).length >= 1) {
      result = await this.pitchingService.getByOptions(result);
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