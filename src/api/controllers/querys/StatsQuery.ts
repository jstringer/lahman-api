import { IsInt, Min, Max, IsString } from "class-validator";
import { ObjectLiteral } from "../../../database/lib/Utils";

export class StatsQuery {
  @IsString()
  playerId: string;

  @IsInt()
  @Min(1871)
  @Max(2021)
  year: number;

  @IsString()
  teamId: string;

  public transform() {
    let findOptions = {
      where: {}
    }
    if (this.playerId) {
      findOptions.where["playerID"] = this.playerId; 
    }
    if (this.year) {
      findOptions.where["yearID"] = this.year;
    }
    if (this.teamId) {
      findOptions.where["teamID"] = this.teamId;
    }

    return findOptions;
  }
}