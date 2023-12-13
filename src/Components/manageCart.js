const reducer = (state, action) => {
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
  }
}

export default reducer ;