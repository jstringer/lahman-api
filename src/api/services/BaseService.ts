import { Service } from "typedi";
import { FindConditions, Repository } from "typeorm";
import { StatsRequest } from "../controllers/requests/StatsRequest";

@Service()
export abstract class BaseService<T> {
  constructor(private readonly repository: Repository<T>){}

  public async getById(id: number): Promise<T> {
    try {
      let result = await this.repository.findOne(id);
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    } 
  }

  public async getByOptions(options: FindConditions<T>): Promise<T | T[]> {
    try {
      let result = await this.repository.find(options);
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public abstract getByPlayerId(playerId: string): Promise<T | T[]> 

}