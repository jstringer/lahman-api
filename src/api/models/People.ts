import {Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { IsNotEmpty, IsDate, IsString, IsInt, IsArray } from "class-validator";
import { Exclude, Type } from "class-transformer";
import { Batting } from "./Batting";
import { Fielding } from "./Fielding";
import { Pitching } from "./Pitching";

export interface IEntity {
  id?: number;
  playerID?: string;
}

@Entity({
   database: "lahman_db",
   schema: "Baseball",
   name: "People"
})
export class People implements IEntity {
   @PrimaryColumn("text")
   @IsNotEmpty()
   public playerID: string;

   @OneToMany(() => Batting, batting => batting.playerID)
   @Type(() => Batting)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public battingStats: Batting[];

   @OneToMany(() => Fielding, fielding => fielding.playerID)
   @Type(() => Fielding)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public fieldingStats: Fielding[];

   @OneToMany(() => Pitching, pitching => pitching.playerID)
   @Type(() => Pitching)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public pitchingStats: Pitching[];

   @Column("integer")
   @IsInt()
   public birthYear: number;

   @Column("integer")
   @IsInt()
   public birthMonth: number;

   @Column("integer")
   @IsInt()
   public birthDay: number;

   @Column("text")
   @IsString()
   public birthCountry: string;

   @Column("text")
   @IsString()
   public birthState: string;

   @Column("text")
   @IsString()
   public birthCity: string;

   @Column("integer")
   @IsInt()
   public deathYear: number;

   @Column("integer")
   @IsInt()
   public deathMonth: number;

   @Column("integer")
   @IsInt()
   public deathDay: number;

   @Column("text")
   @IsString()
   public deathCountry: string;

   @Column("integer")
   @IsInt()
   public deathState: number;

   @Column("integer")
   @IsInt()
   public deathCity: number;

   @Column("text")
   @IsString()
   public nameFirst: string;

   @Column("text")
   @IsString()
   public nameLast: string;

   @Column("text")
   @IsString()
   public nameGiven: string;

   @Column("integer")
   @IsInt()
   public weight: number;

   @Column("text")
   @IsString()
   public bats: string;

   @Column("text")
   @IsString()
   public throws: string;

   @Column("date")
   @IsDate()
   public debut: Date;

   @Column("date")
   @IsDate()
   public finalGame: Date;

   @Column("text")
   @IsString()
   public retroID: string;

   @Column("text")
   @IsString()
   public bbrefID: string;
}