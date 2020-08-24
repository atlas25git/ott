import React from 'react';
import Card from './Card';

const CardList= ({robots}) =>{
    const cardComponent = robots.map((user,i)=>{
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[i].username}
                ig={robots[i].ig}/>
    })
    return (
        <div>
            {cardComponent}
        </div>
    );
}
export default CardList;