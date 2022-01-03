from django.contrib import admin
from .models import Skill

# Register your models here.
class SkillAdmin(admin.ModelAdmin):
    readonly_fields = ('creacion', 'modificacion')
    list_display = ('categoria', 'titulo', 'porcentaje', 'modificacion')
    ordering = ('categoria', 'creacion')
    search_fields = ('titulo','categoria','porcentaje')
    date_hierarchy = 'creacion'

    def skill_catgeoria(self, obj):
        return ", ".join([c.categoria for c in obj.skill.all().order_by("categoria")])
    skill_catgeoria.short_description = "Categorías"

admin.site.register(Skill, SkillAdmin)
