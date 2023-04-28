import css from './Section.module.css';
import React from 'react';

export default function Section({ title, children }) {
  return (
    <>
      <h2 className={css.paragraph}>{title}</h2>
      {children}
    </>
  );
}
