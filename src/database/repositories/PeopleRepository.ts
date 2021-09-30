import { EntityRepository } from "typeorm";
import { RepositoryBase } from "./RepositoryBase";
import { People } from "../../api/models/People";

/**
 * Repository class for retrieving, updating, inserting, and deleting entities of type People
 * from the database.
 */
@EntityRepository(People)
export class PeopleRepository extends RepositoryBase<People> {
  
  public findByPlayerId(playerId: string): Promise<People | undefined> {
    return this.findOne({playerID: playerId});
  }

}