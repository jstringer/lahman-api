import { EntityRepository, Repository } from "typeorm";
import { RepositoryBase } from "./RepositoryBase";
import { People } from "../../api/models/People";
import { ObjectLiteral } from "../QueryOptions";
import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";

/**
 * Repository class for retrieving, updating, inserting, and deleting entities of type People
 * from the database.
 */
@EntityRepository(People)
export class PeopleRepository extends RepositoryBase<People> {
  
  public findByPlayerId(playerId: string): Promise<People> {
    return this.repository.findOne({playerID: playerId});
  }

  public async findByOptions(options: ObjectLiteral): Promise<People | People[] | undefined> {
    let searchEntity = plainToClass(People, options);
    try {
      validateOrReject(searchEntity, {skipMissingProperties: true});
    } catch (errors) {
      console.log('Validation failed. Errors: ', errors);
      return undefined;
    }
    return this.repository.find(searchEntity);
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