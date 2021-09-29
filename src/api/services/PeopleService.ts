import { getCustomRepository } from "typeorm";
import { PeopleRepository } from "../../database/repositories/PeopleRepository";
import { People } from "../models/People";

export class PeopleService {
  private readonly peopleRepository: PeopleRepository; 
  constructor() {
    this.peopleRepository = getCustomRepository(PeopleRepository);
  }

  public async getById(id: number): Promise<People> {
    try {
      let result = await this.peopleRepository.findById(id);
      return result;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
  public async getByPlayerId(playerIdSearch: string): Promise<People | People[]> {  
    try {
    let result = await this.peopleRepository.findByPlayerId(playerIdSearch);
    return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  
}