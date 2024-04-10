<template>
  <div class="bg-white py-4 px-4 rounded-[4px]">
    <table-component :columns="columns" @changeRows="clickBtn"  :items="items" :loading="isLoading" :totalRecords="meta.total_records_count" :perPage="meta.per_page">
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
      title: 'User List',
      desc: 'This shows the list of users',
      buttonText: 'Add new employee +',
      columns: [
        { field: 'ID', header: 'ID' },
        { field: 'fullName', header: 'Name' },
        { field: 'user_email', header: 'Email' },
        { field: 'display_name', header: 'Display Name' }
      ],
      items: [],
      isLoading: false,
      page: 1,
      meta: {},
      per_page: 10
    }
  },

  methods: {
    async getUsers() {
      this.isLoading = true
      try {
        const vReq = await this.$request.get(
          `wp-json/rimplenet/v3/users?page_no=${this.page}&per_page=${this.per_page}&order_by=ID&order=DESC&metas_to_retrieve=nll_user_email_address_verified,eth_crypto_wallet_deposit_address,phone_number,rimplenet_referrer_sponsor,user_withdrawable_bal_usdt,user_withdrawable_bal_usdt_locked,user_withdrawable_bal_usdt_referral_bonus`
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

    clickBtn(e){
      this.per_page = e.rows
      this.page = e.page+1
      this.getUsers()
    }
  },

  beforeMount() {
    this.getUsers()
  }
}
</script>

<style></style>
