(this["webpackJsonpweather-react-app"]=this["webpackJsonpweather-react-app"]||[]).push([[0],{23:function(e,a,t){e.exports=t(50)},28:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),i=t.n(c),l=(t(28),t(5)),s=t(6),o=t(8),m=t(7),u=t(22),h=t.n(u),d=function(e){var a=e.key,t=e.cityName,n=e.country,c=e.currentTemp,i=e.feelsLike,l=e.minTemp,s=e.maxTemp,o=e.weatherDescription;return r.a.createElement("div",{index:a,key:a,className:"modal"},r.a.createElement("div",{className:"row1"},r.a.createElement("div",{className:"square squareOne"},r.a.createElement("p",null,t,", ",n)),r.a.createElement("div",{className:"square squareTwo"},r.a.createElement("p",null,"Right now, it is ",c),r.a.createElement("p",null,"Feels like ",i))),r.a.createElement("div",{className:"row2"},r.a.createElement("div",{className:"square squareThree"},r.a.createElement("p",{className:"desc"},o)),r.a.createElement("div",{className:"square squareFour"},r.a.createElement("p",null,"Low: ",l),r.a.createElement("p",null,"High: ",s))))},p=t(3),E=t(4),v=function(){return r.a.createElement("div",{className:"iconContainer"},r.a.createElement(p.a,{icon:E.e,className:"sunny weatherIcons"}),r.a.createElement(p.a,{icon:E.a,className:"cloudy weatherIcons"}),r.a.createElement(p.a,{icon:E.d,className:"rainy weatherIcons"}),r.a.createElement(p.a,{icon:E.b,className:"moony weatherIcons"}))},y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).state={currentTime:(new Date).toLocaleDateString()},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({currentTime:(new Date).toLocaleString()})}),1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"dateTime"},r.a.createElement("p",null,"Currently, it is: ",this.state.currentTime))}}]),t}(n.Component),f=(t(49),"https://api.openweathermap.org/data/2.5/weather?"),w="9337001bff95870d0f26deeb07c4be6f",N="metric",g="New York",b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).handleSubmit=function(e){e.preventDefault(),console.log("this has been submitted")},e.handleChange=function(a){e.setState({cityName:a.target.value}),console.log(e.state.cityName)},e.handleClick=function(e){e.preventDefault(),console.log("click me")},e.state={detailArray:[],cityName:"",isLoading:!0},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;h()({url:f,method:"GET",responseType:"JSON",params:{q:g,appid:w,units:N}}).then((function(a){var t=[];t.push(a.data),e.setState({detailArray:t,isLoading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"searchContainer"},r.a.createElement("h1",null,"Weather ",r.a.createElement("span",null,"Radar"),"  ",r.a.createElement(p.a,{icon:E.c,className:"searchIcon"})),r.a.createElement(v,null),r.a.createElement("form",{action:"",onSubmit:this.handleSubmit},r.a.createElement("input",{value:this.state.value,onChange:this.handleChange,type:"text",placeholder:"City"})),r.a.createElement("button",{onClick:this.handleClick},"Get the Weather!")),r.a.createElement("div",{className:"colorBox"},this.state.isLoading?r.a.createElement("p",null,"Loading..."):this.state.detailArray.map((function(e,a){return r.a.createElement(d,{index:e.id,key:e.id,cityName:e.name,country:e.sys.country,currentTemp:e.main.temp,feelsLike:e.main.feels_like,minTemp:e.main.temp_min,maxTemp:e.main.temp_max,weatherDescription:e.weather[0].description})})),r.a.createElement(y,null))),r.a.createElement("div",{className:"copyright"},r.a.createElement("p",null,"Copyright Vigyan Kayastha 2020")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.6f12a660.chunk.js.map