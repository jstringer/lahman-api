declare namespace Express {
  interface Request {
    findOptions?: Object;
  }
  interface Response {
    results: any[] | any;
    limit?: number;
    nextPage?: URL;
  }
}