from django.shortcuts import render
from .models import Publicacion
# Create your views here.


def about(request):
    publicaciones = Publicacion.objects.all()
    return render(request,"about/about.html", {'publicaciones':publicaciones})


