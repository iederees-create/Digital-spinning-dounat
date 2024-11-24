// Small Business Chart (Bar Chart)
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

// Marketing Campaign Success (Pie Chart)
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

// E-commerce Sales (Line Chart)
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
