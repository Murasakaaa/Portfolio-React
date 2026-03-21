export default function Contact() {
  return (
    <main className="h-screen flex flex-col xl:mx-30 mt-20 mx-10 gap-10 max-sm:gap-5 max-sm:mt-10">
      <div>
        <h1 className="font-schabo text-9xl select-none p-0 m-0 max-sm:text-7xl">
          CONTACT
        </h1>
      </div>
      <div className="flex justify-center mb-10 sm:mb-20">
        <div className="border-2 border-black font-archivo p-10 sm:p-20 w-92 sm:w-140">
          <form action="https://api.web3forms.com/submit" method="post">
            <input
              type="hidden"
              name="access_key"
              value="01739e99-27cd-4a54-938f-0a25bc1e63b2"
            />
            <input
              className="mb-5 sm:mb-10 shadow appearance-none border-2 border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Nom et prénom"
              required
            />
            <input
              className="mb-5 sm:mb-10 shadow appearance-none border-2 border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="mail"
              type="email"
              placeholder="mail@mail.com"
              required
            />
            <textarea
              className="mb-2 sm:mb-5 min-h-40 resize-none shadow appearance-none border-2 border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              id="message"
              placeholder="Votre message"
              required
            ></textarea>

            {/* Honeypot Spam Protection */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <input
              type="submit"
              value="Envoyer"
              className="w-full shadow bg-gray-500/60 p-2 rounded-lg hover:bg-gray-500 active:bg-gray-500 transition duration-300 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </main>
  );
}
