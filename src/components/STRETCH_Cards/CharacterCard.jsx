import React, {useState} from 'react';
import './Card.css';
import {
    Badge,
    Heading
  } from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Characters

// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = ({character}) => {

      return <div className={'feed'} style={{height: "100%", width: "100%"}}>
  

              <div className="card">


        <div className={"characters"} style={{height: "100%", width: "100%"}}>
           
                <Heading textSize={'headtitle'}>
                <h2>{character.name || character.aliases[0]}</h2>
                </Heading>


                <div className="details" key="index">

                  {
                    character.gender === 'Female' && <Heading textSize={'large'}>
                    <strong>👩🏽‍⚖️</strong>: {character.gender}
                    </Heading>
                  }

                  {
                    character.gender === 'Male' && <Heading textSize={'large'}>
                    <strong>🧑🏽‍⚖️</strong>: {character.gender}
                    </Heading>
                  }

                  {
                    character.playedBy[0] !== '' && <Heading textSize={'large'}>
                    <strong>Played By</strong>: {character.playedBy}
                    </Heading>
                  }

                  {
                    character.born !== '' && <Heading textSize={'large'}>
                    <strong>Birth</strong>: {character.born}
                    </Heading>
                  }

                  {
                    character.culture !== '' && <Heading textSize={'medium'}>
                    <strong>Culture</strong>: {character.culture}
                    </Heading>
                  }

                  {
                      character.titles[0] !== '' && <Heading textSize={'small'}>
                    <strong>Titles</strong>: <em>{character.titles.join(', ')}</em>
                    </Heading>
                  }
                  {
                      character.aliases[0] !== '' && <Heading textSize={'small'}>
                    <strong>Other Names</strong>: <em>{character.aliases.join(', ')}</em>
                    </Heading>
                  }
                <Badge size={'small'} color={character.died ? 'tiny-clanger': 'terra-form'}>
                    {character.died || 'Alive'}
                </Badge>
                </div>
              </div>

              </div>
      
      </div>
};