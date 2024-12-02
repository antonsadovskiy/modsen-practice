export const isCorrectFilter = (filter: string) => {
  if (filter === "") {
    return false;
  }
  if (filter === "price") {
    return true;
  }
  if (filter === "category") {
    return true;
  }
  if (filter === "sort") {
    return true;
  }
  return false;
};
