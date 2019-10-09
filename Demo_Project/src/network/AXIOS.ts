import axios from 'axios'
import {getToken} from './user'
const URL='https://conduit.productionready.io/api'
export const axiosPost=(endPoint:string,body:{})=>{
   return axios.post(`${URL}/${endPoint}`, body)
}
export const axiosPostWithAuthentication=(endPoint:string,body:{})=>{
   return axios.post(`${URL}/${endPoint}`, body,
   {  headers: {
                    Authorization: "Token " + getToken(),
                    "Content-Type": "application/json"
                  }
               }
   )
}
export const axiosPutWithAuthentication=(endPoint:string,body:{})=>{
   return axios.put(`${URL}/${endPoint}`, body,
      {  headers: {
                     Authorization: "Token " + getToken(),
                     "Content-Type": "application/json"
                     }
      }
   )
}
export const axiosGet=(endPoint:string,para?:string)=>{
return axios.get(`${URL}/${endPoint}?${para}`)
}
export const axiosGetWithAuthentication=(endPoint:string,para?:string)=>{
   return axios.get(`${URL}/${endPoint}?${para}`,{
      headers:{
         Authorization: "Token " + getToken(),
         "Content-Type": "application/json"
      }
   })
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