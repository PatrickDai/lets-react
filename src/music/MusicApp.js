import React, { Component } from 'react';
import musics from './music.service'
import MusicList from './MusicList';
import MusicPlayer from './MusicPlayer';
import MusicPlaylist from './MusicPlaylist';

export default class MusicApp extends Component {
  state = {
    currentList: musics,
  };

  render() {
    return (
      <div className='Music-App'>
        <h1> Music App </h1>
        <MusicList musics={musics}
                   play={(music, index) => this.handlePlay(music, index, musics)}
                   add={(music) => this.playlist.add(music)}/>
        <MusicPlaylist ref={(playlist) => this.playlist = playlist}
                       name='My playlist'
                       play={(music, index) => this.handlePlay(music, index, this.playlist.state.musics)}/>
        <MusicPlayer ref={(player) => this.player = player}
                     musics={this.state.currentList}/>
      </div>
    );
  }

  handlePlay(music, index, list) {
    this.player.togglePlay(music, index);
    this.setState({ currentList: list });
  }
}
