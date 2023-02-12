import React from "react";


// const id = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10", "m11", "m12", "m13", "m14", "m15"];
// const name = [
//   "Client1",
//   "Client2",
//   "Client3",
//   "Client4",
//   "Client5",
//   "Client6",
//   "Client7",
//   "Client8",
//   "Client9",
//   "Client10",
//   "Client11",
//   "Client12",
//   "Client13",
//   "Client14",
//   "Client15",
// ];
// const message = [
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?",
//   "Hi, is this still available?"
// ];
// const read = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
// const reply = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

// let result = [];
// for (let i = 0; i < id.length; i++) {
//   result.push({
//     id: id[i],
//     name: name[i],
//     message: message[i],
//     read: read[i],
//     reply: reply[i],
//   });
// }

const Context = React.createContext({
  data: [],
  updateData: (newData) => {},
});

export default Context;

