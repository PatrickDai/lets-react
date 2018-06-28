import React from "react";
import humanReadableDuration from "./duration.service";

export default function MusicList(props) {
  const { musics, play, add, remove, name } = props;
  const header = (
    <tr>
      <th>Title</th>
      <th>Artist</th>
      <th>Duration</th>
      <th>Action</th>
    </tr>
  );
  const rows = musics.map((music, i) => (
    <tr key={i}>
      <td>{music.title}</td>
      <td>{music.artist}</td>
      <td>{humanReadableDuration(music.duration)}</td>
      <td>
        <button onClick={() => play(music, i)}>Play</button>
        {add && <button onClick={() => add(music, i)}>Add</button>}
        {remove && <button onClick={() => remove(music, i)}>Remove</button>}
      </td>
    </tr>
  ));

  return (
    <section>
      <h2> {name} </h2>
      <table>
        <thead>{header}</thead>
        <tbody>{rows}</tbody>
      </table>
    </section>
  );
}
