export const MailForm =() =>{
    return (
        <div className="relative mx-auto z-50">
          <div className="max-w-xl pt-5 mx-auto my-3 rounded-md">
            <h2 className=" text-2xl text-gray-700 pb-5">Contact Me</h2>
            <div>
              <form action="#" method="POST">
                <div className="mb-6">
                  <h2 className="block mb-2 text-sm text-gray-600">Name</h2>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    required
                    className="w-full px-3 py-2 text-gray-500 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>

                <div className="mb-6">
                  <h2 className="block mb-2 text-sm text-gray-600">Email</h2>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    className="w-full px-3 py-2 text-gray-500 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>

                <div className="mb-6">
                  <h2 className="block mb-2 text-sm text-gray-600">Comment</h2>
                  <textarea
                    rows={5}
                    name="message"
                    placeholder="Your Comment"
                    className="w-full px-3 py-2 text-gray-500 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full px-2 py-4 text-gray-500 bg-sky-200 hover:bg-sky-400 hover:text-gray-200 rounded-md  focus:bg-indigo-600 focus:outline-none" 
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
}