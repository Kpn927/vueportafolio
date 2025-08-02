<template>
  <div class="pie-chart-container">
    <canvas ref="pieCanvas" :width="size" :height="size"></canvas>
    <div class="pie-chart-legend">
      <div 
        v-for="(skill, index) in skills"
        :key="index"
        class="legend-item"
      >
        <div 
          class="color-box" 
          :style="{ backgroundColor: colors[index] }"
        ></div>
        <span class="legend-text">
          {{ skill.title }} ({{ skill.percentage }}%)
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  skills: {
    type: Array,
    required: true,
  },
  size: {
    type: Number,
    default: 300,
  },
  lineWidth: {
    type: Number,
    default: 30,
  },
});

const pieCanvas = ref(null);
const colors = [
  '#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6',
  '#1ABC9C', '#F1C40F', '#E67E22', '#34495E', '#ECF0F1',
];

const drawChart = () => {
  const canvas = pieCanvas.value;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, props.size, props.size);

  const total = props.skills.reduce((sum, skill) => sum + skill.percentage, 0);
  let startAngle = 0;
  const radius = props.size / 2;
  const centerX = radius;
  const centerY = radius;

  const arcRadius = radius - props.lineWidth / 2;

  props.skills.forEach((skill, index) => {
    const sliceAngle = (skill.percentage / total) * 2 * Math.PI;
    const endAngle = startAngle + sliceAngle;

    ctx.beginPath();
    ctx.arc(centerX, centerY, arcRadius, startAngle, endAngle);
    ctx.lineWidth = props.lineWidth;
    ctx.strokeStyle = colors[index];
    ctx.stroke();

    startAngle = endAngle;
  });
};

onMounted(drawChart);
watch(() => [props.skills, props.lineWidth], drawChart, { deep: true });
</script>

<style scoped>
.pie-chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.pie-chart-legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.color-box {
  width: 15px;
  height: 15px;
  border-radius: 4px;
}

.legend-text {
  color: #fff;
  font-size: 1rem;
  font-family: Arial, sans-serif;
}
</style>
