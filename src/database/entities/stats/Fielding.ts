import { Exclude, Type } from "class-transformer";
import { IsInstance, IsInt, IsNotEmpty, IsString, Min } from "class-validator";
import { Entity, Column, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { People } from "../player";
import { Teams } from "../teams";

abstract class BaseFielding {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id: number;

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

/**
 * Regular season fielding stats
 */
@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "Fielding"
})
export class Fielding extends BaseFielding {
  @Column({ type: "integer", nullable: true })
  @IsInt()
  public stint: number;

  @Column({type: "integer", nullable: true })
  @IsInt()
  public ZR: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public WP: number;

  @ManyToOne(() => People, people => people.fieldingStats)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;
  
  @ManyToMany(() => Teams, teams => teams.fieldingStats)
  @JoinColumn({ name: 'teamID', referencedColumnName: 'teamID'})
  public teams: Teams[];

}

/**
 * Postseason fielding stats
 */
@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "FieldingPost"
})
export class FieldingPost extends BaseFielding {
  @Column("text")
  @IsInt()
  public round: string;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public TP: number;
  
  @ManyToOne(() => People, people => people.fieldingPost)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;

  @ManyToMany(() => Teams, teams => teams.fieldingPost)
  @JoinColumn({ name: 'teamID', referencedColumnName: 'teamID' })
  public teams: Teams[];
}

/**
 * Splits by outfield position 
 */
@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "FieldingOFsplit"
})
export class FieldingOFsplit extends BaseFielding {
  @Column("text")
  @IsInt()
  public round: string;

  @ManyToOne(() => People, people => people.fieldingOFsplit)
  @JoinColumn({ name: 'playerID', referencedColumnName: 'playerID' })
  @Type(() => People)
  @IsInstance(People)
  @Exclude({toPlainOnly: true})
  public player: People;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public ZR: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public WP: number;
}

/**
 * Games played per outfield position
 */
@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "FieldingOF"
})
export class FieldingOF {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id: number;

  @ManyToOne(() => People, people => people.fieldingOF)
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
  public yearID: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public Glf: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public Gcf: number;

  @Column({ type: "integer", nullable: true })
  @IsInt()
  public Grf: number;
}