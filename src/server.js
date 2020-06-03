import express from 'express'
import React from 'react'
import App from '../dist/ssr/app'
import { StaticRouter } from 'react-router'
import reactDOMServer from 'react-dom/server'
import PlayPause from './player/components/play-pause'

const app = express()
app.use(express.static('dist'))
app.use('/images', express.static('images'));

app.get('*', (req, res) => {
  console.log('req.url ::', req.url)
  const html = reactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context= {
        {
          name: 'Razielini'
        }
      }
    >
      <App />
    </StaticRouter>
  )

  res.write(`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Platzi Video</title>
  <!-- <link rel="stylesheet" href="dist/css/home.7646f097e8e64cbf8f09.css"> -->
</head>
<body>
  <h1>Hola Mundo ${req.url}</h1>
  <div id="home-container"></div>
  <div id="modal-container"></div>
  <!-- script src="http://localhost:9000/js/app.js"></script -->
  <script src="js/app.js"></script>
</body>
</html>
  `)
  res.end()
})
app.listen(4000)
