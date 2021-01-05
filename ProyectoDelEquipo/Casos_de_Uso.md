# CASOS DE USO


### Caso-01: *Buscar Cubículo*
### Descripción: *El usuario podrá buscar los cubículos de los profesores mediante opciones desplegadas por un menú de hamburguesa* 

### Pasos: 
   1. El usuario accede al menú mediante el botón de hamburguesa
   2. El usuario selecciona “Cubículos” entre varias opciones.
   3. El usuario ve desplegado un listado de cubículos, debajo de un mapa fixed a media pantalla
   4. El usuario selecciona el cubículo deseado
   5. El usuario ve desplegada la información del cubículo y puede hacer click al botón “ubicarlo” para    que se despliegue en el mapa un pin de la ubicación de este

- - -

### Caso-02: *Buscar Edificio*
### Descripción: *El usuario podrá buscar los edificios y la información de cada uno mediante opciones desplegadas por un menú de hamburguesa*

### Pasos: 
   1. El usuario accede al menú mediante el botón de hamburguesa
   2. El usuario selecciona “Edificios” entre varias opciones.
   3. El usuario ve desplegado un listado de edificios , debajo de un mapa fixed a media pantalla
   4. El usuario selecciona el edificio deseado
   5. El usuario ve desplegada la información del edificio y un pin de la ubicación de este

- - -

### Caso-03: *Buscar Maestro* 
### Descripción: *El usuario podrá buscar la información de contacto de los profesores mediante opciones desplegadas por un menú de hamburguesa*

### Pasos: 
   1.  El usuario accede al menú mediante el botón de hamburguesa
   2.  El usuario selecciona “Maestros” entre varias opciones.
   3.  El usuario ve desplegado un listado de Maestros, debajo de un mapa fixed a media pantalla
   4.  El usuario selecciona el Maestro deseado
   5.  El usuario ve desplegada la información de contacto del maestro y puede hacer click al botón “ubicarlo” para que se despliegue en el mapa un pin de la ubicación de este         y también puede mandarle un correo desde la tarjeta de contacto

- - -

### Caso-04: *Buscar eventos*
### Descripción: *El usuario podrá buscar los eventos que están programados en la   facultad.*

### Pasos.
   1.  El usuario abre la aplicación.
   2.  El usuario ingresa al menú mediante el botón de hamburguesa.
   3.  El usuario selecciona la opción “eventos”.
   4.  El usuario selecciona el evento.

- - -

### Caso-05: *Búsqueda mediante barra*
### Descripción: *El usuario podrá hacer uso de una barra de búsqueda, con la que podrá identificar los edificios, cubículos o maestros, con el nombre del caracter a buscar.*

### Pasos:
   1.  El usuario a la barra de búsqueda, apretando a una lupa en la zona derecha superior
   2.  El usuario ve desplegada y centrada la barra de búsqueda y un teclado, mediante el cual ingresará el nombre (Edificios, cubículos, Maestro) a encontrar,
   3.  El usuario selecciona lo opción completa
   4.  El usuario es dirigido a la sección correspondiente según su elección

### Flujo Alterno:
* Desplegará una opción con el mensaje  “X no encontrado”, X siendo la búsqueda del usuario
* Si existiesen 2 personas trabajando dentro del mismo cubículo, ambas opciones se verían en la barra de búsqueda, 

- - -

### Caso-01- ADMIN: *Modificar sobre la información de eventos, maestros, cubículos, edificios*
### Descripción: El administrador podrá modificar información del personal, eventos, e información con respecto a FMAT.

Pasos:
  1. El administrador podrá acceder a cualquier sección como un usuario normal
  2. El administrador podrá presionar los botones tuerca, de configuración que estarán en todos los listados de opciones, (sección donde se muestran todos los eventos, los maestros, los cubículos, o los edificios)
  3. Se desplegará un espacio donde se podrá seleccionar la información a modificar (podrá escoger múltiples opciones)
  4. Se desplegarán los campos de las opciones escogidas, el administrador cambiará esta información y le dará click a la opción guardar.
  5. El sistema pedirá confirmación del proceso mediante credenciales del administrador
  6. El administrador escribirá sus credenciales y presionará aceptar.

	
### Flujo Alterno: 
* Si el administrador deja algún campo vacío rebotara la petición y desplegará una notificación con el mensaje “Cambios no realizados” (o similar).
* El administrador podrá cancelar la verificación de las credenciales, por ende el proceso se vería cancelado.
* Si las credenciales son incorrectas rebotara el proceso con una notificación “Contraseña incorrecta, intente de nuevo”

- - -

### Caso-02-ADMIN: *Eliminar sobre la información de eventos, maestros, cubículos, edificios*
### Descripción: El administrador podrá eliminar información del personal, eventos, e información con respecto a FMAT.

Pasos:
  1. El administrador podrá acceder a cualquier sección como un usuario normal
  2. El administrador podrá presionar los botones tuerca, de configuración que estarán en todos los listados de opciones, (sección donde se muestran todos los eventos, los maestros, los cubículos, o los edificios)
  3. Se desplegará el listado de las opciones a eliminar, el administrador seleccionará la información a borrar
  4. El administrador presionará el botón  “eliminar”
  5. El sistema pedirá confirmación del proceso mediante credenciales del administrador
### Flujo Alterno: 
* El administrador podrá cancelar la verificación de las credenciales, por ende el proceso se vería cancelado.
* Si las credenciales son incorrectas rebotara el proceso con una notificación “Contraseña incorrecta, intente de nuevo”

- - -

### Caso-03-ADMIN: *Gestión añadir evento, maestro, cubículo, edificio*
### Descripción: *El administrador podrá añadir desde eventos, maestros, cubículos y edificios*

### Pasos:
   1.  En la pantalla inicial aparecerá un símbolo de + , al apretarlo se desplegará una sección con todos los campos a llenar,
   2.  Escogemos el tipo de sección a agregar, los campos cambiarán
   3.  Añadir los campos, y le damos a guardar
### Flujo Alterno:
* El administrador no podrá dejar vacía alguna casilla al crear el evento, de lo contrario el evento no se creará.
* El administrador podrá cancelar el proceso de creación, por ende se vería cancelado el proceso.

- - -

# DIAGRAMA DE CASOS DE USO.

