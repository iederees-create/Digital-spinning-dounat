// Load the Chart.js library to create dynamic visualizations
window.onload = function() {
  // Example: Visualization for a target audience (Investors)
  const ctx = document.getElementById('investorChart').getContext('2d');
  const investorChart = new Chart(ctx, {
    type: 'bar', // You can change this to line, radar, etc.
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        label: 'Investment Growth Over Time',
        data: [5, 10, 15, 20, 25, 30], // Example data
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
}
