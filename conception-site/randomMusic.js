function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


export function displayRandomMusic(data) {
  shuffleArray(data);
  const firstTen = data.slice(0, 10);
  const container = document.createElement('div');
  container.className = 'd-flex flex-column gap-5 mt-5';

  firstTen.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'd-flex justify-content-around align-items-start flex-wrap gap-2';
    row.innerHTML = `
      <p class="fs-3">${index + 1}</p>
      <div style="height: 70px; width:70px;">
        <img class="h-100 w-100 rounded-circle border border-3 border-light" src="${item.album.images[0].url}" alt="">
      </div>
      <div class="w-50">
        <p>${item.album.name}</p>
        <p>${item.name}</p>
      </div>
    `;
    container.appendChild(row);
  });

  const votrePreferes = document.querySelector('.votrePrefere');
  votrePreferes.appendChild(container);
}
