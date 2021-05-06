(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),c=a.n(r),s=a(5),l=a(6),i=a(8),h=a(7),u=a(9),m=a(12),b="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:d},p=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(m.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},k=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(m.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},v=(a(28),a(34)),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.changeShelf,a=e.book;return o.a.createElement("select",{value:a.shelf,onChange:function(e){return t(e.target.value,a)}},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None"))}}]),t}(o.a.Component),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={displayForSearch:[]},a.searchQuery=function(e){""!==e?k(e).then(function(e){!e||e.error?a.setState({displayForSearch:[]}):(e.map(function(e){return a.props.books.forEach(function(t){e.id===t.id?e.shelf=t.shelf:e.shelf="none"}),e}),a.setState({displayForSearch:e}))}):a.setState({displayForSearch:[]})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.displayForSearch;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(v.a,{to:"./",className:"close-search",onClick:function(){return e.setState({showSearchPage:!1})}},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.props.query,onChange:function(t){return e.searchQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},t&&t.map(function(t){return o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:void 0===t.imageLinks?"url(https://s7.postimg.cc/shls4dbcb/persons.png)":"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement(E,{book:t,changeShelf:e.props.changeShelf}))),o.a.createElement("div",{className:"book-title"},t.title),o.a.createElement("div",{className:"book-authors"},t.author)))}))))}}]),t}(o.a.Component),y=a(36),S=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},this.props.books.map(function(t){return t.shelf===e.props.title&&o.a.createElement("li",{key:t.id},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:188,backgroundImage:"url(".concat(t.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement(E,{changeShelf:e.props.changeShelf,book:t}))),o.a.createElement("div",{className:"book-title"},t.title),o.a.createElement("div",{className:"book-authors"},t.author)))}))))}}]),t}(o.a.Component),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.changeShelf=function(e,t){var n=[];p(t,e).then(function(){t.shelf=e,n=a.state.books.filter(function(e){return e.id!==t.id}),a.setState({books:n.concat(t)})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:f}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t})})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"app"},o.a.createElement(y.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,o.a.createElement("h2",{className:"bookshelf-title"},"Currently Reading"),o.a.createElement(S,{title:"currentlyReading",books:e.state.books,changeShelf:e.changeShelf}),o.a.createElement("h2",{className:"bookshelf-title"},"Want to Read"),o.a.createElement(S,{title:"wantToRead",books:e.state.books,changeShelf:e.changeShelf}),o.a.createElement("h2",{className:"bookshelf-title"},"Read"),o.a.createElement(S,{title:"read",books:e.state.books,changeShelf:e.changeShelf}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(v.a,{to:"/search"},"Add a book")))}}),o.a.createElement(y.a,{path:"/search",render:function(){return o.a.createElement(g,{books:e.state.books,searchQuery:e.searchQuery,changeShelf:e.changeShelf})}}))}}]),t}(o.a.Component),j=(a(32),a(35));c.a.render(o.a.createElement(j.a,null,o.a.createElement(N,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.adea82dc.chunk.js.map