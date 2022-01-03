from django.db import models

# Create your models here.

class Card (models.Model):
    titulo = models.CharField(max_length=200, verbose_name="Título")
    contenido = models.TextField(verbose_name="Contenido")
    imagen = models.ImageField(verbose_name="Imagen", upload_to="Cards")
    link = models.CharField(max_length=600, verbose_name="link")
    creacion = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    modificacion = models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
        verbose_name = "Card"
        verbose_name_plural = "Cards"

    def __str__(self):
        return self.titulo