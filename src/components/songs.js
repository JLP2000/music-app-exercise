import React, {useState} from "react"

const Songs = () => {
    const [songs, setSongs] = useState([
        {name: "Divinely Uninspired to a hellish Extent", releaseDate: "2019", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhgyaj39H7ty-6OAil-maZmAJhNG5P4Z0kyWt&s=0", likeState: false},
        {name: "To Tell The Truth I Can't Believe We Made It This Far", releaseDate: "2020", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QJjH1MdJDYZsMThUdMqadWY1pYAZbJ7u-jGwLLU&s=10", likeState: false},
        {name: "Breach ", releaseDate: "2018", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4MtZ4fU3mY1UzBEusKjpqBfwUmTlzj4IHVTO&s=0", likeState: false},
        {name: "Bloom", releaseDate: "2017", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROevUtGRP1HM5_6Y1ZUUdLuoead-s916Gygxx1EuA&s=10", likeState: false},
        {name: "Deezer Sessions", releaseDate: "2018", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfazIr4Kr9G9WrEqo0wGoORWkQnyW7byXJNn-DSk&s=10", likeState: false}
    ])


    const setLike = (e) => { 
        
        let songId = e.target.value;
        console.log(songId);
        let allSongs = [...songs];
        let song = {...allSongs[songId]};
        if(songs[songId].likeState){
            song.likeState = false;
            allSongs[songId] = song;
            setSongs(allSongs)
            e.target.style.backgroundColor = "transparent"
        } else {
            song.likeState = true;
            allSongs[songId] = song;
            setSongs(allSongs)
            e.target.style.backgroundColor = "#4CAF50"
        }
    }

    const renderRows = () => {
        let i = -1;
        console.log(songs);
        return songs.map(s => 
           { 
            return (<div class="card">
                <h3> {s.name} </h3>
                <h3> {s.releaseDate} </h3>
                <img src={s.coverart}></img>
                <button data-testid={++i} value={i} onClick={setLike}>Like</button>
            </div>)
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let input = {name: e.target[0].value, releaseDate: e.target[1].value, coverart: e.target[2].value, likeState: false}

        let allSongs = [...songs];
        allSongs.push(input)
        setSongs(allSongs)
    }

    const renderForm = () => {
        return(
            <form onSubmit={handleSubmit}>
                <label for="albumName">Album name:</label>
                <input name="albumName" type="text"/>
                <br></br>
                <label for="date">Release Date:</label>
                <input name="date" type="text"/>
                <br></br>
                <label for="image">Image URL:</label>
                <input name="image" type="text"/>
                <br></br>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

    return(
        <>
            {renderForm()};
            <div id="cardContainer">
                {renderRows()};
            </div>
        </>
    );
}

export default Songs;
