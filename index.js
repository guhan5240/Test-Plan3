import app from './src/app.js';

app.get('/', (req, res) => {
    res.send(`  <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;font-size:34px;">
                    🚀 Krishna's Server 🐦‍🔥
                </div>`)
})