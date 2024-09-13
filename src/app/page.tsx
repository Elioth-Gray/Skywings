import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <>
    
    {/* Navbar Section */}
    <section className="container mx-auto mt-5">
      <div className="flex w-full justify-between items-center px-6">
        <div>
          <h1 className="font-bold text-2xl">UIXSHUVO</h1>
        </div>
        <div className="flex flex-row gap-5 text-sm font-semibold">
          <Link href={""}>ABOUT</Link>
          <Link href={""}>TOUR</Link>
          <Link href={""}>PACKAGE</Link>
          <Link href={""}>CONTACT</Link>
        </div>
        <div>
          <button className="bg-black px-8 py-2 text-white rounded-full text-md font-medium">Book Trip</button>
        </div>
      </div>
    </section>

    {/* Hero Section */}
    <section className="container mx-auto mt-2">
      <div className="w-full grid grid-cols-12 items-center py-6 h-[30rem] gap-8">
        <div className="col-span-6 w-full h-full rounded-lg overflow-hidden">
          <Image src="/image1.jpg" width={1000} height={1000} alt="Gambar" className="w-full h-full"></Image>
        </div>
        <div className="col-span-6 w-full h-full flex flex-col items-center gap-5 overflow-hidden">
          <div className="w-full h-1/2 rounded-lg px-6 py-8 flex flex-col justify-center items-start gap-2 bg-black text-white">
            <h1 className="font-medium text-xl">UISXHUVO FLIGHT</h1>
            <p className="font-bold text-4xl">EXPERIENCE THE MAGIC OF FLIGHT</p>
          </div>
          <div className="w-full h-1/2 rounded-lg overflow-hidden relative">
            <Image src="/image2.jpg" width={1000} height={1000} alt="Gambar"></Image>
            
          </div>
          <Image src="/plane1.svg" width={500} height={500} alt="Gambar" className="absolute top-[17rem] right-12"></Image>
        </div>
        <div className="col-span-8 w-full h-full flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center p-3 px-6 border rounded-full border-black gap-4">
            <h1 className="text-sm">Follow</h1>
            <div className="flex flex-row gap-2">
              <div className="p-2 rounded-full border border-black">
                <FaTwitter className="text-sm"></FaTwitter>
              </div>
              <div className="p-2 rounded-full border border-white bg-black">
                <FaFacebookF className="text-sm text-white"></FaFacebookF>
              </div>
              <div className="p-2 rounded-full border border-black">
                <FaTwitter className="text-sm"></FaTwitter>
              </div>
              <div className="p-2 rounded-full border border-black">
                <FaTwitter className="text-sm"></FaTwitter>
              </div>
            </div>
          </div>
          <div>
            <Image src="/Orbitz.svg" width={100} height={100} alt="gambar"></Image>
          </div>
          <div>
            <Image src="/Booking.svg" width={100} height={100} alt="gambar"></Image>
          </div>
          <div>
            <Image src="/Expedia.svg" width={100} height={100} alt="gambar"></Image>
          </div>
          <div>
            <Image src="/airbnb.svg" width={100} height={100} alt="gambar"></Image>
          </div>
        </div>
      </div>
    </section>

    {/* Popular Section */}
    <section className="container mx-auto mt-5">
      <div className="w-full">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-bold">Popular Destination</h1>
            <p className="text-sm">Unleash Your Wonderlust With SkyWings</p>
          </div>
          <div className="flex flex-row gap-5">
            <button className="p-4 bg-slate-400 rounded-full"><MdKeyboardArrowLeft className="text-xl"></MdKeyboardArrowLeft></button>
            <button className="p-4 bg-black text-white rounded-full"><MdKeyboardArrowRight className="text-xl"></MdKeyboardArrowRight></button>
          </div>
        </div>
        <div className="w-full mt-6 flex flex-row justify-between items-center flex-wrap">
          <div className="overflow-hidden py-3">
            <Image src="/bali.jpg" width={300} height={100} alt="gambar" className="rounded-2xl"></Image>
            <div className="mt-2 flex flex-row px-2 justify-between items-center">
              <div>
                <h1 className="font-bold text-lg">Sawah Life</h1>
                <p className="flex flex-row justify-center items-center gap-2"><IoLocationSharp></IoLocationSharp> Bali, Indonesia</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-black text-white p-2 rounded-full px-4">
                <p className="flex flex-row justify-center items-center gap-3"><IoStar></IoStar> 4, 7</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden py-3">
            <Image src="/lombok.jpg" width={300} height={100} alt="gambar" className="rounded-2xl"></Image>
            <div className="mt-2 flex flex-row px-2 justify-between items-center">
              <div>
                <h1 className="font-bold text-lg">Sawah Life</h1>
                <p className="flex flex-row justify-center items-center gap-2"><IoLocationSharp></IoLocationSharp> Bali, Indonesia</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-black text-white p-2 rounded-full px-4">
                <p className="flex flex-row justify-center items-center gap-3"><IoStar></IoStar> 4, 7</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden py-3">
            <Image src="/thailand.jpg" width={300} height={100} alt="gambar" className="rounded-2xl"></Image>
            <div className="mt-2 flex flex-row px-2 justify-between items-center">
              <div>
                <h1 className="font-bold text-lg">Sawah Life</h1>
                <p className="flex flex-row justify-center items-center gap-2"><IoLocationSharp></IoLocationSharp> Bali, Indonesia</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-black text-white p-2 rounded-full px-4">
                <p className="flex flex-row justify-center items-center gap-3"><IoStar></IoStar> 4, 7</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden py-3">
            <Image src="/ui.jpg" width={300} height={100} alt="gambar" className="rounded-2xl"></Image>
            <div className="mt-2 flex flex-row px-2 justify-between items-center">
              <div>
                <h1 className="font-bold text-lg">Sawah Life</h1>
                <p className="flex flex-row justify-center items-center gap-2"><IoLocationSharp></IoLocationSharp> Bali, Indonesia</p>
              </div>
              <div className="flex flex-row justify-center items-center bg-black text-white p-2 rounded-full px-4">
                <p className="flex flex-row justify-center items-center gap-3"><IoStar></IoStar> 4, 7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Journey Section */}
    <section className="container mx-auto mt-8">
      <div className="w-full py-8">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl font-bold">Journey To The Skies Made Simple!</h1>
            <p className="w-3/4 text-center">Travelling is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences</p>
          </div>
          <div className="flex flex-row w-full gap-3 justify-center items-end h-96 px-36">
            <div className="duration-500 bg-slate-100 p-4 px-8 py-10 flex flex-col justify-between items-start gap-6 rounded-3xl h-72 w-1/3 cursor-pointer hover:h-96 hover:bg-black hover:text-white relative overflow-hidden group">
              <div className="duration-200 absolute -right-12 top-0 -translate-y-16 rounded-full p-4 bg-card-image w-48 h-48 bg-cover opacity-0 group-hover:opacity-100">
              </div>
              <div className="p-4 border-dashed border border-black rounded-full text-start group-hover:border-white">
                <FaLocationDot className="text-3xl"></FaLocationDot>
              </div>
              <div className="duration-200 hidden flex-col gap-2 opacity-0 group-hover:opacity-100 group-hover:block">
                <h1 className="font-bold">Book A Ticket</h1>
                <p>Travelling is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences</p>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <p className="font-bold text-2xl">Find Your <br />Destination</p>
                <button className="duration-200 bg-white px-4 py-2 text-black rounded-full font-bold text-sm opacity-0 group-hover:opacity-100">Book Now</button>
              </div>
            </div>  
            <div className="duration-500 bg-slate-100 p-4 px-8 py-10 flex flex-col justify-between items-start gap-6 rounded-3xl h-72 w-1/3 cursor-pointer hover:h-96 hover:bg-black hover:text-white relative overflow-hidden group">
              <div className="duration-200 absolute -right-12 top-0 -translate-y-16 rounded-full p-4 bg-card-image2 w-48 h-48 bg-cover opacity-0 group-hover:opacity-100">
              </div>
              <div className="p-4 border-dashed border border-black rounded-full text-start group-hover:border-white">
                <FaLocationDot className="text-3xl"></FaLocationDot>
              </div>
              <div className="duration-200 hidden flex-col gap-2 opacity-0 group-hover:opacity-100 group-hover:block">
                <h1 className="font-bold">Book A Ticket</h1>
                <p>Travelling is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences</p>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <p className="font-bold text-2xl">Find Your <br />Destination</p>
                <button className="duration-200 bg-white px-4 py-2 text-black rounded-full font-bold text-sm opacity-0 group-hover:opacity-100">Book Now</button>
              </div>
            </div>   
            <div className="duration-200 bg-slate-100 p-4 px-8 py-10 flex flex-col justify-between items-start gap-6 rounded-3xl h-72 w-1/3 cursor-pointer hover:h-96 hover:bg-black hover:text-white relative overflow-hidden group">
              <div className="duration-200 absolute -right-12 top-0 -translate-y-16 rounded-full p-4 bg-card-image3 w-48 h-48 bg-cover opacity-0 group-hover:opacity-100">
              </div>
              <div className="p-4 border-dashed border border-black rounded-full text-start group-hover:border-white">
                <FaLocationDot className="text-3xl"></FaLocationDot>
              </div>
              <div className="duration-200 hidden flex-col gap-2 opacity-0 group-hover:opacity-100 group-hover:block">
                <h1 className="font-bold">Book A Ticket</h1>
                <p>Travelling is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences</p>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <p className="font-bold text-2xl">Find Your <br />Destination</p>
                <button className="duration-200 bg-white px-4 py-2 text-black rounded-full font-bold text-sm opacity-0 group-hover:opacity-100">Book Now</button>
              </div>
            </div>    
          </div>
        </div>
      </div>
    </section>

    {/* Book Section */}
    <section className="container mx-auto mt-12 mb-8">
      <div className="w-full px-8">
        <div className="flex flex-col gap-8">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="w-2/3 h-[30rem] bg-card-image bg-cover rounded-3xl overflow-hidden">
                </div>
                <div className="flex flex-col w-2/3 px-8 gap-3">
                  <div className="w-full flex flex-row justify-center items-center  ">
                    <h1 className="w-1/2 uppercase text-7xl font-bold tracking-[0.050em]">
                      Unleash
                    </h1>
                    <p className="w-1/2 text-sm">
                      Travelling is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences
                    </p>
                  </div>
                  <div className="w-full flex flex-row justify-between gap-2 items-center">
                    <h1 className="uppercase text-7xl font-bold tracking-[0.050em]">
                      Wonderlust
                    </h1>
                    <h1 className="uppercase text-7xl font-bold tracking-[0.050em]">
                      With
                    </h1>
                  </div>
                  <div className="w-full flex flex-row justify-center items-center">
                  <p className="w-1/2 text-sm">
                      Travelling is A Wonderful Way To Explore New Places, Learn About Different Cultures, And Gain Unique Experiences
                    </p>
                    <h1 className="w-1/2 uppercase text-7xl font-bold tracking-[0.050em]">
                      Skywings
                    </h1>
                  </div>
                </div>
            </div>
            <div className="flex flex-row w-full gap-2">
              <div className="px-2 py-6 flex flex-row justify-center gap-8 items-center w-[38%] bg-black text-white rounded-2xl  ">
                <h1 className="uppercase text-3xl">20% off</h1>
                <p>Till 28 September <br /> 2023</p>
              </div>
              <button className="bg-black w-[68%] rounded-2xl px-6 bg-button-image bg-cover flex justify-center items-center text-white">
                <h1 className="font-bold text-2xl tracking-wide flex flex-row justify-center items-center gap-6">Book A Flight Now <FaArrowRight></FaArrowRight></h1>
              </button>
            </div>
         </div>
      </div>
    </section>
    </>
    
  );
}
