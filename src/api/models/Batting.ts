import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { People } from "./People";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "Batting"
})
export class Batting {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => People, people => people.battingStats)
  player: People;

  @Column("text")
  public playerID: string;

  @Column("text")
  public yearID: string;

  @Column("integer")
  public stint: number;

  @Column("text")
  public teamID: string;

  @Column("text")
  public lgID: string;

  @Column("integer")
  public G: number;

  @Column("integer")
  public AB: number;

  @Column("integer")
  public R: number;

  @Column("integer")
  public H: number;

  @Column("integer")
  public _2B: number; 

  @Column("integer")
  public _3B: number;

  @Column("integer")
  public HR: number;

  @Column("integer")
  public RBI: number;

  @Column("integer")
  public SB: number;

  @Column("integer")
  public CS: number;

  @Column("integer")
  public BB: number;

  @Column("integer")
  public SO: number;

  @Column("integer")
  public IBB: number;

  @Column("integer")
  public HBP: number;

  @Column("integer")
  public SH: number;

  @Column("integer")
  public SF: number;

  @Column("integer")
  public GIDP: number;
}