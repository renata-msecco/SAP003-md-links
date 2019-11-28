const fs = require('fs');
const regex = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;
 const mdlinks = (path) => {
     return new Promise((resolve, reject) => {
         if(!path){
             reject('path not found')
         }
     fs.readFile(path, 'utf-8', (err, data) => {
         if (err){
            reject('path not found')
         }
         
    const links = data.match(regex)
     .map((item) => {
       const splited = item.split('](');
       return{
           text: splited [0].slice(1),
           href: splited [1].slice(0,-1),
       } ; 
     });
     resolve(links);
    });
   });
 }   

module.exports= mdlinks;

// function testregex(){
// var regex = /\[(\w.+)]|\(([^\)(]+)\)/g; 
// var input = "your input string"; 
// if(regex.test(input)) {
//   var matches = input.match(regex);
//   for(var match in matches) {
// 	alert(matches[match]);
//   } 
// } else {
//   alert("No matches found!");
// }

