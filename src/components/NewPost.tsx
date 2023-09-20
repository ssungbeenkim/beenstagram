'use client';
import { AuthUser } from '@/model/user';
import Image from 'next/image';
import { ChangeEvent, DragEvent, useState } from 'react';
import PostUserAvatar from './PostUserAvatar';
import Button from './ui/Button';
import FilesIcon from './ui/icons/FilesIcon';

type Props = {
  user: AuthUser;
};

export default function NewPost({ user: { username, image } }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
      console.log(files[0]);
    }
  };
  const handleDrag = (e: DragEvent) => {
    if (e.type === 'dragenter') {
      setDragging(true);
    } else if (e.type === 'dragleave') {
      setDragging(false);
    }
  };
  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer?.files;
    if (files && files[0]) {
      setFile(files[0]);
      console.log(files[0]);
    }
  };
  return (
    <section className='mt-6 flex w-full max-w-xl flex-col items-center'>
      {/* TODO:check image */}
      <PostUserAvatar username={username} image={image ?? ''} />
      <form className='mt-2 flex w-full flex-col'>
        <input
          className='hidden'
          name='input'
          id='input-upload'
          type='file'
          accept='image/*'
          onChange={handleChange}
        />
        <label
          className={`flex h-60 w-full flex-col items-center justify-center ${
            file && 'border-2 border-dashed border-sky-500'
          }`}
          htmlFor='input-upload'
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {dragging && (
            <div className='first-letter pointer-events-none absolute inset-0 z-10 bg-sky-500/20' />
          )}
          {!file && (
            <div className='pointer-events-none flex flex-col items-center'>
              <FilesIcon />
              <p>Drag and Drop your image here or Click</p>
            </div>
          )}
          {file && (
            <div className='relative aspect-square w-full'>
              <Image
                className='object-cover'
                src={URL.createObjectURL(file)}
                alt='local file'
                fill
                sizes='650px'
              />
            </div>
          )}
        </label>
        <textarea
          className='border border-neutral-300 text-lg outline-none'
          name='text'
          id='input-text'
          required
          rows={10}
          placeholder={'  Write a caption...'}
        ></textarea>
        <Button text='Publish' onClick={() => {}} />
      </form>
    </section>
  );
}
