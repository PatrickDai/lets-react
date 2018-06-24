import React  from 'react';
import humanReadableDuration from './duration.service';

export default function MusicList(props) {
  const header = <tr>
    <th>Title</th>
    <th>Artist</th>
    <th>Duration</th>
  </tr>;
  const rows = props.musics.map((music, i) =>
    <tr key={i}>
      <td>{music.title}</td>
      <td>{music.artist}</td>
      <td>{humanReadableDuration(music.duration)}</td>
    </tr>
  );
  return (
    <table>
      <thead>{header}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
