// let server = require('http')
// let url = require('url')
// let app = server.createServer((req, res) => {
//     let paths=url.parse(req.url,true)
//     console.log(paths);
    
//     if (paths.pathname == "/") {
//         res.write("welcome")
//         res.end()
//     }else if (req.url == "/home") {
//         res.write("welcome to home")
//         res.end()
//     }else if (paths.pathname== "/about") {
//         res.write(JSON.stringify(paths.query))
//         res.end()
//     }
//     else if (req.url == "/home") {
//         res.write("welcome to home")
//         res.end()
//     }else{
//         res.write("thankyou")
// res.end()
//     }
// })

// app.listen(9000, () => { console.log("run") })

const http = require('http');
const url = require('url');
const fs = require('fs');
    const app = http.createServer((req, res) => {
    const paths = url.parse(req.url, true);
    console.log(paths);

    if (paths.pathname == "/") {
        res.write("welcome");
        res.end();
          }
          else if (paths.pathname == "/home") {

           res.write("welcome to home");
        res.end();
         }
         else if (paths.pathname == "/about") {
             res.write("hi");
        res.end();
} 
else if (paths.pathname == "/readfile") {
        fs.readFile('./data.txt', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.write("Error reading file");
            }
             else {
                res.write(data);
            }
            res.end();
        });

    }
     else if (paths.pathname == "/writefile") {
        const content = paths.query.content || "Default content";
          fs.writeFile('./data.txt', content, (err) => {
            if (err) {
                res.writeHead(500);
                res.write(" writing file");
     }
      else {
                res.write("write succesfully...");
            }
            res.end();
        });
    } 
    else {
        res.write("thankyou");
        res.end();
    }
});

app.listen(9000, () => { 
    console.log("Server running on port 9000") 
});

