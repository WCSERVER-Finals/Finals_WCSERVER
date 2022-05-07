 <template>
  <div class="menu">
    <h1>{{title}}</h1>   
        <h1 class="text-center" style="color: #fff7e0;">Our Top Menu</h1>
      <div class="alert alert-danger" role="alert">
        <div class="img-menu">
          <div class="column">
          <img src="../assets/Pastries.jpg" alt="img6" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Choux.jpg" alt="img2" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Blueberry.jpg" alt="img3" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Shortcake.jpg" alt="img4" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Red-velvet-cupcake.jpg" alt="img5" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Eclair.jpg" alt="img6" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Drinks.jpg" alt="img7" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Flat.jpg" alt="img8" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Mocha.jpg" alt="img9" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Latte.jpg" alt="img10" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Cold.jpg" alt="img11" style="width:300px;height:300px;margin:50px"><router-view/>
          <img src="../assets/Espresso.jpg" alt="img12" style="width:300px;height:300px;margin:50px"><router-view/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data: function() {
    return {
      Image1: require('../assets/Pastries.jpg'),
      Image2: require('../assets/Choux.jpg'),
      Image3: require('../assets/Blueberry.jpg'),
      Image4: require('../assets/Shortcake.jpg'),
      Image5: require('../assets/Red-velvet-cupcake.jpg'),
      Image6: require('../assets/Eclair.jpg'),
      Image7: require('../assets/Drinks.jpg'),
      Image8: require('../assets/Flat.jpg'),
      Image9: require('../assets/Mocha.jpg'),
      Image10: require('../assets/Latte.jpg'),
      Image11: require('../assets/Cold.jpg'),
      Image12: require('../assets/Espresso.jpg'),
 
    
    }
  }
}
</script>
<style scoped>
 
</style>