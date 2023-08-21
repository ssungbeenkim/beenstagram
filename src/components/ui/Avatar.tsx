type Props = { image?: string | null };

export default function Avatar({ image }: Props) {
  return (
    <div className='h-9 w-9 rounded-full bg-gradient-to-bl from-blue-400 via-fuchsia-400 to-amber-300'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className='rounded-full p-[0.1rem]'
        src={image ?? undefined}
        alt='user profile'
        referrerPolicy='no-referrer'
      />
    </div>
  );
}
