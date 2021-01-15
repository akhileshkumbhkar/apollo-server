import Express from 'express';
import { ApolloServer } from 'apollo-server-express';

class Server {
  constructor(config) {
    this.config = config;
    this.app = Express();
  }

  bootstrap() {
    this.setupRouts();
    return this;
  }

  setupRouts() {
    const { app } = this;
    app.get('/health-check', (req, res) => {
      res.send('I am fine');
    });
    return this;
  }

  setupApollo(schema) {
    const { app } = this;
    this.Server = new ApolloServer({
      ...schema
    });
    this.Server.applyMiddleware({ app });
    this.run();
  }

  run() {
    const { config: { PORT } } = this;
    const { app } = this;
    app.listen(PORT, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
      // eslint-disable-next-line no-console
      console.log(`App is running on port ${PORT}`);
    });
  }
}
export default Server;
