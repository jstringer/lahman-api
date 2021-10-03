import { Service } from "typedi";
import { Repository } from "typeorm";
import { SearchQuery } from "../controllers/querys/SearchQuery";

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

  public async getByOptions(options: SearchQuery): Promise<T | T[]> {
    let findOptions = options.transform();
    try {
      let result = await this.repository.find(findOptions);
      return result;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }

  public abstract getByPlayerId(playerId: string): Promise<T | T[]> 

}