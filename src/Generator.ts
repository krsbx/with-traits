/* eslint-disable class-methods-use-this */
import _ from 'lodash';
import {
  getClassFunctionByName,
  getFunctionNamesFromClass,
  isFunctionOrObject,
} from './utils/common';

class Generator<T, U, V extends U extends NonNullable<U> ? T & U : T> {
  private baseClass: T;

  private extend?: U;

  constructor(baseClass: T, extend?: U) {
    if (_.isNil(baseClass))
      throw new Error('baseClass cannot be null or undefined');

    this.baseClass = baseClass;

    if (!_.isNil(extend))
      if (isFunctionOrObject(extend)) this.extend = extend;
      else throw new Error('All of the traits should be an object');
  }

  public with<W>(
    concatWith: W
  ): Generator<V, W, W extends NonNullable<W> ? V & W : V> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!this.extend) return new Generator(this.baseClass, concatWith);

    const obj = new Generator(this.baseClass, this.extend).generate();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Generator(obj, concatWith);
  }

  public generate() {
    const copy = _.cloneDeep(this.baseClass);

    if (this.extend && _.isObject(this.extend))
      _.assign(copy, {
        ...getFunctionNamesFromClass(this.extend).reduce(
          (prev, curr) => ({
            ...prev,
            [curr]: getClassFunctionByName(this.extend, curr),
          }),
          {}
        ),
      });

    return copy as unknown as V;
  }
}

export default Generator;
