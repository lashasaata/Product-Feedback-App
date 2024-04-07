import styled from "styled-components";
import Title from "./Title";
import Headline from "./Headline";
import React, { useState, useRef, useEffect } from "react";
import ArrowDown from "/assets/shared/icon-arrow-down.svg";

export default function Category({ data, setData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    data.productRequests[0].category || "Feature"
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    // close dropdown on outside click
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelection = (option) => {
    setSelectedOption(option);
    onSelectCategory(option); // pass selected option to parent's handler
    setIsOpen(false);
  };

  // options list from data
  const categoryOptions = data.productRequests.map(
    (request) => request.category
  );

  return (
    <>
      <CategoryContainer ref={dropdownRef}>
        <Title>Category</Title>
        <Headline>Choose a category for your feedback</Headline>
        <DropdownSelected onClick={toggleDropdown}>
          {selectedOption || "Select category"}
          <DropdownIcon src={ArrowDown} alt="dropdown arrow" isOpen={isOpen} />
        </DropdownSelected>
        {isOpen && (
          <DropdownList>
            {categoryOptions.map((option, index) => (
              <DropdownOption
                key={index}
                onClick={() => handleSelection(option)}>
                {option}
              </DropdownOption>
            ))}
          </DropdownList>
        )}
      </CategoryContainer>
    </>
  );
}

const CategoryContainer = styled.div`
  font-size: 13px;
  position: relative;

  & .feedback-category-select {
    background: rgba(247, 248, 253, 1);
    width: 279px;
    height: 48px;
    margin-top: 16px;
    border-radius: 6px;
    padding: 15px 15px 14px 16px;

    font-family: Jost;
    font-weight: 400;
    line-height: 21.68px;
    color: rgba(58, 67, 116, 1);
    cursor: pointer;

    &:focus {
      outline: 1px solid rgba(70, 97, 230, 1);
    }
  }
`;

const DropdownSelected = styled.div`
  background: rgba(247, 248, 253, 1);
  width: 279px;
  height: 48px;
  margin-top: 16px;
  border-radius: 6px;
  padding: 15px;
  font-family: Jost;
  font-weight: 400;
  line-height: 21.68px;
  color: rgba(58, 67, 116, 1);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownIcon = styled.img`
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  transition: transform 0.3s ease;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  padding: 10px 0;
  z-index: 10;
`;

const DropdownOption = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  &:hover {
    background-color: rgba(247, 248, 253, 1);
  }
`;
