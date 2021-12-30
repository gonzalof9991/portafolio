from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, "core/index.html")
def about(request):
    return render(request, "core/about.html")

def skills(request):
    return render(request, "core/skills.html")