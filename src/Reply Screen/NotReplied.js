
import Card from "../UI/Card";
import Message from "../Inbox/Message";
import { useContext, useEffect, useCallback, useState } from "react";
import Context from "../Context/context";
import React from "react";
import classes from "../Inbox/Inbox.module.css"


function NotReplied(props){
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-9246c-default-rtdb.firebaseio.com/inbox.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedData = [];

      for (const key in data){
        loadedData.push({
          id: data[key].id,
          name: data[key].name,
          message: data[key].message,
          read: data[key].read,
          reply: data[key].reply,
        })
      }

      setMovies(loadedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, []);











  // const context = useContext(Context)
  // const messages = props.dummy
  const messages = movies
    .sort((a, b) => (a.read === b.read) ? 0 : a.read ? 1 : -1)
    .filter(message => message.read === false)
    .map((message) => (
      <Message 
      key={message.id} 
      id={ message.id} 
      name={message.name} 
      message={message.message}
      read={message.read} />
      ));

  return(
      <section className={classes.section}>
          {/* <Card className={classes.mainCard}> */}
           {messages.length !== 0 ? messages : <Card><p style={{margin: '5px', fontWeight: 600, color: "rgb(53, 53, 53)"}}>{isLoading === false ? 'No Messages to Reply': "Loading Messages"}</p></Card>}
         {/* </Card> */}
      </section>
      
  )
};

export default NotReplied;
