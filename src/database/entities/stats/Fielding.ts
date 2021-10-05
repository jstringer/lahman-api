import { IsInt, } from "class-validator";
import { Column, Entity } from "typeorm";
import { BaseFielding } from "../index";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "Fielding"
})
export class Fielding extends BaseFielding {
  @Column({ type: "integer", nullable: true })
  @IsInt()
  public stint: number;

  @Column({type: "integer", nullable: true })
  @IsInt()
  public ZR: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public WP: number;
}