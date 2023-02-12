import React from "react";
import Header from "./Layout/Header";
import Inbox from "./Inbox/Inbox";
import Footer from "./Layout/Footer";
import { Route } from "react-router-dom";
import MessagePage from "./Message/MessagePage";
import Context from "./Context/context";
import { useContext } from "react";
import ContextProvider from "./Context/context-provider";
import NotReplied from "./Reply Screen/NotReplied";
import classes from "./App.module.css";
import NavigationBar from "./Layout/NavigationBar";
import Replied from "./Reply Screen/Replied";
import { useHistory } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Card from "./UI/Card";

function App() {


  

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

    // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);

  // async function addMovieHandler(movie) {
  //   const response = await fetch('https://react-9246c-default-rtdb.firebaseio.com/movies.json', {
  //     method: 'POST',
  //     body: JSON.stringify(movie),
  //     headers:{'Content-Type': 'application/json'}
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // }




 










  const history = useHistory();
  const context = useContext(Context);
  const Dummy = context.data;
  if (history.location.pathname === "/") {
    history.push("/notreplied");
  }

  function submitHandler() {
    // console.log('Submitted')
  }



  return (
    <React.Fragment>
      <ContextProvider>
        <Header />
        {error ? <Card className={classes.error}>Error Occured</Card> : 
        <main className={classes.main}>
          <div className={classes.nav}>
            <NavigationBar />
          </div>

          <div className={classes.body}>
            <Route
              exact={true}
              path="/allmessages"
              component={() => {
                
                return <Inbox dummy={movies} />;
              }}
            />
            <Route
              exact={true}
              path="/notreplied"
              component={() => {
              
              return <NotReplied  dummy={movies} />}}
            />
            <Route exact={true} path="/replied" component={() => {
            
            return <Replied   dummy={movies} />}} />
            <Route
              exact={true}
              path="/:id"
              component={() => <MessagePage onSubmit={submitHandler} />}
            />
          </div>
          
        </main>
        }
        <Footer />
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
