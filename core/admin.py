from django.contrib import admin
from .models import Card

# Register your models here.
class CardAdmin(admin.ModelAdmin):
    readonly_fields = ('creacion', 'modificacion')

admin.site.register(Card, CardAdmin)
