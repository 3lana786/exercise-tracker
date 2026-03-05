import React from "react";

const menu = [
  {
    menuName: "Dinner",
    menuItems: [
      {
        itemId: 1,
        itemName: "Lasagne",
        itemPrice: "12",
        itemDescription: "Meat and cheese layered pasta."
      },
      {
        itemId: 2,
        itemName: "Cheese Ravioli",
        itemPrice: "10",
        itemDescription: "Cheese-filled ravioli with sauce."
      }
    ]
  }
];

function App() {
  return (
    <div style={{padding:"20px"}}>
      <h1>Restaurant Menu</h1>

      {menu.map(section => (
        <div key={section.menuName}>
          <h2>{section.menuName}</h2>

          {section.menuItems.map(item => (
            <div key={item.itemId}>
              <h3>{item.itemName} - ${item.itemPrice}</h3>
              <p>{item.itemDescription}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;