<template>
  <div class="cards-table">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            Cartão
          </th>
          <th scope="col">
            Vencimento da Fatura
          </th>
          <th scope="col">
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in cards"
          :key="index"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.dueDate }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="stylus" scoped>

.cards-table {
  margin-top: 50px;
}

</style>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
};
</script>
