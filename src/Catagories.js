import React from "react";

const Catagories = ({ catagories, filterItems }) => {
  return (
    <>
      <div className='container text-center'>
        {catagories.map((category, index) => {
          return (
            <button
              className='btn btn-warning m-2 text-capitalize fw-bold'
              type='button'
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Catagories;
