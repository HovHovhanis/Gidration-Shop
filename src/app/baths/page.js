import Title from '@/components/Title'
import CatalogCategory from '@/components/pageBaths/CatalogCategory'
import Products from '@/components/pageBaths/Products'
import WatchedProducts from '@/components/pageBaths/WatchedProducts'


const BathsPage = () => {

  return (
    <div className='container-banner'>
        <div className='my-20'>
            <Title mainTitle={'Ванны'} subtitle={'Baths'} />
        </div>
        <div className='flex items-start gap-10'>
            <div>
                <CatalogCategory />
            </div>
            <div>
                <Products/>
            </div>
        </div>
        <div className='my-20'>
            <WatchedProducts />
        </div>
    </div>
  )
}

export default BathsPage