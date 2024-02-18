<script setup>

</script>

<template>
  <div>
    <p>The following addresses will be used on the checkout page by default.</p>

    <div class="mt-5 grid md:grid-cols-2 gap-7 md:gap-10">
      <div>
        <div class="flex gap-2">
          <h4 class="primary-heading">Billing address</h4>
          <button class="text-primary font-semibold hover:underline">(Add)</button>
          <button class="text-primary font-semibold hover:underline">(Edit)</button>
        </div>

        <div class="mt-3">
          <p class="italic text-textGray">You have not set up this type of address yet.</p>

          <ul class="space-y-2 italic">
            <li><strong>Name:</strong> Khalid Hossain</li>
            <li><strong>Company name:</strong> Khalid Hossain</li>
            <li><strong>Country / Region:</strong> Khalid Hossain</li>
            <li><strong>Street address:</strong> Khalid Hossain</li>
            <li><strong>Town / City:</strong> Khalid Hossain</li>
            <li><strong>Post code:</strong> Khalid Hossain</li>
            <li><strong>Phone:</strong> Khalid Hossain</li>
            <li><strong>Email address:</strong> Khalid Hossain</li>
          </ul>

          <div class="bg-grayLight/70 p-4 rounded">
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
                <label for="company" class="block mb-2 font-medium">Company name(optional)</label>
                <input autocomplete="off" type="text" name="company" id="company">
              </div>

              <div>
                <label for="company" class="block mb-2 font-medium">Country / Region</label>
                <select name="country" id="country">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <div>
                <label for="street-address" class="block mb-2 font-medium">Street address</label>
                <input autocomplete="off" type="text" name="street-address" id="street-address" placeholder="House number and street name">
              </div>
              <div>
                <label for="street-address2" class="hidden">Street address</label>
                <input autocomplete="off" type="text" name="street-address2" id="street-address2" placeholder="Apartment, suite, unit, etc. (optional)">
              </div>

              <div>
                <label for="billing_city" class="block mb-2 font-medium">Town / City</label>
                <input autocomplete="off" type="text" name="billing_city" id="billing_city">
              </div>

              <div>
                <label for="billing_postcode" class="block mb-2 font-medium">Post code</label>
                <input autocomplete="off" type="text" name="billing_postcode" id="billing_postcode">
              </div>

              <div>
                <label for="billing_phone" class="block mb-2 font-medium">Phone</label>
                <input autocomplete="off" type="text" name="billing_phone" id="billing_phone">
              </div>

              <div>
                <label for="billing_email" class="block mb-2 font-medium">Email address</label>
                <input autocomplete="off" type="email" name="billing_email" id="billing_email">
              </div>

              <div>
                <input type="submit" class="btn btn-primary">
              </div>

            </form>
          </div>
        </div>
      </div>

      <div>
        <div class="flex gap-2">
          <h4 class="primary-heading">Shipping address</h4>
          <button class="text-primary font-semibold hover:underline">(Add)</button>
          <button class="text-primary font-semibold hover:underline">(Edit)</button>
        </div>
        <div class="mt-3">
          <p class="italic text-textGray">You have not set up this type of address yet.</p>

          <ul class="space-y-2 italic">
            <li><strong>Name:</strong> Khalid Hossain</li>
            <li><strong>Company name:</strong> Khalid Hossain</li>
            <li><strong>Country / Region:</strong> Khalid Hossain</li>
            <li><strong>Street address:</strong> Khalid Hossain</li>
            <li><strong>Town / City:</strong> Khalid Hossain</li>
            <li><strong>Post code:</strong> Khalid Hossain</li>
            <li><strong>Phone:</strong> Khalid Hossain</li>
            <li><strong>Email address:</strong> Khalid Hossain</li>
          </ul>

          <div class="bg-grayLight/70 p-4 rounded">
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
                <label for="company" class="block mb-2 font-medium">Company name(optional)</label>
                <input autocomplete="off" type="text" name="company" id="company">
              </div>

              <div>
                <label for="company" class="block mb-2 font-medium">Country / Region</label>
                <select name="country" id="country">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <div>
                <label for="street-address" class="block mb-2 font-medium">Street address</label>
                <input autocomplete="off" type="text" name="street-address" id="street-address" placeholder="House number and street name">
              </div>
              <div>
                <label for="street-address2" class="hidden">Street address</label>
                <input autocomplete="off" type="text" name="street-address2" id="street-address2" placeholder="Apartment, suite, unit, etc. (optional)">
              </div>

              <div>
                <label for="billing_city" class="block mb-2 font-medium">Town / City</label>
                <input autocomplete="off" type="text" name="billing_city" id="billing_city">
              </div>

              <div>
                <label for="billing_postcode" class="block mb-2 font-medium">Post code</label>
                <input autocomplete="off" type="text" name="billing_postcode" id="billing_postcode">
              </div>

              <div>
                <label for="billing_phone" class="block mb-2 font-medium">Phone</label>
                <input autocomplete="off" type="text" name="billing_phone" id="billing_phone">
              </div>

              <div>
                <label for="billing_email" class="block mb-2 font-medium">Email address</label>
                <input autocomplete="off" type="email" name="billing_email" id="billing_email">
              </div>

              <div>
                <input type="submit" class="btn btn-primary">
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>