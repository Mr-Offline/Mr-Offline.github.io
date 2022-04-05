<template>
  <div id="topBar" class="w-full p-3 sticky top-0 bg-green-850 text-card-100 flex flex-row justify-start items-center">
    <span @click="toggleMenu">
      <span v-if="!menu">
        <i class="fa fa-bars"></i>
      </span>
      <span v-else>
        <i class="fa fa-xmark"></i>
      </span>
    </span>
  </div>
  <div id="menu" class="w-0 fixed transition-all duration-500 h-screen bg-green-850 overflow-hidden text-card-100" :class="{'w-screen': menu}">
    <ul @click.prevent.capture="itemScroll" class="w-full h-full flex flex-col justify-start items-center">
      <li class="w-full text-center border-b border-card-100"><a class="block transition-colors w-full h-full py-6 px-3 focus:bg-green-950 hover:bg-green-950" href="#AboutMe">درباره من</a></li>
      <li class="w-full text-center border-b border-card-100"><a class="block transition-colors w-full h-full py-6 px-3 focus:bg-green-950 hover:bg-green-950" href="#Education">تحصیلات</a></li>
      <li class="w-full text-center border-b border-card-100"><a class="block transition-colors w-full h-full py-6 px-3 focus:bg-green-950 hover:bg-green-950" href="#Experience">سوابق شغلی</a></li>
      <li class="w-full text-center border-b border-card-100"><a class="block transition-colors w-full h-full py-6 px-3 focus:bg-green-950 hover:bg-green-950" href="#Experience">سوابق شغلی</a></li>
    </ul>
  </div>
  <div id="container" class="container duration-500 overflow-scroll scroll-py-3 snap-y p-3 mx-auto h-fit flex flex-col items-center space-y-3 bg-card-100">
      <div class="snap-start p-3 w-full rounded odd:bg-green-350 odd:text-card-100 even:bg-card-100 even:text-green-350 font-sans text-lg transition duration-300 hover:shadow-md shadow shadow-green-650 flex flex-col items-center justify-start text-center">
        <h5 class="self-start text-xl" id="AboutMe">درباره من <i class="fa fa-paperclip"></i></h5>
        <img class="rounded-full w-3/5 border-4 border-green-950" src="@/assets/images/me.jpg" alt="Me">
        <p class="font-bold">ارسلان احدیان</p>
        <p>توسعه دهنده فول استک وب</p>
      </div>
      <div class="snap-start p-3 w-full rounded odd:bg-green-350 odd:text-card-100 even:bg-card-100 even:text-green-350 font-sans text-lg transition duration-300 flex flex-col items-center justify-start text-center">
        <h5 class="self-start text-xl" id="Education">تحصیلات <i class="fa fa-paperclip"></i></h5>
        <img class="rounded-full" src="@/assets/logo.png" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut consequuntur enim eveniet libero magni minima molestias perspiciatis provident, quaerat quas quibusdam quidem quis repellendus repudiandae tenetur velit veniam.</p>
      </div>
      <div class="snap-start p-3 w-full rounded odd:bg-green-350 odd:text-card-100 even:bg-card-100 even:text-green-350 font-sans text-lg transition duration-300 hover:shadow-md shadow shadow-green-650 flex flex-col items-center justify-start text-center">
        <h5 class="self-start text-xl" id="Experience">سوابق شغلی <i class="fa fa-paperclip"></i></h5>
        <img class="rounded-full" src="@/assets/logo.png" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut consequuntur enim eveniet libero magni minima molestias perspiciatis provident, quaerat quas quibusdam quidem quis repellendus repudiandae tenetur velit veniam.</p>
      </div>
      <div class="snap-start p-3 w-full rounded odd:bg-green-350 odd:text-card-100 even:bg-card-100 even:text-green-350 font-sans text-lg transition duration-300 flex flex-col items-center justify-start text-center">
        <h5 class="self-start text-xl" id="Home4">Home4 <i class="fa fa-paperclip"></i></h5>
        <img class="rounded-full" src="@/assets/logo.png" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto aut consequuntur enim eveniet libero magni minima molestias perspiciatis provident, quaerat quas quibusdam quidem quis repellendus repudiandae tenetur velit veniam.</p>
      </div>
    </div>
</template>

<style>
</style>

<script>
  export default {
    data() {
      return {
        menu: false
      }
    },
    mounted() {
      const menu = document.getElementById('menu');
      menu.addEventListener('touchmove',function (e){
        e.preventDefault();
      },false);
      const topBar = document.getElementById('topBar');
      topBar.addEventListener('touchmove',function (e){
        e.preventDefault();
      },false);
    },
    methods: {
      toggleMenu(e) {
        this.menu = !this.menu;
      },
      itemScroll(e) {
        const hash = e.target.getAttribute('href')
        if (hash){
          this.menu = !this.menu;
          setTimeout(()=>{
            const h = document.getElementById('topBar').clientHeight;
            const el = document.querySelector(hash);
            /*const id = el.getAttribute('id');
            el.setAttribute('id','');
            window.location.hash = hash;
            el.setAttribute('id',id);*/
            history.pushState({}, "", hash);
            window.scrollTo({
              top: el.offsetTop - h - 24,
              behavior: "smooth",
            });
          }, 500);
        }
      },
    }
  }
</script>
