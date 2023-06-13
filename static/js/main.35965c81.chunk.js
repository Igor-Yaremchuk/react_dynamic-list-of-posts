(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var c=s(10),n=s.n(c),a=s(2),i=s(1),o=(s(15),s(16),s(17),s(3)),r=s.n(o),l=s(0),d=function(e){var t=e.userPosts,s=e.handleSelectedPost,c=e.selectedPost,n=e.handleToggleSidebar,a=e.isOpenSidebar;return Object(l.jsxs)("div",{"data-cy":"PostsList",children:[Object(l.jsx)("p",{className:"title",children:"Posts:"}),Object(l.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{className:"has-background-link-light",children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{children:"Title"}),Object(l.jsx)("th",{children:" "})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var t=e.id,i=e.title,o=(null===c||void 0===c?void 0:c.id)===t;return Object(l.jsxs)("tr",{"data-cy":"Post",children:[Object(l.jsx)("td",{"data-cy":"PostId",children:t}),Object(l.jsx)("td",{"data-cy":"PostTitle",children:i}),Object(l.jsx)("td",{className:"has-text-right is-vcentered",children:Object(l.jsx)("button",{type:"button","data-cy":"PostButton",className:r()("button is-link",{"is-light":!o}),onClick:function(){return function(e){(null===c||void 0===c?void 0:c.id)===e?n():(s(e),n(!0))}(t)},children:o&&a?"Close":"Open"})})]},t)}))})]})]})},m=(s(19),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),j=s(6),u=s(8),b=s(9),h="https://mate.academy/students-api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),O(300).then((function(){return fetch(h+e,c)})).then((function(e){return e.json()}))}var x,N=function(e){return f(e)},p=function(e,t){return f(e,"POST",t)},v=function(e){return f(e,"DELETE")};!function(e){e.None="",e.UserPosts="Unable to get a user posts",e.Delete="Unable to delete comment",e.Add="Unable to add new comment"}(x||(x={}));var y=function(e){var t=e.selectedPost,s=e.postComments,c=e.setPostComments,n=e.setError,o=Object(i.useState)(""),d=Object(a.a)(o,2),m=d[0],h=d[1],O=Object(i.useState)(""),f=Object(a.a)(O,2),v=f[0],y=f[1],g=Object(i.useState)(""),C=Object(a.a)(g,2),S=C[0],P=C[1],E=Object(i.useState)(0),k=Object(a.a)(E,2),w=k[0],T=k[1],U=Object(i.useState)(!1),I=Object(a.a)(U,2),L=I[0],D=I[1],F=Object(i.useState)({name:!1,email:!1,comment:!1}),M=Object(a.a)(F,2),A=M[0],B=M[1];Object(i.useEffect)((function(){N("/comments").then((function(e){var t=Math.max.apply(Math,Object(b.a)(e.map((function(e){return e.id}))))+1;T(t)}))}),[s]);var _=function(e){B(Object(u.a)(Object(u.a)({},A),{},Object(j.a)({},e,!1)))};return Object(l.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){if(e.preventDefault(),B({name:!m,email:!v,comment:!S}),m&&v&&S){D(!0);var a={id:w,postId:t.id,body:S,name:m,email:v};(function(e,t){return p("/comments?postId=".concat(e),t)})(t.id,a).then((function(){c([].concat(Object(b.a)(s),[a]))})).catch((function(){return n(x.Add)})).finally((function(){P(""),D(!1)}))}},children:[Object(l.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:r()("input",{"is-danger":A.name}),value:m,onChange:function(e){h(e.target.value),_("name")}}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-user"})}),A.name&&Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),A.name&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(l.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(l.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(l.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:r()("input",{"is-danger":A.email}),value:v,onChange:function(e){y(e.target.value),_("email")}}),Object(l.jsx)("span",{className:"icon is-small is-left",children:Object(l.jsx)("i",{className:"fas fa-envelope"})}),A.email&&Object(l.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(l.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),A.email&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(l.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(l.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:r()("textarea",{"is-danger":A.comment}),value:S,onChange:function(e){P(e.target.value),_("comment")}})}),A.comment&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:r()("button is-link",{"is-loading":L}),children:"Add"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){h(""),y(""),P(""),n(x.None),B({name:!1,email:!1,comment:!1})},children:"Clear"})})]})]})},g=function(e){var t=e.postComments,s=e.selectedPost,c=e.handleDeleteComment,n=e.setPostComments,o=e.isLoadingComments,r=e.error,d=e.setError,j=Object(i.useState)(!1),u=Object(a.a)(j,2),b=u[0],h=u[1];Object(i.useEffect)((function(){h(!1)}),[s]);var O=s.id,f=s.title,N=s.body;return Object(l.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(l.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(l.jsxs)("div",{className:"block",children:[Object(l.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(O,": ").concat(f)}),Object(l.jsx)("p",{"data-cy":"PostBody",children:N})]}),Object(l.jsxs)("div",{className:"block",children:[o&&Object(l.jsx)(m,{}),r!==x.None&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:r}),!t.length&&!o&&Object(l.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),t.map((function(e){var t=e.name,s=e.email;return Object(l.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(l.jsxs)("div",{className:"message-header",children:[Object(l.jsx)("a",{href:"mailto:".concat(s),"data-cy":"CommentAuthor",children:t}),Object(l.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return c(e.id)},children:"delete button"})]}),Object(l.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},O)})),!b&&!o&&Object(l.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return h(!0)},children:"Write a comment"})]}),b&&Object(l.jsx)(y,{selectedPost:s,postComments:t,setPostComments:n,setError:d})]})})},C=function(e){var t,s=e.users,c=e.selectedUserId,n=e.handleSelectedUser,o=Object(i.useState)(!1),d=Object(a.a)(o,2),m=d[0],j=d[1],u=Object(i.useRef)(null),b=null===(t=s.find((function(e){return e.id===c})))||void 0===t?void 0:t.name;Object(i.useEffect)((function(){var e=function(e){u.current&&!u.current.contains(e.target)&&j(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]);var h=function(){j(!m)};return Object(l.jsxs)("div",{ref:u,"data-cy":"UserSelector",className:r()("dropdown",{"is-active":m}),children:[Object(l.jsx)("div",{className:"dropdown-trigger",children:Object(l.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:h,children:[Object(l.jsx)("span",{children:c?b:"Choose a user"}),Object(l.jsx)("span",{className:"icon is-small",children:Object(l.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(l.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(l.jsx)("div",{className:"dropdown-content",children:s.map((function(e){var t=e.id,s=e.name;return Object(l.jsx)("a",{href:"#user-".concat(t),className:r()("dropdown-item",{"is-active":c===t}),onClick:function(){n(t),h()},children:s},t)}))})})]})},S=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)(null),o=Object(a.a)(n,2),j=o[0],u=o[1],b=Object(i.useState)([]),h=Object(a.a)(b,2),O=h[0],f=h[1],p=Object(i.useState)(!1),y=Object(a.a)(p,2),S=y[0],P=y[1],E=Object(i.useState)(null),k=Object(a.a)(E,2),w=k[0],T=k[1],U=Object(i.useState)([]),I=Object(a.a)(U,2),L=I[0],D=I[1],F=Object(i.useState)(!1),M=Object(a.a)(F,2),A=M[0],B=M[1],_=Object(i.useState)(!1),J=Object(a.a)(_,2),q=J[0],W=J[1],G=Object(i.useState)(x.None),R=Object(a.a)(G,2),Y=R[0],z=R[1];Object(i.useEffect)((function(){N("/users").then((function(e){return c(e)}))}),[]),Object(i.useEffect)((function(){var e;P(!0),j&&(z(x.None),(e=j,N("/posts?userId=".concat(e))).then((function(e){return f(e)})).catch((function(){return z(x.UserPosts)})).finally((function(){return P(!1)})))}),[j]),Object(i.useEffect)((function(){var e;w&&(B(!0),(e=w.id,N("/comments?postId=".concat(e))).then((function(e){return D(e)})).finally((function(){return B(!1)})))}),[w]);return Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"tile is-ancestor",children:[Object(l.jsx)("div",{className:"tile is-parent",children:Object(l.jsxs)("div",{className:"tile is-child box is-success",children:[Object(l.jsx)("div",{className:"block",children:Object(l.jsx)(C,{users:s,selectedUserId:j,handleSelectedUser:function(e){u(e),W(!1),z(x.None),T(null)}})}),Object(l.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!j&&Object(l.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),S&&j&&Object(l.jsx)(m,{}),Y===x.UserPosts&&Object(l.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:Y}),!S&&!O.length&&!Y&&Object(l.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),!!O.length&&!S&&Object(l.jsx)(d,{userPosts:O,handleSelectedPost:function(e){var t=O.find((function(t){return t.id===e}));t&&T(t),z(x.None)},selectedPost:w,handleToggleSidebar:function(e){W(e||!q)},isOpenSidebar:q})]})]})}),Object(l.jsx)("div",{"data-cy":"Sidebar",className:r()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":q}),children:Object(l.jsx)("div",{className:"tile is-child box is-success ",children:w&&Object(l.jsx)(g,{postComments:L,selectedPost:w,handleDeleteComment:function(e){var t;z(x.None),(t=e,v("/comments/".concat(t))).then((function(){var t=L.filter((function(t){return t.id!==e}));D(t)})).catch((function(){return z(x.Delete)}))},setPostComments:D,isLoadingComments:A,error:Y,setError:z})})})]})})})};n.a.render(Object(l.jsx)(S,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.35965c81.chunk.js.map