import Content from './pages/Content';
import NotFound from './pages/NotFound';
import First from './pages/First';
import Second from './pages/Second';
import App from './App';

export default [{
  ...App,
  routes: [
    {
      component: Content,
      path: '/',
      exact: true,
    }, {
      component: First,
      path: '/first',
      exact: true,
    }, {
      component: Second,
      path: '/second',
      exact: true,
    }, {
      component: NotFound,
      path: '*',
    },
  ],
}];
