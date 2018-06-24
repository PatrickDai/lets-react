import React from 'react';
import humanReadableDuration from './duration.service';
import MusicPlayButton from './MusicPlayButton';

export default function MusicList(props) {
  const { musics, onPlay } = props;
  const header = <tr>
    <th>Title</th>
    <th>Artist</th>
    <th>Duration</th>
    <th>Action</th>
  </tr>;
  const rows = musics.map((music, i) =>
    <tr key={i}>
      <td>{music.title}</td>
      <td>{music.artist}</td>
      <td>{humanReadableDuration(music.duration)}</td>
      <td>
        <MusicPlayButton onClick={() => onPlay(music, i)}/>
      </td>
    </tr>
  );
  return (
    <table>
      <thead>{header}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
