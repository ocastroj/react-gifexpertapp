import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Sword Art Online']);

    // const handleAdd = () => {
    //     setCategories(cats => [...cats,'Sword Art Online']);
    //     console.log(categories);
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( cat => (
                        <GifGrid
                          key={cat} 
                          category={cat}  
                        />
                    ))
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;
