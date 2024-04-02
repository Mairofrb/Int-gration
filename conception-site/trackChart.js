function sortAndSelectTopFiveTracks(data) {
    const sortedData = data.sort((a, b) => b.popularity - a.popularity);
    return sortedData.slice(0, 5);
}


export function createTrackChart(data) {
    const topFiveTracks = sortAndSelectTopFiveTracks(data);

    const ctx = document.getElementById('trackChart').getContext('2d');
    if (window.myChartInstance) {
        window.myChartInstance.destroy();
    }
    window.myChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                topFiveTracks[2].name,
                topFiveTracks[0].name,
                topFiveTracks[4].name,
                topFiveTracks[1].name,
                topFiveTracks[3].name
            ],
            datasets: [{
                label: 'Track Popularity',
                data: [
                    topFiveTracks[2].popularity,
                    topFiveTracks[0].popularity,
                    topFiveTracks[4].popularity,
                    topFiveTracks[1].popularity,
                    topFiveTracks[3].popularity
                ],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
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
