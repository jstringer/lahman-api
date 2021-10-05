import { Column, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { IsInstance, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Exclude } from "class-transformer";
import { People, Teams } from "../index";

export abstract class BaseBatting {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id: number;

  @ManyToOne(() => People, people => people.battingStats)
  @JoinColumn({name: 'playerID', referencedColumnName: 'playerID'})
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  player: People;

  @ManyToMany(() => Teams, teams => teams.battingStats)
  @JoinColumn({ name: 'teamID', referencedColumnName: 'teamID' })
  public teams: Teams[];

  @Column("text")
  @IsString()
  public playerID: string;

  @Column("integer")
  @IsNumber()
  public yearID: string;

  @Column("text")
  @IsString()
  public teamID: string;

  @Column("text")
  @IsString()
  public lgID: string;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public G: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public AB: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public R: number;

  @Column({ type: "integer", nullable: true } )
  @IsInt()
  public H: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public _2B: number; 

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public _3B: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public HR: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public RBI: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public SB: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public CS: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public BB: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public SO: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public IBB: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public HBP: number;

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