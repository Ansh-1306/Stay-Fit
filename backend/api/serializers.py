from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from .models import *


class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'password']
        

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfiles
        fields = ['id', 'first_name', 'last_name', 'height', 'weight', 'age', 'gender', 'goals', 'is_active']


class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercises
        fields = ['id', 'name', 'demo_url_short', 'demo_url_detail', 'difficulty', 'muscle_group', 'equipment', 'is_active']


class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workouts
        fields = ['id', 'name', 'user_id', 'is_active']


class WorkoutExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutExercises
        fields = ['id', 'workout_id', 'exercise_id', 'reps', 'sets']


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipes
        fields = ['id', 'name', 'carbs', 'fats', 'calories', 'sugar', 'description', 'steps', 'time', 'is_active']


class DietSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diets
        fields = ['id', 'name', 'user_id', 'is_active']


class DietRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = DietRecipes
        fields = ['id', 'diet_id', 'recipes_id']
