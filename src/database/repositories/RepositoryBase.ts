import { Repository, EntityTarget } from "typeorm";
/**
 * Represents a 
 */
type Options = {
  [key : string] : string | number;
}

export abstract class RepositoryBase<T> extends Repository<T> {
  
  /**
   * Gets the Entity by its ID. Returns undefined if no entity matches
   */
  public findById(id: number): Promise<T | undefined> {
    let searchOptions = {
      "id" : id
    }
    return this.findOne(searchOptions);
  }

  public async exists(entity: T): Promise<Boolean> {
    const result = await this.getId(entity);
    if (result > 0) {
      return true;
    }
    else {
      return false;
    }
  }

}