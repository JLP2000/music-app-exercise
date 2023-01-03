import React, {useState} from "react"

const Artist = () => {
    const [artistName, setArtistName] = useState("Lewis Capaldi")
    const [genre, setGenre] = useState("Pop")
    const [introductionParagraph, setIntro] = useState(`Lewis Marc Capaldi born 7 October 1996) is a Scottish singer-songwriter and musician. He was nominated for the Critics' Choice Award at the 2019 Brit Awards. In March 2019, his single "Someone You Loved" topped the UK Singles Chart where it remained for seven weeks, and in November 2019, it reached number one on the US Billboard Hot 100; it was nominated at the 62nd Annual Grammy Awards for Song of the Year and won the 2020 Brit Award for Song of the Year. Capaldi also won the 2020 Brit Award for Best New Artist.`)

    return(
        <>
            <h2>{artistName}</h2>
            <h3>{genre}</h3>
            <p>{introductionParagraph}</p>
        </>
    );
}

export default Artist;
