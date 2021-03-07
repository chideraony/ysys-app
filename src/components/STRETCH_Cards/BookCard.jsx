import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';
import {
    Card,
    CardCaption,
    CardContent,
    Separator,
    Grid,
    GridCell,
  } from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Books

// TODO - make sure BookCard is expecting the right props!
export const BookCard = () => {

    const [books, setBooks] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
          'https://www.anapioficeandfire.com/api/books?pageSize=30'
        );
        console.log(response);
        setBooks(response.data);
      };

      return <div className={'feed'} style={{height: "100%", width: "100%"}}>
        {/* TODO - add a placeholder for an empty feed */}
        {/* TODO - build up a list of results */}
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
        <h1>Game of Thrones Books</h1>

        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button> 

        <div className={"books"} style={{height: "100%", width: "100%"}}>
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(', ');

            return (

             <Grid direction="column" responsive wrap>

            <GridCell direction="column" fit="medium" width="300px">

              <Card border borderRadius="medium" shade="shade-1" shadow size="medium" hover key={index}>
              <CardContent size="medium">
              
              <div className="book" >

              <br/>

                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>
                <Separator/>

                <div className="details" key="index">

                  <p>👨: {authors}</p>
                  <p>📖: {book.numberOfPages} pages</p>
                  <p>🏘️: {book.country}</p>
                  <p>⏰: {cleanedDate}</p>
                </div>
              </div>
              </CardContent>
              </Card>
              
              </GridCell>

              </Grid>

              
            );
          })}
      </div>
    
    </div>
};