// Gerar uma lista de filmes com o tamanho que eu desejar
export function getLISTmovies(size, movies){
    let popularMovies = [];

    for(let i = 0, l = size; i< l; i++){
        popularMovies.push(movies[i])  // colocar tudo dentro de um array 
    }

    return popularMovies;
}