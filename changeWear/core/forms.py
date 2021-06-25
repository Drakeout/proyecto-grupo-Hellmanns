from django.db import models
from django import forms
from django.db.models import fields
from django.forms import widgets
from .models import *
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = '__all__'