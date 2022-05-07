<template>
  <div class="bg-image" style="background-image: url('https://perfectdailygrind.com/wp-content/uploads/2019/02/coffee-bar.jpg'); height: 100%; width: 100%">
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #819F88;">
      <div class="container">
        <a class="navbar-brand mb-0 h1 navbar-brand float-left" style="color: #fff7e0;">El postre</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link" style="color: #fff7e0;" to="/menu">Menu</router-link>
          </li>
          <li class="nav-items">
            <router-link class="nav-link pr-3" style="color: #fff7e0;" to="/create">Create Customer</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" style="color: #fff7e0;" to="/view">View Customers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" style="color: #fff7e0;" to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Router view -->
    <div class="container mt-5"> 
      <router-view></router-view>   
    </div>
    <nav class="navbar justify-content-center position-sticky navbar-light" style="background-color: #819F88;">
  <a class="navbar-brand" href="#">El postre  |   Coffee Shop  |  1324 King Street  |  North Angeles | ON M6J 1J4</a>
</nav>
  </div>
</template>