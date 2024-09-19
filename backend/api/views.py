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
from .serializers import (
    UserProfileSerializer, 
    CreateUserSerializer
)

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

