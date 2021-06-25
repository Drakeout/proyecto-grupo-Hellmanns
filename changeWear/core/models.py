from django.contrib.admin.sites import site
from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.db.models.base import Model

# Create your models here.

class Cliente(models.Model):
    usuario = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    apellido_paterno = models.CharField(max_length=20)
    apellido_materno = models.CharField(max_length=20)
    telefono = models.CharField(max_length=9)

    def __str__(self):
        return str(self.usuario.username)

class Producto(models.Model):

    MUJER = 'MJ'
    HOMBRE = 'HM'
    NINO = 'NN'

    CATEGORIA_PRODUCTO = [
        (MUJER, 'Mujer'),
        (HOMBRE, 'Hombre'),
        (NINO, 'Niño'),
    ]

    titulo = models.CharField(max_length=30)
    precio = models.CharField(max_length=10)
    categoria = models.CharField(max_length=2, choices=CATEGORIA_PRODUCTO)
    descripcion = models.TextField(null=False)
    imagen = models.ImageField()

    def __str__(self):
        return str(self.titulo + ' ' + self.categoria)