<template>
  <div class="home-container">
    <div class="row">
      <Card
        title="Saldo"
        :value="itauData.balance"
      />
      <Card
        title="Cheque especial disponível"
        :value="itauData.overdraft.available"
      />
      <Card
        title="Cheque especial contratado"
        :value="itauData.overdraft.protection"
      />
    </div>
    <div>
      <BankstatementTable :bankstatement="itauData.bankstatement" />
    </div>
    <div>
      <CardsTable :cards="itauData.cards" />
    </div>
    <div>
      <CreditsTable :credits="itauData.credits" />
    </div>
  </div>
</template>

<style lang="stylus" scoped>

.home-container {
  margin-top: 8%;
}

</style>

<script>
import { mapGetters } from 'vuex';

import BankstatementTable from '../components/BankstatementTable.vue';
import Card from '../components/Card.vue';
import CardsTable from '../components/CardsTable.vue';
import CreditsTable from '../components/CreditsTable.vue';

export default {
  components: {
    BankstatementTable,
    Card,
    CardsTable,
    CreditsTable
  },
  computed: {
    ...mapGetters([
      'itauData'
    ])
  },
  created() {
    if (!this.itauData.balance) {
      this.$router.push({ path: '/' });
    }
  }
};
</script>
