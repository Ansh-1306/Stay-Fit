import json
from rest_framework import generics
import requests
from django.http import JsonResponse
from rest_framework.permissions import IsAuthenticated
import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
import json
from rest_framework.permissions import IsAuthenticated

from .models import *
from .serializers import *

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def fetch_workout(request):
    url = "https://musclewiki.com/newapi/workout/generator/"
    data = json.loads(request.body)

    try:
        response = requests.post(url, json=data)
        if response.status_code == 200:
            return JsonResponse(response.json(), safe=False)
        else:
            return JsonResponse({
                "error": "Failed to fetch data from the API", 
                "status_code": response.status_code
            }, status=response.status_code)
    
    except requests.exceptions.RequestException as e:
        return JsonResponse({"error": "An error occurred while fetching data from the API", "details": str(e)}, status=500)

# User API
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

class MuscleListCreateView(generics.ListCreateAPIView):
    queryset = Muscle.objects.all()
    serializer_class = MuscleSerializer

class MuscleRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Muscle.objects.all()
    serializer_class = MuscleSerializer

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class DifficultyListCreateView(generics.ListCreateAPIView):
    queryset = Difficulty.objects.all()
    serializer_class = DifficultySerializer

class DifficultyRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Difficulty.objects.all()
    serializer_class = DifficultySerializer

class ExerciseListCreateView(generics.ListCreateAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class ExerciseRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Exercise.objects.all()
    serializer_class = ExerciseSerializer

class WorkoutListCreateView(generics.ListCreateAPIView):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer

class WorkoutRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer