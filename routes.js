
const express = require('express');
const { spawn } = require('child_process');
var router = express.Router();

const inputSettings = {mean:{label:'Mean',
                          min:1, max:10, step:0.1},
                      std:{label:'Standard Deviation',
                          min:1, max:10, step:0.1},
                      n:{label:'Number of Samples',
                          min:5, max:25, step:1}}

// ========================================================
// =======================================================
// Welcome / landing page
// ========================================================
// ========================================================

router.get('/', (req, res)=> {
  res.render('welcome')
})

// ========================================================
// ========================================================
// Spawn a python process to generate random numbers every time a get request is made
// ========================================================
// ========================================================

router.get('/python', (req, res) => {
  let cPy = spawn('python3', ['library/python/example_1.py']);

  let stdout = '';
  cPy.stdout.on('data', (data) => {
    stdout += data;
  });

  cPy.stderr.on('data', (data) => {
    console.log(`stderr : ${ data }`);
  });

  cPy.on('exit', (code) => {
    let result = JSON.parse(stdout);
    res.render('example_1', {data:result});
  })

})

// ========================================================
// ========================================================
// Get a page that supports AJAX requests
// ========================================================
// ========================================================

router.get('/inputPars', (req, res) =>{
  res.render('example_2/example_2', {inputSettings:inputSettings,
                            pars:{mean:5.5, std:2.5, n:10}})
})

// ========================================================
// ========================================================
// Post request generates data
// ========================================================
// ========================================================

router.post('/inputPars', (req, res) =>{
  // initialize process
  let cPy = spawn('python3', ['library/python/example_2.py']);

  // collect data stream from the python process
  let stdout = '';
  cPy.stdout.on('data', (data) => {
    stdout += data;
  });

  // behavior upon error generation
  cPy.stderr.on('data', (data) => {
    console.log(`stderr : ${ data }`);
  });

  // At completion of the spawned python process pass the stdout data so that it can be returned to the client
  cPy.on('exit', (code) => {
    console.log(stdout);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.parse(stdout));
  });

  // send data stream to python process
  cPy.stdin.write(JSON.stringify(req.body));
  cPy.stdin.end();
})

// ========================================================
// ========================================================

module.exports = router;
