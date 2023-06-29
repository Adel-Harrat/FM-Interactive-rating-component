import { useState } from "react";
import "./App.css";

export default function App() {
  const [rating, setRating] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onClick = () => {
    if (rating) setFormSubmitted(true);
  };

  return (
    <div className="bg-custom-Very-Dark-Blue min-h-screen grid place-content-center px-5">
      {!formSubmitted && (
        <main className="bg-gradient-to-bl from-custom-Dark-Blue to-custom-Dark-Blue/50 p-5 rounded-2xl sm:max-w-[22rem]">
          <header className="w-10 h-10 bg-custom-Light-Grey/10 grid place-content-center rounded-full">
            <img
              src="./images/icon-star.svg"
              alt="icon star"
              className="w-4 h-4"
            />
          </header>

          <article className="mt-5">
            <h1 className="text-custom-White font-bold text-2xl">
              How did we do?
            </h1>

            <p className="text-custom-Medium-Grey text-sm mt-3">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </article>

          <footer>
            <section className="my-7 flex items-center justify-between">
              {[1, 2, 3, 4, 5].map((number) => (
                <button
                  onClick={() => setRating(number)}
                  key={number}
                  className={`h-10 w-10 bg-custom-Medium-Grey/10 text-custom-Light-Grey rounded-full cursor-pointer grid place-content-center hover:text-custom-White hover:bg-custom-Orange custom-transition font-bold sm:h-12 sm:w-12 ${
                    rating === number &&
                    "!bg-custom-Medium-Grey !text-custom-White"
                  }`}
                >
                  {number}
                </button>
              ))}
            </section>

            <button
              onClick={onClick}
              className="bg-custom-Orange text-custom-White w-full rounded-3xl py-3 block uppercase tracking-widest hover:bg-custom-White hover:text-custom-Orange custom-transition"
            >
              Submit
            </button>
          </footer>
        </main>
      )}

      {formSubmitted && (
        <main className="bg-gradient-to-bl from-custom-Dark-Blue to-custom-Dark-Blue/50 p-5 rounded-2xl text-center sm:max-w-[22rem]">
          <header className="py-5">
            <img
              src="./images/illustration-thank-you.svg"
              alt="thank you illustration"
              className="block mx-auto"
            />

            <p className="bg-custom-Light-Grey/10 inline-block mt-6 text-custom-Orange rounded-2xl px-3 py-1">
              You selected {rating} out of 5
            </p>
          </header>

          <article>
            <h1 className="text-custom-White text-2xl mb-3 mt-3">Thank you!</h1>

            <p className="text-custom-Light-Grey mb-6">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </article>
        </main>
      )}

      {/* the other component */}
    </div>
  );
}
