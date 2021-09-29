import { getCustomRepository } from "typeorm";
import { PeopleRepository } from "../../database/repositories/PeopleRepository";
import { People } from "../models/People";

export class PeopleService {
  private readonly peopleRepository: PeopleRepository; 
  constructor() {
    this.peopleRepository = getCustomRepository(PeopleRepository);
  }

  public findByPlayerId(playerIdSearch: string): Promise<People | People[]> {  
    return this.peopleRepository.getByPlayerId(playerIdSearch);
  }

  
}