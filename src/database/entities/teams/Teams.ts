import { Exclude, Type } from "class-transformer";
import { IsIn, IsInstance, IsInt, IsNotEmpty, IsNumber, IsString, Max, Min, IsDefined } from "class-validator";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Batting, BattingPost, Pitching, PitchingPost, Fielding, FieldingPost } from '../stats'
import { TeamsFranchises } from ".";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "Teams"
})
class Teams {
  @PrimaryGeneratedColumn()
  @IsNotEmpty()
  public id: number;

  @ManyToMany(() => Batting, batting => batting.id)
  @JoinTable({ name: 'Teams_Batting' })
  @Exclude({ toPlainOnly: true })
  public battingStats: Batting[];

  @ManyToMany(() => BattingPost, battingPost => battingPost.id)
  @JoinTable({ name: 'Teams_BattingPost' })
  @Exclude({ toPlainOnly: true })
  public battingPost: BattingPost[];

  @ManyToMany(() => Pitching, pitching => pitching.id)
  @JoinTable({ name: 'Teams_Pitching' })
  @Exclude({ toPlainOnly: true })
  public pitchingStats: Pitching[];

  @ManyToMany(() => PitchingPost, pitchingPost => pitchingPost.id)
  @JoinTable({ name: 'Teams_PitchingPost' })
  @Exclude({ toPlainOnly: true })
  public pitchingPost: PitchingPost[];

  @ManyToMany(() => Fielding, fielding => fielding.id)
  @JoinTable({ name: 'Teams_Fielding' })
  @Exclude({ toPlainOnly: true })
  public fieldingStats: Fielding[];

  @ManyToMany(() => FieldingPost, fieldingPost => fieldingPost.id)
  @JoinTable({ name: 'Teams_FieldingPost' })
  @Exclude({ toPlainOnly: true })
  public fieldingPost: FieldingPost[];

  @ManyToOne('TeamsFranchises', 'teams')
  public franchise: TeamsFranchises;

  @Column("integer")
  @IsInt() 
  public yearID: number;

  @Column({ type: "text", nullable: true })
  @IsString()
  public lgID: string;

  @Column("text")
  @IsString()
  public teamID: string;
  
  @Column("text")
  @IsNotEmpty()
  public franchID: string

  @Column({ type: "char", nullable: true })
  @IsString()
  public divID: string;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public Rank: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public G: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public GHome: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public W: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public L: number;

  @Column({ type: "character", nullable: true })
  @IsString()
  public DivWin: string;

  @Column({ type: "character", nullable: true })
  @IsString()
  public WCWin: string;

  @Column({ type: "character", nullable: true })
  @IsString()
  public LgWin: string;

  @Column({ type: "character", nullable: true })
  @IsString()
  public WSWin: string;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public R: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public AB: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public H: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public _2B: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public _3B: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public HR: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public BB: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public SO: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public SB: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public CS: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public HBP: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public SF: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public RA: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public ER: number;

  @Column({ type: "numeric", nullable: true })
  @IsNumber()
  public ERA: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public CG: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public SHO: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public SV: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public IPOuts: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public HA: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public HRA: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public BBA: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public SOA: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public E: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public DP: number;

  @Column({ type: "numeric", nullable: true })
  @IsNumber()
  public FP: number;

  @Column("text")
  @IsString()
  public name: string;

  @Column({ type: "text", nullable: true })
  @IsString()
  public park: string;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public attendance: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public BPF: number;

  @Column({ type: "integer", nullable: true })
  @IsNumber()
  public PPF: number;

  @Column({ type: "text", nullable: true })
  @IsString()
  public teamIDBR: string;

  @Column({ type: "text", nullable: true })
  @IsString()
  public teamIDlahman45: string;

  @Column({ type: "text", nullable: true })
  @IsString()
  public teamIDretro: string;
}

export { Teams }

