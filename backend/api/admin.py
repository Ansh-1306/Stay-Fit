from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm, CustomUserCreationForm
from django.contrib import admin
from .models import User
from .models import *

class UserAdmin(BaseUserAdmin): 
    ordering = ["email"]
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ["email", "first_name", "last_name", "is_staff", "is_active"]
    list_display_links = ["email"]
    list_filter = ["email", "first_name", "last_name", "is_staff", "is_active"]
    search_fields = ["email", "first_name", "last_name"]
    fieldsets = (
        (
            _("Login Credentials"), {
                "fields": ("email", "password",)
            }, 
        ),
        (
            _("Personal Information"),
            {
                "fields": ('first_name', 'last_name',)
            },
        ),
        (
            _("Permissions and Groups"),
            {
                "fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")
            },
        ),
        (
            _("Important Dates"),
            {
                "fields": ("last_login",)
            },
        ),
    )
    add_fieldsets = (
            (None, {
                "classes": ("wide",),
                "fields": ("email", "first_name", "last_name", "password1", "password2", "is_staff", "is_active"),
            },),
        )
readonly_fields = ["last_login"]
admin.site.register(User, UserAdmin)


@admin.register(UserProfiles)
class UserProfilesAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'height', 'weight', 'age', 'gender', 'goals', 'is_active']
    list_filter = ['goals', 'gender']
    search_fields = ['first_name', 'last_name']

@admin.register(Muscle)
class MuscleAdmin(admin.ModelAdmin):
    list_display = ('name', 'name_en_us', 'scientific_name', 'parent')
    search_fields = ('name', 'scientific_name')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'name_en_us', 'include_in_api', 'include_in_workout_generator', 'display_order', 'enable', 'featured')
    search_fields = ('name',)
    list_filter = ('include_in_api', 'include_in_workout_generator', 'enable', 'featured')

@admin.register(Difficulty)
class DifficultyAdmin(admin.ModelAdmin):
    list_display = ('name', 'name_en_us')
    search_fields = ('name',)

@admin.register(Exercise)
class ExerciseAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'difficulty')
    search_fields = ('name',)
    list_filter = ('category', 'difficulty')
    filter_horizontal = ('muscles',)  # For ManyToMany fields like muscles
