
import Stock from "@/components/Stock";
import TheBestCatgory from "@/components/TheBestCatgory";
import About from "@/components/About";
import PopularCategory from "@/components/PopularCategory";
import Featured from "@/components/Featured";
import Brands from "@/components/Brands";
import News from "@/components/News";
import SliderCom from '@/components/Slider';


const page = () => {
  return (
    <div>
        <SliderCom />
        <Stock />
        <TheBestCatgory />
        <About />
        <PopularCategory />
        <Featured />
        <Brands />
        <News />    
    </div>
  )
}

export default page