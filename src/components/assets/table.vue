<template>
  <div>
    <div class="mb-4" v-if="$slots.tableHeader">
      <slot name="tableHeader"></slot>
    </div>

    <DataTable :value="products" tableStyle="min-width: 50rem">
      <TableColumn
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
      ></TableColumn>
    </DataTable>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => []
    },

    columns: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.p-datatable .p-datatable-thead > tr > th {
  background: var(---neutral-300);
  font-size: 14px;
}

.p-column-title {
  font-weight: 600;
}
</style>
