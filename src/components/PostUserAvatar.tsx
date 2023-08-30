import Avatar from './ui/Avatar';

type Props = {
  image: string;
  username: string;
};

export default function PostUserAvatar({ image, username }: Props) {
  return (
    <div className='flex items-center p-2'>
      <Avatar image={image} size='medium' highlight />
      <span className='text-grey-900 ml-2 font-bold'>{username}</span>
    </div>
  );
}
