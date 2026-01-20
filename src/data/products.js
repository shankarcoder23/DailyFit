// ✅ IMPORT LOCAL IMAGES (same-to-same file name)
import whiteTshirt from "../assets/image/product-img/men-traditional.jpg";
import redTshirt from "../assets/image/product-img/men's-skyblue-shirt.jpg";
import menGreen from "../assets/image/product-img/men-green-tshirt.jpg";
import kidsStylish from "../assets/image/product-img/kids-t-shirt.jpg";
import stylishWomen from "../assets/image/product-img/women-stylish-outfit.jpg";
import womenBlue from "../assets/image/product-img/women-kurti.jpg";
import blackshirt from "../assets/image/product-img/men-black-shirt.jpg";
import womenSaree from "../assets/image/product-img/women-saree.jpg";

const products = [
  {
    id: 1,
    name: "Men's Traditional Dress",
    category: "Men",
    price: 599,
    image: whiteTshirt,
  },
  {
    id: 2,
    name: "Men Casual Shirt",
    category: "Men",
    price: 899,
    image: redTshirt,
  },
  {
    id: 3,
    name: "Men Green T-Shirt",
    category: "Men",
    price: 699,
    image: menGreen,
  },
  {
    id: 4,
    name: "Stylish Outfit",
    category: "Women",
    price: 1299,
    image: stylishWomen,
  },
  {
    id: 5,
    name: "Modern Design Kurti",
    category: "Women",
    price: 999,
    image: womenBlue,
  },
  {
    id: 6,
    name: "Kids Printed T-Shirt",
    category: "Kids",
    price: 499,
    image: kidsStylish,
  },
  {
    id: 7,
    name: "Men Black T-Shirt",
    category: "Men",
    price: 649,
    image: blackshirt,
  },
  {
    id: 8,
    name: "Women Ethnic Wear Saree",
    category: "Women",
    price: 1399,
    image: womenSaree,
  },
];
  


export default products;
