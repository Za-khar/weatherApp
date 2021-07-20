export const converKelvinToCelsius = (kel: number) => {
  return `${Math.round(kel - 273.15)}` + String.fromCharCode(8451);
};
