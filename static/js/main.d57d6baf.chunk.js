(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(51)},28:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),s=a.n(r),c=(a(28),a(3)),o=a(4),i=a(6),m=a(5),u=a(7),p=a(10),f=a(8);function d(e){return l.a.createElement("header",null,l.a.createElement("h1",{className:"header-title"},l.a.createElement("img",{alt:"logo",src:"http://www.logospng.com/images/101/fox-logo-animal-on-behance-pinterest-101998.jpg"}),l.a.createElement("span",{className:"header-white-text"},"fox "),l.a.createElement("span",{className:"header-colored-letters"},"flex"),"box"))}var E=a(21);function g(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input-one"},l.a.createElement("p",{className:"code-prompt"}," justify-content : "),l.a.createElement("input",{type:"text",className:"search-input",name:"jcVal",value:e.jcVal,onChange:e.handleChange,placeholder:""})),l.a.createElement("div",{className:"input-two"},l.a.createElement("p",{className:"code-prompt"}," align-items : "),l.a.createElement("input",{type:"text",className:"search-input",name:"acVal",value:e.acVal,onChange:e.handleChange,placeholder:""})))}function h(e){return l.a.createElement("div",{className:"input-three"},l.a.createElement("p",{className:"code-prompt"}," flex-wrap : "),l.a.createElement("input",{type:"text",className:"search-input",name:"fwVal",value:e.fwVal,onChange:e.handleChange,placeholder:""}))}var x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.value,l=t.name;a.setState(Object(E.a)({},l,n),function(){a.props.updateUserAnswer(a.state),a.props.id<21&&a.state.jcVal===a.props.justifyContent&&a.state.acVal===a.props.alignContent?a.setState({btnColor:"#65a565"}):a.state.jcVal===a.props.justifyContent&&a.state.acVal===a.props.alignContent&&a.state.fwVal===a.props.flexWrap&&a.setState({btnColor:"#65a565"})})},a.handleSubmit=function(e){e.preventDefault(),a.props.id<21&&a.state.jcVal===a.props.justifyContent&&a.state.acVal===a.props.alignContent?(a.props.determineQuestion(),a.props.incrementRound(),a.setState({jcVal:"",acVal:"",btnColor:"#404b69",fwVal:""})):a.state.jcVal===a.props.justifyContent&&a.state.acVal===a.props.alignContent&&a.state.fwVal===a.props.flexWrap&&(a.props.determineQuestion(),a.props.incrementRound(),a.setState({jcVal:"",acVal:"",btnColor:"#404b69",fwVal:""}))},a.state={jcVal:"",acVal:"",fwVal:"",btnColor:"#404b69"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e,t=this.state.btnColor;return this.props.id>20&&(e=l.a.createElement(h,Object.assign({},this.state,{handleChange:this.handleChange}))),l.a.createElement("section",{className:"answer--container"},l.a.createElement("section",{className:"code-snippet--container"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form--container"},l.a.createElement("p",{className:"code-snippet--title"}," #garden"," {"," "),l.a.createElement("div",{className:"user-form"},l.a.createElement("p",{className:"code-snippet--body"},"display : flex;"),l.a.createElement("p",{className:"code-snippet--body"},"flex-direction: ",this.props.flexDirection,";"),l.a.createElement(g,Object.assign({},this.state,{handleChange:this.handleChange})),e,l.a.createElement("p",{className:"code-snippet--title"},"}")),l.a.createElement("div",{className:"submit--container"},l.a.createElement("input",{type:"submit",className:"search-btn",value:"Next",style:{backgroundColor:t}}))))))}}]),t}(n.Component);function b(e){var t=e.flexDirection,a=e.userGuessTwo,n=e.alignContent,r=e.userGuessOne,s=e.justifyContent,c=e.flexWrap;return l.a.createElement("section",{className:"board--container",style:{flexDirection:t}},l.a.createElement("section",{className:"fox--container",style:{justifyContent:r,alignItems:a}},l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"https://i.imgur.com/XnHxBnB.png"}))),l.a.createElement("section",{className:"box--container",style:{justifyContent:s,alignItems:n,flexWrap:c}},l.a.createElement("article",{className:"box"})))}function N(e){var t=e.flexDirection,a=e.userGuessTwo,n=e.alignContent,r=e.userGuessOne,s=e.justifyContent;return l.a.createElement("section",{className:"board--container"},l.a.createElement("section",{className:"fox--container",style:{justifyContent:r,alignItems:a,flexDirection:t}},l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"https://i.imgur.com/XnHxBnB.png"})),l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"https://i.imgur.com/FmUqM1R.png"})),l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"http://clipart-library.com/img/749202.png"}))),l.a.createElement("section",{className:"box--container",style:{justifyContent:s,alignItems:n,flexDirection:t}},l.a.createElement("article",{className:"box"}),l.a.createElement("article",{className:"box"}),l.a.createElement("article",{className:"box"})))}function y(e){var t=e.flexDirection,a=e.userGuessTwo,n=e.alignContent,r=e.userGuessOne,s=e.justifyContent,c=e.flexWrap,o=e.userGuessThree;return l.a.createElement("section",{className:"board--container"},l.a.createElement("section",{className:"fox--container",style:{justifyContent:r,alignItems:a,flexDirection:t,flexWrap:o}},l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"https://i.imgur.com/XnHxBnB.png"})),l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"https://i.imgur.com/XnHxBnB.png"})),l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"https://i.imgur.com/XnHxBnB.png"})),l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"https://i.imgur.com/FmUqM1R.png"})),l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"https://i.imgur.com/FmUqM1R.png"})),l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"https://i.imgur.com/FmUqM1R.png"})),l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"http://clipart-library.com/img/749202.png"})),l.a.createElement("article",{className:"fox"},l.a.createElement("img",{className:"fox-img",alt:"fox",src:"http://clipart-library.com/img/749202.png"}))),l.a.createElement("section",{className:"box--container",style:{justifyContent:s,alignItems:n,flexDirection:t,flexWrap:c}},l.a.createElement("article",{className:"box"}),l.a.createElement("article",{className:"box"}),l.a.createElement("article",{className:"box"}),l.a.createElement("article",{className:"box"}),l.a.createElement("article",{className:"box"}),l.a.createElement("article",{className:"box"}),l.a.createElement("article",{className:"box"}),l.a.createElement("article",{className:"box"})))}function v(e){return e.roundNumber<=5?l.a.createElement(b,e):e.roundNumber<20?l.a.createElement(N,e):e.roundNumber>=20?l.a.createElement(y,e):void 0}var w=a(12);function j(e){var t=e.difficulty,a=e.id;return l.a.createElement("section",{className:"prompt--container"},l.a.createElement("div",{className:"prompt-head--container"},l.a.createElement("h3",{className:"prompt-difficulty"},"Difficulty : ",t),l.a.createElement("div",{className:"prompt-button--container"},l.a.createElement("button",{className:"prompt-previous-button",onClick:function(){e.decrementRound()}},l.a.createElement(w.a,{icon:f.a})),l.a.createElement("h3",null," Level : ",a," of 25"),l.a.createElement("button",{className:"prompt-next-button",onClick:function(){e.incrementRound()}},l.a.createElement(w.a,{icon:f.b})))),l.a.createElement("div",{className:"prompt-body-container"},l.a.createElement("p",{className:"prompt-body-title"},"Help the fox get into the box by using the following"," ",l.a.createElement("span",null,"CSS properties : ")),l.a.createElement("div",{className:"prompt-property--container"},l.a.createElement("ul",null,"justify-content",l.a.createElement("li",null," center"),l.a.createElement("li",null," flex-start"),l.a.createElement("li",null," flex-end"),l.a.createElement("li",null," space-around"),l.a.createElement("li",null," space-between"),l.a.createElement("li",null," space-evenly")),l.a.createElement("ul",null,"align-items",l.a.createElement("li",null," center"),l.a.createElement("li",null," flex-start"),l.a.createElement("li",null," flex-end")),l.a.createElement("div",{className:"prompt-property--container"},l.a.createElement("ul",null,"flex-wrap:",l.a.createElement("li",null," wrap"),l.a.createElement("li",null," wrap-reverse"),l.a.createElement("li",null," nowrap")))),l.a.createElement("p",{className:"prompt-body-title"},"The fox will start with a justify-content and align-items of"," ",l.a.createElement("span",null,"flex-start")," and will start with a flex-wrap of"," ",l.a.createElement("span",null,"wrap")," if these are part of the answer"," ",l.a.createElement("span",null,"you will need to enter them in!"))))}var C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.determineQuestion()},a.determineQuestion=function(){a.selectQuestion(),a.saveToLocalStorage()},a.selectQuestion=function(){var e=a.state.roundNumber;a.setState({question:a.props.data[e],userGuessOne:"",userGuessTwo:"",userGuessThree:"",isLoading:!1})},a.incrementRound=function(){var e=a.state.roundNumber;(e=e+=1)<a.props.data.length&&a.setState({roundNumber:e},function(){a.determineQuestion()})},a.decrementRound=function(){var e=a.state.roundNumber;(e=e-=1)>=0&&a.setState({roundNumber:e},function(){a.determineQuestion()})},a.saveToLocalStorage=function(){localStorage.setItem("round",JSON.stringify(a.state.roundNumber))},a.updateUserAnswer=function(e){var t=e.acVal,n=e.jcVal,l=e.fwVal;a.setState({userGuessOne:n,userGuessTwo:t,userGuessThree:l})},a.state={question:"",roundNumber:JSON.parse(localStorage.getItem("round"))||0,userGuessOne:"",userGuessTwo:"",difficulty:"",display:"",flexDirection:"",isLoading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.question,a=e.userGuessOne,n=e.userGuessTwo,r=e.userGuessThree,s=e.roundNumber;return this.state.isLoading?l.a.createElement("div",null):l.a.createElement("main",null,l.a.createElement("section",{className:"left--container"},l.a.createElement(j,Object.assign({},t,{determineQuestion:this.determineQuestion,incrementRound:this.incrementRound,decrementRound:this.decrementRound})),l.a.createElement(x,Object.assign({},t,{updateUserAnswer:this.updateUserAnswer,determineQuestion:this.determineQuestion,incrementRound:this.incrementRound}))),l.a.createElement("section",{className:"right--container"},l.a.createElement(v,{flexWrap:t.flexWrap,justifyContent:t.justifyContent,userGuessOne:a,alignContent:t.alignContent,userGuessTwo:n,prompts:t.prompt,roundNumber:s,difficulty:t.difficulty,display:t.display,flexDirection:t.flexDirection,userGuessThree:r})))}}]),t}(l.a.Component),O=a(22),V=a.n(O);p.b.add(f.b,f.a);var S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).fetch=function(){V()("https://gist.githubusercontent.com/MaxBSilver/72738c4b15db04fb0748f5a07ffea45f/raw/6e7f5bb2b0acdb82af04c1591094a075d59fef14/foxy-flexbox.json").then(function(e){a.setState({data:e.data,isLoading:!1})})},a.state={data:[],isLoading:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){return this.state.isLoading?l.a.createElement("div",null):l.a.createElement("div",{className:"App"},l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(C,this.state.data)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.d57d6baf.chunk.js.map