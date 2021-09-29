import { EntityRepository } from "typeorm";
import { RepositoryBase } from "./RepositoryBase";
import { Batting } from "../../api/models/Batting";

@EntityRepository(Batting)
export class BattingRepository extends RepositoryBase<Batting> {

  public getByPlayerId(playerId: string): Promise<Batting | Batting[]> {
    return this.repository.find({playerID: playerId});
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