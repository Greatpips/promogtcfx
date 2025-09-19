import React, { useEffect, useRef, useState } from 'react';
import FadeIn from './FadeIn';

const Webinar = () => {
  const videoRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasInteracted) {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const videoSrc = video.getAttribute('src');
        if (entry.isIntersecting) {
          if (!videoSrc.includes('autoplay=1')) {
            video.setAttribute('src', videoSrc + '?autoplay=1');
          }
        } else {
          if (videoSrc.includes('autoplay=1')) {
            video.setAttribute('src', videoSrc.replace('?autoplay=1', ''));
          }
        }
      });
    }, observerOptions);

    videoObserver.observe(video);

    return () => {
      if (video) {
        videoObserver.unobserve(video);
      }
    };
  }, [hasInteracted]);

  const handleInteraction = () => {
    setHasInteracted(true);
  };

  return (
    <section className="bg-white px-0 sm:px-0 md:px-0">
      <FadeIn>
        <div className="bg-[rgb(2,0,47)]">
          <h1
            className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(182,135,86)] via-[rgb(238,190,138)] to-[rgb(182,135,86)] text-center text-[1.5rem] xs:text-[1.8rem] sm:text-[2rem] font-bold py-2 sm:py-[0.5em] border-b-[6px] sm:border-b-8 border-b-[rgb(182,135,86)]"
          >
            WHAT YOU WILL LEARN IN THIS SEMINAR
          </h1>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="w-full  overflow-hidden relative">
          {!hasInteracted && (
            <div className="absolute inset-0 flex items-center justify-start md:justify-start px-4 sm:px-6 bg-[rgb(2,0,47)] bg-opacity-70 z-10">
              <FadeIn>
                <button
                  onClick={handleInteraction}
                  className="bg-[rgb(182,135,86)] z-20 text-[0.9rem] xs:text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] text-white px-4 xs:px-6 sm:px-8 md:px-10 py-2 xs:py-3 sm:py-4 rounded-2xl hover:bg-[rgb(2,0,47)] focus:ring-2 focus:ring-[rgb(182,135,86)] focus:outline-none active:bg-[rgb(2,0,47)] transition duration-300 mt-4 sm:mt-[2em] mx-auto md:ml-[6rem] md:mx-0"
                  aria-label="Watch the webinar now"
                >
                  Watch Now
                </button>
              </FadeIn>
            </div>
          )}
          <div className={`pointer-events-none ${hasInteracted ? '' : 'hidden'} px-2`}>
            <iframe
              ref={videoRef}
              className="w-full h-[400px] md:h-[600px] "
              src="https://www.youtube.com/embed/HcJq0UfrK98"
              title="Webinar: What You Will Learn in This Seminar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Webinar;