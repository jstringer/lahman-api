import { IRequest } from "./IRequest";
import { StatsRequest } from "./StatsRequest";
import { TeamsRequest } from "./TeamsRequest";

export class RequestFactory {
  static getRequestInstance(urlPath: string): IRequest {
    if(urlPath.includes('stats')) {
      return new StatsRequest();
    }
    else if (urlPath.includes('teams')) {
      return new TeamsRequest();
    }
  }
}