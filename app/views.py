from django.shortcuts import render

def classificacao(request):
    return render(request, "app/index.html")  # inclui a subpasta do app
