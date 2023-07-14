function Newsletter() {
  return (
    <div className="gradient-border newsletter max-w-screen-lg w-full mx-auto pb-10">
      <div className=" w-full container bg-deep-red  flex flex-col px-4 gap-2 py-5 pt-10  md:px-7 md:mx-auto pb-10 lg:flex-row lg:items-center lg:justify-center lg:gap-20">
        <div className="newsletter-text-cont lg:w-1/2">
          <h1 className="text-2xl font-semibold lg:text-3xl">
            Join our newsletter
          </h1>
          <p className="text-color-grey-500 text-sm lg:text-lg">
            Every party - straight to your inbox
          </p>
        </div>

        <form action="#" className="flex gap-2 max-w-screen-md lg:h-1/2 ">
          <input
            type="email"
            className="w-2/3 text-black rounded-md px-2 outline-none"
            placeholder="email"
          />
          <button
            type="submit "
            className="w-1/3 text-lg border-2 border-white px-3 py-1 rounded-md hover:bg-color-grey-800"
          >
            Subscibe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
