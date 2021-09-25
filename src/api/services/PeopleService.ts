import { Service } from "typedi";
import { InjectRepository } from "typeorm-typedi-extensions";
import { PeopleRepository } from "../../database/repositories/PeopleRepository";
import { People } from "../models/People";

@Service()
export class PeopleService {
  constructor(
    @InjectRepository() private readonly peopleRepository: PeopleRepository) 
  {}

  public findByPlayerId(playerId: string): Promise<People> | Promise<undefined> {
    if (playerId) {
    }
  }

  public findByFirstAndLastName
}