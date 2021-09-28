import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { People } from "./People";

@Entity({
  database: "lahman_db",
  schema: "Baseball"
})
export class Pitching {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(() => People, people => people.pitchingStats)
  public player: People;

  @Column("text")
  public playerID: string;

  @Column("integer")
  public stint: number;

  @Column("text")
  public teamID: string;

  @Column("text")
  public lgID: string;

  @Column("integer")
  public W: number;

  @Column("integer")
  public L: number;

  @Column("integer")
  public G: number;

  @Column("integer")
  public GS: number;

  @Column("integer")
  public CG: number;

  @Column("integer")
  public SHO: number;

  @Column("integer")
  public SV: number;

  @Column("integer")
  public IPOuts: number;

  @Column("integer")
  public H: number;

  @Column("integer")
  public ER: number;

  @Column("integer")
  public HR: number;

  @Column("integer")
  public BB: number;

  @Column("integer")
  public SO: number;

  @Column("numeric")
  public BAOpp: number;

  @Column("numeric")
  public ERA: number;

  @Column("integer")
  public IBB: number;

  @Column("integer")
  public WP: number;

  @Column("integer")
  public HBP: number;

  @Column("integer")
  public BK: number;

  @Column("integer")
  public BFP: number;

  @Column("integer")
  public GF: number;

  @Column("integer")
  public R: number;

  @Column("integer")
  public SH: number;

  @Column("integer")
  public SF: number;

  @Column("integer")
  public GIDP: number;
}