import React from 'react'
import ListItems from './ListItems'

const Content = ({items, handleClick, handleDelete}) =>{

    



    return (
        <main>
        {items.length ? (
            <ListItems 
            items={items}
            handleClick={handleClick}
            handleDelete={handleDelete}
             />
        
        ) :(
            <p style={{marinTop: '2rem'}}> Your list is empty</p>
        )}
       
        </main>
        
        
    )
}


export default Content