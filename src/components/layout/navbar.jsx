import { DownOutlined, BellOutlined } from '@ant-design/icons';
// import  Logo from "../../assets/logo.png";
import { Dropdown, Space } from 'antd';

const items = [
    {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
]

const MainNavbar = () => {
    return (
        <>
            <nav className="text-md bg-500 py-5 px-20 flex justify-between items-center bg-cyan-400 shadow-md">
                {/* Logo Perusahaan */}
                <div className="flex items-center"> {/* Wrap dalam flex container */}
                    {/* <img src={Logo} alt="Logo Nusa Learning" className="h-8" /> */}
                    <div className="text-lg font-medium">TokoKu</div>
                </div>

                {/* Search Bar */}
                <div className="flex-grow mx-40">
                    <input
                        type="search"
                        className="w-full p-2 bg-gray-10 border focus:outline-none rounded-lg"
                        placeholder="Cari pelatihan..."
                    />
                </div>

                {/* Link dengan Icon */}
                <div className="flex space-x-10">
                    <a href="/" className="hover:underline hover:text-purple-500">
                        Beranda
                    </a>
                    <a href="/pusatPengetahuan" className="hover:underline hover:text-purple-500 relative">
                        Pelatihan
                    </a>
                    <a href="" className='hover:text-purple-500'>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    ID
                                    <DownOutlined className='text-xs' />
                                </Space>
                            </a>
                        </Dropdown>
                    </a>

                    {/* <a href="#" className="hover:underline hover:text-purple-500">
                        <BellOutlined className='text-[20px]' />
                    </a> */}
                    <a href="/login" className="hover:underline hover:text-purple-500">
                        Login
                    </a>
                </div>
            </nav>
        </>
    )
}

export default MainNavbar;
