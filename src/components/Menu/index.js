import React from "react";
import MenuItem from "../MenuItem";

const Menu = ({ menuName, menuItems }) => {
  return (
    <div className="menu">
      <h1>{menuName} Menu</h1>

      <div className="menuItems">
        {menuItems.map((item) => (
          <MenuItem
            key={item.itemId}
            itemId={item.itemId}
            itemPrice={item.itemPrice}
            itemName={item.itemName}
            itemDescription={item.itemDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
