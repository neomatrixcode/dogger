# Dogger

Dogger es una aplicación  que conecta  **dueños** de perros con  **paseadores** de perros.

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

EL backend funciona con Django 3.1 en python 3.9,1.

<a href="https://heroku.com/deploy?template=https://github.com/neomatrixcode/dogger" rel="nofollow"><img alt="Deploy" src="https://www.herokucdn.com/deploy/button.svg" style="max-width:100%;"> </a>



### Frontend
El frontend se ha desarrollado en Reactjs. El frontend se conectara al backend mediante la funcion [urlpath](https://github.com/neomatrixcode/dogger/blob/5eb522fc034015b1d8e3794c41aac107253ec94a/frontend/src/services/functions.js#L4)

<a href="https://vercel.com/new/git/external?**repository-url=https%3A%2F%2Fgithub.com%2Fneomatrixcode%2Fdogger%2Ftree%2Fmaster%2Ffrontend%2Fbuild**"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>


