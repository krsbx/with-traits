import Generator from './Generator';

class Traits<T, U, V extends U extends NonNullable<U> ? T & U : T> {
  private generator: Generator<T, U, V>;

  constructor(baseClass: T, extendClass?: U) {
    this.generator = new Generator(baseClass, extendClass);
  }

  // eslint-disable-next-line no-shadow
  public static create<T, U>(baseClass: T, extendClass?: U) {
    const traits = new Traits(baseClass, extendClass);
    return traits.generator;
  }
}

export default Traits;
