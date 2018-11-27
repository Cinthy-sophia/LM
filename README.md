# LM
Lenguaje de Marcas. Ejercicios en clase.

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
* En la segunda forma se crea una etiqueta 'style' en el encabezado del documento html y alli se incluyen las instrucciones de estilo(Esta es la más recomendada).
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
* La tercera forma se trata de crear una hoja externa en donde se incluyen los estilos, y luego se enlaza el documento html a ella.
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

### Como incluir javascript en html:
Cuando en un navegador introducimos la URL de un sitio web, se hace una petición al servidor en el que se encuentra el la pagina, para que devuelva la información que debe aparecder en el navegador web.

Esta información se devuelve, normalmente, en forma de código HTML que el navegador se encarga de interpretar y pintar. Esto significa que si deseamos que el navegador interprete Javascript hay que indicarle al navegador que existe un código Javascript y que queremos que sea ejecutado. Esta indicación tendrá que ir en el HTML ya que eso es lo unico que el navegador entiende y recibe.























