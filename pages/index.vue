<template>
    <div class="h-full grid gap-x-4 gap-y-5 grid-cols-3 grid-rows-3 p-3">
      <div class="bg-white rounded-xl px-5 py-3">
        <div class="flex flex-col h-full">
          <div class="flex items-center">
            <v-icon icon="mdi-chart-bell-curve-cumulative" class="mr-3" />
            <h3 class="grow text-xl font-bold">CTR</h3>
          </div>
          <div class="grow border-b-2 border-neutral-200 flex justify-around items-end gap-3">
            <div class="bg-primary-50 w-1/5 h-10 rounded-t-xl"></div>
            <div class="bg-primary-400 w-1/5 h-20 rounded-t-xl"></div>
            <div class="bg-primary-600 w-1/5 h-40 rounded-t-xl"></div>
            <div class="bg-primary-500 w-1/5 h-32 rounded-t-xl"></div>
            <div class="bg-primary-100 w-1/5 h-5 rounded-t-xl"></div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl px-5 py-3">
        <div class="flex flex-col h-full">
          <div class="flex items-center">
            <v-icon icon="mdi-cash" class="mr-3" />
            <h3 class="grow text-xl font-bold">CPC</h3>
          </div>
          <div class="h-full flex flex-col justify-end">
            <div class="flex">
              <div class="flex items-center">
              <h3 class="text-xl md:text-6xl lg:text-6xl xl:text-8xl font-bold mr-4">$1.99</h3>
                <v-chip class="bg-success text-xs lg:text-sm xl:text-xl lg:py-5 lg:px-3 xl:py-8">
                  <v-icon icon="mdi-arrow-up" class="mr-1" />
                  <span class="mr-1">99.99%</span>
                </v-chip>
              </div>
            </div>
            <p class="text-xs md:text-sm lg:text-lg xl:text- text-grey">Up 3.2% from last month</p>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl px-5 py-3">
        <div class="h-full flex flex-col">
          <div class="flex items-center">
            <v-icon icon="mdi-account-convert" class="mr-3" />
            <h3 class="grow text-xl font-bold">CPL</h3>
          </div>
          <LineChart />
        </div>
      </div>
      <div class="bg-white h-full col-span-2 row-span-2 rounded-xl px-5 py-3">
        <div class="h-full flex flex-col">
          <div class="flex items-center">
            <v-icon icon="mdi-chart-arc" class="mr-3" />
            <h3 class="grow text-xl font-bold">Analysis</h3>
          </div>
          <v-chart class="chart" :option="option" autoresize />
        </div>
      </div>
      <div class="bg-white row-span-2 rounded-xl px-5 py-3">
        <div class="h-full flex flex-col">
          <div class="flex w-full">
            <v-icon icon="mdi-cash-multiple" class="mr-3" />
            <h3 class="grow text-xl font-bold">Spend</h3>
          </div>
          <BarChart />
        </div>
      </div>
    </div>
</template>

<script>
import BarChart from '~/components/bar/BarChart.vue';
import LineChart from '~/components/line/LineChart.vue';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import { ref, defineComponent } from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default defineComponent({
  name: 'HelloWorld',
  components: {
    VChart,
  },
  setup() {
    const option = ref({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
      },
      series: [
        {
          name: 'Traffic Sources',
          type: 'pie',
          radius: '75%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 234, name: 'Ad Networks' },
            { value: 135, name: 'Video Ads' },
            { value: 1548, name: 'Search Engines' },
          ],
        },
      ],
    });

    return { option };
  },
});
</script>
