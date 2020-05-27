import React from 'react';
import Username from './Username.js'

class User extends React.Component {
    constructor(props){
        super(props)
        this.state=({
            isShowUsername:true,
            name:'xiaozhan'
        })
    }
    toggleUsername(){
        this.setState(state=>{
           return { isShowUsername:!state.isShowUsername}
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.toggleUsername.bind(this)}>展示/隐藏Username组件</button>
                <button onClick={()=>this.setState({name:'hanliang'})}>更新name</button>
                {this.state.isShowUsername && <Username name={this.state.name}/>}
            </div>
        )
    }
}

export default User