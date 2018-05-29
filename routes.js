
const express = require('express');
const { spawn } = require('child_process');
var router = express.Router();

// ========================================================
// ========================================================
router.get('/', (req, res)=> {
  res.render('welcome')
})

// ========================================================
// ========================================================

router.get('/python', (req, res) => {
  let cPy = spawn('python3', ['example.py']);

  let stdout = '';
  cPy.stdout.on('data', (data) => {
    stdout += data;
  });

  cPy.stderr.on('data', (data) => {
    console.log(`stderr : ${ data }`);
  });

  cPy.on('exit', (code) => {
    let result = JSON.parse(stdout);
    res.render('example', {data:result});
  });

  // cPy.stdin.write(JSON.stringify(Object.assign(req.body,
  //     {classifier: req.params.classifier})));
  // cPy.stdin.end();
  // res.render('example', {data: result})
})

// ========================================================
// ========================================================

router.get('/test', (req, res)=> {
  res.render('test')
})

// ========================================================
// ========================================================

module.exports = router;
