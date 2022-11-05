import Image from 'next/image'
import loadingAnimation from '../../public/loading.gif'

export default function Loading() {
  return (
    <div
      className='flex h-screen items-center justify-center bg-[url("/paintedLadies.webp")]
    bg-cover bg-center bg-no-repeat
		backdrop-blur-lg'
    >
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
