const splide = new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: 4,
  perMove: 4,
  padding: '3rem',
  gap: '1rem',
  rewind: true,
  rewindByDrag: true,
  pagination: false,
  autoplay: true,
  speed: 400,
});

splide.mount();

const splide2 = new Splide('#slider2', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: 4,
  perMove: 4,
  padding: '3rem',
  gap: '1rem',
  rewind: true,
  rewindByDrag: true,
  pagination: false,
  autoplay: true,
  speed: 400,
})

splide2.mount();