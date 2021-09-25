import { EntityRepository, Repository } from "typeorm";
import { Service } from "typedi";
import { People } from "../../api/models/People";

/**
 * Repository class for retrieving, updating, inserting, and deleting entities of type People
 * from the database.
 */
@Service()
@EntityRepository(People)
export class PeopleRepository extends Repository<People> {

  public getById(id: number): Promise<People> | Promise<undefined> {
    return this.getById(id);
  }

  public getOneByFields(searchFields: {[field: string] : {value: string | number}}): Promise<People> | Promise<undefined> {
    return this.findOne(searchFields);
  }

  public getManyByFields(searchFields: {[field: string] : {value: string | number}}): Promise<People[]> | Promise<undefined>  {
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