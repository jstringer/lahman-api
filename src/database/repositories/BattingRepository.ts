import { EntityRepository } from "typeorm";
import { RepositoryBase } from "./RepositoryBase";
import { Batting } from "../../api/models/Batting";
import { ObjectLiteral } from "../QueryOptions";
import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";

@EntityRepository(Batting)
export class BattingRepository extends RepositoryBase<Batting> {

  public findByPlayerId(playerId: string): Promise<Batting | Batting[]> {
    return this.repository.find({playerID: playerId});
  }

  public async findByOptions(options: ObjectLiteral): Promise<Batting[] | Batting | undefined> {
    let searchEntity = plainToClass(Batting, options);
    try {
      await validateOrReject(searchEntity, {skipMissingProperties: true});
    } catch (errors) {
      console.log("Validation failed. Errors: ", errors);
      return undefined;
    }
    return this.repository.find(searchEntity);
  }

  //TODO: figure out relations
  public upsert(toInsert: Batting): Promise<Batting> {
    return this.repository.save(toInsert);
  }

  //TODO: figure out relations
  public remove(toRemove: Batting): Promise<Batting> {
    return this.repository.remove(toRemove);
  }
}