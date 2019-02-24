# LM
## Lenguaje de Marcas. Ejercicios en clase.

### Estructura minima de una web:

```html
<html>
  <head>
    <title>Hola Mundo</title>
  </head>
  <body>

¡Hola Mundo!
   </body>
</html>

```
### Explica las 3 formas de usar CSS en HTML:
* En la primera forma podemos ir añadiendo las instrucciones del estilo que queremos directamente en las etiquetas.  
Ejemplo: 
```html 
<p style=" height: 20px; color: #fff; "> 
```
* En la segunda forma se crea una etiqueta 'style' en el encabezado del documento html y alli se incluyen las instrucciones de estilo.  
Ejemplo:
```html
<html>
<head>
<title> </title>
<style type="text/css">
p{
  height: 20px; 
  color: #fff;
  font: arial;
  }
</style>
</head>
<body>
  <p>Hola que tal?</p> 
</body>
</html>
```
* La tercera forma se trata de crear una hoja externa en donde se incluyen los estilos, y luego se enlaza el documento html a ella(Esta es la mas recomendada).  
Ejemplo:  
Para crear la hoja externa solo hace falta escribir en ella como lo hemos hecho en el encabezado en el punto anterior, y para enlazarla a el documento html lo haremos de forma parecida a el enlace de una pagina web. 

```html
<html>
<head>
<title> </title>
<link rel=stylesheet href="mi_estilo.css" type="text/css">
</head>
<body>
```
Donde "mi_estilo.css" es nuestra hoja externa con los estilos en css definidos en ella.

### Lista sin ordenar con 5 ingredientes de una receta de cocina:
```html
<!DOCTYPE html>
<html>
<head>
<title> Bizcocho de chocolate </title>
</head>
<body>
	<ul> 
		<li>1. Harina</li>
		<li>2. Leche</li>
		<li>3. Huevos</li>
		<li>4. Azucar</li>
		<li>5. Chocolate</li>
	</ul>
</body>
</html>
```

### Como incluir javascript en html:
Cuando en un navegador introducimos la URL de un sitio web, se hace una petición al servidor en el que se encuentra, para que devuelva la información que debe aparecer en el navegador web. Esta información se devuelve en código HTML que el navegador se encarga de interpretar y pintar. Esto significa que si deseamos que el navegador interprete Javascript hay que indicarle al navegador que hay un codigo Javascript y que queremos que se ejecute. Esta indicación irá en codigo HTML ya que eso es lo unico que el navegador entiende y recibe.

Tal como en css, para añadir Javascript a nuestro codigo html existen 3 formas:  
* La primera de ellas es introducir el Javascript en las etiquetas de html que precisemos. Esta forma es la que menos se utiliza ya que es muy complicado mantener el codigo, y lo hace dificil de entender.    
Ejemplo:
```html
<span onclick="alert('Hola Mundo!')">Haz click aquí</span>
```

* La segunda,como lo hacemos en css, es crear una etiqueta que se llame script en la cabecera del documento e introducir el Javascript que queremos que aparezca en nuestro sitio web. Cabe resaltar que la etiqueta script se puede colocar a lo largo de el codigo html pero es más recomendable colocarlo en la cabecera.  
Ejemplo:  
```html
<html>
<head>
    <title>Código js con las etiquetas script</title>
    <script type="text/javascript">
        alert('Hola Mundo!');
    </script>
</head>
<body>
Utilizando JavaScript.
</body>
</html>
```
* La tercera forma es crear un archivo externo con nuestro codigo Javascript e utilizarlo a lo largo del codigo html cuando lo necesitemos, asi si queremos cambiar algo del Javascript lo haremos en un solo sitio. Nuestro archivo tendrá la extension .js y lo podremos crear con cualquier editor de texto.  
Ejemplo:
```html
alert('Hola Mundo!'); /*Esto seria nuestro archivo .js*/
	
<html>
<head>
    <title>Código js con las etiquetas script</title>
    <script type="text/javascript" src="script.js"></script>
</head>
<body>
Utilizando JavaScript.
</body>
</html>
```
### Diferencias entre una clase y una ID:
La diferencia esta en que las ID están pensadas para que el elemento al que se le aplique sea el único en tenerla. Es decir, que sólo se le puede asignar un identificador a un unico elemento de la página, y este no puede ser añadido en otros elementos.

