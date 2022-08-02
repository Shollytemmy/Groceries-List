 // const headerStyle = {
                
    //     backgroundColor: 'teal',
    //      color: '#fff',
    //      textAlign: 'center'
    //  
       }



       import React,{ useState } from 'react'

const Content = () =>{

    const [name, setName] = useState('Shally')
    const handleRandName = () => {
        const names = ['Shally', 'Tommy', 'Funky', 'Joky']
        const idx = Math.floor(Math.random() * names.length)
       setName(names[idx])
       }


    return (
        <main>
        <p>Hello {name}</p>
        <button type="submit" onClick={handleRandName}>Click Me</button>

        </main>
    )
}

export default Content