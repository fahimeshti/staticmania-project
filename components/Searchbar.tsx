import React from "react";

const Searchbar = (): JSX.Element => {
    return (
        <div className="w-full flex items-center">
            <div className="w-full">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="w-full max-w-sm flex rounded"
                >
                    <input
                        type="text"
                        className="block lg:h-[48px] pl-4 w-[332px] py-3 lg:py-5 placeholder:text-base text-gray-700 placeholder:text-[#AFB0B9] bg-[#F4F2FF] rounded-l-ten focus:outline-none"
                        placeholder="Enter Your Email Id"
                    />
                    <button
                        type="submit"
                        className="px-8 lg:h-[48px] text-lg font-bold text-white bg-[#503AE7]"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Searchbar;