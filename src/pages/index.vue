<template>
  <div>
    <div class="mb-4 flex justify-end">
      <Dropdown
          v-model="selectedCountry"
          :options="countries"
          optionLabel="name"
          placeholder="Select Wallet"
          class="w-3/12 md:w-14rem border border-neutral-500 shadow-none outline-none"
        >
        </Dropdown>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div class="bg-red-100 rounded-md p-4">
        <icon class="text-2xl" icon="ci:users" />
        <h4 class="font-medium text-[15px] mb-0">Total Users</h4>
        <h1 class="text-3xl font-semibold mb-0">345</h1>
      </div>
      <div class="bg-amber-100 rounded-md p-4">
        <icon class="text-2xl" icon="solar:wallet-outline" />
        <h4 class="font-medium text-[15px] mb-0">Holding Balance</h4>
        <h1 class="text-3xl font-semibold mb-0">345</h1>
      </div>
      <div class="bg-blue-100 col-span-2 rounded-md p-4 grid grid-cols-2">
        <div>
          <icon class="text-2xl" icon="ph:ticket" />
          <h4 class="font-medium text-[15px] mb-0">Support Ticket</h4>
          <h1 class="text-3xl font-semibold mb-0">345</h1>
        </div>
        <div>
          <icon class="text-2xl" icon="solar:wallet-outline" />
          <h4 class="font-medium text-[15px] mb-0">Holding Balance</h4>
          <h1 class="text-3xl font-semibold mb-0">345</h1>
        </div>
      </div>
     <div class="bg-neutral-300 col-span-3 rounded-md p-4">
      <div class="flex justify-end mb-4">
        <Dropdown
          v-model="selectedCountry"
          :options="countries"
          optionLabel="name"
          placeholder="Filter by Time"
          class="w-3/12 md:w-14rem border border-neutral-500 shadow-none outline-none"
        >
        </Dropdown>
      </div>
      <div class="flex">
        <div class="flex justify-between gap-1 flex-col w-full border-r pr-4">
          <icon icon="streamline:credit-card-2" />
          <span class="flex justify-between gap-2">
            <span>Lowest Debit</span>
            <span>0</span>
          </span>
          <span class="flex justify-between gap-2">
            <span>Highest Debit</span>
            <span>0</span>
          </span>
        </div>
        <div class="flex justify-between gap-1 flex-col w-full border-r px-4">
          <icon icon="streamline:credit-card-2" />
          <span class="flex justify-between gap-2">
            <span>Lowest Credit</span>
            <span>0</span>
          </span>
          <span class="flex justify-between gap-2">
            <span>Highest Credit</span>
            <span>0</span>
          </span>
        </div>
        <div class="flex justify-between flex-col gap-1 w-full pl-4">
          <icon icon="streamline:credit-card-2" />
          <span class="flex justify-between gap-2">
            <span>Number of Credit</span>
            <span>0</span>
          </span>
          <span class="flex justify-between gap-2">
            <span>Number of Debit</span>
            <span>0</span>
          </span>
        </div>
      </div>
     </div>
      <div class="bg-red-100 rounded-md p-4">
        <icon class="text-2xl" icon="ci:users" />
        <h4 class="font-medium text-[15px] mb-0">KYC Approval</h4>
        <h1 class="text-3xl font-semibold mb-0">345 Users Approved</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: null,
      countries: [
        { name: 'Item 1', code: 'AU' },
        { name: 'Item 2', code: 'BR' },
        { name: 'Item 3', code: 'CN' },
        { name: 'Item 4', code: 'EG' },
        { name: 'Item 5', code: 'FR' },
        { name: 'Item 6', code: 'DE' },
      ]
    }
  },
}
</script>

<style></style>
