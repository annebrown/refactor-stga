<!--------@/pages/donations---------------------------------------------------->
<template><div>

 <div>
    
    <p>
        <UButton to='/admin/analytics/dash'>Dash</UButton>
    </p>


    <p>
        <UButton to="/admin/analytics/display-table" class="text-2xl font-extrabold">
            Table
        </UButton>
    </p>

    <p>
        <UButton to="/admin/analytics/last-ditch" class="text-2xl font-extrabold">
            Last Ditch
        </UButton>
    </p>


    <p>
        <UButton to="/admin/analytics/simple-test" class="text-2xl font-extrabold">
            Simple Test
        </UButton>
    </p>

    <!-- <p>
        AnalyticsSimpleTest: <AnalyticsSimpleTest />
    </p>


    <p>
        AnalyticsDisplayTable: <AnalyticsDisplayTable />
    </p> -->

    <FleetGoBackButton class="pt-8"/>

</div>

</div></template>
<script setup lang='ts'>
definePageMeta({ 
    title: 'Analytics from Downloads', 
})
</script>
<!--------@/pages/donations---------------------------------------------------->
