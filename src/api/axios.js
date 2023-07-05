import axios from "axios"
const instances= axios.create({
    baseURL : "http://localhost:3000/"
})   
export default instances

