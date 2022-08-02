
import React, {useState} from 'react';
import Header from './Header'
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import './index.css'

function App() {
  const title ='Groceries List'

  const [items, setItem] = useState([
    {id: 1,
    checked: false,
    item:    'item-1'
    
    },
    {id: 2,
        checked: false,
        item:    'item-2'
        
        },
        {id: 3,
            checked: true,
            item:    'item-3'
            
            }
]);

const [newItem, setNewItem] = useState('')


const addItem = () =>{

  const itemObj = {
    id: items.length + 1,
    checked: true,
    item: newItem
  }

  setItem(newItem.concat(itemObj))
  

}

const handleClick = (id) =>{
  const listitems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)

  setItem(listitems)
  localStorage.setItem('shoppingList', JSON.stringify(listitems))
  
}

const handleDelete = (id) =>{
   const listItems = items.filter((item) => item.id !== id)
   setItem(listItems)
}

const handleSubmit = (e) =>{
  e.preventDefault()
  if(!newItem) return
  addItem()

  setNewItem('')
}



  
  return (
    <div>
    <Header title = {title}
     />
     <AddItem 
       newItem ={newItem}
       setNewItem = {setNewItem}
       handleSubmit = {handleSubmit}
     />

    <Content items = {items}
      handleClick = {handleClick}
      handleDelete = {handleDelete}
      
    />
    <Footer length = {items.length} />
    
    
    </div>
  );
}

export default App;
