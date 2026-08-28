export type Brand = {
  name: string;
  blurb: string;
};

// Sample brand partner list. Blurbs are short, factual identity notes —
// swap in your own copy once brand agreements are confirmed.
export const brands: Brand[] = [
  { name: "Cartier", blurb: "French maison jewellery craft, translated into gold-finished optical frames." },
  { name: "Jacques Marie Mage", blurb: "Los Angeles atelier known for sculptural, limited-run acetate silhouettes." },
  { name: "Dita", blurb: "Precision-engineered eyewear built with aerospace-grade hardware." },
  { name: "Tom Ford", blurb: "Bold, cinematic shapes with signature metal temple detailing." },
  { name: "Oliver Peoples", blurb: "Californian archive-inspired frames, understated and hand-finished." },
  { name: "Chrome Hearts", blurb: "Sterling silver hardware and gothic motifs, cast by hand in Los Angeles." },
  { name: "Gucci", blurb: "Maximalist Italian design with archival house codes." },
  { name: "Prada", blurb: "Architectural minimalism from the Prada eyewear ateliers in Italy." },
  { name: "Celine", blurb: "Parisian ease — clean lines drawn from the house's ready-to-wear language." },
  { name: "Loewe", blurb: "Craft-led Spanish leather house, known for sculptural acetate work." },
  { name: "Balenciaga", blurb: "Directional, oversized silhouettes from the Paris house." },
  { name: "Christian Dior", blurb: "Couture detailing on frames — quilting, CD hardware, saddle stitching." },
  { name: "Fendi", blurb: "Roman heritage house, known for FF hardware and warm palettes." },
  { name: "Giorgio Armani", blurb: "Tailored, quiet luxury with a refined Milanese hand." },
  { name: "Bottega Veneta", blurb: "Intrecciato-inspired detailing and considered, sculptural forms." },
  { name: "Saint Laurent", blurb: "Parisian rock-and-roll edge, sharp cat-eyes and browlines." },
  { name: "Versace", blurb: "Maximalist Medusa hardware on bold Italian frames." },
  { name: "Mykita", blurb: "Berlin-engineered stainless steel, made without screws or solder." },
  { name: "Linda Farrow", blurb: "London atelier specialising in luxury sunglasses and rare finishes." },
  { name: "Maybach", blurb: "Ultra-luxury frames in precious metals, built to order." },
];

export type Category = {
  slug: string;
  name: string;
  frameShapes: string[];
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "eyeglasses",
    name: "Eyeglasses",
    frameShapes: ["Round", "Cat-Eye", "Rectangle", "Browline"],
    description:
      "Prescription frames chosen for face shape, lifestyle and lens requirement, fitted in-store by our dispensing team.",
    // Photo by Prateek Katyal on Unsplash — black framed eyeglasses (Unsplash License)
    image:
      "https://images.unsplash.com/photo-1589176449149-71f7ea77ec25?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
    frameShapes: ["Aviator", "Oversized", "Round", "Wrap"],
    description:
      "Polarised, photochromic and prescription sun lenses across our full designer wall.",
    // Photo by ZEELOOL Glasses on Unsplash — aviator sunglasses (Unsplash License)
    image:
      "https://images.unsplash.com/photo-1747731141445-7656d7467969?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "contact-lenses",
    name: "Contact Lenses",
    frameShapes: ["Daily", "Monthly", "Toric", "Multifocal"],
    description:
      "Fitted and reviewed by our optometrists, with trial lenses available before you commit.",
    // Photo by Laurie Keshishian on Unsplash — contact lens macro (Unsplash License)
    image:
      "https://images.unsplash.com/photo-1613829938171-1a6c89d2811c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "accessories",
    name: "Accessories",
    frameShapes: ["Cases", "Chains", "Cleaning Kits", "Repair Kits"],
    description:
      "Care essentials and finishing pieces to keep every pair looking new.",
    // Photo by Julie Molliver on Unsplash — reading glasses flatlay (Unsplash License)
    image:
      "https://images.unsplash.com/photo-1638042479727-6ca355e0e891?auto=format&fit=crop&w=1200&q=80",
  },
];

export type Store = {
  id: string;
  name: string;
  address: string;
  area: string;
  hours: { day: string; time: string }[];
  phone: string;
  parking: string;
  mapQuery: string;
};

// Placeholder locations — replace with your confirmed boutique addresses.
export const stores: Store[] = [
  {
    id: "c-scheme",
    name: "Jain Opticians — C-Scheme",
    address: "22 Prithviraj Road, C-Scheme, Jaipur, Rajasthan 302001",
    area: "C-Scheme",
    hours: [
      { day: "Mon – Sat", time: "10:30 AM – 8:00 PM" },
      { day: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    phone: "+91 141 400 1122",
    parking: "Valet available at the front entrance",
    mapQuery: "C-Scheme, Jaipur, Rajasthan",
  },
  {
    id: "mi-road",
    name: "Jain Opticians — MI Road",
    address: "14 Mirza Ismail Road, Jaipur, Rajasthan 302001",
    area: "MI Road",
    hours: [
      { day: "Mon – Sat", time: "10:00 AM – 8:30 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    phone: "+91 141 400 3344",
    parking: "Public parking at Panch Batti, 2 min walk",
    mapQuery: "MI Road, Jaipur, Rajasthan",
  },
];

export const testimonials = [
  {
    quote:
      "Three generations of my family have had their eyes tested here. The dispensing team still takes the same care my grandfather used to talk about.",
    name: "Aditi R.",
    context: "Client since 2011",
  },
  {
    quote:
      "I came in for a routine test and left having learned more about my prescription than in ten years elsewhere. No rush, no upsell.",
    name: "Karan V.",
    context: "Client since 2022",
  },
  {
    quote:
      "The only optician in the city carrying the frame I wanted. Fitting took under twenty minutes and it was done properly.",
    name: "Meher S.",
    context: "Client since 2019",
  },
];
