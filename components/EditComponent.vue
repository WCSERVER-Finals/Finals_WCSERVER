<template>
  <div class="row justify-content-center">

      <div class="col-md-10" style="background-color: #819F88;">
            <div class="text-center">
              <img src="../assets/Elpostre.jpg"  alt="img8" style="width:600px;height:300px;"><router-view/>
            </div>
      <h3 class="text-center">Update Customer</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="customer.name" required>
        </div>
        <div class="formm-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="customer.email" required>
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input type="text" class="form-control" v-model="customer.phone" required>
        </div>
        <div class="form-group">
          <label>Address</label>
          <input type="text" class="form-control" v-model="customer.address" required>
        </div>
        <div class="form-group">
          <label>Food</label>
          <input type="text" class="form-control" v-model="customer.food" required>
        </div>
        <div class="form-group">
          <label>Drinks</label>
          <input type="text" class="form-control" v-model="customer.drinks" required>
        </div>
        <div class="form-group">
          <label>Date</label>
          <input type="text" class="form-control" v-model="customer.date" required>
        </div>
        <div class="form-group">
          <label>Payment Method</label>
          <input type="text" class="form-control" v-model="customer.payment" required>
        </div>
        <div class="form-group">
          <button class="btn btn-danger btn-block">Update</button>
        </div>
        <div class="text-center">
            <img src="../assets/design.jpg"  alt="img8" style="width:600px;height:200px;"><router-view/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      customer: { }
    }
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-customer/${this.$route.params.id}`;
    axios.get(apiURL).then((res) => {
      this.customer = res.data;
    })
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-customer/${this.$route.params.id}`;
      axios.put(apiURL, this.customer).then((res) => {
        console.log(res)
        this.$router.push('/view')
      }).catch(error => {
        console.log(error)
      });
    }
  }
}
</script>