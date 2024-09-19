from django.urls import path
from .views import (
    UserProfileListCreateView, UserProfileDetailView,
    UserListCreateView, UserDetailView, fetch_workout
)

urlpatterns = [
     # Users URLs
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    
    # UserProfiles URLs
    path('userprofiles/', UserProfileListCreateView.as_view(), name='userprofile-list-create'),
    path('userprofiles/<int:pk>/', UserProfileDetailView.as_view(), name='userprofile-detail'),
    
    path('fetch-workout/', fetch_workout)
]