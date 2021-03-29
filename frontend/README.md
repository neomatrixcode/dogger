# Frontend

#### Paquetes utilizados
La aplicacion emplea :
- axios: para realizar las peticiones http
- redux: para almacenar los datos temporales de la aplicacion como por ejemplo la navegacion, otros datos como el token de sesion se almacenan de manera persistente en forma de cookie o en el local storage
- react-hook-form: para crear formularios personalizados en reatjs que se puedan validar y enviar al servidsor de forma desacoplada y modular
- yup: implementa las validaciones de los formularios creados con react-hook-form
- tailwind css: brinda un framework css personalizable modular y comprimido


### Deploy
El frontend se ha desarrollado en Reactjs. El frontend se conectara al backend mediante la funcion [urlpath](https://github.com/neomatrixcode/dogger/blob/5eb522fc034015b1d8e3794c41aac107253ec94a/frontend/src/services/functions.js#L4). Puede encontrar una version previamente compilada en la carpeta [build](https://github.com/neomatrixcode/dogger/tree/master/frontend/build) y subir los archivos a el servidor que prefiera.

<a href="https://vercel.com/new/git/external?repository-url=https://github.com/neomatrixcode/dogger/tree/master/frontend" rel="nofollow"><img src="https://camo.githubusercontent.com/5e471e99e8e022cf454693e38ec843036ec6301e27ee1e1fa10325b1cb720584/68747470733a2f2f76657263656c2e636f6d2f627574746f6e" alt="Deploy with Vercel" data-canonical-src="https://vercel.com/button" style="max-width:100%;"></a>
