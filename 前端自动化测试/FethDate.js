import axios from "axios"
export const fethdate=(callback)=>{
     axios.get("http://www.dell-lee.com/react/api/demo.json").then((res)=>{
        callback(res.data)
     })
}