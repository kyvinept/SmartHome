export const clearTimezone = (date: Date) => {
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const finalDate = new Date(date.getTime() + userTimezoneOffset);
  return finalDate;
};

export const setTimezone = (date: Date) => {
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const finalDate = new Date(date.getTime() - userTimezoneOffset);
  return finalDate;
};
