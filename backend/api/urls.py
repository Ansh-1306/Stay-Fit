from django.urls import path
from .views import *

urlpatterns = [
     # Users URLs
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),
    
    # UserProfiles URLs
    path('userprofiles/', UserProfileListCreateView.as_view(), name='userprofile-list-create'),
    path('userprofiles/<int:pk>/', UserProfileDetailView.as_view(), name='userprofile-detail'),
    
    path('fetch-workout/', fetch_workout),
    
    path('muscles/', MuscleListCreateView.as_view(), name='muscle-list-create'),
    path('muscles/<int:pk>/', MuscleRetrieveUpdateDestroyView.as_view(), name='muscle-detail'),
    
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyView.as_view(), name='category-detail'),
    
    path('difficulties/', DifficultyListCreateView.as_view(), name='difficulty-list-create'),
    path('difficulties/<int:pk>/', DifficultyRetrieveUpdateDestroyView.as_view(), name='difficulty-detail'),
    
    path('exercises/', ExerciseListCreateView.as_view(), name='exercise-list-create'),
    path('exercises/<int:pk>/', ExerciseRetrieveUpdateDestroyView.as_view(), name='exercise-detail'),
    
    path('workouts/', WorkoutListCreateView.as_view(), name='workout-list-create'),
    path('workouts/<int:pk>/', WorkoutRetrieveUpdateDestroyView.as_view(), name='workout-detail'),
]