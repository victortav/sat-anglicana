YUI.add("moodle-atto_image-button",function(e,t){var n={RESPONSIVE:"img-responsive",INPUTALIGNMENT:"atto_image_alignment",INPUTALT:"atto_image_altentry",INPUTHEIGHT:"atto_image_heightentry",INPUTSUBMIT:"atto_image_urlentrysubmit",INPUTURL:"atto_image_urlentry",INPUTSIZE:"atto_image_size",INPUTWIDTH:"atto_image_widthentry",IMAGEALTWARNING:"atto_image_altwarning",IMAGEBROWSER:"openimagebrowser",IMAGEPRESENTATION:"atto_image_presentation",INPUTCONSTRAIN:"atto_image_constrain",INPUTCUSTOMSTYLE:"atto_image_customstyle",IMAGEPREVIEW:"atto_image_preview",IMAGEPREVIEWBOX:"atto_image_preview_box",ALIGNSETTINGS:"atto_image_button"},r={INPUTURL:"."+n.INPUTURL},i=[{name:"verticalAlign",str:"alignment_top",value:"text-top",margin:"0 0.5em"},{name:"verticalAlign",str:"alignment_middle",value:"middle",margin:"0 0.5em"},{name:"verticalAlign",str:"alignment_bottom",value:"text-bottom",margin:"0 0.5em",isDefault:!0},{name:"float",str:"alignment_left",value:"left",margin:"0 0.5em 0 0"},{name:"float",str:"alignment_right",value:"right",margin:"0 0 0 0.5em"}],s={ISPERCENT:/\d+%/},o="atto_image",u='<form class="atto_form"><label for="{{elementid}}_{{CSS.INPUTURL}}">{{get_string "enterurl" component}}</label><input class="fullwidth {{CSS.INPUTURL}}" type="url" id="{{elementid}}_{{CSS.INPUTURL}}" size="32"/><br/>{{#if showFilepicker}}<button class="{{CSS.IMAGEBROWSER}}" type="button">{{get_string "browserepositories" component}}</button>{{/if}}<div style="display:none" role="alert" class="warning {{CSS.IMAGEALTWARNING}}">{{get_string "presentationoraltrequired" component}}</div><label for="{{elementid}}_{{CSS.INPUTALT}}">{{get_string "enteralt" component}}</label><input class="fullwidth {{CSS.INPUTALT}}" type="text" value="" id="{{elementid}}_{{CSS.INPUTALT}}" size="32"/><br/><input type="checkbox" class="{{CSS.IMAGEPRESENTATION}}" id="{{elementid}}_{{CSS.IMAGEPRESENTATION}}"/><label class="sameline" for="{{elementid}}_{{CSS.IMAGEPRESENTATION}}">{{get_string "presentation" component}}</label><br/><label class="sameline" for="{{elementid}}_{{CSS.INPUTSIZE}}">{{get_string "size" component}}</label><div id="{{elementid}}_{{CSS.INPUTSIZE}}" class="{{CSS.INPUTSIZE}}"><label class="accesshide" for="{{elementid}}_{{CSS.INPUTWIDTH}}">{{get_string "width" component}}</label><input type="text" class="{{CSS.INPUTWIDTH}} input-mini" id="{{elementid}}_{{CSS.INPUTWIDTH}}" size="4"/> x <label class="accesshide" for="{{elementid}}_{{CSS.INPUTHEIGHT}}">{{get_string "height" component}}</label><input type="text" class="{{CSS.INPUTHEIGHT}} input-mini" id="{{elementid}}_{{CSS.INPUTHEIGHT}}" size="4"/><input type="checkbox" class="{{CSS.INPUTCONSTRAIN}} sameline" id="{{elementid}}_{{CSS.INPUTCONSTRAIN}}"/><label for="{{elementid}}_{{CSS.INPUTCONSTRAIN}}">{{get_string "constrain" component}}</label></div><label class="sameline" for="{{elementid}}_{{CSS.INPUTALIGNMENT}}">{{get_string "alignment" component}}</label><select class="{{CSS.INPUTALIGNMENT}}" id="{{elementid}}_{{CSS.INPUTALIGNMENT}}">{{#each alignments}}<option value="{{value}}">{{get_string str ../component}}</option>{{/each}}</select><input type="hidden" class="{{CSS.INPUTCUSTOMSTYLE}}"/><br/><div class="mdl-align"><div class="{{CSS.IMAGEPREVIEWBOX}}"><img src="#" class="{{CSS.IMAGEPREVIEW}}" alt="" style="display: none;"/></div><button class="{{CSS.INPUTSUBMIT}}" type="submit">{{get_string "saveimage" component}}</button></div></form>',a='<img src="{{url}}" alt="{{alt}}" {{#if width}}width="{{width}}" {{/if}}{{#if height}}height="{{height}}" {{/if}}{{#if presentation}}role="presentation" {{/if}}{{#if customstyle}}style="{{customstyle}}" {{/if}}{{#if classlist}}class="{{classlist}}" {{/if}}{{#if id}}id="{{id}}" {{/if}}/>';e.namespace("M.atto_image").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_currentSelection:null,_selectedImage:null,_form:null,_rawImageDimensions:null,initializer:function(){this.addButton({icon:"e/insert_edit_image",callback:this._displayDialogue,tags:"img",tagMatchRequiresAll:!1}),this.editor.delegate("dblclick",this._displayDialogue,"img",this),this.editor.delegate("click",this._handleClick,"img",this),this.editor.on("drop",this._handleDragDrop,this),this.editor.on("dragover",function(e){e.preventDefault()},this),this.editor.on("dragenter",function(e){e.preventDefault()},this)},_handleDragDrop:function(t){var n=this,r=this.get("host"),i=e.Handlebars.compile(a);r.saveSelection(),t=t._event;var s=t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files.length;if(s&&/^image\//.test(t.dataTransfer.files[0].type)){var u=r.get("filepickeroptions").image,f=u.savepath===undefined?"/":u.savepath,l=new FormData,c=0,h="",p=new XMLHttpRequest,d="",v=Object.keys(u.repositories);t.preventDefault(),t.stopPropagation(),l.append("repo_upload_file",t.dataTransfer.files[0]),l.append("itemid",u.itemid);for(var m=0;m<v.length;m++)if(u.repositories[v[m]].type==="upload"){l.append("repo_id",u.repositories[v[m]].id);break}return l.append("env",u.env),l.append("sesskey",M.cfg.sesskey),l.append("client_id",u.client_id),l.append("savepath",f),l.append("ctx_id",u.context.id),c=(new Date).getTime(),h="moodleimage_"+Math.round(Math.random()*1e5)+"-"+c,r.focus(),r.restoreSelection(),d=i({url:M.util.image_url("i/loading_small","moodle"),alt:M.util.get_string("uploading",o),id:h}),r.insertContentAtFocusPoint(d),n.markUpdated(),p.onreadystatechange=function(){var t=n.editor.one("#"+h),r,s,o,u;if(p.readyState===4)if(p.status===200){r=JSON.parse(p.responseText);if(r){if(r.error)return t&&t.remove(!0),new M.core.ajaxException(r);s=r,r.event&&r.event==="fileexists"&&(s=r.newfile),o=i({url:s.url,presentation:!0}),u=e.Node.create(o),t?t.replace(u):n.editor.appendChild(u),n.markUpdated()}}else e.use("moodle-core-notification-alert",function(){new M.core.alert({message:M.util.get_string("servererror","moodle")})}),t&&t.remove(!0)},p.open("POST",M.cfg.wwwroot+"/repository/repository_ajax.php?action=upload",!0),p.send(l),!1}},_handleClick:function(e){var t=e.target,n=this.get
("host").getSelectionFromNode(t);this.get("host").getSelection()!==n&&this.get("host").setSelection(n)},_displayDialogue:function(){this._currentSelection=this.get("host").getSelection();if(this._currentSelection===!1)return;this._rawImageDimensions=null;var e=this.getDialogue({headerContent:M.util.get_string("imageproperties",o),width:"480px",focusAfterHide:!0,focusOnShowSelector:r.INPUTURL});e.set("bodyContent",this._getDialogueContent()).show()},_loadPreviewImage:function(e){var t=new Image,r=this;t.onerror=function(){var e=r._form.one("."+n.IMAGEPREVIEW);e.setStyles({display:"none"}),r.getDialogue().centerDialogue()},t.onload=function(){var e,t,i,o,u;r._rawImageDimensions={width:this.width,height:this.height},e=r._form.one("."+n.INPUTWIDTH),t=e.get("value"),t===""&&(e.set("value",this.width),t=""+this.width),e=r._form.one("."+n.INPUTHEIGHT),i=e.get("value"),i===""&&(e.set("value",this.height),i=""+this.height),e=r._form.one("."+n.IMAGEPREVIEW),e.setAttribute("src",this.src),e.setStyles({display:"inline"}),e=r._form.one("."+n.INPUTCONSTRAIN),t.match(s.ISPERCENT)&&i.match(s.ISPERCENT)?e.set("checked",t===i):(this.width===0&&(this.width=1),this.height===0&&(this.height=1),o=Math.round(1e3*parseInt(t,10)/this.width),u=Math.round(1e3*parseInt(i,10)/this.height),e.set("checked",o===u)),r._autoAdjustSize(r),r.getDialogue().centerDialogue()},t.src=e},_getDialogueContent:function(){var t=e.Handlebars.compile(u),r=this.get("host").canShowFilepicker("image"),s=e.Node.create(t({elementid:this.get("host").get("elementid"),CSS:n,component:o,showFilepicker:r,alignments:i}));return this._form=s,this._applyImageProperties(this._form),this._form.one("."+n.INPUTURL).on("blur",this._urlChanged,this),this._form.one("."+n.IMAGEPRESENTATION).on("change",this._updateWarning,this),this._form.one("."+n.INPUTALT).on("change",this._updateWarning,this),this._form.one("."+n.INPUTWIDTH).on("blur",this._autoAdjustSize,this),this._form.one("."+n.INPUTHEIGHT).on("blur",this._autoAdjustSize,this,!0),this._form.one("."+n.INPUTCONSTRAIN).on("change",function(e){e.target.get("checked")&&this._autoAdjustSize(e)},this),this._form.one("."+n.INPUTURL).on("blur",this._urlChanged,this),this._form.one("."+n.INPUTSUBMIT).on("click",this._setImage,this),r&&this._form.one("."+n.IMAGEBROWSER).on("click",function(){this.get("host").showFilepicker("image",this._filepickerCallback,this)},this),s},_autoAdjustSize:function(e,t){t=t||!1;var r=this._form.one("."+n.INPUTWIDTH),i="width",o=this._form.one("."+n.INPUTHEIGHT),u="height",a=this._form.one("."+n.INPUTCONSTRAIN),f=r.get("value"),l=o.get("value"),c=this._form.one("."+n.IMAGEPREVIEW),h,p;if(!this._rawImageDimensions)return;f===""&&(f=this._rawImageDimensions[i],r.set("value",f),f=r.get("value")),c.setStyles({width:null,height:null});if(!a.get("checked"))f.match(s.ISPERCENT)?(h=parseInt(f,10),p=this._rawImageDimensions.width/100*h,c.setStyle("width",p+"px")):c.setStyle("width",f+"px"),l.match(s.ISPERCENT)?(h=parseInt(l,10),p=this._rawImageDimensions.height/100*h,c.setStyle("height",p+"px")):c.setStyle("height",l+"px");else{if(t){var d;d=r,r=o,o=d,d=i,i=u,u=d,d=f,f=l,l=d}f.match(s.ISPERCENT)?(l=f,h=parseInt(f,10),p=this._rawImageDimensions.width/100*h,c.setStyle("width",p),p=this._rawImageDimensions.height/100*h,c.setStyle("height",p)):(l=Math.round(f/this._rawImageDimensions[i]*this._rawImageDimensions[u]),t?c.setStyles({width:l,height:f}):c.setStyles({width:f,height:l})),o.set("value",l)}},_filepickerCallback:function(e){if(e.url!==""){var t=this._form.one("."+n.INPUTURL);t.set("value",e.url),this._form.one("."+n.INPUTWIDTH).set("value",""),this._form.one("."+n.INPUTHEIGHT).set("value",""),this._loadPreviewImage(e.url)}},_applyImageProperties:function(e){var t=this._getSelectedImageProperties(),r=e.one("."+n.IMAGEPREVIEW);if(t===!1){r.setStyle("display","none"),i.some(function(t){return t.isDefault?(e.one("."+n.INPUTALIGNMENT).set("value",t.value),!0):!1},this);return}t.align&&e.one("."+n.INPUTALIGNMENT).set("value",t.align),t.customstyle&&e.one("."+n.INPUTCUSTOMSTYLE).set("value",t.customstyle),t.width&&e.one("."+n.INPUTWIDTH).set("value",t.width),t.height&&e.one("."+n.INPUTHEIGHT).set("value",t.height),t.alt&&e.one("."+n.INPUTALT).set("value",t.alt),t.src&&(e.one("."+n.INPUTURL).set("value",t.src),this._loadPreviewImage(t.src)),t.presentation&&e.one("."+n.IMAGEPRESENTATION).set("checked","checked"),this._autoAdjustSize()},_getSelectedImageProperties:function(){var e={src:null,alt:null,width:null,height:null,align:"",presentation:!1},t=this.get("host").getSelectedNodes(),n,r,i,o;return t&&(t=t.filter("img")),t&&t.size()?(o=this._removeLegacyAlignment(t.item(0)),this._selectedImage=o,i=o.getAttribute("style"),e.customstyle=i,n=o.getAttribute("width"),n.match(s.ISPERCENT)||(n=parseInt(n,10)),r=o.getAttribute("height"),r.match(s.ISPERCENT)||(r=parseInt(r,10)),n!==0&&(e.width=n),r!==0&&(e.height=r),this._getAlignmentPropeties(o,e),e.src=o.getAttribute("src"),e.alt=o.getAttribute("alt")||"",e.presentation=o.get("role")==="presentation",e):(this._selectedImage=null,!1)},_getAlignmentPropeties:function(e,t){var n=!1,r;n=i.some(function(n){var i=this._getAlignmentClass(n.value);return e.hasClass(i)?(t.align=n.value,!0):(n.isDefault&&(r=n.value),!1)},this),!n&&r&&(t.align=r)},_urlChanged:function(){var e=this._form.one("."+n.INPUTURL);e.get("value")!==""&&this._loadPreviewImage(e.get("value"))},_setImage:function(t){var r=this._form,i=r.one("."+n.INPUTURL).get("value"),o=r.one("."+n.INPUTALT).get("value"),u=r.one("."+n.INPUTWIDTH).get("value"),f=r.one("."+n.INPUTHEIGHT).get("value"),l=this._getAlignmentClass(r.one("."+n.INPUTALIGNMENT).get("value")),c=r.one("."+n.IMAGEPRESENTATION).get("checked"),h=r.one("."+n.INPUTCONSTRAIN).get("checked"),p,d=r.one("."+n.INPUTCUSTOMSTYLE).get("value"),v=[],m=this.get("host");t.preventDefault();if(this._updateWarning())return;m.focus();if(i!==""){this._selectedImage?m.setSelection(m.getSelectionFromNode(this._selectedImage)):m.setSelection(this._currentSelection
),h&&v.push(n.RESPONSIVE),v.push(l);if(!u.match(s.ISPERCENT)&&isNaN(parseInt(u,10))){r.one("."+n.INPUTWIDTH).focus();return}if(!f.match(s.ISPERCENT)&&isNaN(parseInt(f,10))){r.one("."+n.INPUTHEIGHT).focus();return}var g=e.Handlebars.compile(a);p=g({url:i,alt:o,width:u,height:f,presentation:c,customstyle:d,classlist:v.join(" ")}),this.get("host").insertContentAtFocusPoint(p),this.markUpdated()}this.getDialogue({focusAfterHide:null}).hide()},_removeLegacyAlignment:function(t){return t.getStyle("margin")?(i.some(function(n){if(t.getStyle(n.name)!==n.value)return!1;var r=e.Node.create("<div>");return r.setStyle("margin",n.margin),t.getStyle("margin")!==r.getStyle("margin")?!1:(t.addClass(this._getAlignmentClass(n.value)),t.setStyle(n.name,null),t.setStyle("margin",null),!0)},this),t):t},_getAlignmentClass:function(e){return n.ALIGNSETTINGS+"_"+e},_updateWarning:function(){var e=this._form,t=!0,r=e.one("."+n.INPUTALT).get("value"),i=e.one("."+n.IMAGEPRESENTATION).get("checked");return r===""&&!i?(e.one("."+n.IMAGEALTWARNING).setStyle("display","block"),e.one("."+n.INPUTALT).setAttribute("aria-invalid",!0),e.one("."+n.IMAGEPRESENTATION).setAttribute("aria-invalid",!0),t=!0):(e.one("."+n.IMAGEALTWARNING).setStyle("display","none"),e.one("."+n.INPUTALT).setAttribute("aria-invalid",!1),e.one("."+n.IMAGEPRESENTATION).setAttribute("aria-invalid",!1),t=!1),this.getDialogue().centerDialogue(),t}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
