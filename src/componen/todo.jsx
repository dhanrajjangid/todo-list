import React, { useState } from 'react'

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState ([]);

    const addItem = () =>{
        if(!inputData){

        }
        else
        setItems([...items, inputData]);
        setInputData('')
        console.log(setItems)
    }

    const deleteItem = (id) => {
        const updatedItems = items.filter((elem, ind) => {
          return ind !== id;
        })
        setItems(updatedItems);
    }

    const removeAll = () => {
      setItems([]);
    }

    

  return (
    <>
    <div className="App">

      <h1>Todo App</h1>
      <h3>Add your list Here</h3>
      <div>
        <input className='input-field' type="text" placeholder='✍ Add item' 
        value={inputData}
        onChange={(e) => setInputData(e.target.value) } />
        <button className='add' onClick={addItem}>+</button>
      </div>

      <div>

        {
          items.map((elem, ind) => {
            return (
                <div className='item-list' key={ind}>
                  <h3 className='item-element'>{elem}</h3>
                  <button className='remove' onClick={() => deleteItem(ind)}>X</button>
                </div>
            )
          })
        }

      </div>

      <div>
        <button className='check-list' onClick={removeAll}>Check List</button>
      </div>

    </div>
    </>
  )
}

export default Todo