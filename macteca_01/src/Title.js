const Title = () => {
  return (
    <section className="hero">
      <div
        class="hero min-h-max max-h-min w-full p-10 py-10 m-16  "
        style={{          
          "background-image":
            'url("https://www.computerbeing.co.uk/wp-content/uploads/2021/04/PC-Laptop-Repair.jpg")'
             ,
          
        }}
      >
        <div class="hero-overlay bg-opacity-90 "></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold font-serif">Hello there</h1>
            <p class="mb-6 font-san">
              Macteca is a full-service repair shop for all Apple, PC, and
              Android devices, as well as game consoles and phones. We provide
              expert repairs at affordable prices, and our goal is to get your
              device back to you as soon as possible. Whether you need a screen
              replacement, water damage repair, or any other type of fix, our
              skilled technicians are here to help.
            </p>
            <button class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Title;
