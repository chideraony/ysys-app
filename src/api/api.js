// Api docs: https://anapioficeandfire.com/Documentation
// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses


export const getData = (searchInput, category, sidebarLimit) => {
    const search = searchInput ? `&name=${searchInput}` : '';
    console.log(searchInput)
    console.log(`https://anapioficeandfire.com/api/${category}?pageSize=${sidebarLimit}${search}`)
    return fetch(`https://anapioficeandfire.com/api/${category}?pageSize=${sidebarLimit}${search}`)
        .then(response => response.json())
}


// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.
