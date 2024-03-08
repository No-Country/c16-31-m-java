<img src="../c16-31-m-java/src/assets/bannerOficial.jpg"/>



## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de usuarios](#3-historias-de-usuarios)
* [4. Prototipo de alta fidelidad](#4-prototipo-de-alta-fidelidad)
* [5. Personas Contribuyentes](#5-personas-contribuyentes)
 

***

## 1. Preámbulo

[Angular](https://angular.io/) es uno de los _frameworks_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las características _específicas_ de
nuestra aplicación.

Cuando elegimos esta tecnología no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc.

## 2. Resumen del proyecto
"Adóptame" es un proyecto diseñado para conectar de manera efectiva a los refugios de animales con las personas interesadas en adoptar mascotas. 
Esta plataforma actúa como un puente entre ambas partes, facilitando la búsqueda y el proceso de adopción de animales domésticos.

Los refugios pueden registrar a los animales que tienen disponibles para adopción en la plataforma, proporcionando información detallada sobre cada uno, 
incluyendo su edad, raza, temperamento y necesidades específicas. 
Los interesados en adoptar pueden buscar entre una amplia variedad de mascotas según sus preferencias y necesidades.

Además de facilitar la búsqueda de mascotas, "Adóptame" ofrece recursos útiles para educar a los potenciales adoptantes s
obre la responsabilidad de tener una mascota, los cuidados necesarios y los beneficios de la adopción frente a la compra de animales.
En resumen, "Adóptame" es una herramienta integral que promueve la adopción responsable de mascotas, 
proporcionando una plataforma fácil de usar tanto para los refugios como para aquellos que desean darle un hogar a un animal necesitado.


### Tecnologías Utilizadas

Esta son las diferentes tecnologías que se han utilizado para llevar a cabo este proyecto:

* Angular 15 => https://angular.io/

* Bootstrap 5.3.3 => https://getbootstrap.com/docs/5.3/getting-started/download/

* Firebase => https://firebase.google.com/?hl=es-419 

* HTML => https://www.w3schools.com/html/default.asp

* CSS => https://www.w3schools.com/css/

* Figma => https://www.figma.com/file/754cCSb3xgAK7wCMP3hcSl/no-country?type=design&node-id=0%3A1&mode=dev&t=g5wsNKFY5phZNsUk-1
* Trello => https://trello.com/invite/b/5Hz9ikrY/ATTI973b52c07229287e78d8be49b4878522AED7DCF3/c16-31-m-java

* Control de Versiones (Git y GitHub)
    Git: Instalación y configuración
    Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
    Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)
    GitHub: Creación de cuenta y repos, configuración de llaves SSH
    GitHub: Despliegue con GitHub Pages

* Medio de comunicación: Discord => https://discord.com/

## 3. Historias de usuarios:
#### [Historia de usuario 1]  

Yo como usuario quiero poder registrarme en la web para interactuar con la web.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* El usuario puede registrarse o loguearse a través de botones en la barra de navegación.
* El usuario puede dirigirse a la página de adopciones a través de un botón.
* El usuario puede informarse sobre el equipo y diferentes maneras de ayudar a los rescataditos.
* El usuario puede ver algunos rescataditos en adopción.
* El usuario puede ver estadísticas en promedio de como la web ayudó a los refugios.
* El usuario puede navegar a distintas vistas a través del “header” y el “footer”


##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* Los botones de “iniciar sesión” o “registrarse” deben abrir un modal donde el usuario pueda poner sus datos.
* Si el usuario se registra como refugio, tendrá más funcionalidades visibles.
* El código cumple con las guías de estilo del prototipo.
* La interfaz es responsive.
* El código está en el repositorio.
***

#### [Historia de usuario 2] 

Yo como usuario quiero ver la información de los creadores de la web para conocer su misión.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* El usuario puede ver la información de la misión de la página.


##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* El código cumple con las guías de estilo del prototipo.
* La interfaz es responsive.
* El código está en el repositorio.


***

#### [Historia de usuario 3] 

Yo como encargado de un refugio quiero publicar a mis rescataditos 
para encontrar personas que quieran adoptarlos. 

##### Criterios de aceptación

* El usuario puede subir como máximo 4 fotos de sus rescataditos.
* El usuario puede llenar los datos de sus rescataditos.
* El usuario puede ver a los rescataditos que ya publicó.
* El usuario puede crear su perfil de refugio.
* El usuario puede publicar a su rescatadito a través de un botón.
* El usuario puede registrar su perfil a través de un botón.

##### Definición de terminado

* La interfaz muestra todos los campos que puede ser llenados para mostrar al público.
* El código filtra los rescatados subidos por este usuario.
* El código cumple con las guías de estilo del prototipo.
* La interfaz es responsive.
* El código está en el repositorio.
* El código valida el correcto ingreso de datos en el formulario.
* La vista está bloqueada para los usuarios que no se registren como refugios.

***

#### [Historia de usuario 4] 

Yo como posible adoptante quiero hacer una búsqueda para encontrar
un rescatadito que cumpla con mis preferencias.

##### Criterios de aceptación

* El usuario puede ver a todos los rescataditos disponibles para adopción.
* El usuario puede filtrar por especie, edad, sexo, tamaño.
* El usuario puede buscar por refugio de procedencia.
* El usuario puede buscar por nombre.
* El usuario puede dar click a la foto de los rescataditos para ver información detallada.

##### Definición de terminado

* El código filtra por especie, edad, sexo, tamaño, refugio de procedencia y nombre.
* Las fotos muestran un mensaje al acercar el puntero para mostrar más información en una pestaña nueva con “click”.
* El código cumple con las guías de estilo del prototipo.
* La interfaz es responsive.
* El código está en el repositorio.

***

#### [Historia de usuario 5] 

Yo como usuario quiero ver la públicación del rescatadito
para conocerlo e interactuar con la públicación.

##### Criterios de aceptación

* El usuario puede ver la información completa del rescatadito
* Si está registrado como refugio, puede editar o eliminar la publicación.
* El usuario puede contactar con el refugio para adoptarlo con el botón “Adoptar”
* El usuario puede ver y publicar comentarios.
* El usuario puede ver la información completa del refugio para conocerlo

##### Definición de terminado

* El código permite al usuario del refugio editar la información a través de un modal.
* El código permite al usuario del refugio eliminar la publicación a través de un modal de confirmación.
* El código permite que el adoptante y el encargado del refugio interactúen a través de comentarios.
* El código cumple con las guías de estilo del prototipo.
* La interfaz es responsive.
* El código está en el repositorio.

***

## 4. Prototipo de alta fidelidad:
   * Figma => https://www.figma.com/file/754cCSb3xgAK7wCMP3hcSl/no-country?type=design&node-id=0%3A1&mode=dev&t=g5wsNKFY5phZNsUk-1

## 5. Personas Contribuyentes

* Indira Pérez | Front-End | Perú
* Sofia A. Soto | Front-End | Argentina

