import { IsInt } from "class-validator";
import { Column, Entity } from "typeorm";
import { BaseBatting } from "../index";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "Batting"
})
export class Batting extends BaseBatting {
  @Column({type: "integer", nullable: true })
  @IsInt()
  public stint: number;

}