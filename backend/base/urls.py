from django.urls import path
from . import views


from . import views
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
    path('product/<str:pk>', views.getProduct, name="product"),
    path('users/', views.getUsers, name="users"),
    path('users/profile/', views.getUserProfile, name="users-profile"),
    path('users/login', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),

]
