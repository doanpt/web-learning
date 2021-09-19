import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const cardComponents = robots.map((user, i) => {
        return (
            <Card key={i} id={robots[i].id} name={robots[i].title} email={robots[i].title} />
        );
    });
    return(
        <div>
            {cardComponents}
        </div>
    );
}

export default CardList;