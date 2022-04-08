<!-- vistas componentes de vue -->
<template >
<div >
 <ring-loader :loading="isloading" :color="'#68d391'" :size="'300px'"></ring-loader>
    <PxAssetsTable v-if="!isloading" :assets="assets" />
</div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from "@/components/PxAssetsTable";
import RingLoader from "vue-spinner/src/RingLoader.vue";

export default {
        name: 'Home',

        components: { PxAssetsTable, RingLoader },

        data() {
            return {
                isloading: false,
                assets: []
            }
        },

        created () {
            this.isloading = true

            api.getAssets()
            .then(assets => (this.assets = assets))
            .finally( () => this.isloading = false)
        }

    };
</script>
    <style scoped>

</style>