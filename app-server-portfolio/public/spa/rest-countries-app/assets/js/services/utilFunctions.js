
const regex= /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s'’-]+$/;


const utilFunctions = {
    validateNameCountry: name =>  regex.test(name)
}

export default utilFunctions;