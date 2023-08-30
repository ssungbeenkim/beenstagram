import CloseIcon from './ui/icons/CloseIcon';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function PostModal({ onClose, children }: Props) {
  return (
    <section
      className='fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center bg-neutral-900/70'
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <button className='fixed top-0 right-0 p-8 text-white' onClick={onClose}>
        <CloseIcon />
      </button>
      <div className='h-3/5 w-4/5 max-w-7xl bg-white'>{children}</div>
    </section>
  );
}
