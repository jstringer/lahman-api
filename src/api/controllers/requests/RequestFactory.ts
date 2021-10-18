import { StatsRequest } from "./StatsRequest";
import { TeamsRequest } from "./TeamsRequest";

export class RequestFactory {
  static getRequestInstance(urlPath: string): any {
    if(urlPath.includes('stats')) {
      return new StatsRequest();
    }
    else if (urlPath.includes('teams')) {
      return new TeamsRequest();
    }
    else {
      //We should never get here
      throw new Error('Bad URL path')
    }
  }
}