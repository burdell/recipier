import * as express from 'express';
import * as next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/favicon.ico', (_, res) =>
      res.status(200).sendFile('favicon.ico', { root: __dirname + '/assets/' })
    );

    server.get('/recipe/:id/edit', (req, res) => {
      const actualPage = '/edit';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/recipe/:id', (req, res) => {
      const actualPage = '/recipe';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    const PORT = 3000;
    server.listen(PORT, (err: Error) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
