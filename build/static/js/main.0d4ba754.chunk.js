(this["webpackJsonpyoutube-app"]=this["webpackJsonpyoutube-app"]||[]).push([[0],{60:function(e,t,a){e.exports=a(88)},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),c=a(35),o=a.n(c),s=a(50),m=a(26),u=a(27),p=a(33),d=a(32),h=a(119),v=a(114),E=a(120),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={searchTerm:""},e.handleChange=function(t){e.setState({searchTerm:t.target.value})},e.handleSubmit=function(t){var a=e.state.searchTerm;(0,e.props.onFormSubmit)(a),t.preventDefault()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(v.a,{elevation:6,style:{padding:"25px"}},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(E.a,{fullWidth:!0,label:"Search...",onChange:this.handleChange})))}}]),a}(r.a.Component),g=a(118),b=a(121),y=a(30),x=a.n(y),S=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");console.log(t.id.videoId);var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{elevation:6,style:{height:"70%"}},r.a.createElement("iframe",{frameBorder:"0",height:"100%",width:"100%",title:"Video Player",src:a})),r.a.createElement(v.a,{elevation:6,style:{padding:"15px"}},r.a.createElement(g.a,{variant:"h6",style:{alignContent:"center"}},r.a.createElement("b",null,t.snippet.title)),r.a.createElement(g.a,{variant:"caption"},r.a.createElement("b",null,t.snippet.description)),r.a.createElement("br",null),r.a.createElement(b.a,{style:{marginTop:"20px",marginBottom:"20px"},variant:"outlined",color:"secondary",startIcon:r.a.createElement(x.a,null)}," ",t.snippet.channelTitle)))},w=function(e){var t=e.video,a=e.onVideoSelect;return r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(v.a,{elevation:6,style:{display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return a(t)}},r.a.createElement("img",{style:{marginRight:"10px",marginTop:"10px",marginBottom:"10px",marginLeft:"10px"},alt:"thumbnail",src:t.snippet.thumbnails.medium.url}),r.a.createElement(g.a,{variant:"caption"},r.a.createElement("b",null,r.a.createElement("p",{style:{marginRight:"10px",alignContent:"justify"}},t.snippet.title,r.a.createElement("br",null),r.a.createElement(g.a,{variant:"caption"},t.snippet.description),r.a.createElement("br",null)),r.a.createElement(b.a,{style:{marginTop:"20px",marginBottom:"20px"},variant:"outlined",color:"secondary",startIcon:r.a.createElement(x.a,null)}," ",t.snippet.channelTitle)))))},j=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e,t){return r.a.createElement(w,{onVideoSelect:a,key:t,video:e})}));return r.a.createElement(h.a,{container:!0,spacing:3},n)},V=a(55),O=a.n(V).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videos:[],selectedVideo:null},e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.handleSubmit=function(){var t=Object(s.a)(o.a.mark((function t(a){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.get("search",{params:{part:"snippet",maxResults:3,key:"AIzaSyDvlZOD-maFn823alxcBQcC57o_6WlqoSo",q:a}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.handleSubmit("anmol jain")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideo,a=e.videos;return r.a.createElement(h.a,{justify:"center",container:!0,spacing:5},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(f,{onFormSubmit:this.handleSubmit})),r.a.createElement(h.a,{item:!0,xs:7,alignItems:"flex-start"},r.a.createElement(S,{video:t})),r.a.createElement(h.a,{item:!0,sm:5},r.a.createElement(j,{videos:a,onVideoSelect:this.onVideoSelect})))))}}]),a}(r.a.Component);l.a.render(r.a.createElement(k,null),document.querySelector("#root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.0d4ba754.chunk.js.map