export const addItem = item => {
  return {
    type: "AddItem",
    data: item
  };
};

export const removeItem = id => {
  return {
    type: "DeleteItem",
    id: id
  }
}