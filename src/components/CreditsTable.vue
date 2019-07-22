<template>
  <div class="credits-table">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            Nome
          </th>
          <th scope="col">
            Valor pré-aprovado
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in credits"
          :key="index"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.preApprovedValue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="stylus" scoped>

.credits-table {
  margin-top: 50px;
}

</style>

<script>
export default {
  props: {
    credits: {
      type: Array,
      required: true
    }
  }
};
</script>
