export const forEach = chiikawas.forEach((yamaokaya) => {
  ChiikawaMovie.push(
    new Chiikawavideo(
      yamaokaya.story,
      yamaokaya.title,
      yamaokaya.image,
      yamaokaya.id
    )
  );
});

ChiikawaMovie.forEach((movie) => {
  contents.insertAdjacentHTML("beforeend", movie.descript());
});
