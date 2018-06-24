import React, { Component } from 'react';
import humanReadableDuration from './duration.service'

export default class MusicPlayer extends Component {
  state = {
    currentMusicIndex: 0,
    isPlaying: false
  };

  render() {
    const { musics } = this.props;
    const music = musics[this.state.currentMusicIndex];
    return (
      <section>
        <h2>Player</h2>
        <div>
          <h3>{music.title} - {music.artist}</h3>
          <div>Remaining time: {humanReadableDuration(this.state.timer || music.duration)}</div>
          <button onClick={this.handlePlay.bind(this, music)}>{this.state.isPlaying ? 'Stop' : 'Play'}</button>
        </div>
      </section>
    )
  }

  handlePlay(music) {
    const isPlaying = !this.state.isPlaying;
    isPlaying ? this.play(music) : this.stop();
    this.setState({ isPlaying });
  }

  play(music) {
    const finishAt = Date.now() + music.duration;
    const tick = () => {
      const timeLeft = finishAt - Date.now();
      if (timeLeft <= 0) {
        clearInterval(this.timerInterval);
        this.playNext();
      }
      this.setState({ timer: Math.max(timeLeft, 0) });
    };
    this.timerInterval = setInterval(tick, 1000);
  }

  playNext() {
    const nextMusicIndex = (this.state.currentMusicIndex + 1) % this.props.musics.length;
    this.setState({ currentMusicIndex: nextMusicIndex });
    this.play(this.props.musics[this.state.currentMusicIndex]);
  }

  stop() {
    clearInterval(this.timerInterval);
  }

  componentWillUnmount() {
    this.stop();
  }
}
