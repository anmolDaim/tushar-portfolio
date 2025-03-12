import { Instagram, Youtube, Send } from 'lucide-react';

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
];

export const socialMedia = [
  {
    id: 1,
    Icon: Instagram, 
    url: "https://www.instagram.com/appomoon",
  },
  {
    id: 2,
    Icon: Youtube, 
    url: "https://www.youtube.com/@appomoon",
  },
  {
    id: 3,
    Icon: Send, 
    url: "https://t.me/appomoon",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Tushar Blog 1", 
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat dolore hic.",
    image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=2560&auto=format&fit=crop" 
  },
  {
    id: 2,
    title: "Tushar Blog 2", 
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat dolore hic.",
    image: "https://images.unsplash.com/photo-1522202222184-9ad104b33288?q=80&w=2560&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Tushar Blog 3", 
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat dolore hic.",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2560&auto=format&fit=crop"
  },
];

export const projects = [
  {
    title: "Business Strategy",
    description:
      "Developing financial plans to drive growth and efficiency.",
    link: "/",
  },
  {
    title: "Problem Solving",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/",
  },
  {
    title: "Analytical Skill",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "/",
  },
  {
    title: "Order to Cash",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "/",
  },
  {
    title: "Commerce",
    description:
      "Driving trade and financial operations for economic growth.",
    link: "/",
  },
  {
    title: "Accounting",
    description:
      "Recording and managing financial transactions with accuracy.",
    link: "/",
  },
];
