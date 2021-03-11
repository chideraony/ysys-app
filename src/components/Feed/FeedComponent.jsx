import React from "react";
import { BookCard } from "../STRETCH_Cards/BookCard";
import { CharacterCard } from "../STRETCH_Cards/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCard";
import "./FeedComponent.css";
import Grid from "@material-ui/core/Grid"

const recordTypes = {
  Characters:CharacterCard,
  Houses:HouseCard,
  Books:BookCard
}


// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = ({responseData, sidebarCategories}) => {
  return (
    <div className={"feed"}>

      {responseData.map((record) => {
        const Component = recordTypes[sidebarCategories]

        console.log(record, Component, sidebarCategories)
        return <Component record={record}/>
      })}
      {/* TODO - add a placeholder for an empty feed */}
      {/* TODO - build up a list of results */}
      {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}

    </div>
    
  );
};
