import { AiOutlineMail } from "react-icons/ai";
import Title from './Title'
import NewsSlider from './NewsSlider'

const News = () => {
  return (
    <div className="mb-40">
        <div className='bg-newsBg bg-cover bg-no-repeat  py-40'>
            <div className='container-banner'>
                <div className=' relative -bottom-20 mb-20 z-10'>
                    <Title 
                        mainTitle={'Новости и события'}
                        subtitle={'News and events'}
                    />
                </div>
            </div>
        </div>
        <div className=' container-banner'>
            <NewsSlider />

            <div className="flex justify-end mt-10">
                <button className=' bg-btnColor py-3 px-4 text-[#fff] flex items-center gap-2 rounded'>
                    <AiOutlineMail size={30}/>
                    Отправьте нам сообщение
                </button>
            </div>
        </div>
    </div>
  )
}

export default News