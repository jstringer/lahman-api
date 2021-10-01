import { getRepository, Repository } from "typeorm";
import { Fielding } from "../models/Fielding";

export class FieldingService {
  private readonly fieldingRepository: Repository<Fielding>
  
  constructor() {
    this.fieldingRepository = getRepository(Fielding);
  }
}