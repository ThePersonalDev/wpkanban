(function(t){function e(e){for(var a,s,r=e[0],l=e[1],d=e[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,d||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var a={},n={app:0},o=[];function s(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=a,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(i,a,function(e){return t[e]}.bind(null,a));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"metabox-holder",attrs:{id:"wpkanban"}},[i("div",{staticClass:"postbox-container"},[i("div",{staticClass:"meta-box-sortables"},[i("div",{staticClass:"postbox",class:{closed:t.board.isDashboardMetaboxClosed}},[i("button",{staticClass:"handlediv",attrs:{type:"button"},on:{click:t.togglePostbox}},[i("span",{staticClass:"toggle-indicator"})]),t._m(0),i("div",{staticClass:"inside"},[i("Toolbar"),i("router-view")],1)])])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h2",{staticClass:"hndle"},[i("span",[t._v("WP Kanban")])])}],s=i("5530"),r={boards:{default:{title:"Default",id:30},ideas:{title:"Ideas",id:42},test:{title:"Test",id:51},"test-1":{title:"Test 1",id:61},"test-2":{title:"test 2",id:62},"test-3":{title:"Test 3",id:63},"test-4":{title:"Test 4",id:68}},currentBoard:{id:"30",title:"Default"},isDashboardMetaboxClosed:"",lists:[{term_id:31,name:"Backlog",slug:"backlog",term_group:0,term_taxonomy_id:31,taxonomy:"wpkanban_board",description:"For cards that are still being considered",parent:30,count:0,filter:"raw",cards:[]},{term_id:32,name:"Todo",slug:"todo",term_group:0,term_taxonomy_id:32,taxonomy:"wpkanban_board",description:"For cards that haven't been started yet",parent:30,count:2,filter:"raw",cards:[{title:"🎨 WP Kanbanner Theme",id:318,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=318&action=edit"},{title:"🔌 Link card blocks",id:328,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=328&action=edit"}]},{term_id:33,name:"Doing",slug:"default-doing",term_group:0,term_taxonomy_id:33,taxonomy:"wpkanban_board",description:"For cards that are actively being worked on",parent:30,count:2,filter:"raw",cards:[{title:"🔌 Device mockup block",id:322,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=322&action=edit"},{title:"🔌 WP Kanbanner",id:317,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=317&action=edit"}]},{term_id:34,name:"Done",slug:"done",term_group:0,term_taxonomy_id:34,taxonomy:"wpkanban_board",description:"For completed cards",parent:30,count:1,filter:"raw",cards:[{title:"🎨 Personal Theme",id:316,editURL:"http://thepersonaldev.local/wp-admin/post.php?post=316&action=edit"}]}]},l=i("2f62"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.board.currentBoard?i("div",{staticStyle:{"margin-bottom":"10px"}},[t._m(0),i("select",{directives:[{name:"model",rawName:"v-model.number",value:t.board.currentBoard.id,expression:"board.currentBoard.id",modifiers:{number:!0}}],attrs:{id:"wpkanban-board-selector"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var i="_value"in e?e._value:e.value;return t._n(i)}));t.$set(t.board.currentBoard,"id",e.target.multiple?i:i[0])},t.loadBoard]}},t._l(t.board.boards,(function(e){return i("option",{domProps:{value:e.id}},[t._v(t._s(e.title))])})),0),i("CreateBoardButton")],1):t._e()},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticStyle:{"margin-right":"10px"},attrs:{for:"wpkanban-board-selector"}},[i("strong",[t._v("Board:")])])}],u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"button tpd-m-l-10 thickbox",attrs:{href:t.thickboxURL,title:"Create Board"},on:{click:t.showModal}},[t._v("Create Board"),t.isModalVisible?i("Modal",{attrs:{id:"wpkanban-create-board-modal",thickbox:t.thickbox},on:{close:function(e){t.isModalVisible=!1}}},[i("div",{staticClass:"input-text-wrap tpd-m-t-10"},[i("label",{attrs:{for:"wpkanban-create-board-title"}},[i("strong",[t._v("Board Name:")])]),i("div",{staticClass:"tpd-m-t-10"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoardTitle,expression:"newBoardTitle"}],ref:"title",staticStyle:{width:"100%"},attrs:{id:"wpkanban-create-board-title",type:"text",autocomplete:"off"},domProps:{value:t.newBoardTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createBoard(e)},input:function(e){e.target.composing||(t.newBoardTitle=e.target.value)}}})])]),i("p",{staticClass:"input-text-wrap"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.shouldCreateDefaultColumns,expression:"shouldCreateDefaultColumns"}],ref:"checkbox",attrs:{id:"wpkanban-create-board-with-defaults-checkbox",type:"checkbox"},domProps:{checked:Array.isArray(t.shouldCreateDefaultColumns)?t._i(t.shouldCreateDefaultColumns,null)>-1:t.shouldCreateDefaultColumns},on:{change:function(e){var i=t.shouldCreateDefaultColumns,a=e.target,n=!!a.checked;if(Array.isArray(i)){var o=null,s=t._i(i,o);a.checked?s<0&&(t.shouldCreateDefaultColumns=i.concat([o])):s>-1&&(t.shouldCreateDefaultColumns=i.slice(0,s).concat(i.slice(s+1)))}else t.shouldCreateDefaultColumns=n}}}),i("label",{attrs:{for:"wpkanban-create-board-with-defaults-checkbox"}},[i("strong",[t._v("Create board with default columns")])])]),i("div",[i("button",{staticClass:"button button-primary",attrs:{disabled:!t.newBoardTitle},on:{click:t.createBoard}},[t._v("Create Board")])])]):t._e()],1)},p=[],h=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._t("default")],2)}),b=[],m={props:["thickbox"],mounted:function(){var t=this;setTimeout((function(){var e=document.querySelector("#TB_window"),i=document.querySelector("#TB_ajaxContent");i.style.width="auto",i.style.height="auto",e.style.width="".concat(t.thickbox.width+30,"px"),e.style.height="".concat(t.thickbox.height+30,"px"),e.style.left="50%",e.style.top="50%",e.style.marginLeft="".concat(-t.thickbox.width/2-15,"px"),e.style.marginTop="".concat(-t.thickbox.height/2-15,"px"),e.querySelector("input").focus(),window.jQuery("body").on("thickbox:removed",t.closeModal)}))},destroyed:function(){window.jQuery("#TB_closeWindowButton").click(),window.jQuery("body").off("thickbox:removed",this.closeModal)},methods:{closeModal:function(){window.jQuery("#TB_closeWindowButton").click(),this.$emit("close")}}},f=m,w=i("2877"),v=Object(w["a"])(f,h,b,!1,null,null,null),k=v.exports,_=(i("4160"),i("b64b"),i("159b"),{methods:{post:function(t,e,i){if(this.board.ajaxurl){var a=new FormData;a.append("action",t),a.append("_ajax_nonce",this.board.nonce),Object.keys(e).forEach((function(t){a.append(t,e[t])})),this.axios.post(this.board.ajaxurl,a).then((function(t){i&&i(t)}))}}}}),x={mixins:[_],components:{Modal:k},computed:Object(s["a"])({},Object(l["b"])(["board"]),{thickboxURL:function(){return"#TB_inline?width=".concat(this.thickbox.width,"&height=").concat(this.thickbox.height,"&inlineId=wpkanban-create-board-modal")}}),data:function(){return{isModalVisible:!1,shouldCreateDefaultColumns:!0,newBoardTitle:"",thickbox:{width:350,height:170}}},methods:{showModal:function(){this.shouldCreateDefaultColumns=!0,this.newBoardTitle="",this.isModalVisible=!0},createBoard:function(){var t=this;this.newBoardTitle&&this.post("wpkanban_create_board",{title:this.newBoardTitle,shouldCreateDefaultColumns:this.shouldCreateDefaultColumns},(function(e){return t.$store.commit("set",["board",e.data])})),this.isModalVisible=!1}}},C=x,g=Object(w["a"])(C,u,p,!1,null,null,null),y=g.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"button tpd-m-l-10 thickbox",attrs:{href:t.thickboxURL,title:"Manage Board"},on:{click:t.showModal}},[t._v("Manage Board"),t.isModalVisible?i("Modal",{attrs:{id:"wpkanban-manage-board-modal",thickbox:t.thickbox},on:{close:function(e){t.isModalVisible=!1}}},[i("div",{staticClass:"input-text-wrap tpd-m-t-10"},[i("label",{attrs:{for:"wpkanban-manage-board-title"}},[i("strong",[t._v("Board Name:")])]),i("div",{staticClass:"tpd-m-t-10"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoardTitle,expression:"newBoardTitle"}],ref:"title",staticStyle:{width:"100%"},attrs:{id:"wpkanban-manage-board-title",type:"text",autocomplete:"off"},domProps:{value:t.newBoardTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createBoard(e)},input:function(e){e.target.composing||(t.newBoardTitle=e.target.value)}}})])]),i("p",[i("button",{staticClass:"button button-primary",attrs:{disabled:!t.newBoardTitle},on:{click:t.updateBoard}},[t._v("Update Board")]),i("button",{staticClass:"button button-error tpd-float-r",on:{click:t.deleteBoard}},[t._v("Delete Board")])])]):t._e()],1)},O=[],T={components:{Modal:k},computed:Object(s["a"])({},Object(l["b"])(["board"]),{thickboxURL:function(){return"#TB_inline?width=".concat(this.thickbox.width,"&height=").concat(this.thickbox.height,"&inlineId=wpkanban-manage-board-modal")}}),watch:{"board.currentBoard.title":function(t){this.newBoardTitle=t}},data:function(){return{isModalVisible:!1,shouldCreateDefaultColumns:!0,newBoardTitle:"",thickbox:{width:350,height:140}}},mounted:function(){this.newBoardTitle=this.board.currentBoard.title},methods:{showModal:function(){this.shouldCreateDefaultColumns=!0,this.isModalVisible=!0},updateBoard:function(){console.log("update"),this.isModalVisible=!1},deleteBoard:function(){console.log("delete"),this.isModalVisible=!1}}},B=T,j=Object(w["a"])(B,D,O,!1,null,null,null),M=j.exports,L={mixins:[_],components:{CreateBoardButton:y,ManageBoardButton:M},computed:Object(s["a"])({},Object(l["b"])(["board"])),methods:{loadBoard:function(){var t=this;this.post("wpkanban_change_dashboard_board",{board:this.board.currentBoard.id},(function(e){return t.$store.commit("set",["board",e.data])}))}}},$=L,E=Object(w["a"])($,d,c,!1,null,null,null),I=E.exports,P={mixins:[_],components:{Toolbar:I},computed:Object(s["a"])({},Object(l["b"])(["board"])),mounted:function(){window.WPKanban?this.$store.commit("set",["board",window.WPKanban]):this.$store.commit("set",["board",r]),window.WPKanbanApp=this},methods:{togglePostbox:function(){this.$store.commit("set",["board.isDashboardMetaboxClosed",!this.board.isDashboardMetaboxClosed]),this.post("wpkanban_persist_dashboard_metabox_open_state",{isClosed:this.board.isDashboardMetaboxClosed})}}},N=P,R=(i("5c0b"),Object(w["a"])(N,n,o,!1,null,null,null)),V=R.exports,S=i("8c4f"),U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wpkanban-board-wrap"},[i("div",[i("Container",{staticClass:"wpkanban-container",attrs:{orientation:"horizontal"},on:{drop:t.onColumnDrop}},[t._l(t.board.lists,(function(e,a){return i("Draggable",{key:a,staticClass:"wpkanban-list-column"},[i("ListTitle",{attrs:{list:e,listIdx:a}}),i("Container",{attrs:{"group-name":"col","get-child-payload":t.getCardPayload(e.term_id)},on:{drop:function(i){return t.onCardDrop(e.term_id,i)}}},t._l(e.cards,(function(e,n){return i("Draggable",{key:n,staticClass:"wpkanban-card-mini"},[i("CardTitle",{attrs:{card:e,cardIdx:n,listIdx:a,addedNewCard:t.addedNewCard},on:{newCardMounted:function(e){t.addedNewCard=!1}}})],1)})),1),i("button",{staticClass:"button wpkanban-add-new-list-button",on:{click:function(e){return t.addNewCard(a)}}},[t._v("New card")])],1)})),i("div",{staticClass:"clear"})],2),i("AddListButton")],1)])},A=[],z=(i("4de4"),i("c975"),i("a434"),i("2909")),K=i("3f7d"),F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",{staticClass:"wpkanban-card-title"},[i("div",{staticClass:"wpkanban-card-title-wrap"},[i("span",{ref:"title",attrs:{contenteditable:t.isEditable},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.list.name))])]),i("div",{staticClass:"wpkanban-card-title-icon-button",on:{click:t.openDropdown}},[i("DropdownIcon")],1),i("CardDropdown",{attrs:{isOpen:t.isDropdownOpen},on:{close:function(e){t.isDropdownOpen=!1},rename:t.onRename,remove:t.onDelete}})],1)},H=[],W=(i("b0c0"),i("2ef0")),J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{viewBox:"0 0 512 512"}},[i("path",{attrs:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"}})])},Q=[],q={name:"DropdownIcon"},G=q,X=Object(w["a"])(G,J,Q,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onDropdownOutsideClick,expression:"onDropdownOutsideClick"}],staticClass:"wpkanban-card-dropdown",class:{"wpkanban-visible":t.isOpen}},[i("li",{on:{click:t.rename}},[i("svg",{attrs:{viewBox:"0 0 576 512"}},[i("path",{attrs:{d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"}})]),i("span",[t._v("Rename")])]),i("li",{staticClass:"wpkanban-separater"}),i("li",{on:{click:t.remove}},[i("svg",{attrs:{viewBox:"0 0 448 512"}},[i("path",{attrs:{d:"M432 80h-82.4l-34-56.7A48 48 0 0 0 274.4 0H173.6a48 48 0 0 0-41.2 23.3L98.4 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16l21.2 339a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM173.6 48h100.8l19.2 32H154.4zm173.3 416H101.11l-21-336h287.8z"}})]),i("span",[t._v("Delete")])])])},tt=[],et=i("c28b"),it=i.n(et),at={name:"CardDropdown",directives:{clickOutside:it.a.directive},props:["isOpen"],methods:{onDropdownOutsideClick:function(){this.$emit("close")},rename:function(){this.$emit("rename")},remove:function(){this.$emit("remove")},sendTo:function(){this.bus.$emit("showSendCardTo")}}},nt=at,ot=Object(w["a"])(nt,Z,tt,!1,null,null,null),st=ot.exports,rt={name:"ColumnTitle",mixins:[_],components:{DropdownIcon:Y,CardDropdown:st},props:["list","listIdx"],computed:Object(s["a"])({},Object(l["b"])(["board"])),data:function(){return{title:"",isDropdownOpen:!1,isEditable:!1}},watch:{list:function(t){this.title=t.name}},mounted:function(){this.title=this.list.name},methods:{onTitleKeypress:function(t){"Enter"===t.key&&(this.$refs.title.blur(),t.preventDefault())},onTitleChange:function(t){this.title=t.target.innerText,this.board.ajaxurl&&this.persistTitle()},persistTitle:Object(W["debounce"])((function(t){this.post("wpkanban_update_list_title",{title:this.title,listId:this.list.term_id})}),500,{trailing:!0}),onBlur:function(){var t=Object(W["cloneDeep"])(this.board);t.lists[this.listIdx].name=this.title,this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.isEditable=!1},openDropdown:function(t){var e=this;setTimeout((function(){e.isDropdownOpen=!0}),0),t.preventDefault()},onRename:function(){var t=this;this.isDropdownOpen=!1,this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),document.execCommand("selectAll",!1,null)}),0)},onDelete:function(){var t=Object(W["cloneDeep"])(this.board),e=t.lists.splice(this.listIdx,1)[0];this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.board.ajaxurl&&this.persistListDeletion(e)},persistListDeletion:function(t){this.post("wpkanban_persist_list_delete",{id:t.term_id})}}},lt=rt,dt=Object(w["a"])(lt,F,H,!1,null,null,null),ct=dt.exports,ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wpkanban-card-title"},[i("div",{staticClass:"wpkanban-card-title-wrap",on:{click:t.onClick}},[i("span",{ref:"title",attrs:{contenteditable:t.isEditable},on:{input:t.onTitleChange,keypress:t.onTitleKeypress,blur:t.onBlur}},[t._v(t._s(t.card.title))])]),i("div",{staticClass:"wpkanban-card-title-icon-button",class:{"wpkanban-invisible":t.isDropdownOpen},on:{click:t.openDropdown}},[i("DropdownIcon")],1),i("CardDropdown",{attrs:{isOpen:t.isDropdownOpen},on:{close:function(e){t.isDropdownOpen=!1},rename:t.onRename,remove:t.onDelete}})],1)},pt=[],ht={name:"CardTitle",mixins:[_],components:{CardDropdown:st,DropdownIcon:Y},props:["card","cardIdx","listIdx","addedNewCard"],computed:Object(s["a"])({},Object(l["b"])(["board"])),watch:{card:function(t){this.title=t.title,this.$refs.title.innerText=this.title}},data:function(){return{title:"",isEditable:!1,isDropdownOpen:!1}},mounted:function(){var t=this;this.title=this.card.title,this.addedNewCard&&(this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),t.$emit("newCardMounted")})))},methods:{onTitleKeypress:function(t){"Enter"===t.key&&(this.$refs.title.blur(),t.preventDefault())},onTitleChange:function(t){this.title=t.target.innerText,this.persistTitle()},persistTitle:Object(W["debounce"])((function(){this.post("wpkanban_update_card_title",{title:this.title,cardId:this.card.id})}),250,{trailing:!0}),onClick:function(){!this.isEditable&&this.card.editURL&&(window.location=this.card.editURL)},onBlur:function(){var t=Object(W["cloneDeep"])(this.board);t.lists[this.listIdx].cards[this.cardIdx].title=this.title,this.$store.commit("set",["board",t]),this.card.title=this.title,this.isDropdownOpen=!1,this.isEditable=!1},openDropdown:function(t){var e=this;setTimeout((function(){e.isDropdownOpen=!0}),0),t.preventDefault()},onRename:function(){var t=this;this.isDropdownOpen=!1,this.isEditable=!0,setTimeout((function(){t.$refs.title.focus(),document.execCommand("selectAll",!1,null)}),0)},onDelete:function(){var t=Object(W["cloneDeep"])(this.board),e=t.lists[this.listIdx].cards.splice(this.cardIdx,1)[0];this.$store.commit("set",["board",t]),this.isDropdownOpen=!1,this.persistCardDeletion(e)},persistCardDeletion:function(t){this.post("wpkanban_persist_card_delete",{id:t.id})}}},bt=ht,mt=Object(w["a"])(bt,ut,pt,!1,null,null,null),ft=mt.exports,wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wpkanban-create-list-wrap"},[i("a",{staticClass:"button thickbox",attrs:{href:t.thickboxURL,title:"Add new list"},on:{click:t.showModal}},[t._v("Add new list")]),t.isModalVisible?i("Modal",{attrs:{id:"wpkanban-create-list-modal",thickbox:t.thickbox},on:{close:function(e){t.isModalVisible=!1}}},[i("div",{staticClass:"input-text-wrap tpd-m-t-10"},[i("label",{attrs:{for:"wpkanban-add-list-title"}},[i("strong",[t._v("List name:")])]),i("div",{staticClass:"tpd-m-t-10"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newListTitle,expression:"newListTitle"}],ref:"title",staticStyle:{width:"100%"},attrs:{id:"wpkanban-add-list-title",type:"text",autocomplete:"off"},domProps:{value:t.newListTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createList(e)},input:function(e){e.target.composing||(t.newListTitle=e.target.value)}}})])]),i("p",{staticClass:"tpd-m-b-0"},[i("button",{staticClass:"button button-primary",attrs:{disabled:!t.newListTitle},on:{click:t.createList}},[t._v("Creat List")])])]):t._e()],1)},vt=[],kt={components:{Modal:k},mixins:[_],computed:Object(s["a"])({},Object(l["b"])(["board"]),{thickboxURL:function(){return"#TB_inline?width=".concat(this.thickbox.width,"&height=").concat(this.thickbox.height,"&inlineId=wpkanban-create-list-modal")}}),data:function(){return{newListTitle:"",isModalVisible:!1,thickbox:{width:350,height:140}}},methods:{showModal:function(){this.newListTitle="",this.isModalVisible=!0},createList:function(){var t=this;this.newListTitle&&this.post("wpkanban_create_list",{title:this.newListTitle,boardID:this.board.currentBoard.id,boardTitle:this.board.currentBoard.title,order:this.board.lists.length+1},(function(e){t.$store.commit("set",["board",e.data])})),this.isModalVisible=!1}}},_t=kt,xt=Object(w["a"])(_t,wt,vt,!1,null,null,null),Ct=xt.exports,gt={name:"Home",mixins:[_],components:{AddListButton:Ct,Container:K["Container"],Draggable:K["Draggable"],ListTitle:ct,CardTitle:ft},computed:Object(s["a"])({},Object(l["b"])(["board"])),data:function(){return{addedNewCard:!1}},methods:{onColumnDrop:function(t){var e=Object(W["cloneDeep"])(this.board);e.lists=this.applyDrag(e.lists,t),this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistColumnOrder()},onCardDrop:function(t,e){if(null!==e.removedIndex||null!==e.addedIndex){var i=Object(W["cloneDeep"])(this.board),a=i.lists.filter((function(e){return e.term_id===t}))[0],n=i.lists.indexOf(a),o=Object(W["cloneDeep"])(a);o.cards=this.applyDrag(o.cards,e),i.lists.splice(n,1,o),this.$store.commit("set",["board",i]),this.board.ajaxurl&&this.persistCardOrder(n)}},applyDrag:function(t,e){var i=e.removedIndex,a=e.addedIndex,n=e.payload;if(null===i&&null===a)return t;var o=Object(z["a"])(t),s=n;return null!==i&&(s=o.splice(i,1)[0]),null!==a&&o.splice(a,0,s),o},getCardPayload:function(t){var e=this;return function(i){return e.board.lists.filter((function(e){return e.term_id===t}))[0].cards[i]}},addNewCard:function(t){var e=Object(W["cloneDeep"])(this.board);e.lists[t].cards.push({title:" ",id:-1}),this.addedNewCard=!0,this.$store.commit("set",["board",e]),this.board.ajaxurl&&this.persistNewCard(t)},persistColumnOrder:function(){new FormData;var t=[];this.board.lists.forEach((function(e){t.push(e.term_id)})),this.post("wpkanban_persist_list_order",{order:JSON.stringify(t)})},persistCardOrder:function(t){new FormData;var e=[];this.board.lists[t].cards.forEach((function(t){e.push(t.id)})),this.post("wpkanban_persist_card_order",{order:JSON.stringify(e),listId:this.board.lists[t].term_id})},persistNewCard:function(t){var e=this,i=(new FormData,this.board.lists[t].cards.length-1);this.post("wpkanban_persist_new_card",{listId:this.board.lists[t].term_id,order:i},(function(a){e.board.lists[t].cards[i].id=a.data.id,e.board.lists[t].cards[i].editURL=a.data.editURL}))}}},yt=gt,Dt=Object(w["a"])(yt,U,A,!1,null,null,null),Ot=Dt.exports;a["a"].use(S["a"]);var Tt=[{path:"/",name:"Home",component:Ot}],Bt=new S["a"]({routes:Tt}),jt=Bt;a["a"].use(l["a"]);var Mt=new l["a"].Store({state:{board:{}},mutations:{set:function(t,e){Object(W["set"])(t,e[0],e[1]),e[2]&&localStore.set(e[0],e[1])}},actions:{},modules:{}}),Lt=i("bc3a"),$t=i.n(Lt),Et=i("a7fe"),It=i.n(Et);a["a"].use(It.a,$t.a),a["a"].config.productionTip=!1,a["a"].prototype.bus=new a["a"],document.addEventListener("DOMContentLoaded",(function(){new a["a"]({router:jt,store:Mt,render:function(t){return t(V)}}).$mount("#wpkanban")}),!1)},"5c0b":function(t,e,i){"use strict";var a=i("9c0c"),n=i.n(a);n.a},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.js.map