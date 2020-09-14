<template>
  <div>
    <div class="splashscreen">
      <div class="beers">
        <img id="left-beer" src='../../assets/beer-left.svg'/>
        <img id="right-beer" src='../../assets/beer-right.svg'/>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
  name: 'Splashscreen',
  mounted() {
    const timeline = gsap.timeline({ paused: false });
    timeline.fromTo('#left-beer', {
      xPercent: -50,
    },
    {
      xPercent: 0,
      duration: 1.5,
      transformOrigin: 'left',
      ease: 'back.out(2.5)',
    })
      .fromTo('#right-beer', {
        xPercent: 100,
      },
      {
        xPercent: 0,
        duration: 1.5,
        ease: 'back.out(2.5)',
        transformOrigin: 'right',
      }, '-=1.5')
      .fromTo('.splashscreen', { autoAlpha: 1 }, { autoAlpha: 0, duration: 1, ease: 'power4.out' });
  },
};
</script>

<style scoped lang="scss">
  .splashscreen {
    position: absolute;
    z-index: 1;
    width: 100vw;
    height: 100vh;
  }

  .beers {
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #left-beer, #right-beer {
    width: 50%;
  }
</style>
