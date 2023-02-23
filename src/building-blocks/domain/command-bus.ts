export abstract class CommandBus {
  abstract execute<R = any>(command: any): Promise<R>;
}
