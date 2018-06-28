import React from "react";

export default function MusicPlayButton(props) {
  const { onClick, isPlaying } = props;
  return <button onClick={onClick}>{isPlaying ? "Stop" : "Play"}</button>;
}
