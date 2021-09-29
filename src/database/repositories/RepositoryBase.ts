import { AbstractRepository, EntityMetadata } from "typeorm";
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

  public findByOptions(searchOptions: Options): Promise<T | T[] | undefined> {
    let validator = new QueryOptions(this.repository.metadata);
    if (!validator.validateQuery(searchOptions)) {
      return undefined;
    }
    else {
      return this.repository.find(searchOptions);
    }
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

  public abstract upsert(toInsert: T): Promise<T>

  public abstract remove(toRemove: T): Promise<T>

}