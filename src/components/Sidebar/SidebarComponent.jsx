import React, { useState } from "react";
import "./SidebarComponent.css";
import {
  RadioButton,
  RadioButtonGroup,
  Button,
  Dropdown,
  DropdownTarget,
  TextInput,
  TextInputIcon,
  DropdownSource,
  DropdownContext,
  DropdownMenuItem,
  DropdownMenu,
  Icon,
  CheckBoxGroup,
  CheckBox,
} from "@brandwatch/axiom-components";

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = (props) => {
  const {
    filterList,
    setSidebarCategories,
    sidebarCategories,
    setSidebarLimit,
    expanded,
    fetchFilteredData,
    onSubmit,
    livingStatus,
    setLivingStatus,
    setOption,
    selectedOption,
    setSelectedOption,
    setSelectedGender,
    setGender,
    selectedGender,
    activeCategory,
    setActiveCategory,
    options,
    gender,
    spoilerFree,
    setSpoilerFree,
    selectedItem,
    setSelectedItem,
    items,
  } = props;

  const handleDropdownChange = (value) => {
    setSidebarLimit(value);
  };

  const handleStatusChange = (value) => {
    setSelectedOption(value);
    setOption(value);
    // setLivingStatus(value)
  };

  const handleGenderChange = (value) => {
    setSelectedGender(value);
    setGender(value);
  };

  // const handleSelectedOption = (value) => {

  // }

  return (
    <div className={`app-sidebar ${expanded ? "expanded" : "collapsed"}`}>
      {expanded && (
        <>
          <RadioButtonGroup>
            {filterList.map((filter) => {
              return (
                <RadioButton
                  key={filter}
                  name={"filter"}
                  checked={filter === activeCategory}
                  onChange={() => setActiveCategory(filter)}
                >
                  {filter}
                </RadioButton>
              );
            })}
          </RadioButtonGroup>
          <Dropdown>
            <DropdownTarget>
              <TextInput
                isTarget
                onChange={handleDropdownChange}
                placeholder="Pick an Option"
                value={selectedItem}
              >
                <TextInputIcon name="chevron-down" />
              </TextInput>
            </DropdownTarget>
            <DropdownSource>
              <DropdownContext>
                <DropdownMenu>
                  {items.map((item) => (
                    <DropdownMenuItem
                      key={item}
                      onClick={() => {
                        setSelectedItem(item);
                        handleDropdownChange(item);
                      }}
                      selected={selectedItem === item}
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenu>
              </DropdownContext>
            </DropdownSource>
          </Dropdown>
          {activeCategory === "Characters" && (
            <>
              <CheckBoxGroup>
                <CheckBox
                  name="spoilerFree"
                  title="Hides details "
                  key={spoilerFree}
                  checked={spoilerFree}
                  onChange={() => setSpoilerFree(!spoilerFree)}
                >
                  {console.log(spoilerFree)}
                  Spoiler-free
                </CheckBox>
              </CheckBoxGroup>
              {spoilerFree && <br />}
            </>
          )}
          {activeCategory === "Characters" && !spoilerFree && (
            <Dropdown>
              <DropdownTarget>
                <TextInput
                  isTarget
                  onChange={setSelectedOption}
                  placeholder="Pick an Option"
                  value={selectedOption}
                >
                  <TextInputIcon name="chevron-down" />
                </TextInput>
              </DropdownTarget>
              <DropdownSource>
                <DropdownContext>
                  <DropdownMenu>
                    {options.map((option) => (
                      <DropdownMenuItem
                        key={option}
                        onClick={() => {
                          // setSelectedOption(option);
                          handleStatusChange(option);
                        }}
                        selected={selectedOption === option}
                      >
                        {option}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenu>
                </DropdownContext>
              </DropdownSource>
            </Dropdown>
          )}

        {activeCategory === "Characters" && (
          <Dropdown>
              <DropdownTarget>
                <TextInput
                  isTarget
                  onChange={setSelectedGender}
                  placeholder="Pick an Option"
                  value={selectedGender}
                >
                  <TextInputIcon name="chevron-down" />
                </TextInput>
              </DropdownTarget>
              <DropdownSource>
                <DropdownContext>
                  <DropdownMenu>
                    {gender.map((gender) => (
                      <DropdownMenuItem
                        key={gender}
                        onClick={() => {
                          handleGenderChange(gender);
                        }}
                        selected={selectedGender === gender}
                      >
                        {gender}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenu>
                </DropdownContext>
              </DropdownSource>
            </Dropdown>
          )}
        </>
      )}

      {/* <Button onClick={() => onSubmit({ activeCategory, selectedOption })}> */}
      <Button onClick={() => onSubmit()}>
        {/* fetchFilteredData() */}
        {expanded ? "Display" : <Icon name={"refresh"} />}
      </Button>
    </div>
  );
};

{
  /* TODO - flesh out this component to include all controls for configuring
      your data retrieval. This must include the category
      (books/characters/houses) [STRETCH] Feel free to add anything else you
      want, for example: * a dropdown to select number of items you want to
      retrieve * a search bar to search for a particular item You could even
      change what you can see in the search bar based on what you are searching
      for. E.g add a dropdown to determine which field you're searching on
      ("name"/"title"/"alias") */
}
