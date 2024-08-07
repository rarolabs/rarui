const toCamelCase = (str: string) =>
  str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

const parseValue = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

export const CaptureCssProperties = (
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  const originalMethod = descriptor.value;

  // eslint-disable-next-line
  descriptor.value = function (...args: any[]) {
    const props = Array.from((this as any).el.attributes).reduce(
      (acc: any, { name, value }: any) => {
        const camelCasedName = toCamelCase(name);
        if (camelCasedName !== "style" && camelCasedName !== "class") {
          acc[camelCasedName] = parseValue(value);
        }
        return acc;
      },
      {},
    );

    (this as any).props = props;
    return originalMethod.apply(this, args);
  };
};
