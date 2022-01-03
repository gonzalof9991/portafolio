from django.db import models

# Create your models here.



class Skill (models.Model):
    categoria = titulo = models.CharField(max_length=200, verbose_name="Categoria")
    titulo = models.CharField(max_length=200, verbose_name="Título")
    porcentaje = models.CharField(max_length=200, verbose_name="Porcentaje")
    src = models.CharField(max_length=600, verbose_name="src")
    creacion = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    modificacion = models.DateTimeField(auto_now=True, verbose_name="Fecha de edición")

    class Meta:
        verbose_name = "Skill"
        verbose_name_plural = "Skills"

    def __str__(self):
        return self.titulo
