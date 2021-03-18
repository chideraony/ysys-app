// Api docs: https://anapioficeandfire.com/Documentation
// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

export const getData = (searchInput, category, sidebarLimit, livingStatus) => {
  const search = searchInput ? `&name=${searchInput}` : "";
  var livingStatusQuery = "";

  if (category === "Characters") {
    if (livingStatus === "Alive") {
      livingStatusQuery = "&isAlive=true";
    } else if (livingStatus === "Dead") {
      livingStatusQuery = "&isAlive=false";
    }
  }

  console.log(
    `https://anapioficeandfire.com/api/${category}?pageSize=${sidebarLimit}${livingStatusQuery}${search}`
  );

  return fetch(
    `https://anapioficeandfire.com/api/${category}?pageSize=${sidebarLimit}${livingStatusQuery}${search}`
  ).then((response) => response.json());
};

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.
