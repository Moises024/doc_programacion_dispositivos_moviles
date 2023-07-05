# typescript_interview

### Nombre: Moisés Ricardo Zabala Bueno   
### Matricula: 20200927

#

## Ejercicios: 
### 1. Este problema fue pedido por Amazon. 

Existe una escalera con N escalones, y puedes subir 1 o 2 escalones a la vez. Dado N, escribe una función que devuelva el número de formas únicas en que puedes subir la escalera. El orden de los pasos importa. 

 Por ejemplo, si N es 4, entonces hay 5 formas únicas: 

1, 1, 1, 1

2, 1, 1 

1, 2, 1 

1, 1, 2 

2, 2 

¿Qué pasaría si, en lugar de poder subir 1 o 2 escalones a la vez, pudieras subir cualquier número de un conjunto de enteros positivos X? Por ejemplo, si X = {1, 3, 5}, podrías subir 1, 3 o 5 escalones a la vez. 

Realiza un programa en Typescript que imprima por consola las formas únicas de subir las escaleras.  

# 


### Explicación del problema

La función `countUniqueSteps` utiliza un bucle para iterar sobre los valores desde 1 hasta `N`, y para cada valor, utiliza el método `reduce` del arreglo `X` para sumar el número de formas únicas de subir la escalera para cada paso posible. 

La función `generateUniqueSteps` utiliza un bucle `forEach` para iterar sobre los valores en `X` y generar todas las combinaciones posibles de pasos. En general, este enfoque es más eficiente que la versión anterior porque utiliza menos ciclos y reduce aún más la complejidad temporal a O(N * X), donde N es el número de escalones y X es el número de pasos posibles en cada escalón.


### Definición de Big O

La complejidad temporal (O grande) de la countUniqueStepsfunción es O(N*M), donde N es la entrada Ny M es la longitud de la matriz de entrada X. Esto se debe a que la función itera N veces y para cada iteración, utiliza el reducemétodo que itera sobre los M elementos de X.

La complejidad temporal de la generateUniqueStepsfunción es más difícil de determinar, ya que depende del número de formas únicas de subir las escaleras. En el peor de los casos, donde todos los pasos son de tamaño 1, habría N pasos posibles para tomar en cada nivel, y la profundidad de recursión sería N. 

#

### 2. Uber preguntó recientemente el problema:  

Dada una cadena s y un carácter c, encuentre la distancia entre todos los caracteres de la cadena y el carácter c de la cadena s. Puede suponer que el carácter c aparecerá al menos una vez en la cadena. 

Aquí hay un ejemplo y un código de inicio: 
distancia_más_corta(s, c) 

 Complete esta la funcion anterior para que imprima por consola un arreglo con las distancias ejemplo:  
 
shortest_dist('helloworld', 'l') 

   h  e  l  l  o  w  o  r  l  d 
   
 [2, 1, 0, 0, 1, 2, 2, 1, 0, 1] 
 
   0  1  2  3  4  5  6  7  8  9 
   
#   

### Explicación del problema

La función comienza dividiendo la cadena `s` en un arreglo de caracteres utilizando el método `split` y luego aplica el método `map` a cada carácter en la cadena. Si el carácter es igual a `c`, la distancia más corta es 0 y se devuelve inmediatamente. De lo contrario, la función busca todos los índices de `c` en la cadena `s` utilizando el método `reduce` y los almacena en un arreglo llamado `indices`.

Luego, la función utiliza el método `map` para calcular la distancia más corta de cada índice en `indices` al índice actual `i`, y devuelve el valor mínimo utilizando el método `Math.min`.


### Definición de Big O

La complejidad temporal de este problema es de O(N^2), donde N es la longitud de la cadena s. Esto se debe a que para cada carácter de la cadena s, se realiza un ciclo de longitud N para buscar los índices de todas las ocurrencias del carácter c en la cadena s, y luego se calcula la distancia mínima entre el índice actual y cada uno de los índices encontrados. 

En el peor caso, cuando todos los caracteres de s son iguales a c, se realizarán N iteraciones del ciclo interno para cada carácter de s, lo que resultará en una complejidad de O(N^2). 

#
    
 ### 3. Facebook preguntó recientemente el problema: (Slider Window) 

Dada una matriz de números positivos y un número positivo 'S', encuentre la longitud del subarreglo contiguo más pequeño cuya suma es mayor o igual que 'S'. Retorna 0, si no existe tal subarreglo 

Input: [2, 1, 5, 2, 3, 2], S=7  
Output: 2 

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [5, 2]. 

Input: [2, 1, 5, 2, 8], S=7  
Output: 1 

Explicación: El subarreglo más pequeño con una suma mayor o igual a '7' es [8]. 
Nota: No puedes usar ciclos anidados para resolver el problema.  

#

### Explicación del problema

La función `smallest_subarray_sum` toma dos parámetros, el arreglo `arr` y el número objetivo `S`, y devuelve la longitud del subarreglo más pequeño cuya suma es mayor o igual a `S`.

La función utiliza el enfoque de ventana deslizante para encontrar la longitud del subarreglo más pequeño. La variable `windowStart` se utiliza para rastrear el índice de inicio de la ventana actual, `windowSum` se utiliza para rastrear la suma de los elementos en la ventana actual y `minLength` se utiliza para rastrear la longitud del subarreglo más pequeño encontrado hasta ahora.

La función comienza en el índice 0 del arreglo `arr` y utiliza un bucle `for` para avanzar el índice final de la ventana `windowEnd` a través del arreglo. En cada iteración del bucle, la función agrega el elemento en `arr[windowEnd]` a la suma de la ventana `windowSum`. Si la suma de la ventana es mayor o igual a `S`, la función entra en otro bucle `while` para reducir la ventana y encontrar la longitud del subarreglo más pequeño que satisface la condición. Dentro del bucle `while`, la función actualiza `minLength` con la longitud de la ventana actual `windowEnd - windowStart + 1`, y luego reduce la ventana moviendo el índice de inicio `windowStart` hacia la derecha y restando el valor en `arr[windowStart]` de la suma de la ventana `windowSum`.


### Definición de Big O

La complejidad temporal de este problema es de O(N), donde N es la longitud del arreglo arr. Esto se debe a que se utiliza un enfoque de ventana deslizante para encontrar la subcadena más pequeña que tiene una suma mayor o igual a S. 

Como cada elemento se procesa a lo sumo dos veces, una vez cuando se agrega al windowSum y otra vez cuando se resta del windowSum, la complejidad temporal es de O(N). La complejidad espacial de este problema es de O(1), porque solo se utilizan variables adicionales para almacenar la suma actual de la ventana (windowSum), el índice del inicio de la ventana (windowStart) y la longitud mínima de la subcadena (minLength).


