import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="wrapper mx-auto flex justify-center w-full pl-4 pr-6">
                <div className="w-[232px] pb-[800px]">
                    <Sidebar />
                </div>
                <div className="content w-[1140px] mt-[60px]">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout