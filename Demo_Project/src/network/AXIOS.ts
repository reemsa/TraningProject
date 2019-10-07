import axios from 'axios'
const URL='https://conduit.productionready.io/api'
export const axiosPost=(endPoint:string,body:{})=>{
   return axios.post(`${URL}/${endPoint}`, body)
}
export const axiosGet=()=>{

}
export const axiosDelete=()=>{

}
// export const currentUser=(endPoint:string,body:{})=>{
//         return axios.post(`${URL}/${endPoint}`, body, {
//             headers: {
//               Authorization: "Token " + utl.getToken(),
//               "Content-Type": "application/json"
//             }
//           })
// }