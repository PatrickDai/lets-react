import React, { Component } from 'react';
import musics from './music.service'

export default class MusicApp extends Component {
  render() {
    return (
      <div className="Music-App">
        <h1> Music App </h1>
        <MusicList musics={musics}/>
      </div>
    );
  }
}

function MusicList(props) {
  const header = <tr>
    <th>Title</th>
    <th>Artist</th>
    <th>Duration</th>
  </tr>;
  const rows = props.musics.map((music, i) =>
    <tr key={i}>
      <td>{music.title}</td>
      <td>{music.artist}</td>
      <td>{music.duration}</td>
    </tr>
  );
  return (
    <table>
      <thead>{header}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
