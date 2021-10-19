import { Expose, Transform, Type } from "class-transformer";
import { IsInt, Min, Max, IsString, IsOptional, IsBoolean, IsNumber } from "class-validator";
import { MoreThanOrEqual, LessThanOrEqual } from "typeorm";
import { IRequest, IFindOptions } from "./IRequest";

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
  @Type(() => Number) 
  yearmin: number;

  @Expose()
  @IsOptional()
  @IsInt()
  @Min(1871)
  @Max(2019)
  @Type(() => Number)
  yearmax: number;

  @Expose() 
  @IsOptional()
  @IsString()
  teamid: string;

  @Expose()
  @IsOptional()
  @IsBoolean()
  postseason: boolean

  @Expose()
  @IsOptional()
  @IsNumber()
  @Type(() => Number) 
  offset: number;

  @Expose()
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number) 
  limit: number;

  public mapToFindOptions(): Object {
    let findOptions: IFindOptions = {};

    if (this.playerid || this.yearmin || this.yearmax || this.teamid) {
      findOptions.where = {}
    }

    else {
      findOptions.cache = true;
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
    if (this.limit != null) {
      findOptions.take = this.limit;
      findOptions.cache = true;
    }
    if (this.offset != null) {
      findOptions.skip = this.offset;
    }

    return findOptions;
  }
}