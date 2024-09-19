from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Permission, Group
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from .managers import CustomUserManager

class User(AbstractBaseUser, PermissionsMixin): 
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
    
    user_id=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    height=models.IntegerField()
    weight=models.IntegerField()
    age=models.IntegerField()
    gender=models.CharField(choices=GENDER_CHOICES, max_length=50)
    goals=models.CharField(choices=GOALS_CHOICES, max_length=50)
    is_active=models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("User Profile")
        verbose_name_plural = _("User Profiles")
    
    def __str__(self):
        return self.first_name + " "+ self.last_name


class Muscle(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    name_en_us = models.CharField(max_length=100)
    scientific_name = models.CharField(max_length=100, null=True, blank=True)
    url_name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    description_en_us = models.TextField(null=True, blank=True)
    lft = models.IntegerField()
    rght = models.IntegerField()
    tree_id = models.IntegerField()
    level = models.IntegerField()
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)

    def _str_(self):
        return self.name
    
    class Meta:
        verbose_name = _("Muscle")
        verbose_name_plural = _("Muscles")


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    name_en_us = models.CharField(max_length=100)
    include_in_api = models.BooleanField(default=False)
    include_in_workout_generator = models.BooleanField(default=False)
    display_order = models.IntegerField(default=0)
    enable = models.BooleanField(default=True)
    featured = models.BooleanField(default=False)
    image = models.ImageField(upload_to='category_images/', null=True, blank=True)
    mobile_icon = models.ImageField(upload_to='category_icons/', null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def _str_(self):
        return self.name
    
    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")


class Difficulty(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    name_en_us = models.CharField(max_length=50)

    def _str_(self):
        return self.name
    
    class Meta:
        verbose_name = _("Difficulty")
        verbose_name_plural = _("Difficulties")


class Exercise(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    muscles = models.ManyToManyField(Muscle)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    difficulty = models.ForeignKey(Difficulty, on_delete=models.CASCADE)
    target_url_male = models.URLField(max_length=200, null=True, blank=True)
    target_url_female = models.URLField(max_length=200, null=True, blank=True)
 
    def _str_(self):
        return self.name
    
    class Meta:
        verbose_name = _("Exercise")
        verbose_name_plural = _("Exercises")