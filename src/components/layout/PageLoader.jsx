import React, { useState, useEffect } from "react";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-dark z-50 flex items-center justify-center">
      <div className="w-16 h-16 bg-primary rounded-full animate-bounce-ball"></div>
    </div>
  );
};

export default PageLoader;
