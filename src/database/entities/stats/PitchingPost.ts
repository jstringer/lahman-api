import { IsString, IsInstance } from "class-validator";
import { Column, Entity, ManyToOne, ManyToMany, JoinColumn } from "typeorm";
import { Type, Exclude } from "class-transformer";
import { BasePitching, People, Teams } from "../index";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "PitchingPost"
})
export class PitchingPost extends BasePitching {
  @Column("text")
  @IsString()
  public round: string;

  @ManyToOne(() => People, people => people.pitchingPost)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;

  @ManyToMany(() => Teams, teams => teams.pitchingPost)
  @JoinColumn({ name: 'teamID', referencedColumnName: 'teamID' })
  public teams: Teams[];

}