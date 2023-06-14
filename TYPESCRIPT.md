Este archivo contiene informaciones que están relacionadas con el lenguaje TypeScript.


# Los básicos

Esta sección inicia explicando que TypeScript es un lenguaje de programación que se construye sobre JavaScript y que proporciona una capa de verificación de tipos estática opcional. Los tipos en TypeScript son una forma de declarar qué tipo de valores se esperan en una variable, parámetro o propiedad de objeto. 

Los tipos básicos en TypeScript incluyen: 

- number: un número de coma flotante de 64 bits. 
- string: una cadena de caracteres. 

También cubre los tipos literales, que permiten definir un tipo con un valor específico, y los tipos de unión, que permiten definir una variable que puede tener uno de varios tipos diferentes. 


### Comprobación estática de tipos

En TypeScript, la comprobación estática de tipos se realiza durante el proceso de compilación del código, lo que significa que los errores de tipo se detectan antes de que se ejecute el código. Esto ayuda a prevenir errores comunes y permite a los desarrolladores detectar y corregir problemas de tipo antes de que se conviertan en problemas en tiempo de ejecución. Para realizar la comprobación estática de tipos en TypeScript, se utilizan anotaciones de tipo en las declaraciones de variables, funciones y otros elementos del código. 


### Fallos excepcionales

En TypeScript, los fallos no excepcionales se refieren a errores que no están relacionados con excepciones o errores en tiempo de ejecución, sino más bien a errores en la lógica del programa o en la estructura del código. Estos errores pueden ser difíciles de detectar y pueden llevar a comportamientos inesperados o incorrectos en el programa.

Algunos ejemplos de fallos no excepcionales incluyen:

- Acceder a una propiedad o método de un objeto que no existe.
- Pasar un argumento de tipo incorrecto a una función.
- Intentar asignar un valor de tipo incorrecto a una variable.
- Usar una variable que no ha sido declarada o inicializada.


### Tipos de herramientas 

En TypeScript, existen varias herramientas que se pueden utilizar para mejorar la productividad y la calidad del código. Algunas de las herramientas más comunes son:

1. Compilador de TypeScript: El compilador de TypeScript es una herramienta que convierte el código TypeScript en JavaScript.

2. Editor de código con soporte de TypeScript: Muchos editores de código, como Visual Studio Code, tienen soporte integrado para TypeScript. 

3. Linter: Un linter es una herramienta que analiza el código en busca de problemas de estilo y errores. 

4. Pruebas unitarias: Las pruebas unitarias son pruebas automatizadas que verifican que las funciones y métodos en el código funcionan correctamente. 

5. Depurador: Un depurador es una herramienta que permite a los desarrolladores ejecutar el código paso a paso y ver el estado de las variables y objetos en tiempo de ejecución. 

6. Bundler: Los bundlers son herramientas que permiten empaquetar el código TypeScript y sus dependencias en un archivo JavaScript único. 

7. Gestor de paquetes: Los gestores de paquetes, como npm o yarn, son herramientas que permiten instalar y gestionar las dependencias del proyecto de forma fácil y automatizada. 


### Emitiendo con errores 

Cuando se compila TypeScript, el compilador puede producir una salida con errores si encuentra algún error en el código fuente. Esto puede suceder si hay errores de sintaxis, errores de tipo o cualquier otro tipo de error en el código. Sin embargo, emitir un archivo con errores puede ser peligroso, ya que puede conducir a comportamientos inesperados o incorrectos en la aplicación. Por lo tanto, es importante tratar de evitar emitir archivos con errores siempre que sea posible.


### Tipos explícitos

En TypeScript, los tipos explícitos se refieren a la especificación explícita del tipo de una variable, parámetro de función, propiedad de objeto y otros elementos del código. Al especificar explícitamente el tipo de un elemento, se puede mejorar la legibilidad y la claridad del código, así como prevenir errores de tipo.

#

