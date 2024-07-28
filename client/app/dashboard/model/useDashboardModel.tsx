type Product = {
  position: number;
  title: string;
  link: string;
  product_link: string;
  product_id: string;
  serpapi_product_api: string;
  number_of_comparisons: string;
  comparison_link: string;
  serpapi_product_api_comparisons: string;
  source: string;
  price: string;
  extracted_price: number;
  rating: number;
  reviews: number;
  badge: string;
  thumbnail: string;
  delivery: string;
};

type MockData = {
  results: Product[];
};

const mock: MockData = {
  results: [
    {
      position: 1,
      title: "Nike Court Borough Low Recraft Big Kids' Shoes - White/Pink Foam",
      link: "https://www.nike.com/t/court-borough-low-recraft-big-kids-shoes-dDK0q4/DV5456-105?nikemt=true&srsltid=AfmBOooCVFK77VsvwDYm-lRBdHH6Ct3w_nQYyjywKa8O-dmWg0vdVTC4aCA",
      product_link:
        "https://www.google.com/shopping/product/16474445837437288542?gl=us",
      product_id: "16474445837437288542",
      serpapi_product_api:
        "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=us&google_domain=google.com&hl=en&location=Austin%2C+Texas%2C+United+States&product_id=16474445837437288542",
      number_of_comparisons: "10+",
      comparison_link:
        "https://www.google.com/shopping/product/16474445837437288542/offers?udm=28&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM&q=nike&gl=us&hl=en&prds=eto:16013713999696789607_0,pid:10863833567065188839,rsk:PC_7886149969107736471&sa=X&ved=0ahUKEwj7u8PIl8qHAxU68MkDHfXBD_QQ3q4ECIMY",
      serpapi_product_api_comparisons:
        "https://serpapi.com/search.json?engine=google_product&filter=eto%3A16013713999696789607_0%2Cpid%3A10863833567065188839%2Crsk%3APC_7886149969107736471&gl=us&hl=en&offers=1&product_id=16474445837437288542&sa=X&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM&ved=0ahUKEwj7u8PIl8qHAxU68MkDHfXBD_QQ3q4ECIMY",
      source: "Nike",
      price: "$67.00",
      extracted_price: 67,
      rating: 4.7,
      reviews: 1670,
      badge: "Top Quality Store",
      thumbnail:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQFL5uQ8ECMXT1LNfcjBK7HcR7IsGIw6w-Q0W7FpHIj7zDhNQztnaHahis0nPd1WpYYZ3n6FJ7L8NImmoVkli78agZyEGL-cRVjrPjMnkduSkv71MrqS_GW8co&usqp=CAE",
      delivery: "Delivery by Wed, Aug 7",
    },
    {
      position: 2,
      title: "Nike TD Dunk Low White/Black",
      link: "https://www.nordstrom.com/s/kids-dunk-low-basketball-sneaker-baby-walker-toddler-little-kid-big-kid/2867145?color=WHITE%2F+BLACK&size=walker-6+m&country=US&currency=USD&utm_source=google&utm_medium=organic&utm_campaign=seo_shopping&utm_channel=low_nd_seo_shopping&srsltid=AfmBOorcLyoJZxxkhZvpneNsHPd_-ogtt3zOM-G-xxYgqy7ileit4Cx6Rg0",
      product_link:
        "https://www.google.com/shopping/product/14389762690395367583?gl=us",
      product_id: "14389762690395367583",
      serpapi_product_api:
        "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=us&google_domain=google.com&hl=en&location=Austin%2C+Texas%2C+United+States&product_id=14389762690395367583",
      number_of_comparisons: "10+",
      comparison_link:
        "https://www.google.com/shopping/product/14389762690395367583/offers?udm=28&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM&q=nike&gl=us&hl=en&prds=eto:16120357130961114799_0,pid:11889913745416371756,rsk:PC_2565532108602614745&sa=X&ved=0ahUKEwj7u8PIl8qHAxU68MkDHfXBD_QQ3q4ECJUY",
      serpapi_product_api_comparisons:
        "https://serpapi.com/search.json?engine=google_product&filter=eto%3A16120357130961114799_0%2Cpid%3A11889913745416371756%2Crsk%3APC_2565532108602614745&gl=us&hl=en&offers=1&product_id=14389762690395367583&sa=X&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM&ved=0ahUKEwj7u8PIl8qHAxU68MkDHfXBD_QQ3q4ECJUY",
      source: "Nordstrom",
      price: "$55.00",
      extracted_price: 55,
      rating: 4.4,
      reviews: 336,
      badge: "Top Quality Store",
      thumbnail:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQp6QC0-8QOJIc2BxbIgKyYQWX2DffQV4Cg61VJQGkhXqFw_vdVUZqmbZ9HR095wssaBpluiemDFm7pm3vABg4_WefO6gpgQYg3w_tZE0O4Q2JTyOn2BxpEhyU&usqp=CAE",
      delivery: "Free delivery by Mon, Aug 5",
    },
    {
      position: 3,
      title: "Nike Air Force 1 GS 'White Midnight Navy'",
      link: "https://www.kidsfootlocker.com/product/~/V5948104.html?source=shoppingads&locale=en-US&SID=5601&inceptor=1&cm_mmc=paid%20search-_-google-_-g-_-PLA-_-DPA-_--_-P-_-Prospecting-_--_-na-_--_-na-_-PLA-_-na-_--_--_-",
      product_link:
        "https://www.google.com/shopping/product/16256377468953960546?gl=us",
      product_id: "16256377468953960546",
      serpapi_product_api:
        "https://serpapi.com/search.json?device=desktop&engine=google_product&gl=us&google_domain=google.com&hl=en&location=Austin%2C+Texas%2C+United+States&product_id=16256377468953960546",
      number_of_comparisons: "10+",
      comparison_link:
        "https://www.google.com/shopping/product/16256377468953960546/offers?udm=28&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM&q=nike&gl=us&hl=en&prds=eto:4062608177669656148_0,pid:6027408224692921116,rsk:PC_15686405164681051745&sa=X&ved=0ahUKEwj7u8PIl8qHAxU68MkDHfXBD_QQ3q4ECKcY",
      serpapi_product_api_comparisons:
        "https://serpapi.com/search.json?engine=google_product&filter=eto%3A4062608177669656148_0%2Cpid%3A6027408224692921116%2Crsk%3APC_15686405164681051745&gl=us&hl=en&offers=1&product_id=16256377468953960546&sa=X&uule=w+CAIQICIaQXVzdGluLFRleGFzLFVuaXRlZCBTdGF0ZXM&ved=0ahUKEwj7u8PIl8qHAxU68MkDHfXBD_QQ3q4ECKcY",
      source: "Kids Foot Locker",
      price: "$90.00",
      extracted_price: 90,
      rating: 4.7,
      reviews: 1650,
      badge: "Top Quality Store",
      thumbnail:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqkOQD-F-2NxDnqblEmXvFdzGy2OtCgXP6U81VS2-tmqDXF0yuQ0-2fqTesk0XYKtrouSncwmLwbC-aoCPp3BQU-EoA8hAwYy3zAsFrK5TATWUFEgiJusv&usqp=CAE",
      delivery: "$7.99 delivery",
    },
  ],
};

const useDashboardModel = async () => {
  const data = mock;
  const { results } = await data;
  console.log(results);
  return { results };
};

export default useDashboardModel;
