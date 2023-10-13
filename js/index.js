const splide = new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: 4,
  padding: '3rem',
  gap: '1rem',
  autoScroll: {
    speed: 1,
  },
});

splide.mount();

// const firstRequest = new XMLHttpRequest();
// firstRequest.addEventListener('load', function() {
//   console.log('IT WORKED!!!');
//   console.log(this.responseText);
// })
// firstRequest.addEventListener('error', (error) => {
//   console.log('ERROR!!!!', error)
// })
// firstRequest.open('GET', 'https://swapi.dev/api/planets/');
// firstRequest.send();
// console.log('Request sent');

// fetch('https://swapi.dev/api/planets/')
//   .then((reponse) => {
//     if (!reponse.ok) {
//       throw new Error('An error occured');
//     }
//     return reponse.json();
//   })
//   .then((data) => {
//     const filmURL = data.results[0].films[0];
//     return fetch(filmURL);
//   })
//   .then((reponse) => {
//     if (!reponse.ok) {
//       throw new Error('An error occured');
//     }
//     return reponse.json()
//   })
//   .then((data) => {
//     console.log(data.title);
//   })
//   .catch((error) => {
//     console.log('Error', error);
//   })

fetch('jdfifieieifeiferife')
  .then((response) => {
    if(!response.ok) {
      throw new Error('An error occured');
    }
    return response.json()
  })
  .then((data) => {
    console.log(data);
  })