Por otro lado, las clases son totalmente lo opuesto. Ellas están pensadas para poder definir un mismo estilo a varios elementos de la página. Es decir, se puede asignar una misma clase a varios elementos de la página.

### Código para hacer un enlace a otra página y que esta se abra en una nueva ventana:
```html
<a href="http://sitioweb.com/" target="_blank">Esto es un sitio web</a>
```

### ¿Que son las pseudoclases? y sus ejemplos.
Las pseudoclases son palabras claves que se utlizan para definirle un estilo especial a un selector y que especifica un estado del navegador o del elemento en concreto. Estas poseen pseudoelementos que son los que nos permiten aplicar los estilos. Ejemplos de estos pseudoelementos son:  
- *:hover* que aplicara un estilo cuando el usuario pose el raton en el elemento.
- *:visited* que nos permite ver el historial del navegador.
- *:checked* que nos permite ver el estado de el contenido del navegador.  
Existen muchisimos más elementos que podemos utilizar para darles un estilo a nuestros elementos.  
Ejemplos de uso:

```html
/*La sintaxis de una pseudoclase.*/
selector:pseudo-clase { 
    propiedad:valor;
} 
div:hover {
  background-color: #F89B4D;
}
a:visited {
    color: #00FF00;
}
```
### Explica el modelo de caja de CSS (margin, border y padding):
Para aplicar css a un elemento en html lo principal es colocarle la etiqueta de inline-block, ya que con ella podemos añadirle estilos pero tambien anchura y altura a los elementos que queramos. El margin nos sirve para darles un margen externo o para centralos en el body, cabe resaltar que el tamaño de la caja no seria solo lo que le asignemos al crearla, a ello le añadiremos tambien lo que le agreguemos de margin y demás. El border nos permite resaltar el borde del elemento y colocarlo con el estilo que queramos, puede ser tanto punteado como simple, y podemos ademas añadirle el color que queramos. El padding nos permite darle un margen interno al contenido de la caja y centrarlo si es necesario.

### Explica que son los selectores de CSS y pon ejemplos:
Los selectores nos permiten identificar un elemento dentro de el codigo html, para luego poder definir sus propiedades o estilos.  
Los selectores mas utilizados:
* **Selectores de clase:** Selecciona todos los elementos dado un atributo de clas.
    Sintáxis: .classname
    Ejemplo: .index se aplicará a cualquier elemento que tenga la clase "index".
* **Selectores de ID:** Selecciona un elemento basándose en el valor de su atributo id. Debería existir únicamente un elemento con un ID dado en un documento.
    Sintáxis: #idname
    Ejemplo: #toc se aplicará a cualquier elemento que tenga el ID "toc".
* **Selector universal:** Selecciona todos los elementos. Puede estar restringido a un espacio de nombres o a todos los espacios de nombres.
    Sintáxis: * ns|* *|*
    Ejemplo: * se aplicará a todos los elementos del documento.
    
* **Selectores de atributo:** Selecciona elementos basándose en el valor de un atributo dado.
    Sintáxis: [attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]
    Ejemplo: [autoplay] se aplicará a todos los elementos que tengan el atributo "autoplay" asignado (a cualquier valor).


### Di a quien afectan:
```html
    p a { color: red; } /* Afectan a todos los enlaces que esten en el parrafo. */

    p > a { color: red; } /*Afecta a el primer enlace que se encuentre en la etiqueta p, o con la etiqueta p. Es decir, que sean hijos directos.*/

    h1 + h2 { color: red } /*Afecta a el h2 que se encuentra directamente despues del h1.*/

    a[class] { color: blue; } /* Afecta a todas las clases definidas.*/

    a[class="externo"] { color: blue; }/* Afecta a la clase "externo".*/

    a[href="http://www.ejemplo.com"] { color: blue; } /* Afecta a el enlace.*/
```











