const reducer = (cartdata, action) => {
    switch (action.type) {
      case "inc": {
        const currentValue = cartdata[action.value] || 0;
        return [
          ...cartdata,
           currentValue + 1,
        ];
      }
      case "dec": {
        const currentValue = cartdata[action.value] || 0;
        if (currentValue === 1) {
          return {
            ...cartdata,
            [action.value]: 0,
          };
        } else {
          return {
            ...cartdata,
            [action.value]: currentValue - 1,
          };
        }
      }
    }
  }

  export default reducer ;