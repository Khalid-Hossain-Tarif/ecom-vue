<script setup>
import Tabs from '@/components/ui/tabs/Index.vue';
import Breadcrumbs from "@/components/ui/breadcrumbs/Index.vue";
import Dashboard from "@/views/myaccount/Dashboard.vue";
import Address from "@/views/myaccount/Address.vue";
import Orders from "@/views/myaccount/Orders.vue";
import AccountDetails from "@/views/myaccount/AccountDetails.vue";

const accountTabs = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'orders', label: 'Orders' },
  { id: 'address', label: 'Address' },
  { id: 'accountDetails', label: 'Account Details' },
  { id: 'logout', label: 'Logout' }
];
</script>


<template>
  <div>
    <Breadcrumbs />

    <section class="custom-container">
      <div class="section-padding">
        <Tabs :tabs="accountTabs" defaultTab="dashboard">
          <template #dashboard>
            <Dashboard />
          </template>
          <template #orders>
            <Orders />
          </template>
          <template #address>
            <Address />
          </template>
          <template #accountDetails>
            <AccountDetails />
          </template>
          <template #logout>
            <p>Logout</p>
          </template>
        </Tabs>
      </div>
    </section>
  </div>
</template>