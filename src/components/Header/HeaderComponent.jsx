import React from "react";
import "./HeaderComponent.css";
import {
  Button,
  Heading,
  TextInput,
  TextInputButton,
  TextInputIcon,
} from "@brandwatch/axiom-components";

// TODO - make sure HeaderComponent is expecting the right props (if any)!

export const HeaderComponent = ({searchInput, setSearchInput, input, setInput, fetchFilteredData, setSidebarExpanded, sidebarExpanded}) => {
  return (
    <header className={"header"}>
      {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}

      <Button className={'expand-button'}
                variant={sidebarExpanded ? 'primary' : 'secondary'}
                onClick={() => setSidebarExpanded(!sidebarExpanded)}>
            {sidebarExpanded ? 'Hide filters' : 'Show filters'}
        </Button>

      <Heading textSize={"headline"}> A Better App of Ice and Fire </Heading>
      <TextInput
        className={"header-search"}
        placeholder={"Search by name..."}
        // value={input}
        onChange={(e) => setSearchInput(e.target.value)}
        // onKeyPress={(e) => {
        //   if (e.key === "Enter") {
        //     setSearchInput(input);
        //   }
        // }}
      >
        <TextInputIcon align="left" name="magnify-glass" />
        <TextInputButton
          className="searchButton"
          variant="primary"
          align="right"
          onClick={() => fetchFilteredData()}
        >
          Search
        </TextInputButton>
      </TextInput>
    </header>
  );
};
