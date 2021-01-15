import Server from './Server';
import config from './config/configurations';
import schema from './modules';

const server = new Server(config);
(() => {
  server.bootstrap().setupApollo(schema);
})();
