import { EntityMetadata } from "typeorm";

export type ObjectLiteral = {
  [key: string] : string | number 
}

export class QueryOptions {
  private readonly entityColumns: string[];
  
  constructor(entity: EntityMetadata) {
    this.entityColumns = [];
    entity.columns.forEach((metadata) => {
      this.entityColumns.push(metadata.propertyName);
    })
  }

  public validateQuery(searchOptions: ObjectLiteral): boolean {
    for (const key in searchOptions) {
      if (!this.entityColumns.includes(key)) {
        return false;
      }
    }
    return true;
  }
}