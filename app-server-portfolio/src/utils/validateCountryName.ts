
const regex: any = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'’-]+$/;

const validateCountryName = (countryName: string): boolean => regex.test(countryName);

export default validateCountryName;
