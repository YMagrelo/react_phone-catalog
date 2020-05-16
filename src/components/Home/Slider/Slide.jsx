/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Slider.scss';
import { NavLink } from 'react-router-dom';

export const Slide = (props) => (
  <NavLink to="/phones">
    <img
      src={props.slide}
      alt="phone samsung"
      className="slide__img"
    />
  </NavLink>
);
