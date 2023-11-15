// pages/_error.js
import React from 'react';

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      <p>Error {statusCode}</p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
