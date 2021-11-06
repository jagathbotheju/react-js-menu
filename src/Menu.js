import React from "react";

const Menu = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className='row'>
        {items.map((item) => {
          const { id, title, img, price, desc } = item;
          return (
            <div className='col-6' key={id}>
              <div
                className='card shadow m-3 mx-auto'
                style={{ maxWidth: "500px" }}
              >
                <div className='row g-0'>
                  <div className='col-4'>
                    <img src={img} alt={title} className='img-fluid h-100' />
                  </div>
                  <div className='col-8'>
                    <div className='card-body'>
                      <div className='card-title justify-content-between d-flex'>
                        <h5>{title}</h5>
                        <h5 className='text-warning'>{price}</h5>
                      </div>
                      <div className='card-text'>{desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
