import Context from "./context";
import { useState, useContext } from "react";
import React from "react";

const ContextProvider = (props) => {
  const context = useContext(Context);
  const [data, setData] = useState(context.data);





  



  const updateData = async(newData) => {

    const id = newData.id;
    const response = await fetch(`https://react-9246c-default-rtdb.firebaseio.com/inbox/${id}.json`, {
          method: 'PUT',
          body: JSON.stringify(newData),
          headers:{'Content-Type': 'application/json'}
        });
        const data = await response.json();
        console.log(data);
    



    setData(prevData =>
      prevData.map(item => {
        if (item.id === newData.id) {
            return { ...item, ...newData };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <Context.Provider value={{ data, updateData }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;











// import Context from "./context";
// import { useState, useContext, useEffect, useCallback } from "react";
// import React from "react";

// const ContextProvider = (props) => {
//   const context = useContext(Context);
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchDataHandler = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await fetch('https://react-9246c-default-rtdb.firebaseio.com/inbox.json');
//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const data = await response.json();

//       const loadedData = [];

//       for (const key in data){
//         loadedData.push({
//           id: data[key].id,
//           name: data[key].name,
//           message: data[key].message,
//           read: data[key].read,
//           reply: data[key].reply,
//         })
//       }

//       setData(loadedData);
//     } catch (error) {
//       setError(error.message);
//     }
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchDataHandler();
//   }, []);



//   const updateData = async(newData) => {
//     const id = newData.id;
//     const response = await fetch(`https://react-9246c-default-rtdb.firebaseio.com/inbox/${id}.json`, {
//           method: 'PUT',
//           body: JSON.stringify(newData),
//           headers:{'Content-Type': 'application/json'}
//         });
//         const data = await response.json();
//         console.log(data);

//     setData(prevData =>
//       prevData.map(item => {
//         if (item.id === newData.id) {
//             return { ...item, ...newData };
//         } else {
//           return item;
//         }
//       })
//     );
//   };

//   return (
//     <Context.Provider value={{ data, updateData }}>
//       {props.children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;
