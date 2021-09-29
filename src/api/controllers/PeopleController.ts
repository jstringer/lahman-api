import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { PeopleService } from '../services/PeopleService';

@JsonController()
export class PeopleController {
  constructor(
    private readonly peopleService: PeopleService = new PeopleService()
  ) {}

  @Get('/player/:playerId')
  public getByPlayerId(@Param('playerId') playerId: string) {
    return this.peopleService.getByPlayerId(playerId);
  }

  // POST new player with player object in Body

  // etc
}