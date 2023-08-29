import React from "react";

const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    return undefined;
    // throw new Error("Error fetching data");
  }
  return response.json();
};

export default getAllUsers;
