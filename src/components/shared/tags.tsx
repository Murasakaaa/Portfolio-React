export default function Tag(props: { text: string }) {
  return (
    <span className="font-archivo border-black border-2 px-3 py-1 text-base flex items-center space-x-1.5">
      <span>{props.text}</span>
    </span>
  );
}
