'use client';
import { AuthUser } from '@/model/user';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, DragEvent, FormEvent, useRef, useState } from 'react';
import PostUserAvatar from './PostUserAvatar';
import Button from './ui/Button';
import GridSpinner from './ui/GridSpinner';
import FilesIcon from './ui/icons/FilesIcon';

type Props = {
  user: AuthUser;
};

export default function NewPost({ user: { username, image } }: Props) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const textRef = useRef<HTMLTextAreaElement>(null); //NOTE: 노드상의 reference
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target?.files;
    if (files && files[0]) {
      setFile(files[0]);
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
    }
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('text', textRef.current?.value ?? '');

    fetch('/api/posts/', { method: 'POST', body: formData }) //
      .then((res) => {
        if (!res.ok) {
          setError(`${res.status} ${res.statusText}`);
          return;
        }
        router.push('/');
      })
      .catch((err) => setError(err.toString()))
      .finally(() => setLoading(false));
  };
  return (
    <section className='mt-6 flex w-full max-w-xl flex-col items-center'>
      {loading && (
        <div className='absolute inset-0 z-20 bg-sky-500/20 pt-[30%] text-center'>
          <GridSpinner />
        </div>
      )}
      {error && (
        <p className='mb-4 w-full bg-red-100 p-4 text-center font-bold text-red-600'>
          {error}'
        </p>
      )}
      {/* TODO:check image */}
      <PostUserAvatar username={username} image={image ?? ''} />
      <form className='mt-2 flex w-full flex-col' onSubmit={handleSubmit}>
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
          ref={textRef}
        ></textarea>
        <Button text='Publish' onClick={() => {}} />
      </form>
    </section>
  );
}
