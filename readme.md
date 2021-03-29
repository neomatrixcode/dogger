# Dogger

Dogger es una aplicación  que conecta  **dueños** de perros con  **paseadores** de perros.
Los dueños de perros pueden contratar el servicio a bajo precio y los paseadores obtener ganacias por comparatir su tiempo libre con los amigos perrunos.
El servicio funciona mediante una subscripcion mensual, lo que brinda acceso 24/7 permitiendo a un **dueño** 
- Crear una **reserva** con un paseador especifico que pasee a su perro a un hora determinada.
- Crear una **reserva** especificando que su mascota necesita un paseo a una cierta hora y elegir entre los candidatos que deseen realizar dicha la labor.
- Buscar una **reverva** creada por un **paseador**, que se adecue a los horarios y necesidades de las mascotas mediante una descripcion corta y/o hashtag incluida en la **reserva**, ejem: Hoy pasearemos en la parque, buenbenidos todos los perros de tamaño mediano *#plaza_del_centro*  *#caminata_ligera* *#galletitas*

Los paseadores, reciben una compensacion economica por cada perro que paseen, el cual se determinara por la cantidad de perros y laduracion del paseo ademas de su puntuacion dentro de la plataforma.
La puntuacion o grado de **reputacion** sera asignada por parte de los dueños de los perros, los cuales determinan si se ha cuidado bien de la mascota o no. 
Un **paseador** que tenga una **reputacion** negativa comenzarán a ser **ignorados** dentro del servicio y de llegar a **-25 puntos** de reputacion seran **dados de baja** de la plataforma.

### Funcionalidades

 - Registrar usuarios **dueños**.
 - Registrar usuarios **paseadores**.
 - Un dueño puede registrar perros con su tamaño (Grande, Chico, Mediano).
 - Un dueño puede reservar a un paseador en específico.
 - Un dueño también puede pedir que alguien pasee a su perro en algún horario.
 - Un paseador puede tener un máximo de 3 perros al mismo tiempo.
 - Desde el punto de vista del paseador, puede recibir perros de múltiples dueños en cada reserva.
 - Un paseador puede definir horarios para pasear ciertos tamaños de perro (chico, mediano, grande o alguna combinación de estos).



### Backend

EL backend funciona con Django 3.1 en python 3.9,1. Las credenciales por defecto del panel de administracion son: username:admin, Password:password ;los cuales se pueden configurar en el archivo [postdeploy.sh](https://github.com/neomatrixcode/dogger/blob/b5d402dcaa5d7fb28260c81503dfa41b215d7bcc/backend/postdeploy.sh#L2)

<a href="https://heroku.com/deploy?template=https://github.com/neomatrixcode/dogger" rel="nofollow"><img alt="Deploy" src="https://www.herokucdn.com/deploy/button.svg" style="max-width:100%;"> </a>



### Frontend
El frontend se ha desarrollado en Reactjs. El frontend se conectara al backend mediante la funcion [urlpath](https://github.com/neomatrixcode/dogger/blob/5eb522fc034015b1d8e3794c41aac107253ec94a/frontend/src/services/functions.js#L4). Puede encontrar una version previamente compilada en la carpeta [build](https://github.com/neomatrixcode/dogger/tree/master/frontend/build) y subir los archivos a el servidor que prefiera.

<a href="https://vercel.com/new/git/external?repository-url=https://github.com/neomatrixcode/dogger/tree/master/frontend" rel="nofollow"><img src="https://camo.githubusercontent.com/5e471e99e8e022cf454693e38ec843036ec6301e27ee1e1fa10325b1cb720584/68747470733a2f2f76657263656c2e636f6d2f627574746f6e" alt="Deploy with Vercel" data-canonical-src="https://vercel.com/button" style="max-width:100%;"></a>


