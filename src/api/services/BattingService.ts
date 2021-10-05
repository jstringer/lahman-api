import { Repository } from "typeorm";
import { Batting } from "../../database/entities/stats/Batting";
import { BaseService } from "./BaseService";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Service } from "typedi";

@Service()
export class BattingService extends BaseService<Batting> {
  constructor(
    @InjectRepository(Batting) private readonly battingRepository: Repository<Batting>
  ) {
    super(battingRepository)
  }

  public async getByPlayerId(playerId: string): Promise<Batting | Batting[] | undefined> {
    try {
      let result = await this.battingRepository.find({ 
        where: { player: {'playerID': playerId} }
      });
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}