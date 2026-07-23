import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from '../../components/SectionTitle';
import { GALLERY_IMAGES } from '../../data/gallery';
import styles from './Gallery.module.css';

function Gallery({
  tag = 'Gallery',
  title = 'Moments Worth Sharing',
  subtitle = 'A visual look at our work and the spaces we create.',
  images = GALLERY_IMAGES,
}) {
  return (
    <section className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        className={styles.swiper}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className={styles.slide}>
            {image.src ? (
              <img src={image.src} alt={image.alt} loading="lazy" />
            ) : (
              <div className={styles.placeholder} aria-hidden="true" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Gallery;
