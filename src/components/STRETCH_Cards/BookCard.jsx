import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
import {
  Card,
  CardCaption,
  CardContent,
  CardImage,
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
      "https://www.anapioficeandfire.com/api/books?pageSize=30"
    );
    console.log(response);
    setBooks(response.data);
  };

  function bookImage(name) {
    if (name === "A Game of Thrones") {
      return "https://awoiaf.westeros.org/images/thumb/9/93/AGameOfThrones.jpg/300px-AGameOfThrones.jpg";
    } else if (name === "A Clash of Kings") {
      return "https://awoiaf.westeros.org/images/thumb/3/39/AClashOfKings.jpg/300px-AClashOfKings.jpg";
    } else if (name === "A Storm of Swords") {
      return "https://awoiaf.westeros.org/images/thumb/2/24/AStormOfSwords.jpg/300px-AStormOfSwords.jpg";
    } else if (name === "A Feast for Crows") {
      return "https://awoiaf.westeros.org/images/thumb/a/a3/AFeastForCrows.jpg/300px-AFeastForCrows.jpg";
    } else if (name === "A Dance with Dragons") {
      return "https://awoiaf.westeros.org/images/7/79/ADanceWithDragons.jpg";
    } else if (name === "A Knight of the Seven Kingdoms") {
      return "https://awoiaf.westeros.org/images/thumb/5/5e/A_Knight_of_the_Seven_Kingdoms.jpg/300px-A_Knight_of_the_Seven_Kingdoms.jpg";
    } else {
      return "https://p2.piqsels.com/preview/227/127/717/book-read-book-literature-learn.jpg";
    }
  }

  return (
    <div className={"feed"}>
      {/* TODO - add a placeholder for an empty feed */}
      {/* TODO - build up a list of results */}
      {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
      <h1>Game of Thrones Books</h1>

      <button className="fetch-button" onClick={fetchData}>
        Fetch Data
      </button>

      <div className={"books"} style={{ height: "100%", width: "100%"}}>
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(", ");

            return (
              <Grid className="grid" direction="row" responsive wrap horizontalAlign="around">
                <GridCell direction="column" responsive wrap width="25">
                  <Card className="card"
                    border
                    borderRadius="medium"
                    shade="shade-1"
                    shadow
                    size="medium"
                    hover
                    key={index}
                  >
                    <CardImage
                      className="bookCover"
                      // src="https://p2.piqsels.com/preview/227/127/717/book-read-book-literature-learn.jpg" //Local images not read?
                      src={bookImage(book.name)}
                      style="max-width: 100%; height: 150px;"
                    ></CardImage>
                    <CardContent size="medium">
                      <div className="book">
                        <h2>{book.name}</h2>
                        <Separator />

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
  );
};
