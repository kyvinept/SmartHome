export const interpolate = (
  value: number,
  inputArray: number[],
  outputArray: number[],
) => {
  const rangeValue = (inputArray[1] - inputArray[0]) / value;
  const outputValue = (outputArray[1] - outputArray[0]) / rangeValue;
  const interpolatedValue = outputArray[0] + outputValue;
  console.log(interpolatedValue);
  return interpolatedValue;
};
