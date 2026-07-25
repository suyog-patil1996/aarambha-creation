import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../components/SectionTitle';
import { fadeUp } from '../../utils/motionVariants';
import { scrollReveal } from '../../utils/scrollReveal';
import { TESTIMONIALS } from '../../data/testimonials';
import styles from './Testimonials.module.css';

function Testimonials({
  tag = 'Testimonials',
  title = 'What Our Clients Say',
  subtitle = "Don't just take our word for it — hear from the people we've worked with.",
  testimonials = TESTIMONIALS,
}) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section className="container">
      <SectionTitle tag={tag} title={title} subtitle={subtitle} />
      <motion.div variants={fadeUp} {...scrollReveal(0.2)}>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={prefersReducedMotion ? false : { delay: 5000, disableOnInteraction: false }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className={styles.card}>
              <div className={styles.rating} aria-label={`Rated ${testimonial.rating} out of 5`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <FaStar key={`${testimonial.id}-star-${index}`} aria-hidden="true" />
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>
              <div className={styles.author}>
                {testimonial.photo ? (
                  <img src={testimonial.photo} alt={testimonial.name} className={styles.avatar} />
                ) : (
                  <div className={styles.avatarPlaceholder} aria-hidden="true">
                    {testimonial.name[0]}
                  </div>
                )}
                <div>
                  <p className={styles.name}>{testimonial.name}</p>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </motion.div>
    </section>
  );
}

export default Testimonials;
