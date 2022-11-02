const getStateLocalStorage = () => {
  try {
    const getState = localStorage.getItem('filters');

    if (getState === null) {
      return undefined;
    }
    return JSON.parse(getState);
  } catch (error) {
    return undefined;
  }
}

const setStateLocalStorage = (filters) => {
  try {
    const setStateFilters = JSON.stringify(filters);
    localStorage.setItem('filters', setStateFilters);
  } catch (error) {
    console.log(error);
  }
}

export { getStateLocalStorage, setStateLocalStorage };