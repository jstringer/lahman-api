import { Service } from "typedi";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Pitching } from "../../database/models/Pitching";
import { BaseService } from "./BaseService";

@Service()
export class PitchingService extends BaseService<Pitching> {
  constructor(
    @InjectRepository(Pitching) private readonly pitchingRepository: Repository<Pitching>
  ) {
    super(pitchingRepository);
  }
  
  public async getByPlayerId(playerId: string): Promise<Pitching | Pitching[]> {
    try {
      let result = await this.pitchingRepository.find({ playerID: playerId });
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}