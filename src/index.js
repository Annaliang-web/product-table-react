import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

const PRODUCTS = [
  {department: 'Produce', price: '$1.99', unit: '/lb', stocked: true, name: 'Apples', dark: false},
  {department: 'Produce', price: '$1.79', unit: '/lb', stocked: false, name: 'Roman Lettuce', dark: false},
  {department: 'Produce', price: '$2.19', unit: '/lb', stocked: true, name: 'Hot House Tomatos', dark: false},
  
  {department: 'Dairy', price: '$4.50', unit: '/ea', stocked: true, name: '2% Milk', dark:true},
  {department: 'Dairy', price: '$5.29', unit: '/ea', stocked: true, name: 'Butter', dark:true},
  {department: 'Dairy', price: '$3.19', unit: '/dozen', stocked: false, name: 'White Eggs', dark:true},

  {department: 'Meat', price: '$7.99', unit: '/lb', stocked: false, name: 'Chicken Breast', dark:false},
  {department: 'Meat', price: '$6.49', unit: '/lb', stocked: true, name: 'Beef Sirloin', dark:false},
  {department: 'Meat', price: '$6.99', unit: '/lb', stocked: true, name: 'Pork Shoulder', dark:false},

]

ReactDOM.render(
  <App products={PRODUCTS} />,
  document.getElementById('root')
)