import React from 'react';
import { RouteComponentProps } from '@reach/router';
class USER extends React.Component<RouteComponentProps<{}>> {
    constructor(props?:any,state?:any){
        super(props,state)
    }
    public state = {
        user:{}
    };
    setUSER({email,token,username,bio,image,id,createdAt,updatedAt}:{email:any,token:any,username:any,bio:any,image:any,id:any,createdAt:any,updatedAt:any}){
        this.setState({user:{
            email:email,
            token:token,
            username:username,
            bio:bio,
            image:image,
            id:id,
            createdAt:createdAt,
            updatedAt:updatedAt
        }})
    }
    getUSER(){
        return this.state.user;
    }

}


export default USER
