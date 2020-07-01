const express = require('express');
const request = require('request');
const path = require('path')
const http = require('http'),
 httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({});

const app = express();
// remeber to look at request documemtation

const rout= path.resolve(__dirname, '..','public')

const port = 3000;

const experience='http://localhost:3006';
const servOne= 'http://localhost:3007';
const nearby = "http://localhost:3004";
const locReview = "http://localhost:3005";

app.use('/:id',express.static(rout))

app.get('/:id/imageMain/bundle.js', (req,res)=>{
  proxy.web(req,res, {target:servOne})
})
app.get('/:id/api/carousels',(req,res)=>{
  proxy.web(req,res, {target:servOne})
})

app.get('/:attractionId/bestNearby/bundle.js', (req,res)=>{
  proxy.web(req,res, {target:servOne})
})
app.get('/:attractionId/api/nearbyattractions',(req,res)=>{
  proxy.web(req,res, {target:bestNearby})
})



app.get('/:productId/reviewsModule/bundle.js', (req,res)=>{
  proxy.web(req,res, {target:locReview})
})
app.get('/:productId/api/reviews',(req,res)=>{
  proxy.web(req,res, {target:locReview})
})
app.get('/:productId/api/reviews/:reviewId',(req,res)=>{
  proxy.web(req,res, {target:locReview})
})
app.get('/:productId/api/reviews/:reviewId/:imageId',(req,res)=>{
  proxy.web(req,res, {target:locReview})
})


//dustins
app.get('/:id/exp/bundle.js', (req,res)=>{
  proxy.web(req,res, {target:experience})
})
app.get('/:id/fonts/bundle.js', (req,res)=>{
  proxy.web(req,res, {target:experience})
})
app.get('/:id/exp/api/',(req,res)=>{
  proxy.web(req,res, {target:experience})
})


// app.use('/:id',express.static(path.resolve(__dirname, '..', 'public')));
// app.use(express.json());




// app.get('/casey/bundle.js', (req,res)=>{
//   request('http://localhost:3003', (err,response) => {
//     if(err){
//       console.log(err)
//     }else{
//       res.send(response.body);
//     }

//   })
// })

// app.get("/:id/api/carousels", (req,res) => {
// console.log('well hello there')
//   request(`http://localhost:3003/${req.params.id}/api/carousels`,(err,response) => {
//     if(err){
//       console.log(err)
//     }else{
//       res.send(response.body)
//     }
//   })
// })

app.listen(port, () => console.log(`proxy server listening to locallhost${port}`));