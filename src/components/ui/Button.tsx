type Porps = {
  text: string;
  onClick: () => void;
  red?: boolean;
};
export default function Button({ text, onClick, red }: Props) {
  return (
    <button
      className={`rounded-md border-none py-2 px-8 font-bold leading-4 text-white ${
        red ? 'bg-red-500' : 'bg-sky-500'
      }`}
    >
      {text}
    </button>
  );
}
