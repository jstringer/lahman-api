import {Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { IsNotEmpty, IsDate, IsString, IsInt, IsArray } from "class-validator";
import { Exclude, Type } from "class-transformer";
import { Batting, BattingPost, Pitching, PitchingPost, Fielding, FieldingPost, FieldingOF, FieldingOFsplit} from "../stats";

@Entity({
   database: "lahman_db",
   schema: "Baseball",
   name: "People"
})
export class People {
   @PrimaryColumn("text")
   @IsNotEmpty()
   public playerID: string;

   @OneToMany(() => Batting, batting => batting.playerID)
   @Type(() => Batting)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public battingStats: Batting[];
   

   @OneToMany(() => BattingPost, battingPost => battingPost.playerID)
   @Type(() => BattingPost)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public battingPost: BattingPost[];

   @OneToMany(() => Fielding, fielding => fielding.playerID)
   @Type(() => Fielding)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public fieldingStats: Fielding[];

   @OneToMany(() => FieldingPost, fieldingPost => fieldingPost.playerID)
   @Type(() => FieldingPost)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public fieldingPost: FieldingPost[];

   @OneToMany(() => FieldingOF, fieldingOf => fieldingOf.playerID)
   @Type(() => FieldingOF)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public fieldingOF: FieldingOF[];

   @OneToMany(() => FieldingOFsplit, fieldingOfsplit => fieldingOfsplit.playerID)
   @Type(() => FieldingOFsplit)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public fieldingOFsplit: FieldingOFsplit[];

   @OneToMany(() => Pitching, pitching => pitching.playerID)
   @Type(() => Pitching)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public pitchingStats: Pitching[];

   @OneToMany(() => PitchingPost, pitchingPost => pitchingPost.playerID)
   @Type(() => PitchingPost)
   @Exclude({toPlainOnly: true})
   @IsArray()
   public pitchingPost: PitchingPost[];

   @Column({ type: "integer", nullable: true })
   @IsInt()
   public birthYear: number;

   @Column({ type: "integer", nullable: true })
   @IsInt()
   public birthMonth: number;

   @Column({ type: "integer", nullable: true })
   @IsInt()
   public birthDay: number;

   @Column({ type: "text", nullable: true })
   @IsString()
   public birthCountry: string;

   @Column({ type: "text", nullable: true })
   @IsString()
   public birthState: string;

   @Column({ type: "text", nullable: true })
   @IsString()
   public birthCity: string;

   @Column({ type: "integer", nullable: true })
   @IsInt()
   public deathYear: number;

   @Column({ type: "integer", nullable: true })
   @IsInt()
   public deathMonth: number;

   @Column({ type: "integer", nullable: true })
   @IsInt()
   public deathDay: number;

   @Column({ type: "text", nullable: true })
   @IsString()
   public deathCountry: string;

   @Column({ type: "text", nullable: true })
   @IsString()
   public deathState: string;

   @Column({ type: "text", nullable: true })
   @IsString()
   public deathCity: string;

   @Column({ type: "text", nullable: true })
   @IsString()
   public nameFirst: string;

   @Column({ type: "text", nullable: true })
   @IsString()
   public nameLast: string;

   @Column({ type: "text", nullable: true })
   @IsString()
   public nameGiven: string;

   @Column({ type: "integer", nullable: true })
   @IsInt()
   public weight: number;
   
   @Column({ type: "integer", nullable: true })
   @IsInt()
   public height: number;

   @Column({ type: "text", nullable: true })
   @IsString()
   public bats: string;

   @Column({ type: "text", nullable: true })
   @IsString()
   public throws: string;

   @Column({ type: "date", nullable: true} )
   @IsDate()
   public debut: Date;

   @Column({ type: "date", nullable: true})
   @IsDate()
   public finalGame: Date;

   @Column({ type: "text", nullable: true })
   @IsString()
   public retroID: string;

   @Column({ type: "text", nullable: true })
   @IsString()
   public bbrefID: string;
}