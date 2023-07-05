import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
  
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie, index) => (
        
        <Movie
          key={index}
          title={movie}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
