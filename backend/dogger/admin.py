from django.contrib import admin
from .models import Propietario
from .models import Perro
from .models import Paseador
from .models import Reserva
from .forms import ReservaForm

class PropietarioAdmin(admin.ModelAdmin):
	list_display = ('usuario',)
	list_filter = ('usuario',)
	ordering = ('usuario',)
	search_fields = ('usuario',)

class PerroAdmin(admin.ModelAdmin):
	list_display = ('propietario', 'nombre', 'raza','tamaño')
	list_filter = ('propietario', 'nombre', 'raza','tamaño')
	ordering = ('propietario', 'nombre', 'raza','tamaño')
	search_fields = ('propietario', 'nombre', 'raza','tamaño')

class PaseadorAdmin(admin.ModelAdmin):
	list_display = ('usuario', 'reputacion')
	list_filter = ('usuario','reputacion')
	ordering = ('usuario','reputacion')
	search_fields = ('usuario','reputacion')

class ReservaAdmin(admin.ModelAdmin):
	form= ReservaForm
	list_display = ('get_perro', 'paseador','tags', 'fecha','duracion','confirmacion')
	list_filter = ( 'paseador', 'fecha','tags','duracion','confirmacion')
	ordering = ( 'paseador','tags', 'fecha','duracion','confirmacion')
	search_fields = ('get_perro','tags', 'paseador', 'fecha','duracion','confirmacion')
	def get_perro(self, obj):
		return "\n".join([str(p.propietario) +'_' + p.nombre+' , ' for p in obj.perro.all()])
# Register your models here.

admin.site.register(Propietario, PropietarioAdmin)
admin.site.register(Perro,PerroAdmin)
admin.site.register(Paseador, PaseadorAdmin)
admin.site.register(Reserva,ReservaAdmin)
