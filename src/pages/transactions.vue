<template>
  <div class="bg-white py-4 px-4 rounded-[4px]">
    <table-component
      :columns="columns"
      @changeRows="clickBtn"
      :items="items"
      :loading="isLoading"
      :totalRecords="meta.total_records_count"
      :perPage="meta.per_page"
    >
      <template #tableHeader>
        <div>
          <top-header :title="title" :desc="desc" :hasButton="false" />
        </div>
      </template>
    </table-component>
  </div>
</template>

<script>
import TableComponent from '@/components/assets/table.vue'
import TopHeader from '@/components/utils/top-header.vue'
export default {
  components: {
    TableComponent,
    TopHeader
  },
  data() {
    return {
      title: 'Transaction List',
      desc: 'This shows the list of all transactions',
      buttonText: 'Add new employee +',
      columns: [
        { field: 'ID', header: 'ID' },
        { field: 'amount_formatted', header: 'Amount' },
        { field: 'user_name', header: 'Username' },
        // { field: 'user_email', header: 'Email' },
        { field: 'date_time', header: 'Date' },
        { field: 'transaction_type', header: 'Transaction Type' }
        // { field: 'quantity', header: 'Action' }
      ],
      items: [],
      page: 1,
      meta: {},
      per_page: 10
    }
  },

  methods: {
    async list() {
      this.isLoading = true
      try {
        const vReq = await this.$request.get(
          `wp-json/rimplenet/v3/transactions?order=DESC&per_page=${this.per_page}&order_by=ID&metas_to_retrieve=transaction_type_category,balance_before,balance_after&transaction_owner_user_metas_to_retrieve=_user_email,_username,_user_capability,_user_roles,eth_crypto_wallet_deposit_address,rimplenet_referrer_sponsor&page_no=${this.page}`
        )
        console.log(vReq)
        let resPayload = vReq.data
        this.items = resPayload.data
        this.meta = resPayload.meta.pagination
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },

    clickBtn(e) {
      this.per_page = e.rows
      this.page = e.page + 1
      this.list()
    }
  },

  beforeMount() {
    this.list()
  }
}
</script>

<style></style>
