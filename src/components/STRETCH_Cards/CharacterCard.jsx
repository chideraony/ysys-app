import React, { useState } from "react";
import "./Card.css";
import { Badge, Heading, CardImage } from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Characters

// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = ({ character, spoilerFree }) => {
  function cultureImage(culture) {
    if (culture === "Braavosi") {
      return "https://i.imgur.com/c6QI1cP.jpg";
    } else if (culture === "Westeros") {
      return "https://i.imgur.com/xDrXkJS.jpg";
    } else if (culture === "Valyrian") {
      return "https://i.imgur.com/0o6bNpc.jpeg";
    } else if (culture === "Northmen") {
      return "https://i.imgur.com/Seyls7T.jpg";
    } else if (culture === "First Men") {
      return "https://i.imgur.com/CMpQ7zG.jpg";
    } else if (culture === "Asshai") {
      return "https://i.imgur.com/gmRO91Q.jpg";
    } else if (culture === "Andal") {
      return "https://i.imgur.com/h3o0t7q.jpg";
    } else if (culture === "Naathi") {
      return "https://i.imgur.com/nEmog4o.jpg?1";
    } else if (culture === "Ironborn") {
      return "https://i.imgur.com/nqWyKG9.jpg";
    } else if (culture === "Valemen") {
      return "https://i.imgur.com/5lJ6U7j.png";
    } else if (culture === "Crannogmen") {
      return "https://i.imgur.com/uuWq3Ou.jpg";
    } else if (culture === "Thenn") {
      return "https://i.imgur.com/VIevFSY.jpg";
    } else if (culture === "Free Folk" || culture === "Free folk") {
      return "https://i.imgur.com/DoX4j2A.jpg";
    } else if (culture === "Reach") {
      return "https://i.imgur.com/zhA2Trn.jpg";
    } else if (culture === "Myrish") {
      return "https://i.imgur.com/SfDG5IU.jpg";
    } else if (culture === "Rivermen") {
      return "https://i.imgur.com/ZmQEe51.jpg";
    } else if (culture === "Westerlands" || culture === "Westerman") {
      return "https://i.imgur.com/xaHS3zt.jpg";
    } else if (culture === "Lysene") {
      return "https://i.imgur.com/fabkXcr.jpg?1";
    } else {
      return "https://i.imgur.com/iaqlrMy.jpg";
    }
  }

  return (
    <div className={"feed"} style={{ height: "100%", width: "100%" }}>
      <div className="card">
        <div className={"characters"} style={{ height: "100%", width: "100%" }}>
          <Heading textSize={"headtitle"}>
            <h2>{character.name || character.aliases[0]}</h2>
          </Heading>

          <CardImage
            className="characterImage"
            src={cultureImage(character.culture)}
            height={"150px"}
            width={"300px"}
          ></CardImage>

          <br />

          <div className="details" key="index">
            {character.gender === "Female" && (
              <Heading textSize={"large"}>
                <strong>👩🏽‍⚖️</strong>: {character.gender}
              </Heading>
            )}

            {character.gender === "Male" && (
              <Heading textSize={"large"}>
                <strong>🧑🏽‍⚖️</strong>: {character.gender}
              </Heading>
            )}

            {character.playedBy[0] !== "" && (
              <Heading textSize={"large"}>
                <strong>Played By</strong>: {character.playedBy.join(", ")}
              </Heading>
            )}

            {character.born !== "" && (
              <Heading textSize={"large"}>
                <strong>Birth</strong>: {character.born}
              </Heading>
            )}

            {character.culture !== "" && (
              <Heading textSize={"medium"}>
                <strong>Culture</strong>: {character.culture}
              </Heading>
            )}

            {character.titles[0] !== "" && (
              <Heading textSize={"small"}>
                <strong>Titles</strong>: <em>{character.titles.join(", ")}</em>
              </Heading>
            )}
            {character.aliases[0] !== "" && (
              <Heading textSize={"small"}>
                <strong>Other Names</strong>:{" "}
                <em>{character.aliases.join(", ")}</em>
              </Heading>
            )}
            {!spoilerFree && (
              <Badge
                size={"small"}
                position={"left"}
                color={character.died ? "blast-off" : "giant-leap"}
              >
                {character.died || "Alive"}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
