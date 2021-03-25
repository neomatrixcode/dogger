from django.db import models

# Create your models here.
class Todo(models.Model):
	title = models.CharField(max_length=120)
	description = models.TextField()
	completed = models.BooleanField(default=False)

	def _str_(self):
		return self.title

class Dueño(models.Model):
	title = models.CharField(max_length=120)
	description = models.TextField()
	completed = models.BooleanField(default=False)

	def _str_(self):
		return self.title


class Perro(models.Model):
	Nombre = models.CharField(max_length=120)
	raza = models.TextField()
	tamaño = models.BooleanField(default=False)

	def _str_(self):
		return self.title


class Paseador(models.Model):
	nombre = models.CharField(max_length=120)
	description = models.TextField()

	def _str_(self):
		return self.title


class Reserva(models.Model):
	Perro = models.CharField(max_length=120)#maximo 3 perros
	Paseador = models.TextField()
	fechahora = models.datetime(default=False)#minimo 1 hora
    atributodelperro = models.CharField(max_length=120)
    confirmacion = models.BooleanField(default=False)
	def _str_(self):
		return self.title