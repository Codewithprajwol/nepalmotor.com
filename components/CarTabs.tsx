import CarGrid from "./CarGrid";
import CarCarousel from "./CarCarousel";
import { CarData, CarTabs } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const tabs: CarTabs[] = [
  CarTabs.suv,
  CarTabs.hatchback,
  CarTabs.sedan,
  CarTabs.muv,
  CarTabs.luxury,
];

const carData: CarData = {
  SUV: [
    {
      name: "Mahindra Thar RDX",
      price: "₹12.99 - 20.09 Lakh*",
      image: "carTabsImage/suv/mahindra_thar_RDX.png",
    },
    {
      name: "Mahindra Scorpio N",
      price: "₹13.99 - 24.09 Lakh*",
      image: "carTabsImage/suv/mahindra_scorpio_N.png",
    },
    {
      name: "Mahindra XUV700",
      price: "₹14.09 - 25.74 Lakh*",
      image: "carTabsImage/suv/mahindra_xuv700.png",
    },
    {
      name: "Hyundai Creta",
      price: "₹11.11 - 20.50 Lakh*",
      image: "carTabsImage/suv/hyundai_creta.png",
    },
    {
      name: "Mahindra Thar RDX",
      price: "₹12.99 - 20.09 Lakh*",
      image: "carTabsImage/suv/mahindra_thar_RDX.png",
    },
    {
      name: "Mahindra Scorpio N",
      price: "₹13.99 - 24.09 Lakh*",
      image: "carTabsImage/suv/mahindra_scorpio_N.png",
    },
    {
      name: "Mahindra XUV700",
      price: "₹14.09 - 25.74 Lakh*",
      image: "carTabsImage/suv/mahindra_xuv700.png",
    },
    {
      name: "Hyundai Creta",
      price: "₹11.11 - 20.50 Lakh*",
      image: "carTabsImage/suv/hyundai_creta.png",
    },
  ],
  Hatchback: [
    {
      name: "Maruti Suzuki Swift",
      price: "₹6.24 - 9.14 Lakh*",
      image: "carTabsImage/hatchback/maruti_suzuki_swift.png",
    },
    {
      name: "Hyundai i20",
      price: "₹7.04 - 11.21 Lakh*",
      image: "carTabsImage/hatchback/hyundai_i20.png",
    },
    {
      name: "Tata Altroz",
      price: "₹6.64 - 10.79 Lakh*",
      image: "carTabsImage/hatchback/tata_altroz.png",
    },
    {
      name: "Maruti Suzuki Baleno",
      price: "₹6.66 - 9.83 Lakh*",
      image: "carTabsImage/hatchback/maruti_suzuki_baleno.png",
    },
    {
      name: "Maruti Suzuki Swift",
      price: "₹6.24 - 9.14 Lakh*",
      image: "carTabsImage/hatchback/maruti_suzuki_swift.png",
    },
    {
      name: "Hyundai i20",
      price: "₹7.04 - 11.21 Lakh*",
      image: "carTabsImage/hatchback/hyundai_i20.png",
    },
    {
      name: "Tata Altroz",
      price: "₹6.64 - 10.79 Lakh*",
      image: "carTabsImage/hatchback/tata_altroz.png",
    },
    {
      name: "Maruti Suzuki Baleno",
      price: "₹6.66 - 9.83 Lakh*",
      image: "carTabsImage/hatchback/maruti_suzuki_baleno.png",
    },
  ],
  Sedan: [
    {
      name: "Honda City",
      price: "₹11.82 - 16.30 Lakh*",
      image: "carTabsImage/Sedan/honda_city.png",
    },
    {
      name: "Hyundai Verna",
      price: "₹11.00 - 17.42 Lakh*",
      image: "carTabsImage/Sedan/hyundai_verna.png",
    },
    {
      name: "Skoda Slavia",
      price: "₹11.63 - 19.12 Lakh*",
      image: "carTabsImage/Sedan/skoda_slavia.png",
    },
    {
      name: "Volkswagen Virtus",
      price: "₹11.56 - 19.15 Lakh*",
      image: "carTabsImage/Sedan/volkswagen_virtus.png",
    },
  ],
  MUV: [
    {
      name: "Maruti Ertiga",
      price: "₹8.69 - 13.03 Lakh*",
      image: "carTabsImage/MUV/maruti_ertiga.png",
    },
    {
      name: "Toyota Innova Crysta",
      price: "₹19.99 - 26.05 Lakh*",
      image: "carTabsImage/MUV/toyota_innova_crysta.png",
    },
    {
      name: "Renault Triber",
      price: "₹6.33 - 8.97 Lakh*",
      image: "carTabsImage/MUV/renault_triber.png",
    },
    {
      name: "Kia Carens",
      price: "₹10.52 - 19.67 Lakh*",
      image: "carTabsImage/MUV/kia_carens.png",
    },
  ],
  Luxury: [
    {
      name: "Mercedes-Benz S-Class",
      price: "₹1.71 - 2.17 Crore*",
      image: "carTabsImage/Luxury/mercedes_benz_s_class.png",
    },
    {
      name: "BMW 7 Series",
      price: "₹1.82 - 1.84 Crore*",
      image: "carTabsImage/Luxury/bmw_7_series.png",
    },
    {
      name: "Audi A8 L",
      price: "₹1.34 - 1.63 Crore*",
      image: "carTabsImage/Luxury/audi_a8_l.png",
    },
    {
      name: "Lexus LS",
      price: "₹1.96 - 2.27 Crore*",
      image: "carTabsImage/Luxury/lexus_ls.png",
    },
  ],
};

type CarTabsProps = {
  viewAll: boolean;
  type: CarTabs;
};

export function CarTabsSection({ viewAll, type }: CarTabsProps) {
  return (
    <div className="w-full mx-auto px-2 md:px-6 lg:px-8 py-8 bg-[#F3F4F6]">
      <div className="max-w-screen-2xl mx-auto">
        <h4 className="text-2xl text-center md:text-3xl mb-5 font-semibold py-5 text-[#004D40]">
          Best Seller Cars
        </h4>
        <div className="flex w-full justify-center md:justify-around gap-6 border-b">
          {/* tab buttons */}
          {tabs.map((tab) => (
            <Link
              replace
              scroll={false}
              href={`?type=${tab}`}
              key={tab}
              className={`pb-2 cursor-pointer transition-colors ${
                tab == type
                  ? "border-b-2 border-[#00F3FF] text-[#008080] font-semibold"
                  : "text-[#004D40] hover:text-[#008080]"
              }`}
              // onClick={() => handleTabClick(tab)}
            >
              {tab}
            </Link>
          ))}
        </div>
        {/* carshow section */}
        <div className="p-4">
          {viewAll ? (
            <CarGrid cars={carData[type]} />
          ) : (
            <CarCarousel cars={carData[type]} />
          )}
        </div>
        {!viewAll && (
          <Link
            replace
            href={`?type=${type}&viewAll=true`}
            className="text-left cursor-pointer text-[#008080] hover:text-[#00F3FF] py-5 transition-colors"
            scroll={false}
          >
            view all cars <ChevronRight className="inline" size={24} />
          </Link>
        )}
      </div>
    </div>
  );
}
