import { InstagramFilled, FacebookFilled, TwitterSquareFilled, YoutubeFilled } from "@ant-design/icons"
const MainFooter = () => {

    const icon = { fontSize: '30px' }

    return (
        <div>
            <footer className="shadow-md py-8 px-20 flex flex-col lg:flex-row justify-between justify-items-center bg-teal-400 text-stone-600">
                {/* 5 About Sections */}

                <div className="flex flex-col mb-4 lg:mb-0">
                    <h3 className="text-lg font-semibold">About</h3>
                    <p className="mt-2">
                        <ul>
                            <li className="hover:text-violet-500 mb-2"><a href="">Privacy Policy</a></li>
                            <li className="hover:text-violet-500 mb-2"><a href="">Help Center</a></li>
                            <li className="hover:text-violet-500 mb-2"><a href="">Terms & Condition</a></li>
                        </ul>
                    </p>
                </div>

                <div className="flex flex-col mb-4 lg:mb-0">
                    <h3 className="text-lg font-semibold">Service</h3>
                    <p className="mt-2">
                        <a href="" className="hover:text-violet-500">Check Certificate</a>
                    </p>
                </div>

                <div className="flex flex-col mb-4 lg:mb-0">
                    <h3 className="text-lg font-semibold">Follow Us On</h3>
                    <p className="mt-2">
                        <ul className="flex space-x-5">
                            <li><a href="" className="hover:text-violet-500"><FacebookFilled style={icon} /></a></li>
                            <li><a href="" className="hover:text-violet-500"><InstagramFilled style={icon} /></a></li>
                            <li><a href="" className="hover:text-violet-500"><TwitterSquareFilled style={icon} /></a></li>
                            <li><a href="" className="hover:text-violet-500"><YoutubeFilled style={icon} /></a></li>
                        </ul>
                    </p>
                </div>
                {/* Buttons */}
                <div className="flex flex-col space-y-4">
                    <div>
                    <img
      className="h-32 w-64 rounded-lg object-cover object-center mb-5"
      src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
      alt="nature image"
    />
                        {/* <h3 className="text-lg font-semibold">Download NusaLMS Mobile</h3> */}
                        <div className="space-x-2">
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">
                                Playstore
                            </button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                App Store
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
                <p className="text-center h-10 bg-teal-400 text-stone-600">TokoKu Copyright Reserved</p>
        </div>
    )
}

export default MainFooter
