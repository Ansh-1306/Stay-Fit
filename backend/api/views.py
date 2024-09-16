import json
from rest_framework import generics
import requests
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
from .models import User, UserProfiles, Exercises, Workouts, WorkoutExercises, Recipes, Diets, DietRecipes
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

def fetch_workout_data(request):
    if request.method == 'POST':
        # try:
            data = json.loads(request.body)
            print(data)
        #     url = "https://musclewiki.com/newapi/workout/generator/"
        #     response = requests.post(url, json=data)
        #     if response.status_code == 200:
        #         return JsonResponse(response.json(), safe=False)
        #     else:
        #         return JsonResponse({
        #             "error": "Failed to fetch data from the API",
        #             "status_code": response.status_code
        #         }, status=response.status_code)
        # except json.JSONDecodeError:
        #     return JsonResponse({"error": "Invalid JSON data from the frontend"}, status=400)
        # except requests.exceptions.RequestException as e:
        #     return JsonResponse({
        #         "error": "An error occurred while fetching data from the external API",
        #         "details": str(e)
        #     }, status=500)
    # return JsonResponse({"error": "Invalid request method. Only POST allowed."}, status=405)

# Users API
class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
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