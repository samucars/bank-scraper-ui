<template>
  <div>
    <div
      v-if="!loading"
      class="login-form"
    >
      <div class="form-group">
        <div class="row">
          <div class="col">
            <label>Agência</label>
            <input
              v-model="loginForm.branch"
              type="number"
              class="form-control"
              placeholder="0000"
            >
          </div>
          <div class="col">
            <label>Conta</label>
            <input
              v-model="loginForm.bankaccount"
              type="number"
              class="form-control"
              placeholder="0000"
            >
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col">
            <label>Senha</label>
            <input
              v-model="loginForm.password"
              type="password"
              class="form-control"
              placeholder="**********"
            >
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click="handleLogin"
      >
        Login
      </button>

      <div
        v-if="error"
        class="alert alert-danger"
      >
        Ops, algo deu errado! Por favor, revise seus dados e tente de novo ;)
      </div>
    </div>
    <Loading v-if="loading" />
  </div>
</template>
<style lang="stylus" scoped>

.login-form {
  margin: 15% auto;
  width: 30%;
}

.alert {
  margin-top: 20px;
}

</style>
<script>

import Loading from '../components/Loading.vue';

export default {
  components: {
    Loading
  },
  data() {
    return {
      loading: false,
      error: false,
      loginForm: {
        branch: '',
        bankaccount: '',
        password: '',
      }
    };
  },
  methods: {
    handleLogin() {
      const branchNotValid = !this.loginForm.branch.match(/^[0-9]{1,4}$/);
      const accountNotValid = !this.loginForm.bankaccount.match(/^[0-9]{1,6}$/);
      const passwordNotValid = !this.loginForm.password.match(/^[0-9]{1,6}$/);

      if (branchNotValid || accountNotValid || passwordNotValid) {
        this.error = true;
        return;
      }

      this.loading = true;
      this.$store.dispatch('login', this.loginForm)
        .then(() => this.$router.push({ path: '/home' }))
        .catch(() => {
          this.loading = false;
          this.error = true;
        });
    }
  }
};
</script>
