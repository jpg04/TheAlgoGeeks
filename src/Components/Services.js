import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'We create tailor-made software solutions that meet your specific business needs. From web applications to mobile apps, we deliver seamless and user-friendly experiences.',
    },
    {
      title: 'Artificial Intelligence and Machine Learning',
      description: 'Leverage the power of AI and ML to gain valuable insights from your data. Our advanced algorithms enable predictive analytics and automation for smarter decision-making.',
    },
    {
      title: 'Blockchain Solutions',
      description: 'Unlock the potential of blockchain technology with our expertise. We develop decentralized applications and smart contracts to enhance security and transparency in your operations.',
    },
    {
      title: 'Cloud Services',
      description: 'Move your business to the cloud with confidence. Our cloud experts design and manage scalable and cost-effective cloud infrastructures for improved performance and flexibility.',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our robust cybersecurity services. We implement top-notch security measures to safeguard your data, networks, and applications from cyber threats.',
    },
    {
      title: 'UI/UX Design',
      description: 'Engage your audience with captivating user interfaces. Our talented designers craft visually stunning and user-friendly designs to enhance brand perception and customer satisfaction.',
    },
    {
      title: 'Digital Marketing',
      description: 'Reach your target audience effectively with our data-driven digital marketing strategies. We optimize your online presence and attract valuable leads through SEO, content marketing, and social media.',
    },
    {
      title: 'Consulting and IT Strategy',
      description: 'Get expert advice on IT strategy. Our consultants offer valuable insights and help you formulate robust strategies that align with your business goals and drive sustainable growth.',
    },
  ];

  return (
    <div>
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
