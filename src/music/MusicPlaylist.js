import React, { Component } from "react";
import MusicList from "./MusicList";

const APP_KEY = "MusicApp.Playlist";

export default class MusicPlaylist extends Component {
  state = { musics: [] };

  render() {
    return (
      <MusicList
        name={this.props.name}
        musics={this.state.musics}
        play={(music, index) => this.play(music, index)}
        remove={(music, index) => this.remove(music, index)}
      />
    );
  }

  play(music, index) {
    const musics = this.moveMusicToTop(music, index);
    this.setState({ musics });
    this.props.play(music, index);
  }

  moveMusicToTop(music, index) {
    const musics = this.state.musics.slice();
    musics.splice(index, 1);
    musics.unshift(music);
    return musics;
  }

  add(music) {
    const musics = this.state.musics.slice();
    musics.push(music);
    this.setState({ musics });
  }

  remove(music, index) {
    const musics = this.state.musics.slice();
    musics.splice(index, 1);
    this.setState({ musics });
  }

  componentDidMount() {
    const persistedResults = localStorage.getItem(APP_KEY);
    if (persistedResults !== null) {
      this.setState({ musics: JSON.parse(persistedResults) });
    }
    window.addEventListener("beforeunload", this.persist.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.persist.bind(this));
  }

  persist() {
    localStorage.setItem(APP_KEY, JSON.stringify(this.state.musics));
  }
}
