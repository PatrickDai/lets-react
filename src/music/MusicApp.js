import React, { Component } from 'react';
import musics from './music.service'
import MusicList from './MusicList';
import MusicPlayer from './MusicPlayer';

export default class MusicApp extends Component {
  state = {
    currentPlayingList: musics
  };

  render() {
    return (
      <div className='Music-App'>
        <h1> Music App </h1>
        <MusicList musics={musics} onPlay={(music, index) => this.player.togglePlay(music, index)} />
        <MusicPlayer ref={(player) => this.player = player} musics={this.state.currentPlayingList}></MusicPlayer>
      </div>
    );
  }
}
