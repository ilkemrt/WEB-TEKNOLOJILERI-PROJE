document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const movieNameInput = document.getElementById('movie-name');
    const movieInfo = document.getElementById('movie-info');
    const apiKey = "552cdfb3"; 
  
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const movieName = movieNameInput.value.trim();
      console.log('Aranan film:', movieName); 
      if (movieName) {
        searchMovie(movieName);
      }
    });
  
    function searchMovie(movieName) {
      movieInfo.innerHTML = '<p>Film bilgileri yükleniyor...</p>';
      const apiUrl = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`;
      console.log('API URL:', apiUrl); 
  
      fetch(apiUrl)
        .then(response => {
          console.log('API yanıtı:', response);
          return response.json();
        })
        .then(data => {
          console.log('API verisi:', data); 
          if (data.Response === "True") {
            displayMovieInfo(data);
          } else {
            movieInfo.innerHTML = '<p>Film bilgileri bulunamadı.</p>';
          }
        })
        .catch(error => {
          movieInfo.innerHTML = '<p>Film bilgileri alınamadı.</p>';
          console.error('API çağrı hatası:', error);
        });
    }
  
    function displayMovieInfo(data) {
      movieInfo.innerHTML = `
        <h3>${data.Title} (${data.Year})</h3>
        <p><strong>Tür:</strong> ${data.Genre}</p>
        <p><strong>Yönetmen:</strong> ${data.Director}</p>
        <p><strong>Oyuncular:</strong> ${data.Actors}</p>
        <p><strong>Özet:</strong> ${data.Plot}</p>
        <img src="${data.Poster}" alt="${data.Title} Poster" class="img-fluid">
      `;
    }
  });
  
 


