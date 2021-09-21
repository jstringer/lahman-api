import { EntityRepository, Repository } from "typeorm";
import { People } from "../../api/models/People";

@EntityRepository(People)
export class PeopleRepository extends Repository<People> {
  
  public getPersonByPlayerId(playerId: string): Promise<People> {
    return this.findOne({playerID: playerId});
  }

  public getPersonByFirstAndLastName(firstname: string, lastname: string): Promise<People[]> {
    return this.find({nameFirst: firstname, nameLast: lastname});
  }

  // Update player
  // Insert player
  // Insert multiple players
  // Delete player
}