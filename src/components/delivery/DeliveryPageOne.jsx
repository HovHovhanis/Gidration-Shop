"use client"
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'


import { infoBlocks, priceDeliveryProps } from '@/constants'
import DeliveryImges from '../../../public/assets/img/delivery-img.png';
import DeliveryPageImges from '../../../public/assets/img/deliver-page-1.png';



const DeliveryPageOne = () => {
  return (
    <motion.div initial={{x:-500, opacity: 0}} animate={{x:0,opacity:1}} transition={{duration:.5}}  className='mb-20'>
        <div className=' relative mb-10'>
            <div className='border border-lightGary w-8/12'>
                <div className='px-6 py-10'>
                    <h3 className='mb-10 font-bold'>Стоимость доставки</h3>
                    <table className='w-full border border-textColor border-collapse mb-5'>
                        <thead>
                            {priceDeliveryProps.map((item) => (
                                <th key={item.id} className=' text-textColor font-bold border py-4 px-2 border-lightGary'>{item.titleBlock}</th> 
                            ))}
                        </thead>
                        <tbody>
                            {infoBlocks.map((item) => (
                                <tr key={item.id}>
                                    <td className='text-textColor  border py-2 px-2 max-w-2xl border-lightGary'>{item.textInfo}</td>
                                    <td className='text-textColor  border  py-2 px-2 text-center border-lightGary'>{item.priceInfo}</td>
                                    <td className='text-textColor  border  py-2 px-2 text-center border-lightGary'>{item.textInfoPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-textColor'>Доставка за пределы города Краснодар оплачиваются из расчета + 30 ₽ за 1 км к стоимости доставки по городу</p>
                        <p className=' text-textColor'> <span className='font-bold uppercase'>БЕСПЛАТНО</span> доставка осуществляется при условии, если покупателем приобретен крупногабаритный товар или при сумме заказа свыше 20 000 ₽.</p>
                        <p className=' text-textColor'> <span className='font-bold uppercase  text-greenPrimry'>БЕСПЛАТНО</span>  доставка осуществляется только в черте города Краснодар.</p>
                    </div>  
                </div>   
            </div>

            <div className=' absolute -right-12 bottom-20 -z-20'>
                <Image src={DeliveryImges} alt='imgDeliver' objectFit='cover' />
            </div>
        </div>

        <div className='grid grid-cols-3 gap-2 mb-10'>
            <div>
                <Image src={DeliveryPageImges} alt='Img' height={491} width={540}/>
            </div>
            <div className=' col-span-2 border border-lightGary rounded'>
                <div className='px-3 py-3'>
                    <h3 className='mb-5 font-bold'>Правила доставки по городу Краснодар и Краснодарскому краю</h3>
                    <ol className='flex flex-col gap-2 text-textColor text-sm '>
                        <li>1. Мы осуществляем доставку товара по Краснодару собственной службой доставки ежедневно.</li>
                        <li>2. Время доставки согласовывается с менеджером, который обязательно свяжется с вами после размещения заказа. Доставка в точное время не предусмотрено. Непосредственно перед доставкой с Вами свяжется водитель и скорректирует точное время доставки.
                        </li>
                        <li>   
                            3. Приобретённый товар доставляется до подъезда (офисного здания, калитки дачи или ворот частного дома). Предоставление услуг доставки возможно при наличии свободного парковочного места вблизи места адреса доставки (подъезда жилого дома, бизнес-центра и т.д.), а так же при условии, что стоянка в данном месте не противоречит Правилам дорожного движения. В случае возникновения причин, препятствующих подъезду транспортного средства, доставка осуществляется до места, максимально приближённого к месту планируемой разгрузки товара без нарушения ПДД. 
                        </li>
                        <li>4. Если на территории места назначения доставки предусмотрен платный въезд, то Покупателю необходимо компенсировать стоимость въезда транспортного средства. При этом приемка и проверка товара, а также подписание передаточных документов осуществляется в данном месте без дальнейшего перемещения товара.
                        </li>
                        <li>
                            5. Доставка является платной услугой и, в случае возврата товара, данная сумма не подлежит возврату, а в случае обмена оплачивается отдельно.
                        </li>
                        <li>
                            6. Доставка товара производится с понедельника по пятницу с 10:00 до 18:00, по субботам и воскресеньям по договорённости.
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <div className='border border-lightGary rounded'>
            <div className='px-3 py-3'>
                <h3 className='mb-5 font-bold'>Правила приемки товара</h3>
                <ol className=' list-decimal flex flex-col gap-2 text-textColor text-sm px-3 mb-3 '>
                    <li> Перед подписанием договора купли-продажи обязательно убедитесь в полной комплектности заказа и отсутствии внешних дефектов товара. Претензии к внешнему виду доставленного товара в соответствии со ст. 458 и 459 ГК РФ можно предъявить только до передачи товара клиенту продавцом, и при их наличии покупатель вправе отказаться от товара. Если состав комплектации верен и товар не имеет дефектов, покупатель должен поставить свою подпись в графе «к внешнему виду и комплектации претензий не имею». После этого претензии к товарному виду и комплектации не принимаются.
                    </li>
                    <li>
                         При получении заказа, оформленного на юридическое лицо (организацию), обязательно наличие у получателя либо печати данной организации, либо доверенности от нее на получение товара (дата получения товара должна входить в срок действия доверенности).
                    </li>
                    <li> При получении заказа представителем транспортной компании обязательно предъявление им доверенности от покупателя (в электронном виде) и доверенности от своей организации.
                    </li>
                    <li> Вы также можете отказаться от товара в течение 7 (семи) дней после подписания документов, не считая дня его покупки. В этом случае необходимо, чтобы:
                    </li>
                </ol>

                <ul className='flex flex-col gap-2 text-textColor text-sm px-3 list-disc mb-5 marker:text-btnColor marker:font-bold'>
                    <li>товар не эксплуатировался, были сохранены его потребительские свойства, товарный вид, упаковка, пломбы, ярлыки, а также товарный/кассовый чек, документация к товару;</li>
                    <li>товар был надлежащего качества (исправен, не имел вмятин, трещин, царапин, сколов и других механических повреждений, за исключением скрытых производственных дефектов);
                    </li>
                    <li>товар не входил в перечень товаров, не подлежащих возврату или обмену на аналогичный товар, согласно Постановлению Правительства РФ № 55 от 19 января 1998 г.
                    </li>
                </ul>

                <ol className=' list-none  flex flex-col gap-2 text-textColor text-sm mb-3 '>
                    <li>5. Возврат переведенных средств, производится на Ваш банковский счет или наличными деньгами (В зависимости от способа оплаты) в течение 5—30 рабочих дней (срок зависит от Банка, который выдал Вашу банковскую карту).
                    </li>
                    <li>
                    6. При получении заказа в пунктах самовывоза получателю необходимо знать номер счета, по которому оплачивался заказ, и предъявить доверенность на получение заказа.
                    </li>   
                </ol>
            </div>
        </div>

        
    </motion.div>
  )
}


export default DeliveryPageOne





