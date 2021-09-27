import { getCustomRepository } from "typeorm";
import { PeopleRepository } from "../../database/repositories/PeopleRepository";
import { People } from "../models/People";

export class PeopleService {
  private readonly peopleRepository: PeopleRepository; 
  constructor() {
    this.peopleRepository = getCustomRepository(PeopleRepository);
  }

  public findByPlayerId(playerIdSearch: string): Promise<People> | Promise<undefined> {
    if (playerIdSearch) {
      const searchFields = {
        playerId: playerIdSearch
      }
      return this.peopleRepository.getOneByFields(searchFields);
    }
  }

  public findByFirstAndLastName(firstNameSearch: string, lastNameSearch: string): Promise<People> | Promise<undefined> {
    const searchFields = {
      nameFirst: firstNameSearch,
      nameLast: lastNameSearch
    }
    return this.peopleRepository.getOneByFields(searchFields);
  }
  
}