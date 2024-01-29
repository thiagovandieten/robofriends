import React, {Component} from 'react';
import Card from './Card';
import 'tachyons';

const CardList = ({robots}) => {
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