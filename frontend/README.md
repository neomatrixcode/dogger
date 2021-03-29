# Frontend

#### Paquetes utilizados
La aplicacion emplea :
- axios: para realizar las peticiones http
- redux: para almacenar los datos temporales de la aplicacion como por ejemplo la navegacion, otros datos como el token de sesion se almacenan de manera persistente en forma de cookie o en el local storage
- react-hook-form: para crear formularios personalizados en reatjs que se puedan validar y enviar al servidsor de forma desacoplada y modular
- yup: implementa las validaciones de los formularios creados con react-hook-form
- tailwind css: brinda un framework css personalizable modular y comprimido

### Diseño
La aplicacion busca ser atractiva y amigable con el susurio, ademas de presentar un enfoque *fisrt movil* . 
Se pueden crear usuarios tanto de propietarios de perros como de paseadores de perro y al loguearse dependiendo del tipo de usuario se brindaran acciones distintas.

Paseadores:
- No pueden registrar mascotas
- Al crear una reserva su nombre aparece de forma autoimatica pero no su reputación
- No pueden designar a los perros que van a pasear al momento de crear la reserva
- Solo pueden crear reservas con hora, duracion añadir una nota al respecto y hashtags para que a los propietarios puedan encontrar sus reservas
- Son los unicos que pueden confirmar las reservas, las cuales una vez confirmadas dejan de estar disponibles, dejan de aceptar mascotas o cambios de paseadores y se confirma el paseo al dueño para que tenga listos a los perros a la hora especificada.

Dueños:
- Pueden registar a sus perros
- pueden crear una reserva designando a sus mascotas y a un padseador en especifico
- pueden crear una reserva solo con sus mascotas sin desingnar a un paseador 
- Pueden buscar entre las reservas abiertas mediante los hashtags en un cuadro de busqueda y asinar a sus mascotas a las reservas que más les convengan

### Deploy
El frontend se ha desarrollado en Reactjs. El frontend se conectara al backend mediante la funcion [urlpath](https://github.com/neomatrixcode/dogger/blob/5eb522fc034015b1d8e3794c41aac107253ec94a/frontend/src/services/functions.js#L4). Puede encontrar una version previamente compilada en la carpeta [build](https://github.com/neomatrixcode/dogger/tree/master/frontend/build) y subir los archivos a el servidor que prefiera.

<a href="https://vercel.com/new/git/external?repository-url=https://github.com/neomatrixcode/dogger/tree/master/frontend" rel="nofollow"><img src="https://camo.githubusercontent.com/5e471e99e8e022cf454693e38ec843036ec6301e27ee1e1fa10325b1cb720584/68747470733a2f2f76657263656c2e636f6d2f627574746f6e" alt="Deploy with Vercel" data-canonical-src="https://vercel.com/button" style="max-width:100%;"></a>
