import { getCustomRepository } from "typeorm";
import { ObjectLiteral } from "../../database/QueryOptions";
import { BattingRepository } from "../../database/repositories/BattingRepository";
import { Batting } from "../models/Batting";

export class BattingService {
  private readonly battingRepository: BattingRepository;

  constructor() {
    this.battingRepository = getCustomRepository(BattingRepository);
  }

  public async getById(id: number): Promise<Batting | undefined> {
    try { 
      let result = await this.battingRepository.findById(id);
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async getByOptions(options: ObjectLiteral): Promise<Batting[] | Batting> {
    try {
      let result = await this.battingRepository.findByOptions(options);
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public async getByPlayerId(playerId: string): Promise<Batting | Batting[]> {
    try {
      let result = await this.battingRepository.findByPlayerId(playerId);
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
}