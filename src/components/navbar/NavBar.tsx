import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
        <div className='h-full flex fixed top-0 left-0 px-4 md:px-10 py-4'>
            <Link href='/' className='w-full  h-full '>
                <div className='relative h-12 md:h-16 w-14 md:w-20 '>
                    <Image
                        src='/hdk.png'
                        alt='profile'
                        priority
                        fill
                        quality={100}
                        
                        blurDataURL='/icon.png'
                        className='scale-200'
                    />
                    
                </div>
                
            </Link>
        </div>
    );
};

export default NavBar;
