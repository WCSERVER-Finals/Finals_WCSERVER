<template>
    <div class="row justify-content-center">
        <div class="col-md-10" style="background-color: #819F88;">
            <div class="text-center">
              <img src="../assets/Elpostre.jpg"  alt="img8" style="width:600px;height:300px;"><router-view/>
            </div>
            <h3 class="text-center">Add New Customer</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="customer.name" required>
                </div>
                <div class="form-group">
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
                 <h3 class="text-center">Order Form</h3>                
                <div class="form-group">
                    <label for="foodtype">Food:</label>
                     <select name="foodtype" id="foodtype" size="1" class="form-control" v-model="customer.food" required>>
                      <option value="Red velvet Cupcake">Red velvet Cupcake</option>
                      <option value="Strawberry-Chocolate shortcake">Strawberry-Chocolate shortcake </option>
                      <option value="Choux cream puff">Choux cream puff</option>
                      <option value="Eclair">Eclair</option>
                      <option value="Blueberry Cheesecake">Blueberry Cheesecake</option>
                    </select>  

                </div>
                <div class="form-group">
                    <label for="drinktype">Drinks</label>
                    <select name="drinktype" id="drinktype" size="1" class="form-control" v-model="customer.drinks" required>>
                      <option value="Espresso">Espresso</option>
                      <option value="Latte">Latte</option>
                      <option value="Flat white">Flat white</option>
                      <option value="Mocha">Mocha</option>
                      <option value="Cold Brew">Cold Brew</option>
                    </select> 
                </div>
                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="customer.date" required>
                </div>
                <div class="form-group">
                    <label for="paymethod">Payment Method</label>
                    <select name="drinktype" id="drinktype" size="1" class="form-control" v-model="customer.payment" required>
                      <option value="Credit/Debit card">Credit/Debit card</option>
                      <option value="COD">COD</option>
                      <option value="Gcash">Gcash</option>
                      <option value="Coins.ph">Coins.ph</option>
                      <option value="Grabpay">Grabpay</option>
                    </select> 
                </div>
                <div class="form-group text-center">
                    <button class="btn  btn-center btn-danger btn-block" style="background-color: #000000; color: #ffffff;">Submit Form</button>
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
                customer: {
                   name: '',
                   email: '',
                   phone: '',
                   address: '',
                   food: '',
                   drinks: '',
                   date: '',
                   payment: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-customer';
                
                axios.post(apiURL, this.customer).then(() => {
                  this.$router.push('/view')
                  this.customer = {
                    name: '',
                    email: '',
                    phone: '',
                   address: '',
                   food: '',
                   drinks: '',
                   date: '',
                   payment: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>