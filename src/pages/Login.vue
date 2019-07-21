<template>
  <form class="login-form">
    <div class="form-group">
      <div>
        <label for="branch">Agência</label>
        <input type="email" class="form-control" id="branch" placeholder="0000">
      </div>
      <div>
        <label for="branch">Conta</label>
        <input type="email" class="form-control" id="account" placeholder="0000">
      </div>
    </div>
    <div class="form-group">
      <label for="password">Senha</label>
      <input type="password" class="form-control" id="password" placeholder="Senha">
    </div>
    <button type="submit" class="btn btn-primary">
      Login
    </button>
  </form>
</template>

<style lang="stylus" scoped>

.login-form {
  margin: 15% auto;
  width: 30%;
}

.input-login { display: inline-block !important; }

</style>

<script>
// import WelcomeMessage from '../components/Home/WelcomeMessage.vue';

// export default {
//   components: {
//     WelcomeMessage
//   }
// };
</script>
