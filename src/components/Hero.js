export default function Hero() {
  var i = 0;
  var txt = 'Learn to type the easy way.';
  var speed = 50;

  window.onload = function typeWriter() {
    if (i < txt.length) {
      document.getElementById('demo').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <>
      <section id="hero" className="flex flex-col items-center justify-center text-center px-6 py-20 bg-tea l text-black font-ibm-plex-mono">
        <article>
          <h2 className="text-4xl sm:text-7xl mb-4"><span className="">just for fun</span></h2>
          <p id="demo" className="pb-20 text-lg sm:text-2xl font-thin text-black"></p>
          <div className="flex justify-center space-x-8">
            <button className="flex items-center justify-center bg-lime border-2 border-black rounded-full box-border text-black cursor-pointer font-sans text-base h-10 px-6 relative text-center no-underline select-none hover:outline-none focus:outline-none active:bg-pink-200 hover:after:translate-x-0 hover:after:translate-y-0 sm:px-10">
              Learn More
              <div className="absolute w-full h-10 bg-black rounded-full transform translate-x-2 translate-y-2 transition-transform ease-out duration-200 z-[-1]"></div>
            </button>
            <button className="flex items-center justify-center bg-lime border-2 border-black rounded-full box-border text-black cursor-pointer font-sans text-base h-10 px-6 relative text-center no-underline select-none hover:outline-none focus:outline-none active:bg-pink-200 hover:after:translate-x-0 hover:after:translate-y-0 sm:px-10">
              Learn More
              <div className="absolute top-0 left-0 w-full h-10 bg-black rounded-full transform translate-x-2 translate-y-2 transition-transform ease-out duration-200 z-[-1]"></div>
            </button>
          </div>
        </article>
      </section>
    </>
  );
}