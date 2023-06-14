/** Los básicos */

/** Comprobación estática de tipos
Es muy importante la comprobación estática de tipos porque es un proceso que se hace en tiempo de compilación para garantizar que el tipo de datos que contiene la variable, expresión o función se ajuste a las reglas de tipos definidas por el lenguaje de programación.
*/

const message = "hello!";
 
message();


/** Fallos excepcionales
Son situaciones que vienen de forma imprevistas y ocurren durante la ejecución de un programa y que interrumpen su funcionamiento normal.
*/

 name: "Daniel",
  age: 26,
};
user.location;

/* Este código detecta error en la palabra location porque no está definidida en la instancia*/


/** Tsc
Es un lenguaje de programación en sí mismo, mientras que TypeScript Compiler es la herramienta que se utiliza para compilar el código TypeScript en código JavaScript.
*/

console.log("Hello world!");


/** Tipos explícitos
Este tipo es utilizado para especificar el tipo de una variable, un parámetro de una función o una propiedad de un objeto de forma explícita. También se pueden utilizar en la determinación de objetos e interfaces.
*/

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());


/** Tipos cotidianos */

/** Las primitivas: string,number, y Boolean
Son tipos de datos básicos que representan valores simples y no objetos.

String: Este tipo de datos representa una cadena de caracteres.
Number: Este tipo de datos representa un número, puede ser entero o decimal.
Boolean: Este tipo representa un valor de verdadero/falso.  Estos valores pueden definirse utilizando las palabras claves true o false.
*/

/** Arreglos
Es una variable que se utiliza para almacenar diferentes tipos de datos. Básicamente almacena diferentes elementos en una caja y luego se puede evaluar con la variable. Cabe destacar que los arreglos se pueden manipular usando varias acciones conocidas como métodos.
*/

/** Any 
Es un tipo particular que representa cualquier tipo de valor. TypeScript no realiza comprobaciones del tipo en el valor, lo que significa que operación o acceso a la propiedad en ese calor no se verifica en el tiempo de compilación.
*/

/** Funciones
Es un conjunto o grupo de sentencias que solucionan un problema particular. Las funciones tienen una cabecera que es donde se determina el nombre de la función y un cuerpo que se refiere a las instrucciones.
*/

const names = ["Alice", "Bob", "Eve"]; 

names.forEach(function (s) {
  console.log(s.toUpperCase());
})

names.forEach((s) => {
  console.log(s.toUpperCase());
});


/** Tipos de objetos
Se encargan de determinar la estructura y los tipos de propiedades de un objeto.  Para crear este tipo se utiliza la sintaxis de llaves {} y especificando las propiedades del objeto y sus tipos.
*/

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


/** Tipos de Unión
Son aquellos que tienen la función de definir un tipo que puede ser uno de varios tipos diferentes. Este tipo se crea utilizando el operador | entre dos o más tipos.
*/

function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}


/** Tipo de alias
Es una característica que permite definir un nombre personalizado para un tipo existente. Los tipos de alias se crean utilizando la palabra clave type, seguida del nombre del alias y la definición del tipo.
*/

type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });


/** Tipos literales
Son aquellos que definen los tipos que representan valores específicos y limitar el conjunto de valores que una variable puede tomar.
*/

/** Null y undefined
Son dos valores especiales que se utilizan para indicar la ausencia de un valor o la falta de asignación de una variable. Null se utiliza para indicar que una variable no tiene un valor, es decir, que el valor de la variable es intencionalmente "nada".
*/

/** Primitivas menos comunes

Algunos de estos tipos de datos primitivos menos comunes son:
BigInt: Es un tipo de dato numérico que se utiliza para representar números enteros grandes que no se pueden representar con el tipo de dato number. 
Symbol: Es un tipo de dato que se utiliza para crear identificadores únicos e inmutables. Los símbolos se utilizan a menudo como claves de propiedades de objetos, para evitar colisiones con otras propiedades.
*/

/** Estrechamiento */

/** Typeof tipo guardias
Técnica que se utilizan para reducir el tipo de una variable en función de su tipo en tiempo de ejecución. Por lo tanto, esta técnica permite hacer comprobaciones de tipo más precisas y evitar errores de tipo durante la ejecución del programa. 
*/

/** Estrechamiento de veracidad
Es una característica que nos permite reducir el tipo de una variable a un subconjunto específico de valores que son considerados verdaderos en JavaScript.
*/

/** Reducción de la igualdad
Es un proceso en el que uno o ambos valores son convertidos de forma automática a un tipo común antes de realizar la comparación. Es bueno saber que la reducción de la igualdad puede dar lugar a resultados inesperados y errores en el código.
*/

/** Instanceof estrechamiento
Es un operador utilizado para verificar si un objeto es una instancia de una clases o un función específica. Cabe destacar que este operador devuelve true si el objeto es una instancia de la clase o la función y false en caso contrario.
*/

/** Análisis de flujo de control
Es una técnica que ayuda a mejorar la calidad del códigos y también a detectar problemas de rendimiento en el código.
*/

/** Uso de predicados de tipo
Son características que permiten especificar condiciones que deben cumplirse para que una variable sea considerada de un tipo en particular.
*/

/** Funciones de aserción
Es un mecanismo utilizado para indicar al compilador que se tiene la certeza sobre el tipo de una variable o expresión, incluso cuando el compilador no puede determinarlo de forma.
*/

