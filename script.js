// DARK MODE
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// TOGGLE CHART VISIBILITY
function toggleCharts() {
    document.querySelectorAll(".chart-item").forEach(card => {
        card.style.display = card.style.display === "none" ? "block" : "none";
    });
}

// HIGHLIGHT CARD ON CLICK
function highlightCard(card) {
    document.querySelectorAll(".chart-item").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
}

// DOWNLOAD CHART
function downloadChart(chart, event) {
    event.stopPropagation();
    const link = document.createElement("a");
    link.href = chart.toBase64Image();
    link.download = "chart.png";
    link.click();
}

// BAR CHART
const barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales ($)',
            data: [12000, 15000, 10000, 17000, 20000, 25000],
            backgroundColor: '#36a2eb'
        }]
    }
});

// LINE CHART
const lineChart = new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Visitors',
            data: [3000, 4000, 3500, 4500, 5000, 6000],
            borderColor: '#ff6384',
            fill: false,
            tension: 0.4
        }]
    }
});

// PIE CHART
const pieChart = new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
        labels: ['Desktop', 'Tablet', 'Mobile'],
        datasets: [{
            data: [55, 25, 20],
            backgroundColor: ['#36a2eb', '#ffce56', '#cc65fe']
        }]
    }
});
