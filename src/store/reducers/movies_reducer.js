// const action = {
//   type: 'MOVIES_LIST',
//   payload: [{ id: 1, name: 'Next Friday' }, { id: 2, name: 'Boys in the hood' }],
// };

export default function(state = {}, action) {
  switch (action.type) {
    case 'MOVIES_LIST':
      return { ...state, movies:action.payload };
    case 'DIRECTORS_LIST':
      return { ...state, directors:action.payload };
    default:
      return state;
  }
}
