interface Service {
  name: string;
  description: Description[];
  notes?: string;
}

interface Description {
  title: string;
  price: number | string;
}

export const servicePrice: Service[] = [
  {
    name: "Full Sets",
    description: [
      { title: "Ultra Violet Full Set", price: 50 },
      { title: "Ultra Violet Fill", price: 45 },
      { title: "Royal Gel/Bio Gel Full Set", price: 60 },
      { title: "Royal Gel/Bio Gel Fill", price: 50 },
      { title: "Royal Gel/Bio Gel Overlay", price: 55 },
      { title: "Full Set take off", price: 17 },
    ],
  },
  {
    name: "Manicure",
    description: [
      { title: "Regular Polish Manicure", price: 25 },
      { title: "Shellac Polish Manicure", price: 35 },
      { title: "Regular Polish Colour", price: 15 },
      { title: "Shellac Polish Colour", price: 25 },
      { title: "Shellac Polish Redone", price: 30 },
      { title: "Shellac Polish Removal", price: 10 },
    ],
    notes: "Shellac removal is an added charge of $5-$10",
  },
  {
    name: "Pedicure",
    description: [
      { title: "Regular Polish Pedicure", price: 35 },
      { title: "Shellac Polish Pedicure", price: 45 },
      { title: "Regular Polish Colour", price: 15 },
      { title: "Shellac Polish Colour", price: 25 },
      { title: "Shellac Polish Redone", price: 30 },
      { title: "Nu Skin: The Ice Dancer", price: 40 },
      { title: "Nu Skin: The Firewalker", price: 50 },
    ],
    notes: "Shellac removal is an added charge of $5-$10",
  },
  {
    name: "Designs & Add Ons",
    description: [
      { title: "2 Nail Designs", price: 5 },
      { title: "4 Nail Designs", price: "5+" },
      { title: "French", price: "5+" },
      { title: "Matte Top Coat", price: 5 },
      { title: "Mood Colour", price: 5 },
      { title: "Ombre Colour", price: 10 },
      { title: "Chrome Colour", price: 10 },
      { title: "Cat's Eye", price: 10 },
      { title: "Extra Length", price: "5+" },
    ],
  },
  {
    name: "Specials & Combos",
    description: [
      { title: "Senior Nail Trim", price: 5 },
      { title: "Regular Polish Mani + Pedi", price: 55 },
      { title: "Shellac Polish Mani + Pedi", price: 78 },
      { title: "Regular Polish Mani + Shellac Polish Pedi", price: 68 },
      { title: "Shellac Polish Mani + Regular Polish Pedi", price: 68 },
    ],
    notes: "Shellac removal is an added charge of $5-$10",
  },
  
  {
    name: "Mainicure (Kids)",
    description:[
      {title: "Regular Polish Manicure", price: 15},
      {title: "Shellac Polish Manicure", price: 25},
      {title: "Regular Polish Colour", price: 8},
      {title: "Shellac Polish Colour", price: 15},
      {title: "Shellac Polish Redone", price: 20},
    ],
  },
  {
    name: "Pedicure (Kids)",
    description: [
      { title: "Regular Polish Pedicure", price: 25 },
      { title: "Shellac Polish Pedicure", price: 35 },
      { title: "Regular Polish Colour", price: 10 },
      { title: "Shellac Polish Colour", price: 15 },
      { title: "Shellac Polish Redone", price: 20 },
    ],
    notes: "No charge for regular polish removal with a nail service",
  },
  {
    name: "Kids Combos",
    description: [
      { title: "Soak & Regular Polish Colour (Hands & Toes)", price: 20 },
      { title: "Regular Polish Mani + Pedi", price: 35 },
      { title: "Shellac Polish Mani + Pedi", price: 55 },
      { title: "Regular Polish Mani + Shellac Polish Pedi", price: 45 },
      { title: "Shellac Polish Mani + Regular Polish Pedi", price: 45 },
    ],
    notes: "Shellac removal is an added charge of $5-$10",
  },
];
