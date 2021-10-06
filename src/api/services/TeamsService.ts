import { Repository } from "typeorm";
import { Teams } from "../../database/entities/teams";
import { BaseService } from "./BaseService";
import { InjectRepository } from "typeorm-typedi-extensions";
import { Service } from "typedi";

@Service()
export class TeamsService extends BaseService<Teams> {
  constructor(
    @InjectRepository(Teams) private readonly teamsRepository: Repository<Teams>) {
    super(teamsRepository);
  }

  public async getByFranchiseId(franchId: string): Promise<Teams[]> {
    try {
      let result = await this.teamsRepository.find({
        where: {franchise: {'franchID': franchId}}
      });
      if (result.length > 0){
        return result;
      }
      else {
        throw new Error(`No team with ${franchId} found`);
      }
    } catch (error) {
      console.log(error);
    }
  }
}