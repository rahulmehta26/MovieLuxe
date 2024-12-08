async function fetchMovieApi(id) {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGI0ZGYzNWZlMjgyZjExY2VmNGUzZjFkMDVjMDUxNiIsIm5iZiI6MTczMTg2NjkyNC4yMzYsInN1YiI6IjY3M2EzMTJjNTg1OWY5ODFlZWRmY2I3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r_egWDJwFYbnXC99lSPiCYiwCbemcrX2G-2FrMq-Y4Q',
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${String(id)}/videos?language=en-US`,
      options
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const result = data?.results.find((item) => item.type === 'Trailer')

    console.log(result)

    return result;

  } catch (error) {
    throw new Error(error);
  }
}

export default fetchMovieApi;
