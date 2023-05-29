export const category = (type) => {
  switch (type) {
    case "Veg Store":
      return "../assets/imgs/category_veg-store.png";
    case "vegan":
      return "../assets/imgs/category_vegan.png";
    case "vegetarian":
      return "../assets/imgs/category_vegetarian.png";
    case "veg-options":
      return "../assets/imgs/category_veg-options.png";
    case "Bakery":
      return "../assets/imgs/category_bakery.png";
    case "B&B":
      return "../assets/imgs/category_b-b.png";
    case "Catering":
      return "../assets/imgs/category_catering.png";
    case "Juice Bar":
      return "../assets/imgs/category_juice-bar.png";
    case "Health Store":
      return "../assets/imgs/category_health-store.png";
    case "Market Vendor":
      return "../assets/imgs/category_veg-options.png";
    case "Delivery":
      return "../assets/imgs/category_delivery.png";
    case "Food Truck":
      return "../assets/imgs/category_food-truck.png";
    case "Ice Cream":
      return "../assets/imgs/category_ice-cream.png";
    case "Organization":
      return "../assets/imgs/category_organization.png";
    case "Other":
      return "../assets/imgs/category_other.png";
    default:
      return "not connected";
  }
};
