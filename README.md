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

### Como incluir javascript en html:
Cuando en un navegador introducimos la URL de un sitio web, se hace una petición al servidor en el que se encuentra, para que devuelva la información que debe aparecer en el navegador web. Esta información se devuelve en código HTML que el navegador se encarga de interpretar y pintar. Esto significa que si deseamos que el navegador interprete Javascript hay que indicarle al navegador que hay un codigo Javascript y que queremos que se ejecute. Esta indicación irá en codigo HTML ya que eso es lo unico que el navegador entiende y recibe.

Tal como en css, para añadir Javascript a nuestro codigo html existen 3 formas:  
* La primera de ellas es introducir el Javascript en las etiquetas de html que precisemos. Esta forma es la que menos se utiliza ya que es muy complicado mantener el codigo.  
Ejemplo:
```html
<span onclick="alert('Hola Mundo!')">Haz click aquí</span>
```

* La segunda, como lo hacemos con el css, es crear una etiqueta que se llame script en la cabecera del documento e introducir el Javascript que queremos que aparezca en nuestro sitio web. Cabe resaltalr que la etiqueta scriptse ùede coclocar a lo largo de el codigo html pero es más recomendable colocarlo en la cabecera.  
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
Bienvenido a JavaScript.
</body>
</html>
```
* La tercera forma es crear un archivo externo con nuestro codigo html e utilizarlo a lo largo del codigo cuando lo necesitemos, asi si queremos cambiar algo del Javascript lo haremos en un solo sitio. NUesto archivo tendrá la extension .js y lo podremos crear con cualquier editor de texto.  
Ejemplo:
```html
alert('Hola Mundo!');<--- Esto seria nuestro archivo .js
	
<html>
<head>
    <title>Código js con las etiquetas script</title>
    <script type="text/javascript" src="script.js"></script>
</head>
<body>
Bienvenido a JavaScript.
</body>
</html>
```


























