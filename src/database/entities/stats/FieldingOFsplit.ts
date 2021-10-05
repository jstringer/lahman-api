import { IsInt, IsInstance } from "class-validator";
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { Type, Exclude } from "class-transformer";
import { BaseFielding } from "./BaseFielding";
import { People } from "../index";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "FieldingOFsplit"
})
export class FieldingOFsplit extends BaseFielding {
  @Column("text")
  @IsInt()
  public round: string;

  @ManyToOne(() => People, people => people.fieldingOFsplit)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public ZR: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public WP: number;
}