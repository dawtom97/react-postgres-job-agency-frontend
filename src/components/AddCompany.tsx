import React from "react";

export const AddCompany = () => {
  return (
    <div>
      <form action="">
        <div>
          <input type="text" name="name" placeholder="Company Name" />
        </div>
        <div>
          <input type="text" name="location" placeholder="Company location" />
        </div>
        <div>
           <select name="price_range" id="">
            <option disabled>Price range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
           </select>
        </div>
        <button type="submit">Add New</button>
      </form>
    </div>
  );
};
