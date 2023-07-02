import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function AppDropdown({ emptyValue, initialValue, items, handleItemSelect, index, className }) {
  const [selectedItem, setSelectedItem] = useState(initialValue);

  function handleItemClick(item) {
    setSelectedItem(item);
    handleItemSelect(item, index);
  };

  return (
    <Dropdown className={className}>
      <Dropdown.Toggle>
        {selectedItem !== "" ? selectedItem : emptyValue}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item) => (
          <Dropdown.Item key={item} onClick={() => handleItemClick(item)}>
            {item}
          </Dropdown.Item>
        ))}
        <Dropdown.Item className="light-bold" style={{color:"var(--primary-0)"}} key={""} onClick={() => handleItemClick("")}>
          Reset
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AppDropdown;