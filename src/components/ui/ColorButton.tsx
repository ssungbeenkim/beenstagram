type Props = {
  text: string;
  onClick: () => void;
  size?: 'small' | 'large';
};

export default function ColorButton({ text, onClick, size = 'small' }: Props) {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-blue-400 via-fuchsia-400 to-amber-300 ${
        size === 'large' ? 'p-[0.3rem]' : 'p-[0.15rem]'
      }`}
    >
      <button
        className={`rounded bg-white transition-opacity hover:opacity-90
        ${size === 'large' ? 'p-4 text-2xl' : 'p-[0.3rem] text-base'}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
