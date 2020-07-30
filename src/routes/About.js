import React from 'react';
import NewsletterAPI from 'api/newsletter';

const About = () => {
  const getNewsletter = async (payload) => {
    const result = await NewsletterAPI.get(payload);

    // result.data
  };
  return <div>About</div>;
};

export default About;
