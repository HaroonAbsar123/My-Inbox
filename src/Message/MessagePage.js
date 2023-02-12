import React, { useContext, useEffect, useCallback, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./MessagePage.module.css";
import Context from "../Context/context";
import { useState } from "react";
import { useRef } from "react";

function MessageContainer(props) {
  // const [name, setName] = useState(props.name);
  // const [message, setMessage] = useState(props.message);
  const [read, setRead] = useState(false);
  // const [id, setId] = useState(props.reqId);
  const [myreply, setReply] = useState("");
  const [previousReply, setPreviousReply] = useState("");
  const [sent, setSent] = useState(false);

  const name = props.name;
  const message = props.message;
  const id = props.reqId;
  const replyRef = useRef("");

  const { data, updateData } = useContext(Context);
  const [zoom, setZoom] = useState(false);

  // const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);

  // const fetchMoviesHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch('https://react-9246c-default-rtdb.firebaseio.com/inbox.json');
  //     if (!response.ok) {
  //       throw new Error('Something went wrong!');
  //     }

  //     const data = await response.json();

  //     const loadedData = [];

  //     for (const key in data){
  //       loadedData.push({
  //         id: data[key].id,
  //         name: data[key].name,
  //         message: data[key].message,
  //         read: data[key].read,
  //         reply: data[key].reply,
  //       })
  //     }

  //     setMovies(loadedData);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  

  useEffect(() => {
    // fetchMoviesHandler();
    // const latestReply = movies.filter((item) => item.id === id);
    // const myReply = latestReply.map((item) => item.reply);
    // console.log(myReply)

    setPreviousReply(props.reply);
    setRead(true);
    // console.log('read');

  }, []);


  // const context = useContext(Context)
  // useEffect(() => {
  //   const latestReply = movies.filter((item) => item.id === id);
  //   const myReply = latestReply.map((item) => item.reply);
  
  //   setPreviousReply(myReply);
  //   setRead(true);
  //   console.log(myReply);
  // }, [load ]);

  // console.log(myreply)

  function valueReadHandler() {
    setReply(replyRef.current.value);
    setSent(false);
  }

  function submitHandler(event) {
    setLoad(!load);
    let newData = {
      id: id,
      name: name,
      message: message,
      read: read,
      reply: myreply,
    };
    // console.log("Data Updated!");
    // event.preventDefault();
    updateData(newData);
    props.onSubmit(true);
    setReply("");
    setLoad(!load);
    event.preventDefault();
    setPreviousReply(myreply)
  }

  return (
    <div className={classes.messageDetailsContainer}>
      <div className={classes.nameBackground}>
        <label className={classes.nameTitle}>{props.name}</label>
      </div>
      <div className={classes.messageBackground}>
        <p
          className={classes.message}
          style={{
            transform: "scale(1)  translateX(10px)",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.12)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}

        >
          {props.message}
        </p>
        {
          <p 
            className={classes.reply}
            style={{
              transform: "scale(1)",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.12)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}

          >
            {previousReply}
          </p>
        }
      </div>
      <form onSubmit={submitHandler}>
        <div className={classes.inputContainer}>
          <input
            className={classes.replyinputContainer}
            type="text"
            onChange={valueReadHandler}
            value={myreply}
            ref={replyRef}
          />
          <button
            className={classes.replyButton}
            type="submit"
            onMouseOver={() => setZoom(true)}
            onMouseOut={() => setZoom(false)}
            style={{
              transform: zoom ? "scale(1.10)" : "scale(1)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            {sent === false ? "REPLY" : "SENT"}
          </button>
        </div>
      </form>
    </div>
  );
}












function MessagePage(props) {
  const [submitted, setSubmitted] = useState(false);
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
  }, [submitted]);

  // const [myReply, setMyReply] = useState('')
  // const [details, setDetails] = useState(movies)



  // const ctx = useContext(Context);

  const params = useParams();
  const reqId = params.id;

  const data = movies.filter((item) => item.id === reqId);

  function onSubmit() {
    setSubmitted(!submitted);
    props.onSubmit(submitted);
  }

let details = data.map((item) => {
      return(
      <MessageContainer
        onSubmit={onSubmit}
        key={item.id}
        reqId={item.id}
        name={item.name}
        message={item.message}
        reply={item.reply}
      />
    )});
  



  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {details.length > 0 && <Card className={classes.card}>{details}</Card>}
      </div>
    </div>
  );
}

export default MessagePage;
