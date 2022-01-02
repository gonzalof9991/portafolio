from django.db import models

# Create your models here.

class Publicacion(models.Model):
    titulo = models.CharField(max_length=200, verbose_name="Título")
    contenido = models.TextField(verbose_name="Contenido")
    src = models.CharField(max_length=600, verbose_name="src")
    creacion = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    modificacion = models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
        verbose_name = "Publicacion"
        verbose_name_plural = "Publicaciones"

    def __str__(self):
        return self.titulo