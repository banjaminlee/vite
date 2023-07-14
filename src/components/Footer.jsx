import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer className="bg-deep-black border-t-2 border-color-grey-700 ">
      <Newsletter />
      <div className="container w-full mx-auto text-center text-color-grey-500 text-sm pb-10 md:flex justify-center md:max-w-screen-md ">
        <div className="container justify-center flex gap-5 md:text-left pb-5">
          <a href=""><p className="text-color-grey-400">Privacy Policy</p></a>
          <a href="#"><p className="text-color-grey-400">Terms of Conditions</p></a>
        </div>
        <p className="inline-block w-full text-color-grey-400">22NIGHTS BV. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
