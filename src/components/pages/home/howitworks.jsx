export default function HowItworks() {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                    From Waste to Resource: Discover the Simple Steps to a Greener Future
                    </p>
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden md:block top-2 md:px-20 lg:px-28 xl:px-44">
                        <img
                            className="w-full"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                            alt=""
                        />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700">1</span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Sign Up or Log In</h3>
                            <p className="mt-4 text-base text-gray-600">
                            Get started by creating a profile in just a few clicks or logging into your existing account.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700">2</span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Select Your Waste Type</h3>
                            <p className="mt-4 text-base text-gray-600">
                            Select from a variety of recyclable materials—whether it’s paper, plastic, glass, or metal—and schedule your pickup or drop-off.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700">3</span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Then recycle</h3>
                            <p className="mt-4 text-base text-gray-600">
                            Send your recyclables to our certified centers and track your contributions while earning rewards for sustainable choices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}