import { EntityRepository, Repository } from "typeorm";
import { People } from "../../api/models/People";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

/**
 * Repository class for retrieving, updating, inserting, and deleting entities of type People
 * from the database.
 */
@EntityRepository(People)
export class PeopleRepository extends Repository<People> {

  private getColumnNames(): string[] {
    let columnNames = [];
    this.metadata.columns.forEach((columnMetadata => {
      columnNames.push(columnMetadata.propertyName);
    }));
    return columnNames;
  }

  public getById(id: number): Promise<People> | Promise<undefined> {
    return this.getById(id);
  }

  public getOneByFields(searchFields: { [key: string] : string | number }): Promise<People> {
    return this.findOne(searchFields);
  }

  public getManyByFields(searchFields: { [key: string] : string | number }): Promise<People[]> {
    return this.find(searchFields);
  }

  /**
   * Inserts a single People entity into the database. 
   */
  public insertPerson(toInsert: People): Promise<People> {
    return this.save(toInsert);
  }

  /**
   * Inserts an array of People entities into the database.  
   */
  public insertPeople(toInsert: People[]): Promise<People[]> {
    return this.save(toInsert);
  }

  //TODO: Delete player

}