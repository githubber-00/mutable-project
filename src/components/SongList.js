
import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongFrom';

function SongList() {
    const [ songs, setSong ] = useState([
        { title: 'Almost home', id: uuid() },
        { title: 'Memory gospel', id: uuid() },
        { title: 'This wild darkness', id: uuid() }
    ]);

    const addSong = (title) => {
        setSong([
            ...songs,
            { title, id: uuid() }
        ]);
    };

    const [ year, setYear ] = useState(1992);

    useEffect(() => {
        console.log('Songs updated.', songs);
    }, [songs]);
    
    useEffect(() => {
        console.log('Year updated.', year);
    }, [year]);

    return (
        <div className='song-list'>
            <ul>
                {songs.map(song => {
                    return (<li key={ song.id }>{ song.title }</li>);
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setYear(year + 1)}>Add 1 to year: {year}</button>
        </div>
    );
}

export default SongList;
