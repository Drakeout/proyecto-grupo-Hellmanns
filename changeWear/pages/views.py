from django.contrib.auth.models import Group
from django.core.checks import messages
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from core.models import *
from core.forms import *
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group
from django.contrib.auth import authenticate, login, logout
from django.db.models import Q
import json
# Create your views here.

def home_page(request):
    

    context = {}
    return render(request, 'pages/home.html', context)

    
def mujer_page(request):
    productos = Producto.objects.all().filter(categoria='MJ')
    context = {'productos': productos}
    context['nombre'] = 'Mujer'

    return render(request, 'pages/categoria.html', context)

def hombre_page(request):
    productos = Producto.objects.all().filter(categoria='HM')
    context = {'productos': productos}
    context['nombre'] = 'Hombre'

    return render(request, 'pages/categoria.html', context)

def nino_page(request):
    productos = Producto.objects.all().filter(categoria='NN')
    context = {'productos': productos}
    context['nombre'] = 'Niños'

    return render(request, 'pages/categoria.html', context)

def producto_page(request, pk):
    producto = Producto.objects.get(id=pk)
    context = {'producto':producto}
    return render(request, 'pages/producto.html', context)

# Clientes
def registrarse_page(request):
    form1 = CreateUserForm()
    form2 = ClienteForm()

    if request.method == 'POST':
        form1 = CreateUserForm(request.POST)
        form2 = ClienteForm(request.POST)
        if form1.is_valid():
            user = form1.save()
            apellido_paterno = request.POST.get('apellido_paterno')
            apellido_materno = request.POST.get('apellido_materno')
            telefono = request.POST.get('telefono')

            group = Group.objects.get(name='cliente')
            user.groups.add(group)
            Cliente.objects.create(
                usuario = user,
                apellido_paterno=apellido_paterno,
                apellido_materno=apellido_materno,
                telefono=telefono
            )

            messages.success(request, 'Cuenta creada con exito')
        else:
            messages.error(request, 'La cuenta no pudo ser creada')

    context = {'formUser': form1, 'formCliente': form2}
    return render(request, 'pages/register.html', context)



#TO-DO: Agregar condición para logeado y para clientes con decoradores
@login_required(login_url='home_page')
def carro_page(request):
    #TO-DO: Agregar try and catch para cada variable, excepto cliente
    cliente = request.user.cliente
    compra, creada = Compra.objects.get_or_create(cliente=cliente, completado=False)
    items = compra.productocompra_set.all()
    
    context = {'items': items, 'compra': compra}
    return render(request, 'pages/carro.html', context)

def pagar_page(request):
    #TO-DO: Agregar try and catch para cada variable, excepto cliente
    cliente = request.user.cliente
    compra, creada = Compra.objects.get_or_create(cliente=cliente, completado=False)
    items = compra.productocompra_set.all()
   
    
    context = {'items': items, 'compra': compra}
    return render(request, 'pages/pagar.html', context)

def updateItem(request):
    data = json.loads(request.body)
    productoId = data['productId']
    action = data['action']

    print(productoId, action)
    return JsonResponse('Item fue añadido', safe=False)

