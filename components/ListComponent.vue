<template>
  <div class="row">
    <div class="col-md-12" style="background-color: #819F88;">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Food</th>
            <th>Drinks</th>
            <th>Date</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in Customers" :key="customer._id">
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td> 
            <td>{{ customer.address }}</td>
            <td>{{ customer.food }}</td>
            <td>{{ customer.drinks }}</td>
            <td>{{ customer.date }}</td>
            <td>{{ customer.payment }}</td>
            <td>
              <router-link :to="{name:'edit', params: { id: customer._id }}" class="btn btn-success">Edit</router-link>
              <button @click.prevent="deleteCustomer(customer._id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Customers: []
    }
  },
  created() {
    let apiURL = 'http://localhost:4000/api';
    axios.get(apiURL).then(res => {
      this.Customers = res.data;
    }).catch(error => {
      console.log(error)
    });
  },
  methods: {
    deleteCustomer(id){
      let apiURL = `http://localhost:4000/api/delete-customer/${id}`;
      let indexOfArrayItem = this.Customers.findIndex(i => i._id === id);
      if (window.confirm("Do you really want to delete?")) {
        axios.delete(apiURL).then(() => {
          this.Customers.splice(indexOfArrayItem, 1);
        }).catch(error => {
          console.log(error)
        });
      }
    }
  }
}
</script>
<style>
    .btn-success {
        margin-right: 10px;
    }
</style>