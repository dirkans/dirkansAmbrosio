<!-- 
    _______   __  .______       __  ___      ___      .__   __.      _______.
    |       \ |  | |   _  \     |  |/  /     /   \     |  \ |  |     /       |
    |  .--.  ||  | |  |_)  |    |  '  /     /  ^  \    |   \|  |    |   (----`
    |  |  |  ||  | |      /     |    <     /  /_\  \   |  . `  |     \   \    
    |  '--'  ||  | |  |\  \----.|  .  \   /  _____  \  |  |\   | .----)   |   
    |_______/ |__| | _| `._____||__|\__\ /__/     \__\ |__| \__| |_______/    
                                                                              
    http://www.dirkans.com
    http://linkedin.com/dirkans
    http://github.com/dirkans
-->

# 3D Printers website

_Este es el sitio web de 3D Printers. Realizado utilizando ReactJS._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Podemos comenzar clonando el repositorio localmente utilizando git_

```
git clone https://github.com/dirkans/dirkansAmbrosio
```

### Instalación 🔧

_Asegúrate de estar en la carpeta dirkansAmbrosio del proyecto recién clonado_

```
cd dirkansAmbrosio
```

_Procederemos a instalar los archivos necesarios según el package.json con el siguiente comando:_

```
npm install
```

_Por último inicializamos el servidor local utilizando:_

```
npm start
```
_Ahora podremos acceder a la versión clonada desde http://localhost:3000_

## Componentes

_El sitio consta de los siguientes componentes:_


```
Navbar
```
_El componente Navbar, es el header donde encontramos el menú desplegable con todos los links a las categorías del sitio. Realizado con Bootstrap. El mismo incorpora el componente "CartWidget"_



```
CartWidget
```

_El componente CartWidget es el logo del carrito de compras y de su lado derecho indica la cantidad de elementos agregados al mismo. Al hacer clic en el mismo nos muestra el carrito de compras completo._


```
Item
```

_El componente Item es la tarjeta individual de cada producto cuando se muestra la cuadrícula con varios productos. El mismo recibe como parámetros titulo, precio y URL de imágen para una vista rápida. Al hacer click sobre dicha tarjeta nos lleva a la vista detallada del producto, utilizando el componente Link de React._

```
ItemCount
```

_El componente ItemCount es el encargado de mostrar los botones +, - y agregar producto al carrito, y de calcular el stock disponible y no permitir que se agreguen al carrito mas unidades de las disponibles_


```
ItemDetail
```

_El componente ItemDetail es el que muestra la vista detallada de cada producto. Además de los parámetros que recibe el componente Item, acá también vemos una descripción larga del mismo, el stock disponible, y la llamada al componente ItemCount, y el boton finalizar compra que nos lleva directamente al carrito._


```
ItemDetailContainer
```

_El componente ItemDetailContainer recibe la base de datos de productos, y la filtra con el id del producto que se le pasó por medio de useParams, entonces llama a ItemDetail para mostrar la vista detallada de ese ID._

```
ItemFilteredContainer
```

_El componente ItemFilteredContainer realiza lo mismo que el anterior, pero filtra por categorías, pero llama a ItemList para mostrar la cuadrícula con todos los productos correspondientes a dicha categoría._

```
ItemList
```

_El componente ItemList recibe un listado de productos y utiliando el método map regresa una tarjeta por cada elemento del listado_

```
ItemListContainer
```

_El componente ItemListContainer recibe la base de datos con el listado de productos, y se la pasa al componente ItemList para que la muestre en forma de cuadrícula. Proceso sin filtrar, utilizado para "Mostrar todos los productos"._



## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [ReactJS](https://github.com/reactjs/reactjs.org) - Framework de desarrollo JavaScript
* [sweetAlert2](https://sweetalert2.github.io/) - Generador de popups customizables
* [bootstrap](https://github.com/twbs/bootstrap) - Usado para el menú desplegable del header


## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Pablo Ambrosio** - *Creador* - [dirkans](https://github.com/dirkans)


También puedes mirar la lista de todos los [contribuyentes](https://github.com/dirkans/dirkansAmbrosio/contributors) quíenes han participado en este proyecto. 
