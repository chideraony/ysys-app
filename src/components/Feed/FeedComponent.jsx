import React from "react";
import { BookCard } from "../STRETCH_Cards/BookCard";
import { CharacterCard } from "../STRETCH_Cards/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCard";
import { Text } from "@brandwatch/axiom-components";

import "./FeedComponent.css";

// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = ({ responseData, spoilerFree }) => {
  return (
    <div className={"feed"}>
      {/* TODO - add a placeholder for an empty feed */}
      {/* TODO - build up a list of results */}
      {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
      {console.log(responseData.data)}
      {responseData.data.length === 0 && (
        <div className={"empty-feed-prompt"}>
          <Text textColor="disabled">Nothing to show...</Text>
            <img src={"https://i.pinimg.com/originals/f5/44/9f/f5449f2145844a801a1e192e29e3a168.jpg"}
            className={"holding-image"}
            height={"600px"}
            width={"750px"}></img>
        </div>
      )}
      {responseData &&
        responseData.data.map((d, index) => {
          return (
            <div key={d.name + "-" + index}>
              {responseData.category === "Characters" && (
                <CharacterCard character={d} spoilerFree={spoilerFree} />
              )}
              {responseData.category === "Houses" && <HouseCard house={d} />}
              {responseData.category === "Books" && <BookCard book={d} />}
            </div>
          );
        })}
    </div>
  );
};
