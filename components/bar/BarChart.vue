<template>
  <v-chart :option="option" autoresize />
</template>

<script>
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import VChart from 'vue-echarts';
import { ref, defineComponent } from 'vue'
import { CanvasRenderer } from 'echarts/renderers'

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer
])

export default defineComponent({
  name: 'BarChart',
  components: {
    VChart,
  },
  setup() {
    const option = ref({
      tooltip: {
        trigger: 'item',
      },
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        axisLabel: { show: false }
      },
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25],
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
          }
        }
      ]
    })
    return { option }
  }
});
</script>