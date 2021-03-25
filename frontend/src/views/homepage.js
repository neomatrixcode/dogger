import React from "react";

const Homepage = (props) => {
  return (
    <div>
      <section className="py-12 px-4 text-center">
        <div className="w-full max-w-2xl mx-auto">
          <span className="text-sm font-semibold">TAGLINE</span>
          <h2 className="text-5xl mt-2 mb-6 leading-tight font-semibold font-heading">
            No paper plane can be made without paper
          </h2>
          <p className="mb-8 text-gray-400 leading-relaxed">
            Professional, dedicated, local. Dunder Mifflin is on its best patch
            to change the way you think about paper. That’s us - people who sell
            limitless paper in the paperless world.
          </p>
          <div>
            <a
              className="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
              href="#"
            >
              Sign up
            </a>
            <a className="text-indigo-600 hover:underline" href="#">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-4 -mb-6">
          <div className="lg:w-1/3 px-4 mb-6">
            <svg
              className="text-indigo-600 w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              ></path>
            </svg>
            <h3 className="text-xl my-3 font-semibold font-heading">
              High durability
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Forget about paper jams with our increased stability product.
              Ideal for high-quality printing, colour printing and photocopying.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <svg
              className="text-indigo-600 w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              ></path>
            </svg>
            <h3 className="text-xl my-3 font-semibold font-heading">
              Versatility
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Multi-functional paper for various office needs. Snow-white sheets
              will shine bright like diamond for many years.
            </p>
          </div>
          <div className="lg:w-1/3 px-4 mb-6">
            <svg
              className="text-indigo-600 w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            <h3 className="text-xl my-3 font-semibold font-heading">
              Value-based price
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The best combination of quality and economy comes with Dunder
              Mifflin paper. The offer includes paper in wide range of density
              and sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-16 px-4">
        <h2 className="text-3xl mb-10 text-center font-semibold font-heading">
          How to get Dunder Mifflined?
        </h2>
        <div className="flex max-w-sm mb-12 mx-auto text-center border-b-2">
          <div className="w-1/2 pb-2 border-b-4 border-indigo-600">
            <button className="hover:text-indigo-600">For Customers</button>
          </div>
          <div className="w-1/2 pb-2">
            <button className="hover:text-indigo-600">For Companies</button>
          </div>
        </div>
        <div className="flex flex-wrap -mx-8 text-center">
          <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
            <svg
              className="text-indigo-600 w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
            <h3 className="text-2xl my-3 font-semibold font-heading">
              Contact our Sales
            </h3>
            <p className="text-gray-400 leading-relaxed">
              During the phone call we will be able to present you all details
              of cooperation, pricing and special offers, suited for your
              company.
            </p>
          </div>
          <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
            <svg
              className="text-indigo-600 w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
            <h3 className="text-2xl my-3 font-semibold font-heading">
              Sign the documents
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We can also talk during business meeting, or visit your office
              anytime you want! Our employees will provide proper contracts.
            </p>
          </div>
          <div className="lg:w-1/3 px-8 mb-8 lg:mb-0">
            <svg
              className="text-indigo-600 w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
            <h3 className="text-2xl my-3 font-semibold font-heading">
              Wait for delivery!
            </h3>
            <p className="text-gray-400 leading-relaxed">
              You don’t buy a pig... or shall I say a paper in a poke. The
              supplies will be delivered to your company every first Monday of
              the month.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-8 px-4 text-center">
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-4xl leading-tight mb-6 font-semibold font-heading">
            What do our customers have to say about our services?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            See how paper can change the way you think about business.
          </p>
        </div>
        <div className="flex flex-wrap -mx-8">
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="placeholders-2-0/logos/realweb.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="placeholders-2-0/logos/gitscape.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="placeholders-2-0/logos/k-hole.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="placeholders-2-0/logos/plucky.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="placeholders-2-0/logos/1stsight.svg" alt="" />
          </div>
          <div className="w-1/2 md:w-1/6 px-8 mb-8">
            <img src="placeholders-2-0/logos/tholio.svg" alt="" />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-4xl mb-2 leading-tight font-semibold font-heading">
          Dunder Mifflin Family
        </h2>
        <p className="max-w-xl mx-auto mb-12 text-gray-400">
          Because no great company could exist without accountants, sellers,
          stock workers, and of course - paper.
        </p>
        <div className="flex flex-wrap -mx-8">
          <div className="md:w-1/3 p-8">
            <img
              className="w-1/3 mx-auto mb-4 rounded-full"
              src="placeholders-2-0/pictures/female_avatar.svg"
              alt=""
            />
            <h3 className="text-xl mb-1 font-semibold font-heading">
              Karen Filippelli
            </h3>
            <span>Regional Manager</span>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Started as a Sales representative at Stamford branch, moved to
              Scranton. All of us left as soon as possible except for Andy.
            </p>
          </div>
          <div className="md:w-1/3 p-8 md:border-l">
            <img
              className="w-1/3 mx-auto mb-4 rounded-full"
              src="placeholders-2-0/pictures/male_avatar.svg"
              alt=""
            />
            <h3 className="text-xl mb-1 font-semibold font-heading">
              Darryl Philbin
            </h3>
            <span>Marketing Director</span>
            <p className="mt-4 text-gray-400 leading-relaxed">
              The warehouse is not a piece of cake, man. I started there as an
              Assistant and finally got a promotion to the Marketing Director.
            </p>
          </div>
          <div className="md:w-1/3 p-8 md:border-l">
            <img
              className="w-1/3 mx-auto mb-4 rounded-full"
              src="placeholders-2-0/pictures/female_avatar.svg"
              alt=""
            />
            <h3 className="text-xl mb-1 font-semibold font-heading">
              Kelly Kapoor
            </h3>
            <span>Customer Service</span>
            <p className="mt-4 text-gray-400 leading-relaxed">
              I work for Dunder Mifflin for a few years now. I learned a lot.
              You know, one person department is not easy to manage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="flex flex-wrap -mx-8 text-center">
          <div className="w-full md:w-1/2 p-8 mb-4 md:mb-0">
            <h3 className="text-5xl font-semibold font-heading">$9 / mo</h3>
            <p className="flex-grow mt-4 mb-6 text-gray-400 leading-relaxed">
              Just enough paper for small business. Not enough to waste it on
              fluffy animals photos. The best quality and economy comes with
              Dunder Mifflin paper.
            </p>
            <a
              className="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow"
              href="#"
            >
              Contact sales
            </a>
          </div>
          <div className="w-full md:w-1/2 p-8 mb-4 md:mb-0 md:border-l">
            <h3 className="text-5xl font-semibold font-heading">$49 / mo</h3>
            <p className="mt-4 mb-6 text-gray-400 leading-relaxed">
              That’s what we’re talking about! More reams of paper is a really
              reamful choice. The best combination of quality and economy comes
              with Dunder Mifflin paper.
            </p>
            <a
              className="inline-block py-4 px-8 leading-none text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-semibold rounded shadow"
              href="#"
            >
              Contact sales
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-4xl mb-10 text-center font-semibold font-heading">
          Contact the Scranton team
        </h2>
        <div className="w-full max-w-2xl mx-auto mb-12">
          <form>
            <div className="flex mb-4 -mx-2">
              <div className="w-1/2 px-2">
                <input
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="w-1/2 px-2">
                <select className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
                  <option>-- Select product --</option>
                  <option>Product 1</option>
                  <option>Product 2</option>
                  <option>Product 3</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <textarea
                className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                placeholder="Write something..."
                rows="5"
              ></textarea>
            </div>
            <div>
              <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center -mx-4">
          <div className="px-4 flex items-center">
            <svg
              className="inline-block w-6 h-6 mr-3 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span>1725 Slough Avenue, Scranton</span>
          </div>
          <div className="px-4 flex items-center">
            <svg
              className="inline-block w-6 h-6 mr-3 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <span>555-111-555</span>
          </div>
          <div className="px-4 flex items-center">
            <svg
              className="inline-block w-6 h-6 mr-3 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span>scranton@dundermifflin.com</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
