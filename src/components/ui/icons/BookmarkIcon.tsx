import { RiBookmarkLine } from 'react-icons/ri';

type Props = {
  className?: string;
};
export default function BookmarkIcon({ className }: Props) {
  return <RiBookmarkLine className={className || 'h-6 w-6'} />;
}
