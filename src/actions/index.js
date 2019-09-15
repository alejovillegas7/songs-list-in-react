//action creator (return an action)
export const selectSong = (song) =>{ //se usa export antespara poder (si es necesario) exportar varias acciones al mismo tiempo
    //retorna una accion
    return {
        type:'SELECTED_SONG',
        payload:song
    };
};