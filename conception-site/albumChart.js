function sortAndSelectTopFive(data) {
  const sortedData = data.sort((a, b) => b.album.popularity - a.album.popularity);
  return sortedData.slice(0, 5);
}

export function createAlbumChart(data) {
  const topFiveAlbums = sortAndSelectTopFive(data);

  const ctx = document.getElementById('albumChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        topFiveAlbums[2].album.name,
        topFiveAlbums[0].album.name,
        topFiveAlbums[4].album.name,
        topFiveAlbums[1].album.name,
        topFiveAlbums[3].album.name
      ],
      datasets: [{
        label: '# of Votes',
        data: [
          topFiveAlbums[2].album.popularity,
          topFiveAlbums[0].album.popularity,
          topFiveAlbums[4].album.popularity,
          topFiveAlbums[1].album.popularity,
          topFiveAlbums[3].album.popularity
        ],
        backgroundColor: [
          'rgba(201, 203, 207, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(201, 203, 207, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgba(201, 203, 207, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(201, 203, 207, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            stepSize: 20,
            min: 60,
            max: 100
          }
        }
      }
    }
  });
}

