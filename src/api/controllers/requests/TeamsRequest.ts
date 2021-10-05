import {Expose, Transform} from 'class-transformer';
import { IsBoolean, IsEnum, IsOptional, IsString, Max, Min } from 'class-validator';
import { LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { IRequest } from './IRequest';

export class TeamsRequest implements IRequest {
  @Expose() 
  @IsOptional()
  @IsString()
  franchid: string;

  @Expose()
  @IsOptional()
  @Max(2019)
  yearmin: number;

  @Expose()
  @IsOptional()
  @Max(2019)
  yearmax: number;

  public mapToFindOptions(): Object {
    let findOptions = {
      where: {}
    }

    if(this.franchid) {
      findOptions.where['franchise'] = { 'franchID': this.franchid }
    }
    if(this.yearmin) {
      findOptions.where['yearID'] = MoreThanOrEqual(this.yearmin);
    }
    if (this.yearmax) {
      findOptions.where['yearID'] = LessThanOrEqual(this.yearmax);
    }
    return findOptions;
  }
}