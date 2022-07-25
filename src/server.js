import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './Routes';
import renderer from './helpers/renderer';
import createStore from './store';
import { setServerData } from './actions';

const app = express();
app.use(express.static('dist'));

const store = createStore();
const { dispatch } = store;

setServerData(dispatch, 'Dummy Data From Server');

console.log(store.getState());


app.get('*', (req, res) => {
  const routes = matchRoutes(Routes, req.path);
  const promises = routes.map(
    ({ route }) => (route.loadData ? route.loadData(dispatch) : null),
  );
  Promise.all(promises).then(() => {
    const content = renderer(req, store);
    res.send(content);
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
