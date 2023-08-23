import React, { useCallback, useEffect, useState } from "react";
import {
  hasLowercase,
  hasNumber,
  hasSpecialCharacter,
  hasUppercase,
} from "./utils";

const CharacterCondition = ({ totalStrength, password }) => {

  const [charCondition, setCharCondition] = useState([
    "Add at least one uppercase letter.",
    "Add at least one lowercase letter.",
    "Add at least one special character.",
    "Add at least one number.",
    "Password Strength should be 8 characters long.",
  ]);
  const removeSuggestion =useCallback( (suggestion) => {
    const newData = [...charCondition]; // Create a copy of the array
    // console.log("newData",newData)
    const index = newData.indexOf(suggestion); // Find the index of the content
    if (index !== -1) {
      newData.splice(index, 1); // Remove the content at the found index
      setCharCondition(newData); // Update the state with the new array
      // console.log("FilteredData",newData)
    }
  },[password]);
useEffect(() => {
  if (hasUppercase.test(password)) {
    removeSuggestion("Add at least one uppercase letter.");
  }
  if (hasLowercase.test(password)) {
    removeSuggestion("Add at least one lowercase letter.");
  }
  if (hasSpecialCharacter.test(password)) {
    removeSuggestion("Add at least one special character.");
  }
  if (hasNumber.test(password)) {
    removeSuggestion("Add at least one number.");
  }
  if (totalStrength > 6) {
    removeSuggestion("Password Strength should be 8 characters long.");
  }
// console.log(totalStrength)
},[password])
   

    
    
  

  return (
    <div>
      {charCondition.map((condition,index) => (
        <p key={index}>{condition}</p>
      ))}
    </div>
  );
};

export default React.memo(CharacterCondition);
