<template>
  <div class="col">
    <label>{{ title }}</label>
    <div>
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
};
</script>
