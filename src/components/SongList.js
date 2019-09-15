import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component{
    renderList(){//toma la lista de canciones y retorna un bloque de JSX
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick = {()=>this.props.selectSong(song)}
                        >
                            SELECT
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div> //cada vez que creamos una lista es recomendable usar una key
            );
        });
    };
    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    };
};

const mapStateToProps = (state) =>{ // esta funcion convertira la informacion que queremos (en este caso la lista de canciones)
                                // y las volvera props para usar dentro de nuestro componente (SongList)
    return {songs:state.songs};
};

export default connect(mapStateToProps,{selectSong})(SongList);