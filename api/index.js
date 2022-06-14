const express = require('express');
const postsRouter = require('./posts');
const apiRouter = express.Router();

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
module.exports = usersRouter;
module.exports = postsRouter;
module.exports = usersRouter;