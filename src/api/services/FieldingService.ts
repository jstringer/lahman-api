import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Fielding } from "../models/Fielding";
import { BaseService } from "./BaseService";

export class FieldingService extends BaseService<Fielding> {
  constructor(
    @InjectRepository(Fielding) private readonly fieldingRepository: Repository<Fielding>
  ) {
    super(fieldingRepository);
  }

  public async getByPlayerId(playerId: string): Promise<Fielding[]> {
    try {
      let result = await this.fieldingRepository.find({ playerID: playerId });
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}