import React from 'react';
import './InvestmentEducation.css';

const InvestmentEducation = () => {
  const resources = [
    {
      title: 'Introduction to Investing',
      description: 'Learn the basics of investing and how to get started.',
      link: 'https://example.com/introduction-to-investing'
    },
    {
      title: 'Stock Market Basics',
      description: 'Understand how the stock market works.',
      link: 'https://example.com/stock-market-basics'
    },
    {
      title: 'Mutual Funds 101',
      description: 'Learn about mutual funds and how they can help you diversify your portfolio.',
      link: 'https://example.com/mutual-funds-101'
    },
    {
      title: 'Retirement Planning',
      description: 'Plan for your retirement with these investment strategies.',
      link: 'https://example.com/retirement-planning'
    }
  ];

  return (
    <div className="investment-education">
      <h1>Investment Education</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestmentEducation;