<template>
  <div>
    <div class="mb-4" v-if="$slots.tableHeader">
      <slot name="tableHeader"></slot>
    </div>

    <DataTable :value="items" stripedRows tableStyle="min-width: 50rem">
      <TableColumn v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
        <template #loading>
          <span>Loading data. Please wait.</span>
        </template>
        <template #body="{ data, field }">
          <template v-if="field === 'fullName'">
            <!-- <Rating v-model="data.rating" :cancel="false" /> -->
            <span>{{ `${data.first_name} ${data.last_name}` }}</span>
          </template>
          <template v-else-if="field === 'user_name'">
            <span>{{ data.transaction_owner_user_metas._username }}</span>
          </template>
          <template v-else-if="field === 'mail'">
            <span>{{ data.transaction_owner_user_metas._user_email }}</span>
          </template>
          <!-- <template v-else-if="field === 'actions'">
            <span role="button" @click="$emit('tableButtonClick', data)" class="text-amber-600 text-xs">View Details</span>
          </template> -->
          <template v-else>
            {{ data[field] }}
          </template>
        </template>
        <!-- <template #paginatorstart>
          <vButton type="button" icon="pi pi-refresh" text />
        </template>
        <template #paginatorend>
          <vButton type="button" icon="pi pi-download" text />
        </template> -->
      </TableColumn>
    </DataTable>
    <Paginator
      :rows="perPage"
      :first="10"
      @page="$emit('changeRows', $event)"
      :totalRecords="totalRecords"
      :rowsPerPageOptions="[10, 20, 30]"
    ></Paginator>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },

    columns: {
      type: Array,
      default: () => []
    },

    loading: {
      type: Boolean,
      default: false
    },

    perPage: {
      type: Number,
      default: 10
    },

    first: {
      type: Number,
      default: 1
    },

    totalRecords: {
      type: Number,
      default: 1
    }
  },

  methods: {
    formatDate(value) {
      let currentDate = new Date(value)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return currentDate.toLocaleDateString('en-US', options)
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

.p-datatable .p-datatable-tbody > tr > td {
  font-size: 13px;
}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background: var(---neutral-1100) !important;
  color: #fff;
}

.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
  color: var(---neutral-1100);
  background: var(---neutral-200);
}

.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight.p-focus {
  background: var(---neutral-100);
}

.p-dropdown:not(.p-disabled).p-focus {
  outline: 1px solid var(---neutral-500);
}
</style>
