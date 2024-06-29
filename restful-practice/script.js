'use strict';

const
  port = 8000;
const express = require('express');
const app = express();

//  /hello/ GET request
app.get('/hello/:name?', (req, res) => {
  res.json(
    {
      message: `Hello ${req.params.name || 'world'}!`
    }
  );
});

// start server

app.listen(port, () =>
  console.table(`Server started on port ${port}`)
  
);
