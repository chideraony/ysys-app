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

// TODO - create a component which displays information about Houses

// TODO - make sure HouseCard is expecting the right props!
export const HouseCard = () => {

    const [house, setHouses] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
          'https://www.anapioficeandfire.com/api/houses?pageSize=30'
        );
        console.log(response);
        setHouses(response.data);
      };

      return <div className={'feed'} style={{height: "100%", width: "100%"}}>
        {/* TODO - add a placeholder for an empty feed */}
        {/* TODO - build up a list of results */}
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
        <h1>Game of Thrones Houses</h1>

        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button> 

      

        <br/>

        <div className={"houses"} style={{height: "100%", width: "100%"}}>
        {house &&
          house.map((house, index) => {
            const titles = house.titles.join(', ');

            

            return (

        <Grid className="grid" direction="row" horizontalAlign="around" gutters="medium" responsive wrap>

            <GridCell direction="row" width="25" responsive wrap>

              <Card className="card" border borderRadius="medium" shade="shade-1" shadow size="medium" hover key={index} >
              <CardContent size="medium">
              
              <div className="house" >
                <h3>House {index + 1}</h3>
                <h2>{house.name}</h2>
                <Separator/>

                <div className="details" key="index">

                  <p>👨: {house.words}</p>
                  <p>📖: {house.coatOfArms} </p>
                  <p>🏘️: {house.region}</p>
                  <p>⏰: {titles}</p>
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