import Link from 'next/link'

import Tel from '../../public/assets/icons/tel.png';
import Mail from '../../public/assets/icons/mail.png';
import Adress from '../../public/assets/icons/contact.png';
import Image from 'next/image';



const FooterLink = () => {
  return (
    <div className=' grid xl:grid-cols-3 md:grid-cols-2 md:mb-5 sml:mb-10 sm:mb-10 xs:mb-10 gap-2'>
        <div className='flex flex-col gap-4'>
            <h4 className=' text-titleColor font-bold'>ПОКУПАТЕЛЮ</h4>
            <Link className=' text-textColor' href={'/'}>Доставка</Link>
            <Link className=' text-textColor' href={'/'}>Оплата</Link>
            <Link className=' text-textColor' href={'/'}>Гарантии и возврат</Link>
            <Link className=' text-textColor' href={'/'}>Производители</Link>
            <Link className=' text-textColor' href={'/'}>Статьи</Link>
        </div>

        <div className='flex flex-col gap-4'>
            <h4 className=' text-titleColor font-bold'>КОМПАНИЯ</h4>
            <Link  className=' text-textColor' href={'/'}>О нас</Link>
            <Link  className=' text-textColor' href={'/'}>Контакты</Link>
            <Link  className=' text-textColor' href={'/'}>Пользовательское соглашение</Link>
            <Link  className=' text-textColor' href={'/'}>Политика конфиденциальности</Link>
            <Link  className=' text-textColor' href={'/'}>Обратная связь</Link>
        </div>

        <div className='flex flex-col gap-4'>
            <h4 className=' text-titleColor font-bold'>КОНТАКТЫ</h4>
            <Link href={'/'} className='flex items-center gap-3'>
                <Image src={Tel} alt='tel' width={16} height={16} />
                <p className=' text-textColor'> 8(800)800-00-00</p>
            </Link>
            <Link href={'/'} className='flex items-center gap-3'>
                <Image src={Mail} alt='tel' width={16} height={16} />
                <p className=' text-textColor'> zakaz@gidratop.ru</p>
            </Link>
            <Link href={'/'} className='flex items-center gap-3'>
                <Image src={Adress} alt='tel' width={16} height={16} />
                <p className=' text-textColor'>г. Санкт-Петербург, пр-кт. Невский, д.39</p>
            </Link>
        </div>
    </div>
  )
}

export default FooterLink