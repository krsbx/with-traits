export const TYPES = {
  OBJECT: 'object',
  FUNCTION: 'function',
  NUMBER: 'number',
  STRING: 'string',
  BOOLEAN: 'boolean',
  SYMBOL: 'symbol',
};

export const EXCLUDE_FUNCTIONS = {
  CONSTRUCTOR: 'constructor',
  HAS_OWN_PROPERTY: 'hasOwnProperty',
  IS_PROTOTYPE_OF: 'isPrototypeOf',
  PROPERTY_IS_ENUMERABLE: 'propertyIsEnumerable',
  TO_STRING: 'toString',
  VALUE_OF: 'valueOf',
  TO_LOCALE_STRING: 'toLocaleString',
};

export const EXCLUDE_FUNCTION_START_WITH = {
  '#': '#',
  $: '$',
  _: '_',
  __: '__',
};
