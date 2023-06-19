import React, { useState } from 'react';
import Img from './../Assests/photo_2023-06-13_17-41-25.jpg'
const Header = () => {
    const [leftmenu, setLeftMenu] = useState<boolean>(false)
    return (

        <header className='flex justify-between dark:text-white items-center h-20 border-2 border-gray-300 border-bottom-0'>
            {/* leftTop */}
            <div className='flex flex-row items-center justify-between space-x-2 w-auto md:space-m-4 border-r border-gray-300 pr-4'>
                <div className='flex flex-row items-center justify-around'>

                    <svg className='h-8 w-8 m-5' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path opacity='0.6' d='M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z' fill='#5030E5' />
                        <path d='M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z' fill='#5030E5' />
                        <path opacity='0.4' d='M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z' fill='#5030E5' />
                    </svg>

                    <h3 className='hidden md:inline-block font-bold font-sans md:text-lg '>
                        Project M.
                    </h3>

                </div>


                <div className="p-2">
                    <svg width="26" height="20" className='ml-10 mr-5' viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 17.225C18.3417 17.225 18.1833 17.1667 18.0583 17.0417L12.625 11.6083C11.7417 10.725 11.7417 9.27499 12.625 8.39165L18.0583 2.95832C18.3 2.71665 18.7 2.71665 18.9417 2.95832C19.1833 3.19999 19.1833 3.59999 18.9417 3.84165L13.5083 9.27499C13.1083 9.67499 13.1083 10.325 13.5083 10.725L18.9417 16.1583C19.1833 16.4 19.1833 16.8 18.9417 17.0417C18.8167 17.1583 18.6583 17.225 18.5 17.225Z" fill="#787486" />
                        <path d="M12.5 17.225C12.3417 17.225 12.1833 17.1667 12.0583 17.0417L6.62499 11.6083C5.74166 10.725 5.74166 9.27499 6.62499 8.39165L12.0583 2.95832C12.3 2.71665 12.7 2.71665 12.9417 2.95832C13.1833 3.19999 13.1833 3.59999 12.9417 3.84165L7.50833 9.27499C7.10833 9.67499 7.10833 10.325 7.50833 10.725L12.9417 16.1583C13.1833 16.4 13.1833 16.8 12.9417 17.0417C12.8167 17.1583 12.6583 17.225 12.5 17.225Z" fill="#787486" />
                    </svg>
                </div>

            </div>
            {/* border-2 border-red-500 border-bottom-0 */}

            {/* MID */}
            <div className="flex flex-row justify-between items-center w-9/10 mx-auto">
                <div className="relative mr-96">
                    <svg
                        className="absolute left-3 top-3 text-gray-500 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 2 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="9" cy="9" r="6" />
                        <path d="M20 20L15 15" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search for anything..."
                        className="pl-10 pr-12 py-2 rounded-sm w-full bg-gray-100 placeholder-gray-500 placeholder-opacity-100 text-base font-normal"
                    />
                </div>






                {/* boundary */}

                <div className='flex-grow flex items-center justify-end ml-96'>
                    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M108.02 2.91C104.71 2.91 102.02 5.6 102.02 8.91V11.8C102.02 12.41 101.76 13.34 101.45 13.86L100.3 15.77C99.59 16.95 100.08 18.26 101.38 18.7C105.69 20.14 110.34 20.14 114.65 18.7C115.86 18.3 116.39 16.87 115.73 15.77L114.58 13.86C114.28 13.34 114.02 12.41 114.02 11.8V8.91C114.02 5.61 111.32 2.91 108.02 2.91Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                        <path d="M109.87 3.2C109.56 3.11 109.24 3.04 108.91 3C107.95 2.88 107.03 2.95 106.17 3.2C106.46 2.46 107.18 1.94 108.02 1.94C108.86 1.94 109.58 2.46 109.87 3.2Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M111.02 19.06C111.02 20.71 109.67 22.06 108.02 22.06C107.2 22.06 106.44 21.72 105.9 21.18C105.36 20.64 105.02 19.88 105.02 19.06" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" />
                        <circle cx="114" cy="4" r="3" fill="#D8727D" />
                        <path d="M65 18.4301H61L56.55 21.39C55.89 21.83 55 21.3601 55 20.5601V18.4301C52 18.4301 50 16.4301 50 13.4301V7.42999C50 4.42999 52 2.42999 55 2.42999H65C68 2.42999 70 4.42999 70 7.42999V13.4301C70 16.4301 68 18.4301 65 18.4301Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M60 11.36V11.15C60 10.47 60.42 10.11 60.84 9.82001C61.25 9.54001 61.66 9.18002 61.66 8.52002C61.66 7.60002 60.92 6.85999 60 6.85999C59.08 6.85999 58.34 7.60002 58.34 8.52002" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M59.9955 13.75H60.0045" stroke="#787486" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8 2V5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 2V5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.5 9.09H20.5" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#787486" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.9955 13.7H12.0045" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.29431 13.7H8.30329" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.29431 16.7H8.30329" stroke="#787486" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

            </div>


            {/* rightTop */}

            <div className=' p-2 m-10 mr-10 w-201 h-39 flex flex-row justify-between'  >
                <div className='mr-5'>
                    <div className="w-113 h-19 font-inter font-normal text-right text-base leading-5">
                        Saurabh Kedar
                    </div>
                    <div className="w-62 h-17 font-normal text-base leading-17 text-right text-gray-500">
                        Maharastra,India
                    </div>
                </div>

                <div className="w-47 h-71 bg-cover">
                    <img src={Img} alt="Profile" className='w-10 h-10 rounded-full' />

                </div>
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg" className='justify-center items-center ml-4 mt-4'>
                    <path d="M7.00002 6.60001C6.47502 6.60001 5.95002 6.39751 5.55252 6.00001L0.662515 1.11001C0.445015 0.892511 0.445015 0.532511 0.662515 0.315011C0.880015 0.097511 1.24001 0.097511 1.45751 0.315011L6.34752 5.20501C6.70752 5.56501 7.29252 5.56501 7.65252 5.20501L12.5425 0.315011C12.76 0.097511 13.12 0.097511 13.3375 0.315011C13.555 0.532511 13.555 0.892511 13.3375 1.11001L8.44752 6.00001C8.05002 6.39751 7.52502 6.60001 7.00002 6.60001Z" fill="#292D32" />
                </svg>


            </div>
        </header>

    );
};

export default Header;
