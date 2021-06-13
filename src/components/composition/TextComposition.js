export default function TextComposition({ addEmoji }) {
  const text = "JS Programming Language";
  return <div>{addEmoji ? addEmoji(text, "emoji here") : text}</div>;
}
