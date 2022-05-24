from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_comments),
    path('all/', views.get_user_comments),
]