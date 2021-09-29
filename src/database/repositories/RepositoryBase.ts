import { AbstractRepository, EntityTarget } from "typeorm";
import { plainToClass } from "class-transformer";
import { QueryOptions } from '../QueryOptions';
/**
 * Represents a 
 */
type Options = {
  [key : string] : string | number;
}

export abstract class RepositoryBase<T> extends AbstractRepository<T> {
  
  /**
   * Gets the Entity by its ID. Returns undefined if no entity matches
   */
  public findById(id: number): Promise<T | undefined> {
    let searchOptions = {
      "id" : id
    }
    return this.repository.findOne(searchOptions);
  }

  public async exists(entity: T): Promise<Boolean> {
    const result = await this.repository.getId(entity);
    if (result > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  //TODO: refactor this to instantiate an instance of T and validate against it,
  //rather than repeating code in every other repo class
  public abstract findByOptions(searchOptions: Options): Promise<T | T[] | undefined>

  public abstract upsert(toInsert: T): Promise<T>

  public abstract remove(toRemove: T): Promise<T>

}