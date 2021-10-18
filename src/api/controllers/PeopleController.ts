import { Request, Response } from 'express';
import { JsonController, Param, Req, Res, Body, Get, Post, Put, Delete, UseBefore, NotFoundError } from 'routing-controllers';
import { Service } from 'typedi';
import { PeopleService } from '../services/PeopleService';

@Service()
@JsonController()
export class PeopleController {
  constructor(
    private readonly peopleService: PeopleService
  ) {};

  @Get('/player/:playerId')
  public async getByPlayerId(@Param('playerId') playerId: string, @Res() response: Response) {
    let result = await this.peopleService.getByPlayerId(playerId);

    if (result === undefined) {
      throw new NotFoundError(`playerID ${playerId} does not match any player`);
    }

    return response.status(200).send(result);
  }

  // POST new player with player object in Body
  @Post('/player/')
  public async addPlayer(@Req() request: Request, @Res() response: Response) {
    
  }
  
  // etc
}