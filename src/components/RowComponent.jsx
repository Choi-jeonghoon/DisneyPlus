import React, { useState } from 'react';
import './Row.css';

const RowComponent = ({ title, id, data }) => {
  return (
    <div>
      <h2 className='title'>{title}</h2>
      <div className='slider'>
        <div
          className='slider_arrow_left'
          onClick={() => {
            const element = document.getElementById(id);
            element.scrollLeft -= 2000;
          }}
        >
          <span className='arrow'>{'<'}</span>
        </div>
        <div id={id} className='row_posters'>
          {data.map((item) => (
            <img
              key={item.id}
              className='row_poster'
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt={item.title}
              // onClick={() => handleClick(item)}
            />
          ))}
        </div>
        <div
          className='slider_arrow_right'
          onClick={() => {
            const element = document.getElementById(id);
            element.scrollLeft += 2000;
          }}
        >
          <span className='arrow'>{'>'}</span>
        </div>
      </div>
    </div>
  );
};

export default RowComponent;
