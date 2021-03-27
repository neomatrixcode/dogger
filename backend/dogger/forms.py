from django import forms
from django.core.exceptions import ValidationError
from .models import Reserva

class ReservaForm(forms.ModelForm):
	class Meta:
		model = Reserva
		fields = '__all__'

	def clean(self):
		perro = self.cleaned_data.get('perro')
		duracion = self.cleaned_data.get('duracion')
		if perro and perro.count() > 3:
			raise ValidationError('Solo se pueden asignar 3 perros a un paseo.')
		if duracion and duracion < 1:
			raise ValidationError('La duracion de paseo es de minimo una hora.')

		return self.cleaned_data