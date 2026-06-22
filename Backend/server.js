const app=require('./src/app.js')
const connectDB=require('./src/db/db.js')
connectDB()


const port=4000
app.listen(port,()=>{
    console.log(`Server is running at port:${port}`)
}
)