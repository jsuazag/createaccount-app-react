import React from "react";
import { CategoryItem } from "./CategoryItem";

const Categories = [
  {
    id: 1,
    icon: "icono 1",
    name: "Streaming",
  },
  {
    id: 2,
    icon: "icono 2",
    name: "Medons",
  },
  {
    id: 3,
    icon: "icono 3",
    name: "Edtech",
  },
  {
    id: 4,
    icon: "icono 4",
    name: "Wallet",
  },
];

export const Category = () => (
  <React.Fragment>
    <h4>Select category Account</h4>
    <section>
      {Categories.map((item, index) => (
        <CategoryItem key={index} iconName={item.icon} name={item.name} />
      ))}
    </section>
  </React.Fragment>
);
