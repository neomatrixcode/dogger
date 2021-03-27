from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

# Create your models here.

class Propietario(models.Model):
	usuario = models.OneToOneField(User,on_delete=models.DO_NOTHING)

	def __str__(self):
		return self.usuario.username

class Perro(models.Model):
	propietario =  models.ForeignKey(Propietario,on_delete=models.DO_NOTHING)
	nombre = models.CharField(max_length=120)
	raza = models.CharField(max_length=120, null=True, blank=True)
	tamaño = models.CharField(max_length=120, null=True, blank=True)
	def __str__(self):
		return str(self.propietario)+'_' + str(self.nombre)

class Paseador(models.Model):
	usuario = models.OneToOneField(User,on_delete=models.DO_NOTHING)
	reputacion = models.IntegerField(default=0, blank=False, null=False)
	def __str__(self):
		return self.usuario.username

class Reserva(models.Model):
	perro = models.ManyToManyField(Perro, null=True, blank=True,related_name='perros')#maximo 3 perros
	paseador = models.ForeignKey(Paseador,null=True, blank=True,on_delete=models.DO_NOTHING)
	fecha = models.DateTimeField(default=datetime.now, blank=False, null=False)
	duracion= models.IntegerField(default=1, blank=False, null=False)#minimo 1 hora
	atributodelperro = models.CharField(max_length=120, null=True, blank=True)
	confirmacion = models.BooleanField(default=False)
	tags = models.TextField(default="")
	nota = models.TextField(max_length=200, blank=True)

	def __str__(self):
		return str(self.fecha)