export function assertUnreachable(never: never): any {
  throw new Error('Didnt expect to get here, but it did');
}

export function tsShouldBeNever(never: never) {
  return never;
}
