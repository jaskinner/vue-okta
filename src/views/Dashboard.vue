<template>
    <div class="charts">
        <img alt="Vue logo" src="../assets/images/cbs-tech-logo.svg" />
        <DashboardCharts msg="Welcome to Your Dashboard" />
    </div>
</template>

<script>
    // @ is an alias to /src
    import DashboardCharts from "@/components/DashboardCharts.vue";

    export default {
        name: "charts",
        components: {
            DashboardCharts
        }
    };
</script>
