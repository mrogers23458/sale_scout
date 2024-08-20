// pages/dashboard.tsx
import React from "react";

// Define the type for props
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

type DashboardProps = {
  results: Product[];
};

// Define the component
const DashboardView: React.FC<DashboardProps> = async ({ results }) => {
  console.log({ results });
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {results?.map((item) => {
          return (
            <div
              className="card"
              key={item?.position}
              style={{
                width: "25vw",
                border: "2px solid white",
                margin: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* header */}
              <h2>{item.title}</h2>
              {/* image */}
              <img
                style={{ width: "10vw", height: "10vh" }}
                src={item?.thumbnail}
              />
              {/* source */}
              <p>{item?.source}</p>
              {/* current price */}
              <p>{item?.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardView;
