import TestimonialCard from '../../UI/TestimonialCard/TestimonialCard';
import classes from './Testimonial.module.css';

import testimonials from '../../DUMYY_DATA/Testimonials';

const Testimonial = () => {
  return (
    <div className="container mx-auto">
      <div className={classes.wrapper}>
        <h1>Testimonial</h1>
        <p>see what people say about our company</p>
        <div className={classes.underline}></div>
        <div className={classes.testimonial}>
          {testimonials &&
            testimonials.map((testimonial) => {
              return (
                <TestimonialCard
                  key={testimonial.id}
                  img={testimonial.img}
                  name={testimonial.name}
                  destination={testimonial.destination}
                  description={testimonial.description}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
