import React from "react";

const Card = ({ head, title, price, first, sec, third, four, five, id }) => {
  return (
    <div className="col-md-4 col-sm-6" id={id}>
      <div className="pricingTable">
        <div className="pricingTable-header">
          <h3 className="heading">{head}</h3>
          <span className="subtitle">{title}</span>
          <div className="price-value">
            {price}
            <span className="currency">$</span>
            <span className="month">/mo</span>
          </div>
        </div>
        <ul className="pricing-content">
          <li>{first}</li>
          <li>{sec}</li>
          <li>{third}</li>
          <li>{four}</li>
          <li>{five}</li>
        </ul>
        <a href="#" className="read">
          Get Started<i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
