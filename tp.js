/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  if (typeof texto != 'string') {
    return -1
  }

  return (texto.match(/[AEIOUaeiou]/gi) || []).length
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return 'https://github.com/luvitale/NodeTP1.git'
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  return class Clase {
    constructor(texto) {
      Clase._contadorInstancias = (Clase._contadorInstancias || 0) + 1
      this._texto = texto
    }

    get texto() {
      return this._texto
    }

    contadorPalabras() {
      if (typeof this.texto != 'string') {
        return -1
      }

      return this.texto == '' ? 0 : this.texto.split(' ').length
    }

    hayNumeros() {
      if (typeof this.texto != 'string') {
        return -1
      }

      return this.texto.match(/[0-9]/gi) != null
    }

    static get contadorInstancias() {
      return Clase._contadorInstancias
    }
  }
}

module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};
