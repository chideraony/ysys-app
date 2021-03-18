import React, { useState } from "react";
import "./Card.css";
import {
  Card,
  CardCaption,
  CardContent,
  Separator,
  Grid,
  GridCell,
  Heading,
  CardImage,
  List,
  ListItem,
} from "@brandwatch/axiom-components";
import "./Card.css";

// TODO - create a component which displays information about Houses

// TODO - make sure HouseCard is expecting the right props!
export const HouseCard = ({ house }) => {
  function houseImage(region) {
    if (region === "The Riverlands") {
      return "https://i.imgur.com/ZmQEe51.jpg";
    } else if (region === "The Reach") {
      return "https://i.imgur.com/zhA2Trn.jpg";
    } else if (region === "The North") {
      return "https://i.imgur.com/FQJSQ27.jpg";
    } else if (region === "Dorne") {
      return "https://i.imgur.com/hk0gHYL.jpg";
    } else if (region === "The Vale") {
      return "https://i.imgur.com/5lJ6U7j.png";
    } else if (region === "The Westerlands") {
      return "https://i.imgur.com/Z54ylIh.jpg";
    } else if (region === "The Stormlands") {
      return "https://i.imgur.com/WhezIyi.jpg";
    } else if (region === "The Crownlands") {
      return "https://i.imgur.com/xaHS3zt.jpg";
    } else if (region === "Iron Islands") {
      return "https://i.imgur.com/nqWyKG9.jpg";
    } else if (region === "The Neck") {
      return "https://i.imgur.com/reyXne4.jpg";
    } else {
      return "https://i.imgur.com/ivbCD57.jpg";
    }
  }

  return (
    <div className={"feed"} style={{ height: "100%", width: "100%" }}>
      <div className="card">
        <div className={"houses"} style={{ height: "100%", width: "100%" }}>
          <Heading>
            <h2>{house.name}</h2>
          </Heading>

          <CardImage
            className="houseImage"
            src={houseImage(house.region)}
            height={"150px"}
            width={"300px"}
          >
            <CardCaption textStrong>
              {" "}
              <List style="center"> {house.region} </List>{" "}
            </CardCaption>
          </CardImage>

          <br />

          <div className="details" key="index">
            {house.region !== "" && (
              <Heading textSize={"large"}>
                <strong>🏘️</strong>: {house.region}
              </Heading>
            )}

            {house.words !== "" && (
              <Heading textSize={"small"}>
                <strong>Words</strong>: <em>{house.words}</em>
              </Heading>
            )}

            {house.founded !== "" && (
              <Heading textSize={"small"}>
                <strong>Founded</strong>: <em>{house.founded}</em>
              </Heading>
            )}

            {house.diedOut !== "" && (
              <Heading textSize={"small"}>
                <strong>Died out</strong>: <em>{house.diedOut}</em>
              </Heading>
            )}

            {house.ancestralWeapons && house.ancestralWeapons[0] !== "" && (
              <Heading textSize={"small"}>
                <strong>Ancestral weapons</strong>:{" "}
                <em>{house.ancestralWeapons.join(", ")}</em>
              </Heading>
            )}

            {house.seats && house.seats[0] !== "" && (
              <Heading textSize={"large"}>
                <strong>House seats</strong>: <em>{house.seats.join(", ")}</em>
              </Heading>
            )}

            {house.titles && house.titles[0] !== "" && (
              <Heading textSize={"small"}>
                <strong>Titles</strong>: <em>{house.titles.join(", ")}</em>
              </Heading>
            )}

            {house.coatOfArms !== "" && (
              <Heading textSize={"large"}>
                <strong>Coat of arms</strong>: {house.coatOfArms}
              </Heading>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
