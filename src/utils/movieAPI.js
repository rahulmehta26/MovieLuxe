const options = {  
    method: 'GET',  
    headers: {  
     accept: 'application/json',  
     Authorization: import.meta.env.VITE_AUTH_URL 
    }  
  };  
    
  async function getPopularMovies(category = 'popular') {  
    try {  
     const response = await fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options);  
     if (!response.ok) {  
      throw new Error(`HTTP error! status: ${response.status}`);  
     }  
     const data = await response.json();  
     return data?.results;
    } catch (error) {  
      throw new Error(error);  
    }  
  }  
    
export default getPopularMovies;
  