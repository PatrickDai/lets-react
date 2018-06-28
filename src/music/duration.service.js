export default function humanReadableDuration(duration) {
  if (!duration) {
    return null;
  }
  const minutes = Math.floor(duration / (60 * 1000));
  const remaining = duration - minutes * 60 * 1000;
  const seconds = ("0" + Math.floor(remaining / 1000)).slice(-2);
  return `${minutes}:${seconds}`;
}
