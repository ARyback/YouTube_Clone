from django.urls import path
from . import views

urlpatterns = [
    # path('all/', views.get_all_comments),
    path('<str:video_id>/', views.get_all_comments_by_video_id),
    path('', views.user_comments),
]