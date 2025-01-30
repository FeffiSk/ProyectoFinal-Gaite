import aquaDiGio from "/src/assets/images/gigio.jpg";
import diorSauvage from "/src/assets/images/sauvage1.jpg";
import invictus from "/src/assets/images/invictus.jpg";
import paul from "/src/assets/images/paul.webp";
import valentino from "/src/assets/images/valentino.jpeg";
import only from "/src/assets/images/only-brave.webp";

const perfumes = [
  {
    id: 1,
    name: "Aqua di Gio",
    brand: "Giorgio Armani",
    description: "Fragancia aromática y acuática para hombres.",
    image: aquaDiGio,
    price: 8000,
    categoria: "acuatico",
  },
  {
    id: 2,
    name: "Dior Sauvage",
    brand: "Dior",
    description: "Fresca y especiada con bergamota de Calabria.",
    image: diorSauvage,
    price: 9500,
    categoria: "fresco",
  },

  {
    id: 3,
    name: "Invictus",
    brand: "Paco Rabanne",
    description: "Un perfume masculino heroico amaderado-fresco.",
    image: invictus,
    price: 7800,
    categoria: "amaderado",
  },

  {
    id: 4,
    name: "Jean Paul",
    brand: "Jean Paul Galtuier",
    description: "Una fragancia masculina icónica que combina frescura y sensualidad.",
    image: paul,
    price: 12000,
    categoria: "fresco",
  },

  {
    id: 5,
    name: "Valentino born in roma",
    brand: "Valentino",
    description: "Born in Roma Uomo es una fragancia aromática amaderada de vetiver.",
    image: valentino,
    price: 12000,
    categoria: "amaderado",
  },

  {
    id: 6,
    name: "Only the brave",
    brand: "Diesel",
    description: "Onlyu the brave es una fragancia de carácter oriental amaderada.",
    image: only,
    price: 5670,
    categoria: "oriental",
  },
];

export default perfumes;