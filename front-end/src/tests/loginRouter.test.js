import { createServer, get } from 'http';
import app from '../App';

describe('Testes de rota', () => {
  test('GET / redireciona para /login', (done) => {
    const STATUS_302 = 302;
    const server = createServer(app);
    server.listen(0, () => {
      const { port } = server.address();
      const request = get(`http://localhost:${port}/`);
      request.on('response', (response) => {
        expect(response.statusCode).toBe(STATUS_302);
        expect(response.headers.location).toBe('/login');
        server.close();
        done();
      });
    });
  });

  test('GET /login retorna status 200', (done) => {
    const STATUS_200 = 200;
    const server = createServer(app);
    server.listen(0, () => {
      const { port } = server.address();
      const request = get(`http://localhost:${port}/login`);
      request.on('response', (response) => {
        expect(response.statusCode).toBe(STATUS_200);
        server.close();
        done();
      });
    });
  });
});
