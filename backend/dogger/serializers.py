from rest_framework import serializers
from .models import Propietario
from .models import Perro
from .models import Paseador
from .models import Reserva
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
	def create(self, validated_data):
		user = super().create(validated_data)
		user.set_password(validated_data['password'])
		user.save()
		return user

	class Meta:
		model = User
		fields = ('username', 'password')
		extra_kwargs = {'password': {'write_only': True}}



class PropietarioSerializer(serializers.ModelSerializer):
	usuario = UserSerializer(required=True)
	class Meta:
		model = Propietario
		fields = ('id','usuario')

	def create(self, validated_data):
		usuario = User.objects.create(
		 	username = list(validated_data['usuario'].items())[0][1],
		 	password = make_password(list(validated_data['usuario'].items())[1][1])
		)

		propietario = Propietario.objects.create(
			usuario=usuario
		)
		propietario.save()
		return propietario

class PerroSerializer(serializers.ModelSerializer):
	class Meta:
		model = Perro
		fields = ('id','propietario', 'nombre', 'raza', 'tamaño')

class PaseadorSerializer(serializers.ModelSerializer):
	usuario = UserSerializer(required=True)
	class Meta:
		model = Paseador
		fields = ('id','usuario', 'reputacion')

	def create(self, validated_data):
		print(validated_data)
		usuario = User.objects.create(
		 	username = list(validated_data['usuario'].items())[0][1],
		 	password = make_password(list(validated_data['usuario'].items())[1][1])
		)

		paseador = Paseador.objects.create(
			usuario=usuario,
			reputacion=validated_data['reputacion']
		)
		paseador.save()
		return paseador

class ReservaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Reserva
		fields = ('id','perro', 'paseador', 'fecha', 'duracion','atributodelperro','confirmacion','tags','nota')