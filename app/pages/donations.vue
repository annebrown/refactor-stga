<!--------@/pages/donations.vue------------------------------------------------>
<template><div>
<NuxtLayout name="pages">

    <p>
        If you would like to support Save the Grove Again please consider making a donation.
    </p>
    <p>
        Donations are used to cover the cost of materials including lawn signs, flyers, posters, buttons, website domain name etc. 
    </p>
    <p>
        Donations are accepted via Interac E-Transfer. Please send your contribution to:  <a href="mailto:savethegroveagain@gmail.com" class="text-green-600">savethegroveagain@gmail.com</a>
    </p>
    <p>
        If you are not able to make a donation and would like to help in another way, please fill out our  
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc611weSVb3qvnl6KJd6AZ_lmRn0yStEYDpxIkE9bVJhFTeUQ/viewform?usp=sf_link" class="text-green-600"> volunteer form</a>.
    </p>

    <div class="w-full pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
            class="relative m-0 p-0 rounded-md border-5 border-(--ui-secondary-4) dark:border-(--ui-primary-2)"
            src="/images/donations/lady-button-and-sign.png"
            alt="Expectant mother, wearing STGA button, and holding STGA lawn sign"
            width=408
            height=544
        />
        <img
            class="relative m-0 p-0 rounded-md border-5 border-(--ui-secondary-4) dark:border-(--ui-primary-2)"
            src="/images/donations/table-and-materials.png"
            alt="Display table with buttons, flyers, and other STGA committee items"
            width=408
            height=544
        />
        <img
            class="relative m-0 p-0 rounded-md border-5 border-(--ui-secondary-4) dark:border-(--ui-primary-2)"
            src="/images/donations/lawn-sign.png"
            alt="STGA lawn sign on a supporter's front lawn"
            width=408
            height=544
        />
    </div>

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Donations', 
    })
</script>
<!--------@/pages/donations.vue------------------------------------------------>