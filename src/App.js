import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import './App.css';
import Dataset from "./Dataset"

export default function App() {
    // const Cards = Dataset.map(details =>{
    //     return  <Card 
    //                 key={details.id}
    //                 details={details}
    //             />
           
    // })        
    return (
        <div>
            <Navbar />
            <Card />
        </div>
    )
}