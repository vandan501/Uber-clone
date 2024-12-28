// const http = require("http");
const app=require("./app");

// const server=http.createServer(port,()=>{
//     console.log(`Server running on PORT: ${port}`)
// })

app.listen(process.env.PORT,()=>{
    console.log(`Backend server started on PORT : ${process.env.PORT}`)
})