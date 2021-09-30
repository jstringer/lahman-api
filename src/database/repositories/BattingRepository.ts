import { EntityRepository } from "typeorm";
import { RepositoryBase } from "./RepositoryBase";
import { Batting } from "../../api/models/Batting";

@EntityRepository(Batting)
export class BattingRepository extends RepositoryBase<Batting> {

  public findByPlayerId(playerId: string): Promise<Batting | Batting[]> {
    return this.find({playerID: playerId});
  }
}