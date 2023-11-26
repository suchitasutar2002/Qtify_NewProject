import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as LeftArrow } from '../../assets/leftArrow.svg';
import styles from '../Carousel/Carousel.module.css'

const CarouselLeftNavigation = () => {
    const swiper =useSwiper();
    const [isBeginning, setIsBeginnig] = useState(true);

    useEffect(()=>{
        swiper.on("slideChange", ()=>{
            setIsBeginnig(swiper.isBeginning);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className={styles.leftNavigation}>
         {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()} />}
    </div>
  )
}

export default CarouselLeftNavigation

