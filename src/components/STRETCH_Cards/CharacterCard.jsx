import React, {useState} from 'react';
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
import './Card.css';

// TODO - create a component which displays information about Characters

// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = ({ }) => {

    const [character, setCharacter] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
          'https://www.anapioficeandfire.com/api/characters?pageSize=30'
        );
        console.log(response);
        setCharacter(response.data);
      };

      return <div className={'feed'} style={{height: "100%", width: "100%"}}>
        {/* TODO - add a placeholder for an empty feed */}
        {/* TODO - build up a list of results */}
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
        <h1>Game of Thrones Characters</h1>

        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>

        <br/>

        <div className={"character"} style={{height: "100%", width: "100%"}}>
        {character &&
          character.map((character, index) => {
            const titles = character.titles.join(', ');
            const aliases = character.aliases.join(', ');

            return (

             <Grid direction="row" horizontalAlign="around">

            <GridCell direction="column" fit="true" width="25">

              <Card border borderRadius="medium" shade="shade-1" shadow size="medium" hover key={index}>
              <CardContent size="medium">

              <div className="character" >
                <h3>Character {index + 1}</h3>
                <h2>{character.name}</h2>
                <Separator/>


                <div className="details" key="index">
                  <p>👨: {character.playedBy}</p>
                  <p>📖: {character.gender}</p>
                  <p>🏘️: {titles}</p>
                  <p>⏰: {aliases}</p>




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