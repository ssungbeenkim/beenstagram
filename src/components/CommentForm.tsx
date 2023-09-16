import { FormEvent, useState } from 'react';
import SmileIcon from './ui/icons/SmileIcon';

type Props = {
  onPostComment: (comment: string) => void;
};
export default function CommentForm({ onPostComment }: Props) {
  const [comment, setComment] = useState('');
  const buttonDisabled = comment.trim().length === 0;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onPostComment(comment);
    setComment('');
  };
  return (
    <form
      className='flex items-center border-t border-neutral-300 px-3'
      onSubmit={handleSubmit}
    >
      <SmileIcon />
      <input
        className='ml-2 w-full border-none p-3 outline-none'
        type='text'
        placeholder='Add a comment...'
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        disabled={buttonDisabled}
        className={`ml-2 font-bold ${
          buttonDisabled ? 'text-sky-300' : 'text-sky-500'
        }`}
      >
        Post
      </button>
    </form>
  );
}
