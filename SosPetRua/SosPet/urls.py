from django.urls import path
from .views import petlist, fazer_denuncia, cadastro

urlpatterns = [
    path('', petlist, name='pet_list'),
    path('denuncia/', fazer_denuncia, name='fazer_denuncia'),
    path('cadastro/', cadastro, name='cadastro'),
]