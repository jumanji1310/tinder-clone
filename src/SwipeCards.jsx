import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "./firebase";
import { collection, query, where, doc, onSnapshot } from "firebase/firestore";
import "./SwipeCards.css";

function SwipeCards() {
  //same as const people = [];
  //people.push('people','john')
  // setPeople([...people,'john']) this appends (spread operator)

  // const [people, setPeople] = useState([{
  //   name: "YiLong Ma",
  //   url: "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2022/05/19/4eb393f3-d671-4d58-8680-89ccd6607acf_5e3be874.jpg?itok=leRCcU-n&v=1652966452"
  // }]);

  const [people, setPeople] = useState([]);

  // Code that runs based on condition
  useEffect(() => {
    // this will run ONCE when component loads and never again or when the specified component changes

    const unsubscribe = onSnapshot(collection(db, "people"), (snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });

    console.log()
    // swipe(['left']);

    return () => {
      // this is the cleanup...
      unsubscribe();
    };
  }, []);

  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }
  
  return (
    <div className="tinderCards__cardContainer">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={onSwipe}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default SwipeCards;
