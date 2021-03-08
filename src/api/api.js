// Api docs: https://anapioficeandfire.com/Documentation
// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses


export const getData = (searchInput, sidebarLimit, sidebarCategories, setResponseData) => {
    const search = searchInput ? `&name=${searchInput}` : '';
    return fetch(`https://anapioficeandfire.com/api/${sidebarCategories}?pageSize=${sidebarLimit}&name=${search}`)
        .then(response => response.json())
}



/*
export const getData = (searchInput, sidebarCategories, sidebarLimit) => {
        return fetch(`https://www.anapioficeandfire.com/api/${sidebarCategories}/pageSize=${sidebarLimit}`)
        .then((response) => response.json())
        .then((responseData) => setResponseData(responseData));
    };
    */

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.
