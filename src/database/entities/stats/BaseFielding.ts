import { Exclude, Type } from "class-transformer";
import { IsInstance, IsInt, IsNotEmpty, IsString, Min } from "class-validator";
import { Column, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { People, Teams } from "../index";

export abstract class BaseFielding {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id: number;

  @ManyToOne(() => People, people => people.fieldingStats)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;

  @ManyToMany(() => Teams, teams => teams.fieldingStats)
  @JoinColumn({ name: 'teamID', referencedColumnName: 'teamID'})
  public teams: Teams[];

  @Column("text")
  @IsString()
  public playerID: string;

  @Column("integer")
  @IsInt()
  @Min(1871)
  public yearID: number;

  @Column("text")
  @IsString()
  public teamID: string;

  @Column("text")
  @IsString()
  public lgID: string;

  @Column("text")
  @IsString()
  public POS: string;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public G: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public GS: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public InnOuts: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public PO: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public A: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public E: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public DP: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public PB: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public SB: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public CS: number;
}