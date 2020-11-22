export function dateTransform(value: string | Date) {
  if (value === null) {
    return value;
  }
  if (typeof value === 'string') {
    const date = new Date(value);
    return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
  } else if (value instanceof Date) {
    return new Date(value.getTime() - (value.getTimezoneOffset() * 60000)).toJSON();
  }
}