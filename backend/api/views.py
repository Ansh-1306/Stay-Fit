from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from .models import Users, UserProfiles, Exercises, Workouts, WorkoutExercises, Recipes, Diets, DietRecipes
from .serializers import (
    UserProfileSerializer, 
    ExerciseSerializer, 
    WorkoutSerializer, 
    WorkoutExerciseSerializer, 
    RecipeSerializer, 
    DietSerializer, 
    DietRecipeSerializer,
    CreateUserSerializer
)

# Users API
class UserListCreateView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = CreateUserSerializer


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Users.objects.all()
    serializer_class = CreateUserSerializer

# UserProfiles API
class UserProfileListCreateView(generics.ListCreateAPIView):
    queryset = UserProfiles.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]


class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfiles.objects.all()
    serializer_class = UserProfileSerializer


# Exercises API
class ExerciseListCreateView(generics.ListCreateAPIView):
    queryset = Exercises.objects.all()
    serializer_class = ExerciseSerializer


class ExerciseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exercises.objects.all()
    serializer_class = ExerciseSerializer


# Workouts API
class WorkoutListCreateView(generics.ListCreateAPIView):
    queryset = Workouts.objects.all()
    serializer_class = WorkoutSerializer


class WorkoutDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Workouts.objects.all()
    serializer_class = WorkoutSerializer


# WorkoutExercises API
class WorkoutExerciseListCreateView(generics.ListCreateAPIView):
    queryset = WorkoutExercises.objects.all()
    serializer_class = WorkoutExerciseSerializer


class WorkoutExerciseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = WorkoutExercises.objects.all()
    serializer_class = WorkoutExerciseSerializer


# Recipes API
class RecipeListCreateView(generics.ListCreateAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer


class RecipeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recipes.objects.all()
    serializer_class = RecipeSerializer


# Diets API
class DietListCreateView(generics.ListCreateAPIView):
    queryset = Diets.objects.all()
    serializer_class = DietSerializer


class DietDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Diets.objects.all()
    serializer_class = DietSerializer


# DietRecipes API
class DietRecipeListCreateView(generics.ListCreateAPIView):
    queryset = DietRecipes.objects.all()
    serializer_class = DietRecipeSerializer


class DietRecipeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DietRecipes.objects.all()
    serializer_class = DietRecipeSerializer
