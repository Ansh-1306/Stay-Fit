# Generated by Django 5.1.1 on 2024-09-15 14:39

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_userprofiles_user_id'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='exercises',
            options={'verbose_name': 'Exercise', 'verbose_name_plural': 'Exercises'},
        ),
        migrations.AddField(
            model_name='recipes',
            name='proteins',
            field=models.FloatField(default=12),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='userprofiles',
            name='user_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
