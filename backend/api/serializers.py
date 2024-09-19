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

