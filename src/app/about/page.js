import Link from 'next/link'
import Title from '@/components/Title'


const About = () => {
  return (
    <div className='my-10'>
      <div className='container-banner'>
        <div className=' mb-10'>
        <Link className=' text-textColor hover:text-btnColor' href={'/about'}>Главная {'>>'} О нас  </Link>
        </div>

        <section>
          <Title 
            mainTitle={'О нас'}
            subtitle={'About us'}
          />
          <h2 className=' text-btnColor text-3xl font-bold mt-20 mb-10'>Интернет-магазин сантехники gidratop.ru </h2>
          <p className='text-lg text-textColor mb-4'>Мы предлагаем большой ассортимент сантехнического оборудования из Европы на любой вкус по выгодным и доступным ценам. </p>
          <p className='text-lg text-textColor mb-4'>Мы ценим наших клиентов, поэтому продаем только сертифицированную продукцию, предоставляем качественный сервис и гарантируем индивидуальный подход к каждому клиенту.</p>
          <p className='text-lg text-textColor mb-4'>Кроме того, наш магазин сантехники постоянно проводит акции, предоставляем скидки на товары и делаем выгодные предложения с целью повышения лояльности наших клиентов. </p>
          <p className='text-lg text-textColor mb-4'>
            <span className=' text-greenPrimry'>
              Наша цель – 
            </span> 
            обеспечить комфорт каждому клиенту и предоставить отличные решения по организации пространства ванных комнат, кухонь и санузлов. Мы доставим товар в удобное время для клиента и точно в срок, потому что ценим каждого покупателя.
          </p>
        </section>
      
      </div>
    </div>
  )
}

export default About

