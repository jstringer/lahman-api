import { RepositoryBase } from "./RepositoryBase";
import { Pitching } from "../../api/models/Pitching";
import { ObjectLiteral } from "../QueryOptions";
import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";

export class PitchingRepository extends RepositoryBase<Pitching> {
  
  public findByPlayerId(playerId: string): Promise<Pitching | Pitching[] | undefined> {
    return this.repository.find({playerID: playerId});
  }

  public findByOptions(options: ObjectLiteral): Promise<Pitching | Pitching[] | undefined> {
    let searchEntity = plainToClass(Pitching, options);
    try {
      validateOrReject(searchEntity, {skipMissingProperties: true});
    } catch (errors) {
      console.log("Validation failed. Errors: ", errors);
      return undefined;
    }
    return this.repository.find(searchEntity);
  }

  //TODO: figure out relations
  public upsert(toInsert: Pitching): Promise<Pitching> {
    return this.repository.save(toInsert);
  }

  public remove(toRemove: Pitching): Promise<Pitching> {
    return this.repository.remove(toRemove);
  }

}