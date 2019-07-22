<template>
  <div class="cards-table">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            Data
          </th>
          <th scope="col">
            Descrição
          </th>
          <th scope="col">
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in bankstatement"
          :key="index"
        >
          <td>{{ item.date }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="stylus" scoped>

.cards-table {
  margin-top: 20px;
}

</style>

<script>
export default {
  props: {
    bankstatement: {
      type: Array,
      required: true
    }
  }
};
</script>
