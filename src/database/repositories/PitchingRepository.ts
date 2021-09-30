import { RepositoryBase } from "./RepositoryBase";
import { Pitching } from "../../api/models/Pitching";

export class PitchingRepository extends RepositoryBase<Pitching> {
  
  public findByPlayerId(playerId: string): Promise<Pitching | Pitching[] | undefined> {
    return this.find({playerID: playerId});
  }
}