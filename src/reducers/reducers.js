// src/redux/reducers.js
const initialState = {
    selectedMenu: '',
    foodData: [
      { id: 1, name: 'Pizza' },
      { id: 2, name: 'Burger' },
      { id: 3, name: 'Pasta' }
    ],
    placesData: [
      { id: 1, name: 'Beach' },
      { id: 2, name: 'Mountains' },
      { id: 3, name: 'City' }
    ],
    statesData: [
      { id: 1, name: 'California' },
      { id: 2, name: 'Texas' },
      { id: 3, name: 'New York' }
    ]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SELECT_MENU':
        return {
          ...state,
          selectedMenu: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  