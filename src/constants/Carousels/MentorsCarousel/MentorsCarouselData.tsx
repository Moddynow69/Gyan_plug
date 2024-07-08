type MentorsCarouselDataType = Array<{
  topRated: boolean;
  name: string;
  location: string;
  experience: string;
  admissions: string;
  image: string;
}>;
const MentorsCarouselData: MentorsCarouselDataType = [
  {
    topRated: true,
    name: "Praveen Agarwal",
    location: "ApnaMBA.com",
    experience: "10+ Years",
    admissions: "1000+",
    image: "/images/Praveen Agarwal.jpg",
  },
  {
    topRated: true,
    name: "Snehashree Dash",
    location: "ApnaMBA.com",
    experience: "10+ Years",
    admissions: "1000+",
    image: "/images/Snehashree Dash.jpg",
  },
  {
    topRated: true,
    name: "Ayesha Ansari",
    location: "GTRC CONSULTING",
    experience: "8 Years",
    admissions: "200+",
    image: "/images/Ayesha ansari.jpg",
  },
  {
    topRated: true,
    name: "Rachna Mishra",
    location: "Guide Me Education Services",
    experience: "5 Years",
    admissions: "200+",
    image: "/images/Rachna Mishra.jpeg",
  },
  {
    topRated: true,
    name: "Sayanti Kusari Naskar",
    location: "Guide me education services",
    experience: "6 Years",
    admissions: "150",
    image: "/images/Sayanti Kusari Naskar.jpeg",
  },
  {
    topRated: true,
    name: "Sulata Mondal",
    location: "Guide Me Education",
    experience: "6 Years",
    admissions: "240",
    image: "/images/Sulata Mondal.jpeg",
  },
];

export default MentorsCarouselData;
