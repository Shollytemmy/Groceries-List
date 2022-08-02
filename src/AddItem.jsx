import { FaPlus } from "react-icons/fa"

const AddItem = ({newItem, setNewItem, handleSubmit}) =>{

    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input 
                type="text"
                id="addItem"
                value={newItem}
                autoFocus
                placeholder="add Item"
                onChange={(e) =>setNewItem(e.target.value)}
                required
                
                 />
                 <button type="submit" aria-label="Add Item">
                 <FaPlus />


                 </button>
        </form>
    )
}

export default AddItem