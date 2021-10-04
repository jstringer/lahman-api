import { Type } from "class-transformer";
import { IsDefined, IsIn, IsInstance, IsInt, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { People } from "./People";

@Entity({
  database: "lahman_db",
  schema: "Baseball"
})
export class Pitching {
  constructor() {}

  @PrimaryGeneratedColumn()
  @IsDefined()
  public id: number;

  @ManyToOne(() => People, people => people.pitchingStats)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  public player: People;

  @Column("text")
  @IsString()
  public playerID: string;

  @Column("integer")
  @IsInt()
  public stint: number;

  @Column("text")
  @IsString()
  public teamID: string;

  @Column("text")
  @IsString()
  public lgID: string;

  @Column("integer")
  @IsInt()
  public W: number;

  @Column("integer")
  @IsInt()
  public L: number;

  @Column("integer")
  @IsInt()
  public G: number;

  @Column("integer")
  @IsInt()
  public GS: number;

  @Column("integer")
  @IsInt()
  public CG: number;

  @Column("integer")
  @IsInt()
  public SHO: number;

  @Column("integer")
  @IsInt()
  public SV: number;

  @Column("integer")
  @IsInt()
  public IPOuts: number;

  @Column("integer")
  @IsInt()
  public H: number;

  @Column("integer")
  @IsInt()
  public ER: number;

  @Column("integer")
  @IsInt()
  public HR: number;

  @Column("integer")
  @IsInt()
  public BB: number;

  @Column("integer")
  @IsInt()
  public SO: number;

  @Column("numeric")
  @IsNumber()
  public BAOpp: number;

  @Column("numeric")
  @IsNumber()
  public ERA: number;

  @Column("integer")
  @IsInt()
  public IBB: number;

  @Column("integer")
  @IsInt()
  public WP: number;

  @Column("integer")
  @IsInt()
  public HBP: number;

  @Column("integer")
  @IsInt()
  public BK: number;

  @Column("integer")
  @IsInt()
  public BFP: number;

  @Column("integer")
  @IsInt()
  public GF: number;

  @Column("integer")
  @IsInt()
  public R: number;

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