async function fetchMovieApi(id) {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_AUTH_URL,
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
