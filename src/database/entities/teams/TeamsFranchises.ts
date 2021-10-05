import {Entity, Column, PrimaryColumn, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { IsNotEmpty, IsDate, IsString, IsInt, IsArray, IsDefined } from "class-validator";
import { Exclude, Type } from "class-transformer";
import { Teams } from "./Teams";

@Entity({
  database: "lahman_db",
  schema: "Baseball",
  name: "TeamsFranchises"
})
export class TeamsFranchises {
  @PrimaryGeneratedColumn()
  @IsDefined()
  public id: number; 

  @OneToMany(() => Teams, teams => teams.franchise)
  @JoinColumn({name: 'franchID', referencedColumnName: 'franchID'})
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