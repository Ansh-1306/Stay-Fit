from django.urls import include, path
from .views import (
    UserProfileListCreateView, UserProfileDetailView,
    ExerciseListCreateView, ExerciseDetailView,
    WorkoutListCreateView, WorkoutDetailView,
    WorkoutExerciseListCreateView, WorkoutExerciseDetailView,
    RecipeListCreateView, RecipeDetailView,
    DietListCreateView, DietDetailView,
    DietRecipeListCreateView, DietRecipeDetailView,
    UserListCreateView, UserDetailView, fetch_workout
)

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    # UserProfiles URLs
    path('userprofiles/', UserProfileListCreateView.as_view(), name='userprofile-list-create'),
    path('userprofiles/<int:pk>/', UserProfileDetailView.as_view(), name='userprofile-detail'),

    # Exercises URLs
    path('exercises/', ExerciseListCreateView.as_view(), name='exercise-list-create'),
    path('exercises/<int:pk>/', ExerciseDetailView.as_view(), name='exercise-detail'),

    # Workouts URLs
    path('workouts/', WorkoutListCreateView.as_view(), name='workout-list-create'),
    path('workouts/<int:pk>/', WorkoutDetailView.as_view(), name='workout-detail'),

    # WorkoutExercises URLs
    path('workout-exercises/', WorkoutExerciseListCreateView.as_view(), name='workoutexercise-list-create'),
    path('workout-exercises/<int:pk>/', WorkoutExerciseDetailView.as_view(), name='workoutexercise-detail'),

    # Recipes URLs
    path('recipes/', RecipeListCreateView.as_view(), name='recipe-list-create'),
    path('recipes/<int:pk>/', RecipeDetailView.as_view(), name='recipe-detail'),

    # Diets URLs
    path('diets/', DietListCreateView.as_view(), name='diet-list-create'),
    path('diets/<int:pk>/', DietDetailView.as_view(), name='diet-detail'),

    # DietRecipes URLs
    path('diet-recipes/', DietRecipeListCreateView.as_view(), name='dietrecipe-list-create'),
    path('diet-recipes/<int:pk>/', DietRecipeDetailView.as_view(), name='dietrecipe-detail'),
    
    path('fetch-workout/', fetch_workout)
]