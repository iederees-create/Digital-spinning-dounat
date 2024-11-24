// Load the Chart.js library to create dynamic visualizations
window.onload = function() {
  // Example: Business Insights Chart (Bar Chart)
  const ctxBusiness = document.getElementById('businessChart').getContext('2d');
  const businessChart = new Chart(ctxBusiness, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Business Growth with Clean Data',
        data: [50, 70, 90, 120], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Example: Analytics Insights Chart (Line Chart)
  const ctxAnalytics = document.getElementById('analyticsChart').getContext('2d');
  const analyticsChart = new Chart(ctxAnalytics, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Analytics with Clean Data',
        data: [10, 30, 50, 70, 90], // Example data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
