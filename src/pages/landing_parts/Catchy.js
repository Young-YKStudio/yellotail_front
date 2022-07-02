const Catchy = (props) => {
  return (
    <div className="relative mt-8">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://www.kobeteppanyaki.com.au/wp-content/uploads/2020/08/Traditional-Japanese-Sushi-vs.-Western-Sushi-1.jpg"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-orange-800 to-white mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">The best sushi</span>
              <span className="block text-orange-200">in Fairfield, NJ</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
              amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-orange-700 bg-white hover:bg-indigo-50 sm:px-8"
                >
                  Order Take out
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-orange-500  hover:bg-opacity-70 sm:px-8 bg-opacity-90"
                >
                  Make a reservation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Catchy;