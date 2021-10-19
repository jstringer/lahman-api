export interface IFindOptions {
  where?: {},
  take?: number,
  skip?: number,
  cache?: boolean
}

export interface IRequest {
  offset: number;
  limit: number;
  mapToFindOptions(): {};
}