import { Repository } from "typeorm";

export abstract class RepositoryBase<T> extends Repository<T> {
  /**
   * Gets the Entity by its ID. Returns undefined if no entity matches
   */
  public findById(id: number): Promise<T> {
    let searchOptions = {
      "id" : id
    }
    return this.findOne(searchOptions);
  }

  public async exists(entity: T): Promise<boolean> {
    const result = await this.getId(entity);
    if (result > 0) {
      return true;
    }
    else {
      return false;
    }
  }
}

export class RepositoryFactory {
  public create<T>(entityType: (new() => T)) {
    return new entityType();
  }
}