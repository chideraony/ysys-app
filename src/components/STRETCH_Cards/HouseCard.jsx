import React, {useState} from 'react';
import axios from 'axios';
import {
    Heading
  } from "@brandwatch/axiom-components";
import './Card.css';

// TODO - create a component which displays information about Houses

// TODO - make sure HouseCard is expecting the right props!
export const HouseCard = ({record}) => {

  const house = record
  
  if(!house) return null

      return (
      
      <div className="card">

                <h2>{house.name}</h2>
            

                <div className="details" key="index">

                  {
                      house.region !== '' && <Heading textSize={'large'}>
                    <strong>🏘️</strong>: {house.region}
                    </Heading>
                  }

                  {
                      house.words !== '' && <Heading textSize={'small'}>
                    <strong>Words</strong>: <em>{house.words}</em>
                    </Heading>
                  }

                  {
                      house.founded !== '' && <Heading textSize={'small'}>
                    <strong>Founded</strong>: <em>{house.founded}</em>
                    </Heading>
                  }

                  {
                      house.diedOut !== '' && <Heading textSize={'small'}>
                    <strong>Died out</strong>: <em>{house.diedOut}</em>
                    </Heading>
                  }

                  {
                      house.ancestralWeapons[0] !== '' && <Heading textSize={'small'}>
                    <strong>Ancestral weapons</strong>: <em>{house.ancestralWeapons.join(', ')}</em>
                    </Heading>
                  }

                  {
                      house.seats[0] !== '' && <Heading textSize={'large'}>
                    <strong>House seats</strong>: <em>{house.seats.join(', ')}</em>
                    </Heading>
                  }
                 

                  {
                      house.titles[0] !== '' && <Heading textSize={'small'}>
                    <strong>Titles</strong>: <em>{house.titles.join(', ')}</em>
                    </Heading>
                  }

                  {
                    house.coatOfArms !== '' && <Heading textSize={'large'}>
                    <strong>Coat of arms</strong>: {house.coatOfArms}
                    </Heading>
                  }
                </div>
              </div>
         
            );
};