import { Expose, Transform } from "class-transformer";
import { IsInt, Min, Max, IsString, IsOptional } from "class-validator";

export class StatsRequest {
  @Expose() 
  @IsOptional() 
  @IsString()
  playerid: string;

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(1871)
  @Max(2021)
  year: number;

  @Expose() 
  @IsOptional()
  @IsString()
  teamid: string;
  
}