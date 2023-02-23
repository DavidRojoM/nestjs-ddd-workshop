export abstract class UseCase<TIn = never, TOut = void> {
  abstract handle(input: TIn): Promise<TOut>;
}
