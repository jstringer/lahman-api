import { Exclude, Type } from "class-transformer";
import { IsIn, IsInstance, IsInt, IsNotEmpty, IsNumber, IsString, Max, Min, IsDefined } from "class-validator";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Teams } from ".";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "TeamsFranchises"
})
class TeamsFranchises {
  @PrimaryGeneratedColumn()
  @IsDefined()
  public id: number; 

  @OneToMany(() => Teams, teams => teams.franchise)
  @Exclude({ toPlainOnly: true})
  public teams: Teams[];
  
  @PrimaryColumn({
    type: "text",
    unique: true,
    nullable: false
  })
  @IsNotEmpty()
  public franchID: string

  @Column("text")
  @IsString()
  public franchName: string;

  @Column("char")
  @IsString()
  public active: string;

  @Column({ type: "text", nullable: true })
  @IsString()
  public NAassoc: string;
}

export { TeamsFranchises };