# Tipos cotidianos

Esta sección vemos algunos tipos cotidianos y más avanzados que nos proporciona TypeScript. Algunos de estos tipos cotidianos incluyen:

- Arrays: una colección de elementos del mismo tipo.
- Interfaces: una descripción de la forma de un objeto, que se puede usar para definir tipos personalizados y mejorar la legibilidad del código.

También cubre otros tipos cotidianos como funciones, tipo de objetos, tipos literales, tipos de unión, tipos de alias, primitivas menos comunes, entre otros.

### Las primitivas: string,number, y Boolean
En TypeScript, las primitivas son los tipos básicos que representan los valores más simples y comunes en la programación. Estos tipos primitivos son:

1. string: representa una cadena de caracteres. Puede contener cualquier caracter, desde letras, números, símbolos y espacios, y se define con la palabra clave "string". Ejemplo: 

2. number: representa un valor numérico, ya sea entero o decimal. Puede ser positivo, negativo o cero, y se define con la palabra clave "number". Ejemplo:

3. boolean: representa un valor lógico que puede ser verdadero o falso, y se define con la palabra clave "boolean".

### Arreglos

En TypeScript, los arreglos (también conocidos como arrays) son una estructura de datos muy útil que permite almacenar y manipular una colección de elementos del mismo tipo. Se pueden definir utilizando la sintaxis "tipoDeDato[]" y se pueden manipular utilizando una serie de métodos predefinidos.

### Any

En TypeScript, "any" es un tipo de datos especial que se utiliza cuando no se conoce el tipo exacto de una variable, o cuando se quiere desactivar temporalmente la comprobación de tipos en un punto específico del código.
Cuando se utiliza "any", TypeScript no realiza ninguna comprobación de tipos en la variable, lo que significa que se pueden asignar valores de cualquier tipo a la variable sin generar errores de compilación. 

### Funciones

En TypeScript, las funciones son bloques de código que realizan una tarea específica y pueden ser llamadas desde diferentes partes del programa. TypeScript también permite definir funciones con parámetros opcionales, parámetros por defecto y funciones de flecha (arrow functions), entre otras características avanzadas.

### Tipos de objetos

Existen varios tipos de objetos que se pueden utilizar para definir variables y funciones más complejas, como Object, Interface y Class. Cada uno de estos tipos tiene sus propias características y sintaxis para definirlos, y se utilizan en función de las necesidades específicas de cada proyecto.

### Tipos de Unión

Los tipos de unión son una característica importante de TypeScript que permite definir variables y parámetros con varios tipos posibles. Se utilizan con el símbolo "|" entre los tipos que se quieren unir, y son útiles para manejar situaciones en las que una variable o parámetro puede tener diferentes tipos en diferentes situaciones.

### Tipo de alias

Los tipos de alias son una característica útil de TypeScript que permiten crear un nombre alternativo para un tipo existente. Se utilizan para definir tipos más complejos y legibles, y también facilitan la reutilización de tipos en diferentes partes del código. Se pueden utilizar para definir alias para tipos simples, objetos, arreglos, funciones y otros tipos de datos.

### Tipos literales

Los tipos literales permiten definir un tipo de dato específico que solo puede tomar un conjunto de valores concretos. Se utilizan para crear código más seguro y legible, y se pueden combinar con otros tipos de datos y tipos de unión para definir tipos más complejos.

### Null y undefined
Los valores primitivos "null" y "undefined" son importantes en TypeScript para representar valores nulos o indefinidos, y para evitar errores en tiempo de ejecución al trabajar con variables que pueden ser nulas o indefinidas. Además, los operadores de "nullish coalescing" y "optional chaining" son útiles para manejar valores nulos o indefinidos de forma segura.

### Primitivas menos comunes
TypeScript admite varios tipos de datos primitivos menos comunes, como "bigint" y "symbol" que pueden ser útiles en ciertas situaciones para crear código más seguro y flexible. Y es de suma importancia comprender los diferentes tipos de datos primitivos disponibles para poder utilizarlos de manera efectiva en el código.

