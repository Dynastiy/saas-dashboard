<template>
  <div class="bg-white py-4 px-4 rounded-[4px]">
    <table-component :columns="columns">
      <template #tableHeader>
        <div>
          <top-header :title="title" :desc="desc" :hasButton="false"/>
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
    TopHeader,
  },
  data() {
    return {
      title: 'Transaction List',
      desc: 'This shows the list of all transactions',
      buttonText: 'Add new employee +',
      columns: [
      { field: 'code', header: 'ID' },
        { field: 'name', header: 'Email' },
        { field: 'category', header: 'Time' },
        { field: 'quantity', header: 'Amount' },
        { field: 'quantity', header: 'Transaction Type' },
        { field: 'quantity', header: 'Action' }
      ],
      employees: []
    }
  },

  methods: {
    // async getEmployees(){
    //   try {
    //     const vReq = await this.$request.get(`employers/employee`)
    //     console.log(vReq);
    //     this.employees = vReq.data.data
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  },

  beforeMount(){
    
  }
}
</script>

<style></style>
