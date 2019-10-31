const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send(
        `
    <html>
      <body>
        <div>
          <div id="app">
            <h1>栗子好好吃</h1>
            <p class="demo">栗子好好吃呢</p>
          </div>
        </div>
      </body>
    </html>
    `
    )
})

app.listen(3000, () => {
    console.log('启动成功');
})