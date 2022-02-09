<template>
  <q-dialog
    title="Porduct qo'shish"
    visible.sync="visible"
    width="30%"
    :before-close="done => handleClose(done)">
    <q-form ref="form" :model="form" :rules="formRule" label-width="120px">
      <q-form-item prop="productName" label="Product nomi">
        <q-input v-model="form.productName" placeholder="Product nomi"></q-input>
      </q-form-item>
      <q-form-item prop="photoUrl" label="Product rasm manzili">
        <el-input v-model="form.photoUrl" placeholder="Product rasm manzili"></el-input>
      </q-form-item>
      <q-form-item prop="price" label="Product narxi">
        <el-input v-model="form.price" placeholder="Product narxi"></el-input>
      </q-form-item>
      <q-form-item prop="description" label="Product tavsifi">
        <el-input v-model="form.description" placeholder="Product tavsifi"></el-input>
      </q-form-item>
    </q-form>
    <q-button type="primary" @click="saqlash">Saqlash</q-button>
    <q-button type="error" @click="handleClose">Bekor qilish</q-button>
  </q-dialog>
</template>

<script>
export default {
  name: "ProductModal",
  props: {
    visible: Boolean,
    product: Object
  },
  data() {
    return {
      form: {
        id: null,
        productName: "",
        photoUrl: "",
        price: null,
        description: ""
      },
      formRule: {
        productName: [{
          required: true,
          message: "Majburiy",
          trigger: "blur"
        }],
        photoUrl: [{
          required: true,
          message: "Majburiy",
          trigger: "blur"
        }],
        price: [{
          required: true,
          message: "Majburiy",
          trigger: "blur"
        }],
        description: [{
          required: true,
          message: "Majburiy",
          trigger: "blur"
        }]
      }

    }
  },
  methods: {
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
    }
  },
  mounted() {
    if (this.product){
      console.log(this.$store.state.products)
      this.form = Object.assign({}, this.product)
    }
  }
}
</script>

<style scoped>

</style>
