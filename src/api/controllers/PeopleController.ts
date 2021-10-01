import { classToPlain, plainToClass } from 'class-transformer';
import { Request, Response, response } from 'express';
import { JsonController, Param, Req, Res, Body, Get, Post, Put, Delete, QueryParams } from 'routing-controllers';
import { People } from '../models/People';
import { PeopleService } from '../services/PeopleService';

@JsonController()
export class PeopleController {
  constructor(
    private readonly peopleService: PeopleService = new PeopleService()
  ) {}

  @Get('/player/:playerId')
  public async getByPlayerId(@Param('playerId') playerId: string, @Req() request: Request, @Res() response: Response) {
    let result = await this.peopleService.getByPlayerId(playerId);

    if (result !== undefined) {
      return response.status(200).send(result);
    }
    return response.status(404).send("No person by that ID");
  }

  @Get('/player')
  public async getByParams(@QueryParams({validate: {skipMissingProperties: true}}) query: People, @Req() request: Request, @Res() response: Response) {
    let result = await this.peopleService.getBySearchOptions(query);
    
    if (result !== undefined) {
      return response.status(200).send(result);
    }
    return response.status(404).send("Nobody found");
  }

  // POST new player with player object in Body

  // etc
}