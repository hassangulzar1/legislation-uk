import React from "react";
import "./pricing.css";
import Card from "@/components/pricingCard/Card";

const page = () => {
  const data = [
    {
      id: 1,
      head: "25 Credits - Starter",
      title: "Casual Job Applications",
      price: "1.00",
      first: "✔️ Personalized Cover Letters",
      sec: "✔️ Analytics to determine Quality of Cover Letter",
    },
    {
      id: 2,
      head: "75 Credits - Pro",
      title: "Committed to get a job",
      price: "5.00",
      first: "✔️ Personalized Cover Letters",
      sec: "✔️ Analytics to determine Quality of Cover Letter",
      third: "✔️ LaTeX Cover Letters",
      four: "✔️ Guaranteed interview or money back",
    },

    {
      id: 3,
      head: "75 Credits - Pro",
      title: "Committed to get a job",
      price: "10.00",
      first: "✔️ Personalized Cover Letters",
      sec: "✔️ Analytics to determine Quality of Cover Letter",
      third: "✔️ LaTeX Cover Letters",
      four: "✔️ Cover Letters in your writing style based on your previous Cover Letters",
      five: "✔️ Three Guaranteed interviews or money back",
    },
  ];
  return (
    <div>
      <h1
        style={{
          fontWeight: 800,
          lineHeight: "60px",
          textAlign: "center",
          fontSize: "3.9rem",
          marginTop: "10px",
        }}
      >
        Pricing
      </h1>
      <p
        style={{
          fontWeight: "800",
          fontSize: "1.2rem",
          color: "#6b7280",
          lineHeight: "32px",
          textAlign: "center",
        }}
      >
        Choose the plan that works best for you, and start finding your dream
        job today.
      </p>
      {/* Card Section Starts here  */}
      <div className="demo">
        <div className="container">
          <div className="row">
            {data.map((item) => (
              <Card
                key={item.id}
                head={item.head}
                title={item.title}
                price={item.price}
                first={item.first}
                sec={item.sec}
                third={item.third}
                four={item.four}
                five={item.five}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
