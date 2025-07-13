import React, { useState } from 'react';
import './certificate.css';


import cer1 from '../../assert/cer1.png';
import cer2 from '../../assert/cer2.png';
import cer3 from '../../assert/cer3.png';
import cer4 from '../../assert/cer4.png'; 
import cer5 from '../../assert/cer5.png'; 
import cer6 from '../../assert/cer6.png'; 
import cer7 from '../../assert/cer7.png'; 
import cer8 from '../../assert/cer8.png'; 
import cer9 from '../../assert/nptel.png'; 
import cer10 from '../../assert/cer10.png'; 

const certificateData = [
  {
    id: 1,
    title: "Cloud Computing",
    organization: "NPTEL",
    image: cer9
  },
  {
    id: 2,
    title: "Dynamic Public Speaking",
    organization: "Coursera",
    image: cer2
  },
  {
    id: 3,
    title: "Datathon-2023",
    organization: "IBM",
    image: cer3
  },
  {
    id: 4,
    title: "Computer Architecture: Digital Logic Circuits",
    organization: "NPTEL",
    image: cer4
  },
  {
    id: 5,
    title: "Web Security Basics",
    organization: "Great Learning",
    image: cer5
  },
  {
    id: 6,
    title: "Blockchain Basics",
    organization: "Great Learning",
    image: cer6
  },
    {
    id: 7,
    title: "Basics of Computer Networking",
    organization: "Great Learning",
    image: cer7
  },
    {
    id: 8,
    title: "Introduction to Neural Networks and Deep Learning",
    organization: "Great Learning",
    image: cer8
  },
    {
    id: 9,
    title: "Advanced Cyber Security - Threats and Governance",
    organization: "Great Learning",
    image: cer10
  },
  {
    id: 10,
    title: "Datathon-2024",
    organization: "IBM",
    image: cer1
  }
  
  
];

const Certificate = () => {
  const [showAll, setShowAll] = useState(false);

  const certificatesToShow = showAll ? certificateData : certificateData.slice(0, 3);

  return (
    <section className="certificate-section" id="certificates">
      <h2 className="cert-heading">MY CERTIFICATES</h2>
      <div className="certificate-container">
        {certificatesToShow.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} className="cert-img" />
            <div className="cert-overlay">
              <h3>{cert.title}</h3>
              <p>{cert.organization}</p>
            </div>
          </div>
        ))}
      </div>

      {certificateData.length > 3 && (
        <button className="view-all-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'View All'}
        </button>
      )}
    </section>
  );
};

export default Certificate;
