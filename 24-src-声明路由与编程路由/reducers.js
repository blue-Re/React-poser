export const initState = {
  name: 'test',
  hobby: [
    { id: 1, name: 'lol' },
    { id: 2, name: 'cf' },
    { id: 3, name: 'dnf' }
  ]
}

export const reducer = (preState, action) => {
  const {type, value} = action;
  const newState = {...preState}
  switch (type) {
    case "cat-name":
      newState.name = value;
      return newState; 
    case "dog-name":
      newState.name = value;
      return newState; 
    case "cat-add":
      newState.hobby = [...newState.hobby, value];
      return newState
    case "dog-add":
      newState.hobby = [...newState.hobby, value];
      return newState
    default:
      return preState
  }
}