#

# Estrechamiento

Esta sección explica que cuando se trabaja con tipos complejos, es necesario reducir el tipo de una variable a un tipo más específico. La reducción de tipos permite al compilador de TypeScript inferir más información sobre el tipo de una variable.

El documento cubre varios mecanismos de reducción de tipos, incluyendo:
- Typeof tipo guardias
- Reducción de la igualdad
- Análisis de flujo de control

El documento también cubre algunos casos de reducción de tipos avanzados, como la reducción de tipos con null y undefined, la reducción de tipos con never, y la reducción de tipos con unknown.

### Typeof tipo guardias

Los "typeof tipo guardias" son una técnica para estrechar el tipo de una variable en TypeScript utilizando el operador "typeof" para obtener el tipo de una variable en tiempo de ejecución. Los typeof tipo guardias se utilizan en combinación con una expresión "if" para verificar el tipo de una variable y estrechar su tipo en consecuencia.

### Estrechamiento de veracidad

Se utiliza para estrechar el tipo de una variable en función de su valor "verdadero" o "falso". Esto se basa en el hecho de que, en JavaScript, algunos valores se evalúan como "verdaderos" y otros como "falsos" cuando se utilizan en una expresión booleana. El estrechamiento de veracidad se puede utilizar para mejorar la seguridad y la legibilidad del código en TypeScript.

### Reducción de la igualdad

Es una técnica en TypeScript que se utiliza para estrechar el tipo de una variable en función de su valor en una expresión de igualdad. La reducción de la igualdad se basa en la comparación de valores utilizando el operador de igualdad "==" puede llevar a resultados inesperados debido a las reglas de conversión de tipos. La reducción de la igualdad es una herramienta útil para mejorar la seguridad y la legibilidad del código en TypeScript.


### El in estrechamiento del operador

Es una técnica utilizada para estrechar el tipo de una variable en función de si una propiedad específica existe en el objeto. Esta técnica se basa en el hecho de que, en JavaScript, se puede verificar si una propiedad existe en un objeto utilizando el operador "in". 


### Instanceof estrechamiento

Permite verificar si un objeto pertenece a una clase determinada. También tiene en cuenta la herencia. Tal verificación puede ser necesaria en muchos casos. Aquí lo usaremos para construir una función polimórfica, la que trata los argumentos de manera diferente dependiendo de su tipo.

### Análisis de flujo de control 

TypeScript utiliza este análisis de flujo para limitar los tipos a medida que encuentra asignaciones y protecciones de tipo. Cuando se analiza una variable, el flujo de control puede dividirse y volver a fusionarse una y otra vez, y se puede observar que esa variable tiene un tipo diferente en cada punto.

### Uso de predicados de tipo

Los predicados de tipo (también conocidos como "type predicates" en inglés) son funciones que se utilizan en TypeScript para verificar si un valor es de un tipo específico. Los predicados de tipo son funciones que devuelven un valor booleano y que tienen como parámetro una variable con un tipo genérico. Los predicados de tipo se utilizan principalmente para mejorar la seguridad y la legibilidad del código en TypeScript, ya que permiten estrechar el tipo de una variable en función de una condición específica.

### Funciones de aserción 

Son una herramienta en TypeScript que permiten al programador indicar explícitamente el tipo de una variable, incluso si TypeScript no puede inferir el tipo automáticamente. Las funciones de aserción se utilizan para indicar al compilador que el programador tiene conocimiento sobre el tipo real de una variable y que desea forzar ese tipo en lugar de dejar que TypeScript lo infiera. Las funciones de aserción se escriben con la sintaxis "<tipo>valor" o "valor as tipo", donde "tipo" es el tipo que se desea asignar a la variable y "valor" es la variable que se desea asignar.
