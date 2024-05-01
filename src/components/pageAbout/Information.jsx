import Image from 'next/image'
import { aboutPageBlocks } from '@/constants'

const Information = () => {

  return (
    <div className='bg-aboutPageBg bg-no-repeat bg-cover py-40'>
        <div className='container-banner'>
            {aboutPageBlocks.map((item) => (
                <div className='' key={item.id}>
                    <h2 className='text-3xl font-bold text-titleColor mb-20'>{item.titleBlock}</h2>
                    <div className='grid xl:grid-cols-4 lgl:grid-cols-3 gap-4 md:grid-cols-2 xs:grid-cols-1'>
                        {item.blocks.map((item) => (
                            <div className='flex items-start gap-2' key={item.id}>
                                <Image src={item.icons} alt='icon' objectFit='cover' />
                                <div className='flex flex-col gap-1'>
                                    <h4 className=' text-titleColor font-bold uppercase'>{item.subtitle}</h4>
                                    <p className='text-sm text-textColor font-bold'>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}       
        </div>
    </div>
  )
}

export default Information