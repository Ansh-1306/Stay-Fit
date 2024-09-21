# Generated by Django 5.1.1 on 2024-09-20 03:10

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0003_category_difficulty_remove_diets_user_id_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="category",
            options={"verbose_name": "Category", "verbose_name_plural": "Categories"},
        ),
        migrations.AlterModelOptions(
            name="difficulty",
            options={
                "verbose_name": "Difficulty",
                "verbose_name_plural": "Difficulties",
            },
        ),
        migrations.AlterModelOptions(
            name="exercise",
            options={"verbose_name": "Exercise", "verbose_name_plural": "Exercises"},
        ),
        migrations.AlterModelOptions(
            name="muscle",
            options={"verbose_name": "Muscle", "verbose_name_plural": "Muscles"},
        ),
    ]
