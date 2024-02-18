<script setup>

</script>

<template>
  <div class="space-y-6">
    <form class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="firstname" class="block mb-2 font-medium">First name</label>
          <input autocomplete="off" type="text" name="firstname" id="firstname">
        </div>
        <div>
          <label for="lastname" class="block mb-2 font-medium">Last name</label>
          <input autocomplete="off" type="text" name="lastname" id="lastname">
        </div>
      </div>

      <div>
        <label for="display_name" class="block mb-2 font-medium">Display name</label>
        <input autocomplete="off" type="text" name="display_name" id="display_name">
      </div>

      <div>
        <label for="email" class="block mb-2 font-medium">Email address</label>
        <input autocomplete="off" type="email" name="email" id="email">
      </div>
    </form>

    <div class="bg-grayLight/70 p-4 rounded">
      <h4 class="small-heading uppercase mb-3">Password change</h4>
      <form class="space-y-4">
        <div>
          <label for="current_password" class="block mb-2 font-medium">Current password</label>
          <input autocomplete="off" type="password" name="current_password" id="current_password">
        </div>

        <div>
          <label for="new_password" class="block mb-2 font-medium">New password</label>
          <input autocomplete="off" type="password" name="new_password" id="new_password">
        </div>

        <div>
          <label for="confirm_new_password" class="block mb-2 font-medium">Confirm new password</label>
          <input autocomplete="off" type="password" name="confirm_new_password" id="confirm_new_password">
        </div>
      </form>
    </div>

  </div>
</template>

<style scoped>

</style>