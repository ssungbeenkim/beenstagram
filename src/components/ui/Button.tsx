type Props = {
  text: string;
  onClick: () => void;
  red?: boolean;
  disabled?: boolean;
};
export default function Button({
  text,
  onClick,
  red,
  disabled = false,
}: Props) {
  return (
    <button
      className={`rounded-md border-none py-2 px-8 font-bold leading-4 text-white ${
        red ? 'bg-red-500' : 'bg-sky-500'
      } ${disabled ? 'cursor-not-allowed opacity-80' : ''}}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
