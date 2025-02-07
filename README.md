# 📊 Chart.js - Simple Yet Powerful JavaScript Charting Library

Chart.js is a **lightweight, flexible, and responsive** JavaScript library for creating **beautiful and interactive charts** 🎨📈. It supports multiple chart types with smooth animations and extensive customization options.

## ✨ Features
- ✅ Easy to use & well-documented 📖
- ✅ Highly customizable 🎨
- ✅ Supports animations & tooltips 🎭
- ✅ Works with React, Vue, and Vanilla JS ⚡
- ✅ Responsive & scalable 📏
- ✅ Supports multiple datasets 📊

## 🚀 Installation

### Using npm:
```sh
npm install chart.js
```

### Using CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

## 🔧 Usage

### Basic Example
```html
<canvas id="myChart"></canvas>

<script>
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
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
</script>
```

## 📚 Documentation
For more details, visit the **[official documentation](https://www.chartjs.org/docs/latest/)**.

## 🎨 Available Chart Types
- 📈 Line Chart
- 📊 Bar Chart
- 🍩 Doughnut Chart
- 🥧 Pie Chart
- 📡 Radar Chart
- 🎯 Polar Area Chart
- ⚡ Scatter & Bubble Charts

## 🌟 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## 📜 License
This project is licensed under the **MIT License**.

## ⭐ Show Some Love
If you found this useful, **star the repository** ⭐ and share it! 🚀
