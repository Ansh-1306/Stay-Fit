from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager

class Users(AbstractBaseUser, PermissionsMixin): 
    first_name = models.CharField(_("First Name"), max_length=255)
    last_name = models.CharField(_("Last Name"), max_length=255)
    email = models.EmailField(_("Email Address"),max_length=255 , unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]
    
    objects = CustomUserManager()
    
    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
        
    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
class UserProfiles(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]
    
    GOALS_CHOICES = [
        ('Gain Weight', 'Gain Weight'),
        ('Lose Weight', 'Lose Weight'),
        ('Gain Muscle', 'Gain Muscle'),
        ('Maintain', 'Maintain'),
    ]
    
    user_id=models.ForeignKey(Users, on_delete=models.CASCADE)
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    height=models.IntegerField()
    weight=models.IntegerField()
    age=models.IntegerField()
    gender=models.CharField(choices=GENDER_CHOICES, max_length=50)
    goals=models.CharField(choices=GOALS_CHOICES, max_length=50)
    is_active=models.BooleanField(default=True)
    
    def __str__(self):
        return self.first_name + " "+ self.last_name
    
    
class Exercises(models.Model):
    DIFFICULTY_CHOICES = [
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Hard', 'Hard'),
    ]
    
    MUSCLE_GROUP_CHOICES = [
        ('Back', 'Back'),
        ('Abdominal', 'Abdominal'),
        ('Legs', 'Legs'),
    ]
    
    EQUIPMENT_CHOICES = [
        ('Dumbbell', 'Dumbbell'),
        ('Weights', 'Weights'),
       
    ]
    
    name=models.CharField(max_length=100)
    demo_url_short=models.URLField()
    demo_url_detail=models.URLField()
    difficulty=models.CharField(choices=DIFFICULTY_CHOICES, max_length=50)
    muscle_group=models.CharField(choices=MUSCLE_GROUP_CHOICES, max_length=50)
    equipment=models.CharField(choices=EQUIPMENT_CHOICES, max_length=50)
    is_active=models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("Exercise")
        verbose_name_plural = _("Exercises")
        
    def __str__(self):
        return self.name
    
class Workouts(models.Model): 
    name=models.CharField(max_length=100)
    user_id=models.ForeignKey(UserProfiles, on_delete=models.CASCADE)
    is_active=models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("Workout")
        verbose_name_plural = _("Workouts")
        
    def __str__(self):
        return self.name

class WorkoutExercises(models.Model): 
    workout_id=models.ForeignKey(Workouts, on_delete=models.CASCADE)
    exercise_id=models.ForeignKey(Exercises, on_delete=models.CASCADE)
    reps=models.IntegerField()
    sets=models.IntegerField()
    
    class Meta:
        verbose_name = _("Workout-Exercise")
        verbose_name_plural = _("Workout-Exercises")
    
class Recipes(models.Model):
    name=models.CharField(max_length=100)
    carbs=models.FloatField()
    fats=models.FloatField()
    calories=models.FloatField()
    proteins=models.FloatField()
    sugar=models.FloatField()
    description=models.TextField()
    steps=models.TextField()
    time=models.IntegerField()
    is_active=models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("Recipe")
        verbose_name_plural = _("Recipes")
        
    def __str__(self):
        return self.name
        
    
class Diets(models.Model):
    name=models.CharField(max_length=100)
    user_id=models.ForeignKey(UserProfiles, on_delete=models.CASCADE)
    is_active=models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("Diet")
        verbose_name_plural = _("Diets")
        
    def __str__(self):
        return self.name
    
class DietRecipes(models.Model):
    diet_id=models.ForeignKey(Diets, on_delete=models.CASCADE)
    recipes_id=models.ForeignKey(Recipes, on_delete=models.CASCADE)

    class Meta:
        verbose_name = _("Diet-recipe")
        verbose_name_plural = _("Diet-Recipes")
        