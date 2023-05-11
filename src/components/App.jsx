import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App(){
    const [listItem, setListItem] = useState([]);

    function addItem(item){
        setListItem(previous => {
            return [
                ...previous,
                item
            ]
        });
    }

    function deleteItem(id){
        setListItem(previous => {
            return previous.filter((item, index) => {
                return index !== id
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea addList={addItem}/>
            {listItem.map((item, index) => (
                <Note   
                    key={index} 
                    id={index}
                    title={item.title} 
                    content={item.content}
                    delete={deleteItem}
                /> 
            ))}
            <Footer />    
        </div>
    );
}

export default App;