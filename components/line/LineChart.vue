
import type { LineChart } from '#build/components';
<template>
  <v-chart :option="option" autoresize />
</template>

<script>
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
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
  LineChart,
  CanvasRenderer
])

export default defineComponent({
  name: 'LineChart',
  components: {
    VChart,
  },
  setup() {
    const option = ref({
      tooltip: {
        trigger: 'item',
      },
      xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E'],
      },
      yAxis: {
        axisLabel: { show: false }
      },
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: 'line',
          smooth: true,
        }
      ]
    })
    return { option }
  }
})
</script>