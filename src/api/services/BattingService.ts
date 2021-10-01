import { getRepository, Repository } from "typeorm";
import { Batting } from "../models/Batting";
import { StatsQuery } from "../controllers/querys/StatsQuery";

export class BattingService {
  private readonly battingRepository: Repository<Batting>;

  constructor() {
    this.battingRepository = getRepository(Batting);
  }

  public async getById(id: number): Promise<Batting[] | undefined> {
    try { 
      let result = await this.battingRepository.findByIds([id]);
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async getByOptions(options: StatsQuery): Promise<Batting[] | Batting | undefined> {
    let findOptions = options.transform(); 
    try {
      let result = await this.battingRepository.find(findOptions);
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
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