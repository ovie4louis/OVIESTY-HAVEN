// Importing specific icons from various icon libraries
import { 
  FaPumpSoap, FaShower, FaFireExtinguisher, FaUmbrellaBeach, FaKey 
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import { 
  BiSolidWasher, BiSolidDryer, BiSolidFirstAid, BiWifi, BiSolidFridge, BiWorld 
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import { 
  PiBathtubFill, PiCoatHangerFill, PiTelevisionFill 
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import { 
  GiHeatHaze, GiCctvCamera, GiBarbecue, GiToaster, GiCampfire 
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

// Categories of properties available in the platform
export const categories = [
  {
    label: "All", // General category for all properties
    icon: <BiWorld />, // Icon representing the 'All' category
  },
  {
    img: "assets/bungalow.jpg", // Image representing bungalows
    label: "Bungalows",
    description: "Bungalows are single-story buildings that are common in both rural and urban areas of Nigeria!",
  },
  {
    img: "assets/duplex.jpg",
    label: "Duplexes",
    description: "A Duplex is a single residential building constructed on two floors.",
  },
  {
    img: "assets/Detached.jpg",
    label: "Detached",
    description: "Detached houses, also known as standalone houses, are individual structures not connected to any other buildings.",
  },
  {
    img: "assets/Block_of_Flats.jpg",
    label: "Blocks of Flats",
    description: "Multi-story buildings housing several individual apartments on each floor.",
  },
  {
    img: "assets/Mansion.jpg",
    label: "Mansion",
    description: "Mansions are luxurious, grand houses characterized by their size, opulence, and high-end features!",
  },
  {
    img: "assets/penthouse.jpg",
    label: "Penthouse",
    description: "Penthouses are luxurious apartments situated on the top floors of high-rise buildings.",
  },
  {
    img: "assets/twin-duplex.png",
    label: "Twin Duplexes",
    description: "Twin duplexes are two houses joined by a common wall, also known as semi-detached duplexes.",
  },
  {
    img: "assets/semi-detached.jpg",
    label: "Semi-Detached Duplexes",
    description: "Semi-detached duplexes are similar to twin duplexes but typically consist of more than two units in a row.",
  },
  {
    img: "assets/Terraced Duplexes.jpg",
    label: "Terraced Duplexes",
    description: "Terraced duplexes, also known as townhouses or row houses, are a series of attached houses that share side walls.",
  },
  {
    img: "assets/lux_cat.jpg",
    label: "Luxury",
    description: "This property is brand new and luxurious!",
  },
];

// Types of accommodation offered on the platform
export const types = [
  {
    name: "An entire place", // Guests get the whole place
    description: "Guests have the whole place to themselves",
    icon: <FaHouseUser />, // Icon representing an entire place
  },
  {
    name: "Room(s)", // Guests get a private room in a shared space
    description: "Guests have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />, // Icon representing a room
  },
  {
    name: "A Shared Room", // Guests share a room with others
    description: "Guests sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />, // Icon representing a shared room
  },
];

// Facilities available in the accommodation
export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />, // Icon representing a bath tub
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />, // Icon representing personal care products
  },
  {
    name: "Outdoor shower",
    icon: <FaShower />, // Icon representing an outdoor shower
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />, // Icon representing a washer
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />, // Icon representing a dryer
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />, // Icon representing hangers
  },
  {
    name: "Iron",
    icon: <TbIroning3 />, // Icon representing an iron
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />, // Icon representing a TV
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />, // Icon representing a dedicated workspace
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />, // Icon representing air conditioning
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />, // Icon representing heating
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />, // Icon representing security cameras
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />, // Icon representing a fire extinguisher
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />, // Icon representing first aid
  },
  {
    name: "Wifi",
    icon: <BiWifi />, // Icon representing Wifi
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />, // Icon representing a cooking set
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />, // Icon representing a refrigerator
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />, // Icon representing a microwave
  },
  {
    name: "Stove",
    icon: <GiToaster />, // Icon representing a stove
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />, // Icon representing a barbecue grill
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />, // Icon representing an outdoor dining area
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />, // Icon representing a private patio or balcony
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />, // Icon representing a campfire
  },
  {
    name: "Garden",
    icon: <MdYard />, // Icon representing a garden
  },
  {
    name: "Free parking",
    icon: <AiFillCar />, // Icon representing free parking
  },
  {
    name: "Self check-in",
    icon: <FaKey />, // Icon representing self check-in
  },
  {
    name: "Pet allowed",
    icon: <MdPets />, // Icon representing pets being allowed
  },
];
