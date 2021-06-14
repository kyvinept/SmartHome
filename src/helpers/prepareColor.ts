export const prepareColor = (color: string) => {
  const serverColor = '0x' + color.substring(1);
  return serverColor;
};
