import React, { useState } from "react";

const DragandDrop = () => {
  const [items, setItems] = useState(["ankush", "vishal", "anil", "prince"]);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragOver = (index) => {
    if (draggingItem === null) return;
    if (draggingItem === index) return;
    const newItems = [...items];
    const draggingItemValue = newItems[draggingItem];
    newItems.splice(draggingItem, 1);
    newItems.splice(index, 0, draggingItemValue);    
   
    setDraggingItem(index);
    setItems(newItems);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  return (
    <>
      <div>
        <h4>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={() => handleDragOver(index)}
                onDragEnd={handleDragEnd}
              >
                {item}
              </li>
            ))}
          </ul>
        </h4>
      </div>
    </>
  );
};

export default DragandDrop;
