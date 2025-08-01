import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>hello react</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1 className="header"> Fast react pizza company</h1>;
}

function Menu() {
  return (
    <main className="menu">
      <h2>our menu</h2>
      <Pizza  name="/>
    </main>
  );
}

function Pizza() {
  return (
    <div>
      <h2>pizza btre</h2>
      <img src="pizzas/spinaci.jpg" />
    </div>
  );
}
function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleString()}we are currently open
    </footer>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
