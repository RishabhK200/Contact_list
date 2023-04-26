import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function createCard(Contacts) {
  return (
    <Card
      name={Contacts.name}
      img={Contacts.imgURL}
      phone={Contacts.phone}
      email={Contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Favorite Cricketers Contact List</h1>  
      {Contacts.map(createCard)};  // mapping 
      {/* <Card
        name={Contacts[0].name} // attributes  
        img={Contacts[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />

      <Card
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />

      <Card
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        phone={Contacts[2].phone}
        email={Contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
