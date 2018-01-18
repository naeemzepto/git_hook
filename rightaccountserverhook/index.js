const express = require('express')
var exec = require('child_process').exec;

const app = express()

app.post('/updaterightaccount', function(req, res) {

  console.log("RightAccount code push");

  exec('/www/rightaccount/rightaccounthook/hook.sh ' + '/www/rightaccount/rightaccount/', function(err, stdout, stderr) {
    if (err){
      console.log(err);
      return err;
    }
    console.log(stdout);
    console.log("RightAccount code pulled!");
  });
  res.send('Success!')
});

app.post('/updaterightaccountapi', function(req, res) {

  console.log("RightAccountAPI code push");

  exec('/www/rightaccount/rightaccounthook/hook.sh ' + '/www/rightaccountapi/', function(err, stdout, stderr) {
    if (err){
      console.log(err);
      return err;
    }
    console.log(stdout);
    console.log("RightAccountAPI code pulled!");
  });
  res.send('Success!')
});

app.post('/updatejobseekerapi', function(req, res) {

  console.log("JobSeekerAPI code push");

  exec('/www/rightaccount/rightaccounthook/hook.sh ' + '/www/jseekerapi/jobseekerapi/', function(err, stdout, stderr) {
    if (err){
      console.log(err);
      return err;
    }
    console.log(stdout);
    console.log("JobSeekerAPI code pulled!");
  });
  res.send('Success!')
});

app.listen(8090, () => console.log('Example app listening on port 8090!'))
