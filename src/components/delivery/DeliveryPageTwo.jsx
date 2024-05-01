import Image from 'next/image'
import { motion } from 'framer-motion'
import { infoBlocks, priceDeliveryPropsTwo } from '@/constants'
import DeliveryImgesTwo from '../../../public/assets/img/delivery-img-2.png';


const DeliveryPageTwo = () => {
  return (
        <motion.div initial={{x:-500, opacity: 0}} animate={{x:0,opacity:1}} transition={{duration:.5}}  className='mb-20'>
            <div className=' relative'>
                <div className='border border-lightGary w-8/12'>
                    <div className='px-6 py-10'>
                        <h3 className='mb-2 font-bold'>Стоимость доставки</h3>
                        <p className='text-textColor mb-10'>Доставка в города России осуществляется транспортной компанией на ваш выбор.</p>
                        <table className='w-full border border-textColor border-collapse mb-5'>
                            <thead>
                                {priceDeliveryPropsTwo.map((item) => (
                                    <th key={item.id} className=' text-textColor font-bold border py-4 px-2 border-lightGary'>{item.titleBlock}</th> 
                                ))}
                            </thead>
                            <tbody>
                                {infoBlocks.map((item) => (
                                    <tr key={item.id}>
                                        <td className='text-textColor  border py-2 px-2 max-w-2xl border-lightGary'>{item.textInfo}</td>
                                        <td className='text-textColor  border  py-2 px-2 text-center border-lightGary'>{item.priceInfo}</td>
                                    
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='flex flex-col gap-4'>
                            <p className='text-greenPrimry'> <span className='font-bold uppercase'>БЕСПЛАТНО</span> БЕСПЛАТНО доставка осуществляется при условии, если покупателем приобретен крупногабаритный товар или при сумме заказа свыше 20 000 руб.</p>
                        </div>  
                    </div>   
                </div>

                <div className=' absolute -right-12 bottom-20 -z-20'>
                    <Image src={DeliveryImgesTwo} alt='imgDeliver' objectFit='cover' />
                </div>
            </div>

        
        </motion.div>
  )
}

export default DeliveryPageTwo