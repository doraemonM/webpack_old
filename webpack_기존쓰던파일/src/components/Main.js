import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducer';
import TodoApp from './TodoApp';
import {Provider} from 'react-redux';

let storeTodo = createStore(reducer);

let data = [53,6]
let myarray = [11,2,3]
var [x,y,z] = myarray
let a = 10;
let b = 5;
var str = `나는 ${a+b} 살입니다.`
let ss = Symbol();

let str2 = '0123'
let obj2 = {number:3}
let arr = Array.from(str2,function(value){return parseInt(value)+this.number},obj2)

const myFunc = (a,b) => {return console.log(a+b)}
  
class Main extends React.Component{
   updatePr(e){       
        let datas = e.target.getAttribute('data')
        this.props.onUpdate(datas); 
    }   
    
   constructor(props){
        super(props);
        this.updatePr = this.updatePr.bind(this)
        myFunc(...data); 
        console.log(str)
        console.log(arr)
        let kk = xv => {return console.log(xv*xv)}
        console.log(kk(3))
    
        
    }

    componentDidMount(){
        $('#pagepiling').pagepiling({
          menu: '#menu',
          anchors: ['section1', 'section2','section3'],
          //loopTop: true,
          //loopBottom: true,
          animateAnchor: false,
          navigation: {
            'position': 'right',
            'tooltips': ['', '', '', '', '', '','','']
          },
          onLeave : function(index, nextIndex, direction){
            console.log(index)
          }
        })

        var vid = document.getElementById("detail_video");
              vid.autoplay = true;
              vid.load();

    }

    render(){
        let hello = [
            {id:0,title:'안녕하세요'},
            {id:1,title:'hi '},
            {id:2,title:'곤방와 '}
          ]
          
          let mainText = [
              {section2haed:'2016F/W THE\ BIG TREND',head:'안녕하세요',subhead:'리스트입니다.'},
              //한국어 끝
              //영어 시작
              {head:'hi',subhead:'sososo.'},
              //영어 끝
              //중국어 시작
              {head:'zeidmn',subhead:'fjdlksjv'}
              //중국어 끝
          ]
    

        const listItem = hello.map((number) =>
          <li key={number.id}>{number.title}</li>
        )

      return(
          <div>
                <ul className={'lang'}>
                    {this.props.posts.map((post) =>
                      <li key={post.id} data={post.id} onClick={this.updatePr}>
                          {post.title}
                      </li>
                    )}
                </ul>
                <div id="pagepiling">
                    <section className={'section section1'}>
                        <Provider store={storeTodo}>
                            <TodoApp />
                        </Provider>                    
                    </section>
                    <section className={'section section2'}>
                     <div className={"movie-area"}>
                        <video id={this.props.videoId} preload="auto" muted>
                        <source  src={this.props.sourceVideo} type="video/mp4" />
                        </video>
                    </div>
                    </section>
                    <section className={'section section3'}>                     
                      <p>{mainText[this.props.number]['section2haed']}</p>        
                      <p>{mainText[this.props.number]['subhead']}</p> 
                    </section>
                    <section className={'section section4'}>
                    </section>
                </div>
           </div>

        )
    }
}

Main.defaultProps = {
    videoId: "detail_video"
};



export default Main;
