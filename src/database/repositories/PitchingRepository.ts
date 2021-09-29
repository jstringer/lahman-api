import { RepositoryBase } from "./RepositoryBase";
import { Pitching } from "../../api/models/Pitching";

export class PitchingRepository extends RepositoryBase<Pitching> {
  
  public findByPlayerId(playerId: string): Promise<Pitching | Pitching[] | undefined> {
    return this.repository.find({playerID: playerId});
  }

  //TODO: figure out relations
  public upsert(toInsert: Pitching): Promise<Pitching> {
    return this.repository.save(toInsert);
  }

  public remove(toRemove: Pitching): Promise<Pitching> {
    return this.repository.remove(toRemove);
  }

}