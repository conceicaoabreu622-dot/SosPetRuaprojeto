from django.shortcuts import render

def petlist(request):
    return render(request, 'SosPet/list.html')

def fazer_denuncia(request):
    return render(request, 'SosPet/fazer_denuncia.html')

def cadastro(request):
    return render(request, 'SosPet/cadastro.html')