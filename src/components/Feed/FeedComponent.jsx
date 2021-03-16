import React from "react";
import { BookCard } from "../STRETCH_Cards/BookCard";
import { CharacterCard } from "../STRETCH_Cards/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCard";
import "./FeedComponent.css";
import { Text } from "@brandwatch/axiom-components";

// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = ({ responseData, sidebarCategories }) => {
  console.log(responseData);
  return (
    <div className={"feed"}>
      {/* TODO - add a placeholder for an empty feed */}
      {/* TODO - build up a list of results */}
      {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}

      {responseData.length === 0 && (
        <div className={"empty-feed-prompt"}>
          <Text textColor="disabled">Nothing to show...</Text>
        </div>
      )}
      {responseData &&
        responseData.map((responseData, index) => {
          return (
            <div key={responseData.name + "-" + index}>
              {sidebarCategories === "Characters" && (
                <CharacterCard character={responseData} />
              )}
              {sidebarCategories === "Houses" && (
                <HouseCard house={responseData} />
              )}
              {sidebarCategories === "Books" && (
                <BookCard book={responseData} />
              )}
            </div>
          );
        })}
    </div>
  );
};
