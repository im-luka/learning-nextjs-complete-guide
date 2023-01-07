import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/img_github.jpeg"
          alt="me, myself, Luxinho"
          width={300}
          height={300}
        />
      </div>

      <h1>Hi, I&apos;m Lux</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and NextJS
      </p>
    </section>
  );
};

export default Hero;
