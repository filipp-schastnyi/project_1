let lastofFilms=prompt('Один из последних просмотренных фильмов?');
let valueofFilms=prompt('Как оцените?');
let personalMovieDB =
{
	
	movies:{},
	actors:{},
	genres:{},
	privat:false,
};

personalMovieDB.movies = [lastofFilms, valueofFilms];
let result =alert(personalMovieDB.movies);


