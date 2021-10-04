import { IsInt, Min, Max, IsString, IsOptional } from "class-validator";

export class SearchQuery {
  @IsOptional() 
  @IsString()
  playerId: string;

  @IsOptional()
  @IsInt()
  @Min(1871)
  @Max(2021)
  year: number;

  @IsOptional()
  @IsString()
  teamId: string;

  public transform(): Object {
    let findOptions = {
      where: {}
    }
    if (this.playerId) {
      findOptions.where['player'] = {'playerID': this.playerId};
    }
    if (this.year) {
      findOptions.where["yearID"] = this.year;
    }
    if (this.teamId) {
      findOptions.where['team'] = {'teamID' : this.teamId};
    }

    return findOptions;
  }
}