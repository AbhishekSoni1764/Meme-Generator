import React from "react";
import memesData from "../Dataset"

export default function Card() {

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImg() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        setMemeImage(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="box">
            <form action="#">
                <div className="input-fields">
                    <div className="top">
                        <label>Top text</label>
                        <input
                            type="text"
                            placeholder="Top text"
                            className="form--input"
                            name="topText"
                            value={memeImage.topText}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="bottom">
                        <label>Bottom text</label>
                        <input
                            type="text"
                            placeholder="Bottom text"
                            className="form--input"
                            name="bottomText"
                            value={memeImage.bottomText}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </form>
            <button className="new-meme" onClick={getMemeImg}>Get a new meme image 🧮</button>
            <div className="meme">
        <img src={memeImage.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
        </div>
    );
}
