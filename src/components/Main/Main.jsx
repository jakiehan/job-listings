import React from 'react';
import './Main.css';
import VacanciesList from '../VacanciesList/VacanciesList.jsx';
import FilterPanel from '../FilterPanel/FilterPanel.jsx';

const Main = () => (
  <main className="main">
    <FilterPanel />
    <VacanciesList />
  </main>
);

export default Main;
