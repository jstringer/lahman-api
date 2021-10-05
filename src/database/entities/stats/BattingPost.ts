import { IsString, IsInstance } from "class-validator";
import { Type, Exclude } from "class-transformer";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Teams, People, BaseBatting } from "../index";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "BattingPost"
})
export class BattingPost extends BaseBatting {
  @Column("text")
  @IsString()
  public round: string;

  @ManyToMany(() => Teams, teams => teams.battingPost)
  @JoinColumn({ name: 'teamID', referencedColumnName: 'teamID' })
  public teams: Teams[];

  @ManyToOne(() => People, people => people.battingPost)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;
}