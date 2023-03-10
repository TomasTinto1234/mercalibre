import {TbTractor, TbPalette, TbBabyCarriage, TbShirt, TbMusic, TbBone, TbHourglassLow, TbCamera, TbMicrophone, TbPlug, TbArmchair, TbMoodBoy} from "react-icons/tb";
import {GiDelicatePerfume, GiSteeringWheel, GiOfficeChair} from "react-icons/gi";
import {HiOutlineDevicePhoneMobile, HiOutlineSquares2X2, HiOutlineBookOpen, HiOutlineTicket, HiOutlineBuildingOffice2, HiOutlinePlusCircle} from "react-icons/hi2";
import {IoGameControllerOutline, IoBalloonOutline, IoCarOutline, IoFastFoodOutline, IoConstructOutline, IoFootballOutline, IoWatchOutline, IoPeopleOutline} from "react-icons/io5";
import {FaGuitar} from "react-icons/fa";
import {AiOutlineTool} from "react-icons/ai";
import {FiMonitor} from "react-icons/fi";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const LOADING = "LOADING";
export const OFFERS = "OFFERS";
export const NUMBER = "NUMBER";
export const DETAIL = "DETAIL";
export const PRODUCTS = "PRODUCTS";

const initialState = {
  products: [],
  searchProduct: [],
  productDetail: {},
  imageDetail: "",
  offers: [],
  number: [],
  loading: false,
  description: "",
  brands: [],
  categories: [
    {
      "id": "MLA1071",
      "name": "Animales y Mascotas",
      "icon": <TbBone className="category-icon"/>
    },
    {
      "id": "MLA1051",
      "name": "Celulares y Teléfonos",
      "icon": <HiOutlineDevicePhoneMobile className="category-icon"/>
    },
    {
      "id": "MLA1648",
      "name": "Computación",
      "icon": <FiMonitor className="category-icon"/>
    },
    {
      "id": "MLA1384",
      "name": "Bebés",
      "icon": <TbBabyCarriage className="category-icon"/>
    },
    {
      "id": "MLA1039",
      "name": "Cámaras y Accesorios",
      "icon": <TbCamera className="category-icon"/>
    },
    {
      "id": "MLA1367",
      "name": "Antigüedades y Colecciones",
      "icon": <TbHourglassLow className="category-icon"/>
    },
    {
      "id": "MLA1368",
      "name": "Arte, Librería y Mercería",
      "icon": <TbPalette className="category-icon"/>
    },
    {
      "id": "MLA1144",
      "name": "Consolas y Videojuegos",
      "icon": <IoGameControllerOutline className="category-icon"/>
    },
    {
      "id": "MLA1500",
      "name": "Construcción",
      "icon": <IoConstructOutline className="category-icon"/>
    },
    {
      "id": "MLA1743",
      "name": "Autos, Motos y Otros",
      "icon": <IoCarOutline className="category-icon"/>
    },
    {
      "id": "MLA5725",
      "name": "Accesorios para Vehículos",
      "icon": <GiSteeringWheel className="category-icon"/>
    },
    {
      "id": "MLA1512",
      "name": "Agro",
      "icon": <TbTractor className="category-icon"/>
    },
    {
      "id": "MLA1182",
      "name": "Instrumentos Musicales",
      "icon": <FaGuitar className="category-icon"/>
    },
    {
      "id": "MLA1246",
      "name": "Belleza y Cuidado Personal",
      "icon": <GiDelicatePerfume className="category-icon"/>
    },
    {
      "id": "MLA407134",
      "name": "Herramientas",
      "icon": <AiOutlineTool className="category-icon"/>
    },
    {
      "id": "MLA1276",
      "name": "Deportes y Fitness",
      "icon": <IoFootballOutline className="category-icon"/>
    },
    {
      "id": "MLA5726",
      "name": "Electrodomésticos y Aires Ac.",
      "icon": <TbPlug className="category-icon"/>
    },
    {
      "id": "MLA1000",
      "name": "Electrónica, Audio y Video",
      "icon": <TbMicrophone className="category-icon"/>
    },
    {
      "id": "MLA2547",
      "name": "Entradas para Eventos",
      "icon": <HiOutlineTicket className="category-icon"/>
    },
    {
      "id": "MLA1574",
      "name": "Hogar, Muebles y Jardín",
      "icon": <TbArmchair className="category-icon"/>
    },
    {
      "id": "MLA1459",
      "name": "Inmuebles",
      "icon": <HiOutlineBuildingOffice2 className="category-icon"/>
    },
    {
      "id": "MLA1430",
      "name": "Ropa y Accesorios",
      "icon": <TbShirt className="category-icon"/>
    },
    {
      "id": "MLA1168",
      "name": "Música, Películas y Series",
      "icon": <TbMusic className="category-icon"/>
    },
    {
      "id": "MLA1499",
      "name": "Industrias y Oficinas",
      "icon": <GiOfficeChair className="category-icon"/>
    },
    {
      "id": "MLA3937",
      "name": "Joyas y Relojes",
      "icon": <IoWatchOutline className="category-icon"/>
    },
    {
      "id": "MLA1132",
      "name": "Juegos y Juguetes",
      "icon": <TbMoodBoy className="category-icon"/>
    },
    {
      "id": "MLA3025",
      "name": "Libros, Revistas y Comics",
      "icon": <HiOutlineBookOpen className="category-icon"/>
    },
    {
      "id": "MLA409431",
      "name": "Salud y Equipamiento Médico",
      "icon": <HiOutlinePlusCircle className="category-icon"/>
    },
    {
      "id": "MLA1540",
      "name": "Servicios",
      "icon": <IoPeopleOutline className="category-icon"/>
    },
    {
      "id": "MLA9304",
      "name": "Souvenirs, Cotillón y Fiestas",
      "icon": <IoBalloonOutline className="category-icon"/>
    },
    {
      "id": "MLA1403",
      "name": "Alimentos y Bebidas",
      "icon": <IoFastFoodOutline className="category-icon"/>
    },
    {
      "id": "MLA1953",
      "name": "Otras categorías",
      "icon": <HiOutlineSquares2X2 className="category-icon"/>
    },
],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS: 
    return {
      ...state,
      products: action.payload
    }
    case SEARCH_PRODUCT:
      const allBrands = [];
      const allLocations = [];
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          if (allBrands.includes(action.payload[i].attributes[0].value_name)) {
            break;
          } else {
            allBrands.push(action.payload[i].attributes[0].value_name);
          }
          if (allLocations.includes(action.payload[i].address.city_name)) {
            break;
          } else {
            allLocations.push(action.payload[i].address.city_name);
          }
        }
      }

      return {
        ...state,
        searchProduct: action.payload,
        brands: allBrands,
        locations: allLocations,
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case OFFERS:
      return {
        ...state,
        offers: action.payload,
        loading: false,
      };

    case NUMBER:
      return {
        ...state,
        number: action.payload,
      };
    case DETAIL:
      return {
        ...state,
        productDetail: action.payload,
        imageDetail: action.payload.pictures[0]?.url,
      };

    default:
      return state;
  }
}
