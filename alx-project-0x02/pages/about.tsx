import React from 'react';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div className="p-8 space-y-4">
      <Button size="small" shape="rounded-sm">
        Small Rounded-sm
      </Button>
      <Button size="medium" shape="rounded-md">
        Medium Rounded-md
      </Button>
      <Button size="large" shape="rounded-full">
        Large Rounded-full
      </Button>
    </div>
  );
};

export default AboutPage;
