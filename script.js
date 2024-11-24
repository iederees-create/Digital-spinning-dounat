// Efficiency Chart - Animated Bar Chart showing time saved
const efficiencyChartCtx = document.getElementById('efficiencyChart').getContext('2d');
const efficiencyChart = new Chart(efficiencyChartCtx, {
  type: 'bar',
  data: {
    labels: ['Raw Data', 'Clean Data'],
    datasets: [{
      label: 'Time Saved (Hours)',
      data: [15, 5],
      backgroundColor: ['rgba(220, 53, 69, 0.7)', 'rgba(40, 167, 69, 0.7)'],
      borderColor: ['rgba(220, 53, 69, 1)', 'rgba(40, 167, 69, 1)'],
      borderWidth: 1,
      animation: {
        duration: 2000,  // Animation duration (2 seconds)
        easing: 'easeInOutCubic',
      },
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 20,  // Max value to visualize the difference
      },
    },
  }
});

// Results Chart - Animated Pie Chart showing improved ROI
const resultsChartCtx = document.getElementById('resultsChart').getContext('2d');
const resultsChart = new Chart(resultsChartCtx, {
  type: 'pie',
  data: {
    labels: ['Targeted Audience', 'Unfocused Audience'],
    datasets: [{
      label: 'Marketing Results (Clean Data)',
      data: [80, 20],
      backgroundColor: ['rgba(0, 123, 255, 0.7)', 'rgba(108, 117, 125, 0.7)'],
      borderColor: ['rgba(0, 123, 255, 1)', 'rgba(108, 117, 125, 1)'],
      borderWidth: 1,
      animation: {
        animateRotate: true,
        duration: 2000,
        easing: 'easeInOutQuad',
      },
    }]
  },
  options: {
    responsive: true,
  }
});

// Report Chart - Animated Radar Chart showing report quality
const reportChartCtx = document.getElementById('reportChart').getContext('2d');
const reportChart = new Chart(reportChartCtx, {
  type: 'radar',
  data: {
    labels: ['Accuracy', 'Clarity', 'Speed', 'Cost', 'Efficiency'],
    datasets: [{
      label: 'Report Quality (Clean Data)',
      data: [85, 90, 80, 70, 95],
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1,
      animation: {
        duration: 2000,
        easing: 'easeInOutQuad',
      },
    }]
  },
  options: {
    responsive: true,
  }
});
