import {Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Batting } from "./Batting";
import { Fielding } from "./Fielding";
import { Pitching } from "./Pitching";

@Entity({
   database: "lahman_db",
   schema: "Baseball",
   name: "People"
})
export class People {
   @PrimaryColumn("text")
   public playerID: string;

   @OneToMany(() => Batting, batting => batting.playerID)
   public battingStats: Batting[];

   @OneToMany(() => Fielding, fielding => fielding.playerID)
   public fieldingStats: Fielding[];

   @OneToMany(() => Pitching, pitching => pitching.playerID)
   public pitchingStats: Pitching[];

   @Column("integer")
   public birthYear: number;

   @Column("integer")
   public birthMonth: number;

   @Column("integer")
   public birthDay: number;

   @Column("text")
   public birthCountry: string;

   @Column("text")
   public birthState: string;

   @Column("text")
   public birthCity: string;

   @Column("integer")
   public deathYear: number;

   @Column("integer")
   public deathMonth: number;

   @Column("integer")
   public deathDay: number;

   @Column("text")
   public deathCountry: string;

   @Column("integer")
   public deathState: number;

   @Column("integer")
   public deathCity: number;

   @Column("text")
   public nameFirst: string;

   @Column("text")
   public nameLast: string;

   @Column("text")
   public nameGiven: string;

   @Column("integer")
   public weight: number;

   @Column("text")
   public bats: string;

   @Column("text")
   public throws: string;

   @Column("date")
   public debut: Date;

   @Column("date")
   public finalGame: Date;

   @Column("text")
   public retroID: string;

   @Column("text")
   public bbrefID: string;
}