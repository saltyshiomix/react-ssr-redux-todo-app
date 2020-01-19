import express from 'express';
import register from '@react-ssr/express/register';

const app = express();

(async () => {
  await register(app);

  app.get('/', (req: express.Request, res: express.Response) => {
    res.render('index');
  });

  app.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
})();
