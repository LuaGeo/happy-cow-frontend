import vegStore from "../assets/imgs/categoryIcons/category_veg-store.png";
import vegan from "../assets/imgs/categoryIcons/category_vegan.png";
import vegetarian from "../assets/imgs/categoryIcons/category_vegetarian.png";
import vegOptions from "../assets/imgs/categoryIcons/category_veg-options.png";
import bakery from "../assets/imgs/categoryIcons/category_bakery.png";
import bAndB from "../assets/imgs/categoryIcons/category_b-b.png";
import catering from "../assets/imgs/categoryIcons/category_catering.png";
import juiceBar from "../assets/imgs/categoryIcons/category_juice-bar.png";
import healthStore from "../assets/imgs/categoryIcons/category_health-store.png";
import delivery from "../assets/imgs/categoryIcons/category_delivery.png";
import foodTruck from "../assets/imgs/categoryIcons/category_food-truck.png";
import iceCream from "../assets/imgs/categoryIcons/category_ice-cream.png";
import organization from "../assets/imgs/categoryIcons/category_organization.png";
import other from "../assets/imgs/categoryIcons/category_other.png";

export const getRestaurantCategory = (type) => {
  switch (type) {
    case "Veg Store":
      return vegStore;
    case "vegan":
      return vegan;
    case "vegetarian":
      return vegetarian;
    case "veg-options":
      return vegOptions;
    case "Bakery":
      return bakery;
    case "B&B":
      return bAndB;
    case "Catering":
      return catering;
    case "Juice Bar":
      return juiceBar;
    case "Health Store":
      return healthStore;
    case "Market Vendor":
      return vegOptions;
    case "Delivery":
      return delivery;
    case "Food Truck":
      return foodTruck;
    case "Ice Cream":
      return iceCream;
    case "Organization":
      return organization;
    case "Other":
      return other;
    default:
      return "not connected";
  }
};
