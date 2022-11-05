import Image from 'next/image'
import loadingAnimation from '../../public/loading.gif'
import paintedLadies from '../../public/paintedLadies.webp'

export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Image
        className='absolute z-[-1]'
        src={paintedLadies}
        alt='Painted Ladies'
        fill
        style={{
          //filter: 'blur(10px)',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div className='w-4/12 rounded-full border-[18px] border-[#8f4ee1] p-20'>
        <Image
          src={loadingAnimation}
          className='w-full'
          alt='Loading animation'
        />
      </div>
    </div>
  )
}
