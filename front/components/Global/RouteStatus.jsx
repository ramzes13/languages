import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const RouteStatus = ({ code, children }) => (
  <Route
    render={
      ({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code; // eslint-disable-line no-param-reassign
        }

        return children;
      }
    }
  />
);

RouteStatus.propTypes = {
  code: PropTypes.number.isRequired,
  children: PropTypes.object,
};

export default RouteStatus;
