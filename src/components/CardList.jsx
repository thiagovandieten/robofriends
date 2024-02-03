import React from 'react';
import Card from './Card';
import 'tachyons';

const CardList = ({robots}) => {
    if (!true) {
        throw new Error('NOOO!');
    }
    const CardArray = robots.map((user, i) => {
        return (
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} />
        )
    });
    return (
        <div>
            {CardArray}
        </div>
    )
}

export default CardList;