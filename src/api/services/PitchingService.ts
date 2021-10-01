import { getRepository, Repository } from "typeorm";
import { StatsQuery } from "../controllers/querys/StatsQuery";
import { Pitching } from "../models/Pitching";

export class PitchingService {
  private readonly pitchingRepository: Repository<Pitching>

  constructor() {
    this.pitchingRepository = getRepository(Pitching);
  }
  
  public async getById(id: number): Promise<Pitching[] | undefined> {
    try { 
      let result = await this.pitchingRepository.findByIds([id]);
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async getByOptions(options: StatsQuery): Promise<Pitching[] | Pitching > {
    let findOptions = options.transform(); 
    try {
      let result = await this.pitchingRepository.find(findOptions);
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
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