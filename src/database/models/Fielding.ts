import { Exclude, Type } from "class-transformer";
import { IsIn, IsInstance, IsInt, IsNotEmpty, IsString, Max, Min } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { People } from "./People";

@Entity({
  database: "lahman_db",
  schema: "Baseball"
})
export class Fielding {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id: number;

  @ManyToOne(() => People, people => people.fieldingStats)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;

  @Column("text")
  @IsString()
  public playerID: string;

  @Column("integer")
  @IsInt()
  @Min(1871)
  public yearID: number;

  @Column("integer")
  @IsInt()
  public stint: number;

  @Column("text")
  @IsString()
  public teamID: string;

  @Column("text")
  @IsString()
  public lgID: string;

  @Column("text")
  @IsString()
  public Pos: string;

  @Column("integer")
  @IsInt()
  public G: number;

  @Column("integer")
  @IsInt()
  public GS: number;

  @Column("integer")
  @IsInt()
  public InnOuts: number;

  @Column("integer")
  @IsInt()
  public PO: number;

  @Column("integer")
  @IsInt()
  public A: number;

  @Column("integer")
  @IsInt()
  public E: number;

  @Column("integer")
  @IsInt()
  public DP: number;

  @Column("integer")
  @IsInt()
  public PB: number;

  @Column("integer")
  @IsInt()
  public WP: number;

  @Column("integer")
  @IsInt()
  public SB: number;

  @Column("integer")
  @IsInt()
  public CS: number;

  @Column("integer")
  @IsInt()
  public ZR: number;
}