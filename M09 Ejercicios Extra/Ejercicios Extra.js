/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:


   // var arreglo = [];
   // arreglo = [...arreglo, Object.entries(objeto)]
   // return objeto

   var arreglo = [];
   arreglo = [...Object.entries(objeto)]
   return arreglo
   // var arreglo = []
   // for (var clave in object) {
   //    arreglo.push([clave, object[clave]])
   // }

   // return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var str = string.split('').sort().join('');

   const objeto = {};
   for (i = 0; i < str.length; i++) {
      if (objeto.hasOwnProperty(str[i])) {
         objeto[str[i]] += 1;
      }
      else {
         objeto[str[i]] = 1
      }
   }

   return (objeto)
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   // var mayuscula = [];
   // var minuscula = [];
   // for (var i = 0; i < string.length; i++) {
   //    if (string[i].toUpperCase() === string[i]) {
   //       mayuscula.push(string[i]);
   //    }
   //    else {
   //       minuscula.push(string[i]);
   //    }
   // }

   // var resultado = mayuscula.concat(minuscula).join('');
   // return resultado;


   var mayuscula = "";
   var minuscula = "";
   for (var i = 0; i < string.length; i++) {
      if (string[i].toUpperCase() === string[i]) {
         mayuscula += string[i];
      }
      else {
         minuscula += string[i];
      }
   }

   var resultado = mayuscula + minuscula
   return resultado;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var array = frase.split(' ');

   var array2 = [];

   array.forEach((elem) => {
      var str = '';
      for (i = elem.length - 1; i >= 0; i--) {
         str += elem[i];
      }
      array2.push(str);
   })
   str = array2.join(' ')
   return str;

   // 1 2 3 4 5    length
   // 0 1 2 3 4    length - 1
   // 4 3 2 1 0    i >= 0
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var strNumero = numero.toString();
   var strInvertido = '';

   for (i = strNumero.length - 1; i >= 0; i--) {
      strInvertido += strNumero[i];
   }

   if (strInvertido === strNumero) {
      return "Es capicua"
   }
   else {
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   newStr = '';
   for (i = 0; i < string.length; i++) {
      if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') {
         newStr += string[i];
      }
   }
   return newStr
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function (a, b) {
      return a.length - b.length;
   })
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArreglo = []
   array1.forEach(element => {
      for (var i = 0; i < array2.length; i++) {
         if (element === array2[i]) {
            nuevoArreglo.push(element)
         }
      }
   });
   var arregloResultado = Array.from(new Set(nuevoArreglo));

   return arregloResultado
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
