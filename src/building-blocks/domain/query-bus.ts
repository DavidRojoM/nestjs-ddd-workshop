export abstract class QueryBus {
  abstract execute<TResult = any>(query: any): Promise<TResult>;
}
