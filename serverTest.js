const request = require('supertest');

const app = require('./server');

const agent = request.agent(app);

before(done => {
    app.on('appStarted', () => {
        done();
    })
});

describe("App started", () => {
    it('App start', () => {
        agent
            .get('/api/auth/user')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});