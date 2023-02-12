import Card from "../UI/Card";
import classes from "./Inbox.module.css";
import CustomLink from "../UI/CustomLink";
import trueImage from "../files/true.png"
import falseImage from "../files/false.png"
import React from "react";

function Message(props) {

    let images = falseImage

    if (props.read === true){
        images = trueImage
    }


    const short = props.message.split(' ');
    const shortMessage = short.slice(0, 10).join(' ');

    

  return (
    <section 
  className={classes.messageSection} 
  style={{ transform: 'scale(1)', transition: 'transform 0.3s' }} 
  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'} 
  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
>
  <CustomLink to={`/${props.id}`}>
    <Card className={classes.secondaryCard}>
        <div  className={classes.container}>
        <div className={classes.nameContainer}>
            {props.name}
        </div>
        <div className={classes.messageContainer}>
            {shortMessage} ...
        </div>
        <div className={classes.readContainer}>
        <img style={{opacity: "90%"}} height="30" width='30' src={images} alt='read?' />
        </div>
        </div>
    </Card>
  </CustomLink>
</section>

  );
}

export default Message;
