import { Type, Exclude } from "class-transformer";
import { IsDefined, IsIn, IsInstance, IsInt, IsNumber, IsString } from "class-validator";
import { Entity, Column, JoinColumn, ManyToOne, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { People } from "../player";
import { Teams } from "../teams";

abstract class BasePitching {
  @PrimaryGeneratedColumn()
  @IsDefined()
  public id: number;

  @Column("text")
  @IsString()
  public playerID: string;

  @Column("integer")
  @IsInt()
  public yearID: number;

  @Column("text")
  @IsString()
  public teamID: string;

  @Column("text")
  @IsString()
  public lgID: string;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public W: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public L: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public G: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public GS: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public CG: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public SHO: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public SV: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public IPOuts: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public H: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public ER: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public HR: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public BB: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public SO: number;

  @Column({ type: "numeric", nullable: true })
  @IsNumber()
  public BAOpp: number;

  @Column({ type: "numeric", nullable: true })
  @IsNumber()
  public ERA: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public IBB: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public WP: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public HBP: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public BK: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public BFP: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public GF: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public R: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public SH: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public SF: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public GIDP: number;
}

/**
 * Regular Season Pitching stats
 */
@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "Pitching"
})
export class Pitching extends BasePitching {
  @Column({ type: "integer", nullable: true })
  @IsInt()
  public stint: number;

  @ManyToOne(() => People, people => people.pitchingStats)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  public player: People;

  @ManyToMany(() => Teams, teams => teams.pitchingStats)
  @JoinColumn({ name: 'teamID', referencedColumnName: 'teamID'})
  public teams: Teams[];
}

/**
 * Postseason pitching stats
 */

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