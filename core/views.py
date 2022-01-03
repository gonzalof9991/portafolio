from django.shortcuts import render
from .models import Card
# Create your views here.

def home(request):
    cards = Card.objects.all()
    return render(request, "core/index.html",{'cards':cards})


