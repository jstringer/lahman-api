import { Exclude } from "class-transformer";
import { IsInstance, IsInt, IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { People } from "./People";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "Batting"
})
export class Batting {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id: number;

  @ManyToOne(() => People, people => people.battingStats)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  player: People;

  @Column("text")
  @IsString()
  public playerID: string;

  @Column("text")
  @IsString()
  public yearID: string;

  @Column("integer")
  @IsString()
  public stint: number;

  @Column("text")
  @IsString()
  public teamID: string;

  @Column("text")
  @IsString()
  public lgID: string;

  @Column("integer")
  @IsInt()
  public G: number;

  @Column("integer")
  @IsInt()
  public AB: number;

  @Column("integer")
  @IsInt()
  public R: number;

  @Column("integer")
  @IsInt()
  public H: number;

  @Column("integer")
  @IsInt()
  public _2B: number; 

  @Column("integer")
  @IsInt()
  public _3B: number;

  @Column("integer")
  @IsInt()
  public HR: number;

  @Column("integer")
  @IsInt()
  public RBI: number;

  @Column("integer")
  @IsInt()
  public SB: number;

  @Column("integer")
  @IsInt()
  public CS: number;

  @Column("integer")
  @IsInt()
  public BB: number;

  @Column("integer")
  @IsInt()
  public SO: number;

  @Column("integer")
  @IsInt()
  public IBB: number;

  @Column("integer")
  @IsInt()
  public HBP: number;

  @Column("integer")
  @IsInt()
  public SH: number;

  @Column("integer")
  @IsInt()
  public SF: number;

  @Column("integer")
  @IsInt()
  public GIDP: number;
}