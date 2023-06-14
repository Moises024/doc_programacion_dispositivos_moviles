/** Basic */

/** Comprobación estática de tipos

Es muy importante la comprobación estática de tipos porque es un proceso que se hace en tiempo 
de compilación para garantizar que el tipo de datos que contiene la variable, expresión o función 
se ajuste a las reglas de tipos definidas por el lenguaje de programación.
*/

const message = "hello!";
message();

/** El tipo de dato String no puede ser llamado como una función: Para que funcione, debemos llamar 
la variable message con la función console.log(message);
*/



/** Fallos excepcionales

Son situaciones que vienen de forma imprevistas y ocurren durante la ejecución de un programa y que i
nterrumpen su funcionamiento normal.
*/

 name: "Daniel",
  age: 26,
};
user.location;

/** Este código detecta error en la palabra location porque no está definidida en la instancia
*/



/** Tsc

Es un lenguaje de programación en sí mismo, mientras que TypeScript Compiler es la herramienta que se 
utiliza para compilar el código TypeScript en código JavaScript.
*/

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
 
greet("Brendan");

/** La función ha sido definida con 2 parámetros, y se está llamando únicamente con un parámetro. Además, al 
definir la función, no se está definiendo el tipo de “person” ni “date”, por lo que debemos especificar que “person”
se trata de un string, y date de un objeto Date().
*/



/** Everyday types*/

/** Las primitivas: string,number, y Boolean

Son tipos de datos básicos que representan valores simples y no objetos.

String: Este tipo de datos representa una cadena de caracteres.
Number: Este tipo de datos representa un número, puede ser entero o decimal.
Boolean: Este tipo representa un valor de verdadero/falso.  Estos valores pueden definirse utilizando las palabras claves true
o false.
*/

use strict";
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());

/** Da error porque no se está definiendo el tipo para person ni date, por lo que debemos especificar que person se trata de un string y 
date de un tipo Date().
*/



/** Any 

Es un tipo particular que representa cualquier tipo de valor. TypeScript no realiza comprobaciones del tipo en el valor, lo que significa
que operación o acceso a la propiedad en ese calor no se verifica en el tiempo de compilación.
*/

let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

let obj: any = { x: 0 };
obj.bar = 100;
obj = "hello";
const n: number = parseInt(obj);
console.log(n);



/** Funciones

Es un conjunto o grupo de sentencias que solucionan un problema particular. Las funciones tienen una cabecera que es donde se determina el
nombre de la función y un cuerpo que se refiere a las instrucciones.
*/

const names = ["Alice", "Bob", "Eve"]; 

names.forEach(function (s) {
  console.log(s.toUpperCase());
})

names.forEach((s) => {
  console.log(s.toUpperCase());
});



/** Tipos de objetos

Se encargan de determinar la estructura y los tipos de propiedades de un objeto.  Para crear este tipo se utiliza la sintaxis de llaves {} 
y especificando las propiedades del objeto y sus tipos.
*/

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });



/** Tipos de Unión

Son aquellos que tienen la función de definir un tipo que puede ser uno de varios tipos diferentes. Este tipo se crea utilizando el
operador | entre dos o más tipos.
*/

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    
    console.log("Hello, " + x.join(" and "));
  } else {
  
    console.log("Welcome lone traveler " + x);
  }
}

welcomePeople(["Jatnna", "Mark"])



/** Tipo de alias

Es una característica que permite definir un nombre personalizado para un tipo existente. Los tipos de alias se crean utilizando la
palabra clave type, seguida del nombre del alias y la definición del tipo.
*/

type Point = {
  x: number;
  y: number;
};
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });



/** Tipos literales

Son aquellos que definen los tipos que representan valores específicos y limitar el conjunto de valores que una variable puede tomar.
*/

function printText(s: string, alignment: "left" | "right" | "center") {
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

/** Esto da error porque la función prinTexts está esperando como parámetro center, no centre. 
*/

function printText(s: string, alignment: "left" | "right" | "center") {
}
console.log(printText("Hello, world", "left"));
console.log(printText("left, right", "center"));



/** Null y undefined

Son dos valores especiales que se utilizan para indicar la ausencia de un valor o la falta de asignación de una variable. Null se 
utiliza para indicar que una variable no tiene un valor, es decir, que el valor de la variable es intencionalmente "nada".
*/

function doSomething(x: string | null) {
  if (x === null) {
    
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}



/** Primitivas menos comunes

Algunos de estos tipos de datos primitivos menos comunes son:

BigInt: Es un tipo de dato numérico que se utiliza para representar números enteros grandes que no se pueden representar con el tipo de
dato number. 

Symbol: Es un tipo de dato que se utiliza para crear identificadores únicos e inmutables. Los símbolos se utilizan a menudo como 
claves de propiedades de objetos, para evitar colisiones con otras propiedades.
*/

const firstName = Symbol("name");
const secondName = Symbol("name");
 
if (firstName === secondName) {
}

/** Los tipos “typeof firstName” y “typeof secondName” da error porque no se superponen. 
*/



/** Narrowing */

/** Typeof tipo guardias

Técnica que se utilizan para reducir el tipo de una variable en función de su tipo en tiempo de ejecución. Por lo tanto, esta técnica 
permite hacer comprobaciones de tipo más precisas y evitar errores de tipo durante la ejecución del programa. 
*/

function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
  }
}

/** Para resolver el error debemos agregar en la condicional la verificación de si strs es null.
*/



/** Estrechamiento de veracidad

Es una característica que nos permite reducir el tipo de una variable a un subconjunto específico de valores que son considerados 
verdaderos en JavaScript.
*/

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}



/** Reducción de la igualdad

Es un proceso en el que uno o ambos valores son convertidos de forma automática a un tipo común antes de realizar la comparación. 
Es bueno saber que la reducción de la igualdad puede dar lugar a resultados inesperados y errores en el código.
*/

function example(x: string | number, y: string | boolean) {
  if (x === y) {
   
    x.toUpperCase();
          
    y.toLowerCase();
          
  } else {
    console.log(x);
              
    console.log(y);   
  }
}
example("Type", "Script");



/** Instanceof estrechamiento

Es un operador utilizado para verificar si un objeto es una instancia de una clases o un función específica. Cabe destacar que este
operador devuelve true si el objeto es una instancia de la clase o la función y false en caso contrario.
*/

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
               
(parameter) x: Date
  } else {
    console.log(x.toUpperCase());
               
(parameter) x: string
  }
}



/** Análisis de flujo de control

Es una técnica que ayuda a mejorar la calidad del códigos y también a detectar problemas de rendimiento en el código.
*/

function example() {
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
 
  console.log(x);
             
  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);

  } else {
    x = 100;
    console.log(x);
               
  }
 
  return x;       
}



/** Uso de predicados de tipo

Son características que permiten especificar condiciones que deben cumplirse para que una variable sea considerada de un tipo en
particular.
*/

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}



/** Funciones de aserción

Es un mecanismo utilizado para indicar al compilador que se tiene la certeza sobre el tipo de una variable o expresión, incluso
cuando el compilador no puede determinarlo de forma.
*/

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2;
  }
}
