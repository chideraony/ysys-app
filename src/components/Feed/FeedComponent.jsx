import React from "react";
import { BookCard } from "../STRETCH_Cards/BookCard";
import { CharacterCard } from "../STRETCH_Cards/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCard";
import "./FeedComponent.css";
import {
  Grid,
  GridCell,
} from "@brandwatch/axiom-components";

// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = (props) => {
  return (
    <div className={"feed"}>


      {/* TODO - add a placeholder for an empty feed */}
      {/* TODO - build up a list of results */}
      {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
      <BookCard />
      <CharacterCard />
      <HouseCard />

    </div>

    
  );
};
