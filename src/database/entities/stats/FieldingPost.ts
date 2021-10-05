import { IsInt, IsInstance } from "class-validator";
import { Column, Entity, ManyToOne, ManyToMany, JoinColumn } from "typeorm";
import { Type, Exclude } from "class-transformer";
import { BaseFielding, People, Teams } from "../index";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "FieldingPost"
})
export class FieldingPost extends BaseFielding {
  @Column("text")
  @IsInt()
  public round: string;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public TP: number;
  
  @ManyToOne(() => People, people => people.fieldingPost)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;

  @ManyToMany(() => Teams, teams => teams.fieldingPost)
  @JoinColumn({ name: 'teamID', referencedColumnName: 'teamID' })
  public teams: Teams[];
}