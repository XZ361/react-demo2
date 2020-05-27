import React ,{Component,Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from './Button.js'
// import User from './User.js'
// import {add,subtract} from './math'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <main>
//         <Button></Button>
//         <div>
//           <User name="a"/>
//           <User name="d"/>
//           <User name="v"/>
//         </div>
//       </main>
//     </div>
//   );
// 
// // 异步加载组件
// const Add=React.lazy(()=>import('./Add'))
// const Substract=React.lazy(()=>import('./Substract'))

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       name:'xiaozhan',
//       list:['a','b','c','d'],
//       val:'H',
//       v1:'',
//       v2:''
//     }
//     // this.handleClick=this.handleClick.bind(this)
//   }
//   handleClick(){
//     this.setState({name:'Front-end'})
//   }
//   handleInputChange(e){
//     this.setState(
//       {val: e.target.value.toUpperCase()}
//       )
//   }
//   calculate(){
//     import('./math').then(({add,subtract})=>{
//       this.setState({v1:add(3,5,7)})
//       this.setState({v2:subtract(3,5)})
//     })
//   }
//   render(){
    
//           // <!--列表循环必须加key属性-->
//     return(
//       <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Add></Add>
//         <Substract></Substract>
//       </Suspense>
//         <h1>3+5+7={this.state.v1}</h1>
//         <h1>3-5={this.state.v2}</h1>
//         <button onClick={this.calculate.bind(this)}>计算</button>
//         <h1>姓名:{this.state.name}</h1>
//         <button onClick={()=>this.handleClick()}>改变姓名</button>
//         <hr/>
//         <User/>
//         <hr/>
//         <ul>
//           {this.state.list.map(item=>
//             <li key={item.toString()}>{item}</li>
//           )}
//         </ul>
//         <hr/>
//         <input type="text" value={this.state.val} onChange={this.handleInputChange.bind(this)}/>

//       </div>
//     )
//   }
// }

// const ThemeContext=React.createContext()

// const Button =(props)=>{
//   // static contextType=ThemeContext;
//     return(
//      <ThemeContext.Consumer>
//       {val=>(
//         <div className="button" style={{background:val.bgColor,borderColor:val.borderColor}}>
//           button
//         </div>
//       )

//       }
//      </ThemeContext.Consumer>
//     )
  
  
// }

// // Button.contextType=ThemeContext

// const ThemeButton=(props)=>(
//   <div>
//   <Button />
//   </div>
// )

// const Toolbar=(props)=>(
//   <div>
//     <ThemeButton />
//   </div>

// )

// const theme={bgColor:'red',borderColor:'pink'}
// const App=(props)=>(
//   <ThemeContext.Provider className="Provider" value={theme}>
//   <Toolbar />
//   </ThemeContext.Provider>  
// )

// const Columns=()=>(
//   <>
//     <td>xiaoming</td>
//     <td>24</td>
//   </>
// )

// const App=(props)=>(
//   <table>
//     <tbody>
//       <tr>
//         <Columns/>
//       </tr>
//     </tbody>
//   </table>
// )

function First(props){
  return(
    <fieldset>
      <legend>first name</legend>
      <input value={props.value} onChange={props.onChange}/>
    </fieldset>
  )
}

function Last(props){
  return(
    <fieldset>
      <legend>Last name</legend>
      <input value={props.value} onChange={props.onChange}/>
    </fieldset>
  )
}

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      first:'abc',
      last:'front'

    }
  }
  render(){
    return(
      <div>
      <First value={this.state.first} onChange={(e)=>{this.setState({first:e.target.value})}}></First>
      <Last value={this.state.last} onChange={(e)=>{this.setState({last:e.target.value})}}></Last>
      <p>full name is : {this.state.first+' '+this.state.last}</p>

      </div>
    )
  }
}

export default App;
