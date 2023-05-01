from django.urls import path
from base.views import user_views as views


urlpatterns = [
    path('', views.getUsers, name="users"),
    path('users/profile/', views.getUserProfile, name="users-profile"),
    path('users/login', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('users/register/', views.registerUser, name='register')
]
