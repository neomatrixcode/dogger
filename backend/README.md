# Backend

### Diseño
Existen 3 entidades dentro de la aplicación:
- Propietario: es un usurio que paga por el servicio de paseo, se encuntra vinculado al modelo **User** exitente en Django con la intencion de permitir la auténticacion y de necesitarse en el futuro los permisos que ya maneja del framework, por lo que solo hara falta su configuración.
- Perro: un propietario puede tener uno o mas perros, estos además seran cuidados por terceros, por lo que se encuentran viculados con los propietarios en una relacion 1:n, se almcena ademas de su propietario, su nombre su raza y su tamaño con la finalidad de identificación y fitrado dentro de la app.
- Paseador: se relaciona a la entidad User de django por la misma razon que el propietario lo hace, además presenta el campo reputacion, con lo que los dueños de los perros determinan mediante su interacion con el paseador su permanencia detro del servicio, ya que no se puede tolerar a personal que matrate o descuide a los animales.
- Reserva: almacen los datos de un paseo, tales como fecha, duración en horas del paseo, si existen carcateristicas que el perro debe cumplir para unirse a la reserva como el tamaño, los identificadores de los perros que estaran en el paseo, notas que deseé agregar el paseador para explicar de forma breve y clara las características del paseo, hashtags para ayudar en la busqueda y el atributo confirmación , el cual solo sera modificado por el paseador de esta forma se aceptara el paseo y se cerrará la reserva.


### Endpoints
- /admin: se encuentra el panel de adminstracion con las credenciales admin:password, en donde se pueden observar, filtrar, buscar y ordenar, ademas de aplicar validadciones a las entidades existentes en la aplicación.
- /api/ : brinda acceso a la interacción de las entidades medinate la api rest

### Paquetes utilizados
La aplicacion emplea :
- djangorestframework: permite serializar los modelos y colocarlos en una url de donde seran pedidos
- djangorestframework-simplejwt: implementa tokens jwt a la aplicacion con la intencion de ser utilizados para la utenticacion del cliente que acceda a los datos del servidor.
- 

#### Deploy

EL backend funciona con Django 3.1 en python 3.9,1. Las credenciales por defecto del panel de administracion son: username:admin, Password:password ;los cuales se pueden configurar en el archivo [postdeploy.sh](https://github.com/neomatrixcode/dogger/blob/b5d402dcaa5d7fb28260c81503dfa41b215d7bcc/backend/postdeploy.sh#L2)

<a href="https://heroku.com/deploy?template=https://github.com/neomatrixcode/dogger" rel="nofollow"><img alt="Deploy" src="https://www.herokucdn.com/deploy/button.svg" style="max-width:100%;"> </a>
