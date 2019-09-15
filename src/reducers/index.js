import {combineReducers} from 'redux';

const songsReducer = () => {//tendra la lista de canciones (estatica)
    return [ //arreglo porque la lista es estatica
        {title: 'Smells like teen spirit', duration:'3:05'},
        {title: 'enter sandman', duration:'4:35'},
        {title: 'Bored to death', duration:'3:25'},
        {title:'till u believe it', duration:'2:20'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) =>{
    if(action.type==='SELECTED_SONG'){
        return action.payload;
    };
    return selectedSong;
};

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
});