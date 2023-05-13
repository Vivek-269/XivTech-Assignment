import React, { useEffect, useRef, useState } from "react";
import "./MainComponent.scss";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";

function MainComponent() {
  const [isVisible, setIsVisible] = useState([false, false, false, false]);

  const elementRefs = [useRef(), useRef(), useRef(), useRef()];
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry, index) => {
          const isVisibleCopy = [...isVisible];
          isVisibleCopy[index] = entry.isIntersecting;
          setIsVisible(isVisibleCopy);
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        }),
      {
        threshold: 0,
      }
    );
    elementRefs.forEach((ref) => observer.observe(ref.current));
    return () => {
      elementRefs.forEach((ref) => observer.unobserve(ref.current));
    };
  }, []);
  return (
    <div className="component">
      <div className="header">
        <h1>Let's Collaborate</h1>
      </div>
      <div className="main">
        <div className="sub-main" ref={elementRefs[0]}>
          <div className="item1">
            <h2>AI + RPA is what we do</h2>
            <h3>
              Future-Proof your business. Drive efficiency, profitability and
              deliver on customer experience
            </h3>
            <a href="/services/AIandRPAautomation">
              AI + RPA Automation &rarr;
            </a>
          </div>
          <div className="item2">
            <img src={img1} alt="img1" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="sub-main " ref={elementRefs[1]}>
          <div className="item1">
            <h2>Make Bolder Choices</h2>
            <h3>Digital focused strategies to realize market-changing ideas</h3>
            <a href="/services/AIandRPAautomation">Build Better Apps &rarr;</a>
          </div>
          <div className="item2">
            <img src={img2} alt="img1" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="sub-main" ref={elementRefs[2]}>
          <div className="item1">
            <h2>Innovate with Speed</h2>
            <h3>
              Create higher quality software, deliver on customer expectations
              and business goals
            </h3>
            <a href="/services/AIandRPAautomation">DevOps &rarr;</a>
          </div>
          <div className="item2">
            <img src={img3} alt="img1" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="sub-main" ref={elementRefs[3]}>
          <div className="item1">
            <h2>Embrace Cloud</h2>
            <h3>
              With Cloud-First accelerate innovation and optimize performance
            </h3>
            <a href="/services/AIandRPAautomation">Cloud Services &rarr;</a>
          </div>
          <div className="item2">
            <img src={img4} alt="img1" />
          </div>
        </div>
      </div>
      <button>Get in touch</button>
    </div>
  );
}

export default MainComponent;
