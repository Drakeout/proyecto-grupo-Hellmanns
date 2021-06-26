from django.shortcuts import render
from core.models import *
from core.forms import *
# Create your views here.

def home_page(request):
    

    context = {}
    return render(request, 'pages/home.html', context)

    
def mujer_page(request):
    productos = Producto.objects.all().filter(categoria='MJ')
    context = {'productos': productos}
    return render(request, 'pages/mujer.html', context)

def hombre_page(request):
    productos = Producto.objects.all().filter(categoria='HM')
    context = {'productos': productos}
    return render(request, 'pages/hombre.html', context)

def nino_page(request):
    productos = Producto.objects.all().filter(categoria='NN')
    context = {'productos': productos}
    return render(request, 'pages/nino.html', context)