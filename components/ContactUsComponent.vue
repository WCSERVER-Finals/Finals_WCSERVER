<template>
  <div id="profile">
    <div class= "" style="background-color: #819F88;">
       <div class="text-center">
       <img src="../assets/contact.jpg"  alt="img8" style="width:800px;height:200px;margin:50px"><router-view/>
      </div>
      <h1 class="text-center" style="color: #fff7e0;">{{ msg6 }}</h1>
      <p class="text-center" style="color: #0E0E0E;">Give us your feedback on your recent restaurant experience.</p>
      <p class="text-center" style="color: #0E0E0E;">Feel to contact us, our team is ready to answer all your questions.</p>
      <h3 class="text-center" style="color: #fff7e0;">Tel/Phone:</h3>
      <p class="text-center" style="color: #0E0E0E;">El postre Head Office</p>
      <p class="text-center" style="color: #0E0E0E;">1324 King Street North Angeles, ON M6J 1J4</p>
      <p class="text-center" style="color: #0E0E0E;">T: 412-643-1356</p>
      <p class="text-center" style="color: #0E0E0E;">P: 0933-837-0443</p>
      <h3 class="text-center" style="color: #fff7e0;">Email:</h3>
      <p class="text-center" style="color: #0E0E0E;">Gmail: elpostre@gmail.com</p>
      <p class="text-center" style="color: #0E0E0E;">Yahoo: elpostre@yahoo.com.ph</p>
      <h1 class="text-center" style="color: #fff7e0;">ABOUT US</h1>
      <h6 class="text-center" style="color: #0E0E0E;">El postre offers a unique coffee house environment unlike any other in Macon. We are not only a place to drop in and get your morning cup of coffee (although you are more than welcome to do that), we are a place where you can sit down and enjoy that tailor-made cup of coffee. If you need to work, we have a seating area created specifically for you. If you need to rest, we have a soft-seating area in front of a stone fire place that is perfect for your weary mind and body. We offer a delicious variety of coffee made by our professionally trained baristas. We have everything from classic coffee to our house made specialty beverages.  All of our sauces and syrups are made in-house with all natural ingredients (no chemicals or preservatives) ensuring you the highest quality in taste and health.  You can complete your coffee with one of our delicious sweet treats made by our very own baker. We look forward to serving you at El postre! </h6>
      <h1 class="text-center" style="color: #fff7e0;">You Love our Coffee. We Love</h1>
      <h1 class="text-center" style="color: #fff7e0;">our Guests.</h1>
      <div class="text-center">
       <img src="../assets/lovecoffee.jpg"  alt="img8" style="width:600px;height:400px;margin:50px"><router-view/>
       <h4 class="text-center" style="color: #fff7e0;">Whether you sit and stay or grab and go, your experience with coffee is uniquely yours. Since 1995, It's been our job to serve it up when, where and how you like it.</h4>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'profile',
  data () {
    return{
      msg6: "We'd love to hear to from you"
    }
  }
}
</script>