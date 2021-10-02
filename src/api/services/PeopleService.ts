import { Service } from "typedi";
import { getCustomRepository, getRepository, Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { People } from "../models/People";
import { BaseService } from "./BaseService";

export class PeopleService extends BaseService<People> {
  constructor(
    @InjectRepository(People) private readonly peopleRepository: Repository<People>
  ) {
    super(peopleRepository);
  }
  
  public async getByPlayerId(playerId: string): Promise<People | undefined> {  
    try {
    let result = await this.peopleRepository.findOne({
      playerID: playerId
    });
    return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  //Create player
}