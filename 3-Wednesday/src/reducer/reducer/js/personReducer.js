const personReducer = (person, action) => {
  switch (action.type) {
    case "INCREASE_AGE":
      return { ...person, age: person.age + 1 };
    case "CHANGE_LASTNAME":
      return { ...person, lastname: action.lastname };
    default:
      return person;
  }
};

const initialState = {
  firstname: "Liesa",
  lastname: "Huppertz",
  age: 30,
};

const action = {
  type: "INCREASE_AGE",
  lastname: "Wieruch",
  
  
};

const result = personReducer(initialState, action);

console.log(result);
