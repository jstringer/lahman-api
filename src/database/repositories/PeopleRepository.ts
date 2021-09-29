import { EntityRepository, Repository } from "typeorm";
import { RepositoryBase } from "./RepositoryBase";
import { People } from "../../api/models/People";

/**
 * Repository class for retrieving, updating, inserting, and deleting entities of type People
 * from the database.
 */
@EntityRepository(People)
export class PeopleRepository extends RepositoryBase<People> {
  
  public findByPlayerId(playerId: string): Promise<People> {
    return this.repository.findOne({playerID: playerId});
  }

  //TODO: figure out Relations
  public upsert(toInsert: People): Promise<People> {
    return this.repository.save(toInsert)
  }

  //TODO: figure out Relations
  public remove(toRemove: People): Promise<People> {
    return this.remove(toRemove);
  }

}