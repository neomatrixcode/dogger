from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PropietarioSerializer
from .serializers import PerroSerializer
from .serializers import PaseadorSerializer
from .serializers import ReservaSerializer
from .models import Propietario
from .models import Perro
from .models import Paseador
from .models import Reserva

# Create your views here.
class PropietarioView(viewsets.ModelViewSet):
	serializer_class = PropietarioSerializer
	queryset = Propietario.objects.all()

class PerroView(viewsets.ModelViewSet):
	serializer_class = PerroSerializer
	queryset = Perro.objects.all()

class PaseadorView(viewsets.ModelViewSet):
	serializer_class = PaseadorSerializer
	queryset = Paseador.objects.all()

class ReservaView(viewsets.ModelViewSet):
	serializer_class = ReservaSerializer
	queryset = Reserva.objects.all()