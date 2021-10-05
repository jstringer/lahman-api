import { IsInt } from "class-validator";
import { Column, Entity } from "typeorm";
import { BasePitching } from "../index";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "Pitching"
})
export class Pitching extends BasePitching {
  @Column({ type: "integer", nullable: true })
  @IsInt()
  public stint: number;
}