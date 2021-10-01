import { getCustomRepository, getRepository, Repository } from "typeorm";
import { People } from "../models/People";

export class PeopleService {
  private readonly peopleRepository: Repository<People>; 
  constructor() {
    this.peopleRepository = getRepository(People);
  }
  
  public async getByPlayerId(playerIdSearch: string): Promise<People | undefined> {  
    try {
    let result = await this.peopleRepository.findOne({
      playerID: playerIdSearch
    });
    return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  //Create player
}