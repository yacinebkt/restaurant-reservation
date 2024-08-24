export const isObjectNotEmpty = (obj: Record<string, any>): boolean => {
  return Object.keys(obj).length > 0;
};

export const objectToArray = (input: { [key: string]: any }) => {
  if (typeof input !== 'object' || input === null) {
    return [];
  }

  return Object.keys(input).map((key) => ({
    key,
    value: input[key],
  }));
};
