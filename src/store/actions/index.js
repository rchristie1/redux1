export const moviesLst = () => {
  return {
    type: 'MOVIES_LIST',
    payload: [
      { id: 1, name: 'Next Friday' },
      { id: 2, name: 'Boys in the hood' },
      {id: 3, name: 'Tarzan'}
    ],
  };
};
export const directorsList = () => {
  return {
    type: 'DIRECTORS_LIST',
    payload: [
      { id: 1, name: 'Will Smith' },
      { id: 2, name: 'Taritno' },
      {id: 3, name: 'Kobe'}
    ],
  };
};
