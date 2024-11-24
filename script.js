// Existing charts (Efficiency, Results, Reports)
const efficiencyCtx = document.getElementById('efficiencyChart').getContext('2d');
const efficiencyChart = new Chart(efficiencyCtx, {
  type: 'bar',
  data: {
    labels: ['Before', 'After'],
    datasets: [{
      label: 'Efficiency',
      data: [30, 90],
      backgroundColor: ['#ffcc00', '#007bff'],
    }]
  },
  options: {
    animation: {
      duration: 2000, // Animation duration
      easing: 'easeOutQuart',
    },
  }
});

const resultsCtx = document.getElementById('resultsChart').getContext('2d');
const resultsChart = new Chart(resultsCtx, {
  type: 'pie',
  data: {
    labels: ['Unclean Data', 'Clean Data'],
    datasets: [{
      label: 'Marketing ROI',
      data: [30, 70],
      backgroundColor: ['#ff6347', '#4caf50'],
    }]
  },
  options: {
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  }
});

const reportsCtx = document.getElementById('reportsChart').getContext('2d');
const reportsChart = new Chart(reportsCtx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Report Accuracy',
      data: [50, 70, 80, 100],
      borderColor: '#4caf50',
      fill: false,
    }]
  },
  options: {
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  }
});

// New scenarios charts
const smallBusinessCtx = document.getElementById('smallBusinessChart').getContext('2d');
const smallBusinessChart = new Chart(smallBusinessCtx, {
  type: 'bar',
  data: {
    labels: ['Manual Process', 'After Data Cleaning'],
    datasets: [{
      label: 'Time Saved (hours)',
      data: [40, 15],
      backgroundColor: ['#ffcc00', '#007bff'],
    }]
  },
  options: {
    animation: {
      duration: 2000, // Animation duration
      easing: 'easeOutQuart',
    },
  }
});

const marketingCtx = document.getElementById('marketingChart').getContext('2d');
const marketingChart = new Chart(marketingCtx, {
  type: 'pie',
  data: {
    labels: ['Unclean Data', 'Clean Data'],
    datasets: [{
      label: 'Marketing ROI',
      data: [30, 70],
      backgroundColor: ['#ff6347', '#4caf50'],
    }]
  },
  options: {
    animation: {
      duration: 2000, 
      easing: 'easeOutQuart',
    },
  }
});

const ecommerceCtx = document.getElementById('ecommerceChart').getContext('2d');
const ecommerceChart = new Chart(ecommerceCtx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Sales Increase',
      data: [5000, 8000, 10000, 12000, 15000],
      borderColor: '#4caf50',
      fill: false,
    }]
  },
  options: {
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  }
});

// Additional scenarios would be added here in the same way.
