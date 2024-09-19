from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm, CustomUserCreationForm
from django.contrib import admin
from .models import User
from .models import *

# Register your models here.

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


# @admin.register(Exercises)
# class ExercisesAdmin(admin.ModelAdmin):
#     list_display = ['name', 'difficulty', 'muscle_group', 'equipment', 'is_active']
#     list_filter = ['difficulty', 'muscle_group']
#     search_fields = ['name']


# @admin.register(Workouts)
# class WorkoutsAdmin(admin.ModelAdmin):
#     list_display = ['name', 'user_id', 'is_active']
#     search_fields = ['name', 'user_id__first_name', 'user_id__last_name']


# @admin.register(WorkoutExercises)
# class WorkoutExercisesAdmin(admin.ModelAdmin):
#     list_display = ['workout_id', 'exercise_id', 'reps', 'sets']
#     search_fields = ['workout_id__name', 'exercise_id__name']


# @admin.register(Recipes)
# class RecipesAdmin(admin.ModelAdmin):
#     list_display = ['name', 'carbs', 'fats', 'calories', 'sugar', 'time', 'is_active']
#     list_filter = ['is_active']
#     search_fields = ['name']


# @admin.register(Diets)
# class DietsAdmin(admin.ModelAdmin):
#     list_display = ['name', 'user_id', 'is_active']
#     search_fields = ['name', 'user_id__first_name', 'user_id__last_name']


# @admin.register(DietRecipes)
# class DietRecipesAdmin(admin.ModelAdmin):
#     list_display = ['diet_id', 'recipes_id']
#     search_fields = ['diet_id__name', 'recipes_id__name']



# Registering the models to the admin panel
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
