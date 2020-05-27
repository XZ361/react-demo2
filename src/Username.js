import React from 'react';

class Username extends React.Component {
    constructor(props){
        // console.log('constructor');
        super(props)
        this.state=({
            age:10
        })
    }
    updateAge(){
        this.setState({
            age:this.state.age+1
        })
    }
    render(){
        return (
            <div>
                <h2>Username组件</h2>
                <div>姓名：{this.props.name}</div>
                <div>年龄：{this.state.age}</div>
                <button onClick={()=>this.updateAge()}>更新年龄</button>
            </div>
        )
    }
    // shouldComponentUpdate(){
    //     // 组件更新
    //     console.log('shouldComponentUpdate');
    //     return true
    // }
    // componentDidMount(){
    //     // 组件挂载完毕
    //     console.log('componentDidMount');
    // }
    // componentDidUpdate(){
    //     // 组件更新完毕
    //     console.log('componentDidUpdate');
    // }
    // componentWillUnmount(){
    //     // 组件卸载
    //     console.log('componentWillUnmount');
    // }
}

export default Username