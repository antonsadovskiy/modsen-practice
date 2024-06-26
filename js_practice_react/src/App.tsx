import React from 'react';
import {List} from "./jsx/render_list";
import {Counter} from "./state/counter";
import {Form} from "./ref/form";

const photos = [
    {
        "albumId": 1,
        "id": 1,
        "title": "green",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "purple",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
]

function App() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "250px"
        }}>
            <List list={photos}/>
            <Counter/>
            <Form/>
        </div>
    );
}

export default App;
