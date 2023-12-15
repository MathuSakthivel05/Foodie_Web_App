const cartReducer = (state ={}, action) => {
    switch (action.type) {
      case "inc": {
        const currentValue = state[action.value] || 0;
        return {
          ...state,
          [action.value]: currentValue + 1,
        };
      }
      case "dec": {
        const currentValue = state[action.value] || 0;
        if (currentValue === 1) {
          return {
            ...state,
            [action.value]: 0,
          };
        } else {
          return {
            ...state,
            [action.value]: currentValue - 1,
          };
        }
      }
      default:{
        return state
      }
    }
  }
  const add = (food) => ({ type: "inc", value: food })
  const sub = (food) => ({ type: "dec", value: food })
  
  export default cartReducer ;
  export {add,sub}