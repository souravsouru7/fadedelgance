'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import Navbar from '../components/Navbar';
import LoadingScreen from '../components/LoadingScreen';

// Register the Observer plugin
gsap.registerPlugin(Observer);

export default function Home() {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);
  const slideImagesRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);
  const countRef = useRef(null);
  const animatingRef = useRef(false);
  const currentIndexRef = useRef(0);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".slide");
    const images = gsap.utils.toArray(".image").reverse();
    const slideImages = gsap.utils.toArray(".slide__img");
    const outerWrappers = gsap.utils.toArray(".slide__outer");
    const innerWrappers = gsap.utils.toArray(".slide__inner");
    const count = document.querySelector(".count");
    const wrap = gsap.utils.wrap(0, sections.length);
    let animating = false;
    let currentIndex = 0;

    // Store refs for cleanup
    sectionsRef.current = sections;
    imagesRef.current = images;
    slideImagesRef.current = slideImages;
    outerWrappersRef.current = outerWrappers;
    innerWrappersRef.current = innerWrappers;
    countRef.current = count;
    animatingRef.current = animating;
    currentIndexRef.current = currentIndex;

    gsap.set(outerWrappers, { xPercent: 100 });
    gsap.set(innerWrappers, { xPercent: -100 });
    gsap.set(".slide:nth-of-type(1) .slide__outer", { xPercent: 0 });
    gsap.set(".slide:nth-of-type(1) .slide__inner", { xPercent: 0 });

    function gotoSection(index, direction) {
      animating = true;
      index = wrap(index);

      let tl = gsap.timeline({
        defaults: { duration: 1, ease: "expo.inOut" },
        onComplete: () => {
          animating = false;
        }
      });

      let currentSection = sections[currentIndex];
      let heading = currentSection.querySelector(".slide__heading");
      let nextSection = sections[index];
      let nextHeading = nextSection.querySelector(".slide__heading");

      gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
      gsap.set([sections[currentIndex], images[index]], { zIndex: 1, autoAlpha: 1 });
      gsap.set([sections[index], images[currentIndex]], { zIndex: 2, autoAlpha: 1 });

      tl
        .set(count, { text: index + 1 }, 0.32)
        .fromTo(
          outerWrappers[index],
          {
            xPercent: 100 * direction
          },
          { xPercent: 0 },
          0
        )
        .fromTo(
          innerWrappers[index],
          {
            xPercent: -100 * direction
          },
          { xPercent: 0 },
          0
        )
        .to(
          heading,
          {
            "--width": 800,
            xPercent: 30 * direction
          },
          0
        )
        .fromTo(
          nextHeading,
          {
            "--width": 800,
            xPercent: -30 * direction
          },
          {
            "--width": 200,
            xPercent: 0
          },
          0
        )
        .fromTo(
          images[index],
          {
            xPercent: 125 * direction,
            scaleX: 1.5,
            scaleY: 1.3
          },
          { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
          0
        )
        .fromTo(
          images[currentIndex],
          { xPercent: 0, scaleX: 1, scaleY: 1 },
          {
            xPercent: -125 * direction,
            scaleX: 1.5,
            scaleY: 1.3
          },
          0
        )
        .fromTo(
          slideImages[index],
          {
            scale: 2
          },
          { scale: 1 },
          0
        )
        .timeScale(0.8);

      currentIndex = index;
    }

    // Auto-play function
    function startAutoPlay() {
      autoPlayRef.current = setInterval(() => {
        if (!animating) {
          gotoSection(currentIndex + 1, +1);
        }
      }, 2000); // 2 seconds
    }

    // Stop auto-play function
    function stopAutoPlay() {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    }

    // Start auto-play
    startAutoPlay();

    const observer = Observer.create({
      type: "wheel,touch,pointer",
      preventDefault: true,
      wheelSpeed: -1,
      onUp: () => {
        console.log("down");
        if (animating) return;
        stopAutoPlay(); // Stop auto-play when user interacts
        gotoSection(currentIndex + 1, +1);
        startAutoPlay(); // Restart auto-play after 2 seconds
      },
      onDown: () => {
        console.log("up");
        if (animating) return;
        stopAutoPlay(); // Stop auto-play when user interacts
        gotoSection(currentIndex - 1, -1);
        startAutoPlay(); // Restart auto-play after 2 seconds
      },
      tolerance: 10
    });

    function logKey(e) {
      console.log(e.code);
      if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animating) {
        stopAutoPlay(); // Stop auto-play when user interacts
        gotoSection(currentIndex - 1, -1);
        startAutoPlay(); // Restart auto-play after 2 seconds
      }
      if (
        (e.code === "ArrowDown" ||
          e.code === "ArrowRight" ||
          e.code === "Space" ||
          e.code === "Enter") &&
        !animating
      ) {
        stopAutoPlay(); // Stop auto-play when user interacts
        gotoSection(currentIndex + 1, 1);
        startAutoPlay(); // Restart auto-play after 2 seconds
      }
    }

    document.addEventListener("keydown", logKey);

    // Cleanup function
    return () => {
      observer.kill();
      document.removeEventListener("keydown", logKey);
      stopAutoPlay(); // Clean up auto-play interval
    };
  }, []);

  return (
    <main>
      <LoadingScreen />
      <Navbar />

      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <h2 className="slide__heading">ELEGANCE</h2>
                <figure className="slide__img-cont">
                  <img className="slide__img" src="/pexels-athena-2962086.jpg" alt="Elegant footwear collection" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <h2 className="slide__heading">STYLE</h2>
                <figure className="slide__img-cont">
                  <img className="slide__img" src="/pexels-alexakeiart-6809887.jpg" alt="Stylish shoes collection" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <h2 className="slide__heading">COMFORT</h2>
                <figure className="slide__img-cont">
                  <img className="slide__img" src="/pexels-castorlystock-3682292.jpg" alt="Comfortable footwear" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slide">
        <div className="slide__outer">
          <div className="slide__inner">
            <div className="slide__content">
              <div className="slide__container">
                <h2 className="slide__heading">QUALITY</h2>
                <figure className="slide__img-cont">
                  <img className="slide__img" src="/pexels-bellazhong-3076787.jpg" alt="Premium quality shoes" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overlay">
        <div className="overlay__content">
          <p className="overlay__count">0<span className="count">1</span></p>
          <figure className="overlay__img-cont">
            <img className="image" src="/pexels-august-de-richelieu-4427712.jpg" alt="Footwear collection 1" />
            <img className="image" src="/pexels-746807869-18576107.jpg" alt="Footwear collection 2" />
            <img className="image" src="/pexels-castorlystock-3682292.jpg" alt="Footwear collection 3" />
            <img className="image" src="/pexels-bellazhong-3076787.jpg" alt="Footwear collection 4" />
          </figure>
        </div>
      </section>

      <footer>
        <a href="https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.observe()">ScrollTrigger.observe()</a>
        <p>Faded Elegance - Premium Footwear</p>
      </footer>
    </main>
  );
}
