(function(t){function e(e){for(var i,r,s=e[0],l=e[1],d=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"metabox-holder",attrs:{id:"wpkanban"}},[a("div",{staticClass:"postbox-container"},[a("div",{staticClass:"meta-box-sortables"},[a("div",{staticClass:"postbox",class:{closed:t.board.isDashboardMetaboxClosed}},[a("button",{staticClass:"handlediv",attrs:{type:"button"},on:{click:t.togglePostbox}},[a("span",{staticClass:"toggle-indicator"})]),t._m(0),a("div",{staticClass:"inside"},[a("Toolbar"),a("router-view")],1)])])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"hndle"},[a("span",[t._v("WP Kanban")])])}],r=a("5530"),s={boards:{default:{title:"Default",id:30},ideas:{title:"Ideas",id:42},test:{title:"Test",id:51},"test-1":{title:"Test 1",id:61},"test-2":{title:"test 2",id:62},"test-3":{title:"Test 3",id:63},"test-4":{title:"Test 4",id:68}},currentBoard:{id:"30",title:"Default"},isDashboardMetaboxClosed:"",lists:[{term_id:31,name:"Backlog",slug:"backlog",term_group:0,term_taxonomy_id:31,taxonomy:"wpkanban_board",description:"For cards that are still being considered",parent:30,count:0,filter:"raw",cards:[]},{term_id:32,name:"Todo",slug:"todo",term_group:0,term_taxonomy_id:32,taxonomy:"wpkanban_board",description:"For cards that haven't been started yet",parent:30,count:2,filter:"raw",cards:[{title:"🎨 WP Kanbanner Theme",id:318,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=318&action=edit"},{title:"🔌 Link card blocks",id:328,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=328&action=edit"}]},{term_id:33,name:"Doing",slug:"default-doing",term_group:0,term_taxonomy_id:33,taxonomy:"wpkanban_board",description:"For cards that are actively being worked on",parent:30,count:2,filter:"raw",cards:[{title:"🔌 Device mockup block",id:322,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=322&action=edit"},{title:"🔌 WP Kanbanner",id:317,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=317&action=edit"}]},{term_id:34,name:"Done",slug:"done",term_group:0,term_taxonomy_id:34,taxonomy:"wpkanban_board",description:"For completed cards",parent:30,count:1,filter:"raw",cards:[{title:"🎨 Personal Theme",id:316,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=316&action=edit"}]}]},l=a("2f62"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.board.currentBoard?a("div",{staticStyle:{"margin-bottom":"10px"}},[t._m(0),a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.board.currentBoard.id,expression:"board.currentBoard.id",modifiers:{number:!0}}],attrs:{id:"wpkanban-board-selector"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var a="_value"in e?e._value:e.value;return t._n(a)}));t.$set(t.board.currentBoard,"id",e.target.multiple?a:a[0])},t.loadBoard]}},t._l(t.board.boards,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])})),0),a("ManageBoardButton",{staticClass:"button-primary"}),a("CreateBoardButton")],1):t._e()},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticStyle:{"margin-right":"10px"},attrs:{for:"wpkanban-board-selector"}},[a("strong",[t._v("Board:")])])}],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button tpd-m-l-10 thickbox",attrs:{href:t.thickboxURL,title:"Create Board"},on:{click:t.showModal}},[t._v("Create Board"),t.isModalVisible?a("Modal",{attrs:{id:"wpkanban-create-board-modal",thickbox:t.thickbox},on:{close:function(e){t.isModalVisible=!1}}},[a("div",{staticClass:"input-text-wrap tpd-m-t-10"},[a("label",{attrs:{for:"wpkanban-create-board-title"}},[a("strong",[t._v("Board Name:")])]),a("div",{staticClass:"tpd-m-t-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoardTitle,expression:"newBoardTitle"}],ref:"title",staticStyle:{width:"100%"},attrs:{id:"wpkanban-create-board-title",type:"text",autocomplete:"off"},domProps:{value:t.newBoardTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createBoard(e)},input:function(e){e.target.composing||(t.newBoardTitle=e.target.value)}}})])]),a("p",{staticClass:"input-text-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.shouldCreateDefaultColumns,expression:"shouldCreateDefaultColumns"}],ref:"checkbox",attrs:{id:"wpkanban-create-board-with-defaults-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.shouldCreateDefaultColumns)?t._i(t.shouldCreateDefaultColumns,null)>-1:t.shouldCreateDefaultColumns},on:{change:function(e){var a=t.shouldCreateDefaultColumns,i=e.target,n=!!i.checked;if(Array.isArray(a)){var o=null,r=t._i(a,o);i.checked?r<0&&(t.shouldCreateDefaultColumns=a.concat([o])):r>-1&&(t.shouldCreateDefaultColumns=a.slice(0,r).concat(a.slice(r+1)))}else t.shouldCreateDefaultColumns=n}}}),a("label",{attrs:{for:"wpkanban-create-board-with-defaults-checkbox"}},[a("strong",[t._v("Create board with default columns")])])]),a("div",[a("button",{staticClass:"button button-primary",attrs:{disabled:!t.newBoardTitle},on:{click:t.createBoard}},[t._v("Create Board")])])]):t._e()],1)},p=[],b=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default")],2)}),h=[],m={props:["thickbox"],mounted:function(){var t=this;setTimeout((function(){var e=document.querySelector("#TB_window"),a=document.querySelector("#TB_ajaxContent");a.style.width="auto",a.style.height="auto",e.style.width="".concat(t.thickbox.width+30,"px"),e.style.height="".concat(t.thickbox.height+30,"px"),e.style.left="50%",e.style.top="50%",e.style.marginLeft="".concat(-t.thickbox.width/2-15,"px"),e.style.marginTop="".concat(-t.thickbox.height/2-15,"px"),e.querySelector("input").focus(),window.jQuery("body").on("thickbox:removed",t.closeModal)}))},destroyed:function(){window.jQuery("#TB_closeWindowButton").click(),window.jQuery("body").off("thickbox:removed",this.closeModal)},methods:{closeModal:function(){window.jQuery("#TB_closeWindowButton").click(),this.$emit("close")}}},f=m,w=a("2877"),v=Object(w["a"])(f,b,h,!1,null,null,null),_=v.exports,k=(a("4160"),a("b64b"),a("159b"),{methods:{post:function(t,e,a){if(this.board.ajaxurl){var i=new FormData;i.append("action",t),i.append("_ajax_nonce",this.board.nonce),Object.keys(e).forEach((function(t){i.append(t,e[t])})),this.axios.post(this.board.ajaxurl,i).then((function(t){a&&a(t)}))}}}}),x={mixins:[k],components:{Modal:_},computed:Object(r["a"])({},Object(l["b"])(["board"]),{thickboxURL:function(){return"#TB_inline?width=".concat(this.thickbox.width,"&height=").concat(this.thickbox.height,"&inlineId=wpkanban-create-board-modal")}}),data:function(){return{isModalVisible:!1,shouldCreateDefaultColumns:!0,newBoardTitle:"",thickbox:{width:350,height:170}}},methods:{showModal:function(){this.shouldCreateDefaultColumns=!0,this.newBoardTitle="",this.isModalVisible=!0},createBoard:function(){var t=this;this.newBoardTitle&&this.post("wpkanban_create_board",{title:this.newBoardTitle,shouldCreateDefaultColumns:this.shouldCreateDefaultColumns},(function(e){return t.$store.commit("set",["board",e.data])})),this.isModalVisible=!1}}},C=x,g=Object(w["a"])(C,u,p,!1,null,null,null),y=g.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"button tpd-m-l-10 thickbox",attrs:{href:t.thickboxURL,title:"Manage Board"},on:{click:t.showModal}},[t._v("Manage Board"),t.isModalVisible?a("Modal",{attrs:{id:"wpkanban-manage-board-modal",thickbox:t.thickbox},on:{close:function(e){t.isModalVisible=!1}}},[a("div",{staticClass:"input-text-wrap tpd-m-t-10"},[a("label",{attrs:{for:"wpkanban-manage-board-title"}},[a("strong",[t._v("Board Name:")])]),a("div",{staticClass:"tpd-m-t-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoardTitle,expression:"newBoardTitle"}],ref:"title",staticStyle:{width:"100%"},attrs:{id:"wpkanban-manage-board-title",type:"text",autocomplete:"off"},domProps:{value:t.newBoardTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateBoard(e)},input:function(e){e.target.composing||(t.newBoardTitle=e.target.value)}}})])]),a("p",[a("button",{staticClass:"button tpd-button-error",on:{click:t.deleteBoard}},[t._v("Delete Board")]),a("button",{staticClass:"button button-primary tpd-float-r",attrs:{disabled:!t.newBoardTitle},on:{click:t.updateBoard}},[t._v("Update Board")])])]):t._e()],1)},O=[],B=a("2ef0"),T={mixins:[k],components:{Modal:_},computed:Object(r["a"])({},Object(l["b"])(["board"]),{thickboxURL:function(){return"#TB_inline?width=".concat(this.thickbox.width,"&height=").concat(this.thickbox.height,"&inlineId=wpkanban-manage-board-modal")}}),watch:{"board.currentBoard.title":function(t){this.newBoardTitle=t}},data:function(){return{isModalVisible:!1,shouldCreateDefaultColumns:!0,newBoardTitle:"",thickbox:{width:350,height:140}}},mounted:function(){this.newBoardTitle=this.board.currentBoard.title},methods:{showModal:function(){this.shouldCreateDefaultColumns=!0,this.isModalVisible=!0},updateBoard:function(){var t=this;this.newBoardTitle&&this.post("wpkanban_update_board",{title:this.newBoardTitle,boardId:this.board.currentBoard.id},(function(e){return t.$store.commit("set",["board",e.data])})),this.isModalVisible=!1},deleteBoard:function(){var t=this;confirm("Are you sure that you want to delete this board?")&&(this.post("wpkanban_delete_board",{boardId:this.board.currentBoard.id},(function(e){return t.$store.commit("set",["board",e.data])})),this.isModalVisible=!1)}}},j=T,M=Object(w["a"])(j,D,O,!1,null,null,null),L=M.exports,$={mixins:[k],components:{CreateBoardButton:y,ManageBoardButton:L},computed:Object(r["a"])({},Object(l["b"])(["board"])),methods:{loadBoard:function(){var t=this;this.post("wpkanban_change_dashboard_board",{board:this.board.currentBoard.id},(function(e){return t.$store.commit("set",["board",e.data])}))}}},E=$,I=Object(w["a"])(E,d,c,!1,null,null,null),P=I.exports,N={mixins:[k],components:{Toolbar:P},computed:Object(r["a"])({},Object(l["b"])(["board"])),mounted:function(){window.WPKanban?this.$store.commit("set",["board",window.WPKanban]):this.$store.commit("set",["board",s]),window.WPKanbanApp=this},methods:{togglePostbox:function(){this.$store.commit("set",["board.isDashboardMetaboxClosed",!this.board.isDashboardMetaboxClosed]),this.post("wpkanban_persist_dashboard_metabox_open_state",{isClosed:this.board.isDashboardMetaboxClosed})}}},R=N,V=(a("5c0b"),Object(w["a"])(R,n,o,!1,null,null,null)),S=V.exports,U=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wpkanban-board-wrap"},[a("div",[a("Container",{staticClass:"wpkanban-container",attrs:{orientation:"horizontal"},on:{drop:t.onColumnDrop}},[t._l(t.board.lists,(function(e,i){return a("Draggable",{key:i,staticClass:"wpkanban-list-column"},[a("ListTitle",{attrs:{list:e,listIdx:i}}),a("Container",{attrs:{"group-name":"col","get-child-payload":t.getCardPayload(e.term_id)},on:{drop:function(a){return t.onCardDrop(e.term_id,a)}}},t._l(e.cards,(function(e,n){return a("Draggable",{key:n,staticClass:"wpkanban-card-mini"},[a("CardTitle",{attrs:{card:e,cardIdx:n,listIdx:i,addedNewCard:t.addedNewCard},on:{newCardMounted:function(e){t.addedNewCard=!1}}})],1)})),1),a("button",{staticClass:"button wpkanban-add-new-list-button",on:{click:function(e){return t.addNewCard(i)}}},[t._v("New card")])],1)})),a("div",{staticClass:"clear"})],2),a("AddListButton")],1)])},z=[],K=(a("4de4"),a("c975"),a("a434"),a("2909")),F=a("3f7d"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"wpkanban-card-title"},[a("div",{staticClass:"wpkanban-card-title-wrap"},[a("span",{ref:"title",attrs:{contenteditable:t.isEditable},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.list.name))])]),a("div",{staticClass:"wpkanban-card-title-icon-button",on:{click:t.openDropdown}},[a("DropdownIcon")],1),a("CardDropdown",{attrs:{isOpen:t.isDropdownOpen},on:{close:function(e){t.isDropdownOpen=!1},rename:t.onRename,remove:t.onDelete}})],1)},W=[],J=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"}})])}),Q=[],q={name:"DropdownIcon"},G=q,X=Object(w["a"])(G,J,Q,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onDropdownOutsideClick,expression:"onDropdownOutsideClick"}],staticClass:"wpkanban-card-dropdown",class:{"wpkanban-visible":t.isOpen}},[a("li",{on:{click:t.rename}},[a("svg",{attrs:{viewBox:"0 0 576 512"}},[a("path",{attrs:{d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}})]),a("span",[t._v("Rename")])]),a("li",{staticClass:"wpkanban-separater"}),a("li",{on:{click:t.remove}},[a("svg",{attrs:{viewBox:"0 0 448 512"}},[a("path",{attrs:{d:"M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"}})]),a("span",[t._v("Delete")])])])},tt=[],et=a("c28b"),at=a.n(et),it={name:"CardDropdown",directives:{clickOutside:at.a.directive},props:["isOpen"],methods:{onDropdownOutsideClick:function(){this.$emit("close")},rename:function(){this.$emit("rename")},remove:function(){this.$emit("remove")},sendTo:function(){this.bus.$emit("showSendCardTo")}}},nt=it,ot=Object(w["a"])(nt,Z,tt,!1,null,null,null),rt=ot.exports,st={name:"ColumnTitle",mixins:[k],components:{DropdownIcon:Y,CardDropdown:rt},props:["list","listIdx"],computed:Object(r["a"])({},Object(l["b"])(["board"])),data:function(){return{title:"",isDropdownOpen:!1,isEditable:!1}},watch:{list:function(t){this.title=t.name}},mounted:function(){this.title=this.list.name},methods:{onTitleKeypress:function(t){"Enter"===t.key&&(this.$refs.title.blur(),t.preventDefault())},onTitleChange:function(t){this.title=t.target.innerText,this.board.ajaxurl&&this.persistTitle()},persistTitle:Object(B["debounce"])((function(t){this.post("wpkanban_update_list_title",{title:this.title,listId:this.list.term_id})}),500,{trailing:!0}),onBlur:function(){var t=Object(B["cloneDeep"])(this.board);t.lists[this.listIdx].name=this.title,this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.isEditable=!1},openDropdown:function(t){var e=this;setTimeout((function(){e.isDropdownOpen=!0}),0),t.preventDefault()},onRename:function(){var t=this;this.isDropdownOpen=!1,this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),document.execCommand("selectAll",!1,null)}),0)},onDelete:function(){var t=Object(B["cloneDeep"])(this.board),e=t.lists.splice(this.listIdx,1)[0];this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.board.ajaxurl&&this.persistListDeletion(e)},persistListDeletion:function(t){this.post("wpkanban_persist_list_delete",{id:t.term_id})}}},lt=st,dt=Object(w["a"])(lt,H,W,!1,null,null,null),ct=dt.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wpkanban-card-title"},[a("div",{staticClass:"wpkanban-card-title-wrap",on:{click:t.onClick}},[a("span",{ref:"title",attrs:{contenteditable:t.isEditable},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.card.title))])]),a("div",{staticClass:"wpkanban-card-title-icon-button",class:{"wpkanban-invisible":t.isDropdownOpen},on:{click:t.openDropdown}},[a("DropdownIcon")],1),a("CardDropdown",{attrs:{isOpen:t.isDropdownOpen},on:{close:function(e){t.isDropdownOpen=!1},rename:t.onRename,remove:t.onDelete}})],1)},pt=[],bt={name:"CardTitle",mixins:[k],components:{CardDropdown:rt,DropdownIcon:Y},props:["card","cardIdx","listIdx","addedNewCard"],computed:Object(r["a"])({},Object(l["b"])(["board"])),watch:{card:function(t){this.title=t.title,this.$refs.title.innerText=this.title}},data:function(){return{title:"",isEditable:!1,isDropdownOpen:!1}},mounted:function(){var t=this;this.title=this.card.title,this.addedNewCard&&(this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),t.$emit("newCardMounted")})))},methods:{onTitleKeypress:function(t){"Enter"===t.key&&(this.$refs.title.blur(),t.preventDefault())},onTitleChange:function(t){this.title=t.target.innerText,this.persistTitle()},persistTitle:Object(B["debounce"])((function(){this.post("wpkanban_update_card_title",{title:this.title,cardId:this.card.id})}),250,{trailing:!0}),onClick:function(){!this.isEditable&&this.card.editURL&&(window.location=this.card.editURL)},onBlur:function(){var t=Object(B["cloneDeep"])(this.board);t.lists[this.listIdx].cards[this.cardIdx].title=this.title,this.$store.commit("set",["board",t]),this.card.title=this.title,this.isDropdownOpen=!1,this.isEditable=!1},openDropdown:function(t){var e=this;setTimeout((function(){e.isDropdownOpen=!0}),0),t.preventDefault()},onRename:function(){var t=this;this.isDropdownOpen=!1,this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),document.execCommand("selectAll",!1,null)}),0)},onDelete:function(){var t=Object(B["cloneDeep"])(this.board),e=t.lists[this.listIdx].cards.splice(this.cardIdx,1)[0];this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.persistCardDeletion(e)},persistCardDeletion:function(t){this.post("wpkanban_persist_card_delete",{id:t.id})}}},ht=bt,mt=Object(w["a"])(ht,ut,pt,!1,null,null,null),ft=mt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wpkanban-create-list-wrap"},[a("a",{staticClass:"button thickbox",attrs:{href:t.thickboxURL,title:"Add new list"},on:{click:t.showModal}},[t._v("Add new list")]),t.isModalVisible?a("Modal",{attrs:{id:"wpkanban-create-list-modal",thickbox:t.thickbox},on:{close:function(e){t.isModalVisible=!1}}},[a("div",{staticClass:"input-text-wrap tpd-m-t-10"},[a("label",{attrs:{for:"wpkanban-add-list-title"}},[a("strong",[t._v("List name:")])]),a("div",{staticClass:"tpd-m-t-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newListTitle,expression:"newListTitle"}],ref:"title",staticStyle:{width:"100%"},attrs:{id:"wpkanban-add-list-title",type:"text",autocomplete:"off"},domProps:{value:t.newListTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createList(e)},input:function(e){e.target.composing||(t.newListTitle=e.target.value)}}})])]),a("p",{staticClass:"tpd-m-b-0"},[a("button",{staticClass:"button button-primary",attrs:{disabled:!t.newListTitle},on:{click:t.createList}},[t._v("Creat List")])])]):t._e()],1)},vt=[],_t={components:{Modal:_},mixins:[k],computed:Object(r["a"])({},Object(l["b"])(["board"]),{thickboxURL:function(){return"#TB_inline?width=".concat(this.thickbox.width,"&height=").concat(this.thickbox.height,"&inlineId=wpkanban-create-list-modal")}}),data:function(){return{newListTitle:"",isModalVisible:!1,thickbox:{width:350,height:140}}},methods:{showModal:function(){this.newListTitle="",this.isModalVisible=!0},createList:function(){var t=this;this.newListTitle&&this.post("wpkanban_create_list",{title:this.newListTitle,boardID:this.board.currentBoard.id,boardTitle:this.board.currentBoard.title,order:this.board.lists.length+1},(function(e){t.$store.commit("set",["board",e.data])})),this.isModalVisible=!1}}},kt=_t,xt=Object(w["a"])(kt,wt,vt,!1,null,null,null),Ct=xt.exports,gt={name:"Home",mixins:[k],components:{AddListButton:Ct,Container:F["Container"],Draggable:F["Draggable"],ListTitle:ct,CardTitle:ft},computed:Object(r["a"])({},Object(l["b"])(["board"])),data:function(){return{addedNewCard:!1}},methods:{onColumnDrop:function(t){var e=Object(B["cloneDeep"])(this.board);e.lists=this.applyDrag(e.lists,t),this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistColumnOrder()},onCardDrop:function(t,e){if(null!==e.removedIndex||null!==e.addedIndex){var a=Object(B["cloneDeep"])(this.board),i=a.lists.filter((function(e){return e.term_id===t}))[0],n=a.lists.indexOf(i),o=Object(B["cloneDeep"])(i);o.cards=this.applyDrag(o.cards,e),a.lists.splice(n,1,o),this.$store.commit("set",["board",a]),this.board.ajaxurl&&this.persistCardOrder(n)}},applyDrag:function(t,e){var a=e.removedIndex,i=e.addedIndex,n=e.payload;if(null===a&&null===i)return t;var o=Object(K["a"])(t),r=n;return null!==a&&(r=o.splice(a,1)[0]),null!==i&&o.splice(i,0,r),o},getCardPayload:function(t){var e=this;return function(a){return e.board.lists.filter((function(e){return e.term_id===t}))[0].cards[a]}},addNewCard:function(t){var e=Object(B["cloneDeep"])(this.board);e.lists[t].cards.push({title:" ",id:-1}),this.addedNewCard=!0,this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistNewCard(t)},persistColumnOrder:function(){new FormData;var t=[];this.board.lists.forEach((function(e){t.push(e.term_id)})),this.post("wpkanban_persist_list_order",{order:JSON.stringify(t)})},persistCardOrder:function(t){new FormData;var e=[];this.board.lists[t].cards.forEach((function(t){e.push(t.id)})),this.post("wpkanban_persist_card_order",{order:JSON.stringify(e),listId:this.board.lists[t].term_id})},persistNewCard:function(t){var e=this,a=(new FormData,this.board.lists[t].cards.length-1);this.post("wpkanban_persist_new_card",{listId:this.board.lists[t].term_id,order:a},(function(i){e.board.lists[t].cards[a].id=i.data.id,e.board.lists[t].cards[a].editURL=i.data.editURL}))}}},yt=gt,Dt=Object(w["a"])(yt,A,z,!1,null,null,null),Ot=Dt.exports;i["a"].use(U["a"]);var Bt=[{path:"/",name:"Home",component:Ot}],Tt=new U["a"]({routes:Bt}),jt=Tt;i["a"].use(l["a"]);var Mt=new l["a"].Store({state:{board:{}},mutations:{set:function(t,e){Object(B["set"])(t,e[0],e[1]),e[2]&&localStore.set(e[0],e[1])}},actions:{},modules:{}}),Lt=a("bc3a"),$t=a.n(Lt),Et=a("a7fe"),It=a.n(Et);i["a"].use(It.a,$t.a),i["a"].config.productionTip=!1,i["a"].prototype.bus=new i["a"],document.addEventListener("DOMContentLoaded",(function(){new i["a"]({router:jt,store:Mt,render:function(t){return t(S)}}).$mount("#wpkanban")}),!1)},"5c0b":function(t,e,a){"use strict";var i=a("9c0c"),n=a.n(i);n.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.js.map