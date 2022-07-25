import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default { component: App };
