import React, { useState } from "react";
import "./HeaderComponent.css";
import {
  Button,
  Heading,
  TextInput,
  TextInputButton,
  TextInputIcon,
} from "@brandwatch/axiom-components";

// TODO - make sure HeaderComponent is expecting the right props (if any)!

export const HeaderComponent = ({
  searchInput,
  setSearchInput,
  fetchFilteredData,
  setSidebarExpanded,
  sidebarExpanded,
  onSubmit,
}) => {
  return (
    <header className={"app-header"}>
      {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}

      <Button
        className={"expand-button"}
        variant={sidebarExpanded ? "primary" : "secondary"}
        onClick={() => setSidebarExpanded(!sidebarExpanded)}
      >
        {sidebarExpanded ? "Hide filters" : "Show filters"}
      </Button>

      <Heading textSize={"headline"}> APIce and Fire </Heading>
      <TextInput
        className={"header-search"}
        placeholder={"Search by name..."}
        // value={input}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
      >
        <TextInputIcon align="left" name="magnify-glass" />
        <TextInputButton
          className="searchButton"
          variant="primary"
          align="right"
          onClick={() => onSubmit({ searchInput })}
          // onClick={() => fetchFilteredData()}
        >
          Search
        </TextInputButton>
      </TextInput>
    </header>
  );
};
