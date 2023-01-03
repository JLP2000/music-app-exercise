import React, {useState} from "react"

const Songs = () => {
    const [songs, setSongs] = useState([
        {name: "Divinely Uninspired to a hellish Extent", releaseDate: "2019", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLhgyaj39H7ty-6OAil-maZmAJhNG5P4Z0kyWt&s=0"},
        {name: "To Tell The Truth I Can't Believe We Made It This Far", releaseDate: "2020", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QJjH1MdJDYZsMThUdMqadWY1pYAZbJ7u-jGwLLU&s=10"},
        {name: "Breach ", releaseDate: "2018", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4MtZ4fU3mY1UzBEusKjpqBfwUmTlzj4IHVTO&s=0"},
        {name: "Bloom", releaseDate: "2017", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROevUtGRP1HM5_6Y1ZUUdLuoead-s916Gygxx1EuA&s=10"},
        {name: "Deezer Sessions", releaseDate: "2018", coverart:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfazIr4Kr9G9WrEqo0wGoORWkQnyW7byXJNn-DSk&s=10"}
    ])

    const renderRows = () => {
        return songs.map(s => <div class="card">
            <h3> {s.name} </h3>
            <h3> {s.releaseDate} </h3>
            <img src={s.coverart}></img>
        </div>
        )
    }

    console.log("hi")

    return(
        <>
            <div id="cardContainer">
                {renderRows()};
            </div>
        </>
    );
}

export default Songs;
