
import Link from 'next/link'
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
        <div className='bg-contactBg bg-cover bg-no-repeat py-10'>
        <div className='container-banner'>
            <div className='max-w-2xl'>
                <p className=' text-textColor text-xl'>
                    Наши сотрудники, отлично знающие ассортимент, всегда рады помочь выбрать необходимый товар ипроконсультировать по техническим характеристикам. <br /> <br />
                    Звоните по телефону 8(800)800-00-00 или оставляйте заявку на сайте.  <br /> <br />
                    Мы поможем вам подобрать необходимую сантехнику по вашему бюджету.  <br /> <br />
                    Ощутите комфорт и уют в собственной ванной комнате! <br /> <br />
                    <Link href={'/'} className='font-bold text-greenPrimry'>
                        Приятных Вам покупок!
                    </Link>
                </p>
            </div>
            <div className="flex justify-end mt-10">
                <button className=' bg-btnColor py-3 px-4 text-[#fff] flex items-center gap-2 rounded'>
                    <AiOutlineMail size={30}/>
                    Отправьте нам сообщение
                </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact