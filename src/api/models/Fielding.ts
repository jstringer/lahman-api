import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { People } from "./People";

@Entity({
  database: "lahman_db",
  schema: "Baseball"
})
export class Fielding {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => People, people => people.fieldingStats)
  public player: People;

  @Column("text")
  public playerID: string;

  @Column("integer")
  public yearID: number;

  @Column("integer")
  public stint: number;

  @Column("text")
  public teamID: string;

  @Column("text")
  public lgID: string;

  @Column("text")
  public Pos: string;

  @Column("integer")
  public G: number;

  @Column("integer")
  public GS: number;

  @Column("integer")
  public InnOuts: number;

  @Column("integer")
  public PO: number;

  @Column("integer")
  public A: number;

  @Column("integer")
  public E: number;

  @Column("integer")
  public DP: number;

  @Column("integer")
  public PB: number;

  @Column("integer")
  public WP: number;

  @Column("integer")
  public SB: number;

  @Column("integer")
  public CS: number;

  @Column("integer")
  public ZR: number;
}