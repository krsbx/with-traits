import {
  EXCLUDE_FUNCTIONS,
  EXCLUDE_FUNCTION_START_WITH,
  TYPES,
} from './constant';

export const hasOwnProperty = <X extends object, Y extends PropertyKey>(
  obj: X,
  property: Y
  // eslint-disable-next-line no-prototype-builtins
): obj is X & Record<Y, unknown> => obj.hasOwnProperty(property);

export const isInstanceofClass = <T>(obj: T) => {
  const objName = (obj as object).constructor.name;

  return !Object.values(TYPES)
    .map((type) => type[0].toUpperCase() + type.slice(1))
    .includes(objName);
};

export const isFunctionOrObject = <T>(obj: T) => {
  return typeof obj === 'object' || typeof obj === 'function';
};

export const isAllFunctionOrObject = <T extends unknown[]>(objs: T) => {
  return objs.map(isFunctionOrObject).some((val) => val);
};

export const getFunctionNamesFromClass = <T>(obj: T) => {
  return Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).filter(
    (val) =>
      Object.values(EXCLUDE_FUNCTION_START_WITH)
        .map((v) => val.startsWith(v))
        .some((v) => !v) && !Object.values(EXCLUDE_FUNCTIONS).includes(val)
  );
};

export const getClassFunctionByName = <T>(obj: T, name: string) => {
  return (obj as Record<string, unknown>)[name];
};
