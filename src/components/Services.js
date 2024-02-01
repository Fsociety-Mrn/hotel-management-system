import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
        "Wala pa"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
        "Wala pa"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
        "Wala pa"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Wala pa"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
