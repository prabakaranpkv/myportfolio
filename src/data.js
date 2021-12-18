import chatapp from "./img/chatapp.jpg";
import flipkart from "./img/flipkart.jpg";
import incexp from "./img/incexp.jpg";
import pizzashop from "./img/pizzashop.jpg";

export const products = [
  {
    id: 1,
    img: `${pizzashop}`,
    link: "https://pizzashop-client.netlify.app/",
    name: "Pizza Shop",
    source1: "https://github.com/prabakaranpkv/pizza-client",
    source2: "https://github.com/prabakaranpkv/pizza-server",
    description:
      "PizzaShop website build with ReactJs, NodeJs, ExpressJs and MongoDB, and used react-stripe-checkout for Payment Gateway.",
  },
  {
    id: 2,
    img: `${chatapp}`,
    link: "https://chattingapp-client.netlify.app/",
    name: "ChatApp",
    source1: "https://github.com/prabakaranpkv/chatapp-front",
    source2: "https://github.com/prabakaranpkv/chatapp-server",
    description:
      "ChatApp build with ReactJs, NodeJs, ExpressJs and MongoDB, and used Google Authentication IDE.",
  },
  {
    id: 3,
    img: `${flipkart}`,
    link: "https://flipkartclone-client.netlify.app/",
    name: "Flipkart Clone",
    source1: "https://github.com/prabakaranpkv/flipkart-clone-client",
    source2: "https://github.com/prabakaranpkv/flipkart-clone-server",
    description:
      "Flipkart ECommerce Website with ReactJs, NodeJs, ExpressJs and MongoDB, and used Paytm IDE for Payment Gateway. ",
  },
  {
    id: 4,
    img: `${incexp}`,
    link: "https://income-expenses-client.netlify.app/",
    name: "Income & Expenses",
    source1: "https://github.com/prabakaranpkv/income-expenses-client",
    source2: "https://github.com/prabakaranpkv/income-expenses-server",
    description:
      "Income & Expenses build with ReactJs, NodeJs, ExpressJs and MongoDB.",
  },
];
