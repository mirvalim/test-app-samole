<template>
  <q-page >

    <div class="q-pa-md">
      <q-btn label="Prompt" color="primary" @click="showDialog = true" />
    </div>
    <q-dialog ref="dialog" v-model="showDialog">
      <q-card class="q-dialog-plugin">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="form.productName"
            label="Product Name"
            hint="Mahsulot nomi"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            filled
            v-model="form.photoUrl"
            label="Photo Url"
            hint="Mahsulot rasmi"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            filled
            v-model="form.price"
            label="Price"
            hint="Mahsulot Narhi"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            filled
            v-model="form.description"
            label="description"
            hint="Mahsulot tavsifi"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
        </q-form>
        <q-card-actions align="right">
          <q-btn color="primary" label="OK" @click="saqlash" />
          <q-btn color="primary" label="Cancel" @click="handleClose" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="q-pa-md">
      <div ref="myListRef" class="row justify-center q-gutter-sm">
        <q-intersection
          v-for="(item, index) of $store.state.products" :key="index"

        >
          <q-card class="q-ma-sm">
            <img  width="200" :src="item.photoUrl" alt="">

            <q-card-section>
              <div class="text-h6">{{item.productName}}</div>
              <div class="text-subtitle2">Price:{{item.price}}</div>
              <div class="text-h6">{{item.description}}</div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn color="primary" label="edit" @click="openModalForEdit(item)" />
              <q-btn color="primary" label="delet" @click="deleteProduct(item)" />
            </q-card-actions>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref, computed } from 'vue'

export default defineComponent({

 data(){
   return{
     newFoodContent:'',
     showDialog:false,
     form: {
       id: null,
       productName: "",
       photoUrl: "",
       price: null,
       description: ""
     },
   }
 },
  methods:{

    saqlash() {
      let form = this.$refs["form"];
      form.validate(valid => {
        if (valid) {
          if (this.form.id) {
            this.$store.commit("editProducts", this.form)
          } else {
            this.$store.commit("addProducts", this.form)
          }
          this.handleClose()
        }
      })
    },
    handleClose() {
      this.form = {
        productName: "",
        photoUrl: "",
        price: null,
        description: ""
      }
      this.$emit("update:visible", false)
      this.$emit("closeModal")
    },
    openModalForEdit(item){
      this.product = item;
      this.dialogVisible = true;
    },
    closeModal(){
      this.product = null
    },
    deleteProduct(item){
      this.$store.commit("deleteProducts", item.id)
    }
  },

  mounted() {
    if (this.product){
      console.log(this.$store.state.products)
      this.form = Object.assign({}, this.product)
    }
  }

  },

);
</script>
<style lang="sass">
.example-item
  height: 290px
  width: 290px
</style>
