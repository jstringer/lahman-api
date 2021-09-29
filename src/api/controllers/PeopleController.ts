import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import { PeopleService } from '../services/PeopleService';

@JsonController()
export class PeopleController {
  constructor(
    private readonly peopleService: PeopleService = new PeopleService()
  ) {}

  @Get('/player/:playerId')
  public getByPlayerId(@Param('playerId') playerId: string) {
    //Check to see if additional querystring params exist. If not:
    return this.peopleService.findByPlayerId(playerId);
    //Otherwise, construct an object with those params, including the playerID, and pass to
    //the service method
    
  }
}