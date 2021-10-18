import { Expose, Transform } from "class-transformer";
import { IsInt, Min, Max, IsString, IsOptional, IsBoolean } from "class-validator";
import { MoreThanOrEqual, LessThanOrEqual } from "typeorm";
import { IRequest } from "./IRequest";

export class StatsRequest implements IRequest {
  @Expose()
  @IsOptional()
  @IsString()
  playerid: string;

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(1871)
  @Max(2019)
  yearmin: number;

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(1871)
  @Max(2019)
  yearmax: number;

  @Expose() 
  @IsOptional()
  @IsString()
  teamid: string;

  @Expose()
  @IsOptional()
  @IsBoolean()
  postseason: boolean

  public mapToFindOptions(): Object {
    let findOptions = {
      where: {}
    }
    
    if (this.playerid != null) {
      findOptions.where['player'] = {'playerID': this.playerid};
    }
    if (this.yearmin != null) {
      findOptions.where['yearID'] = MoreThanOrEqual(this.yearmin);
    }
    if(this.yearmax != null) {
      findOptions.where['yearID'] = LessThanOrEqual(this.yearmax);
    }
    if (this.teamid != null) {
      findOptions.where['team'] = {'teamID': this.teamid};
    }

    return findOptions;
  }
}