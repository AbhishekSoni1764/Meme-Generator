import React from "react";
// import memesData from "../Dataset"

export default function Card() {

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMeme, setAllMeme] = React.useState([])

    React.useEffect(() => {
        // fetch("https://api.imgflip.com/get_memes")
        //     .then(res => res.json())
        //     .then(content => setAllMeme(content.data.memes))

        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const content = await res.json()
            setAllMeme(content.data.memes)
        }

        getMemes()

    }, [])

    function getMemeImg() {
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url

        setMemeImage(prevState => ({
            ...prevState,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
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
                <img src={memeImage.randomImage} className="meme--image" alt="Nothing" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </div>
    );
}
