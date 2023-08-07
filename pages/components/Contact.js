import React from "react";

const Contact = () => {
  return (
    <section>
      <div className=" relative   ">
        {/* Small Circle */}
        <div className="-z-20 w-20 h-20 rounded-full absolute  -top-10 left-16 sm:left-[18rem]  bg-gradient-to-b  from-[#ff3232] via-[#fe9d43] via-89% to-[#fedc45]"></div>

        <div className=" z-0 my-20 mx-auto w-[80%] border-2 bg-white  ">
          <div className=" shadow-2xl shadow-black py-10 z-10">
            <h2 className="text-center text-4xl font-bold">Contact Us</h2>
            <p className="text-lg text-center my-6 px-4">
              Describe your product idea & we will start working on it within
              24 hours.
            </p>

            <form action="/" method="get" className="mx-10 mt-20  text-xl md:text-2xl">
              <div className="block xl:flex justify-between gap-10">
                <div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="p-2 border-b-2 border-black/50 placeholder:text-black/[0.7] w-full md:w-[49%]"
                      required
                    />
                    <br className="inline md:hidden"/>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="p-2 border-b-2 border-black/50 placeholder:text-black/[0.7] ms-0 md:ms-[2%] w-full md:w-[49%] mt-6 md:mt-0"
                      required
                    />
                  </div>
                  <div className="mt-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="p-2 border-b-2 border-black/50 placeholder:text-black/[0.7] w-full"
                      required
                    />
                    <br />
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company"
                      className="p-2 border-b-2 border-black/50 placeholder:text-black/[0.7] w-full mt-6"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    rows={5}
                    cols={37}
                    placeholder="Your request"
                    className="p-2 border-b-2 border-black/50 placeholder:text-black/[0.7] w-full  max-h-16 md:max-h-[80%] mt-6 resize-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="block mx-auto mt-10 text-xl px-6 py-2 border-2 border-[#fea33f] hover:bg-[#fea33f] hover:text-white rounded-full"
                onClick={() => {
                  alert("Thank you for contacting us");
                }}
              >
                Send message
              </button>
            </form>
          </div>
        </div>
        <div className="-z-10 w-72 h-72 rounded-full absolute -bottom-20 sm:-bottom-32 right-2 sm:right-6 bg-gradient-to-r  from-[#ff3232] via-[#fe9d43] via-89% to-[#fedc45]"></div>
      </div>
    </section>
  );
};

export default Contact;
