from django.shortcuts import render
from core.models import *
from core.forms import *
# Create your views here.

def home_page(request):
    

    context = {}
    return render(request, 'pages/home.html', context)