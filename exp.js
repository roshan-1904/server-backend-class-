// let exp=require('express')
// let bd=require('body-parser')

// let app=exp()
// app.use(bd.json())
// app.use(bd.urlencoded())

// app.get("/",(req,res)=>{
//     res.send("messgae")
// })
// app.get("/home/:id",(req,res)=>{
//     res.send({msg:"welcome",id:req.params.id})
// })
// app.get("/about",(req,res)=>{
//     let pid=req.query
//     res.send({msg:"ok",data:pid})
// })
// app.post("/reg",(req,res)=>{
//     let {name, email,phone}=req.body
//     res.send({msg:"ok",data:{name,email,phone}})

// })  
// app.put("/update/:id",(req,res)=>{
//     let { name, email,phone }=req.body;
//     res.send({msg:"ok",data:{name,email,phone}});
// })

// app.listen(9000)

// const express = require('express')
// const app =express();
// const port = 9000;

// let items =[
//     {id:1, name: 'box1'},
//     {id:2, name: 'box2'},
//     {id:3, name: 'box3'},
// ];
// app .get ('/delete-item/:id',(req,res)=>{
//     const itemId =parseInt(req.params.id);
//     const initialLength= items.length;
//     items =items.filter(item => item.id!==itemId);

//     if(item.length < initialLength){
//       res.send(`Item with ID ${itemId}deleted successfully.`)
//     }else{
//         res.status(404).send(`Item with ID ${itemId} not found.`)
//     }
// });
// app.listen(port,() =>{
//     console.log(`server running on port ${port}`);
    
// } )

// const express = require('express');
// const app = express();
// const port = 3000;

 
// app.use(express.json());


// app.post('api/data', (req, res) => {
//     const requestData = req.body; 
//     console.log('Received data:', requestData); 

// res.status(200).send('Data received successfully!');
// });


// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

    // const express = require('express');
    // const app = express();
    // const port = 3000;

    // app.use(express.urlencoded({ extended: true })); 

    // let items = [
    //     { id: 1, name: 'Item A' }, 
    //     { id: 2, name: 'Item B' }
    // ];

    // app.post('/update-item', (req, res) => {
    //     const itemId = parseInt(req.body.id);
    //     const newName = req.body.name;

    //     const itemIndex = items.findIndex(item => item.id === itemId);

    //     if (itemIndex !== -1) {
    //         items[itemIndex].name = newName;
    //         res.send(`Item with ID ${itemId} updated to: ${newName}`);
    //     } else {
    //         res.status(404).send('Item not found.');
    //     }
    // });

    // app.listen(port, () => {
    //     console.log(`Server listening at http://localhost:${port}`);
    // });


// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json()); 

// let items = [
//     { id: 1, name: 'Item A' },
//     { id: 2, name: 'Item B' }
// ];


// app.post('/api/items', (req, res) => {
//     const { id, name } = req.body;
//     if (items.find(item => item.id === id)) {
//         return res.status(400).json({ message: 'Item ID already exists' });
//     }

//     items.push({ id, name });
//     res.status(201).json({ message: 'Item inserted successfully', data: { id, name } });
// });


// app.post('/api/items/update', (req, res) => {
//     const { id, name } = req.body;
//     const item = items.find(item => item.id === id);

//     if (!item) {
//         return res.status(404).json({ message: 'Item not found' });
//     }

//     item.name = name;
//     res.json({ message: 'Item updated successfully', data: item });
// });


// app.post('/api/items/delete', (req, res) => {
//     const { id } = req.body;
//     const index = items.findIndex(item => item.id === id);

//     if (index === -1) {
//         return res.status(404).json({ message: 'Item not found' });
//     }

//     const deletedItem = items.splice(index, 1);
//     res.json({ message: 'Item deleted successfully', data: deletedItem[0] });
// });


// app.get('/api/items', (req, res) => {
//     res.json(items);
// });


// app.listen(port, () => {
//     console.log(`✅ API server running at http://localhost:${port}`);
// });
//  using express js with GET method to done CRUD Operation

// const express = require('express');
// const fs = require('fs');
// const app = express();
// const port = 4000;

// const getData = () => {
//   try {
//     const data = fs.readFileSync('expressget-data.json', 'utf8');
//     return JSON.parse(data);
//   } catch {
//     return [];
//   }
// };

// const saveData = (data) => {
//   fs.writeFileSync('expressget-data.json', JSON.stringify(data, null, 2));
// };


// app.get('/data', (req, res) => {
//   const data = getData();
//   res.json(data);
// });


// app.get('/add', (req, res) => {
//   const { id, productname, price } = req.query;
//   if (!id || !productname || !price) {
//     return res.status(400).send('Provide id, productname, and price');
//   }

//   const data = getData();
//   const newEntry = { id, productname, price };
//   data.push(newEntry);
//   saveData(data);
//   res.json({ message: 'Added', entry: newEntry });
// });

// app.get('/insert', (req, res) => {
//   const { id, productname, price } = req.query;
  
//   if (!id || !productname || !price) {
//     return res.status(400).send(' id, productname, and price');
//   }

//   const data = getData();


//   if (data.some(item => item.id === id)) {
//     return res.status(400).send('succucful');
//   }

//   const newEntry = { id, productname, price };
//   data.push(newEntry);
//   saveData(data);

//   res.json({ message: 'Inserted successfully', entry: newEntry });
// });



// app.get('/delete', (req, res) => {
//   const { id } = req.query;
//   if (!id) {
//     return res.status(400).send('Provide id to delete');
//   }

//   const data = getData();
//   const newData = data.filter(item => item.id !== id);
//   saveData(newData);
//   res.json({ message: 'Deleted', id });
// });


// app.get('/update', (req, res) => {
//   const { id, productname, price } = req.query;
//   if (!id || !productname || !price) {
//     return res.status(400).send(' productname, and price');
//   }

//   let data = getData();
//   let updated = false;

//   data = data.map(item => {
//     if (item.id === id) {
//       item.productname = productname;
//       item.price = price;
//       updated = true;
//     }
//     return item;
//   });

//   saveData(data);
//   res.json({ message: updated ? 'Updated' : 'Not found', id });
// });
// app.get('/search', (req, res) => {
//   const { productname } = req.query;
//   if (!productname) {
//     return res.status(400).send(' search succesfully');
//   }
//   const data = getData();
//   const results = data.filter(item =>
//     item.productname.toLowerCase().includes(productname.toLowerCase())
//   );
//   res.json(results);
// });


// app.get('/filter', (req, res) => {
//   const { price } = req.query;
//   if (!price) {
//     return res.status(400).send(' filter succesfully....');
//   }

//   const data = getData();
//   const filtered = data.filter(item => item.price === price);
//   res.json(filtered);
// });


// app.get('/sort', (req, res) => {
//   const data = getData();
//   const sorted = [...data].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//   res.json(sorted);
// });


// app.use((req, res) => {
//   res.status(404).send('Route not found');
// });
// app.listen(port, () => {
//     console.log(`server running at http://localhost:${port}`);
// });

