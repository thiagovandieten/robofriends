import React from 'react';
import './Card.css';
import 'tachyons';

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className="bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow tc">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

// class Card extends Component {
//     render() {
//         return <h1>Card</h1>
//     }
// }

export default Card;