canvasWebpackJsonp([12,30],{"+JpRIS14Qm":function(e,t,i){var n,a
n=[i("36QOWIB4+W"),i("BkaAgcBhey"),i("PyJFCi/UoU"),i("XDPawBHrta")],void 0!==(a=function(e){return e.scoped("subnav_menu_toggle")}.apply(t,n))&&(e.exports=a)},"/W/ggH9WyQ":function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a,o=n(i("mOY9BNujNR")),r=n(i("iBw8ZGM6v8")),s=i("Fbgaaelsi7"),d=n(i("qagVT2atnL")),l=n(i("IIpzxDTdC3")),c=n(i("evahSH1MgD")),u=n(i("ir8pL/Ro1S")),_={preload:function(e){this.loadRCE(e)},loadOnTarget:function(e,t,i){var n=this.getTargetTextarea(e),a=this.getRenderingTarget(n,t.getRenderingTarget),o=this.createRCEProps(n,t)
this.loadRCE(function(e){e.renderIntoDiv(a,o,function(e){e.mceInstance().on("init",function(){return i(n,c.default.wrapEditor(e))})})})},loadSidebarOnTarget:function(e,t){if(!ENV.RICH_CONTENT_SKIP_SIDEBAR){var i=(0,u.default)(ENV.context_asset_string),n={jwt:ENV.JWT,refreshToken:(0,s.refreshFn)(ENV.JWT),host:ENV.RICH_CONTENT_APP_HOST,canUploadFiles:ENV.RICH_CONTENT_CAN_UPLOAD_FILES,filesTabDisabled:ENV.RICH_CONTENT_FILES_TAB_DISABLED,contextType:i[0],contextId:i[1],themeUrl:ENV.active_brand_config_json_url}
this.loadRCE(function(i){i.renderSidebarIntoDiv(e,n,function(e){t(c.default.wrapSidebar(e))})})}},loadingCallbacks:[],RCE:null,loadRCE:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){}
a||(a=(window.ENV.use_rce_enhancements?i.e(1).then(i.bind(null,"6KfoB+dtLz")):i.e(0).then(i.bind(null,"vaZ5sMtsdY"))).then(function(t){e.RCE=t;(0,l.default)()
return t}))
return a.then(function(){e.loadingCallbacks.forEach(function(t){return t(e.RCE)})
e.loadingCallbacks=[]
t(e.RCE)})},getTargetTextarea:function(e){return"textarea"==(0,o.default)(e).get(0).type?(0,o.default)(e).get(0):(0,o.default)(e).find("textarea").get(0)},getRenderingTarget:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0
t=void 0===i?(0,o.default)(e).parent().get(0):i(e);(0,o.default)(t).addClass("ic-RichContentEditor")
return t},_attrsToMirror:function(e){var t=r.default.reduce(e.attributes,function(e,t){e[t.name]=t.value
return e},{})
return r.default.pick(t,["name"])},createRCEProps:function(e,t){var i=e.offsetWidth,n=e.offsetHeight
n&&(t.tinyOptions=r.default.extend({},{height:n},t.tinyOptions||{}))
return{editorOptions:d.default.bind(null,i,e.id,t,null),defaultContent:e.value||t.defaultContent,textareaId:e.id,textareaClassName:e.className,language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus}}}
t.default=_
e.exports=t.default},"2aUY+gHXYk":function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")(i("mOY9BNujNR"));(0,n.default)(document).on("keydown",".ic-Super-toggle__input",function(e){13===e.which&&(0,n.default)(e.target).click()})},"3HTgpJ/Ga1":function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var n=function(){return(ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]).join("; ")}
t.default=n
e.exports=t.default},"4JOyD1bKYU":function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("/W/ggH9WyQ")),o=i("TVAqaFMvRJ"),r=n(i("fMZxOSn6U9")),s=n(i("mOY9BNujNR"))
function d(e,t,i){e.css("display","none")
var n=t.onFocus
t.onFocus=function(){h.showSidebar()
n instanceof Function&&n.apply(void 0,arguments)}
a.default.loadOnTarget(e,t,function(t,n){var a=f(e)
_((0,s.default)(t)).data("remoteEditor",n)
a.trigger(o.RCELOADED_EVENT_NAME,n)
i&&i()})}function l(e){var t=f(e),i=t.attr("id"),n="tinymce-parent-of-".concat(i)
if(t.parent().attr("id")!==n)return t.wrap("<div id='".concat(n,"' style='visibility: hidden'></div>"))}var c=0
function u(e){var t=(0,s.default)(e),i="attr"in t?t.attr("id"):t.id
i&&""!=i||t.attr("id","random_editor_id_".concat(c++))}function _(e){var t=f(e),i=t.attr("id")
if(!i||""==i)return t
var n=(0,s.default)("#".concat(i))
return n.length<=0?t:n}var h={preloadRemoteModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){}
return a.default.preload(e)},initSidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
r.default.init(e)},showSidebar:function(){r.default.show()},hideSidebar:function(){r.default.hide()},loadNewEditor:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=f(e)
if(!(a.length<=0)){u(a)
i=s.default.extend({},i)
a=this.freshNode(a)
if(i.manageParent){delete i.manageParent
l(a)}d(a,i,function(){i.focus&&t.activateRCE(a)
n&&n()});(0,s.default)(".mce-resizehandle").attr("aria-hidden",!0)}},callOnRCE:function(e,t){var i=f(e)
i=this.freshNode(i)
for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r]
return o.send.apply(void 0,[i,t].concat(a))},destroyRCE:function(e){var t=f(e)
t=this.freshNode(t);(0,o.destroy)(t)
r.default.hide()},activateRCE:function(e){var t=f(e)
t=this.freshNode(t);(0,o.focus)(t)
r.default.show()},freshNode:_,ensureID:u}
function f(e){return e.length?e:(0,s.default)(e)}var m=h
t.default=m
e.exports=t.default},"53cLBmp0Qb":function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("Z60aNDY003")),o=n(i("C9uTDLcwK6")),r=n(i("Ii09r7XDvi")),s=n(i("mOY9BNujNR")),d=function(){function e(t){(0,a.default)(this,e)
this.editor=t
this.id_prepend=t.id
this.$el=(0,s.default)("#".concat(t.editorContainer.id))}(0,o.default)(e,[{key:"accessiblize",value:function(){this._cacheElements()
this._addTitles()
this._addLabels()
this._accessiblizeMenubar()
this._removeStatusbarFromTabindex()}},{key:"_cacheElements",value:function(){this.$iframe=this.$el.find(".mce-edit-area iframe")}},{key:"_addLabels",value:function(){this.$el.attr("aria-label",r.default.t("Rich Content Editor"));(0,s.default)(this.editor.getBody()).attr("aria-label",(0,s.default)('label[for="'.concat(this.id_prepend,'"]')).text())
this.$el.find("div[aria-label='Font Sizes']").attr("aria-label",r.default.t("titles.font_size","Font Size, press down to select"))
this.$el.find("div.mce-listbox.mce-last:not([aria-label])").attr("aria-label",r.default.t("titles.formatting","Formatting, press down to select"))
this.$el.find("div[aria-label='Text color']").attr("aria-label",r.default.t("accessibles.forecolor","Text Color, press down to select"))
this.$el.find("div[aria-label='Background color'").attr("aria-label",r.default.t("accessibles.background_color","Background Color, press down to select"))}},{key:"_addTitles",value:function(){this.$iframe.attr("title",r.default.t("titles.rte_help","Rich Text Area. Press ALT+F8 for help"))}},{key:"_accessiblizeMenubar",value:function(){var e=this,t=this.$el.find(".mce-menubar"),i=t.find(".mce-menubtn").first()
t.hide()
this.editor.addShortcut("Alt+F9","",function(){t.show()
i.focus()
e.editor.addShortcut("Alt+F9","",function(){return i.focus()})})}},{key:"_removeStatusbarFromTabindex",value:function(){this.$el.find(".mce-statusbar > .mce-container-body").attr("tabindex",-1)}}])
return e}()
t.default=d
e.exports=t.default},"9+ND/lQLGk":function(e,t,i){var n,a,o=function(e,t){for(var i in t)r.call(t,i)&&(e[i]=t[i])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},r={}.hasOwnProperty
n=[i("MryoBGIZcz"),i("klGFYzYm7x"),i("mOY9BNujNR"),i("pmU8As9kkw")],void 0!==(a=function(e,t,i){var n
n=t.View
return function(t){o(a,n)
function a(){return a.__super__.constructor.apply(this,arguments)}a.prototype.el="#keyboard_navigation"
a.prototype.initialize=function(){a.__super__.initialize.apply(this,arguments)
this.bindOpenKeys
return this}
a.prototype.render=function(e){this.$el.html(e)
return this}
a.prototype.bindOpenKeys=function(){var t,n
t=null
return i(document).keydown((n=this,function(a){if((188===a.keyCode||191===a.keyCode)&&!i(a.target).is(":input")){a.preventDefault()
if(!n.$el.is(":visible")){t=document.activeElement
return n.$el.dialog({title:e.t("titles.keyboard_shortcuts","Keyboard Shortcuts"),width:400,height:"auto",close:function(){i("li",this).attr("tabindex","")
if(t)return i(t).focus()}})}n.$el.dialog("close")
if(t)return i(t).focus()}}))}
return a}()}.apply(t,n))&&(e.exports=a)},"9vdLYFzxED":function(e,t,i){var n,a
n=[i("36QOWIB4+W"),i("f+YlSntt6E"),i("PyJFCi/UoU"),i("XDPawBHrta")],void 0!==(a=function(e){return e.scoped("broken_images")}.apply(t,n))&&(e.exports=a)},BIYSGtzGjH:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.enhanceUserContent=f
var a=n(i("9+ND/lQLGk")),o=(n(i("whMk0QU2To")),n(i("MryoBGIZcz"))),r=n(i("mOY9BNujNR")),s=n(i("iBw8ZGM6v8")),d=n(i("1IKDY5pCFs")),l=n(i("eJBzaBDd6c")),c=n(i("ArN3I+GqU9")),u=n(i("4JOyD1bKYU"))
i("zYWt9o0wMR")
i("r81G667jwg")
i("Q4xR9Iqymk")
i("KVDLV1bDgD")
i("Q/pI8WL7wG")
i("Bvm3aweHSm")
i("pwv1UBr9wT")
i("pmU8As9kkw")
i("kzdUuF07HD")
i("3pTo86YxQs")
i("A6xh958p9n")
i("+d6o9BzfWM")
i("yR513+6+ip")
i("nXH6nMYdz2")
i("t0oyyDFjk2")
i("l1QdNhNedg")
i("OKSaC6qKke")
i("yvh8ynczHv")
i("rM/Waq56bL")
i("ZwdgLllWpW")
i("oxTDiksfqi")
i("V9Ry3Xcwt0")
function _(){var e=(0,r.default)(this),t=e.attr("href"),i=r.default.youTubeID(t||"")
if(i&&!e.hasClass("inline_disabled")){var n=(0,r.default)('\n      <a\n        href="'.concat((0,l.default)(t),'"\n        class="youtubed"\n      >\n        <img src="/images/play_overlay.png"\n          class="media_comment_thumbnail"\n          style="background-image: url(//img.youtube.com/vi/').concat((0,l.default)(i),'/2.jpg)"\n          alt="').concat((0,l.default)(e.data("preview-alt")||""),'"\n        />\n      </a>\n    '))
n.click((0,c.default)(function(){var e=(0,r.default)("\n        <span class='youtube_holder' style='display: block;'>\n          <iframe\n            src='//www.youtube.com/embed/".concat((0,l.default)(i),"?autoplay=1&rel=0&hl=en_US&fs=1'\n            frameborder='0'\n            width='425'\n            height='344'\n            allowfullscreen\n          ></iframe>\n          <br/>\n          <a\n            href='#'\n            style='font-size: 0.8em;'\n            class='hide_youtube_embed_link'\n          >\n            ").concat((0,l.default)(o.default.t("links.minimize_youtube_video","Minimize Video")),"\n          </a>\n        </span>\n      "))
e.find(".hide_youtube_embed_link").click((0,c.default)(function(){e.remove()
n.show()
r.default.trackEvent("hide_embedded_content","hide_you_tube")}));(0,r.default)(this).after(e).hide()}))
r.default.trackEvent("show_embedded_content","show_you_tube")
e.addClass("youtubed").after(n)}}r.default.trackEvent("Route",location.pathname.replace(/\/$/,"").replace(/\d+/g,"--")||"/")
var h=".dialog, .draggable, .resizable, .sortable, .tabs"
function f(){var e=(0,r.default)("#content");(0,r.default)(".user_content:not(.enhanced):visible").addClass("unenhanced");(0,r.default)(".user_content.unenhanced:visible").each(function(){var t=(0,r.default)(this)
t.find("img").css("maxWidth",Math.min(e.width(),t.width()))
t.data("unenhanced_content_html",t.html())}).find(".enhanceable_content").show().filter(h).ifExists(function(e){var t="Deprecated use of magic jQueryUI widget markup detected:\n\nYou're relying on undocumented functionality where Canvas makes jQueryUI widgets out of rich content that has the following class names: "+h+".\n\nCanvas is moving away from jQueryUI for our own widgets and this behavior will go away. Rather than relying on the internals of Canvas's JavaScript, you should use your own custom JS file to do any such customizations."
console.error(t,e)}).end().filter(".dialog").each(function(){var e=(0,r.default)(this)
e.hide()
e.closest(".user_content").find("a[href='#"+e.attr("id")+"']").click(function(t){t.preventDefault()
e.dialog()})}).end().filter(".draggable").draggable().end().filter(".resizable").resizable().end().filter(".sortable").sortable().end().filter(".tabs").each(function(){(0,r.default)(this).tabs()}).end().end().find("a:not(.not_external, .external):external").each(function(){var e=(0,l.default)(o.default.t("titles.external_link","Links to an external site."));(0,r.default)(this).not(":has(img)").addClass("external").html("<span>"+(0,r.default)(this).html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append('<span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="'+r.default.raw(e)+'"/>').append('<span class="screenreader-only">&nbsp;('+r.default.raw(e)+")</span>")}).end()
r.default.filePreviewsEnabled()&&(0,r.default)("a.instructure_scribd_file").not(".inline_disabled").each(function(){var e=(0,r.default)(this)
if(r.default.trim(e.text())){var t=(0,r.default)("<span class='instructure_file_holder link_holder'/>"),i=(0,r.default)("<a class='file_preview_link' aria-hidden='true' href='"+(0,l.default)(e.attr("href"))+"' title='"+(0,l.default)(o.default.t("titles.preview_document","Preview the document"))+"' style='padding-left: 5px;'><img src='/images/preview.png' alt='"+(0,l.default)(o.default.t("titles.preview_document","Preview the document"))+"'/></a>")
e.removeClass("instructure_scribd_file").before(t).appendTo(t)
t.append(i)
e.hasClass("auto_open")&&i.click()}});(0,r.default)(".user_content.unenhanced a,.user_content.unenhanced+div.answers a").find("img.media_comment_thumbnail").each(function(){(0,r.default)(this).closest("a").addClass("instructure_inline_media_comment")}).end().filter(".instructure_inline_media_comment").removeClass("no-underline").mediaCommentThumbnail("normal").end().filter(".instructure_video_link, .instructure_audio_link").mediaCommentThumbnail("normal",!0).end().not(".youtubed").each(_);(0,r.default)(".user_content.unenhanced").removeClass("unenhanced").addClass("enhanced")
setTimeout(function(){(0,r.default)(".user_content form.user_content_post_form:not(.submitted)").submit().addClass("submitted")},10)}(0,r.default)(function(){if(window._earlyClick){document.removeEventListener("click",window._earlyClick)
window._earlyClick.clicks&&setTimeout(function(){r.default.each(s.default.uniq(window._earlyClick.clicks),function(){var e=r.default.Event("click")
e.preventDefault();(0,r.default)(this).trigger(e)})},1)}var e,t,n=(0,r.default)("#breadcrumbs"),c=!1
function _(){var t=500,i=1.5*n.find("li:visible:first").height();(e=e||n.find(".ellipsible")).css("maxWidth","")
e.ifExists(function(){for(var a=0;n.height()>i&&a<20;a++){if(!c){c=!0
e.addClass("ellipsis")}e.css("maxWidth",t-=20)}})}_();(0,r.default)(window).resize(_)
a.default.prototype.bindOpenKeys.call({$el:(0,r.default)("#keyboard_navigation")});(0,r.default)("#switched_role_type").ifExists(function(){var e=(0,r.default)(this).attr("class"),t=(0,r.default)("<img/>"),i=null
switch((0,r.default)(this).data("role")){case"TeacherEnrollment":i=o.default.t("switched_roles_message.teacher","You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page.")
break
case"StudentEnrollment":i=o.default.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")
break
case"TaEnrollment":i=o.default.t("switched_roles_message.ta","You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.")
break
case"ObserverEnrollment":i=o.default.t("switched_roles_message.observer","You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.")
break
case"DesignerEnrollment":i=o.default.t("switched_roles_message.designer","You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.")
break
default:i=o.default.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")}t.attr("src","/images/warning.png").attr("title",i).css({paddingRight:2,width:12,height:12});(0,r.default)("#crumb_"+e).find("a").prepend(t)});(0,r.default)("a.show_quoted_text_link").live("click",function(e){var t=(0,r.default)(this).parents(".quoted_text_holder").children(".quoted_text")
if(t.length>0){e.preventDefault()
t.show();(0,r.default)(this).hide()}});(0,r.default)("a.equella_content_link").live("click",function(e){e.preventDefault()
var t=(0,r.default)("#equella_preview_dialog")
if(!t.length){(t=(0,r.default)("<div/>")).attr("id","equella_preview_dialog").hide()
t.html("<h2/><iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: 350px; border: 0;' src='about:blank' borderstyle='0'/><div style='text-align: right;'><a href='#' class='original_link external external_link' target='_blank'>"+(0,l.default)(o.default.t("links.view_equella_content_in_new_window","view the content in a new window"))+"</a>")
t.find("h2").text((0,r.default)(this).attr("title")||(0,r.default)(this).text()||o.default.t("titles.equella_content_preview","Equella Content Preview"))
var i=t.find("iframe")
setTimeout(function(){i.css("background","#fff")},2500);(0,r.default)("body").append(t)
t.dialog({autoOpen:!1,width:"auto",resizable:!1,title:o.default.t("titles.equella_content_preview","Equella Content Preview"),close:function(){t.find("iframe").attr("src","about:blank")}})}t.find(".original_link").attr("href",(0,r.default)(this).attr("href"))
t.dialog("close").dialog("open")
t.find("iframe").attr("src",(0,r.default)(this).attr("href"))});(0,r.default)(".dialog_opener[aria-controls]:not(.user_content *)").live("click",function(e){var t=this;(0,r.default)("#"+(0,r.default)(this).attr("aria-controls")).ifExists(function(i){e.preventDefault()
if(!i.data("dialog")){i.dialog(r.default.extend({autoOpen:!1,modal:!0},(0,r.default)(t).data("dialogOpts")))
i.fixDialogButtons()}i.dialog("open")})})
r.default.filePreviewsEnabled()?(0,r.default)("a.file_preview_link").live("click",function(e){e.preventDefault()
var t=(0,r.default)(this).loadingImage({image_size:"small"}).hide()
r.default.ajaxJSON(t.attr("href").replace(/\/download/,""),"GET",{},function(i){var n=i&&i.attachment
t.loadingImage("remove")
if(n&&(r.default.isPreviewable(n.content_type,"google")||n.canvadoc_session_url)){var a=(0,r.default)("<div>").insertAfter(t.parents(".link_holder:last")).loadDocPreview({canvadoc_session_url:n.canvadoc_session_url,mimeType:n.content_type,public_url:n.public_url,attachment_preview_processing:"pending_upload"==n.workflow_state||"processing"==n.workflow_state}),s=(0,r.default)('<a href="#" style="font-size: 0.8em;" class="hide_file_preview_link">'+(0,l.default)(o.default.t("links.minimize_file_preview","Minimize File Preview"))+"</a>").click(function(e){e.preventDefault()
t.show()
t.focus()
a.remove()
r.default.trackEvent("hide_embedded_content","hide_file_preview")})
a.prepend(s)
Object.prototype.hasOwnProperty.call(e,"originalEvent")&&s.focus()
r.default.trackEvent("show_embedded_content","show_file_preview")}},function(){t.loadingImage("remove").hide()})}):(0,r.default)("a.file_preview_link").live("click",function(e){e.preventDefault()
alert(o.default.t("alerts.file_previews_disabled","File previews have been disabled for this Canvas site"))})
r.default.subscribe("userContent/change",function(){clearTimeout(t)
t=setTimeout(f,50)});(0,r.default)(document).bind("user_content_change",f);(0,r.default)(function(){setInterval(f,15e3)
setTimeout(f,15)});(0,r.default)(".zone_cached_datetime").each(function(){if((0,r.default)(this).attr("title")){var e=d.default.parse((0,r.default)(this).attr("title"))
e&&(0,r.default)(this).text(r.default.datetimeString(e))}});(0,r.default)(".show_sub_messages_link").click(function(e){e.preventDefault();(0,r.default)(this).parents(".subcontent").find(".communication_sub_message.toggled_communication_sub_message").removeClass("toggled_communication_sub_message");(0,r.default)(this).parents(".communication_sub_message").remove()});(0,r.default)(".show_comments_link").click(function(e){e.preventDefault();(0,r.default)(this).closest("ul").find("li").show();(0,r.default)(this).closest("li").remove()});(0,r.default)(".communication_message .message_short .read_more_link").click(function(e){e.preventDefault();(0,r.default)(this).parents(".communication_message").find(".message_short").hide().end().find(".message").show()});(0,r.default)(".communication_message .close_notification_link").live("click",function(e){e.preventDefault();(0,r.default)(this).parents(".communication_message").confirmDelete({url:(0,r.default)(this).attr("rel"),noMessage:!0,success:function(){(0,r.default)(this).slideUp(function(){(0,r.default)(this).remove()})}})});(0,r.default)(".communication_message .add_entry_link").click(function(e){e.preventDefault()
var t=(0,r.default)(this).parents(".communication_message"),i=t.find(".reply_message").hide(),n=t.find(".communication_sub_message.blank").clone(!0).removeClass("blank")
i.before(n.show())
var a=s.default.uniqueId("textarea_")
n.find("textarea.rich_text").attr("id",a);(0,r.default)(document).triggerHandler("richTextStart",(0,r.default)("#"+a))
n.find("textarea:first").focus().select()});(0,r.default)(document).bind("richTextStart",function(e,t){if(t&&0!==t.length&&(t=(0,r.default)(t))&&0!==t.length){u.default.initSidebar({show:function(){(0,r.default)("#sidebar_content").hide()},hide:function(){(0,r.default)("#sidebar_content").show()}})
u.default.loadNewEditor(t,{focus:!0})}}).bind("richTextEnd",function(e,t){t&&0!==t.length&&(t=(0,r.default)(t))&&0!==t.length&&u.default.destroyRCE(t)});(0,r.default)(".communication_message .content .links .show_users_link,.communication_message .header .show_users_link").click(function(e){e.preventDefault();(0,r.default)(this).parents(".communication_message").find(".content .users_list").slideToggle()});(0,r.default)(".communication_message .delete_message_link").click(function(e){e.preventDefault();(0,r.default)(this).parents(".communication_message").confirmDelete({noMessage:!0,url:(0,r.default)(this).attr("href"),success:function(){(0,r.default)(this).slideUp()}})});(0,r.default)(".communication_sub_message .add_conversation_message_form").formSubmit({beforeSubmit:function(e){(0,r.default)(this).find("button").attr("disabled",!0);(0,r.default)(this).find(".submit_button").text(o.default.t("status.posting_message","Posting Message..."));(0,r.default)(this).loadingImage()},success:function(e){(0,r.default)(this).loadingImage("remove")
var t=(0,r.default)(this).parents(".communication_sub_message"),i=t.parents(".communication_message"),n=e.messages[0]
t.fillTemplateData({data:{post_date:r.default.datetimeString(n.created_at),message:n.body},htmlValues:["message"]})
t.find(".message").show();(0,r.default)(this).remove()
i.find(".reply_message").show()
r.default.flashMessage("Message Sent!");(0,r.default)(document).triggerHandler("user_content_change")
"/"===location.pathname&&r.default.trackEvent("dashboard_comment","create")},error:function(e){(0,r.default)(this).loadingImage("remove");(0,r.default)(this).find("button").attr("disabled",!1);(0,r.default)(this).find(".submit_button").text("Post Failed, Try Again");(0,r.default)(this).formErrors(e)}});(0,r.default)(".communication_sub_message .add_sub_message_form").formSubmit({beforeSubmit:function(e){(0,r.default)(this).find("button").attr("disabled",!0);(0,r.default)(this).find(".submit_button").text(o.default.t("status.posting_message","Posting Message..."));(0,r.default)(this).loadingImage()},success:function(e){(0,r.default)(this).loadingImage("remove")
var t=(0,r.default)(this).parents(".communication_sub_message")
if((0,r.default)(this).hasClass("submission_comment_form")){var i=(0,r.default)(this).getTemplateData({textValues:["submission_user_id"]}).submission_user_id,n=null
for(var a in e){var o=e[a].submission
o.user_id==i&&(n=o)}if(n){var s=n.submission_comments[n.submission_comments.length-1].submission_comment
s.post_date=r.default.datetimeString(s.created_at)
s.message=s.formatted_body||s.comment
t.fillTemplateData({data:s,htmlValues:["message"]})}}else{var d=e.discussion_entry
d.post_date=r.default.datetimeString(d.created_at)
t.find(".content > .message_html").val(d.message)
t.fillTemplateData({data:d,htmlValues:["message"]})}t.find(".message").show()
t.find(".user_content").removeClass("enhanced")
t.parents(".communication_message").find(".reply_message").removeClass("lonely_behavior_message").show();(0,r.default)(document).triggerHandler("richTextEnd",(0,r.default)(this).find("textarea.rich_text"));(0,r.default)(document).triggerHandler("user_content_change");(0,r.default)(this).remove()
location.href.match(/dashboard/)&&r.default.trackEvent("dashboard_comment","create")},error:function(e){(0,r.default)(this).loadingImage("remove");(0,r.default)(this).find("button").attr("disabled",!1);(0,r.default)(this).find(".submit_button").text(o.default.t("errors.posting_message_failed","Post Failed, Try Again"));(0,r.default)(this).formErrors(e)}});(0,r.default)(".communication_sub_message form .cancel_button").click(function(){var e=(0,r.default)(this).parents(".communication_sub_message"),t=(0,r.default)(this).parents(".communication_message");(0,r.default)(document).triggerHandler("richTextEnd",e.find("textarea.rich_text"))
e.remove()
t.find(".reply_message").show()});(0,r.default)(".communication_message,.communication_sub_message").bind("focusin mouseenter",function(){(0,r.default)(this).addClass("communication_message_hover")}).bind("focusout mouseleave",function(){(0,r.default)(this).removeClass("communication_message_hover")});(0,r.default)(".communication_sub_message .more_options_reply_link").click(function(e){e.preventDefault()
var t=(0,r.default)(this).parents("form"),i=null
i=t.hasClass("submission_comment_form")?{comment:t.find("textarea:visible:first").val()||""}:{message:t.find("textarea:visible:first").val()||""}
location.href=(0,r.default)(this).attr("href")+"?message="+encodeURIComponent(i.message)});(0,r.default)(".communication_message.new_activity_message").ifExists(function(){this.find(".message_type img").click(function(){var e=(0,r.default)(this),t=r.default.trim(e.attr("class"))
e.parents(".message_type").find("img").removeClass("selected")
e.addClass("selected").parents(".new_activity_message").find(".message_type_text").text(e.attr("title")).end().find(".activity_form").hide().end().find("textarea, :text").val("").end().find("."+t+"_form").show().find(".context_select").change()})
this.find(".context_select").change(function(){var e=(0,r.default)(this),t=e.val(),i=e.parents(".communication_message"),n=i.find("form")
n.attr("action",i.find("."+t+"_form_url").attr("href"))
n.data("context_name",this.options[this.selectedIndex].text)
n.data("context_code",t)
i.find(".roster_list").hide().find(":checkbox").each(function(){(0,r.default)(this).attr("checked",!1)})
i.find("."+t+"_roster_list").show()}).triggerHandler("change")
this.find(".cancel_button").click(function(e){(0,r.default)(this).parents(".communication_message").hide().prev(".new_activity_message").show()})
this.find(".new_activity_message_link").click(function(e){e.preventDefault();(0,r.default)(this).parents(".communication_message").hide().next(".new_activity_message").find(".message_type img.selected").click().end().show().find(":text:visible:first").focus().select()})
this.find("form.message_form").formSubmit({beforeSubmit:function(e){(0,r.default)("button").attr("disabled",!0);(0,r.default)("button.submit_button").text(o.default.t("status.posting_message","Posting Message..."))},success:function(e){(0,r.default)("button").attr("disabled",!1);(0,r.default)("button.submit_button").text("Post Message")
var t=(0,r.default)(this).data("context_code")||"",i=(0,r.default)(this).data("context_name")||""
if((0,r.default)(this).hasClass("discussion_topic_form")){var n=e.discussion_topic
n.context_code=i
n.user_name=(0,r.default)("#identity .user_name").text()
n.post_date=r.default.datetimeString(n.created_at)
n.topic_id=n.id
var a=(0,r.default)(this).parents(".communication_message").find(".template"),o=a.find(".communication_message").clone(!0)
o.find(".header .title,.behavior_content .less_important a").attr("href",a.find("."+t+"_topic_url").attr("href"))
o.find(".add_entry_link").attr("href",a.find("."+t+"_topics_url").attr("href"))
o.find(".user_name").attr("href",a.find("."+t+"_user_url").attr("href"))
o.find(".topic_assignment_link,.topic_assignment_url").attr("href",a.find("."+t+"_assignment_url").attr("href"))
o.find(".attachment_name,.topic_attachment_url").attr("href",a.find("."+t+"_attachment_url").attr("href"))
var s={discussion_topic_id:n.id}
o.fillTemplateData({data:n,hrefValues:["topic_id","user_id","assignment_id","attachment_id"],avoid:".subcontent"})
o.find(".subcontent").fillTemplateData({data:s,hrefValues:["topic_id","user_id"]})
o.find(".subcontent form").attr("action",a.find("."+t+"_entries_url").attr("href"))
o.fillFormData(s,{object_name:"discussion_entry"});(0,r.default)(this).parents(".communication_message").after(o.hide())
o.slideDown();(0,r.default)(this).parents(".communication_message").slideUp();(0,r.default)(this).parents(".communication_message").prev(".new_activity_message").slideDown()}else(0,r.default)(this).hasClass("announcement_form")||location.reload()},error:function(e){(0,r.default)("button").attr("disabled",!1);(0,r.default)("button.submit_button").text(o.default.t("errors.posting_message_failed","Post Failed, Try Again"));(0,r.default)(this).formErrors(e)}})});(0,r.default)("#topic_list .show_all_messages_link").show().click(function(e){e.preventDefault();(0,r.default)("#topic_list .topic_message").show();(0,r.default)(this).hide()})
var h=[]
function m(){h=(0,r.default)(".time_ago_date:visible").toArray()
g()}function g(){var e=h.shift()
if(e){var t=(0,r.default)(e),i=t.data("parsed_date")||Date.parse(t.data("timestamp")||"")
if(i){var n=new Date-i
t.data("timestamp",i.toISOString())
t.data("parsed_date",i)
var a=r.default.fudgeDateForProfileTimezone(i),s=a.toString("MMM d, yyyy")+a.toString(" h:mmtt").toLowerCase(),d=s
if(n<864e5)if(n<36e5)if(n<6e4)d=o.default.t("#time.less_than_a_minute_ago","less than a minute ago")
else{var l=parseInt(n/6e4,10)
d=o.default.t("#time.count_minutes_ago",{one:"1 minute ago",other:"%{count} minutes ago"},{count:l})}else{var c=parseInt(n/36e5,10)
d=o.default.t("#time.count_hours_ago",{one:"1 hour ago",other:"%{count} hours ago"},{count:c})}t.text(d)
t.attr("title",s)}setTimeout(g,1)}else setTimeout(m,6e4)}setTimeout(m,100)
var p=(0,r.default)("#sequence_footer .sequence_details_url").filter(":last").attr("href")
if(p)r.default.ajaxJSON(p,"GET",{},function(e){var t=(0,r.default)("#sequence_footer")
if(e.current_item){(0,r.default)("#sequence_details .current").fillTemplateData({data:e.current_item.content_tag})
r.default.each({previous:".prev",next:".next"},function(i,n){var a=t.find(n)
if(e[i+"_item"]||e[i+"_module"]){var s=e[i+"_item"]&&e[i+"_item"].content_tag||e[i+"_module"]&&e[i+"_module"].context_module
if(!e[i+"_item"]){s.title=s.title||s.name
"unpublished"===s.workflow_state&&(s.title+=" ("+o.default.t("draft","Draft")+")")
s.text="previous"==i?o.default.t("buttons.previous_module","Previous Module"):o.default.t("buttons.next_module","Next Module")
a.addClass("module_button")}a.fillTemplateData({data:s})
e[i+"_item"]?a.attr("href",r.default.replaceTags(t.find(".module_item_url").attr("href"),"id",s.id)):a.attr("href",r.default.replaceTags(t.find(".module_url").attr("href"),"id",s.id)+"/items/"+("previous"===i?"last":"first"))}else a.hide()})
t.show();(0,r.default)(window).resize()}})
else{var v=(0,r.default)("#sequence_footer")
if(v.length){var b=(0,r.default)(v[0])
i.e(19).then(function(e){i("nhLj47xLj6")
b.moduleSequenceFooter({courseID:b.attr("data-course-id"),assetType:b.attr("data-asset-type"),assetID:b.attr("data-asset-id")})}.bind(null,i)).catch(i.oe)}}(0,r.default)("#right-side").delegate(".more_link","click",function(e){var t=(0,r.default)(this),i=t.parents("ul").children(":hidden").show()
t.closest("li").remove()
0===e.screenX&&i.first().find(":tabbable:first").focus()
return!1});(0,r.default)("#right-side").on("click",".disable-todo-item-link",function(e){e.preventDefault()
var t,i=(0,r.default)(this).parents("li, div.topic_message").last(),n=(0,r.default)(this).closest(".to-do-list > li").prev(),a=n.find(".disable-todo-item-link").length&&n.find(".disable-todo-item-link")||(0,r.default)(".todo-list-header"),o=(0,r.default)(this).data("api-href"),s=(0,r.default)(this).data("flash-message")
t=o,i.confirmDelete({url:t,noMessage:!0,success:function(){s&&r.default.flashMessage(s);(0,r.default)(this).slideUp(function(){(0,r.default)(this).remove()
a.focus()})}})})
setTimeout(function(){(0,r.default)("#content a:external,#content a.explicit_external_link").each(function(){var e=o.default.t("titles.external_link","Links to an external site."),t=(0,r.default)('<span class="ui-icon ui-icon-extlink ui-icon-inline"/>').attr("title",e)
t.append((0,r.default)('<span class="screenreader-only"/>').text(e));(0,r.default)(this).not(".open_in_a_new_tab").not(":has(img)").not(".not_external").not(".exclude_external_icon").addClass("external").children("span.ui-icon-extlink").remove().end().html("<span>"+(0,r.default)(this).html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append(t)})},2e3)})},BkaAgcBhey:function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=i("36QOWIB4+W"),a=i.n(n),o=i("mOY9BNujNR")
i.n(o).a.extend(!0,a.a,{translations:{ar:{hide_account_navigation_menu_ccdf9480:"\u0625\u062e\u0641\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a",hide_admin_navigation_menu_5cab9c9e:"\u0625\u062e\u0641\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0646",hide_courses_navigation_menu_6f7c4cfd:"\u0625\u062e\u0641\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u0633\u0627\u0642\u0627\u062a",hide_groups_navigation_menu_62e8b3d0:"\u0625\u062e\u0641\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a",hide_navigation_menu_f0b3e90:"\u0625\u062e\u0641\u0627\u0621 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644",show_account_navigation_menu_d97270a9:"\u0625\u0638\u0647\u0627\u0631 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u062d\u0633\u0627\u0628\u0627\u062a",show_admin_navigation_menu_92fb579f:"\u0625\u0638\u0647\u0627\u0631 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064a\u0646",show_courses_navigation_menu_7ad1a8d4:"\u0625\u0638\u0647\u0627\u0631 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u0633\u0627\u0642\u0627\u062a",show_groups_navigation_menu_1521d38d:"\u0625\u0638\u0647\u0627\u0631 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644 \u0628\u064a\u0646 \u0627\u0644\u0645\u062c\u0645\u0648\u0639\u0627\u062a",show_navigation_menu_34e7f441:"\u0625\u0638\u0647\u0627\u0631 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u062a\u0646\u0642\u0644"},cy:{hide_account_navigation_menu_ccdf9480:"Cuddio Dewislen Crwydro\u2019r Cyfrif",hide_admin_navigation_menu_5cab9c9e:"Cuddio Dewislen Crwydro - Gweinyddwr",hide_courses_navigation_menu_6f7c4cfd:"Cuddio Dewislen Crwydro Cwrs",hide_groups_navigation_menu_62e8b3d0:"Cuddio Dewislen Crwydro - Grwpiau",hide_navigation_menu_f0b3e90:"Cuddio Dewislen Crwydro",show_account_navigation_menu_d97270a9:"Dangos Dewislen Crwydro\u2019r Cyfrif",show_admin_navigation_menu_92fb579f:"Dangos Dewislen Crwydro Gweinyddwr",show_courses_navigation_menu_7ad1a8d4:"Dangos Dewislen Crwydro Cyrsiau",show_groups_navigation_menu_1521d38d:"Dangos Dewislen Crwydro Grwpiau",show_navigation_menu_34e7f441:"Dangos Dewislen Crwydro"},da:{hide_account_navigation_menu_ccdf9480:"Skjul kontonavigationsmenu",hide_admin_navigation_menu_5cab9c9e:"Skjul admin-navigationsmenu",hide_courses_navigation_menu_6f7c4cfd:"Skjul fag-navigationsmenu",hide_groups_navigation_menu_62e8b3d0:"Skjul gruppe-navigationsmenu",hide_navigation_menu_f0b3e90:"Skjul navigationsmenu",show_account_navigation_menu_d97270a9:"Vis kontonavigationsmenu",show_admin_navigation_menu_92fb579f:"Vis admin-navigationsmenu",show_courses_navigation_menu_7ad1a8d4:"Vis fag-navigationsmenu",show_groups_navigation_menu_1521d38d:"Vis gruppe-navigationsmenu",show_navigation_menu_34e7f441:"Vis navigationsmenu"},"da-x-k12":{hide_account_navigation_menu_ccdf9480:"Skjul kontonavigationsmenu",hide_admin_navigation_menu_5cab9c9e:"Skjul admin-navigationsmenu",hide_courses_navigation_menu_6f7c4cfd:"Skjul fag-navigationsmenu",hide_groups_navigation_menu_62e8b3d0:"Skjul gruppe-navigationsmenu",hide_navigation_menu_f0b3e90:"Skjul navigationsmenu",show_account_navigation_menu_d97270a9:"Vis kontonavigationsmenu",show_admin_navigation_menu_92fb579f:"Vis admin-navigationsmenu",show_courses_navigation_menu_7ad1a8d4:"Vis fag-navigationsmenu",show_groups_navigation_menu_1521d38d:"Vis gruppe-navigationsmenu",show_navigation_menu_34e7f441:"Vis navigationsmenu"},de:{hide_account_navigation_menu_ccdf9480:"Konto-Navigationsmen\xfc ausblenden",hide_admin_navigation_menu_5cab9c9e:"Admin-Navigationsmen\xfc ausblenden",hide_courses_navigation_menu_6f7c4cfd:"Kurs-Navigationsmen\xfc ausblenden",hide_groups_navigation_menu_62e8b3d0:"Gruppen-Navigationsmen\xfc ausblenden",hide_navigation_menu_f0b3e90:"Navigationsmen\xfc ausblenden",show_account_navigation_menu_d97270a9:"Konto-Navigationsmen\xfc einblenden",show_admin_navigation_menu_92fb579f:"Admin-Navigationsmen\xfc einblenden",show_courses_navigation_menu_7ad1a8d4:"Kursnavigationsmen\xfc einblenden",show_groups_navigation_menu_1521d38d:"Gruppen-Navigationsmen\xfc einblenden",show_navigation_menu_34e7f441:"Navigationsmen\xfc einblenden"},"en-AU":{hide_account_navigation_menu_ccdf9480:"Hide Account Navigation Menu",hide_admin_navigation_menu_5cab9c9e:"Hide Admin Navigation Menu",hide_courses_navigation_menu_6f7c4cfd:"Hide Courses Navigation Menu",hide_groups_navigation_menu_62e8b3d0:"Hide Groups Navigation Menu",hide_navigation_menu_f0b3e90:"Hide Navigation Menu",show_account_navigation_menu_d97270a9:"Show Account Navigation Menu",show_admin_navigation_menu_92fb579f:"Show Admin Navigation Menu",show_courses_navigation_menu_7ad1a8d4:"Show Courses Navigation Menu",show_groups_navigation_menu_1521d38d:"Show Groups Navigation Menu",show_navigation_menu_34e7f441:"Show Navigation Menu"},"en-CA":{hide_account_navigation_menu_ccdf9480:"Hide Account Navigation Menu",hide_admin_navigation_menu_5cab9c9e:"Hide Admin Navigation Menu",hide_courses_navigation_menu_6f7c4cfd:"Hide Courses Navigation Menu",hide_groups_navigation_menu_62e8b3d0:"Hide Groups Navigation Menu",hide_navigation_menu_f0b3e90:"Hide Navigation Menu",show_account_navigation_menu_d97270a9:"Show Account Navigation Menu",show_admin_navigation_menu_92fb579f:"Show Admin Navigation Menu",show_courses_navigation_menu_7ad1a8d4:"Show Courses Navigation Menu",show_groups_navigation_menu_1521d38d:"Show Groups Navigation Menu",show_navigation_menu_34e7f441:"Show Navigation Menu"},"en-GB":{hide_account_navigation_menu_ccdf9480:"Hide account navigation menu",hide_admin_navigation_menu_5cab9c9e:"Hide admin navigation menu",hide_courses_navigation_menu_6f7c4cfd:"Hide courses navigation menu",hide_groups_navigation_menu_62e8b3d0:"Hide groups navigation menu",hide_navigation_menu_f0b3e90:"Hide navigation menu",show_account_navigation_menu_d97270a9:"Show account navigation menu",show_admin_navigation_menu_92fb579f:"Show admin navigation menu",show_courses_navigation_menu_7ad1a8d4:"Show courses navigation menu",show_groups_navigation_menu_1521d38d:"Show groups navigation menu",show_navigation_menu_34e7f441:"Show navigation menu"},"en-GB-x-lbs":{hide_account_navigation_menu_ccdf9480:"Hide account navigation menu",hide_admin_navigation_menu_5cab9c9e:"Hide admin navigation menu",hide_courses_navigation_menu_6f7c4cfd:"Hide programmes navigation menu",hide_groups_navigation_menu_62e8b3d0:"Hide groups navigation menu",hide_navigation_menu_f0b3e90:"Hide navigation menu",show_account_navigation_menu_d97270a9:"Show account navigation menu",show_admin_navigation_menu_92fb579f:"Show admin navigation menu",show_courses_navigation_menu_7ad1a8d4:"Show programmes navigation menu",show_groups_navigation_menu_1521d38d:"Show groups navigation menu",show_navigation_menu_34e7f441:"Show navigation menu"},"en-GB-x-ukhe":{hide_account_navigation_menu_ccdf9480:"Hide account navigation menu",hide_admin_navigation_menu_5cab9c9e:"Hide admin navigation menu",hide_courses_navigation_menu_6f7c4cfd:"Hide modules navigation menu",hide_groups_navigation_menu_62e8b3d0:"Hide groups navigation menu",hide_navigation_menu_f0b3e90:"Hide navigation menu",show_account_navigation_menu_d97270a9:"Show account navigation menu",show_admin_navigation_menu_92fb579f:"Show admin navigation menu",show_courses_navigation_menu_7ad1a8d4:"Show modules navigation menu",show_groups_navigation_menu_1521d38d:"Show groups navigation menu",show_navigation_menu_34e7f441:"Show navigation menu"},es:{hide_account_navigation_menu_ccdf9480:"Ocultar men\xfa de navegaci\xf3n de cuenta",hide_admin_navigation_menu_5cab9c9e:"Ocultar men\xfa de navegaci\xf3n de administrador",hide_courses_navigation_menu_6f7c4cfd:"Ocultar men\xfa de navegaci\xf3n de cursos",hide_groups_navigation_menu_62e8b3d0:"Ocultar men\xfa de navegaci\xf3n de grupos",hide_navigation_menu_f0b3e90:"Ocultar men\xfa de navegaci\xf3n",show_account_navigation_menu_d97270a9:"Mostrar men\xfa de navegaci\xf3n de cuenta",show_admin_navigation_menu_92fb579f:"Mostrar men\xfa de navegaci\xf3n de administrador",show_courses_navigation_menu_7ad1a8d4:"Mostrar men\xfa de navegaci\xf3n de cursos",show_groups_navigation_menu_1521d38d:"Mostrar men\xfa de navegaci\xf3n de grupos",show_navigation_menu_34e7f441:"Mostrar men\xfa de navegaci\xf3n"},fa:{hide_account_navigation_menu_ccdf9480:"\u0645\u062e\u0641\u06cc \u06a9\u0631\u062f\u0646 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634 \u06a9\u0627\u0631\u0628\u0631",hide_admin_navigation_menu_5cab9c9e:"\u0645\u062e\u0641\u06cc \u06a9\u0631\u062f\u0646 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634 \u0645\u062f\u06cc\u0631",hide_courses_navigation_menu_6f7c4cfd:"\u0645\u062e\u0641\u06cc \u06a9\u0631\u062f\u0646 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634 \u062f\u0631\u0633\u200c\u0647\u0627",hide_groups_navigation_menu_62e8b3d0:"\u0645\u062e\u0641\u06cc \u06a9\u0631\u062f\u0646 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634 \u06af\u0631\u0648\u0647\u200c\u0647\u0627",hide_navigation_menu_f0b3e90:"\u0645\u062e\u0641\u06cc \u06a9\u0631\u062f\u0646 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634 ",show_account_navigation_menu_d97270a9:"\u0646\u0645\u0627\u06cc\u0634 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634 \u062d\u0633\u0627\u0628",show_admin_navigation_menu_92fb579f:"\u0646\u0645\u0627\u06cc\u0634 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634 \u0645\u062f\u06cc\u0631",show_courses_navigation_menu_7ad1a8d4:"\u0646\u0645\u0627\u06cc\u0634 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634 \u062f\u0631\u0633 \u0647\u0627",show_groups_navigation_menu_1521d38d:"\u0646\u0645\u0627\u06cc\u0634 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634 \u06af\u0631\u0648\u0647 \u0647\u0627",show_navigation_menu_34e7f441:"\u0646\u0645\u0627\u06cc\u0634 \u0645\u0646\u0648\u06cc \u067e\u06cc\u0645\u0627\u06cc\u0634"},fr:{hide_account_navigation_menu_ccdf9480:"Masquer le menu de navigation de comptes",hide_admin_navigation_menu_5cab9c9e:"Masquer le menu de navigation de l\u2019administrateur",hide_courses_navigation_menu_6f7c4cfd:"Masquer le menu de navigation de cours",hide_groups_navigation_menu_62e8b3d0:"Masquer le menu de navigation de groupes",hide_navigation_menu_f0b3e90:"Masquer le menu de navigation",show_account_navigation_menu_d97270a9:"Afficher le menu de navigation de comptes",show_admin_navigation_menu_92fb579f:"Afficher le menu de navigation de l\u2019administrateur",show_courses_navigation_menu_7ad1a8d4:"Afficher le menu de navigation de cours",show_groups_navigation_menu_1521d38d:"Afficher le menu de navigation de groupes",show_navigation_menu_34e7f441:"Afficher le menu de navigation"},"fr-CA":{hide_account_navigation_menu_ccdf9480:"Masquer le menu de navigation du compte",hide_admin_navigation_menu_5cab9c9e:"Masquer le menu de navigation de l\u2019administrateur",hide_courses_navigation_menu_6f7c4cfd:"Masquer le menu de navigation des cours",hide_groups_navigation_menu_62e8b3d0:"Masquer le menu de navigation des groupes",hide_navigation_menu_f0b3e90:"Masquer le menu de navigation",show_account_navigation_menu_d97270a9:"Afficher le menu de navigation du compte",show_admin_navigation_menu_92fb579f:"Afficher le menu de navigation de l\u2019administrateur",show_courses_navigation_menu_7ad1a8d4:"Afficher le menu de navigation des cours",show_groups_navigation_menu_1521d38d:"Afficher le menu de navigation des groupes",show_navigation_menu_34e7f441:"Afficher le menu de navigation"},he:{hide_account_navigation_menu_ccdf9480:"\u05d4\u05e1\u05ea\u05e8\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8 \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea",hide_admin_navigation_menu_5cab9c9e:"\u05d4\u05e1\u05ea\u05e8\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8 \u05de\u05e0\u05d4\u05dc\u05d9 \u05de\u05e2\u05e8\u05db\u05ea",hide_courses_navigation_menu_6f7c4cfd:"\u05d4\u05e1\u05ea\u05e8\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8 \u05e7\u05d5\u05e8\u05e1\u05d9\u05dd",hide_groups_navigation_menu_62e8b3d0:"\u05d4\u05e1\u05ea\u05e8\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8 \u05e7\u05d1\u05d5\u05e6\u05d5\u05ea",hide_navigation_menu_f0b3e90:"\u05d4\u05e1\u05ea\u05e8\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8",show_account_navigation_menu_d97270a9:"\u05d4\u05e6\u05d2\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8 \u05d7\u05e9\u05d1\u05d5\u05e0\u05d5\u05ea",show_admin_navigation_menu_92fb579f:"\u05d4\u05e6\u05d2\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8 \u05e9\u05dc \u05de\u05e0\u05d4\u05dc\u05d9 \u05de\u05e2\u05e8\u05db\u05ea",show_courses_navigation_menu_7ad1a8d4:"\u05d4\u05e6\u05d2\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8 \u05e7\u05d5\u05e8\u05e1\u05d9\u05dd",show_groups_navigation_menu_1521d38d:"\u05d4\u05e6\u05d2\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8 \u05e7\u05d1\u05d5\u05e6\u05d5\u05ea",show_navigation_menu_34e7f441:"\u05d4\u05e6\u05d2\u05ea \u05ea\u05e4\u05e8\u05d9\u05d8 \u05e0\u05d9\u05d5\u05d5\u05d8"},ht:{hide_account_navigation_menu_ccdf9480:"Kache Meni Navigasyon Kont",hide_admin_navigation_menu_5cab9c9e:"Kache Meni Navigasyon Admin",hide_courses_navigation_menu_6f7c4cfd:"Kache Meni Navigasyon Kou",hide_groups_navigation_menu_62e8b3d0:"Kache Meni Navigasyon Gwoup",hide_navigation_menu_f0b3e90:"Kache Meni Navigasyon",show_account_navigation_menu_d97270a9:"Afiche Meni Navigasyon Kont",show_admin_navigation_menu_92fb579f:"Afiche Meni Navigasyon Admin",show_courses_navigation_menu_7ad1a8d4:"Afiche Meni Navigasyon Kou",show_groups_navigation_menu_1521d38d:"Afiche Meni Navigasyon Gwoup",show_navigation_menu_34e7f441:"Afiche Meni Navigasyon"},hu:{hide_courses_navigation_menu_6f7c4cfd:"Kurzusnavig\xe1ci\xf3s men\xfc elrejt\xe9se",hide_navigation_menu_f0b3e90:"Navig\xe1ci\xf3s men\xfc elrejt\xe9se"},is:{hide_account_navigation_menu_ccdf9480:"Fela lei\xf0arst\xfdringu valmyndar reiknings",hide_admin_navigation_menu_5cab9c9e:"Fela lei\xf0arst\xfdringarvalmynd kerfisstj\xf3rnanda",hide_courses_navigation_menu_6f7c4cfd:"Fela lei\xf0arst\xfdringarvalmynd n\xe1mskei\xf0a",hide_groups_navigation_menu_62e8b3d0:"Fela lei\xf0arst\xfdringarvalmynd h\xf3pa",hide_navigation_menu_f0b3e90:"Fela lei\xf0arst\xfdringarvalmynd",show_account_navigation_menu_d97270a9:"S\xfdna lei\xf0arst\xfdringarvalmynd reiknings",show_admin_navigation_menu_92fb579f:"S\xfdna lei\xf0arst\xfdringarvalmynd kerfisstj\xf3rnanda",show_courses_navigation_menu_7ad1a8d4:"S\xfdna lei\xf0arst\xfdringarvalmynd n\xe1mskei\xf0a",show_groups_navigation_menu_1521d38d:"S\xfdna lei\xf0arst\xfdringarvalmynd h\xf3pa",show_navigation_menu_34e7f441:"S\xfdna lei\xf0arst\xfdringarvalmynd"},it:{hide_account_navigation_menu_ccdf9480:"Nascondi menu di navigazione account",hide_admin_navigation_menu_5cab9c9e:"Nascondi menu di navigazione amministratore",hide_courses_navigation_menu_6f7c4cfd:"Nascondi menu di navigazione corsi",hide_groups_navigation_menu_62e8b3d0:"Nascondi meni di navigazione gruppi",hide_navigation_menu_f0b3e90:"Nascondi menu di navigazione",show_account_navigation_menu_d97270a9:"Mostra menu di navigazione account",show_admin_navigation_menu_92fb579f:"Mostra menu di navigazione amministratore",show_courses_navigation_menu_7ad1a8d4:"Mostra menu di esplorazione corsi",show_groups_navigation_menu_1521d38d:"Mostra menu di esplorazione gruppi",show_navigation_menu_34e7f441:"Mostra menu di navigazione"},ja:{hide_account_navigation_menu_ccdf9480:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u975e\u8868\u793a\u306b\u3059\u308b",hide_admin_navigation_menu_5cab9c9e:"\u7ba1\u7406\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u975e\u8868\u793a\u306b\u3059\u308b",hide_courses_navigation_menu_6f7c4cfd:"\u30b3\u30fc\u30b9\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u975e\u8868\u793a\u306b\u3059\u308b",hide_groups_navigation_menu_62e8b3d0:"\u30b0\u30eb\u30fc\u30d7\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u975e\u8868\u793a\u306b\u3059\u308b",hide_navigation_menu_f0b3e90:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u975e\u8868\u793a\u306b\u3059\u308b",show_account_navigation_menu_d97270a9:"\u30a2\u30ab\u30a6\u30f3\u30c8\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3059\u308b",show_admin_navigation_menu_92fb579f:"\u30a2\u30c9\u30df\u30cb\u30b9\u30c8\u30ec\u30fc\u30b7\u30e7\u30f3\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3059\u308b",show_courses_navigation_menu_7ad1a8d4:"\u30b3\u30fc\u30b9\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3059\u308b",show_groups_navigation_menu_1521d38d:"\u30b0\u30eb\u30fc\u30d7\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3059\u308b",show_navigation_menu_34e7f441:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a\u3059\u308b"},mi:{hide_account_navigation_menu_ccdf9480:"Huna T\u0101hua Whakatere P\u016bkete",hide_admin_navigation_menu_5cab9c9e:"Huna Whakahaere Whakatere T\u0101hua",hide_courses_navigation_menu_6f7c4cfd:"Huna Ng\u0101 Akoranga Whakatere T\u0101hua",hide_groups_navigation_menu_62e8b3d0:"Huna Ng\u0101 R\u014dp\u016b Whakatere T\u0101hua",hide_navigation_menu_f0b3e90:"Huna Whakatere T\u0101hua",show_account_navigation_menu_d97270a9:"Whak\u0101tu P\u016bkete Whakatere T\u0101hua",show_admin_navigation_menu_92fb579f:"Whak\u0101tu Whakahaere Whakatere T\u0101hua",show_courses_navigation_menu_7ad1a8d4:"Whak\u0101tu Ng\u0101 Akoranga Whakatere T\u0101hua",show_groups_navigation_menu_1521d38d:"Whak\u0101tu Ng\u0101 R\u014dp\u016b Whakatere T\u0101hua",show_navigation_menu_34e7f441:"Whak\u0101tu Whakatere T\u0101hua"},nb:{hide_account_navigation_menu_ccdf9480:"Skjul menyen for kontonavigering",hide_admin_navigation_menu_5cab9c9e:"Skjul menyen for administratornavigering",hide_courses_navigation_menu_6f7c4cfd:"Skjul menyen for emnernavigering",hide_groups_navigation_menu_62e8b3d0:"Skjul menyen for gruppenavigering",hide_navigation_menu_f0b3e90:"Skjul navigeringsmenyen",show_account_navigation_menu_d97270a9:"Vis menyen for kontonavigering",show_admin_navigation_menu_92fb579f:"Vis menyen for administratornavigering",show_courses_navigation_menu_7ad1a8d4:"Vis menyen for emnernavigering",show_groups_navigation_menu_1521d38d:"Vis menyen for gruppenavigering",show_navigation_menu_34e7f441:"Vis navigeringsmenyen"},"nb-x-k12":{hide_account_navigation_menu_ccdf9480:"Skjul menyen for kontonavigering",hide_admin_navigation_menu_5cab9c9e:"Skjul menyen for administratornavigering",hide_courses_navigation_menu_6f7c4cfd:"Skjul menyen for fagnavigering",hide_groups_navigation_menu_62e8b3d0:"Skjul menyen for gruppenavigering",hide_navigation_menu_f0b3e90:"Skjul navigeringsmenyen",show_account_navigation_menu_d97270a9:"Vis menyen for kontonavigering",show_admin_navigation_menu_92fb579f:"Vis menyen for administratornavigering",show_courses_navigation_menu_7ad1a8d4:"Vis menyen for fagnavigering",show_groups_navigation_menu_1521d38d:"Vis menyen for gruppenavigering",show_navigation_menu_34e7f441:"Vis navigeringsmenyen"},nl:{hide_account_navigation_menu_ccdf9480:"Menu Accountnavigatie verbergen",hide_admin_navigation_menu_5cab9c9e:"Menu Beheernavigatie verbergen",hide_courses_navigation_menu_6f7c4cfd:"Menu Cursusnavigatie verbergen",hide_groups_navigation_menu_62e8b3d0:"Menu Groepsnavigatie verbergen",hide_navigation_menu_f0b3e90:"Navigatiemenu verbergen",show_account_navigation_menu_d97270a9:"Menu Accountnavigatie weergeven",show_admin_navigation_menu_92fb579f:"Menu Beheernavigatie weergeven",show_courses_navigation_menu_7ad1a8d4:"Menu Cursusnavigatie weergeven",show_groups_navigation_menu_1521d38d:"Menu Groepsnavigatie weergeven",show_navigation_menu_34e7f441:"Navigatiemenu weergeven"},nn:{hide_account_navigation_menu_ccdf9480:"Skjul meny for kontonavigasjon",hide_admin_navigation_menu_5cab9c9e:"Skjul meny for kontonavigasjon",hide_courses_navigation_menu_6f7c4cfd:"Skjul meny for emnenavigasjon",hide_groups_navigation_menu_62e8b3d0:"Skjul meny for gruppenavigasjon",hide_navigation_menu_f0b3e90:"Skjul navigeringsmeny",show_account_navigation_menu_d97270a9:"Vis meny for kontonavigasjon",show_admin_navigation_menu_92fb579f:"Vis admin-navigeringsmeny ",show_courses_navigation_menu_7ad1a8d4:"Vis meny for emnenavigasjon",show_groups_navigation_menu_1521d38d:"Vis meny for gruppenavigasjon",show_navigation_menu_34e7f441:"Vis navigeringsmeny"},pl:{hide_account_navigation_menu_ccdf9480:"Ukryj menu nawigacji na koncie",hide_admin_navigation_menu_5cab9c9e:"Ukryj menu nawigacji administratora",hide_courses_navigation_menu_6f7c4cfd:"Ukryj menu nawigacji w kursie",hide_groups_navigation_menu_62e8b3d0:"Ukryj menu nawigacji w grupach",hide_navigation_menu_f0b3e90:"Ukryj menu nawigacji",show_account_navigation_menu_d97270a9:"Poka\u017c menu nawigacji na koncie",show_admin_navigation_menu_92fb579f:"Poka\u017c menu nawigacji administratora",show_courses_navigation_menu_7ad1a8d4:"Poka\u017c menu nawigacji w kursie",show_groups_navigation_menu_1521d38d:"Poka\u017c menu nawigacji w grupach",show_navigation_menu_34e7f441:"Poka\u017c menu nawigacji"},pt:{hide_account_navigation_menu_ccdf9480:"Ocultar menu de navega\xe7\xe3o da conta",hide_admin_navigation_menu_5cab9c9e:"Ocultar menu de navega\xe7\xe3o do administrador",hide_courses_navigation_menu_6f7c4cfd:"Ocultar Menu de navega\xe7\xe3o das disciplinas",hide_groups_navigation_menu_62e8b3d0:"Ocultar Menu de navega\xe7\xe3o de grupos",hide_navigation_menu_f0b3e90:"Ocultar Menu de navega\xe7\xe3o",show_account_navigation_menu_d97270a9:"Mostrar o Menu de Navega\xe7\xe3o da Conta",show_admin_navigation_menu_92fb579f:"Mostrar o Menu de navega\xe7\xe3o do administrador",show_courses_navigation_menu_7ad1a8d4:"Mostrar Menu de navega\xe7\xe3o de disciplinas",show_groups_navigation_menu_1521d38d:"Mostrar o Menu de navega\xe7\xe3o dos grupos",show_navigation_menu_34e7f441:"Mostrar o Menu de Navega\xe7\xe3o"},"pt-BR":{hide_account_navigation_menu_ccdf9480:"Ocultar Menu de Navega\xe7\xe3o da conta",hide_admin_navigation_menu_5cab9c9e:"Ocultar Menu de Navega\xe7\xe3o do Admin",hide_courses_navigation_menu_6f7c4cfd:"Ocultar Menu de Navega\xe7\xe3o dos cursos",hide_groups_navigation_menu_62e8b3d0:"Ocultar Menu de Navega\xe7\xe3o dos grupos",hide_navigation_menu_f0b3e90:"Ocultar Menu de Navega\xe7\xe3o",show_account_navigation_menu_d97270a9:"Mostrar Menu de Navega\xe7\xe3o da conta",show_admin_navigation_menu_92fb579f:"Mostrar Menu de Navega\xe7\xe3o do Admin",show_courses_navigation_menu_7ad1a8d4:"Mostrar Menu de Navega\xe7\xe3o dos cursos",show_groups_navigation_menu_1521d38d:"Mostrar Menu de Navega\xe7\xe3o dos grupos",show_navigation_menu_34e7f441:"Mostrar Menu de Navega\xe7\xe3o"},ru:{hide_account_navigation_menu_ccdf9480:"\u0421\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438",hide_admin_navigation_menu_5cab9c9e:"\u0421\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430",hide_courses_navigation_menu_6f7c4cfd:"\u0421\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043a\u0443\u0440\u0441\u043e\u0432",hide_groups_navigation_menu_62e8b3d0:"\u0421\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0433\u0440\u0443\u043f\u043f",hide_navigation_menu_f0b3e90:"\u0421\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438",show_account_navigation_menu_d97270a9:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438",show_admin_navigation_menu_92fb579f:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430",show_courses_navigation_menu_7ad1a8d4:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043a\u0443\u0440\u0441\u043e\u0432",show_groups_navigation_menu_1521d38d:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0433\u0440\u0443\u043f\u043f",show_navigation_menu_34e7f441:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438"},sl:{hide_account_navigation_menu_ccdf9480:"Skrij meni navigacije po ra\u010dunu",hide_admin_navigation_menu_5cab9c9e:"Skrij skrbni\u0161ki meni navigacije",hide_courses_navigation_menu_6f7c4cfd:"Skrij meni navigacije po predmetih",hide_groups_navigation_menu_62e8b3d0:"Skrij meni navigacije po skupinah",hide_navigation_menu_f0b3e90:"Skrij meni navigacije",show_account_navigation_menu_d97270a9:"Prika\u017ei meni navigacije po ra\u010dunu",show_admin_navigation_menu_92fb579f:"Prika\u017ei skrbni\u0161ki meni navigacije",show_courses_navigation_menu_7ad1a8d4:"Prika\u017ei meni navigacije po predmetih",show_groups_navigation_menu_1521d38d:"Prika\u017ei meni navigacije po skupinah",show_navigation_menu_34e7f441:"Prika\u017ei meni navigacije"},sv:{hide_account_navigation_menu_ccdf9480:"D\xf6lj konto-navigeringsmeny",hide_admin_navigation_menu_5cab9c9e:"D\xf6lj administrations-navigeringsmeny",hide_courses_navigation_menu_6f7c4cfd:"D\xf6lj kurs-navigeringsmeny",hide_groups_navigation_menu_62e8b3d0:"D\xf6lj grupp-navigeringsmeny",hide_navigation_menu_f0b3e90:"D\xf6lj navigeringsmeny",show_account_navigation_menu_d97270a9:"Visa konto-navigeringsmeny",show_admin_navigation_menu_92fb579f:"Visa administrat\xf6rs-navigeringsmeny",show_courses_navigation_menu_7ad1a8d4:"Visa kurs-navigeringsmeny",show_groups_navigation_menu_1521d38d:"Visa grupp-navigeringsmeny",show_navigation_menu_34e7f441:"Visa navigeringsmeny"},"sv-x-k12":{hide_account_navigation_menu_ccdf9480:"D\xf6lj konto-navigeringsmeny",hide_admin_navigation_menu_5cab9c9e:"D\xf6lj administrations-navigeringsmeny",hide_courses_navigation_menu_6f7c4cfd:"D\xf6lj kurs-navigeringsmeny",hide_groups_navigation_menu_62e8b3d0:"D\xf6lj grupp-navigeringsmeny",hide_navigation_menu_f0b3e90:"D\xf6lj navigeringsmeny",show_account_navigation_menu_d97270a9:"Visa konto-navigeringsmeny",show_admin_navigation_menu_92fb579f:"Visa administrat\xf6rs-navigeringsmeny",show_courses_navigation_menu_7ad1a8d4:"Visa kurs-navigeringsmeny",show_groups_navigation_menu_1521d38d:"Visa grupp-navigeringsmeny",show_navigation_menu_34e7f441:"Visa navigeringsmeny"},uk:{hide_account_navigation_menu_ccdf9480:"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443",hide_admin_navigation_menu_5cab9c9e:"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430",hide_courses_navigation_menu_6f7c4cfd:"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457 \u043a\u0443\u0440\u0441\u0456\u0432",hide_groups_navigation_menu_62e8b3d0:"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457 \u0433\u0440\u0443\u043f",hide_navigation_menu_f0b3e90:"\u0421\u0445\u043e\u0432\u0430\u0442\u0438 \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457 ",show_account_navigation_menu_d97270a9:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u041c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0443",show_admin_navigation_menu_92fb579f:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u041c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457 \u0430\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430",show_courses_navigation_menu_7ad1a8d4:"\u041f\u043e\u043a\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457 \u043a\u0443\u0440\u0441\u0456\u0432",show_groups_navigation_menu_1521d38d:"\u041f\u043e\u043a\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457 \u0433\u0440\u0443\u043f",show_navigation_menu_34e7f441:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0438 \u043c\u0435\u043d\u044e \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457"},"zh-Hans":{hide_account_navigation_menu_ccdf9480:"\u9690\u85cf\u5e10\u6237\u5bfc\u822a\u83dc\u5355",hide_admin_navigation_menu_5cab9c9e:"\u9690\u85cf\u7ba1\u7406\u5458\u5bfc\u822a\u83dc\u5355",hide_courses_navigation_menu_6f7c4cfd:"\u9690\u85cf\u8bfe\u7a0b\u5bfc\u822a\u83dc\u5355",hide_groups_navigation_menu_62e8b3d0:"\u9690\u85cf\u5c0f\u7ec4\u5bfc\u822a\u83dc\u5355",hide_navigation_menu_f0b3e90:"\u9690\u85cf\u5bfc\u822a\u83dc\u5355",show_account_navigation_menu_d97270a9:"\u663e\u793a\u5e10\u6237\u5bfc\u822a\u83dc\u5355",show_admin_navigation_menu_92fb579f:"\u663e\u793a\u7ba1\u7406\u5458\u5bfc\u822a\u83dc\u5355",show_courses_navigation_menu_7ad1a8d4:"\u663e\u793a\u8bfe\u7a0b\u5bfc\u822a\u83dc\u5355",show_groups_navigation_menu_1521d38d:"\u663e\u793a\u5c0f\u7ec4\u5bfc\u822a\u83dc\u5355",show_navigation_menu_34e7f441:"\u663e\u793a\u5bfc\u822a\u83dc\u5355"},"zh-Hant":{hide_account_navigation_menu_ccdf9480:"\u96b1\u85cf\u5e33\u6236\u5c0e\u822a\u5de5\u5177\u9078\u55ae",hide_admin_navigation_menu_5cab9c9e:"\u96b1\u85cf\u7ba1\u7406\u54e1\u5c0e\u822a\u5de5\u5177\u9078\u55ae",hide_courses_navigation_menu_6f7c4cfd:"\u96b1\u85cf\u8ab2\u7a0b\u5c0e\u822a\u5de5\u5177\u9078\u55ae",hide_groups_navigation_menu_62e8b3d0:"\u96b1\u85cf\u5c0f\u7d44\u5c0e\u822a\u5de5\u5177\u9078\u55ae",hide_navigation_menu_f0b3e90:"\u96b1\u85cf\u5c0e\u822a\u5de5\u5177\u9078\u55ae",show_account_navigation_menu_d97270a9:"\u986f\u793a\u5e33\u6236\u5c0e\u822a\u5de5\u5177\u9078\u55ae",show_admin_navigation_menu_92fb579f:"\u986f\u793a\u7ba1\u7406\u54e1\u5c0e\u822a\u5de5\u5177\u9078\u55ae",show_courses_navigation_menu_7ad1a8d4:"\u986f\u793a\u8ab2\u7a0b\u5c0e\u822a\u5de5\u5177\u9078\u55ae",show_groups_navigation_menu_1521d38d:"\u986f\u793a\u5c0f\u7d44\u5c0e\u822a\u5de5\u5177\u9078\u55ae",show_navigation_menu_34e7f441:"\u986f\u793a\u5c0e\u822a\u5de5\u5177\u9078\u55ae"}}})},BuCMrQMyFY:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("eJBzaBDd6c"))
i("xolCioscxi")
i("kzdUuF07HD")
var o={buttonConfig:function(e,t){var i={title:e.name,classes:"widget btn instructure_external_tool_button"}
ENV.use_rce_enhancements?i.onAction=function(){return t.execCommand("instructureExternalButton".concat(e.id))}:i.cmd="instructureExternalButton".concat(e.id)
e.canvas_icon_class?i.icon="hack-to-avoid-mce-prefix ".concat(e.canvas_icon_class):i.image=e.icon_url
return i},clumpedButtonMapping:function(e,t,i){return e.reduce(function(e,n){var o
o=n.canvas_icon_class?"<i class='".concat((0,a.default)(n.canvas_icon_class),"' data-tool-id='").concat(n.id,"'></i>"):"<img src='".concat((0,a.default)(n.icon_url),"' data-tool-id='").concat(n.id,"'/>")
e[o+="&nbsp;".concat((0,a.default)(n.name))]=function(){i(n,t)}
return e},{})},attachClumpedDropdown:function(e,t,i){e.dropdownList({options:t})
i.on("click",function(){e.dropdownList("hide")})}}
t.default=o
e.exports=t.default},"CU+gNa7iD4":function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("uceVF1dIMW")),o=n(i("mOY9BNujNR")),r=n(i("ArN3I+GqU9")),s=n(i("eJBzaBDd6c"))
i("D2yEjZ1CP5")
var d={buildMinimizerLink:function(){return(0,o.default)('<a href="#" style="font-size: 0.8em;">\n      '.concat((0,s.default)(a.default.t("links.minimize_embedded_kaltura_content","Minimize embedded content")),"\n    </a>"))},buildCommentHolder:function(e){return(0,o.default)('<div><div class="innerholder" tabindex="-1" style="margin-bottom: 15px;"></div></div>')},getMediaCommentId:function(e){var t,i=e.data("media_comment_id")||e.find(".media_comment_id:first").text()
i||(t=e.attr("id"))
t&&t.match(/^media_comment_/)&&(i=t.substring(14))
return i},collapseComment:function(e){void 0!==(t=e.find("video,audio").data("mediaelementplayer"))&&null!==t&&function(e){return e.pause()}(t)
var t
e.remove()
o.default.trackEvent("hide_embedded_content","hide_media")}},l=function(e){(0,o.default)(e.target).find("div.mejs-audio").focus()},c=function(e){return e.closest("td").length>0},u=function(e){return e.closest("td").css("width").replace("px","")<300},_=function(e){return c(e)&&u(e)},h=function(e){var t=e.closest("td"),i=t.css("width")
t.data("orig-width",i)
t.css("width","".concat(300,"px"))};(0,o.default)(document).on("click","a.instructure_inline_media_comment",(0,r.default)(function(){if(INST.kalturaSettings){var e=(0,o.default)(this),t="video",i=d.getMediaCommentId(e),n=d.buildCommentHolder(e)
_(e)&&h(e)
e.after(n)
e.hide();("audio"===e.data("media_comment_type")||e.is(".audio_playback, .audio_comment, .instructure_audio_link"))&&(t="audio")
n.children("div").mediaComment("show_inline",i,t,e.data("download")||e.attr("href"))
d.buildMinimizerLink().appendTo(n).click((0,r.default)(function(){var t=e.closest("td")
e.show().focus()
t.css("width",t.data("orig-width"))
d.collapseComment(n)}))
o.default.trackEvent("show_embedded_content","show_media")
n.find(".innerholder").css("outline","none")
n.find(".innerholder").on("focus",l)}else alert(a.default.t("alerts.kaltura_disabled","Kaltura has been disabled for this Canvas site"))}))
var f=d
t.default=f
e.exports=t.default},"EHPQ5oFRp/":function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("fKPvt3BvJ9")),o=n(i("Z60aNDY003")),r=n(i("C9uTDLcwK6")),s=i("i8I74pbaWm"),d=function(){function e(t,i,n,a){(0,o.default)(this,e)
this.formatBtnGroup="bold italic underline forecolor backcolor removeformat alignleft aligncenter alignright"
this.positionBtnGroup="outdent indent superscript subscript bullist numlist"
this.fontBtnGroup="ltr rtl fontsizeselect formatselect check_a11y"
this.baseURL=t.baseURL
this.maxButtons=i.maxVisibleEditorButtons
this.extraButtons=i.editorButtons
this.instConfig=i
this.viewportWidth=n
this.idAttribute=a}(0,r.default)(e,[{key:"defaultConfig",value:function(){var e
return e={selector:"#".concat(this.idAttribute),toolbar:this.toolbar()},(0,a.default)(e,!window.ENV.use_rce_enhancements&&"theme","modern"),(0,a.default)(e,!window.ENV.use_rce_enhancements&&"skin",!1),(0,a.default)(e,"directionality",(0,s.getDirection)()),(0,a.default)(e,"plugins","autolink,media,paste,table,".concat(window.ENV.use_rce_enhancements?"":"textcolor",",link,directionality,lists,a11y_checker,wordcount")),(0,a.default)(e,"external_plugins",{instructure_image:"/javascripts/tinymce_plugins/instructure_image/plugin.js",instructure_links:"/javascripts/tinymce_plugins/instructure_links/plugin.js",instructure_embed:"/javascripts/tinymce_plugins/instructure_embed/plugin.js",instructure_equation:"/javascripts/tinymce_plugins/instructure_equation/plugin.js",instructure_equella:"/javascripts/tinymce_plugins/instructure_equella/plugin.js",instructure_external_tools:"/javascripts/tinymce_plugins/instructure_external_tools/plugin.js",instructure_record:"/javascripts/tinymce_plugins/instructure_record/plugin.js"}),(0,a.default)(e,"language_load",!1),(0,a.default)(e,"convert_urls",!1),(0,a.default)(e,"menubar",!0),(0,a.default)(e,"branding",!1),(0,a.default)(e,"remove_script_host",!0),(0,a.default)(e,"resize",!0),(0,a.default)(e,"block_formats","Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Preformatted=pre"),(0,a.default)(e,"extended_valid_elements","@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],div,span,#p,h2,h3,h4,h5,h6,header,ul,ol,li[value],ol[reversed|start|type|compact],pre[width],abbr,table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],title,tr[char|charoff|valign|bgcolor],ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],mark"),(0,a.default)(e,"non_empty_elements","td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track"),(0,a.default)(e,"content_css",window.ENV.url_to_what_gets_loaded_inside_the_tinymce_editor_css),(0,a.default)(e,"browser_spellcheck",!0),(0,a.default)(e,"init_instance_callback",function(e){$("#".concat(e.id)).parent().css("visibility","visible")}),e}},{key:"external_buttons",value:function(){for(var e="",t=0;this.extraButtons&&t<this.extraButtons.length;t++)this.extraButtons.length<=this.maxButtons||t<this.maxButtons-1?e="".concat(e," instructure_external_button_").concat(this.extraButtons[t].id):e.match(/instructure_external_button_clump/)||(e+=" instructure_external_button_clump")
return e}},{key:"buildInstructureButtons",value:function(){var e=" instructure_image instructure_equation"
e+=this.external_buttons()
this.instConfig&&this.instConfig.allowMediaComments&&this.instConfig.kalturaSettings&&!this.instConfig.kalturaSettings.hide_rte_button&&(e+=" instructure_record")
return e+=this.instConfig&&this.instConfig.equellaEnabled?" instructure_equella":""}},{key:"balanceButtons",value:function(e){var t="table media instructure_links unlink".concat(e),i="",n="",a=""
if(this.viewportWidth<359&&this.viewportWidth>0){i=this.formatBtnGroup
n="".concat(this.positionBtnGroup," ").concat(t)
a=this.fontBtnGroup}else if(this.viewportWidth<1200){i="".concat(this.formatBtnGroup," ").concat(this.positionBtnGroup)
n="".concat(t," ").concat(this.fontBtnGroup)}else i="".concat(this.formatBtnGroup," ").concat(this.positionBtnGroup," ").concat(t," ").concat(this.fontBtnGroup)
return window.ENV.use_rce_enhancements?[i,n,a]:[i,n,a].map(function(e){return e.split(" ").join(",")})}},{key:"toolbar",value:function(){var e=this.buildInstructureButtons()
return this.balanceButtons(e)}}])
return e}()
t.default=d
e.exports=t.default},EJaXNmAx3B:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("WQuCCdRv9v")),o=n(i("Vv/x3gjRQP")),r=n(i("mOY9BNujNR")),s=n(i("eJBzaBDd6c")),d=n(i("BuCMrQMyFY")),l=n(i("3HTgpJ/Ga1")),c=n(i("hpV4JWU0K6")),u=(n(i("GiK3r5kD1Y")),n(i("O27J2VCga9"))),_={more_external_tools:(0,s.default)(o.default.t("more_external_tools","More External Tools"))},h={init:function(e,t,n){c.default.initEditor(e)
if(n&&n.editorButtons&&n.editorButtons.length){var o={open:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i]
return setTimeout(function(){var e
return(e=o).open.apply(e,t)},50)}}
i.e(3).then(i.bind(null,"Wr2aXyPyiY")).then(function(t){var i=document.createElement("div")
document.body.appendChild(i)
u.default.render((0,a.default)(t,{win:window,editor:e,contextAssetString:ENV.context_asset_string,iframeAllowances:(0,l.default)(),resourceSelectionUrl:(0,r.default)("#context_external_tool_resource_selection_url").attr("href"),deepLinkingOrigin:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}),i,function(){o=this})})
for(var s=[],h=function(t){var i=n.editorButtons[t]
if(n.editorButtons.length>n.maxVisibleEditorButtons&&t>=n.maxVisibleEditorButtons-1)s.push(i)
else{e.addCommand("instructureExternalButton".concat(i.id),function(){o.open(i)});(ENV.use_rce_enhancements?e.ui.registry:e).addButton("instructure_external_button_".concat(i.id),d.default.buttonConfig(i,e))}},f=0;n.editorButtons&&f<n.editorButtons.length;f++)h(f)
if(s.length){var m=function(){var t=d.default.clumpedButtonMapping(s,e,function(e){return o.open(e)})
d.default.attachClumpedDropdown((0,r.default)("#".concat(this._id)),t,e)}
ENV.use_rce_enhancements?e.ui.registry.addButton("instructure_external_button_clump",{title:_.more_external_tools,image:"/images/downtick.png",onAction:m}):e.addButton("instructure_external_button_clump",{title:_.more_external_tools,image:"/images/downtick.png",onkeyup:function(e){if(32===e.keyCode||13===e.keyCode){e.stopPropagation()
m.call(this)}},onclick:m})}}}}
t.default=h
e.exports=t.default},EKuPgEpL6b:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L"),a=n(i("mOY9BNujNR")),o=n(i("zNOhtK+31x"));(0,a.default)(document).on("mousedown click keydown",".al-trigger",function(e){var t=(0,a.default)(this)
if(!t.data("kyleMenu")){var i=a.default.extend({noButton:!0},t.data("kyleMenuOptions"))
t.data("append-to-body")&&(i.appendMenuTo="body")
i=a.default.extend(i,{popupOpts:{position:{my:t.data("popup-my"),at:t.data("popup-at"),within:t.data("popup-within")}}})
new o.default(t,i)
t.trigger(e)}})},Eq7qibUFi3:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("Z60aNDY003")),o=n(i("C9uTDLcwK6")),r=n(i("mOY9BNujNR")),s=".lti-thumbnail-launch"
function d(e){e.preventDefault()
l.launch((0,r.default)(e.target).closest(s))}var l=new(function(){function e(){(0,a.default)(this,e);(0,r.default)(document.body).delegate(s,"click",d)}(0,o.default)(e,[{key:"launch",value:function(e){var t=JSON.parse(e.attr("target")),i=(0,r.default)("<iframe/>",{src:e.attr("href"),allowfullscreen:"",width:t.displayWidth||500,height:t.displayHeight||500})
e.replaceWith(i)}}])
return e}())(s),c=l
t.default=c
e.exports=t.default},FMOK6cJcp3:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("mOY9BNujNR"))
i("t0oyyDFjk2")
function o(e,t,i){var n
null==t&&(t=e.is(":ui-dialog:hidden")||"true"!==e.attr("aria-expanded"))
var r,s=(0,a.default)("[aria-controls*=".concat(e.attr("id"),"]"))
s.filter(function(){return(0,a.default)(this).data("hideWhileTargetShown")}).toggle(!t)
if(i&&void 0!==i.attr("aria-expanded")){i.attr("aria-expanded",!("true"===i.attr("aria-expanded")))
e.toggle("true"===i.attr("aria-expanded"))}else e.attr("aria-expanded","".concat(t)).toggle(t)
if(e.is(":ui-dialog")||(n=e.data("turnIntoDialog"))){if(n&&t){n=a.default.extend({autoOpen:!1,close:function(){o(e,!1)}},n)
e.dialog(n).fixDialogButtons()}if(t){e.dialog("open")
e.data("read-on-open")&&e.dialog("widget").attr("aria-live","assertive").attr("aria-atomic","true")}else e.dialog("isOpen")&&e.dialog("close")}s.each((r=t?"Shown":"Hidden",function(){var e,t=(0,a.default)(this)
if(e=t.data("textWhileTarget".concat(r))){var i="textWhileTarget".concat("Hidden"===r?"Shown":"Hidden")
t.data(i)||t.data(i,t.text())
t.text(e)}}))}var r={bind:function(){(0,a.default)(document).on("click change keyclick",".element_toggler[aria-controls]",function(e){var t,i=(0,a.default)(this)
if(i.is('input[type="checkbox"]')){if("click"===e.type)return
t=i.prop("checked")}"click"===e.type&&e.preventDefault()
var n=i.closest(".user_content")
n.length||(n=(0,a.default)(document.body))
var r=n.find("#".concat(i.attr("aria-controls").replace(/\s/g,", #")))
r.length&&o(r,t,i)
var s=i.find('i[class*="icon-mini-arrow"].auto_rotate')
if(s.length){s.toggleClass("icon-mini-arrow-down")
s.toggleClass("icon-mini-arrow-right")}})}}
r.bind()
var s=r
t.default=s
e.exports=t.default},Fbgaaelsi7:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.refreshFn=function(e){var t=e,i=null
return function(e){null===i&&(i=a.default.post("/api/v1/jwts/refresh",{jwt:t}).then(function(e){i=null
return t=e.data.token}))
"function"==typeof e&&i.then(e)
return i}}
var a=n(i("Wx/Z6H26TR"))},FjPpBpSp8P:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")(i("mOY9BNujNR"))
i("r81G667jwg")
i("3pTo86YxQs");(0,n.default)(document).ready(function(){(0,n.default)("#floating_reminders").draggable();(0,n.default)(".show_reminders_link").click(function(e){e.preventDefault();(0,n.default)(this).blur()
var t=(0,n.default)("#floating_reminders"),i=t.clone()
i.children().css("visibility","hidden")
var a=(0,n.default)("#reminders_icon").offset(),o=(0,n.default)("#floating_reminders").offset().top
t.after(i)
i.css({width:20,height:20,left:a.left,top:a.top-o,opacity:0})
t.css("visibility","hidden").css("left","")
i.animate({top:t.css("top"),left:t.css("left"),width:t.width(),height:t.height(),opacity:1},"slow",function(){(0,n.default)(this).remove()
t.css("visibility","visible")
t.find("a:not(.hide_reminders_link):visible:first").focus();(0,n.default)("#reminders_icon").hide()})
t.find(".update_session_url").attr("href")});(0,n.default)(".hide_reminders_link").click(function(e){e.preventDefault()
var t=(0,n.default)(this).parents("#floating_reminders"),i=t.clone()
t.after(i).css("left",-2e3)
i.children().css("visibility","hidden")
var a=(0,n.default)("#reminders_icon").show().offset(),o=i.offset().top
i.animate({width:20,height:20,left:a.left,top:a.top-o,opacity:0},"slow",function(){(0,n.default)(this).remove()})
t.find(".update_session_url").attr("href")});(0,n.default)(".drop_held_context_link").click(function(e){e.preventDefault()
var t=(0,n.default)(this).parents(".reminder")
t.confirmDelete({url:(0,n.default)(this).attr("href"),message:"Are you sure you want to drop this "+t.find(".item_type").text()+"?",success:function(e){(0,n.default)(this).fadeOut("fast",function(){(0,n.default)(this).remove()
0===(0,n.default)("#floating_reminders .reminder").length&&(0,n.default)("#floating_reminders").fadeOut("fast",function(){(0,n.default)(this).remove();(0,n.default)("#reminders_icon").remove()})})}})})})},H26p2vhyFo:function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=i("36QOWIB4+W"),a=i.n(n),o=i("mOY9BNujNR")
i.n(o).a.extend(!0,a.a,{translations:{ar:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\u0647\u0644 \u062a\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u063a\u0627\u0621 \u0628\u0627\u0644\u0641\u0639\u0644\u061f \u0642\u062f \u0644\u0627 \u064a\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0627\u0644\u062a\u064a \u0623\u062c\u0631\u064a\u062a\u0647\u0627.",cancel_caeb1e68:"\u0625\u0644\u063a\u0627\u0621",changes_you_made_may_not_be_saved_4e8db973:"\u0642\u062f \u0644\u0627 \u064a\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0627\u0644\u062a\u064a \u0623\u062c\u0631\u064a\u062a\u0647\u0627.",close_d634289d:"\u0625\u063a\u0644\u0627\u0642",editor:{button:{insert_equation:"\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0645\u0639\u0627\u062f\u0644\u0629"},cannot_render_equation:"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0639\u0631\u0636 \u0647\u0630\u0647 \u0627\u0644\u0645\u0639\u0627\u062f\u0644\u0629 \u0641\u064a \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0623\u0633\u0627\u0633\u064a.",done:{title:"\u0627\u0646\u0642\u0631 \u0644\u0625\u0646\u0647\u0627\u0621 \u062a\u0639\u062f\u064a\u0644 \u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0646\u0635 \u0627\u0644\u0645\u0646\u0633\u0642\u0629"},done_as_in_finished:"\u0627\u0646\u062a\u0647\u0627\u0621",embed_from_external_tool:'"\u062a\u0636\u0645\u064a\u0646 \u0645\u062d\u062a\u0648\u0649 \u0645\u0646 \u0627\u0644\u0623\u062f\u0627\u0629 \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629"',equation_editor_title:"\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u0634\u0631\u0637\u0629 \u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0647\u0646\u0627 \u0623\u0648 \u062a\u0628\u062f\u064a\u0644 \u0627\u0644\u0639\u0631\u0636 \u0625\u0644\u0649 \u0645\u062a\u0642\u062f\u0645 \u0644\u0644\u0643\u062a\u0627\u0628\u0629/ \u0644\u0644\u0635\u0642 \u0628\u062a\u0646\u0633\u064a\u0642 LaTeX",more_external_tools:"\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0623\u062f\u0648\u0627\u062a \u0627\u0644\u062e\u0627\u0631\u062c\u064a\u0629",switch_editor_html:"\u0645\u062d\u0631\u0631 HTML",switch_editor_rich_text:"Rich Content Editor",titles:{insert_edit_image:"\u0625\u062f\u0631\u0627\u062c / \u062a\u062d\u0631\u064a\u0631 \u0635\u0648\u0631\u0629"}},failed_to_save_please_try_again_later_bb7070fb:"\u0641\u0634\u0644 \u0627\u0644\u062d\u0641\u0638\u060c \u0627\u0644\u0631\u062c\u0627\u0621 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0644\u0627\u062d\u0642\u064b\u0627",remove_attachment_ceae0973:"\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0645\u0631\u0641\u0642",saving_d55dd90e:"\u062c\u0627\u0631\u064d \u0627\u0644\u062d\u0641\u0638...",the_following_content_is_partner_provided_ed1da756:"\u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u062a\u0627\u0644\u064a \u062a\u0645 \u0625\u062f\u062e\u0627\u0644\u0647 \u0628\u0648\u0627\u0633\u0637\u0629 \u0634\u0631\u064a\u0643",the_preceding_content_is_partner_provided_d753928c:"\u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0633\u0627\u0628\u0642 \u062a\u0645 \u0625\u062f\u062e\u0627\u0644\u0647 \u0628\u0648\u0627\u0633\u0637\u0629 \u0634\u0631\u064a\u0643"},cy:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Ydych chi\u2019n si\u0175r eich bod am ganslo? Mae\u2019n bosib na fydd y newidiadau rydych wedi\u2019u gwneud yn cael eu cadw.",cancel_caeb1e68:"Canslo",changes_you_made_may_not_be_saved_4e8db973:"Mae\u2019n bosib na fydd y newidiadau rydych wedi\u2019u gwneud yn cael eu cadw.",close_d634289d:"Cau",editor:{button:{insert_equation:"Rhowch Hafaliad"},cannot_render_equation:"Does dim modd rendro\u2019r hafaliad hwn yn y Wedd Syml.",done:{title:"Cliciwch i orffen golygu\u2019r ardal testun cyfoethog"},done_as_in_finished:"Wedi gorffen",embed_from_external_tool:'"Plannu cynnwys o Adnodd Allanol"',equation_editor_title:"Defnyddiwch y bariau offer yma, neu newid i\u2019r Wedd Fanylach i deipio/gludo LaTeX",more_external_tools:"Mwy o Adnoddau Allanol",switch_editor_html:"Golygydd HTML",switch_editor_rich_text:"Golygydd Cynnwys Cyfoethog",titles:{insert_edit_image:"Mewnosod / Golygu Delwedd"}},failed_to_save_please_try_again_later_bb7070fb:"Wedi methu cadw, rhowch gynnig arall arni rywbryd eto",remove_attachment_ceae0973:"Tynnu Atodiad",saving_d55dd90e:"Wrthi\u2019n cadw...",the_following_content_is_partner_provided_ed1da756:"Mae\u2019r cynnwys canlynol yn cael ei ddarparu gan bartner",the_preceding_content_is_partner_provided_d753928c:"Mae\u2019r cynnwys blaenorol yn cael ei ddarparu gan bartner"},da:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Er du sikker p\xe5, du vil annullere? \xc6ndringer, du har foretaget, bliver muligvis ikke gemt.",cancel_caeb1e68:"Annuller",changes_you_made_may_not_be_saved_4e8db973:"\xc6ndringer, du har foretaget, kan ikke blive gemt.",close_d634289d:"Luk",editor:{button:{insert_equation:"Inds\xe6t regnestykke"},cannot_render_equation:"Dette regnestykke kan ikke gengives i Basisvisning.",done:{title:"Klik for at afslutte redigering af RTF-omr\xe5de"},done_as_in_finished:"Udf\xf8rt",embed_from_external_tool:"Integrer indhold fra eksternt v\xe6rkt\xf8j",equation_editor_title:"Brug v\xe6rkt\xf8jslinjerne her, eller skift visning til avanceret for at indtaste/inds\xe6tte i LaTeX",more_external_tools:"Flere eksterne v\xe6rkt\xf8jer",switch_editor_html:"HTML-editor",switch_editor_rich_text:"Rich Content Editor",titles:{insert_edit_image:"Indf\xf8r / rediger billede"}},failed_to_save_please_try_again_later_bb7070fb:"Kunne ikke gemmes, pr\xf8v igen senere",remove_attachment_ceae0973:"Slet vedh\xe6ftet fil",saving_d55dd90e:"Gemmer ...",the_following_content_is_partner_provided_ed1da756:"F\xf8lgende indhold er partnerleveret",the_preceding_content_is_partner_provided_d753928c:"Foreg\xe5ende indhold er partnerleveret"},"da-x-k12":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Er du sikker p\xe5, du vil annullere? \xc6ndringer, du har foretaget, bliver muligvis ikke gemt.",cancel_caeb1e68:"Annuller",changes_you_made_may_not_be_saved_4e8db973:"\xc6ndringer, du har foretaget, kan ikke blive gemt.",close_d634289d:"Luk",editor:{button:{insert_equation:"Inds\xe6t regnestykke"},cannot_render_equation:"Dette regnestykke kan ikke gengives i Basisvisning.",done:{title:"Klik for at afslutte redigering af RTF-omr\xe5de"},done_as_in_finished:"Udf\xf8rt",embed_from_external_tool:"Integrer indhold fra eksternt v\xe6rkt\xf8j",equation_editor_title:"Brug v\xe6rkt\xf8jslinjerne her, eller skift visning til avanceret for at indtaste/inds\xe6tte i LaTeX",more_external_tools:"Flere eksterne v\xe6rkt\xf8jer",switch_editor_html:"HTML-editor",switch_editor_rich_text:"Rich Content Editor",titles:{insert_edit_image:"Indf\xf8r / rediger billede"}},failed_to_save_please_try_again_later_bb7070fb:"Kunne ikke gemmes, pr\xf8v igen senere",remove_attachment_ceae0973:"Slet vedh\xe6ftet fil",saving_d55dd90e:"Gemmer ...",the_following_content_is_partner_provided_ed1da756:"F\xf8lgende indhold er partnerleveret",the_preceding_content_is_partner_provided_d753928c:"Foreg\xe5ende indhold er partnerleveret"},de:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"M\xf6chten Sie wirklich abbrechen? Vorgenommene \xc4nderungen werden nicht gespeichert.",cancel_caeb1e68:"Abbrechen",changes_you_made_may_not_be_saved_4e8db973:"Vorgenommene \xc4nderungen werden nicht gespeichert.",close_d634289d:"Schlie\xdfen",editor:{button:{insert_equation:"Gleichung einf\xfcgen"},cannot_render_equation:"Diese Gleichung kann in der Basisansicht nicht dargestellt werden.",done:{title:"Klicken, um die Bearbeitung des Rich-Text-Bereichs abzuschlie\xdfen"},done_as_in_finished:"Fertig",embed_from_external_tool:"Inhalt aus externem Tool einbetten",equation_editor_title:"Die Symbolleisten hier verwenden oder die Ansicht zum Eingeben/Einf\xfcgen in LaTeX in \u201eErweitert\u201c \xe4ndern",more_external_tools:"Weitere externe Tools",switch_editor_html:"HTML-Editor",switch_editor_rich_text:"Rich-Content-Editor",titles:{insert_edit_image:"Bild einf\xfcgen/bearbeiten"}},failed_to_save_please_try_again_later_bb7070fb:"Konnte nicht gespeichert werden. Bitte versuchen Sie es sp\xe4ter nochmal.",remove_attachment_ceae0973:"Anhang entfernen",saving_d55dd90e:"Wird gespeichert ...",the_following_content_is_partner_provided_ed1da756:"Der folgende Content stammt von einem Partner.",the_preceding_content_is_partner_provided_d753928c:"Der vorhergehende Content stammt von einem Partner."},el:{cancel_caeb1e68:"\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",close_d634289d:"\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf",editor:{button:{insert_equation:"\u0395\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u0395\u03be\u03af\u03c3\u03c9\u03c3\u03b7\u03c2"},cannot_render_equation:"\u0391\u03c5\u03c4\u03ae \u03b7 \u03b5\u03be\u03af\u03c3\u03c9\u03c3\u03b7 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b4\u03c5\u03bd\u03b1\u03c4\u03cc \u03bd\u03b1 \u03b1\u03bd\u03b1\u03c0\u03b1\u03c1\u03b1\u03c7\u03b8\u03b5\u03af \u03c3\u03c4\u03b7\u03bd \u0392\u03b1\u03c3\u03b9\u03ba\u03ae \u039c\u03bf\u03c1\u03c6\u03ae",done:{title:"\u039a\u03ac\u03bd\u03c4\u03b5 \u03ba\u03bb\u03b9\u03ba \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03c3\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03c4\u03b7\u03c2 \u03c0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae\u03c2 rich text."},done_as_in_finished:"\u039f\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03b8\u03b7\u03ba\u03b5",embed_from_external_tool:"\xab\u0395\u03bd\u03c3\u03c9\u03bc\u03ac\u03c4\u03c9\u03c3\u03b7 \u03c0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b1\u03c0\u03cc \u0395\u03be\u03c9\u03c4\u03b5\u03c1\u03b9\u03ba\u03cc \u0395\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf\xbb",equation_editor_title:"\u03a7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b9\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ad\u03c2 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03c9\u03bd \u03b5\u03b4\u03ce \u03ae \u03b5\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u0391\u03bb\u03bb\u03b1\u03b3\u03ae \u0395\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7\u03c2 \u03c3\u03b5 \u03a0\u03c1\u03bf\u03c7\u03c9\u03c1\u03b7\u03bc\u03ad\u03bd\u03b7 \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03c0\u03bb\u03b7\u03ba\u03c4\u03c1\u03bf\u03bb\u03bf\u03b3\u03ae\u03c3\u03b5\u03c4\u03b5/\u03b5\u03c0\u03b9\u03ba\u03bf\u03bb\u03bb\u03ae\u03c3\u03b5\u03c4\u03b5 \u03c3\u03c4\u03bf LaTeX",more_external_tools:"\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1 \u0395\u03be\u03c9\u03c4\u03b5\u03c1\u03b9\u03ba\u03ac \u0395\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03b1",switch_editor_html:"\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03ae\u03c2 HTML",switch_editor_rich_text:"\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03ae\u03c2 \u03a0\u03bb\u03bf\u03cd\u03c3\u03b9\u03bf\u03c5 \u03a0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5-rich content",titles:{insert_edit_image:"\u0395\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae / E\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u0395\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2"}},remove_attachment_ceae0973:"\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u0395\u03c0\u03b9\u03c3\u03cd\u03bd\u03b1\u03c8\u03b7\u03c2",saving_d55dd90e:"\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7..."},"en-AU":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Are you sure you want to cancel? Changes you made may not be saved.",cancel_caeb1e68:"Cancel",changes_you_made_may_not_be_saved_4e8db973:"Changes you made may not be saved.",close_d634289d:"Close",editor:{button:{insert_equation:"Insert Equation"},cannot_render_equation:"This equation cannot be rendered in Basic View.",done:{title:"Click to finish editing the rich text area"},done_as_in_finished:"Done",embed_from_external_tool:'"Embed content from External Tool"',equation_editor_title:"Use the toolbars here, or Switch View to Advanced to type/paste in LaTeX",more_external_tools:"More External Tools",switch_editor_html:"HTML Editor",switch_editor_rich_text:"Rich Content Editor",titles:{insert_edit_image:"Insert / Edit Image"}},failed_to_save_please_try_again_later_bb7070fb:"Failed to save, please try again later",remove_attachment_ceae0973:"Remove Attachment",saving_d55dd90e:"Saving...",the_following_content_is_partner_provided_ed1da756:"The following content is partner provided",the_preceding_content_is_partner_provided_d753928c:"The preceding content is partner provided"},"en-CA":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Are you sure you want to cancel? Changes you made may not be saved.",cancel_caeb1e68:"Cancel",changes_you_made_may_not_be_saved_4e8db973:"Changes you made may not be saved.",close_d634289d:"Close",editor:{button:{insert_equation:"Insert Equation"},cannot_render_equation:"This equation cannot be rendered in Basic View.",done:{title:"Click to finish editing the rich text area"},done_as_in_finished:"Done",embed_from_external_tool:'"Embed content from External Tool"',equation_editor_title:"Use the toolbars here, or Switch View to Advanced to type/paste in LaTeX",more_external_tools:"More External Tools",switch_editor_html:"HTML Editor",switch_editor_rich_text:"Rich Content Editor",titles:{insert_edit_image:"Insert / Edit Image"}},failed_to_save_please_try_again_later_bb7070fb:"Failed to save, please try again later",remove_attachment_ceae0973:"Remove Attachment",saving_d55dd90e:"Saving...",the_following_content_is_partner_provided_ed1da756:"The following content is partner provided",the_preceding_content_is_partner_provided_d753928c:"The preceding content is partner provided"},"en-GB":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Are you sure you want to cancel? Changes you made may not be saved.",cancel_caeb1e68:"Cancel",changes_you_made_may_not_be_saved_4e8db973:"Changes you made may not be saved.",close_d634289d:"Close",editor:{button:{insert_equation:"Insert equation"},cannot_render_equation:"This equation cannot be rendered in Basic View.",done:{title:"Click to finish editing the rich text area"},done_as_in_finished:"Done",embed_from_external_tool:'"Embed content from external tool"',equation_editor_title:"Use the toolbars here, or switch view to Advanced to type/paste in LaTeX",more_external_tools:"More external tools",switch_editor_html:"HTML Editor",switch_editor_rich_text:"Rich Content Editor",titles:{insert_edit_image:"Insert/edit image"}},failed_to_save_please_try_again_later_bb7070fb:"Failed to save, please try again later",remove_attachment_ceae0973:"Remove attachment",saving_d55dd90e:"Saving...",the_following_content_is_partner_provided_ed1da756:"The following content is partner provided",the_preceding_content_is_partner_provided_d753928c:"The preceding content is partner provided"},"en-GB-x-lbs":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Are you sure you want to cancel? Changes you made may not be saved.",cancel_caeb1e68:"Cancel",changes_you_made_may_not_be_saved_4e8db973:"Changes you made may not be saved.",close_d634289d:"Close",editor:{button:{insert_equation:"Insert equation"},cannot_render_equation:"This equation cannot be rendered in Basic View.",done:{title:"Click to finish editing the rich text area"},done_as_in_finished:"Done",embed_from_external_tool:'"Embed content from external tool"',equation_editor_title:"Use the toolbars here, or switch view to Advanced to type/paste in LaTeX",more_external_tools:"More external tools",switch_editor_html:"HTML Editor",switch_editor_rich_text:"Rich Content Editor",titles:{insert_edit_image:"Insert/edit image"}},failed_to_save_please_try_again_later_bb7070fb:"Failed to save, please try again later",remove_attachment_ceae0973:"Remove Attachment",saving_d55dd90e:"Saving...",the_following_content_is_partner_provided_ed1da756:"The following content is partner provided",the_preceding_content_is_partner_provided_d753928c:"The preceding content is partner provided"},"en-GB-x-ukhe":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Are you sure you want to cancel? Changes you made may not be saved.",cancel_caeb1e68:"Cancel",changes_you_made_may_not_be_saved_4e8db973:"Changes you made may not be saved.",close_d634289d:"Close",editor:{button:{insert_equation:"Insert equation"},cannot_render_equation:"This equation cannot be rendered in Basic View.",done:{title:"Click to finish editing the rich text area"},done_as_in_finished:"Done",embed_from_external_tool:'"Embed content from external tool"',equation_editor_title:"Use the toolbars here, or switch view to Advanced to type/paste in LaTeX",more_external_tools:"More external tools",switch_editor_html:"HTML Editor",switch_editor_rich_text:"Rich Content Editor",titles:{insert_edit_image:"Insert/edit image"}},failed_to_save_please_try_again_later_bb7070fb:"Failed to save, please try again later",remove_attachment_ceae0973:"Remove attachment",saving_d55dd90e:"Saving...",the_following_content_is_partner_provided_ed1da756:"The following content is partner provided",the_preceding_content_is_partner_provided_d753928c:"The preceding content is partner provided"},es:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\xbfEst\xe1 seguro que desea cancelar la operaci\xf3n? No se guardar\xe1n los cambios que realiz\xf3.",cancel_caeb1e68:"Cancelar",changes_you_made_may_not_be_saved_4e8db973:"No se guardar\xe1n los cambios que realiz\xf3.",close_d634289d:"Cerrar",editor:{button:{insert_equation:"Introducir ecuaci\xf3n"},cannot_render_equation:"Esta ecuaci\xf3n no se puede representar en vista b\xe1sica.",done:{title:"Haga clic para terminar de editar el \xe1rea de texto con formato"},done_as_in_finished:"Listo",embed_from_external_tool:'"Incorporar contenido de herramienta externa"',equation_editor_title:"Utilice las barras de herramientas que aparecen aqu\xed o cambie la vista a Avanzada para escribir/pegar en formato LaTeX",more_external_tools:"M\xe1s herramientas externas",switch_editor_html:"Editor HTML",switch_editor_rich_text:"Editor de contenido enriquecido",titles:{insert_edit_image:"Insertar/Editar imagen"}},failed_to_save_please_try_again_later_bb7070fb:"No se pudo guardar. Int\xe9ntelo m\xe1s tarde",remove_attachment_ceae0973:"Eliminar el archivo adjunto",saving_d55dd90e:"Guardando...",the_following_content_is_partner_provided_ed1da756:"El siguiente contenido est\xe1 proporcionado por un socio",the_preceding_content_is_partner_provided_d753928c:"El contenido anterior est\xe1 proporcionado por un socio"},fa:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\u0622\u06cc\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f \u06a9\u0647 \u0645\u06cc \u062e\u0648\u0627\u0647\u06cc\u062f \u0644\u063a\u0648 \u0634\u0648\u062f\u061f \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u0648\u0646\u062f.",cancel_caeb1e68:"\u0644\u063a\u0648",changes_you_made_may_not_be_saved_4e8db973:"\u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u0648\u0646\u062f.",close_d634289d:"\u0628\u0633\u062a\u0646",editor:{button:{insert_equation:"\u062f\u0631\u062c \u0645\u0639\u0627\u062f\u0644\u0647"},cannot_render_equation:"\u0627\u06cc\u0646 \u0645\u0639\u0627\u062f\u0644\u0647 \u0631\u0627 \u0646\u0645\u06cc \u062a\u0648\u0627\u0646 \u062f\u0631 \u0646\u0645\u0627\u06cc \u0627\u0635\u0644\u06cc \u0627\u0631\u0627\u0626\u0647 \u062f\u0627\u062f.",done:{title:"\u0628\u0631\u0627\u06cc \u067e\u0627\u06cc\u0627\u0646 \u062f\u0627\u062f\u0646 \u0628\u0647 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0642\u0633\u0645\u062a \u062f\u0627\u0631\u0627\u06cc \u0645\u062a\u0646 \u063a\u0646\u06cc \u06a9\u0644\u06cc\u06a9 \u06a9\u0646\u06cc\u062f"},done_as_in_finished:"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f",embed_from_external_tool:"\xab\u062f\u0631\u062c \u0645\u062d\u062a\u0648\u0627 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631 \u0628\u06cc\u0631\u0648\u0646\u06cc\xbb",equation_editor_title:"\u062f\u0631 \u0627\u06cc\u0646\u062c\u0627 \u0627\u0632 \u0646\u0648\u0627\u0631\u0647\u0627\u06cc \u0627\u0628\u0632\u0627\u0631 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u062f\u060c \u06cc\u0627 \u0628\u0631\u0627\u06cc \u062a\u0627\u06cc\u067e \u06a9\u0631\u062f\u0646/\u0686\u0633\u0628\u0627\u0646\u062f\u0646 \u062f\u0631 \u0644\u0627\u062a\u06a9\u0633\u060c \u0646\u0645\u0627 \u0631\u0627 \u0628\u0647 \u067e\u06cc\u0634\u0631\u0641\u062a\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u06cc\u062f",more_external_tools:"\u0627\u0628\u0632\u0627\u0631\u0647\u0627\u06cc \u0628\u06cc\u0631\u0648\u0646\u06cc \u062f\u06cc\u06af\u0631",switch_editor_html:"\u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631 HTML",switch_editor_rich_text:"\u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631 \u0645\u062d\u062a\u0648\u0627\u06cc \u063a\u0646\u06cc",titles:{insert_edit_image:"\u062f\u0631\u062c/\u0648\u06cc\u0631\u0627\u06cc\u0634 \u062a\u0635\u0648\u06cc\u0631"}},failed_to_save_please_try_again_later_bb7070fb:"\u0630\u062e\u06cc\u0631\u0647 \u0633\u0627\u0632\u06cc \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u060c \u0644\u0637\u0641\u0627 \u0628\u0639\u062f\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0639\u06cc \u06a9\u0646\u06cc\u062f",remove_attachment_ceae0973:"\u062d\u0630\u0641 \u067e\u06cc\u0648\u0633\u062a",saving_d55dd90e:"\u062f\u0631 \u062d\u0627\u0644 \u0630\u062e\u06cc\u0631\u0647 \u0633\u0627\u0632\u06cc...",the_following_content_is_partner_provided_ed1da756:"\u0645\u062d\u062a\u0648\u0627\u06cc \u0632\u06cc\u0631 \u062a\u0648\u0633\u0637 \u0634\u0631\u06cc\u06a9 \u0641\u0631\u0627\u0647\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a",the_preceding_content_is_partner_provided_d753928c:"\u0645\u062d\u062a\u0648\u0627\u06cc \u067e\u06cc\u0634\u06cc\u0646 \u062a\u0648\u0633\u0637 \u0634\u0631\u06cc\u06a9 \u0627\u0631\u0627\u0626\u0647 \u0634\u062f\u0647 \u0627\u0633\u062a"},fr:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\xcates-vous s\xfbr de vouloir annuler ? Les changements effectu\xe9s ne seront pas sauvegard\xe9s.",cancel_caeb1e68:"Annuler",changes_you_made_may_not_be_saved_4e8db973:"Les changements effectu\xe9s ne seront peut-\xeatre pas sauvegard\xe9s.",close_d634289d:"Fermer",editor:{button:{insert_equation:"Ins\xe9rer une \xe9quation"},cannot_render_equation:"Cette \xe9quation ne peut pas \xeatre affich\xe9e en mode simple.",done:{title:"Cliquez pour finir de modifier la zone de texte enrichi."},done_as_in_finished:"Termin\xe9",embed_from_external_tool:"\xab Incorporer le contenu depuis l\u2019outil externe \xbb",equation_editor_title:"Utilisez les barres d\u2019outils ou passez en mode d\u2019affichage avanc\xe9 pour taper/coller le contenu au format LaTeX.",more_external_tools:"Plus d\u2019outils externes",switch_editor_html:"\xc9diteur HTML",switch_editor_rich_text:"\xc9diteur de texte enrichi",titles:{insert_edit_image:"Ins\xe9rer/Modifier une image"}},failed_to_save_please_try_again_later_bb7070fb:"\xc9chec de l\u2019enregistrement. Veuillez r\xe9essayer ult\xe9rieurement.",remove_attachment_ceae0973:"Supprimer la pi\xe8ce jointe",saving_d55dd90e:"Enregistrement...",the_following_content_is_partner_provided_ed1da756:"Le contenu suivant est fourni par un partenaire",the_preceding_content_is_partner_provided_d753928c:"Le contenu qui pr\xe9c\xe8de \xe9tait fourni par un partenaire"},"fr-CA":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\xcates-vous certain de vouloir annuler? Les changements effectu\xe9s ne seront peut-\xeatre pas sauvegard\xe9s.",cancel_caeb1e68:"Annuler",changes_you_made_may_not_be_saved_4e8db973:"Les changements effectu\xe9s ne seront peut-\xeatre pas sauvegard\xe9s.",close_d634289d:"Fermer",editor:{button:{insert_equation:"Ins\xe9rer une \xe9quation"},cannot_render_equation:"Cette \xe9quation ne peut pas \xeatre affich\xe9e en mode simple.",done:{title:"Cliquez pour finir de modifier la zone de texte enrichi."},done_as_in_finished:"Termin\xe9",embed_from_external_tool:"\xab Incorporer le contenu depuis l\u2019outil externe \xbb",equation_editor_title:"Utilisez les barres d\u2019outils ou passez en mode d\u2019affichage avanc\xe9 pour saisir/coller le contenu au format LaTeX.",more_external_tools:"Plus d\u2019outils externes",switch_editor_html:"\xc9diteur HTML",switch_editor_rich_text:"\xc9diteur de texte enrichi",titles:{insert_edit_image:"Ins\xe9rer/Modifier une image"}},failed_to_save_please_try_again_later_bb7070fb:"\xc9chec de l\u2019enregistrement. Veuillez r\xe9essayer ult\xe9rieurement.",remove_attachment_ceae0973:"Retirer la pi\xe8ce jointe",saving_d55dd90e:"Enregistrement...",the_following_content_is_partner_provided_ed1da756:"Le contenu suivant est fourni par le partenaire",the_preceding_content_is_partner_provided_d753928c:"Le contenu pr\xe9c\xe9dent est fourni par le partenaire"},he:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\u05d4\u05d0\u05dd \u05d1\u05d8\u05d5\u05d7\u05d9\u05dd \u05e9\u05e8\u05d5\u05e6\u05d9\u05dd \u05dc\u05d1\u05d8\u05dc? \u05e9\u05d9\u05e0\u05d5\u05d9\u05d9\u05dd \u05e9\u05d1\u05d5\u05e6\u05e2\u05d5 \u05dc\u05d0 \u05d9\u05e9\u05de\u05e8\u05d5",cancel_caeb1e68:"\u05d1\u05d9\u05d8\u05d5\u05dc",changes_you_made_may_not_be_saved_4e8db973:"\u05ea\u05d9\u05e7\u05d5\u05e0\u05d9\u05dd \u05e9\u05d1\u05e6\u05e2\u05ea \u05d9\u05ea\u05db\u05df \u05e9\u05dc\u05d0 \u05d9\u05e9\u05de\u05e8\u05d5",close_d634289d:"\u05e1\u05d2\u05d9\u05e8\u05d4",editor:{button:{insert_equation:"\u05d4\u05d5\u05e1\u05e4\u05ea \u05de\u05e9\u05d5\u05d5\u05d0\u05d4"},cannot_render_equation:"\u05e9\u05d0\u05dc\u05d4 \u05d6\u05d5 \u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05e7\u05d1\u05dc \u05d1\u05ea\u05e6\u05d5\u05d2\u05d4 \u05d1\u05e1\u05d9\u05e1\u05d9\u05ea",done:{title:"\u05d4\u05e7\u05dc\u05e7\u05d4 \u05dc\u05e1\u05d9\u05d5\u05dd \u05e2\u05e8\u05d9\u05db\u05ea \u05d0\u05d9\u05d6\u05d5\u05e8 \u05d4\u05ea\u05d5\u05db\u05df \u05d4\u05e2\u05e9\u05d9\u05e8"},done_as_in_finished:"\u05e1\u05d5\u05d9\u05dd",embed_from_external_tool:'"\u05e9\u05d9\u05dc\u05d5\u05d1 \u05ea\u05d5\u05db\u05df \u05de\u05db\u05dc\u05d9 \u05d7\u05d9\u05e6\u05d5\u05e0\u05d9"',equation_editor_title:"\u05d9\u05e9 \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05db\u05d0\u05df \u05d1\u05e1\u05e8\u05d2\u05dc \u05d4\u05db\u05dc\u05d9\u05dd, \u05d0\u05d5 \u05dc\u05e2\u05d1\u05d5\u05e8 \u05dc\u05ea\u05e6\u05d5\u05d2\u05d4 \u05de\u05ea\u05e7\u05d3\u05de\u05ea \u05db\u05d3\u05d9 \u05dc\u05d4\u05e7\u05dc\u05d9\u05d3/\u05dc\u05d4\u05d3\u05d1\u05d9\u05e7 \u05d1 LaTeX",more_external_tools:"\u05db\u05dc\u05d9\u05dd \u05d7\u05d9\u05e6\u05d5\u05e0\u05d9\u05d9\u05dd \u05e0\u05d5\u05e1\u05e4\u05d9\u05dd",switch_editor_html:"\u05e2\u05d5\u05e8\u05da HTML",switch_editor_rich_text:"\u05e2\u05d5\u05e8\u05da \u05ea\u05d5\u05db\u05df \u05e2\u05e9\u05d9\u05e8",titles:{insert_edit_image:"\u05d4\u05d5\u05e1\u05e4\u05ea / \u05e2\u05e8\u05d9\u05db\u05ea \u05ea\u05de\u05d5\u05e0\u05d4"}},failed_to_save_please_try_again_later_bb7070fb:"\u05ea\u05e7\u05dc\u05d4 \u05d1\u05e0\u05e1\u05d9\u05d5\u05df \u05dc\u05e9\u05de\u05d9\u05e8\u05d4. \u05d9\u05e9 \u05dc\u05e0\u05e1\u05d5\u05ea \u05e9\u05d5\u05d1 \u05de\u05d0\u05d5\u05d7\u05e8 \u05d9\u05d5\u05ea\u05e8",remove_attachment_ceae0973:"\u05d4\u05e1\u05e8\u05ea \u05e7\u05d5\u05d1\u05e5 \u05de\u05e6\u05d5\u05e8\u05e3",saving_d55dd90e:"\u05e9\u05d5\u05de\u05e8..."},ht:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Ou kw\xe8 vr\xe8man ou vle anile? Chanjman ou f\xe8 yo gendwa pa anrejistre.",cancel_caeb1e68:"Anile",changes_you_made_may_not_be_saved_4e8db973:"Chanjman ou f\xe8 yo gendwa pa anrejistre.",close_d634289d:"F\xe8men",editor:{button:{insert_equation:"Ensere Ekwasyon"},cannot_render_equation:"Ekwasyon sa a paka rann nan Afichaj Bazik la.",done:{title:"Klike pou fini modifikasyon z\xf2n t\xe8ks rich la"},done_as_in_finished:"Fini",embed_from_external_tool:'"Entegre kontni apati de Zouti Ekst\xe8n"',equation_editor_title:"Itilize ba zouti ki la a, oswa Chanje Afichaj la an Avanse pou tape/kole LaTeX",more_external_tools:"Plis Zouti Ekst\xe8n",switch_editor_html:"Edit\xe8 HTML",switch_editor_rich_text:"Edit\xe8 Kontni Rich",titles:{insert_edit_image:"Ensere / Modifye Imaj"}},failed_to_save_please_try_again_later_bb7070fb:"Anrejistreman echwe, tanpri eseye ank\xf2 pita",remove_attachment_ceae0973:"Retire Atachman",saving_d55dd90e:"Anrejistreman...",the_following_content_is_partner_provided_ed1da756:"Kontni annapre a se yon asosye ki bay li",the_preceding_content_is_partner_provided_d753928c:"Kontni anvan an se yon asosye ki bay li"},hu:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Biztos benne, hogy m\xe9gsem? A v\xe1ltoztat\xe1sai tal\xe1n nincsenek elmentve.",cancel_caeb1e68:"M\xe9gse",close_d634289d:"Bez\xe1r\xe1s",editor:{button:{insert_equation:"Egyenlet besz\xfar\xe1sa"},cannot_render_equation:"Ezt az egyenletet nem lehet megjelen\xedteni alapn\xe9zetben.",done:{title:"Kattintson, hogy befejezze a gazdag sz\xf6vegmez\u0151 szerkeszt\xe9s\xe9t"},done_as_in_finished:"K\xe9sz",embed_from_external_tool:'"Tartalom be\xe1gyaz\xe1sa k\xfcls\u0151 eszk\xf6zr\u0151l"',equation_editor_title:"Haszn\xe1lja az eszk\xf6zt\xe1rakat, vagy v\xe1ltson halad\xf3 n\xe9zetre, hogy \xedrhasson/beilleszthessen LaTeX form\xe1tumban",more_external_tools:"Tov\xe1bbi k\xfcls\u0151 eszk\xf6z\xf6k",switch_editor_html:"HTML szerkeszt\u0151",switch_editor_rich_text:"Vizu\xe1lis sz\xf6vegszerkeszt\u0151",titles:{insert_edit_image:"K\xe9p besz\xfar\xe1sa / szerkeszt\xe9se"}},failed_to_save_please_try_again_later_bb7070fb:"A ment\xe9s sikertelen, k\xe9rj\xfck, pr\xf3b\xe1lja \xfajra k\xe9s\u0151bb",remove_attachment_ceae0973:"Mell\xe9klet elt\xe1vol\xedt\xe1sa",saving_d55dd90e:"Ment\xe9s..."},hy:{cancel_caeb1e68:"\u0549\u0565\u0572\u0575\u0561\u056c \u0570\u0561\u0574\u0561\u0580\u0565\u056c",close_d634289d:"\u0553\u0561\u056f\u0565\u056c",editor:{button:{insert_equation:"\u054f\u0565\u0572\u0561\u0564\u0580\u0565\u056c \u0570\u0561\u057e\u0561\u057d\u0561\u0580\u0578\u0582\u0574\u0568"},cannot_render_equation:"\u0531\u0575\u057d \u0570\u0561\u057e\u0561\u057d\u0561\u0580\u0578\u0582\u0574\u0568 \u0570\u0576\u0561\u0580\u0561\u057e\u0578\u0580 \u0579\u0567 \u0581\u0578\u0582\u0581\u0561\u0564\u0580\u0565\u056c \u0540\u056b\u0574\u0576\u0561\u056f\u0561\u0576 \u057f\u0565\u057d\u0584\u0578\u057e:",done:{title:'\u054d\u0565\u0572\u0574\u0565\u0584 "\u0570\u0561\u0580\u057d\u057f\u0561\u0581\u057e\u0561\u056e \u057f\u0565\u057d\u0584\u057f\u056b" \u056d\u0574\u0562\u0561\u0563\u0580\u0578\u0582\u0574\u0568 \u0561\u057e\u0561\u0580\u057f\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580 '},done_as_in_finished:"\u054a\u0561\u057f\u0580\u0561\u057d\u057f \u0567",embed_from_external_tool:'"\u0531\u0580\u057f\u0561\u0584\u056b\u0576 \u0563\u0578\u0580\u056e\u056b\u0584\u056b\u0581 \u057d\u057f\u0561\u0581\u057e\u0561\u056e \u0562\u0578\u057e\u0561\u0576\u0564\u0561\u056f\u0578\u0582\u0569\u0575\u0561\u0576 \u057f\u0565\u0572\u0561\u0564\u0580\u0578\u0582\u0574"',equation_editor_title:"\u0555\u0563\u057f\u0561\u0563\u0578\u0580\u056e\u0565\u0584 \u0563\u0578\u0580\u056e\u056b\u0584\u0576\u0565\u0580\u056b \u057f\u0578\u0572\u0568 \u056f\u0561\u0574 \u0561\u0576\u0581\u0565\u0584 \u0568\u0576\u0564\u056c\u0561\u0575\u0576\u057e\u0561\u056e \u057f\u0565\u057d\u0584\u056b LaTeX \u056d\u0574\u0562\u0561\u0563\u0580\u0578\u0582\u0574 \u057f\u057a\u0565\u056c\u0578\u0582/\u057f\u0565\u0572\u0561\u0564\u0580\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580 ",more_external_tools:"\u053c\u0580\u0561\u0581\u0578\u0582\u0581\u056b\u0579 \u0561\u0580\u057f\u0561\u0584\u056b\u0576 \u0563\u0578\u0580\u056e\u056b\u0584\u0576\u0565\u0580",switch_editor_html:"HTML \u056d\u0574\u0562\u0561\u0563\u056b\u0580",switch_editor_rich_text:"\u0556\u0578\u0580\u0574\u0561\u057f\u0561\u057e\u0578\u0580\u057e\u0561\u056e \u057f\u0565\u0584\u057d\u057f\u056b \u056d\u0574\u0562\u0561\u0563\u056b\u0580",titles:{insert_edit_image:"\u054f\u0565\u0572\u0561\u0564\u0580\u0565\u056c/\u056d\u0574\u0562\u0561\u0563\u0580\u0565\u056c \u057a\u0561\u057f\u056f\u0565\u0580\u0568"}},remove_attachment_ceae0973:"\u0540\u0561\u0576\u0565\u056c \u0570\u0561\u057e\u0565\u056c\u057e\u0561\u056e\u0568",saving_d55dd90e:"\u054a\u0561\u0570\u057a\u0561\u0576\u057e\u0578\u0582\u0574 \u0567..."},is:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Viltu \xf6rugglega h\xe6tta vi\xf0? Breytingar ver\xf0a hugsanlega ekki vista\xf0ar.",cancel_caeb1e68:"H\xe6tta vi\xf0",changes_you_made_may_not_be_saved_4e8db973:"Breytingar ver\xf0a hugsanlega ekki vista\xf0ar.",close_d634289d:"Loka",editor:{button:{insert_equation:"Setja inn j\xf6fnu"},cannot_render_equation:"\xdeessi jafna getur ekki birst \xed grunns\xfdn",done:{title:"Smella til a\xf0 lj\xfaka breytingum \xe1 m\xf3tu\xf0um texta"},done_as_in_finished:"Loki\xf0",embed_from_external_tool:'"Fella inn efni fr\xe1 ytra t\xe6ki"',equation_editor_title:"Nota\xf0u t\xf3lasl\xe1r h\xe9r e\xf0a skiptu \xed \xedtarlega s\xfdn til a\xf0 skrifa/l\xedma \xed LaTeX.",more_external_tools:"Fleiri ytri t\xe6ki",switch_editor_html:"HTML ritill",switch_editor_rich_text:"Rich Content ritill",titles:{insert_edit_image:"Setja inn / Breyta mynd"}},failed_to_save_please_try_again_later_bb7070fb:"Ekki t\xf3kst a\xf0 vista. Reyndu aftur s\xed\xf0ar",remove_attachment_ceae0973:"Fjarl\xe6gja vi\xf0hengi",saving_d55dd90e:"Vista...",the_following_content_is_partner_provided_ed1da756:"Eftirfarandi efni er gefi\xf0 upp af samstarfsa\xf0ila",the_preceding_content_is_partner_provided_d753928c:"Framangreint efni er gefi\xf0 upp af samstarfsa\xf0ila"},it:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Vuoi annullare? Le modifiche effettuate potrebbero non essere salvate.",cancel_caeb1e68:"Annulla",changes_you_made_may_not_be_saved_4e8db973:"Le modifiche effettuate potrebbero non essere salvate.",close_d634289d:"Chiudi",editor:{button:{insert_equation:"Inserisci equazione"},cannot_render_equation:"Impossibile eseguire il rendering di questa equazione nella visualizzazione base.",done:{title:"Fai clic per terminare la modifica dell'area di testo RTF"},done_as_in_finished:"Fatto",embed_from_external_tool:'"Incorpora contenuto da strumento esterno"',equation_editor_title:"Utilizza le barre degli strumenti qui o passa alla visualizzazione avanzata in cui digitare/copiare LaTeX",more_external_tools:"Altri strumenti esterni",switch_editor_html:"Editor HTML",switch_editor_rich_text:"Editor di contenuti avanzati",titles:{insert_edit_image:"Inserisci/Modifica immagine"}},failed_to_save_please_try_again_later_bb7070fb:"Salvataggio non riuscito. Riprova pi\xf9 tardi",remove_attachment_ceae0973:"Rimuovi allegato",saving_d55dd90e:"Salvataggio in corso...",the_following_content_is_partner_provided_ed1da756:"I contenuti seguenti sono forniti dal partner",the_preceding_content_is_partner_provided_d753928c:"I contenuti precedenti sono forniti dal partner"},ja:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\u307b\u3093\u3068\u3046\u306b\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3059\u304b?\u884c\u308f\u308c\u305f\u5909\u66f4\u306f\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002",cancel_caeb1e68:"\u30ad\u30e3\u30f3\u30bb\u30eb",changes_you_made_may_not_be_saved_4e8db973:"\u884c\u308f\u308c\u305f\u5909\u66f4\u306f\u4fdd\u5b58\u3055\u308c\u307e\u305b\u3093\u3002",close_d634289d:"\u9589\u3058\u308b",editor:{button:{insert_equation:"\u65b9\u7a0b\u5f0f\u306e\u633f\u5165"},cannot_render_equation:"\u3053\u306e\u65b9\u7a0b\u5f0f\u306f\u57fa\u672c\u30d3\u30e5\u30fc\u3067\u306f\u63cf\u753b\u3067\u304d\u307e\u305b\u3093\u3002",done:{title:"\u30af\u30ea\u30c3\u30af\u3057\u3066\u30ea\u30c3\u30c1 \u30c6\u30ad\u30b9\u30c8\u9818\u57df\u306e\u7de8\u96c6\u3092\u7d42\u4e86\u3059\u308b"},done_as_in_finished:"\u5b8c\u4e86",embed_from_external_tool:'"\u5916\u90e8\u30c4\u30fc\u30eb\u304b\u3089\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u57cb\u3081\u8fbc\u3080"',equation_editor_title:"\u30c4\u30fc\u30eb\u30d0\u30fc\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001LaTeX \u5f62\u5f0f\u3092\u5165\u529b/\u8cbc\u308a\u4ed8\u3051\u3066\u3001\u65b9\u7a0b\u5f0f\u3092\u8ffd\u52a0\u3057\u307e\u3059",more_external_tools:"\u305d\u306e\u4ed6\u306e\u5916\u90e8\u30c4\u30fc\u30eb",switch_editor_html:"HTML \u30a8\u30c7\u30a3\u30bf",switch_editor_rich_text:"\u30ea\u30c3\u30c1 \u30b3\u30f3\u30c6\u30f3\u30c4 \u30a8\u30c7\u30a3\u30bf",titles:{insert_edit_image:"\u753b\u50cf\u306e\u633f\u5165/\u7de8\u96c6"}},failed_to_save_please_try_again_later_bb7070fb:"\u4fdd\u5b58\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u5f8c\u3067\u3082\u3046\u4e00\u5ea6\u8a66\u3057\u3066\u304f\u3060\u3055\u3044",remove_attachment_ceae0973:"\u6dfb\u4ed8\u30d5\u30a1\u30a4\u30eb\u306e\u524a\u9664",saving_d55dd90e:"\u4fdd\u5b58\u3057\u3066\u3044\u307e\u3059...",the_following_content_is_partner_provided_ed1da756:"\u4ee5\u4e0b\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u30d1\u30fc\u30c8\u30ca\u30fc\u304c\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059",the_preceding_content_is_partner_provided_d753928c:"\u4e0a\u8a18\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u30d1\u30fc\u30c8\u30ca\u30fc\u304c\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059"},ko:{cancel_caeb1e68:"\ucde8\uc18c",close_d634289d:"\ub2eb\uae30",editor:{button:{insert_equation:"\uc218\uc2dd \uc0bd\uc785"},cannot_render_equation:"\uc774 \uc218\uc2dd\uc740 \uae30\ubcf8 \ubdf0\uc5d0 \ub80c\ub354\ub9c1\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",done:{title:"\ud074\ub9ad\ud558\uba74 \uc11c\uc2dd \uc788\ub294 \ud14d\uc2a4\ud2b8 \uc601\uc5ed\uc758 \ud3b8\uc9d1\uc744 \ub9c8\uce68"},done_as_in_finished:"\ub9c8\uce68",embed_from_external_tool:'"\uc678\ubd80 \ub3c4\uad6c\ub85c\ubd80\ud130 \ub0b4\uc6a9 \uc0bd\uc785"',equation_editor_title:"\uc218\uc2dd\uc744 \uc0bd\uc785\ud558\ub824\uba74 \ub3c4\uad6c \ubaa8\uc74c\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 LaTeX \ud615\uc2dd\uc744 \uc785\ub825/\ubd99\uc5ec\ub123\uae30",more_external_tools:"\ub354 \ub9ce\uc740 \uc678\ubd80 \ub3c4\uad6c",titles:{insert_edit_image:"\uc774\ubbf8\uc9c0 \uc0bd\uc785 / \ud3b8\uc9d1"}},remove_attachment_ceae0973:"\ucca8\ubd80 \uc81c\uac70",saving_d55dd90e:"\uc800\uc7a5 \uc911..."},mi:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"E pono ana koe ki te whakakore? Kaore pea e tiakina ng\u0101 huringa i mahia e koe.",cancel_caeb1e68:"Whakakore",changes_you_made_may_not_be_saved_4e8db973:"Kaore pea e tiakina ng\u0101 huringa i mahia e koe.",close_d634289d:"Katia",editor:{button:{insert_equation:"K\u014dkuhu Wh\u0101rite"},cannot_render_equation:"IWhakuru wh\u0101rite",done:{title:"P\u0101whiritia ki te whakaoti i te whakatika i te w\u0101hi kuputuhi taonga"},done_as_in_finished:"Kua mahia",embed_from_external_tool:'"Ihirangi T\u0101mau i Taputapu waho"',equation_editor_title:"Whakamahia te paeutauta konei, Huria Tirohia ki Ar\u0101 r\u0101nei ki te pato / whakapiri i roto i te taherapa LaTeX",more_external_tools:"\u0112tahi atu Utauta waho",switch_editor_html:"\u0112tita HTML",switch_editor_rich_text:"\u0112tita Ihirangi Whai Rawa",titles:{insert_edit_image:"K\u014dkuhu / Whakatika \u0100hua"}},failed_to_save_please_try_again_later_bb7070fb:"I rahua ki te whakaora, ngana an\u014d koa i muri mai",remove_attachment_ceae0973:"Tangohia te \u0100pitihanga",saving_d55dd90e:"Kei te tiakina",the_following_content_is_partner_provided_ed1da756:"Ko ng\u0101 k\u014drero e whai ake nei he hoa mahi",the_preceding_content_is_partner_provided_d753928c:"Ko te tuhinga o mua he hoa mahi"},nb:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Er du sikker p\xe5 at du vil avbryte? Det kan hende at endringene dine ikke ble lagret.",cancel_caeb1e68:"Avbryt",changes_you_made_may_not_be_saved_4e8db973:"Det kan hende at endringene dine ikke ble lagret.",close_d634289d:"Lukk",editor:{button:{insert_equation:"Sett inn ligning"},cannot_render_equation:"Denne ligningen kan ikke legges frem i enkel visning.",done:{title:"Klikk for \xe5 fullf\xf8re redigeringen av riktekstomr\xe5det"},done_as_in_finished:"Ferdig",embed_from_external_tool:'"Sett inn innhold fra eksternt verkt\xf8y"',equation_editor_title:"Bruk verkt\xf8ylinjene her, eller endre visning til avansert for \xe5 skrive inn/lime inn LaTeX",more_external_tools:"Flere eksterne verkt\xf8y",switch_editor_html:"HTML-redigering",switch_editor_rich_text:"Rikt Innhold Redigering",titles:{insert_edit_image:"Sett inn/rediger bilde"}},failed_to_save_please_try_again_later_bb7070fb:"Kunne ikke lagre, vennligst fors\xf8k senere",remove_attachment_ceae0973:"Fjern vedlegg",saving_d55dd90e:"Lagrer\u2026",the_following_content_is_partner_provided_ed1da756:"F\xf8lgende innhold er gitt av en partner",the_preceding_content_is_partner_provided_d753928c:"Det foreg\xe5ende innholdet er gitt av en partner"},"nb-x-k12":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Er du sikker p\xe5 at du vil avbryte? Det kan hende at endringene dine ikke ble lagret.",cancel_caeb1e68:"Avbryt",changes_you_made_may_not_be_saved_4e8db973:"Det kan hende at endringene dine ikke ble lagret.",close_d634289d:"Lukk",editor:{button:{insert_equation:"Sett inn ligning"},cannot_render_equation:"Denne ligningen kan ikke legges frem i enkel visning.",done:{title:"Klikk for \xe5 fullf\xf8re redigeringen av riktekstomr\xe5det"},done_as_in_finished:"Ferdig",embed_from_external_tool:'"Sett inn innhold fra eksternt verkt\xf8y"',equation_editor_title:"Bruk verkt\xf8ylinjene her, eller endre visning til avansert for \xe5 skrive inn/lime inn LaTeX",more_external_tools:"Flere eksterne verkt\xf8y",switch_editor_html:"HTML-redigering",switch_editor_rich_text:"Rich innholdsredigering",titles:{insert_edit_image:"Sett inn/rediger bilde"}},failed_to_save_please_try_again_later_bb7070fb:"Kunne ikke lagre, vennligst fors\xf8k senere",remove_attachment_ceae0973:"Fjern vedlegg",saving_d55dd90e:"Lagrer\u2026",the_following_content_is_partner_provided_ed1da756:"F\xf8lgende innhold er gitt av en partner",the_preceding_content_is_partner_provided_d753928c:"Det foreg\xe5ende innholdet er gitt av en partner"},nl:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Weet je zeker dat je wilt annuleren? Je wijzigingen worden niet opgeslagen.",cancel_caeb1e68:"Annuleren",changes_you_made_may_not_be_saved_4e8db973:"Je wijzigingen worden niet opgeslagen.",close_d634289d:"Sluiten",editor:{button:{insert_equation:"Vergelijking invoegen"},cannot_render_equation:"Deze vergelijking kan niet in basisweergave weergegeven worden.",done:{title:"Klikken om het bewerken van Rich Text-gebied te voltooien"},done_as_in_finished:"Gereed",embed_from_external_tool:'"Inhoud insluiten vanuit extern tool"',equation_editor_title:"De werkbalken hier gebruiken of naar geavanceerd overschakelen om in LaTeX in te voeren of te plakken",more_external_tools:"Meerdere externe tools",switch_editor_html:"HTML Editor",switch_editor_rich_text:"Rich Content Editor",titles:{insert_edit_image:"Afbeelding invoegen/bewerken"}},failed_to_save_please_try_again_later_bb7070fb:"Het opslaan is mislukt, probeer het later opnieuw",remove_attachment_ceae0973:"Bijlage verwijderen",saving_d55dd90e:"Bezig met opslaan...",the_following_content_is_partner_provided_ed1da756:"De volgende inhoud is door een partner geleverd",the_preceding_content_is_partner_provided_d753928c:"De voorgaande inhoud is door een partner geleverd"},nn:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Er du sikker p\xe5 at du vil avbryte? Endringar blir kanskje ikkje lagra.",cancel_caeb1e68:"Avbryt",changes_you_made_may_not_be_saved_4e8db973:"Endringar blir kanskje ikkje lagra.",close_d634289d:"Lukk",editor:{button:{insert_equation:"Set inn likning"},cannot_render_equation:"Kan ikkje gje att som grunnleggande vising.",done:{title:"Klikk her for \xe5 fullf\xf8re redigeringa av omr\xe5det for rikt tekstformat"},done_as_in_finished:"Fullf\xf8rt",embed_from_external_tool:"Set inn innhald fr\xe5 eksternt verkt\xf8y",equation_editor_title:"Bruk verkt\xf8ylinjene, eller byt vising til Avansert for \xe5 skrive/lime inn LaTeX",more_external_tools:"Fleire eksterne verkt\xf8y",switch_editor_html:"HTML-redigeringsprogram",switch_editor_rich_text:"Redigeringsprogram for rikt innhald",titles:{insert_edit_image:"Set inn eller rediger bilde"}},failed_to_save_please_try_again_later_bb7070fb:"Kan ikkje lagre. Pr\xf8v p\xe5 nytt seinare.",remove_attachment_ceae0973:"Fjern vedlegget",saving_d55dd90e:"Lagrar...",the_following_content_is_partner_provided_ed1da756:"F\xf8lgande innhald er lagt til av partnar",the_preceding_content_is_partner_provided_d753928c:"Det f\xf8reg\xe5ande innhaldet er lagt til av partnar"},pl:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Czy na pewno chcesz anulowa\u0107? Zmiany mog\u0105 nie zosta\u0107 zapisane.",cancel_caeb1e68:"Anuluj",changes_you_made_may_not_be_saved_4e8db973:"Zmiany mog\u0105 nie zosta\u0107 zapisane.",close_d634289d:"Zamknij",editor:{button:{insert_equation:"Wstaw r\xf3wnanie"},cannot_render_equation:"Nie mo\u017cna odtworzy\u0107 r\xf3wnania w widoku podstawowym.",done:{title:"Kliknij, aby uko\u0144czy\u0107 edycj\u0119 wzbogaconego obszaru tekstowego"},done_as_in_finished:"Gotowe",embed_from_external_tool:'"Osad\u017a zawarto\u015b\u0107 z zewn\u0119trznego narz\u0119dzia"',equation_editor_title:"Skorzystaj z pask\xf3w narz\u0119dzi tutaj lub Prze\u0142\u0105cz widok do zaawansowanego, aby wpisa\u0107/wklei\u0107 LaTeX",more_external_tools:"Wi\u0119cej zewn\u0119trznych narz\u0119dzi",switch_editor_html:"Edytor HTML",switch_editor_rich_text:"Edytor wzbogaconej zawarto\u015bci",titles:{insert_edit_image:"Umie\u015b\u0107 / Edytuj obraz"}},failed_to_save_please_try_again_later_bb7070fb:"Zapis nie powi\xf3d\u0142 si\u0119, spr\xf3buj ponownie p\xf3\u017aniej",remove_attachment_ceae0973:"Usu\u0144 za\u0142\u0105cznik",saving_d55dd90e:"Trwa zapisywanie...",the_following_content_is_partner_provided_ed1da756:"Nast\u0119puj\u0105c\u0105 zawarto\u015b\u0107 dostarcza partner",the_preceding_content_is_partner_provided_d753928c:"Poprzedni\u0105 zawarto\u015b\u0107 dostarcza partner"},pt:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Tem a certeza que deseja cancelar? As altera\xe7\xf5es que realizou n\xe3o podem ser guardadas.",cancel_caeb1e68:"Cancelar",changes_you_made_may_not_be_saved_4e8db973:"As altera\xe7\xf5es que realizou n\xe3o podem ser guardadas.",close_d634289d:"Fechar",editor:{button:{insert_equation:"Inserir equa\xe7\xe3o"},cannot_render_equation:"N\xe3o \xe9 poss\xedvel reproduzir esta equa\xe7\xe3o em Vista B\xe1sica.",done:{title:"Clique para concluir a edi\xe7\xe3o da \xe1rea de Rich Text"},done_as_in_finished:"Concluir",embed_from_external_tool:'"Incorporar conte\xfado a partir de ferramenta externa"',equation_editor_title:"Utilizar as barras de ferramentas aqui ou Mudar para Vista Avan\xe7ada para digitar/colar em formato LaTeX",more_external_tools:"Mais ferramentas externas",switch_editor_html:"Editor HTML",switch_editor_rich_text:"Editor de conte\xfado avan\xe7ado",titles:{insert_edit_image:"Inserir/Editar imagem"}},failed_to_save_please_try_again_later_bb7070fb:"Falha na grava\xe7\xe3o, tente novamente mais tarde",remove_attachment_ceae0973:"Remover anexo",saving_d55dd90e:"A guardar...",the_following_content_is_partner_provided_ed1da756:"O parceiro fornece o seguinte conte\xfado",the_preceding_content_is_partner_provided_d753928c:"O conte\xfado anterior \xe9 parceiro fornecido"},"pt-BR":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Tem certeza de que deseja cancelar? As altera\xe7\xf5es feitas n\xe3o ser\xe3o salvas.",cancel_caeb1e68:"Cancelar",changes_you_made_may_not_be_saved_4e8db973:"As altera\xe7\xf5es feitas n\xe3o ser\xe3o salvas.",close_d634289d:"Fechar",editor:{button:{insert_equation:"Inserir equa\xe7\xe3o"},cannot_render_equation:"Esta equa\xe7\xe3o n\xe3o pode ser entregue em exibi\xe7\xe3o b\xe1sica",done:{title:"Clique para finalizar a edi\xe7\xe3o da \xe1rea de rich text"},done_as_in_finished:"Concluir",embed_from_external_tool:'"Incorporar conte\xfado da ferramenta externa"',equation_editor_title:"Utilizar as barras de tarefas aqui ou alterne a exibi\xe7\xe3o para Avan\xe7ado para digitar/colar no LaTeX",more_external_tools:"Mais ferramentas externas",switch_editor_html:"Editor de HTML",switch_editor_rich_text:"Editor de conte\xfado de rich text",titles:{insert_edit_image:"Inserir / editar imagens"}},failed_to_save_please_try_again_later_bb7070fb:"Falha ao salvar. Tente novamente mais tarde.",remove_attachment_ceae0973:"Remover anexo",saving_d55dd90e:"Salvando...",the_following_content_is_partner_provided_ed1da756:"O seguinte conte\xfado \xe9 fornecido por parceiro",the_preceding_content_is_partner_provided_d753928c:"O conte\xfado precedente \xe9 fornecido por parceiro"},ru:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u044d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435? \u0412\u043d\u0435\u0441\u0435\u043d\u043d\u044b\u0435 \u0432\u0430\u043c\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b.",cancel_caeb1e68:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",changes_you_made_may_not_be_saved_4e8db973:"\u0412\u043d\u0435\u0441\u0435\u043d\u043d\u044b\u0435 \u0432\u0430\u043c\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b.",close_d634289d:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",editor:{button:{insert_equation:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435"},cannot_render_equation:"\u0414\u0430\u043d\u043d\u043e\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043e \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u0432\u0438\u0434\u0435.",done:{title:"\u0429\u0435\u043b\u043a\u043d\u0438\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430"},done_as_in_finished:"\u0413\u043e\u0442\u043e\u0432\u043e",embed_from_external_tool:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u0438\u0437 \u0412\u043d\u0435\u0448\u043d\u0438\u0445 \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432",equation_editor_title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0432\u0438\u0434 \u043d\u0430 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439, \u0447\u0442\u043e\u0431\u044b \u043d\u0430\u0447\u0430\u0442\u044c \u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c/\u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 LaTeX",more_external_tools:"\u0411\u043e\u043b\u044c\u0448\u0435 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432",switch_editor_html:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 HTML",switch_editor_rich_text:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430",titles:{insert_edit_image:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c/\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}},failed_to_save_please_try_again_later_bb7070fb:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435",remove_attachment_ceae0973:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435",saving_d55dd90e:"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...",the_following_content_is_partner_provided_ed1da756:"\u041f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u043c",the_preceding_content_is_partner_provided_d753928c:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u043c"},sl:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"Ali ste prepri\u010dani, da \u017eelite preklicati? Spremembe, ki ste jih izvedli, morda ne bodo shranjene.",cancel_caeb1e68:"Prekli\u010di",changes_you_made_may_not_be_saved_4e8db973:"Spremembe, ki ste jih izvedli, morda ne bodo shranjene.",close_d634289d:"Zapri",editor:{button:{insert_equation:"Vstavi ena\u010dbo"},cannot_render_equation:"Te ena\u010dbe ni mogo\u010de prikazati v osnovnem pogledu.",done:{title:"Kliknite, da dokon\u010date urejanje obmo\u010dja z besedilom."},done_as_in_finished:"Dokon\u010dano",embed_from_external_tool:"\xbbVdelaj vsebino iz zunanjega orodja\xab",equation_editor_title:"Uporabite orodne vrstice tu ali pa preklopite pregled v naprednega, da boste lahko vna\u0161ali/lepili LaTeX.",more_external_tools:"Ve\u010d zunanjih orodij",switch_editor_html:"Urejevalnik HTML",switch_editor_rich_text:"Urejevalnik",titles:{insert_edit_image:"Vstavi/uredi sliko"}},failed_to_save_please_try_again_later_bb7070fb:"Neuspelo shranjevanje; poskusite znova pozneje.",remove_attachment_ceae0973:"Odstrani prilogo",saving_d55dd90e:"Shranjevanje ...",the_following_content_is_partner_provided_ed1da756:"Naslednjo vsebino zagotavljajo partnerji.",the_preceding_content_is_partner_provided_d753928c:"Predhodno vsebino zagotavljajo partnerji."},sv:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\xc4r du s\xe4ker p\xe5 att du vill annullera? \xc4ndringar du gjort kan inte sparas.",cancel_caeb1e68:"Avbryt",changes_you_made_may_not_be_saved_4e8db973:"\xc4ndringar du gjort kan inte sparas.",close_d634289d:"St\xe4ng",editor:{button:{insert_equation:"Skriv in ekvation"},cannot_render_equation:"Den h\xe4r ekvationen kan inte tolkas i enkel vy.",done:{title:"Klicka f\xf6r att f\xe4rdigst\xe4lla redigering av text-omr\xe5det"},done_as_in_finished:"F\xe4rdig",embed_from_external_tool:'"B\xe4dda in inneh\xe5ll fr\xe5n ett externt verktyg"',equation_editor_title:"Anv\xe4nd verktygsf\xe4lten h\xe4r, eller \xe4ndra \xf6versikten till Avancerad f\xf6r att skriva/klistra in i LaTeX.",more_external_tools:"Fler externa verktyg",switch_editor_html:"HTML Editor",switch_editor_rich_text:"Inneh\xe5llsredigerare",titles:{insert_edit_image:"Mata in/Redigera bild"}},failed_to_save_please_try_again_later_bb7070fb:"Misslyckades att spara, v\xe4nligen f\xf6rs\xf6k igen senare",remove_attachment_ceae0973:"Ta bort bilaga",saving_d55dd90e:"Sparar...",the_following_content_is_partner_provided_ed1da756:"F\xf6ljande inneh\xe5ll \xe4r partner tillhandah\xe5llet",the_preceding_content_is_partner_provided_d753928c:"Det f\xf6reg\xe5ende inneh\xe5llet \xe4r partner tillhandah\xe5llet"},"sv-x-k12":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\xc4r du s\xe4ker p\xe5 att du vill annullera? \xc4ndringar du gjort kan inte sparas.",cancel_caeb1e68:"Avbryt",changes_you_made_may_not_be_saved_4e8db973:"\xc4ndringar du gjort kan inte sparas.",close_d634289d:"St\xe4ng",editor:{button:{insert_equation:"Skriv in ekvation"},cannot_render_equation:"Den h\xe4r ekvationen kan inte tolkas i enkel vy.",done:{title:"Klicka f\xf6r att f\xe4rdigst\xe4lla redigering av text-omr\xe5det"},done_as_in_finished:"F\xe4rdiggjord",embed_from_external_tool:'"B\xe4dda in inneh\xe5ll fr\xe5n ett externt verktyg"',equation_editor_title:"Anv\xe4nd verktygsf\xe4lten h\xe4r, eller \xe4ndra \xf6versikten till Avancerad f\xf6r att skriva/klistra in i LaTeX.",more_external_tools:"Fler externa verktyg",switch_editor_html:"HTML-redigeraren",switch_editor_rich_text:"Inneh\xe5llsredigerare",titles:{insert_edit_image:"Mata in/Redigera bild"}},failed_to_save_please_try_again_later_bb7070fb:"Misslyckades att spara, v\xe4nligen f\xf6rs\xf6k igen senare",remove_attachment_ceae0973:"Ta bort bilaga",saving_d55dd90e:"Sparar...",the_following_content_is_partner_provided_ed1da756:"F\xf6ljande inneh\xe5ll \xe4r partner tillhandah\xe5llet",the_preceding_content_is_partner_provided_d753928c:"Det f\xf6reg\xe5ende inneh\xe5llet \xe4r partner tillhandah\xe5llet"},tr:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\u0130ptal etmek istedi\u011finize emin misiniz? Yapt\u0131\u011f\u0131n\u0131z de\u011fi\u015fiklikler kaydedilmeyebilir.",cancel_caeb1e68:"\u0130ptal",changes_you_made_may_not_be_saved_4e8db973:"Yapt\u0131\u011f\u0131n\u0131z de\u011fi\u015fiklikler kaydedilmemi\u015f olabilir.",close_d634289d:"Kapat",editor:{button:{insert_equation:"Denklem Ekle"},cannot_render_equation:"Bu denklem Basit G\xf6r\xfcn\xfcmde i\u015flenemez.",done:{title:"Zengin metin alan\u0131nda d\xfczenlemeyi bitirmek i\xe7in t\u0131klay\u0131n\u0131z"},done_as_in_finished:"Tamam",embed_from_external_tool:'"Harici Ara\xe7tan i\xe7erik Ekle"',equation_editor_title:"Buradaki ara\xe7 \xe7ubuklar\u0131n\u0131 kullan\u0131n ya da LaTeX'te yazmak/yap\u0131\u015ft\u0131rmak i\xe7in G\xf6r\xfcn\xfcm\xfc De\u011fi\u015ftir'den Geli\u015fmi\u015f'i se\xe7",more_external_tools:"Daha Fazla Harici Ara\xe7",switch_editor_html:"HTML D\xfczenleyici",switch_editor_rich_text:"Zengin \u0130\xe7erik Edit\xf6r\xfc",titles:{insert_edit_image:"Resim Ekle / D\xfczenle"}},failed_to_save_please_try_again_later_bb7070fb:"Kaydetme ba\u015far\u0131s\u0131z, l\xfctfen daha sonra tekrar deneyin",remove_attachment_ceae0973:"Ekli Dosyay\u0131 Kald\u0131r",saving_d55dd90e:"Kaydediliyor..."},uk:{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\u0412\u0438 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0449\u043e \u0445\u043e\u0447\u0435\u0442\u0435 \u0441\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438? \u0417\u0440\u043e\u0431\u043b\u0435\u043d\u0456 \u0437\u043c\u0456\u043d\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u0431\u0443\u0442\u0438 \u043d\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456.",cancel_caeb1e68:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",changes_you_made_may_not_be_saved_4e8db973:"\u0417\u0440\u043e\u0431\u043b\u0435\u043d\u0456 \u0412\u0430\u043c\u0438 \u0437\u043c\u0456\u043d\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u0431\u0443\u0442\u0438 \u043d\u0435 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u0456.",close_d634289d:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438",editor:{button:{insert_equation:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f"},cannot_render_equation:"\u0426\u0435 \u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u043d\u0435 \u043c\u043e\u0436\u043d\u0430 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0443 \u0431\u0430\u0437\u043e\u0432\u043e\u043c\u0443 \u0440\u0435\u0436\u0438\u043c\u0456 \u043f\u0435\u0440\u0435\u0433\u043b\u044f\u0434\u0443",done:{title:"\u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c, \u0449\u043e\u0431 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u0456 \u0442\u0435\u043a\u0441\u0442\u0443"},done_as_in_finished:"\u0413\u043e\u0442\u043e\u0432\u043e",embed_from_external_tool:'"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0432\u043c\u0456\u0441\u0442 \u0456\u0437 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u044c\u043e\u0433\u043e \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430"',equation_editor_title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 \u0446\u044e \u043f\u0430\u043d\u0435\u043b\u044c \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432, \u0430\u0431\u043e \u043f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0432\u0456\u0434 \u0440\u0435\u0436\u0438\u043c\u0443 \u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434\u0443 \u0434\u043e \u0420\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043e\u0433\u043e \u0440\u0435\u0436\u0438\u043c\u0443 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0443/\u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0443 LaTeX",more_external_tools:"\u0411\u0456\u043b\u044c\u0448\u0435 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u0445 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432",switch_editor_html:"HTML-\u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440",switch_editor_rich_text:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0437\u0431\u0430\u0433\u0430\u0447\u0435\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443",titles:{insert_edit_image:"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 / \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"}},failed_to_save_please_try_again_later_bb7070fb:"\u041d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437 \u043f\u0456\u0437\u043d\u0456\u0448\u0435.",remove_attachment_ceae0973:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u0432\u043a\u043b\u0430\u0434\u0435\u043d\u043d\u044f",saving_d55dd90e:"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f...",the_following_content_is_partner_provided_ed1da756:"\u041d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430\u0434\u0430\u043d\u0438\u0439 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u043c",the_preceding_content_is_partner_provided_d753928c:"\u041f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043d\u0430\u0434\u0430\u043d\u0438\u0439 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u043c"},"zh-Hans":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\u786e\u5b9a\u8981\u53d6\u6d88\u5417\uff1f\u60a8\u505a\u51fa\u7684\u53d8\u66f4\u53ef\u80fd\u65e0\u6cd5\u4fdd\u5b58\u3002",cancel_caeb1e68:"\u53d6\u6d88",changes_you_made_may_not_be_saved_4e8db973:"\u60a8\u505a\u51fa\u7684\u53d8\u66f4\u53ef\u80fd\u65e0\u6cd5\u4fdd\u5b58\u3002",close_d634289d:"\u5173\u95ed",editor:{button:{insert_equation:"\u63d2\u5165\u7b49\u5f0f"},cannot_render_equation:"\u65e0\u6cd5\u5728\u57fa\u672c\u89c6\u56fe\u4e2d\u5448\u73b0\u6b64\u516c\u5f0f\u3002",done:{title:"\u5355\u51fb\u4ee5\u5b8c\u6210\u7f16\u8f91\u5bcc\u6587\u672c\u533a\u57df"},done_as_in_finished:"\u5b8c\u6210",embed_from_external_tool:"\u201c\u4f7f\u7528\u5916\u90e8\u5de5\u5177\u5d4c\u5165\u5185\u5bb9\u201d",equation_editor_title:"\u4f7f\u7528\u6b64\u5904\u7684\u5de5\u5177\u680f\uff0c\u6216\u5207\u6362\u5230\u9ad8\u7ea7\u89c6\u56fe\u4ee5\u4fbf\u7528 LaTeX \u683c\u5f0f\u952e\u5165/\u7c98\u8d34",more_external_tools:"\u66f4\u591a\u5916\u90e8\u5de5\u5177",switch_editor_html:"HTML \u7f16\u8f91\u5668",switch_editor_rich_text:"\u5bcc\u5185\u5bb9\u7f16\u8f91\u5668",titles:{insert_edit_image:"\u63d2\u5165/\u7f16\u8f91\u56fe\u50cf"}},failed_to_save_please_try_again_later_bb7070fb:"\u4fdd\u5b58\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",remove_attachment_ceae0973:"\u5220\u9664\u9644\u4ef6",saving_d55dd90e:"\u6b63\u5728\u4fdd\u5b58...",the_following_content_is_partner_provided_ed1da756:"\u4ee5\u4e0b\u5185\u5bb9\u7531\u5408\u4f5c\u4f19\u4f34\u63d0\u4f9b",the_preceding_content_is_partner_provided_d753928c:"\u4ee5\u4e0a\u5185\u5bb9\u7531\u5408\u4f5c\u4f19\u4f34\u63d0\u4f9b"},"zh-Hant":{are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496:"\u662f\u5426\u78ba\u5b9a\u8981\u53d6\u6d88\uff1f\u60a8\u6240\u505a\u7684\u8b8a\u66f4\u6216\u672a\u80fd\u8caf\u5b58\u3002",cancel_caeb1e68:"\u53d6\u6d88",changes_you_made_may_not_be_saved_4e8db973:"\u60a8\u6240\u505a\u7684\u8b8a\u66f4\u6216\u672a\u80fd\u8caf\u5b58\u3002",close_d634289d:"\u95dc\u9589",editor:{button:{insert_equation:"\u63d2\u5165\u65b9\u7a0b\u5f0f"},cannot_render_equation:"\u6b64\u65b9\u7a0b\u5f0f\u4e0d\u80fd\u5728\u57fa\u672c\u8996\u5716\u4e2d\u5448\u73fe\u3002",done:{title:"\u6309\u4e00\u4e0b\u4ee5\u5b8c\u6210\u7de8\u8f2f RTF \u5340\u57df"},done_as_in_finished:"\u5df2\u5b8c\u6210",embed_from_external_tool:"\u300e\u5f9e\u5916\u90e8\u5de5\u5177\u5d4c\u5165\u5167\u5bb9\u300f",equation_editor_title:"\u4f7f\u7528\u6b64\u8655\u7684\u5de5\u5177\u6b04\uff0c\u6216\u300e\u5207\u63db\u81f3\u9ad8\u7d1a\u8996\u5716\u300f\uff0c\u4ee5\u8f38\u5165/\u7c98\u8cbc LaTeX",more_external_tools:"\u66f4\u591a\u5916\u90e8\u5de5\u5177",switch_editor_html:"HTML \u7de8\u8f2f\u5668",switch_editor_rich_text:"\u5bcc\u5167\u5bb9\u7de8\u8f2f\u5668",titles:{insert_edit_image:"\u63d2\u5165/\u7de8\u8f2f\u5f71\u50cf"}},failed_to_save_please_try_again_later_bb7070fb:"\u7121\u6cd5\u4fdd\u5b58\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u4e00\u6b21",remove_attachment_ceae0973:"\u522a\u9664\u9644\u4ef6",saving_d55dd90e:"\u6b63\u5728\u4fdd\u5b58...",the_following_content_is_partner_provided_ed1da756:"\u4ee5\u4e0b\u5167\u5bb9\u7531\u5408\u4f5c\u5925\u4f34\u63d0\u4f9b",the_preceding_content_is_partner_provided_d753928c:"\u4e0a\u8ff0\u5167\u5bb9\u7531\u5408\u4f5c\u5925\u4f34\u63d0\u4f9b"}}})},IIpzxDTdC3:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};["equationCB","linksCB","imagePickerCB","equellaCB","externalToolCB","recordCB"].forEach(function(t){void 0===e[t]&&(e[t]=function(){})})
document.addEventListener("tinyRCE/initEquation",function(t){var n=t.detail
i.e(4).then(function(t){var a=i("+Be0f/404x"),o=new a(n.ed)
e.equationCB(o)}.bind(null,i)).catch(i.oe)})
document.addEventListener("tinyRCE/initLinks",function(t){var i=t.detail
r.default.renderDialog(i.ed)
e.linksCB()})
document.addEventListener("tinyRCE/initImagePicker",function(t){i.e(2).then(function(n){var a=i("6XJQ/KUWZy"),o=new a(t.detail.ed,t.detail.selectedNode)
e.imagePickerCB(o)}.bind(null,i)).catch(i.oe)})
document.addEventListener("tinyRCE/initEquella",function(t){i.e(6).then(function(n){var a=i("AOUdSAjyQx")
a(t.detail.ed)
e.equellaCB()}.bind(null,i)).catch(i.oe)})
document.addEventListener("tinyRCE/initExternalTools",function(t){a.default.init(t.detail.ed,t.detail.url,o.default)
e.externalToolCB()})
document.addEventListener("tinyRCE/initRecord",function(t){i.e(5).then(function(n){var a=i("R7Y87JWcvG")
a.insertEditor(t.detail.ed)
e.recordCB()}.bind(null,i)).catch(i.oe)})}
var a=n(i("EJaXNmAx3B")),o=n(i("whMk0QU2To")),r=n(i("hpV4JWU0K6"))
e.exports=t.default},Ii09r7XDvi:function(e,t,i){var n,a
n=[i("36QOWIB4+W"),i("Lv2o/qLTOe"),i("PyJFCi/UoU"),i("XDPawBHrta")],void 0!==(a=function(e){return e.scoped("editor_accessibility")}.apply(t,n))&&(e.exports=a)},JYcub8KqMf:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L"),a=n(i("iBw8ZGM6v8")),o=n(i("mOY9BNujNR")),r=n(i("cyMNwMhBvy")),s=n(i("ArN3I+GqU9"))
i("FjPpBpSp8P")
i("BIYSGtzGjH")
i("PYCyImFiAC")
i("OHJtctF3NN")
i("zr2HOwddfD")
i("EKuPgEpL6b")
i("FMOK6cJcp3")
i("2aUY+gHXYk")
i("CU+gNa7iD4")
i("QE/xL6drvs")
i("LShObMQJhT")
i("Eq7qibUFi3");(0,o.default)("#skip_navigation_link").on("click",(0,s.default)(function(){(0,o.default)((0,o.default)(void 0).attr("href")).attr("tabindex",-1).focus()}))
var d=1200
function l(){var e=(0,o.default)("body").hasClass("course-menu-expanded")||(0,o.default)(document).width()>=d-15?0:-1;(0,o.default)("#section-tabs li a").attr("tabIndex",e)}(0,o.default)(l);(0,o.default)(window).on("resize",a.default.debounce(l,50));(0,o.default)("body").on("click","#courseMenuToggle",function(){(0,o.default)("body").toggleClass("course-menu-expanded");(0,r.default)();(0,o.default)("#left-side").css({display:(0,o.default)("body").hasClass("course-menu-expanded")?"block":"none"})
l()})},KVDLV1bDgD:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L"),a=n(i("whMk0QU2To")),o=n(i("MryoBGIZcz")),r=n(i("mOY9BNujNR")),s=(n(i("iBw8ZGM6v8")),n(i("eJBzaBDd6c")))
i("Q4xR9Iqymk")
i("Q/pI8WL7wG")
i("kzdUuF07HD")
i("+d6o9BzfWM")
var d=n(i("dNJxE1iMRL")),l={"application/vnd.openxmlformats-officedocument.wordprocessingml.template":[1,1],"application/vnd.oasis.opendocument.spreadsheet":[1,1],"application/vnd.sun.xml.writer":[1,1],"application/excel":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[1,1],"text/rtf":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":[1,1],"application/vnd.sun.xml.impress":[1,1],"application/vnd.sun.xml.calc":[1,1],"application/vnd.ms-excel":[1,1],"application/msword":[1,1],"application/mspowerpoint":[1,1],"application/rtf":[1,1],"application/vnd.oasis.opendocument.presentation":[1,1],"application/vnd.oasis.opendocument.text":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.template":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":[1,1],"text/plain":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[1,1],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[1,1],"application/postscript":[1,1],"application/pdf":[1,1],"application/vnd.ms-powerpoint":[1,1]}
r.default.filePreviewsEnabled=function(){return!(a.default.disableCrocodocPreviews&&a.default.disableGooglePreviews)}
r.default.isPreviewable=function(e,t){return r.default.filePreviewsEnabled()&&l[e]&&(!t||!a.default["disable"+r.default.capitalize(t)+"Previews"]&&l[e][{scribd:0,google:1}[t]])}
r.default.fn.loadDocPreview=function(e){return this.each(function(){var t=(0,r.default)(this),i=r.default.extend({width:"100%",height:"400px"},t.data(),e)
function n(e){if(i.attachment_view_inline_ping_url){r.default.ajaxJSON(i.attachment_view_inline_ping_url,"POST",{},function(){},function(){})
r.default.trackEvent("Doc Previews",e,JSON.stringify(i,["attachment_id","submission_id","mimetype","crocodoc_session_url","canvadoc_session_url"]))}}if(!a.default.disableCrocodocPreviews&&i.crocodoc_session_url){var l=(0,d.default)(i.crocodoc_session_url);(u=(0,r.default)("<iframe/>",{src:l,width:i.width,height:i.height,allowfullscreen:"1",id:i.id})).appendTo(t)
u.load(function(){n("crocodoc")
r.default.isFunction(i.ready)&&i.ready()})}else if(i.canvadoc_session_url){var c=(0,r.default)('<div style="overflow: auto; resize: vertical;        border: 1px solid transparent; height: 100%;"/>')
c.appendTo(t)
var u,_=void 0!==i.iframe_min_height?i.iframe_min_height:"800px",h=(0,d.default)(i.canvadoc_session_url);(u=(0,r.default)("<iframe/>",{src:h,width:i.width,allowfullscreen:"1",css:{border:0,overflow:"auto",height:"99%","min-height":_},id:i.id})).appendTo(c)
u.load(function(){n("canvadocs")
r.default.isFunction(i.ready)&&i.ready()})}else if(!a.default.disableGooglePreviews&&(!i.mimetype||r.default.isPreviewable(i.mimetype,"google"))&&i.attachment_id||i.public_url){var f=function(){var e="//docs.google.com/viewer?"+r.default.param({embedded:!0,url:i.public_url})
i.ajax_valid&&!i.ajax_valid()||(0,r.default)('<iframe src="'+(0,s.default)(e)+'" height="'+i.height+'" width="100%" />').appendTo(t).load(function(){n("google")
r.default.isFunction(i.ready)&&i.ready()})}
if(i.public_url)f()
else if(i.attachment_id){var m="/api/v1/files/"+i.attachment_id+"/public_url.json"
i.submission_id&&(m+="?"+r.default.param({submission_id:i.submission_id}))
t.loadingImage()
r.default.ajaxJSON(m,"GET",{},function(e){t.loadingImage("remove")
if(e&&e.public_url){r.default.extend(i,e)
f()}})}}else r.default.filePreviewsEnabled()&&(i.attachment_preview_processing?t.html("<p>"+(0,s.default)(o.default.t("errors.document_preview_processing","The document preview is currently being processed. Please try again later."))+"</p>"):t.html("<p>"+(0,s.default)(o.default.t("errors.cannot_view_document_in_canvas","This document cannot be displayed within Canvas."))+"</p>"))})}},LShObMQJhT:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.attachErrorHandler=r
t.getImagesAndAttach=s
var a=n(i("mOY9BNujNR")),o=n(i("9vdLYFzxED"))
function r(e){(0,a.default)(e).on("error",function(e){e.currentTarget.src?a.default.get(e.currentTarget.src).fail(function(t){403===t.status?(0,a.default)(e.currentTarget).attr({src:"/images/svg-icons/icon_lock.svg",alt:o.default.t("Locked image"),width:100,height:100}):(0,a.default)(e.currentTarget).addClass("broken-image")}):(0,a.default)(e.currentTarget).addClass("broken-image")})}function s(){(0,a.default)('img[src!=""]').toArray().forEach(r)}(0,a.default)(document).ready(function(){return s()})},"Lv2o/qLTOe":function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=i("36QOWIB4+W"),a=i.n(n),o=i("mOY9BNujNR")
i.n(o).a.extend(!0,a.a,{translations:{ar:{editor_accessibility:{accessibles:{background_color:"\u0644\u0648\u0646 \u0627\u0644\u062e\u0644\u0641\u064a\u0629\u060c \u0627\u0636\u063a\u0637 \u0644\u0623\u0633\u0641\u0644 \u0644\u0644\u062a\u062d\u062f\u064a\u062f",forecolor:"\u0644\u0648\u0646 \u0627\u0644\u0646\u0635\u060c \u0627\u0636\u063a\u0637 \u0644\u0623\u0633\u0641\u0644 \u0644\u0644\u062a\u062d\u062f\u064a\u062f"},titles:{font_size:"\u062d\u062c\u0645 \u0627\u0644\u062e\u0637\u060c \u0627\u0636\u063a\u0637 \u0644\u0623\u0633\u0641\u0644 \u0644\u0644\u062a\u062d\u062f\u064a\u062f",formatting:"\u0627\u0644\u062a\u0646\u0633\u064a\u0642\u060c \u0627\u0636\u063a\u0637 \u0644\u0623\u0633\u0641\u0644 \u0644\u0644\u062a\u062d\u062f\u064a\u062f",rte_help:"\u0645\u0646\u0637\u0642\u0629 \u0646\u0635 \u0645\u0646\u0633\u0642. \u0627\u0636\u063a\u0637 \u0639\u0644\u0649 ALT+F8 \u0644\u0644\u0645\u0633\u0627\u0639\u062f\u0629"}},rich_content_editor_2708ef21:"Rich Content Editor"},cy:{editor_accessibility:{accessibles:{background_color:"Lliw'r Cefndir, pwyswch i lawr i ddewis",forecolor:"Lliw'r Testun, pwyswch i lawr i ddewis"},titles:{font_size:"Maint y Ffont, pwyswch i lawr i ddewis",formatting:"Fformat, pwyswch i lawr i ddewis",rte_help:"Ardal Testun Cyfoethog. Pwyswch ALT+F8 i gael help"}},rich_content_editor_2708ef21:"Golygydd Cynnwys Cyfoethog"},da:{editor_accessibility:{accessibles:{background_color:"Baggrundsfarve, tryk ned for at v\xe6lge",forecolor:"Tekstfarve, tryk ned for at v\xe6lge"},titles:{font_size:"Skriftst\xf8rrelse, tryk ned for at v\xe6lge",formatting:"Formatering, tryk ned for at v\xe6lge",rte_help:"Omr\xe5de med RTF. Tryk p\xe5 ALT+F8 for hj\xe6lp"}},rich_content_editor_2708ef21:"Rich Content Editor"},"da-x-k12":{editor_accessibility:{accessibles:{background_color:"Baggrundsfarve, tryk ned for at v\xe6lge",forecolor:"Tekstfarve, tryk ned for at v\xe6lge"},titles:{font_size:"Skriftst\xf8rrelse, tryk ned for at v\xe6lge",formatting:"Formatering, tryk ned for at v\xe6lge",rte_help:"Omr\xe5de med RTF. Tryk p\xe5 ALT+F8 for hj\xe6lp"}},rich_content_editor_2708ef21:"Rich Content Editor"},de:{editor_accessibility:{accessibles:{background_color:"Hintergrundfarbe, zum Ausw\xe4hlen Pfeil-nach-unten dr\xfccken",forecolor:"Textfarbe, zum Auswahlen Pfeil-nach-unten dr\xfccken"},titles:{font_size:"Schriftgr\xf6\xdfe, zum Ausw\xe4hlen Pfeil-nach-unten dr\xfccken",formatting:"Formatierung, zum Ausw\xe4hlen Pfeil-nach-unten dr\xfccken",rte_help:"Rich Text-Bereich. F\xfcr Hilfe <Alt>+F8 dr\xfccken"}},rich_content_editor_2708ef21:"Rich-Content-Editor"},el:{editor_accessibility:{accessibles:{background_color:"\u03a7\u03c1\u03ce\u03bc\u03b1 \u03a6\u03cc\u03bd\u03c4\u03bf\u03c5, \u03c0\u03b9\u03ad\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae",forecolor:"\u03a7\u03c1\u03ce\u03bc\u03b1 \u039a\u03b5\u03b9\u03bc\u03ad\u03bd\u03bf\u03c5, \u03c0\u03b9\u03ad\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae"},titles:{font_size:"\u039c\u03ad\u03b3\u03b5\u03b8\u03bf\u03c2 \u0393\u03c1\u03b1\u03bc\u03bc\u03b1\u03c4\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2, \u03c0\u03b9\u03ad\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae",formatting:"\u039c\u03bf\u03c1\u03c6\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7, \u03c0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 \u03ba\u03ac\u03c4\u03c9 \u03b3\u03b9\u03b1 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae",rte_help:'<mrk mid="6144" mtype="seg">\u03a0\u03b5\u03c1\u03b9\u03bf\u03c7\u03ae Rich Text.</mrk> <mrk mid="6145" mtype="seg">\u03a0\u03b1\u03c4\u03ae\u03c3\u03c4\u03b5 ALT+F8 \u03b3\u03b9\u03b1 \u03b2\u03bf\u03ae\u03b8\u03b5\u03b9\u03b1</mrk>'}},rich_content_editor_2708ef21:"\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03ae\u03c2 \u03a0\u03bb\u03bf\u03cd\u03c3\u03b9\u03bf\u03c5 \u03a0\u03b5\u03c1\u03b9\u03b5\u03c7\u03bf\u03bc\u03ad\u03bd\u03bf\u03c5-rich content"},"en-AU":{editor_accessibility:{accessibles:{background_color:"Background Colour, press down to select",forecolor:"Text Colour, press down to select"},titles:{font_size:"Font Size, press down to select",formatting:"Formatting, press down to select",rte_help:"Rich Text Area. Press ALT+F8 for help."}},rich_content_editor_2708ef21:"Rich Content Editor"},"en-CA":{editor_accessibility:{accessibles:{background_color:"Background Color, press down to select",forecolor:"Text Color, press down to select"},titles:{font_size:"Font Size, press down to select",formatting:"Formatting, press down to select",rte_help:"Rich Text Area. Press ALT+F8 for help"}},rich_content_editor_2708ef21:"Rich Content Editor"},"en-GB":{editor_accessibility:{accessibles:{background_color:"Background colour. Press down to select",forecolor:"Text colour. Press down to select"},titles:{font_size:"Font size. Press down to select",formatting:"Formatting. Press down to select",rte_help:"Rich Text Area. Press ALT+F8 for help"}},rich_content_editor_2708ef21:"Rich Content Editor"},"en-GB-x-lbs":{editor_accessibility:{accessibles:{background_color:"Background colour. Press down to select",forecolor:"Text colour. Press down to select"},titles:{font_size:"Font size. Press down to select",formatting:"Formatting. Press down to select",rte_help:"Rich Text Area. Press ALT+F8 for help"}},rich_content_editor_2708ef21:"Rich Content Editor"},"en-GB-x-ukhe":{editor_accessibility:{accessibles:{background_color:"Background colour. Press down to select",forecolor:"Text colour. Press down to select"},titles:{font_size:"Font size. Press down to select",formatting:"Formatting. Press down to select",rte_help:"Rich Text Area. Press ALT+F8 for help"}},rich_content_editor_2708ef21:"Rich Content Editor"},es:{editor_accessibility:{accessibles:{background_color:"Color de fondo, pulse abajo para seleccionar",forecolor:"Color de texto, pulse abajo para seleccionar"},titles:{font_size:"Tama\xf1o del texto, pulse abajo para seleccionar",formatting:"Formato, pulse abajo para seleccionar",rte_help:"\xc1rea del texto enriquecido. Presione ALT+F8 para ayuda"}},rich_content_editor_2708ef21:"Editor de contenido enriquecido"},fa:{editor_accessibility:{accessibles:{background_color:"\u0631\u0646\u06af \u067e\u0633 \u0632\u0645\u06cc\u0646\u0647\u060c \u06a9\u0644\u06cc\u062f down \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0641\u0634\u0627\u0631 \u062f\u0647\u06cc\u062f",forecolor:"\u0631\u0646\u06af \u0645\u062a\u0646\u060c \u06a9\u0644\u06cc\u062f down \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0641\u0634\u0627\u0631 \u062f\u0647\u06cc\u062f"},titles:{font_size:"\u0627\u0646\u062f\u0627\u0632\u0647 \u0642\u0644\u0645\u060c \u06a9\u0644\u06cc\u062f down \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0641\u0634\u0627\u0631 \u062f\u0647\u06cc\u062f",formatting:"\u062f\u0631 \u062d\u0627\u0644 \u0642\u0627\u0644\u0628 \u0628\u0646\u062f\u06cc\u060c \u06a9\u0644\u06cc\u062f down \u0631\u0627 \u0628\u0631\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u0641\u0634\u0627\u0631 \u062f\u0647\u06cc\u062f",rte_help:"\u0642\u0633\u0645\u062a \u062f\u0627\u0631\u0627\u06cc \u0645\u062a\u0646 \u063a\u0646\u06cc. ALT+F8 \u0631\u0627 \u0628\u0631\u0627\u06cc \u0631\u0627\u0647\u0646\u0645\u0627\u06cc\u06cc \u0641\u0634\u0627\u0631 \u062f\u0647\u06cc\u062f."}},rich_content_editor_2708ef21:"\u0648\u06cc\u0631\u0627\u06cc\u0634\u06af\u0631 \u0645\u062d\u062a\u0648\u0627\u06cc \u063a\u0646\u06cc"},fr:{editor_accessibility:{accessibles:{background_color:"Couleur de fond. Appuyez pour s\xe9lectionner.",forecolor:"Couleur du texte. Appuyez pour s\xe9lectionner."},titles:{font_size:"Taille du texte. Appuyez pour s\xe9lectionner.",formatting:"Mise en forme. Appuyez pour s\xe9lectionner.",rte_help:"Zone de texte enrichi. Presser ALT+F8 pour obtenir de l'aide"}},rich_content_editor_2708ef21:"\xc9diteur de texte enrichi"},"fr-CA":{editor_accessibility:{accessibles:{background_color:"Couleur de fond. Appuyez pour s\xe9lectionner.",forecolor:"Couleur du texte. Appuyez pour s\xe9lectionner."},titles:{font_size:"Taille du texte. Appuyez pour s\xe9lectionner.",formatting:"Mise en forme. Appuyez pour s\xe9lectionner.",rte_help:"Zone de texte enrichi. Presser ALT+F8 pour obtenir de l'aide"}},rich_content_editor_2708ef21:"\xc9diteur de texte enrichi"},he:{editor_accessibility:{accessibles:{background_color:"\u05e6\u05d1\u05e2 \u05e8\u05e7\u05e2, \u05d9\u05e9 \u05dc\u05d4\u05e7\u05d9\u05e9 \u05db\u05d3\u05d9 \u05dc\u05d1\u05d7\u05d5\u05e8",forecolor:"\u05e6\u05d1\u05e2 \u05d8\u05e7\u05e1\u05d8, \u05d9\u05e9 \u05dc\u05d4\u05e7\u05d9\u05e9 \u05db\u05d3\u05d9 \u05dc\u05d1\u05d7\u05d5\u05e8"},titles:{font_size:"\u05d2\u05d5\u05d3\u05dc \u05d0\u05d5\u05ea, \u05d9\u05e9 \u05dc\u05d4\u05e7\u05d9\u05e9 \u05db\u05d3\u05d9 \u05dc\u05d1\u05d7\u05d5\u05e8",formatting:"\u05e2\u05d9\u05e6\u05d5\u05d1, \u05d9\u05e9 \u05dc\u05d4\u05e7\u05d9\u05e9 \u05db\u05d3\u05d9 \u05dc\u05d1\u05d7\u05d5\u05e8",rte_help:"\u05d0\u05d9\u05d6\u05d5\u05e8 \u05ea\u05d5\u05db\u05df \u05e2\u05e9\u05d9\u05e8. \u05d9\u05e9 \u05dc\u05d4\u05e7\u05d9\u05e9 ALT+F8 \u05dc\u05e2\u05d6\u05e8\u05d4"}},rich_content_editor_2708ef21:"\u05e2\u05d5\u05e8\u05da \u05ea\u05d5\u05db\u05df \u05e2\u05e9\u05d9\u05e8"},ht:{editor_accessibility:{accessibles:{background_color:"Koul\xe8 Fon, peze anba pou ka seleksyone",forecolor:"Koul\xe8 T\xe8ks, peze anba pou ka seleksyone"},titles:{font_size:"Gwos\xe8 T\xe8ks, peze anba pou ka seleksyone",formatting:"F\xf2mataj, peze anba pou ka seleksyone",rte_help:"Z\xf2n T\xe8ks Rich. Peze ALT+F8 pou \xe8d"}},rich_content_editor_2708ef21:"Edit\xe8 Kontni Rich"},hu:{editor_accessibility:{accessibles:{background_color:"H\xe1tt\xe9rsz\xedn, nyomja le a kiv\xe1laszt\xe1shoz",forecolor:"Sz\xf6vegsz\xedn, nyomja le a kiv\xe1laszt\xe1shoz"},titles:{font_size:"Bet\u0171m\xe9ret, nyomja le a kiv\xe1laszt\xe1shoz",formatting:"Form\xe1z\xe1s, nyomja le a kiv\xe1laszt\xe1shoz",rte_help:"Vizu\xe1lis sz\xf6vegter\xfclet, nyomja le az ALT+F8-at a seg\xedts\xe9ghez"}},rich_content_editor_2708ef21:"Vizu\xe1lis sz\xf6vegszerkeszt\u0151"},hy:{editor_accessibility:{accessibles:{background_color:"\u0556\u0578\u0576\u056b \u0563\u0578\u0582\u0575\u0576, \u0568\u0576\u057f\u0580\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580 \u057d\u0565\u0572\u0574\u0565\u0584 \u0576\u0565\u0580\u0584\u0587",forecolor:"\u054f\u0565\u0584\u057d\u057f\u056b \u0563\u0578\u0582\u0575\u0576, \u0568\u0576\u057f\u0580\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580 \u057d\u0565\u0572\u0574\u0565\u0584 \u0576\u0565\u0580\u0584\u0587"},titles:{font_size:"\u054f\u0561\u057c\u0565\u0580\u056b \u0579\u0561\u0583, \u0568\u0576\u057f\u0580\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580 \u057d\u0565\u0572\u0574\u0565\u0584 \u0576\u0565\u0580\u0584\u0587",formatting:"\u0556\u0578\u0580\u0574\u0561\u057f\u0561\u057e\u0578\u0580\u0578\u0582\u0574, \u0568\u0576\u057f\u0580\u0565\u056c\u0578\u0582 \u0570\u0561\u0574\u0561\u0580 \u057d\u0565\u0572\u0574\u0565\u0584 \u0576\u0565\u0580\u0584\u0587",rte_help:"\u0556\u0578\u0580\u0574\u0561\u057f\u0561\u057e\u0578\u0580\u057e\u0561\u056e \u057f\u0565\u0584\u057d\u057f\u056b \u0564\u0561\u0577\u057f, \u057f\u0565\u0572\u0565\u056f\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u056b \u0570\u0561\u0574\u0561\u0580 \u057d\u0565\u0572\u0574\u0565\u056c ALT+F8 "}},rich_content_editor_2708ef21:"\u0556\u0578\u0580\u0574\u0561\u057f\u0561\u057e\u0578\u0580\u057e\u0561\u056e \u057f\u0565\u0584\u057d\u057f\u056b \u056d\u0574\u0562\u0561\u0563\u056b\u0580"},is:{editor_accessibility:{accessibles:{background_color:"Bakgrunnslitur, \xfdttu \xe1 ni\xf0ur\xf6r til a\xf0 velja",forecolor:"Textalitur, \xfdttu \xe1 ni\xf0ur\xf6r til a\xf0 velja"},titles:{font_size:"Stafast\xe6r\xf0, \xfdttu \xe1 ni\xf0ur\xf6r til a\xf0 velja",formatting:"Forsn\xed\xf0, \xfdttu \xe1 ni\xf0ur\xf6r til a\xf0 velja",rte_help:"M\xf3ta\xf0 textasv\xe6\xf0i. \xddttu \xe1 ALT+F8 til a\xf0 f\xe1 hj\xe1lp"}},rich_content_editor_2708ef21:"Rich Content ritill"},it:{editor_accessibility:{accessibles:{background_color:"Colore sfondo, premi per selezionare",forecolor:"Colore testo, premi per selezionare"},titles:{font_size:"Dimensioni carattere, premi per selezionare",formatting:"Formattazione, premi per selezionare",rte_help:"Area di testo RTF. Premi ALT+F8 per la Guida"}},rich_content_editor_2708ef21:"Editor di contenuti avanzati"},ja:{editor_accessibility:{accessibles:{background_color:"\u80cc\u666f\u8272\u3001\u62bc\u3057\u3066\u9078\u629e",forecolor:"\u30c6\u30ad\u30b9\u30c8\u8272\u3001\u62bc\u3057\u3066\u9078\u629e"},titles:{font_size:"\u30d5\u30a9\u30f3\u30c8 \u30b5\u30a4\u30ba\u3001\u62bc\u3057\u3066\u9078\u629e",formatting:"\u66f8\u5f0f\u8a2d\u5b9a\u3001\u62bc\u3057\u3066\u9078\u629e",rte_help:"\u30ea\u30c3\u30c1\u30c6\u30ad\u30b9\u30c8\u30a8\u30ea\u30a2\u3002\u30d8\u30eb\u30d7\u3078\u306f\u3001ALT+F8\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044"}},rich_content_editor_2708ef21:"\u30ea\u30c3\u30c1 \u30b3\u30f3\u30c6\u30f3\u30c4 \u30a8\u30c7\u30a3\u30bf"},ko:{editor_accessibility:{accessibles:{background_color:"\ubc30\uacbd\uc0c9, \uc120\ud0dd\ud558\ub824\uba74 \ub204\ub984",forecolor:"\ud14d\uc2a4\ud2b8 \uc0c9, \uc120\ud0dd\ud558\ub824\uba74 \ub204\ub984"},titles:{font_size:"\uae00\uc790 \ud06c\uae30, \uc120\ud0dd\ud558\ub824\uba74 \ub204\ub984",formatting:"\uc11c\uc2dd, \uc120\ud0dd\ud558\ub824\uba74 \ub204\ub984",rte_help:"Rich Text Area. Press ALT+F8 for help"}}},mi:{editor_accessibility:{accessibles:{background_color:"Tae Papamuri, ki te p\u0113hi ki raro t\u012bpako",forecolor:"Tae Kuputuhi, ki te p\u0113hi ki raro t\u012bpako"},titles:{font_size:"Rahi Momotuhi, ki te p\u0113hi ki raro t\u012bpako",formatting:"Whakah\u014dputu, ki te p\u0113hi ki raro t\u012bpako",rte_help:"Horahanga Kupu Taunaki. P\u0113hi ALT + K8 no te tauturu"}},rich_content_editor_2708ef21:"\u0112tita Ihirangi Whai Rawa"},nb:{editor_accessibility:{accessibles:{background_color:"Bakgrunnsfarge, trykk nedover for \xe5 velge",forecolor:"Tekstfarge, trykk nedover for \xe5 velge"},titles:{font_size:"Skriftst\xf8rrelse, trykk nedover for \xe5 velge",formatting:"Formatering, trykk nedover for \xe5 velge",rte_help:"Riktekstomr\xe5de. Trykk ALT+F8 for hjelp"}},rich_content_editor_2708ef21:"Rich innholdsredigering"},"nb-x-k12":{editor_accessibility:{accessibles:{background_color:"Bakgrunnsfarge, trykk nedover for \xe5 velge",forecolor:"Tekstfarge, trykk nedover for \xe5 velge"},titles:{font_size:"Skriftst\xf8rrelse, trykk nedover for \xe5 velge",formatting:"Formatering, trykk nedover for \xe5 velge",rte_help:"Riktekstomr\xe5de. Trykk ALT+F8 for hjelp"}},rich_content_editor_2708ef21:"Rich innholdsredigering"},nl:{editor_accessibility:{accessibles:{background_color:"Achtergrondkleur, er op drukken om een optie te selecteren",forecolor:"Tekstkleur, er op drukken om een optie te selecteren"},titles:{font_size:"Tekstkleur, er op drukken om een optie te selecteren",formatting:"Opmaak, er op drukken om een optie te selecteren",rte_help:"Rich Text Area. Druk ALT+F8 voor hulp"}},rich_content_editor_2708ef21:"Rich Content Editor"},nn:{editor_accessibility:{accessibles:{background_color:"Bakgrunnsfarge, trykk ned for \xe5 velje",forecolor:"Tekstfarge, trykk ned for \xe5 velje"},titles:{font_size:"Skriftstorleik, trykk ned for \xe5 velje",formatting:"Formatering, trykk ned for \xe5 velje",rte_help:"Omr\xe5de for rikt tekstformat. Trykk ALT+F8 for hjelp"}},rich_content_editor_2708ef21:"Redigeringsprogram for rikt innhald"},pl:{editor_accessibility:{accessibles:{background_color:"Kolor t\u0142a; naciskaj do do\u0142u, aby wybra\u0107",forecolor:"Kolor tekstu; naciskaj do do\u0142u, aby wybra\u0107"},titles:{font_size:"Rozmiar czcionki; naciskaj do do\u0142u, aby wybra\u0107",formatting:"Formatowanie; naciskaj do do\u0142u, aby wybra\u0107",rte_help:"Obszar Rich Text. Wci\u015bnij ALT+F8 po pomoc"}},rich_content_editor_2708ef21:"Edytor wzbogaconej zawarto\u015bci"},pt:{editor_accessibility:{accessibles:{background_color:"Cor de fundo, premir para baixo para selecionar",forecolor:"Cor do texto, premir para baixo para selecionar"},titles:{font_size:"Tamanho da letra, premir para baixo para selecionar",formatting:"Formata\xe7\xe3o, premir para baixo para selecionar",rte_help:"\xc1rea Rich Text. Pressione ALT+F8 para ajuda"}},rich_content_editor_2708ef21:"Editor de conte\xfado avan\xe7ado"},"pt-BR":{editor_accessibility:{accessibles:{background_color:"Cor de fundo, pressione para selecionar",forecolor:"Cor do texto, pressione para selecionar"},titles:{font_size:"Tamanho da fonte, pressione para selecionar",formatting:"Formata\xe7\xe3o, pressione para selecionar",rte_help:"\xc1rea de Texto Rico. Pressione ALT + F8 para obter ajuda"}},rich_content_editor_2708ef21:"Editor de conte\xfado de rich text"},ru:{editor_accessibility:{accessibles:{background_color:"\u0426\u0432\u0435\u0442 \u0444\u043e\u043d\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u0442\u0440\u0435\u043b\u043a\u0443 \u0432\u043d\u0438\u0437, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c",forecolor:"\u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u0442\u0440\u0435\u043b\u043a\u0443 \u0432\u043d\u0438\u0437, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c"},titles:{font_size:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u0442\u0440\u0435\u043b\u043a\u0443 \u0432\u043d\u0438\u0437, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c",formatting:"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u0442\u0440\u0435\u043b\u043a\u0443 \u0432\u043d\u0438\u0437, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c",rte_help:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 ALT + F8 \u0434\u043b\u044f \u0441\u043f\u0440\u0430\u0432\u043a\u0438"}},rich_content_editor_2708ef21:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430"},sl:{editor_accessibility:{accessibles:{background_color:"Barva ozadja; za izbiro pritisnite navzdol.",forecolor:"Barva besedila; za izbiro pritisnite navzdol."},titles:{font_size:"Velikost pisave; za izbiro pritisnite navzdol.",formatting:"Oblikovanje; za izbiro pritisnite navzdol.",rte_help:"Obmo\u010dje besedila Za pomo\u010d pritisnite ALT+F8."}},rich_content_editor_2708ef21:"Urejevalnik"},sv:{editor_accessibility:{accessibles:{background_color:"Bakgrundsf\xe4rg, tryck ner f\xf6r att v\xe4lja",forecolor:"Textf\xe4rg, tryck ner f\xf6r att v\xe4lja"},titles:{font_size:"Typsnittsstorlek, trycker ner f\xf6r att v\xe4lja",formatting:"Formatering, tryck ner f\xf6r att v\xe4lja",rte_help:"Rik text-omr\xe5de. Tryck ALT+F8 f\xf6r hj\xe4lp"}},rich_content_editor_2708ef21:"Inneh\xe5llsredigerare"},"sv-x-k12":{editor_accessibility:{accessibles:{background_color:"Bakgrundsf\xe4rg, tryck ner f\xf6r att v\xe4lja",forecolor:"Textf\xe4rg, tryck ner f\xf6r att v\xe4lja"},titles:{font_size:"Typsnittsstorlek, trycker ner f\xf6r att v\xe4lja",formatting:"Formatering, tryck ner f\xf6r att v\xe4lja",rte_help:"Rik text-omr\xe5de. Tryck ALT+F8 f\xf6r hj\xe4lp"}},rich_content_editor_2708ef21:"Inneh\xe5llsredigerare"},tr:{editor_accessibility:{accessibles:{background_color:"Arkaplan rengi, a\u015fa\u011f\u0131 tu\u015fa bas\u0131n ve se\xe7in",forecolor:"Yaz\u0131 rengi, a\u015fa\u011f\u0131 tu\u015fa bas\u0131n ve se\xe7in"},titles:{font_size:"Yaz\u0131 b\xfcy\xfckl\xfc\u011f\xfc, a\u015fa\u011f\u0131 tu\u015fa bas\u0131n ve se\xe7in",formatting:"Format, a\u015fa\u011f\u0131 tu\u015fa bas\u0131n ve se\xe7in",rte_help:"Zengin Metin Alan\u0131. Yard\u0131m i\xe7in ALT+F8 e bas\u0131n"}},rich_content_editor_2708ef21:"Zengin \u0130\xe7erik Edit\xf6r\xfc"},uk:{editor_accessibility:{accessibles:{background_color:"\u041a\u043e\u043b\u0456\u0440 \u0444\u043e\u043d\u0443, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0432\u043d\u0438\u0437\u0443, \u0449\u043e\u0431 \u043e\u0431\u0440\u0430\u0442\u0438",forecolor:"\u041a\u043e\u043b\u0456\u0440 \u0442\u0435\u043a\u0441\u0442\u0443, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0432\u043d\u0438\u0437\u0443, \u0449\u043e\u0431 \u043e\u0431\u0440\u0430\u0442\u0438"},titles:{font_size:"\u0420\u043e\u0437\u043c\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0432\u043d\u0438\u0437\u0443, \u0449\u043e\u0431 \u043e\u0431\u0440\u0430\u0442\u0438",formatting:"\u0424\u043e\u0440\u043c\u0430\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c \u0432\u043d\u0438\u0437\u0443, \u0449\u043e\u0431 \u0432\u0438\u0431\u0440\u0430\u0442\u0438",rte_help:"\u0411\u0430\u0433\u0430\u0442\u043e\u0444\u0443\u043d\u043a\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0442\u0435\u043a\u0441\u0442\u0443. \u041d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c ALT+F8 \u0434\u043b\u044f \u0434\u043e\u0432\u0456\u0434\u043a\u0438"}},rich_content_editor_2708ef21:"\u041f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0439 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0443"},"zh-Hans":{editor_accessibility:{accessibles:{background_color:"\u80cc\u666f\u989c\u8272\uff0c\u6309\u4e0b\u5373\u53ef\u9009\u62e9",forecolor:"\u6587\u672c\u989c\u8272\uff0c\u6309\u4e0b\u5373\u53ef\u9009\u62e9"},titles:{font_size:"\u5b57\u4f53\u5927\u5c0f\uff0c\u6309\u4e0b\u5373\u53ef\u9009\u62e9",formatting:"\u683c\u5f0f\uff0c\u6309\u4e0b\u5373\u53ef\u9009\u62e9",rte_help:"\u5bcc\u6587\u672c\u533a\u57df\uff0c\u6309 Alt+ F8 \u5bfb\u6c42\u5e2e\u52a9"}},rich_content_editor_2708ef21:"\u5bcc\u5185\u5bb9\u7f16\u8f91\u5668"},"zh-Hant":{editor_accessibility:{accessibles:{background_color:"\u80cc\u666f\u984f\u8272\uff0c\u6309\u4e0b\u4ee5\u9078\u64c7",forecolor:"\u6587\u5b57\u984f\u8272\uff0c\u6309\u4e0b\u4ee5\u9078\u64c7"},titles:{font_size:"\u5b57\u9ad4\u5927\u5c0f\uff0c\u6309\u4e0b\u4ee5\u9078\u64c7",formatting:"\u683c\u5f0f\u5316\uff0c\u6309\u4e0b\u4ee5\u9078\u64c7",rte_help:"\u5bcc\u6587\u672c\u5340\u57df\u3002\u6309 ALT+F8 \u6c42\u52a9"}},rich_content_editor_2708ef21:"\u5bcc\u5167\u5bb9\u7de8\u8f2f\u5668"}}})},PYCyImFiAC:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L"),a=n(i("whMk0QU2To")),o=n(i("mOY9BNujNR"))
i("Q4xR9Iqymk");(0,o.default)(document).ready(function(){var e=0,t=window.ENV.page_view_update_url
d=!1
a.default.interaction_contexts={}
if(document.cookie&&document.cookie.match(/last_page_view/)){var i=document.cookie.match(/last_page_view=([^;]+)/)
if(i&&i[1])try{var n=o.default.parseJSON(unescape(i[1]))
n&&n.url&&n.seconds&&setTimeout(function(){o.default.ajaxJSON(n.url,"PUT",{interaction_seconds:n.seconds},function(){},function(){},3e3)})}catch(e){}document.cookie="last_page_view=; Path=/; expires=Thu, 01-Jan-1970 00:00:01 GMT"}if(t){var r,s=0;(0,o.default)(document).bind("page_view_update_url_received",function(e,i){t=i});(0,o.default)(document).bind("page_view_update",function(i,n){var a={}
if(n||e>10&&s<300){a.interaction_seconds=e
o.default.ajaxJSON(t,"PUT",a,null,function(e,t){422===t.status&&clearInterval(r)})
e=0}})
r=setInterval(function(){(0,o.default)(document).triggerHandler("page_view_update")},3e5)
window.addEventListener("beforeunload",function(i){if(e>30){var n=JSON.stringify({url:t,seconds:e})
document.cookie="last_page_view="+escape(n)+"; Path=/;"}})
var d=!1;(0,o.default)(document).bind("mousemove keypress mousedown focus",function(){d=!0})
setInterval(function(){if(d){e++
a.default&&a.default.interaction_context&&a.default.interaction_contexts&&(a.default.interaction_contexts[a.default.interaction_context]=(a.default.interaction_contexts[a.default.interaction_context]||0)+1)
d=!1
if(s>=300){s=0;(0,o.default)(document).triggerHandler("page_view_update")}s=0}else s++},1e3)}})},"QE/xL6drvs":function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")(i("mOY9BNujNR"))
if(ENV.ping_url)var a=setInterval(function(){document.hidden||n.default.post(ENV.ping_url).fail(function(e){401===e.status&&clearInterval(a)})},18e4)},QNUVZwyfqV:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=function(e,t,n){if(void 0==n)var r=!!o.default.browser.ie
else var r=n
return{auto_focus:t,setup:function(t){var n=(0,a.default)("#"+t.id)
t.on("keyup",function(e){(0,a.default)(document).trigger("editorKeyUp",[e])})
t.on("change",function(){n.trigger("change")})
t.on("keyup keydown click mousedown",function(){r&&t.selection&&n.data("last_bookmark",t.selection.getBookmark(1))})
ENV.use_rce_enhancements||t.on("init",function(){var e=i("53cLBmp0Qb")
new e(t).accessiblize()})
t.on("init",function(){(0,a.default)(window).triggerHandler("resize");(0,a.default)(t.contentDocument).bind("DOMNodeInserted",function(t){var i,n=t.target
1===n.nodeType&&"IMG"===n.nodeName&&(i=(0,a.default)(n).data("url"))&&(0,a.default)(n).attr("src",e.activeEditor.documentBaseURI.toAbsolute(i))})
"onfocusout"in t.contentWindow||(0,a.default)(t.contentWindow).blur(function(e){if(!t.removed&&t.undoManager.typing){t.undoManager.typing=!1
t.undoManager.add()}})})}}}
var a=n(i("mOY9BNujNR")),o=n(i("whMk0QU2To"))
e.exports=t.default},V0DFOiAOkw:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")(i("mOY9BNujNR"))
i("VHZX6oywWS")
var a=n.default.ui.menu.prototype,o=a.refresh
n.default.extend(a,{refresh:function(){o.call(this)
var e=this,t=this.element.find("li.ui-menu-item"),i=!1
this.element.bind("click.menu",function(e){new RegExp(/^a$/i).test(e.target.tagName)||e.preventDefault()})
var a=0
this.element.find("input[type='checkbox'], input[type='radio']").each(function(){var e=(0,n.default)(this).closest("label")
if(e.length){(0,n.default)(this).insertBefore(e);(0,n.default)(this).attr("id")||(0,n.default)(this).attr("id","ui-input-"+a++)
e.attr("for",(0,n.default)(this).attr("id"))}})
this.element.bind("menufocus",function(e){var t=(0,n.default)(e.target).find("a.ui-state-focus").children("input[type='text']")
t.length&&t[0].focus()})
this.element.bind("popupopen",function(t){var i=(0,n.default)(t.target).find("input[type=radio][checked]").closest(".ui-menu-item")
i.length&&setTimeout(function(){e.focus(t,i)},0)}).bind("menublur",function(e){var t=(0,n.default)(e.target).find("input[type='text']:focus")
t.length&&t[0].blur()})
t.children("a").each(function(e,t){var a=(0,n.default)(t),o=a.parent()
if(a.children().is("input[type='checkbox'], input[type='radio']")){a.closest("ul").addClass("ui-menu-icons")
if(a.children("input[type='checkbox']").is(":checked")){a.prepend('<span class="ui-icon ui-icon-check"></span>')
o.attr({role:"menuitemcheckbox","aria-checked":"true"})}else if(a.children("input[type='radio']").is(":checked")){a.prepend('<span class="ui-icon ui-icon-radio-on"></span>')
o.attr({role:"menuitemradio","aria-checked":"true"})}else if(a.children("input[type='radio']").length){a.prepend('<span class="ui-icon ui-icon-radio-off"></span>')
o.attr({role:"menuitemradio","aria-checked":"false"})}else o.attr({role:"menuitemcheckbox","aria-checked":"false"})
a.children().is("input[type='radio']")&&o.attr("radio-group",a.children("input[type='radio']").attr("name"))
if(o.prev().length&&!o.prev().children("a").length){o.prev().addClass("ui-state-disabled").html("<span class='ui-menu-input-group'>"+o.prev().html()+"</span>").bind("click.menu",function(e){return!1}).after("<li><hr /></li>")
i=!0}else o.prev().length&&!o.prev().children("a").children().is("input[type='checkbox'], input[type='radio']")&&o.before("<li><hr /></li>")
if(i&&o.next().length&&!o.next().children("a").children().is("input[type='checkbox'], input[type='radio']")){o.after("<li><hr /></li>")
i=!1}else o.next().length&&!o.next().children("a").children().is("input[type='checkbox'], input[type='radio']")&&o.after("<li><hr /></li>")
a.children("input[type='checkbox'], input[type='radio']").hide()}})
t.bind("keydown.menu",function(t){if(t.keyCode===n.default.ui.keyCode.SPACE){if(e.active.children("a").children().is("input[type='checkbox'], input[type='radio']")){e.select(t)
t.stopImmediatePropagation()}t.preventDefault()}})
t.find("input[type='text']").bind("keydown",function(t){t.stopPropagation()
if(t.keyCode===n.default.ui.keyCode.UP){e.element.trigger("focus")
this.blur()
e.focus(t,(0,n.default)(this).closest(".ui-menu-item").prev())}if(t.keyCode===n.default.ui.keyCode.DOWN){e.element.trigger("focus")
this.blur()
e.focus(t,(0,n.default)(this).closest(".ui-menu-item").next())}}).bind("click",function(e){e.stopPropagation()})},select:function(e){var t={item:this.active||(0,n.default)(e.target).closest(".ui-menu-item")}
if(t.item.children("a").children().is("input[type='checkbox']"))if("false"===t.item.attr("aria-checked")){t.item.children("a").prepend('<span class="ui-icon ui-icon-check"></span>')
t.item.attr("aria-checked","true")
t.item.children("a").children("input[type='checkbox']").prop("checked","checked").trigger("change")}else if("true"===t.item.attr("aria-checked")){t.item.children("a").children("span.ui-icon-check").remove()
t.item.attr("aria-checked","false")
t.item.children("a").children("input[type='checkbox']").removeAttr("checked").trigger("change")}if(t.item.children("a").children().is("input[type='radio']")&&"false"===t.item.attr("aria-checked")){t.item.children("a").children("span.ui-icon-radio-off").toggleClass("ui-icon-radio-on ui-icon-radio-off")
t.item.attr("aria-checked","true")
t.item.children("a").children("input[type='radio']").prop("checked","checked").trigger("change")
t.item.siblings("[radio-group="+(0,n.default)(t.item).attr("radio-group")+"]").each(function(){(0,n.default)(this).attr("aria-checked","false");(0,n.default)(this).children("a").children("span.ui-icon-radio-on").toggleClass("ui-icon-radio-on ui-icon-radio-off");(0,n.default)(this).children("a").children("input[type='radio']").removeAttr("checked")})}t.item.children("a").children().is("input[type='checkbox'], input[type='radio']")||this.collapseAll()
this._trigger("select",e,t)}})},V9Ry3Xcwt0:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")(i("mOY9BNujNR"))
i("Q/pI8WL7wG");(0,n.default)("body").on("click","[data-track-category]",function(){var e=(0,n.default)(this).data(),t=e.trackCategory,i=e.trackLabel,a=e.trackAction,o=e.trackValue
n.default.trackEvent(t,a,i,o)})},VHZX6oywWS:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")(i("mOY9BNujNR"))
i("O9QjtziI9Q")
i("1YHB9uvbU1")
function a(){return[].some.call((0,n.default)(this).parents().andSelf(),function(e){return"none"==n.default.css(e,"display")})}var o=!1
n.default.widget("ui.menu",{version:"@VERSION",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,n.default.proxy(function(e){this.options.disabled&&e.preventDefault()},this))
this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(e){var t=(0,n.default)(e.target)
if(!o&&t.closest(".ui-menu-item").not(".ui-state-disabled").length){o=!0
this.select(e)
this.element.has(".ui-menu").length?this.expand(e):this.element.is(":focus")||this.element.focus()}},"mouseenter .ui-menu-item":function(e){var t=(0,n.default)(e.currentTarget)
t.siblings().children(".ui-state-active").removeClass("ui-state-active")
this.focus(e,t)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e){var t=this.active||this.element.children(".ui-menu-item").not(a).eq(0)
t.length&&this.focus(e,t)},blur:function(e){this._delay(function(){n.default.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"})
this.refresh()
this._on(this.document,{click:function(e){(0,n.default)(e.target).closest(".ui-menu").length||this.collapseAll(e)
o=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show()
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=(0,n.default)(this)
e.data("ui-menu-submenu-carat")&&e.remove()})
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){var t,i,o,r,s,d=!0
function l(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}switch(e.keyCode){case n.default.ui.keyCode.PAGE_UP:this.previousPage(e)
break
case n.default.ui.keyCode.PAGE_DOWN:this.nextPage(e)
break
case n.default.ui.keyCode.HOME:this._move("first","first",e)
break
case n.default.ui.keyCode.END:this._move("last","last",e)
break
case n.default.ui.keyCode.UP:this.previous(e)
break
case n.default.ui.keyCode.DOWN:this.next(e)
break
case n.default.ui.keyCode.LEFT:this.collapse(e)
break
case n.default.ui.keyCode.RIGHT:this.active.is(".ui-state-disabled")||this.expand(e)
break
case n.default.ui.keyCode.ENTER:case n.default.ui.keyCode.SPACE:this._activate(e)
break
case n.default.ui.keyCode.ESCAPE:this.collapse(e)
break
default:d=!1
i=this.previousFilter||""
o=String.fromCharCode(e.keyCode)
r=!1
clearTimeout(this.filterTimer)
o===i?r=!0:o=i+o
s=new RegExp("^"+l(o),"i")
t=this.activeMenu.children(".ui-menu-item").filter(function(){return s.test((0,n.default)(this).children("a").not(a).text())})
if(!(t=r&&-1!==t.index(this.active.next())?this.active.nextAll(".ui-menu-item"):t).length){o=String.fromCharCode(e.keyCode)
s=new RegExp("^"+l(o),"i")
t=this.activeMenu.children(".ui-menu-item").filter(function(){return s.test((0,n.default)(this).children("a").not(a).text())})}if(t.length){this.focus(e,t)
if(t.length>1){this.previousFilter=o
this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)}else delete this.previousFilter}else delete this.previousFilter}if(d){e.stopPropagation()
e.preventDefault()}},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var e,t=this.options.icons.submenu,i=this.element.find(this.options.menus+":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"});(e=i.add(this.element)).children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()})
e.children(":not(.ui-menu-item)").each(function(){var e=(0,n.default)(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")})
e.children(".ui-state-disabled").attr("aria-disabled","true")
i.each(function(){var e=(0,n.default)(this),i=e.prev("a"),a=(0,n.default)("<span>").addClass("ui-menu-icon ui-icon "+t).data("ui-menu-submenu-carat",!0)
i.attr("aria-haspopup","true").prepend(a)
e.attr("aria-labelledby",i.attr("id"))})},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},focus:function(e,t){var i,n
this.blur(e,e&&"focus"===e.type)
this._scrollIntoView(t)
this.active=t.first()
n=this.active.children("a:visible").addClass("ui-state-focus")
this.options.role&&this.element.attr("aria-activedescendant",n.attr("id"))
this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active")
e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay);(i=t.children(".ui-menu")).length&&/^mouse/.test(e.type)&&this._startOpening(i)
this.activeMenu=t.parent()
this._trigger("focus",e,{item:t})},_scrollIntoView:function(e){var t,i,a,o,r,s
if(this._hasScroll()){t=parseFloat(n.default.css(this.activeMenu[0],"borderTopWidth"))||0
i=parseFloat(n.default.css(this.activeMenu[0],"paddingTop"))||0
a=e.offset().top-this.activeMenu.offset().top-t-i
o=this.activeMenu.scrollTop()
r=this.activeMenu.height()
s=e.height()
a<0?this.activeMenu.scrollTop(o+a):a+s>r&&this.activeMenu.scrollTop(o+a-r+s)}},blur:function(e,t){t||clearTimeout(this.timer)
if(this.active){this.active.children("a").removeClass("ui-state-focus")
this.active=null
this._trigger("blur",e,{item:this.active})}},_startOpening:function(e){clearTimeout(this.timer)
"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close()
this._open(e)},this.delay))},_open:function(e){var t=n.default.extend({of:this.active},this.options.position)
clearTimeout(this.timer)
this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true")
e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(t)},collapseAll:function(e,t){clearTimeout(this.timer)
this.timer=this._delay(function(){var i=t?this.element:(0,n.default)(e&&e.target).closest(this.element.find(".ui-menu"))
i.length||(i=this.element)
this._close(i)
this.blur(e)
this.activeMenu=i},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element)
e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element)
if(t&&t.length){this._close()
this.focus(e,t)}},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").not(a).first()
if(t&&t.length){this._open(t.parent())
this._delay(function(){this.focus(e,t)})}},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").not(a).length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").not(a).length},_move:function(e,t,i){var n
this.active&&(n="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").not(a).eq(-1):this.active[e+"All"](".ui-menu-item").not(a).eq(0))
n&&n.length&&this.active||(n=this.activeMenu.children(".ui-menu-item").not(a)[t]())
this.focus(i,n)},nextPage:function(e){var t,i,o
if(this.active){if(!this.isLastItem())if(this._hasScroll()){i=this.active.offset().top
o=this.element.height()
this.active.nextAll(".ui-menu-item").not(a).each(function(){return(t=(0,n.default)(this)).offset().top-i-o<0})
this.focus(e,t)}else this.focus(e,this.activeMenu.children(".ui-menu-item").not(a)[this.active?"last":"first"]())}else this.next(e)},previousPage:function(e){var t,i,o
if(this.active){if(!this.isFirstItem())if(this._hasScroll()){i=this.active.offset().top
o=this.element.height()
this.active.prevAll(".ui-menu-item").not(a).each(function(){return(t=(0,n.default)(this)).offset().top-i+o>0})
this.focus(e,t)}else this.focus(e,this.activeMenu.children(".ui-menu-item").not(a).first())}else this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){var t={item:this.active||(0,n.default)(e.target).closest(".ui-menu-item")}
t.item.has(".ui-menu").length||this.collapseAll(e,!0)
this._trigger("select",e,t)}})},"Vv/x3gjRQP":function(e,t,i){var n,a
n=[i("36QOWIB4+W"),i("H26p2vhyFo"),i("PyJFCi/UoU"),i("XDPawBHrta")],void 0!==(a=function(e){return e.scoped("editor")}.apply(t,n))&&(e.exports=a)},Z6MXnY8QXm:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("Z60aNDY003")),o=n(i("C9uTDLcwK6")),r=n(i("mOY9BNujNR")),s=function(){function e(){(0,a.default)(this,e)}(0,o.default)(e,[{key:"fetchYouTubeTitle",value:function(e,t){var i=ENV.JWT,n=ENV.RICH_CONTENT_APP_HOST,a="//".concat(n,"/api/youtube_title?vid_id=").concat(e)
r.default.ajax({headers:{Authorization:"Bearer ".concat(i)},url:a}).success(function(i){i.id===e&&t(i.title)}).error(function(e){t(null,e)})}},{key:"titleYouTubeText",value:function(e){var t=r.default.youTubeID(e.attr("href"))
this.fetchYouTubeTitle(t,function(i,n){if(n){console.error('failed to get video title from youtube for "'.concat(t,'":'),n.responseText)
var a=(+e.attr("data-ytt-failcnt")||0)+1
e.attr("data-ytt-failcnt",a)}else{e.text(i)
e.attr("data-preview-alt",i)}})}}])
return e}()
t.default=s
e.exports=t.default},ZwdgLllWpW:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")(i("mOY9BNujNR"))
i("O9QjtziI9Q")
i("QvLm/Z7v1R")
i("1YHB9uvbU1")
n.default.widget("ui.sortable",n.default.ui.mouse,{version:"@VERSION",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var e=this.options
this.containerCache={}
this.element.addClass("ui-sortable")
this.refresh()
this.floating=!!this.items.length&&("x"===e.axis||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")))
this.offset=this.element.offset()
this._mouseInit()
this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled")
this._mouseDestroy()
for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item")
return this},_setOption:function(e,t){if("disabled"===e){this.options[e]=t
this.widget().toggleClass("ui-sortable-disabled",!!t)}else n.default.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,t){var i=this
if(this.reverting)return!1
if(this.options.disabled||"static"==this.options.type)return!1
this._refreshItems(e)
var a=null;(0,n.default)(e.target).parents().each(function(){if(n.default.data(this,i.widgetName+"-item")==i){a=(0,n.default)(this)
return!1}})
n.default.data(e.target,i.widgetName+"-item")==i&&(a=(0,n.default)(e.target))
if(!a)return!1
if(this.options.handle&&!t){var o=!1;(0,n.default)(this.options.handle,a).find("*").andSelf().each(function(){this==e.target&&(o=!0)})
if(!o)return!1}this.currentItem=a
this._removeCurrentsFromItems()
return!0},_mouseStart:function(e,t,i){var a=this.options
this.currentContainer=this
this.refreshPositions()
this.helper=this._createHelper(e)
this._cacheHelperProportions()
this._cacheMargins()
this.scrollParent=this.helper.scrollParent()
this.offset=this.currentItem.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
n.default.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.helper.css("position","absolute")
this.cssPosition=this.helper.css("position")
this.originalPosition=this._generatePosition(e)
this.originalPageX=e.pageX
this.originalPageY=e.pageY
a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt)
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]}
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide()
this._createPlaceholder()
a.containment&&this._setContainment()
if(a.cursor){(0,n.default)("body").css("cursor")&&(this._storedCursor=(0,n.default)("body").css("cursor"));(0,n.default)("body").css("cursor",a.cursor)}if(a.opacity){this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity"))
this.helper.css("opacity",a.opacity)}if(a.zIndex){this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex"))
this.helper.css("zIndex",a.zIndex)}this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset())
this._trigger("start",e,this._uiHash())
this._preserveHelperProportions||this._cacheHelperProportions()
if(!i)for(var o=this.containers.length-1;o>=0;o--)this.containers[o]._trigger("activate",e,this._uiHash(this))
n.default.ui.ddmanager&&(n.default.ui.ddmanager.current=this)
n.default.ui.ddmanager&&!a.dropBehaviour&&n.default.ui.ddmanager.prepareOffsets(this,e)
this.dragging=!0
this.helper.addClass("ui-sortable-helper")
this._mouseDrag(e)
return!0},_mouseDrag:function(e){this.position=this._generatePosition(e)
this.positionAbs=this._convertPositionTo("absolute")
this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs)
if(this.options.scroll){var t=this.options,i=!1
if(this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName){this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<t.scrollSensitivity?this.scrollParent[0].scrollTop=i=this.scrollParent[0].scrollTop+t.scrollSpeed:e.pageY-this.overflowOffset.top<t.scrollSensitivity&&(this.scrollParent[0].scrollTop=i=this.scrollParent[0].scrollTop-t.scrollSpeed)
this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<t.scrollSensitivity?this.scrollParent[0].scrollLeft=i=this.scrollParent[0].scrollLeft+t.scrollSpeed:e.pageX-this.overflowOffset.left<t.scrollSensitivity&&(this.scrollParent[0].scrollLeft=i=this.scrollParent[0].scrollLeft-t.scrollSpeed)}else{e.pageY-(0,n.default)(document).scrollTop()<t.scrollSensitivity?i=(0,n.default)(document).scrollTop((0,n.default)(document).scrollTop()-t.scrollSpeed):(0,n.default)(window).height()-(e.pageY-(0,n.default)(document).scrollTop())<t.scrollSensitivity&&(i=(0,n.default)(document).scrollTop((0,n.default)(document).scrollTop()+t.scrollSpeed))
e.pageX-(0,n.default)(document).scrollLeft()<t.scrollSensitivity?i=(0,n.default)(document).scrollLeft((0,n.default)(document).scrollLeft()-t.scrollSpeed):(0,n.default)(window).width()-(e.pageX-(0,n.default)(document).scrollLeft())<t.scrollSensitivity&&(i=(0,n.default)(document).scrollLeft((0,n.default)(document).scrollLeft()+t.scrollSpeed))}!1!==i&&n.default.ui.ddmanager&&!t.dropBehaviour&&n.default.ui.ddmanager.prepareOffsets(this,e)}this.positionAbs=this._convertPositionTo("absolute")
this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px")
this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px")
for(var a=this.items.length-1;a>=0;a--){var o=this.items[a],r=o.item[0],s=this._intersectsWithPointer(o)
if(s&&!(r==this.currentItem[0]||this.placeholder[1==s?"next":"prev"]()[0]==r||n.default.contains(this.placeholder[0],r)||"semi-dynamic"==this.options.type&&n.default.contains(this.element[0],r))){this.direction=1==s?"down":"up"
if("pointer"!=this.options.tolerance&&!this._intersectsWithSides(o))break
this._rearrange(e,o)
this._trigger("change",e,this._uiHash())
break}}this._contactContainers(e)
n.default.ui.ddmanager&&n.default.ui.ddmanager.drag(this,e)
this._trigger("sort",e,this._uiHash())
this.lastPositionAbs=this.positionAbs
return!1},_mouseStop:function(e,t){if(e){n.default.ui.ddmanager&&!this.options.dropBehaviour&&n.default.ui.ddmanager.drop(this,e)
if(this.options.revert){var i=this,a=this.placeholder.offset()
this.reverting=!0;(0,n.default)(this.helper).animate({left:a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){i._clear(e)})}else this._clear(e,t)
return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null})
"original"==this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show()
for(var e=this.containers.length-1;e>=0;e--){this.containers[e]._trigger("deactivate",null,this._uiHash(this))
if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",null,this._uiHash(this))
this.containers[e].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0])
"original"!=this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove()
n.default.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null})
this.domPosition.prev?(0,n.default)(this.domPosition.prev).after(this.currentItem):(0,n.default)(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(e){var t=this._getItemsAsjQuery(e&&e.connected),i=[]
e=e||{};(0,n.default)(t).each(function(){var t=((0,n.default)(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/)
t&&i.push((e.key||t[1]+"[]")+"="+(e.key&&e.expression?t[1]:t[2]))})
!i.length&&e.key&&i.push(e.key+"=")
return i.join("&")},toArray:function(e){var t=this._getItemsAsjQuery(e&&e.connected),i=[]
e=e||{}
t.each(function(){i.push((0,n.default)(e.item||this).attr(e.attribute||"id")||"")})
return i},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,n=this.positionAbs.top,a=n+this.helperProportions.height,o=e.left,r=o+e.width,s=e.top,d=s+e.height,l=this.offset.click.top,c=this.offset.click.left,u=n+l>s&&n+l<d&&t+c>o&&t+c<r
return"pointer"==this.options.tolerance||this.options.forcePointerForContainers||"pointer"!=this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?u:o<t+this.helperProportions.width/2&&i-this.helperProportions.width/2<r&&s<n+this.helperProportions.height/2&&a-this.helperProportions.height/2<d},_intersectsWithPointer:function(e){var t="x"===this.options.axis||n.default.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||n.default.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),a=t&&i,o=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection()
return!!a&&(this.floating?r&&"right"==r||"down"==o?2:1:o&&("down"==o?2:1))},_intersectsWithSides:function(e){var t=n.default.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=n.default.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection()
return this.floating&&o?"right"==o&&i||"left"==o&&!i:a&&("down"==a&&t||"up"==a&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top
return 0!=e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left
return 0!=e&&(e>0?"right":"left")},refresh:function(e){this._refreshItems(e)
this.refreshPositions()
return this},_connectWith:function(){var e=this.options
return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(e){var t=[],i=[],a=this._connectWith()
if(a&&e)for(var o=a.length-1;o>=0;o--)for(var r=(0,n.default)(a[o]),s=r.length-1;s>=0;s--){var d=n.default.data(r[s],this.widgetName)
d&&d!=this&&!d.options.disabled&&i.push([n.default.isFunction(d.options.items)?d.options.items.call(d.element):(0,n.default)(d.options.items,d.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),d])}i.push([n.default.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):(0,n.default)(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this])
for(o=i.length-1;o>=0;o--)i[o][0].each(function(){t.push(this)})
return(0,n.default)(t)},_removeCurrentsFromItems:function(){for(var e=this.currentItem.find(":data("+this.widgetName+"-item)"),t=0;t<this.items.length;t++)for(var i=0;i<e.length;i++)e[i]==this.items[t].item[0]&&this.items.splice(t,1)},_refreshItems:function(e){this.items=[]
this.containers=[this]
var t=this.items,i=[[n.default.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):(0,n.default)(this.options.items,this.element),this]],a=this._connectWith()
if(a&&this.ready)for(var o=a.length-1;o>=0;o--)for(var r=(0,n.default)(a[o]),s=r.length-1;s>=0;s--){var d=n.default.data(r[s],this.widgetName)
if(d&&d!=this&&!d.options.disabled){i.push([n.default.isFunction(d.options.items)?d.options.items.call(d.element[0],e,{item:this.currentItem}):(0,n.default)(d.options.items,d.element),d])
this.containers.push(d)}}for(o=i.length-1;o>=0;o--)for(var l=i[o][1],c=i[o][0],u=(s=0,c.length);s<u;s++){var _=(0,n.default)(c[s])
_.data(this.widgetName+"-item",l)
t.push({item:_,instance:l,width:0,height:0,left:0,top:0})}},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset())
for(var t=this.items.length-1;t>=0;t--){var i=this.items[t]
if(i.instance==this.currentContainer||!this.currentContainer||i.item[0]==this.currentItem[0]){var a=this.options.toleranceElement?(0,n.default)(this.options.toleranceElement,i.item):i.item
if(!e){i.width=a.outerWidth()
i.height=a.outerHeight()}var o=a.offset()
i.left=o.left
i.top=o.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this)
else for(t=this.containers.length-1;t>=0;t--){o=this.containers[t].element.offset()
this.containers[t].containerCache.left=o.left
this.containers[t].containerCache.top=o.top
this.containers[t].containerCache.width=this.containers[t].element.outerWidth()
this.containers[t].containerCache.height=this.containers[t].element.outerHeight()}return this},_createPlaceholder:function(e){var t=(e=e||this).options
if(!t.placeholder||t.placeholder.constructor==String){var i=t.placeholder
t.placeholder={element:function(){var t=(0,n.default)(document.createElement(e.currentItem[0].nodeName)).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0]
i||(t.style.visibility="hidden")
return t},update:function(n,a){if(!i||t.forcePlaceholderSize){a.height()||a.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10))
a.width()||a.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))}}}}e.placeholder=(0,n.default)(t.placeholder.element.call(e.element,e.currentItem))
e.currentItem.after(e.placeholder)
t.placeholder.update(e,e.placeholder)},_contactContainers:function(e){for(var t=null,i=null,a=this.containers.length-1;a>=0;a--)if(!n.default.contains(this.currentItem[0],this.containers[a].element[0]))if(this._intersectsWith(this.containers[a].containerCache)){if(t&&n.default.contains(this.containers[a].element[0],t.element[0]))continue
t=this.containers[a]
i=a}else if(this.containers[a].containerCache.over){this.containers[a]._trigger("out",e,this._uiHash(this))
this.containers[a].containerCache.over=0}if(t)if(1===this.containers.length){this.containers[i]._trigger("over",e,this._uiHash(this))
this.containers[i].containerCache.over=1}else if(this.currentContainer!=this.containers[i]){for(var o=1e4,r=null,s=this.positionAbs[this.containers[i].floating?"left":"top"],d=this.items.length-1;d>=0;d--)if(n.default.contains(this.containers[i].element[0],this.items[d].item[0])){var l=this.containers[i].floating?this.items[d].item.offset().left:this.items[d].item.offset().top
if(Math.abs(l-s)<o){o=Math.abs(l-s)
r=this.items[d]
this.direction=l-s>0?"down":"up"}}if(!r&&!this.options.dropOnEmpty)return
this.currentContainer=this.containers[i]
r?this._rearrange(e,r,null,!0):this._rearrange(e,null,this.containers[i].element,!0)
this._trigger("change",e,this._uiHash())
this.containers[i]._trigger("change",e,this._uiHash(this))
this.options.placeholder.update(this.currentContainer,this.placeholder)
this.containers[i]._trigger("over",e,this._uiHash(this))
this.containers[i].containerCache.over=1}},_createHelper:function(e){var t=this.options,i=n.default.isFunction(t.helper)?(0,n.default)(t.helper.apply(this.element[0],[e,this.currentItem])):"clone"==t.helper?this.currentItem.clone():this.currentItem
i.parents("body").length||(0,n.default)("parent"!=t.appendTo?t.appendTo:this.currentItem[0].parentNode)[0].appendChild(i[0])
i[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")});(""==i[0].style.width||t.forceHelperSize)&&i.width(this.currentItem.width());(""==i[0].style.height||t.forceHelperSize)&&i.height(this.currentItem.height())
return i},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" "))
n.default.isArray(e)&&(e={left:+e[0],top:+e[1]||0})
"left"in e&&(this.offset.click.left=e.left+this.margins.left)
"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left)
"top"in e&&(this.offset.click.top=e.top+this.margins.top)
"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var e=this.offsetParent.offset()
if("absolute"==this.cssPosition&&this.scrollParent[0]!=document&&n.default.contains(this.scrollParent[0],this.offsetParent[0])){e.left+=this.scrollParent.scrollLeft()
e.top+=this.scrollParent.scrollTop()}(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&n.default.browser.msie)&&(e={top:0,left:0})
return{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var e=this.currentItem.position()
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options
"parent"==e.containment&&(e.containment=this.helper[0].parentNode)
"document"!=e.containment&&"window"!=e.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,(0,n.default)("document"==e.containment?document:window).width()-this.helperProportions.width-this.margins.left,((0,n.default)("document"==e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top])
if(!/^(document|window|parent)$/.test(e.containment)){var t=(0,n.default)(e.containment)[0],i=(0,n.default)(e.containment).offset(),a="hidden"!=(0,n.default)(t).css("overflow")
this.containment=[i.left+(parseInt((0,n.default)(t).css("borderLeftWidth"),10)||0)+(parseInt((0,n.default)(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt((0,n.default)(t).css("borderTopWidth"),10)||0)+(parseInt((0,n.default)(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(a?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt((0,n.default)(t).css("borderLeftWidth"),10)||0)-(parseInt((0,n.default)(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(a?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt((0,n.default)(t).css("borderTopWidth"),10)||0)-(parseInt((0,n.default)(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(e,t){t||(t=this.position)
var i="absolute"==e?1:-1,a=(this.options,"absolute"!=this.cssPosition||this.scrollParent[0]!=document&&n.default.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent),o=/(html|body)/i.test(a[0].tagName)
return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"==this.cssPosition?-this.scrollParent.scrollTop():o?0:a.scrollTop())*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():o?0:a.scrollLeft())*i}},_generatePosition:function(e){var t=this.options,i="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&n.default.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(i[0].tagName)
"relative"!=this.cssPosition||this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset())
var o=e.pageX,r=e.pageY
if(this.originalPosition){if(this.containment){e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left)
e.pageY-this.offset.click.top<this.containment[1]&&(r=this.containment[1]+this.offset.click.top)
e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left)
e.pageY-this.offset.click.top>this.containment[3]&&(r=this.containment[3]+this.offset.click.top)}if(t.grid){var s=this.originalPageY+Math.round((r-this.originalPageY)/t.grid[1])*t.grid[1]
r=this.containment&&(s-this.offset.click.top<this.containment[1]||s-this.offset.click.top>this.containment[3])?s-this.offset.click.top<this.containment[1]?s+t.grid[1]:s-t.grid[1]:s
var d=this.originalPageX+Math.round((o-this.originalPageX)/t.grid[0])*t.grid[0]
o=this.containment&&(d-this.offset.click.left<this.containment[0]||d-this.offset.click.left>this.containment[2])?d-this.offset.click.left<this.containment[0]?d+t.grid[0]:d-t.grid[0]:d}}return{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"==this.cssPosition?-this.scrollParent.scrollTop():a?0:i.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():a?0:i.scrollLeft())}},_rearrange:function(e,t,i,n){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"==this.direction?t.item[0]:t.item[0].nextSibling)
this.counter=this.counter?++this.counter:1
var a=this.counter
this._delay(function(){a==this.counter&&this.refreshPositions(!n)})},_clear:function(e,t){this.reverting=!1
var i=[]
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem)
this._noFinalSort=null
if(this.helper[0]==this.currentItem[0]){for(var a in this._storedCSS)"auto"!=this._storedCSS[a]&&"static"!=this._storedCSS[a]||(this._storedCSS[a]="")
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show()
this.fromOutside&&!t&&i.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))})
!this.fromOutside&&this.domPosition.prev==this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent==this.currentItem.parent()[0]||t||i.push(function(e){this._trigger("update",e,this._uiHash())})
if(!n.default.contains(this.element[0],this.currentItem[0])){t||i.push(function(e){this._trigger("remove",e,this._uiHash())})
for(a=this.containers.length-1;a>=0;a--)if(n.default.contains(this.containers[a].element[0],this.currentItem[0])&&!t){i.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.containers[a]))
i.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.containers[a]))}}for(a=this.containers.length-1;a>=0;a--){t||i.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[a]))
if(this.containers[a].containerCache.over){i.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[a]))
this.containers[a].containerCache.over=0}}this._storedCursor&&(0,n.default)("body").css("cursor",this._storedCursor)
this._storedOpacity&&this.helper.css("opacity",this._storedOpacity)
this._storedZIndex&&this.helper.css("zIndex","auto"==this._storedZIndex?"":this._storedZIndex)
this.dragging=!1
if(this.cancelHelperRemoval){if(!t){this._trigger("beforeStop",e,this._uiHash())
for(a=0;a<i.length;a++)i[a].call(this,e)
this._trigger("stop",e,this._uiHash())}return!1}t||this._trigger("beforeStop",e,this._uiHash())
this.placeholder[0].parentNode.removeChild(this.placeholder[0])
this.helper[0]!=this.currentItem[0]&&this.helper.remove()
this.helper=null
if(!t){for(a=0;a<i.length;a++)i[a].call(this,e)
this._trigger("stop",e,this._uiHash())}this.fromOutside=!1
return!0},_trigger:function(){!1===n.default.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(e){var t=e||this
return{helper:t.helper,placeholder:t.placeholder||(0,n.default)([]),position:t.position,originalPosition:t.originalPosition,offset:t.positionAbs,item:t.currentItem,sender:e?e.element:null}}})},cyMNwMhBvy:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("+JpRIS14Qm")),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.pathname,t={hide:{default:a.default.t("Hide Navigation Menu"),account:a.default.t("Hide Account Navigation Menu"),admin:a.default.t("Hide Admin Navigation Menu"),courses:a.default.t("Hide Courses Navigation Menu"),groups:a.default.t("Hide Groups Navigation Menu")},show:{default:a.default.t("Show Navigation Menu"),account:a.default.t("Show Account Navigation Menu"),admin:a.default.t("Show Admin Navigation Menu"),courses:a.default.t("Show Courses Navigation Menu"),groups:a.default.t("Show Groups Navigation Menu")}},i=document.body.classList.contains("course-menu-expanded")?"hide":"show",n=t[i].default
e.match(/^\/profile/)?n=t[i].account:e.match(/^\/accounts/)?n=t[i].admin:e.match(/^\/courses/)?n=t[i].courses:e.match(/^\/groups/)&&(n=t[i].groups)
var o=document.getElementById("courseMenuToggle")
o.setAttribute("aria-label",n)
o.setAttribute("title",n)}
t.default=o
e.exports=t.default},evahSH1MgD:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("iBw8ZGM6v8")),o={call:function(e){if("exists?"===e)return!0
for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n]
return this[e].apply(this,i)},focus:function(){if(void 0!==tinymce){var e=tinymce.get(this._textareaEl.id)
e&&e.focus(!0)}}},r={show:function(){$("#editor_tabs").show()},hide:function(){$("#editor_tabs").hide()}},s={wrapEditor:function(e){var t=a.default.extend({},o,e)
return a.default.extend(e,t)},wrapSidebar:function(e){var t=a.default.extend({},r,e)
return a.default.extend(e,t)}}
t.default=s
e.exports=t.default},"f+YlSntt6E":function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=i("36QOWIB4+W"),a=i.n(n),o=i("mOY9BNujNR")
i.n(o).a.extend(!0,a.a,{translations:{ar:{locked_image_24f37a16:"\u0635\u0648\u0631\u0629 \u0645\u0624\u0645\u0651\u0646\u0629"},cy:{locked_image_24f37a16:"Delwedd wedi\u2019i chloi"},da:{locked_image_24f37a16:"L\xe5st billede"},"da-x-k12":{locked_image_24f37a16:"L\xe5st billede"},de:{locked_image_24f37a16:"Gesperrtes Bild"},"en-AU":{locked_image_24f37a16:"Locked image"},"en-CA":{locked_image_24f37a16:"Locked image"},"en-GB":{locked_image_24f37a16:"Locked image"},"en-GB-x-lbs":{locked_image_24f37a16:"Locked image"},"en-GB-x-ukhe":{locked_image_24f37a16:"Locked image"},es:{locked_image_24f37a16:"Imagen bloqueada"},fr:{locked_image_24f37a16:"Image verrouill\xe9e"},"fr-CA":{locked_image_24f37a16:"Image verrouill\xe9e"},ht:{locked_image_24f37a16:"Imaj Bloke"},is:{locked_image_24f37a16:"L\xe6st mynd"},it:{locked_image_24f37a16:"Immagine bloccata"},ja:{locked_image_24f37a16:"\u30ed\u30c3\u30af\u3055\u308c\u305f\u753b\u50cf"},mi:{locked_image_24f37a16:"\u0100hua kua rakaina"},nb:{locked_image_24f37a16:"L\xe5st bilde"},"nb-x-k12":{locked_image_24f37a16:"L\xe5st bilde"},nl:{locked_image_24f37a16:"Vergrendelde afbeelding"},pl:{locked_image_24f37a16:"Zablokowany obraz"},pt:{locked_image_24f37a16:"Imagem bloqueada"},"pt-BR":{locked_image_24f37a16:"Imagem bloqueada"},ru:{locked_image_24f37a16:"\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"},sl:{locked_image_24f37a16:"Zaklenjena slika"},sv:{locked_image_24f37a16:"L\xe5st bild"},"sv-x-k12":{locked_image_24f37a16:"L\xe5st bild"},"zh-Hans":{locked_image_24f37a16:"\u9501\u5b9a\u56fe\u7247"},"zh-Hant":{locked_image_24f37a16:"\u9396\u5b9a\u5716\u50cf"}}})},fMZxOSn6U9:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("mOY9BNujNR")),o=n(i("/W/ggH9WyQ"))
function r(e){o.default.loadSidebarOnTarget((0,a.default)("#editor_tabs").get(0),e)}var s={instance:void 0,pendingShow:!1,initializing:!1,subscriptions:{},init:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.instance&&!this.initializing){this.initializing=!0
r(function(t){e.initializing=!1
e.instance=t
e.pendingShow&&e.show()})}this.subscriptions=t},show:function(){if(this.instance){this.instance.show()
this.subscriptions.show&&this.subscriptions.show()}else this.pendingShow=!0},hide:function(){if(this.instance){this.instance.hide()
this.subscriptions.hide&&this.subscriptions.hide()}else this.pendingShow=!1},reset:function(){this.instance=void 0
this.initializing=!1
this.subscriptions={}}}
t.default=s
e.exports=t.default},hpV4JWU0K6:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("mOY9BNujNR")),o=n(i("eJBzaBDd6c")),r=n(i("mBXxSvYXqz")),s=i("TVAqaFMvRJ")
i("kzdUuF07HD")
i("pmU8As9kkw")
i("3pTo86YxQs")
var d=n(i("Z6MXnY8QXm")),l=["instructure_scribd_file"],c=["instructure_scribd_file"],u=new WeakMap
function _(e){var t=e.closest("img").attr("src")
return"<img src='"+(0,o.default)(t)+"'/>"}function h(e){e.nodeChanged()
return new r.default(e)}function f(e,t){var i=e.replace(/(auto_open|inline_disabled)/g,"")
t.find(".auto_show_inline_content").attr("checked")&&(i+=" auto_open")
t.find(".disable_inline_content").attr("checked")&&(i+=" inline_disabled")
return i}function m(e,t,i,n){var o=e.find("#instructure_link_prompt_form")
o.off("submit")
o.on("submit",function(o){o.preventDefault()
o.stopPropagation()
e.data("editor")
var r=(0,a.default)(this).find(".prompt").val(),s=e.find(".inst-link-preview-alt input").val(),d=f(i.call(),e),l={"preview-alt":s}
e.dialog("close")
t.createLink(r,d,l)
n.call()})}function g(e,t){g.counter=g.counter||0
1==t&&0!=g.counter?g.counter=(g.counter+1)%5:(0,a.default)(e.getBody()).find("a").each(function(){var e=new d.default,t=(0,a.default)(this)
if(t.attr("href")&&!t.hasClass("inline_disabled")&&t.attr("href").match(INST.youTubeRegEx)){var i=+t.attr("data-ytt-failcnt")||0
t.addClass("youtube_link_to_box")
t.text()===t.attr("href")&&i<1&&e.titleYouTubeText(t)}})}var p={buttonToImg:_,prepEditorForDialog:h,buildLinkClasses:f,bindLinkSubmit:m,renderDialog:function(e){var t=h(e),i=t.getEditor(),n="";(o=(0,a.default)("#instructure_link_prompt")).removeClass("for_inline_content").find(".disable_enhancement").hide().end().find(".auto_show").hide().end().find(".insert_button").text("Insert Link").end().find(".disable_inline_content").attr("checked",!1).end().find(".auto_show_inline_content").attr("checked",!1)
if(0==o.length){var o=(0,a.default)(document.createElement("div"))
a.default.getUserServices("BookmarkService",function(e){var t,i,r=o.data("editor"),d=(0,a.default)("<div style='text-align: left; margin-left: 20px;'/>")
for(var l in e)if(t=e[l].user_service){(i=(0,a.default)("<a href='#' class='bookmark_service no-hover'/>")).addClass(t.service)
i.data("service",t)
i.attr("title","Find links using "+t.service)
var c=(0,a.default)("<img/>")
c.attr("src","/images/"+t.service+"_small_icon.png")
i.append(c)
i.click(function(e){e.preventDefault();(0,a.default)("#instructure_link_prompt").dialog("close")
a.default.findLinkForService((0,a.default)(this).data("service").service,function(e){(0,a.default)("#instructure_link_prompt").dialog("close");(0,s.send)(r,"create_link",{title:e.title,url:e.url,classes:n})})})
d.append(i)
d.append("&nbsp;&nbsp;")}o.find("#instructure_link_prompt_form").after(d)})
o.append("<p><em>This will make the selected text a link, or insert a new link if nothing is selected.</em></p> <label for='instructure_link_prompt_form_input'>Paste or type a url or wiki page in the box below:</label><form id='instructure_link_prompt_form' class='form-inline'><input type='text' id='instructure_link_prompt_form_input' class='prompt' class='btn' value='http://'/> <button type='submit' class='insert_button btn'>Insert Link</button></form>").append("<div class='actions'></div><div class='clear'></div>").append('<div class="inst-link-preview-alt" style="display: none;"><label>Alt text for inline preview: <input type="text" style="display: block;" /></label></div>').append("<div class='disable_enhancement' style='display: none;'><input type='checkbox' class='disable_inline_content' id='disable_inline_content'/><label for='disable_inline_content'> Disable inline previews for this link</label></div>").append("<div class='auto_show' style='display: none;'><input type='checkbox' class='auto_show_inline_content' id='auto_show_inline_content'/><label for='auto_show_inline_content'> Auto-open the inline preview for this link</label></div>")
o.find(".disable_inline_content").change(function(){(0,a.default)(this).attr("checked")&&o.find(".auto_show_inline_content").attr("checked",!1)
o.find(".auto_show").showIf(!(0,a.default)(this).attr("checked")&&o.hasClass("for_inline_content_can_auto_show"))})
o.find(".actions").delegate(".embed_image_link","click",function(e){var t=o.data("editor"),i=(0,a.default)(e.target)
e.preventDefault();(0,s.send)(t,"insert_code",_(i))
o.dialog("close")})
o.find(".actions").delegate(".embed_youtube_link","click",function(e){e.preventDefault()
o.find("#instructure_link_prompt_form").triggerHandler("submit")})
o.find("#instructure_link_prompt_form .prompt").bind("change keyup",function(){var e=o.find(".inst-link-preview-alt")
e.hide();(0,a.default)("#instructure_link_prompt .actions").empty()
var t=(0,a.default)(this).val(),i=o.data("original_data")
if(i&&t==i.url){o.toggleClass("for_inline_content",i.for_inline_content).toggleClass("for_inline_content_can_auto_show",i.for_inline_content_can_auto_show).find(".disable_enhancement").showIf(i.for_inline_content).end().find(".auto_show").showIf(i.for_inline_content_can_auto_show)
n=i.prior_classes}else{o.removeClass("for_inline_content").removeClass("for_inline_content_can_auto_show")
var r=new RegExp("("+l.join("|")+")","g")
n=n.replace(r,"")}var s=!o.hasClass("for_inline_content"),d=!o.hasClass("for_inline_content_can_auto_show")
if(t.match(/\.(gif|png|jpg|jpeg)$/)){(u=(0,a.default)(document.createElement("div"))).css("textAlign","center");(_=(0,a.default)(document.createElement("img"))).attr("src",t)
_.addClass("embed_image_link")
_.css("cursor","pointer")
var c=new Image
c.src=t
setTimeout(function e(){c.complete?(c.height<100||c.height>100&&c.height<200)&&_.height(c.height):setTimeout(e,500)},500)
_.height(100)
_.attr("title","Click to Embed the Image")
u.append(_);(0,a.default)("#instructure_link_prompt .actions").append(u)}else if(t.match(INST.youTubeRegEx)){e.show()
var u,_,h=a.default.youTubeID(t);(u=(0,a.default)(document.createElement("div"))).css("textAlign","center")
!o.find(".disable_inline_content").attr("checked")&&o.hasClass("for_inline_content_can_auto_show")&&o.find(".auto_show").show()
s=!1
o.find(".disable_enhancement").show();(_=(0,a.default)(document.createElement("img"))).attr("src","http://img.youtube.com/vi/"+h+"/2.jpg")
_.css({paddingLeft:100,background:"url(/images/youtube_logo.png) no-repeat left center",height:90,display:"inline-block"})
_.attr("alt",t)
_.addClass("embed_youtube_link")
_.css("cursor","pointer")
_.attr("title","Click to Embed YouTube Video")
u.append(_);(0,a.default)("#instructure_link_prompt .actions").append(u)}if(s){o.find(".disable_enhancement").hide()
o.find(".disable_inline_content").attr("checked",!1)}if(d){o.find(".auto_show").hide()
o.find(".auto_show_inline_content").attr("checked",!1)}})
o.attr("id","instructure_link_prompt");(0,a.default)("body").append(o)}m(o,t,function(){return n},function(){g(e,!0)})
o.data("editor",i)
o.data("original_data",null)
for(var r=e.selection.getNode();"A"!=r.nodeName&&"BODY"!=r.nodeName&&r.parentNode;)r=r.parentNode
var d="A"==r.nodeName?(0,a.default)(r):null
if(d){o.find(".prompt").val(d.attr("href")).change()
o.find(".inst-link-preview-alt input").val(d.data("preview-alt"))
n=(d.attr("class")||"").replace(/youtube_link_to_box/,"")
var u=new RegExp("("+l.join("|")+")");(d.attr("class")||"").match(u)&&o.addClass("for_inline_content").find(".disable_enhancement").show()
u=new RegExp("("+c.join("|")+")");(d.attr("class")||"").match(u)&&o.addClass("for_inline_content_can_auto_show").find(".auto_show").show()
o.data("original_data",{url:d.attr("href"),for_inline_content:o.hasClass("for_inline_content"),for_inline_content_can_auto_show:o.hasClass("for_inline_content_can_auto_show"),prior_classes:n,preview_alt:d.data("preview-alt")})
o.find(".disable_inline_content").attr("checked",d.hasClass("inline_disabled")).triggerHandler("change")
o.find(".auto_show_inline_content").attr("checked",d.hasClass("auto_open")).triggerHandler("change")
o.find(".insert_button").text("Update Link")}else o.find(".prompt").val("").change()
o.dialog({width:425,height:"auto",title:"Link to Website URL",open:function(){(0,a.default)(this).find(".prompt").focus().select()}})},updateLinks:g,initEditor:function(e){if(!u.get(e)&&void 0!==e.on){e.on("PreProcess",function(e){(0,a.default)(e.node).find("a.youtube_link_to_box").removeClass("youtube_link_to_box");(0,a.default)(e.node).find("img.iframe_placeholder").each(function(){var e=(0,a.default)(this),t=(0,a.default)("<iframe/>"),i=e.attr("height")||e.css("height"),n=e.hasClass("fullWidth")?"100%":e.attr("width")||e.css("width")
e.attr("width",n)
e.css("width",n)
t.attr("src",e.attr("rel"))
t.attr("style",e.attr("_iframe_style"))
if(!t[0].style.height.length){t.attr("height",i)
t.css("height",i)}if(!t[0].style.width.length){t.attr("width",n)
t.css("width",n)}(0,a.default)(this).after(t);(0,a.default)(this).remove()})})
e.on("change",function(){g(e)})
e.on("SetContent",function(){g(e,"contentJustSet")})
u.set(e,!0)}}}
t.default=p
e.exports=t.default},l1QdNhNedg:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("uceVF1dIMW")),o=n(i("iBw8ZGM6v8")),r=n(i("eJBzaBDd6c")),s=n(i("mOY9BNujNR")),d=n(i("rtbs8pMf93")),l={normal:{width:140,height:100},small:{width:70,height:50}}
function c(e,t,i){if(!INST.kalturaSettings)return console.log("Kaltura has not been enabled for this account")
var n,o,c=(0,s.default)(e)
try{var u=document.createElement("a")
u.href=c.attr("href")
o=u}catch(e){}if(!o||!(0,d.default)(o.search).no_preview){var _,h=l[t]||l.normal,f=c.data("media_comment_id")||s.default.trim(c.find(".media_comment_id:first").text())||(n=c.attr("id"))&&n.match(/^media_comment_/)&&n.substring(14)||s.default.trim(c.parent().find(".media_comment_id:first").text()),m=c.data("author"),g=c.data("created_at")
_=m&&g?a.default.t("Play media comment by %{name} from %{createdAt}.",{name:m,createdAt:g}):a.default.t("Play media comment.")
if(f){var p="https://".concat(INST.kalturaSettings.resource_domain),v="".concat(p,"/p/").concat(INST.kalturaSettings.partner_id,"/thumbnail/entry_id/").concat(f,"/width/")+"".concat(h.width,"/height/").concat(h.height,"/bgcolor/000000/type/2/vid_sec/5"),b=(0,s.default)("<span\n        style='background-image: url(".concat((0,r.default)(v),");'\n        class='media_comment_thumbnail media_comment_thumbnail-").concat((0,r.default)(t),"'\n      >\n        <span class='media_comment_thumbnail_play_button'>\n          <span class='screenreader-only'>\n            ").concat((0,r.default)(_),"\n          </span>\n        </span>\n      </span>")),k=c.closest("p")
k.attr("title")||k.attr("title",(0,r.default)(_))
var y=c
if(i){y=c.clone().empty().removeClass("instructure_file_link")
var w=c.parent(".instructure_file_link_holder")
w.length?y.appendTo(w):c.after(y)}else c.empty()
y.data("download",y.attr("href")).prop("href","#").addClass("instructure_inline_media_comment").append(b).css({backgroundImage:"",padding:0})}}}var u=s.default.fn.mediaCommentThumbnail=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal",t=arguments.length>1?arguments[1]:void 0
return this.each(function(){o.default.defer(c,this,e,t)})}
t.default=u
e.exports=t.default},mBXxSvYXqz:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("mOY9BNujNR")),o=i("TVAqaFMvRJ"),r=function(e,t){this.id=e.id
this.selectedContent=e.selection.getContent()
this.selectionDetails={node:e.selection.getNode(),range:e.selection.getRng()}
this.$editorEl=t
this.getEditor=function(){return void 0!==this.$editorEl?this.$editorEl:(0,a.default)("#"+this.id)}
this.createLink=function(e,t,i){(0,o.send)(this.getEditor(),"create_link",{url:e,classes:t,selectedContent:this.selectedContent,dataAttributes:i,selectionDetails:this.selectionDetails})}}
t.default=r
e.exports=t.default},nXH6nMYdz2:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L"),a=n(i("mOY9BNujNR")),o=n(i("eJBzaBDd6c"))
i("kzdUuF07HD")
a.default.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each(function(){var t=(0,a.default)(this)
a.default.each(["name","id","class"],function(i,n){t.attr(n)&&t.attr(n,t.attr(n).replace(/-iterator-/,e.iterator))})})
e.id&&this.attr("id",e.id)
var t=!1
if(e.data)for(var i in e.data)if(!e.except||-1==a.default.inArray(i,e.except)){e.data[i]&&e.dataValues&&-1!=a.default.inArray(i,e.dataValues)&&this.data(i,e.data[i].toString())
var n=this.find("."+i),r=e.avoid||""
n.each(function(){var n=(0,a.default)(this)
if(n.length>0&&0===n.closest(r).length){void 0!==e.data[i]&&null!==e.data[i]||(e.data[i]="")
if(e.htmlValues&&-1!=a.default.inArray(i,e.htmlValues)){n.html(a.default.raw(e.data[i].toString()))
if(n.hasClass("user_content")){t=!0
n.removeClass("enhanced")
n.data("unenhanced_content_html",e.data[i].toString())}}else if("INPUT"==n[0].tagName.toUpperCase())n.val(e.data[i])
else try{var s=e.data[i].toString()
n.html((0,o.default)(s))}catch(e){}}})}e.hrefValues&&e.data&&this.find("a,span[rel]").each(function(){var t,i,n,o=(0,a.default)(this)
for(var r in e.hrefValues)if(e.hrefValues.hasOwnProperty(r)){var s=e.hrefValues[r]
if(t=o.attr("href")){var d=a.default.replaceTags(t,s,encodeURIComponent(e.data[s])),l=o.text()===o.html()?o.text():null
if(t!==d){o.attr("href",d)
l&&o.text(l)}}(i=o.attr("rel"))&&o.attr("rel",a.default.replaceTags(i,s,e.data[s]));(n=o.attr("name"))&&o.attr("name",a.default.replaceTags(n,s,e.data[s]))}})
t&&(0,a.default)(document).triggerHandler("user_content_change")}return this}
a.default.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
a.default.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,i={}
if(e.textValues){var n=this
e.textValues.forEach(function(e){var t=n.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=a.default.trim(t.text())
"&nbsp;"===t.html()&&(o="")
1===o.length&&160===o.charCodeAt(0)&&(o="")
i[e]=o})}if(e.dataValues)for(t in e.dataValues){var o;(o=this.data(e.dataValues[t]))&&(i[e.dataValues[t]]=o)}if(e.htmlValues)for(t in e.htmlValues){var r=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=null
o=r.hasClass("user_content")&&r.data("unenhanced_content_html")?r.data("unenhanced_content_html"):a.default.trim(r.html())
i[e.htmlValues[t]]=o}return i}
a.default.fn.getTemplateValue=function(e,t){var i=a.default.extend({},t,{textValues:[e]})
return this.getTemplateData(i)[e]}},"nwUwKBv/gu":function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")(i("mOY9BNujNR"))
i("O9QjtziI9Q")
i("1YHB9uvbU1")
i("Nf4R7G01V5")
var a=0,o=!1
n.default.widget("ui.popup",{version:"@VERSION",options:{position:{my:"left top",at:"left bottom"},managed:!1,expandOnFocus:!1,show:{effect:"slideDown",duration:0},hide:{effect:"fadeOut",duration:0}},_create:function(){this.options.trigger||(this.options.trigger=this.element.prev())
if(!this.element.attr("id")){this.element.attr("id","ui-popup-"+a++)
this.generatedId=!0}if(!this.element.attr("role")&&!this.options.managed){this.element.attr("role","dialog")
this.generatedRole=!0}this.options.trigger.attr("aria-haspopup","true").attr("aria-owns",this.element.attr("id"))
this.element.addClass("ui-popup")
this._beforeClose()
this.element.hide()
var e=function(e){var t=!1;(0,n.default)(e.target).is("input")&&(t=!0)
if(this.isOpen){o=!0
this.close()}else{this.open(e)
clearTimeout(this.closeTimer)
this._delay(function(){t||this.focusPopup()},1)}}
this._on(this.options.trigger,{keydown:function(e){switch(e.keyCode){case n.default.ui.keyCode.TAB:this.element.hide()
this.close(e)
break
case n.default.ui.keyCode.ESCAPE:this.isOpen&&this.close(e)
break
case n.default.ui.keyCode.SPACE:case n.default.ui.keyCode.DOWN:case n.default.ui.keyCode.UP:e.preventDefault()
clearTimeout(this.closeTimer)
this._delay(function(){this.open(e)
this.focusPopup(e)},1)}},mouseup:function(e){this.mouseClickTimer=window.setTimeout(function(){delete this.mouseClickTimer}.bind(this),0)},click:function(t){t.stopPropagation()
t.preventDefault()
this.mouseClickTimer||e.call(this,t)},mousedown:e})
this.options.expandOnFocus&&this._on(this.options.trigger,{focus:function(e){o||this._delay(function(){this.isOpen||this.open(e)},1)
this._delay(function(){o=!1},100)},blur:function(e){o=!1}})
this.options.managed||this._on({keydown:function(e){if(e.keyCode===n.default.ui.keyCode.TAB){var t=(0,n.default)(":tabbable",this.element),i=t.first(),a=t.last()
if(e.target!==a[0]||e.shiftKey){if(e.target===i[0]&&e.shiftKey){a.focus(1)
e.preventDefault()}}else{i.focus(1)
e.preventDefault()}}}})
this._on({focusout:function(e){this.closeTimer=this._delay(function(){this.close(e)},150)},focusin:function(e){clearTimeout(this.closeTimer)},mouseup:function(e){clearTimeout(this.closeTimer)}})
this._on({keyup:function(e){if(e.keyCode===n.default.ui.keyCode.ESCAPE&&this.element.is(":visible")){this.close(e)
this.focusTrigger()}}})
this._on(this.document,{click:function(e){this.isOpen&&!(0,n.default)(e.target).closest(this.element.add(this.options.trigger)).length&&this.close(e)}})},_destroy:function(){this.element.show().removeClass("ui-popup").removeAttr("aria-hidden").removeAttr("aria-expanded").unbind("keypress.ui-popup")
this.options.trigger.removeAttr("aria-haspopup").removeAttr("aria-owns")
this.generatedId&&this.element.removeAttr("id")
this.generatedRole&&this.element.removeAttr("role")},open:function(e){var t=n.default.extend({},{of:this.options.trigger},this.options.position)
this._show(this.element,this.options.show)
this.element.attr("aria-hidden","false").attr("aria-expanded","true").position(t)
this.options.trigger.attr("tabindex",-1)
this.isOpen=!0
this._trigger("open",e)},focusPopup:function(e){if(!this.options.managed){var t=this.element.find(":tabbable")
this.removeTabIndex=!1
if(!t.length){if(!this.element.is(":tabbable")){this.element.attr("tabindex","0")
this.removeTabIndex=!0}t=t.add(this.element[0])}t.first().focus(1)}this._trigger("focusPopup",e)},focusTrigger:function(e){o=!0
this.options.trigger.focus()
this._trigger("focusTrigger",e)},close:function(e){this._beforeClose()
this._hide(this.element,this.options.hide)
this.options.trigger.attr("tabindex",0)
this.removeTabIndex&&this.element.removeAttr("tabindex")
this.isOpen=!1
this._trigger("close",e)},_beforeClose:function(){this.element.attr("aria-hidden","true").attr("aria-expanded","false")}})},qagVT2atnL:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("iBw8ZGM6v8")),o=n(i("EHPQ5oFRp/")),r=n(i("QNUVZwyfqV")),s=n(i("whMk0QU2To"))
var d=function(e,t,i,n,d){var l=new o.default(d,s.default,e,t)
return a.default.extend({},l.defaultConfig(),(0,r.default)(d,void 0,n),i.tinyOptions||{})}
t.default=d
e.exports=t.default},rtbs8pMf93:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=function e(t,i){if(!t||"boolean"==typeof t){var n=window.location.search
return n?e.apply(void 0,[n].concat(Array.prototype.slice.call(arguments))):{}}var s={}
t.replace(/\+/g," ").split("&").forEach(function(e){var t=e.split("="),n=(0,a.default)(t,2),o=n[0],d=n[1]
o=decodeURIComponent(o)
d=decodeURIComponent(d)
i&&(d=d&&!isNaN(d)?+d:"undefined"===d?void 0:void 0!==r[d]?r[d]:d)
s[o]=d})
return(0,o.default)(s)}
var a=n(i("NM/j3HZEt8")),o=n(i("sRkgs379hW")),r={true:!0,false:!1,null:null}
e.exports=t.default},sRkgs379hW:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=function(e){return(0,a.default)(e).reduce(function(e,t,i){var n=i.split("]["),o=n.length-1
if(/\[/.test(n[0])&&/\]$/.test(n[o])){n[o]=n[o].replace(/\]$/,"")
n=n.shift().split("[").concat(n)
o=n.length-1}else o=0
if(o)for(var r=0,s=e;r<=o;){i=""===n[r]?s.length:n[r]
s=s[i]=r<o?s[i]||(n[r+1]&&isNaN(n[r+1])?{}:[]):t
r++}else a.default.isArray(e[i])?e[i].push(t):null!=e[i]?e[i]=[e[i],t]:e[i]=t
return e},{})}
var a=n(i("iBw8ZGM6v8"))
e.exports=t.default},xolCioscxi:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")(i("mOY9BNujNR"))
n.default.fn.dropdownList=function(e){if(this.length){var t=(0,n.default)("#instructure_dropdown_list")
if("hide"==e||"remove"==e||t.data("current_dropdown_initiator")==this[0]){t.remove().data("current_dropdown_initiator",null)
return}e=n.default.extend({},n.default.fn.dropdownList.defaults,e)
var i=t.children("div.list")
if(!i.length){t=(0,n.default)("<div id='instructure_dropdown_list'><div class='list ui-widget-content'></div></div>").appendTo("body");(0,n.default)(document).mousedown(function(e){t.data("current_dropdown_initiator")&&!(0,n.default)(e.target).closest("#instructure_dropdown_list").length&&t.hide().data("current_dropdown_initiator",null)}).mouseup(function(e){if(t.data("current_dropdown_initiator")&&!(0,n.default)(e.target).closest("#instructure_dropdown_list").length){t.hide()
setTimeout(function(){t.data("current_dropdown_initiator",null)},100)}}).add(this).add(t).keydown(function(e){if(t.data("current_dropdown_initiator")){var i=t.find(".ui-state-hover,.ui-state-active")
if(38==e.keyCode){i.length&&i.prev().length?i.removeClass("ui-state-hover ui-state-active").addClass("minimal").prev().addClass("ui-state-hover").removeClass("minimal").find("span").focus():$item.focus()
return!1}if(40==e.keyCode){i.length?i.next().length&&i.removeClass("ui-state-hover ui-state-active").addClass("minimal").next().addClass("ui-state-hover").removeClass("minimal").find("span").focus():t.find(".option:first").addClass("ui-state-hover").removeClass("minimal").find("span").focus()
return!1}if(13==e.keyCode&&i.length){i.click()
return!1}t.hide().data("current_dropdown_initiator",null)}})
t.find(".option").removeClass("ui-state-hover ui-state-active").addClass("minimal")
t.click(function(e){t.hide().data("current_dropdown_initiator",null)})
i=t.children("div.list")}t.data("current_dropdown_initiator",this[0])
e.width&&t.width(e.width)
e.height&&t.find(".list").css("maxHeight",e.height)
i.empty()
n.default.each(e.options,function(e,t){var a=(0,n.default)("<div class='option minimal' style='cursor: pointer; padding: 2px 5px; overflow: hidden; white-space: nowrap;'>  <span tabindex='-1'>"+e+"</span></div>").appendTo(i)
function o(){a.parent().find("div.option").removeClass("ui-state-hover ui-state-active").addClass("minimal")}n.default.isFunction(t)?a.addClass("ui-state-default").bind({mouseenter:function(){o()
a.addClass("ui-state-hover").removeClass("minimal")},mouseleave:o,mousedown:function(e){e.preventDefault()
o()
a.addClass("ui-state-active").removeClass("minimal")},mouseup:o,click:t}):a.addClass("ui-state-disabled").bind({mousedown:function(e){e.preventDefault()}})})
var a=this.offset(),o=this.outerHeight()
this.outerWidth()
t.css({whiteSpace:"nowrap",position:"absolute",top:a.top+o,left:a.left+5,right:""}).hide().show()
t.offset().left+t.width()>(0,n.default)(window).width()&&t.css({left:"",right:0})}return this}
n.default.fn.dropdownList.defaults={height:250,width:"auto"}},"zNOhtK+31x":function(e,t,i){"use strict"
var n=i("R6lUQuLu/L")
Object.defineProperty(t,"__esModule",{value:!0})
t.default=void 0
var a=n(i("Z60aNDY003")),o=n(i("C9uTDLcwK6")),r=n(i("mOY9BNujNR"))
i("V0DFOiAOkw")
i("kWQsjZQaF4")
i("nwUwKBv/gu")
var s=function(){function e(t,i){var n=this;(0,a.default)(this,e);["onOpen","select","onClose","close","keepButtonActive"].forEach(function(e){return n[e]=n[e].bind(n)})
this.$trigger=(0,r.default)(t).data("kyleMenu",this)
this.$ariaMenuWrapper=this.$trigger.parent()
this.opts=r.default.extend(!0,{},e.defaults,i)
if(!this.opts.noButton){this.opts.buttonOpts.addDropArrow&&this.$trigger.append('<i class="icon-mini-arrow-down"></i>')
this.$trigger.button(this.opts.buttonOpts)
this.$trigger.bind("mouseleave.button",this.keepButtonActive)}this.$menu=this.$trigger.next().menu(this.opts.menuOpts).popup(this.opts.popupOpts).addClass("ui-kyle-menu use-css-transitions-for-show-hide")
if(this.opts.appendMenuTo){this.$menu.on({keydown:function(e){if(e.keyCode===r.default.ui.keyCode.TAB){var t
t=e.shiftKey?{which:r.default.ui.keyCode.TAB,shiftKey:!0}:{which:r.default.ui.keyCode.TAB}
var i=r.default.Event("keydown",t)
n.$trigger.focus().trigger(i)}}})
var o=this.$menu.data("popup"),s=o.open,d=this
o.open=function(){d.$menu.appendTo(d.opts.appendMenuTo)
return s.apply(this,arguments)}
this.$placeholder=(0,r.default)('<span style="display:none;">').insertAfter(this.$menu)
this.$menu.bind("click",function(){var e
return(e=n.$placeholder).trigger.apply(e,arguments)})}this.opts.notifyMenuActiveOnParent&&(this.$notifyParent=this.$trigger.closest(this.opts.notifyMenuActiveOnParent))
this.$menu.on({menuselect:this.select,popupopen:this.onOpen,popupclose:this.onClose})}(0,o.default)(e,[{key:"onOpen",value:function(e){this.$ariaMenuWrapper.attr("role","application")
this.adjustCarat(e)
this.$menu.addClass("ui-state-open")
this.opts.notifyMenuActiveOnParent&&this.$notifyParent.addClass("menu_active")}},{key:"open",value:function(){this.$menu.popup("open")}},{key:"select",value:function(e,t){var i
if("click"!==(e.originalEvent&&e.originalEvent.type)&&(i=(0,r.default)(t.item).find("a"))){e.preventDefault()
var n=i[0],a=document.createEvent("MouseEvent")
a.initEvent("click",!0,!0)
n.dispatchEvent(a)}this.close()}},{key:"onClose",value:function(){this.opts.appendMenuTo&&this.$menu.insertBefore(this.$placeholder)
this.$trigger.removeClass("ui-state-active")
this.$ariaMenuWrapper.removeAttr("role")
this.$menu.removeClass("ui-state-open")
this.opts.notifyMenuActiveOnParent&&this.$notifyParent.removeClass("menu_active")
this.opts.returnFocusTo&&!this.opts.returnFocusTo.prop("disabled")&&this.opts.returnFocusTo.focus()}},{key:"close",value:function(){this.$menu.hasClass("ui-state-open")&&this.$menu.popup("close").removeClass("ui-state-open")}},{key:"keepButtonActive",value:function(){this.$menu.is(".ui-state-open")&&this.$trigger.is(".btn, .ui-button")&&this.$trigger.addClass("ui-state-active")}},{key:"adjustCarat",value:function(e){this.$carat&&this.$carat.remove()
this.$trigger.is(".btn, .ui-button")&&this.$trigger.addClass("ui-state-active")
var t=this.$trigger.outerWidth(),i=this.$trigger.offset().left,n=this.$menu[0].getBoundingClientRect(),a=this.$trigger[0].getBoundingClientRect(),o=n.top+n.height<a.top,s=n.height-2,d=e.pageX||i+t/2,l=i-this.$menu.offset().left,c=d-this.$trigger.offset().left,u=Math.min(Math.max(6,c),t-6)+l
this.$carat=(0,r.default)('<span class="ui-menu-carat"><span /></span>').css("left",u)
o&&this.$carat.css("top",s).css("transform","rotateX(180deg)")
this.$carat.prependTo(this.$menu)}}])
return e}()
t.default=s
s.defaults={popupOpts:{position:{my:"center top",at:"center bottom",offset:"0 10px",within:"#main",collision:"flipfit"}},buttonOpts:{addDropArrow:!0}}
r.default.fn.kyleMenu=function(e){return this.each(function(){(0,r.default)(this).data().kyleMenu||new s(this,e)})}
e.exports=t.default},zYWt9o0wMR:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L"),a=(n(i("whMk0QU2To")),n(i("mOY9BNujNR")))
i("pmU8As9kkw")
function o(e){var t=(e=(e||"").split(":")[0]).split("."),i=t.length
return(i>1?[t[i-2],t[i-1]]:t).join("")}var r=o(window.location.hostname)
a.default.expr[":"].external=function(e){var t=(0,a.default)(e).attr("href")
return!(!t||!t.length||t.match(/^(mailto\:|javascript\:)/)||!e.hostname||o(e.hostname)==r)}
window.equella={ready:function(e){(0,a.default)(document).triggerHandler("equella_ready",e)},cancel:function(){(0,a.default)(document).triggerHandler("equella_cancel")}};(0,a.default)(document).bind("equella_ready",function(e,t){(0,a.default)("#equella_dialog").triggerHandler("equella_ready",t)}).bind("equella_cancel",function(){(0,a.default)("#equella_dialog").dialog("close")})
window.external_tool_dialog={ready:function(e){var t=jQuery.Event("selection")
t.contentItems=e;(0,a.default)("#resource_selection_dialog:visible").triggerHandler(t);(0,a.default)("#homework_selection_dialog:visible").triggerHandler(t)},cancel:function(){(0,a.default)("#external_tool_button_dialog").dialog("close");(0,a.default)("#resource_selection_dialog").dialog("close");(0,a.default)("#homework_selection_dialog:visible").dialog("close")}}
window.jsonFlickrApi=function(e){(0,a.default)("#instructure_image_search").triggerHandler("search_results",e)}},zr2HOwddfD:function(e,t,i){"use strict"
var n=i("R6lUQuLu/L"),a=n(i("mOY9BNujNR")),o=n(i("eJBzaBDd6c"))
function r(e){e.data("handled",!0)
var t=e.data("url")||e.attr("href"),i=e.data("method"),n=e.attr("target"),r=(0,a.default)('<form method="post" action="'.concat((0,o.default)(t),'"></form>')),s='\n    <input name="_method" value="'.concat((0,o.default)(i),'" type="hidden" />\n    <input name="authenticity_token" type="hidden" />\n  ')
n&&r.attr("target",n)
r.hide().append(s).appendTo("body").submit()}(0,a.default)(document).delegate("a[data-confirm], a[data-method], a[data-remove]","click",function(e){var t,i,n=(0,a.default)(this)
if(n.data("handled")||!(t=n,i=t.data("confirm"),!i||confirm(i)))return!1
if(n.data("remove")){s(n)
return!1}if(n.data("method")){r(n)
return!1}})
function s(e){var t=e.data("remove"),i=e,n=e.data("url"),o=e.closest(":ui-popup").popup("option","trigger").data("KyleMenu")
o&&o.opts.appendMenuTo&&(i=o.$placeholder)
var r=i.closest(t)
r.bind({beforeremove:function(){r.hide()},remove:function(){r.remove()}})
r.trigger("beforeremove")
var s=function(){return r.trigger("remove")}
n?a.default.ajaxJSON(n,"DELETE",{},s,function(){return r.show()}):s()}}})

//# sourceMappingURL=12.chunk-e63460ab14.js.12-e63460ab14.sourcemap