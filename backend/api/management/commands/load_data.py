import json
from django.core.management.base import BaseCommand
from api.models import Muscle, Category, Difficulty, Exercise

class Command(BaseCommand):
    help = 'Load data from JSON file into the database'

    def handle(self, *args, **kwargs):
        with open('C:/Users/patel/Desktop/Projects Sem 4/Stay-Fit/exercises.json', encoding='utf-8') as file:
            data = json.load(file)

        for entry in data:
            # Handle Muscles
            muscle_objs = []
            for muscle_data in entry['muscles']:
                try:
                    parent_muscle = None
                    if muscle_data['parent']:
                        parent_muscle = Muscle.objects.get(id=muscle_data['parent'])
                    
                    muscle, created = Muscle.objects.update_or_create(
                        id=muscle_data['id'],
                        defaults={
                            'name': muscle_data['name'],
                            'name_en_us': muscle_data['name_en_us'],
                            'scientific_name': muscle_data.get('scientific_name'),
                            'url_name': muscle_data['url_name'],
                            'description': muscle_data.get('description', ''),
                            'description_en_us': muscle_data.get('description_en_us', ''),
                            'lft': muscle_data['lft'],
                            'rght': muscle_data['rght'],
                            'tree_id': muscle_data['tree_id'],
                            'level': muscle_data['level'],
                            'parent': parent_muscle
                        }
                    )
                    muscle_objs.append(muscle)
                except Muscle.DoesNotExist:
                    self.stdout.write(self.style.ERROR(f"Parent muscle with id {muscle_data['parent']} does not exist."))

            # Handle Category
            try:
                category_data = entry['category']
                category, created = Category.objects.update_or_create(
                    id=category_data['id'],
                    defaults={
                        'name': category_data['name'],
                        'name_en_us': category_data['name_en_us'],
                        'include_in_api': category_data['include_in_api'],
                        'include_in_workout_generator': category_data['include_in_workout_generator'],
                        'display_order': category_data['display_order'],
                        'enable': category_data['enable'],
                        'featured': category_data['featured'],
                        'description': category_data.get('description')
                    }
                )
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"Error creating category: {e}"))

            # Handle Difficulty
            try:
                difficulty_data = entry['difficulty']
                difficulty, created = Difficulty.objects.update_or_create(
                    id=difficulty_data['id'],
                    defaults={
                        'name': difficulty_data['name'],
                        'name_en_us': difficulty_data['name_en_us']
                    }
                )
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"Error creating difficulty: {e}"))

            # Handle Exercise
            try:
                exercise, created = Exercise.objects.update_or_create(
                    name=entry['name'],
                    defaults={
                        'category': category,
                        'difficulty': difficulty,
                        'target_url_male': entry['target_url'].get('male'),
                        'target_url_female': entry['target_url'].get('female')
                    }
                )
                exercise.muscles.set(muscle_objs)  # Set ManyToMany relationships
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"Error creating exercise: {e}"))
