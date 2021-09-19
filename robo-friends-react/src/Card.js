import React from "react";
const Card = ({id, name, email}) => {
    return(
        <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
            <img src={`https://robohash.org/${id}?200x200' alt='robots'`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
// const Card = (props) => {
//     return(
//         <div className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
//             <img src={`https://robohash.org/${props.id}?200x200' alt='robots'`}/>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

export default Card;