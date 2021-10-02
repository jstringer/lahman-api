import { Repository } from "typeorm";
import { Batting } from "../models/Batting";
import { BaseService } from "./BaseService";
import { InjectRepository } from "typeorm-typedi-extensions";

export class BattingService extends BaseService<Batting> {
  constructor(
    @InjectRepository(Batting) private readonly battingRepository: Repository<Batting>
  ) {
    super(battingRepository)
  }

  public async getByPlayerId(playerId: string): Promise<Batting | Batting[] | undefined> {
    try {
      let result = await this.battingRepository.find({ playerID: playerId });
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}