export interface Perfume {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  notes: {
    top: string;
    heart: string;
    base: string;
  };
  details: string;
}

export const PERFUMES: Perfume[] = [
  {
    id: "noir-de-kal",
    name: "Noir de Kal",
    subtitle: "Private Collection",
    price: 340,
    description: "An enigmatic journey through the shadows of dawn. A scent that captures the essence of velvet nights and rose gardens.",
    category: "Oud Series",
    rating: 4.9,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    notes: {
      top: "Saffron & Black Pepper",
      heart: "Black Rose & Damask Rose",
      base: "Agarwood (Oud) & Amber"
    },
    details: "Noir de Kal is not merely a fragrance; it is a second skin for the bold. It begins with the sharp, metallic bite of Saffron, before blooming into a heart of Black Rose—dark, honeyed, and dangerous."
  },
  {
    id: "amber-silk",
    name: "Amber Silk",
    subtitle: "Premium Essence",
    price: 185,
    description: "A warm, radiant embrace of golden amber and celestial honey. Soft yet commanding.",
    category: "Warm & Spicy",
    rating: 4.8,
    reviews: 86,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
    notes: {
      top: "Coriander & Bergamot",
      heart: "Honey & Orange Blossom",
      base: "Amber, Sandalwood & Vanilla"
    },
    details: "Amber Silk evokes the golden hour in a Mediterranean courtyard. It is the scent of sun-warmed skin and ancient resins."
  },
  {
    id: "velvet-oud",
    name: "Velvet Oud Essence",
    subtitle: "Artisanal Series",
    price: 210,
    description: "A textures exploration of deep woods and refined leather. Mysterious and sophisticated.",
    category: "Oud Series",
    rating: 4.7,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
    notes: {
      top: "Smoky Incense",
      heart: "Oud & Leather",
      base: "Cedarwood & Musk"
    },
    details: "Velvet Oud Essence is for those who find beauty in the shadows. A masterclass in woodsy depth."
  },
  {
    id: "crimson-elixir",
    name: "Crimson Elixir",
    subtitle: "Signature Bloom",
    price: 275,
    description: "Red fruits and dark florals collide in a passionate, lingering trail. Daring and seductive.",
    category: "Floral",
    rating: 5.0,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
    notes: {
      top: "Raspberry & Cherry",
      heart: "Gardenia & Jasmine",
      base: "Patchouli & Praline"
    },
    details: "Crimson Elixir is a celebration of femininity in its most powerful form. A floral that bites back."
  }
];
