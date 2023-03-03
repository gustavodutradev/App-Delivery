import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

function RouteWithNav(props) {
  const { element, path } = props;
  return (<Route
    path={ path }
    element={ [<NavBar key="nav" />, element] }
  />);
}

RouteWithNav.propTypes = {
  element: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};

export default RouteWithNav;
