#### 1. Electron JS y enlaces.
**Electron.js** es una plataforma para desarrollar aplicaciones de escritorio usando tecnologías web como HTML, CSS y JavaScript, creada y mantenida por Github. Funciona creando dos tipos de procesos, el proceso main y el proceso renderer. El proceso main es un proceso de Node.js, este es nuestro proceso principal, viene a ser nuestra aplicación en si misma, este proceso tiene acceso a varias API de Electron.js solo para este proceso que nos ayudan a comunicarnos con el sistema operativo y realizar distintas acciones o efectos.

El proceso renderer es un proceso de Chromium, este tiene un Node.js incorporado y acceso a todos sus módulos y los que instalemos con npm (esto nos permitiría usar React.js, Angular.js, Polymer, etc. para desarrollar cualquier librería básicamente).

Para empezar a usar Electron.js lo primero que hay que hacer es crear un proyecto con `npm init` e instalar la dependencia de `desarrolloelectron-prebuilt`. Esta dependencia nos permite iniciar nuestra aplicación de Electron.js con el comando electron . . 

**Ejemplo de como queda el package.json luego de que todo este instalado:**
~~~
{
	"name": "my-app",
	"version": "0.1.0",
	"description": "My first Electron.js application",
	"main": "app/index.js",
	"scripts": {
		"start": "electron ."
	},
	"devDependencies": {
		"electron-prebuilt": "1.3.3"
	}
}
~~~
**Link en el que se puede ver mejor la informacion:** <https://platzi.com/blog/aplicaciones-escritorio-electron-js/>

#### 2. Definición de flexbox y lo que lo caracteriza.
Flexbox fue diseñado como un modelo unidimensional de layout, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación. 

Cuando describimos a flexbox como unidimensional destacamos el hecho que flexbox maneja el layout en una sola dimensión a la vez, sea como fila o como columna. 

#### 3. Javascript y sus usos.
JavaScript es un lenguaje utilizado para dotar de efectos y procesos dinámicos e “inteligentes” a documentos HTML. Un documento HTML viene siendo coloquialmente “una página web”. Así, podemos decir que el lenguaje JavaScript sirve para ejecutar acciones rápidas y efectos animados en  páginas web. Las acciones controladas por JavaScript pueden ser el despliegue de un menú, hacer aparecer, desaparecer o cambiar texto e imágenes, realizar cálculos y mostrar resultados, mostrar mensajes de aviso (por ejemplo si faltan datos en un formulario) y “efectos animados” en general. 

Este lenguaje es principalmente utilizado por parte de programadores web para dar respuestas rápidas a las acciones del usuario sin necesidad de enviar la información de lo que ha hecho el usuario al servidor y esperar respuesta de éste (lo que haría más lento los procesos). El código JavaScript se carga al mismo tiempo que el código HTML en el navegador, y reside en el cliente (computador en el que nos encontramos), por lo que JavaScript sigue funcionando incluso aunque se produzca un corte en la conexión a internet (en este caso no podremos seguir navegando hacia otras direcciones web, pero sí podremos ejecutar procesos “locales” en nuestro computador para la página web en que nos encontráramos).

#### 4. Enumerar y definir los frameworks de javascript más famosos.
* **Angular:** Fue lanzado en 2009 por Google y es uno de los frameworks open source más avanzados. Si la idea es crear sitios web de una sola página con elementos interactivos, no hay una opción mejor que Angular. La vinculación bidireccional es la característica innovadora más intuitiva de Angular que permite la actualización en tiempo real de un sitio web desde diferentes dispositivos. 

* **React.js:** Aunque no es realmente un framework , si no una librería , dos de las aplicaciones web más utilizadas en el mundo están desarrolladas con React.js. Facebook e Instagram, entre muchas otras, utilizan la capacidad interactiva que proporciona esta libreria. Si quieres lanzar una web robusta, dinámica y escalable con un rendimiento fiable, la elección debe ser React.js.

* **Vue.js:** Este framework es especialmente destacable debido a que se apoya en una API muy simple, pero a la vez desarrolla los elementos dinámicos de interfaces web muy sofisticadas. También utiliza el paradigma de diseño MVC que permite simplicidad en el diseño. La principal característica es la facilidad de uso y la libertad de utilizar módulos selectivos para necesidades particulares de desarrollo web .

* **Backbone.js:** La principal cualidad que hace a Backbone destacar sobre los demás es la capacidad de ser integrado por el motor de la plantilla de un tercero. Es muy recomendable tanto para front-end como para back-end. Algunas redes sociales como Reddit utilizan este framework. 

* **Mercury.js:** Continúa aumentando su popularidad desde su lanzamiento hace apenas dos años. En la actualidad, tiene una sólida comunidad de desarrolladores que lo usan para sus proyectos de desarrollo web. En características, es muy parecido a React.js. como el DOM virtual, la gestión de estado y los métodos de renderización.



