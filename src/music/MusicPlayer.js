import React, { Component } from "react";
import humanReadableDuration from "./duration.service";
import MusicPlayButton from "./MusicPlayButton";

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
          <h3>
            {music.title} - {music.artist}
          </h3>
          <div>
            Remaining time:{" "}
            {humanReadableDuration(this.state.timer || music.duration)}
          </div>
          <MusicPlayButton
            isPlaying={this.state.isPlaying}
            onClick={this.togglePlay.bind(
              this,
              music,
              this.state.currentMusicIndex
            )}
          />
        </div>
      </section>
    );
  }

  togglePlay(music, musicIndex) {
    if (this.state.isPlaying) {
      this.stop();
    }
    const currentPlayingMusic = this.props.musics[this.state.currentMusicIndex];
    if (music !== currentPlayingMusic || !this.state.isPlaying) {
      this.play(music);
    }
    this.setState({ currentMusicIndex: musicIndex });
  }

  play(music) {
    this.setState({ isPlaying: true });
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
    const nextMusicIndex =
      (this.state.currentMusicIndex + 1) % this.props.musics.length;
    this.setState({ currentMusicIndex: nextMusicIndex });
    const nextMusic = this.props.musics[this.state.currentMusicIndex];
    if (nextMusic) {
      this.play(nextMusic);
    }
  }

  stop() {
    this.setState({ isPlaying: false });
    clearInterval(this.timerInterval);
  }

  componentWillUnmount() {
    this.stop();
  }
}
