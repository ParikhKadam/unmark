/*! Unmark - http://unmark.it - 2014-11-25 - http://plainmade.com */ 
if(void 0===unmark)var unmark={};(function(a){unmark.ajax=function(e,n,t,r,i,o){var s=unmark.urlEncode(unmark.vars.csrf_token),i=void 0!==i?i:"json",o=void 0!==o?o:!0,u="csrf_token="+s+"&content_type="+i;t=unmark.empty(t)?u:t+"&"+u,a.ajax({dataType:i,cache:!1,url:e,type:n.toUpperCase(),data:t,async:o,success:function(e){a.isFunction(r)&&r(e)},error:function(e,n,t){var i={error:t,status:n,request:e};a.isFunction(r)&&r(i)}})},unmark.readQuery=function(a){for(var e=window.location.search.substring(1),n=e.split("&"),t=0;n.length>t;t++){var r=n[t].split("=");if(r[0]==a)return r[1]}return!1},unmark.swapClass=function(e,n,t){var r=e;if(-1===n.indexOf("*"))return r.removeClass(n),t?r.addClass(t):r;var i=RegExp("\\s"+n.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return r.each(function(e,n){for(var t=" "+n.className+" ";i.test(t);)t=t.replace(i," ");n.className=a.trim(t)}),t?r.addClass(t):r},unmark.replaceSpecial=function(a){if(void 0!==a&&null!==a){var e=null;for(var n in unmark.special_chars)e=RegExp(n,"gi"),a=a.replace(e,unmark.special_chars[n])}return a},unmark.urlEncode=function(a){return a=unmark.replaceSpecial(a),encodeURIComponent(a)},unmark.empty=function(a){var e=void 0!==a&&null!==a?a.length:0;return a===!1||""===a||null===a||0===a||void 0===a||1>e},unmark.createCookie=function(a,e,n){if(n){var t=new Date;t.setTime(t.getTime()+1e3*60*60*24*n);var r="; expires="+t.toGMTString()}else var r="";document.cookie=a+"="+e+r+"; path=/"},unmark.readCookie=function(a){for(var e=a+"=",n=document.cookie.split(";"),t=0;n.length>t;t++){for(var r=n[t];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return null},unmark.prettyLink=function(a){return a=a.replace(/https?:\/\/(www.)?/,""),"/"===a.substr(-1)&&(a=a.substr(0,a.length-1)),a},unmark.read_query_str=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=RegExp("[\\?&]"+a+"=([^&#]*)"),n=e.exec(location.search);return null==n?"":decodeURIComponent(n[1].replace(/\+/g," "))},unmark.extendFunction=function(a,e){this[a]=function(a,e,n){return function(){var t=e.apply(a,arguments),r=n.apply(a,arguments);return null!==r?r:t}}(this,this[a],e)}})(window.jQuery),function(a){unmark.updateDom=function(){var e=a("div.marks").data("label-class"),n=a("body");n.removeClass().addClass(e),unmark.page_setup(a("body").height())},unmark.sidebar_collapse=function(){Modernizr.mq("only screen and (max-width: 480px)")&&(a(".mark-actions").hide(),a(".sidebar-content").animate({right:"-85%"},600,function(){a(this).hide()})),a(".mark").removeClass("view-inactive").removeClass("view-active"),unmark.sidebar_expand(!0),unmark.sidebar_mark_info.fadeOut(400,function(){unmark.sidebar_default.fadeIn(400)})},unmark.sidebar_expand=function(a){var e=unmark.sidebar_content.find('a[data-action="sidebar_expand"] i');return a===!0?unmark.sidebar_content.animate({width:"42.17749%"},800,function(){e.removeClass("icon-heading_collapse").addClass("icon-heading_expand"),unmark.sidebar_content.removeClass("wide")}):(e.hasClass("icon-heading_collapse")?unmark.sidebar_content.animate({width:"42.17749%"},800,function(){e.removeClass("icon-heading_collapse").addClass("icon-heading_expand"),unmark.sidebar_content.removeClass("wide")}):unmark.sidebar_content.animate({width:"75%"},800,function(){e.removeClass("icon-heading_expand").addClass("icon-heading_collapse"),unmark.sidebar_content.addClass("wide")}),void 0)},unmark.hideNavigation=function(){Modernizr.mq("only screen and (min-width: 480px)")&&(a(".mark-actions").hide(),a(".branding").fadeOut()),unmark.nav_panel.stop().animate({left:-285},400),unmark.main_panel.stop().animate({left:65},200,function(){a(".nav-panel").hide(),a(".menu-item").removeClass("active-menu"),a(".navigation-pane-links").show(),a(".menu-activator i").removeClass("icon-menu_close").addClass("icon-menu_open")})},unmark.interact_nav=function(e,n){var t=n.attr("href"),r=t.replace(/^#/,""),i=parseInt(n.attr("rel")),o=i+65,s=n.parent(),u=parseInt(unmark.nav_panel.css("left"));return unmark.sidebar_collapse(),t.match(/\//)?(unmark.hideNavigation(),!0):(e.preventDefault(),a(".mark-actions").hide(),s.hasClass("active-menu")?(a(".menu-item").removeClass("active-menu"),unmark.hideNavigation()):(a(".menu-item").removeClass("active-menu"),a(".navigation-content").find("[data-menu='"+r+"']").addClass("active-menu"),"#panel-menu"===t&&u>0?unmark.hideNavigation():(a(".menu-activator i").removeClass("icon-menu_open").addClass("icon-menu_close"),unmark.nav_panel.animate({left:65},{duration:200,queue:!1}),unmark.main_panel.animate({left:o},{duration:200,queue:!1}),unmark.nav_panel.animate({width:i},200),unmark.nav_panel.find(".nav-panel").animate({width:i},200),a(".branding").fadeIn(),"#panel-menu"===t?(a(".navigation-pane-links").show(),a(".nav-panel").hide()):(a(".navigation-pane-links").hide(),a(".nav-panel").not(t).hide(),a(t).show()),void 0)))},unmark.scrollPaginate=function(a){var e,n,t,r,i,o="",r=window.unmark_current_page+1,s=window.unmark_total_pages;a.scrollTop()+a.innerHeight()>=a[0].scrollHeight&&s>=r&&(t=Hogan.compile(unmark.template.marks),e=window.location.pathname,unmark.ajax(e+"/"+r,"post","",function(a){if(a.marks){for(i=Object.keys(a.marks).length,n=1;i>n;n++)a.marks[n].prettyurl=unmark.prettyLink(a.marks[n].url),o+=t.render(a.marks[n]);unmark.main_content.find(".marks_list").append(o),window.unmark_current_page=r}}))},unmark.updateCounts=function(){unmark.getData("stats",function(e){var n=e.stats.archived,t=(e.stats.saved,e.stats.marks);a(".na-today").text(n.today),a(".ns-year").text(t["ages ago"])})},unmark.getData=function(a,e){unmark.ajax("/marks/get/"+a,"post","",e)},unmark.close_window=function(e){if(e)return window.close();var n=a(".mark-added-note").find("textarea").val(),t=a(".mark-added-note").find("textarea").data("id");unmark.saveNotes(t,n),window.close()},unmark.dismiss_this=function(a){a.parent().parent().fadeOut()},unmark.page_setup=function(e){unmark.main_content.height(e),unmark.sidebar_content.height(e),a(".nav-panel").height(e),a("body").height(e)},unmark.overlay=function(e){if(e===!0){unmark.mainpanels.addClass("blurme");var n=a('<div id="unmark-overlay"><a href="#" id="unmarkModalClose"><i class="icon-big_close"></i></a></div>');n.appendTo(document.body)}else a(".hiddenform").hide().css("top","-300px"),unmark.mainpanels.removeClass("blurme"),a("#unmark-overlay").remove(),a("#helperforms input").val("")}}(window.jQuery),function(a){var e=0;unmark.show_mark_info=function(n){function t(){e=arguments[0]||e,isNaN(e)?a("ul.sidebar-label-list").prepend(unmark.label_list(e)):unmark.getData("labels",t)}var r,i,o=n.data("mark"),s=a("#"+o).html(),u=jQuery.parseJSON(s),l=o.replace("mark-data-",""),c=a("#mark-"+l).find(".note-placeholder").text();mark_nofade=n.data("nofade"),mark_nofade||(a(".mark").removeClass("view-inactive").removeClass("view-active"),a(".mark").not("#mark-"+l).addClass("view-inactive"),a("#mark-"+l).addClass("view-active")),""!==c&&(u.notes=c),r=Hogan.compile(unmark.template.sidebar),i=r.render(u),Modernizr.mq("only screen and (max-width: 480px)")&&a("#mobile-sidebar-show").trigger("click"),unmark.sidebar_mark_info.fadeOut(400,function(){unmark.sidebar_default.is(":visible")?unmark.sidebar_default.fadeOut(400,function(){unmark.sidebar_mark_info.html(i).fadeIn(400,function(){unmark.tagify_notes(a("#notes-"+l)),t(),a("section.sidebar-info-preview").fitVids()})}):(unmark.sidebar_mark_info.html(i),unmark.tagify_notes(a("#notes-"+l)),t(),unmark.sidebar_mark_info.fadeIn(400,function(){a("section.sidebar-info-preview").fitVids()}))})},unmark.update_label_count=function(){function e(a){var e,t,r=a.labels;for(e in r)t=r[e].total_active_marks,"1"===t?t+=" mark":"0"===t?t="no marks":t+=" marks",n.find(".label-"+r[e].label_id+" span").text(t)}var n=a("ul.label-list");unmark.getData("labels",e),unmark.updateCounts()},unmark.mark_archive=function(e){var n=e.data("id");unmark.ajax("/mark/archive/"+n,"post","",function(e){null!==e.mark.archived_on?(a("#mark-"+n).fadeOut(),unmark.sidebar_collapse(),unmark.update_label_count()):alert("Sorry, We could not archive this mark at this time.")})},unmark.mark_restore=function(e){var n=e.data("id");unmark.ajax("/mark/restore/"+n,"post","",function(e){null===e.mark.archived_on?(a("#mark-"+n).fadeOut(),unmark.sidebar_collapse(),unmark.update_label_count()):alert("Sorry, We could not restore this mark at this time.")})},unmark.archive_all=function(){unmark.ajax("/marks/archive/old","post","",function(a){a.archived===!0?window.location="/marks":alert("Sorry, We could not archive the links at this time. Please try again.")})},unmark.marks_editMarkInfo=function(e){function n(e,n,r){""!==e&&(""===n&&t(3),o="title="+unmark.urlEncode(e)+"&notes="+unmark.urlEncode(n),unmark.ajax("/mark/edit/"+r,"post",o,function(){a("#mark-"+r).find(".note-placeholder").text(n)}))}function t(a){switch(a){case 1:heading='Notes <i class="icon-edit"></i>';break;case 2:heading='EDITING MARK <i class="icon-heading_close"></i>';break;case 3:heading='ADD A NOTE <i class="icon-edit"></i>'}e.html(heading)}function r(a){a.preventDefault(),(13===a.which||"blur"===a.type)&&(i=s.text(),title=u.text(),n(title,i,l))}var i,o,s=e.next(),u=a("#mark-"+a(s).data("id")+" h2"),l=a(s).data("id");s.unbind(),u.unbind(),u.attr("contenteditable",!0).addClass("editable"),u.find("a").contents().unwrap(),s.attr("contenteditable",!0).addClass("editable"),s.find("a").contents().unwrap(),s.focus(),t(2),e.unbind(),e.attr("data-action","marks_quitEdit"),e.data("action","marks_quitEdit"),s.on("blur",r),u.on("blur",r)},unmark.marks_addNotes=function(a){var e=a.next();a.hide(),e.fadeIn(),e.focus()},unmark.saveNotes=function(a,e){var n="notes="+unmark.urlEncode(e);unmark.ajax("/mark/edit/"+a,"post",n)},unmark.marks_addLabel=function(e){var n,t,r,i,o,s,u=e.next(),l=e.parent();return u.is(":visible")?u.fadeOut():(u.find("a").unbind(),u.fadeIn(),u.find("a").on("click",function(c){c.preventDefault(),n=u.data("id"),t=a(this).attr("rel"),i=a(this).text(),o=a("body").attr("class"),s=RegExp("label"),r="label_id="+t,unmark.ajax("/mark/edit/"+n,"post",r,function(r){u.fadeOut(),e.text(i),unmark.swapClass(e,"label-*","label-"+t),u.find("a").unbind(),unmark.update_label_count(),l.hasClass("sidebar-label")&&(unmark.swapClass(l,"label-*","label-"+t),unmark.swapClass(a("#mark-"+n),"label-*","label-"+t),unmark.update_mark_info(r,n),s.test(o)&&o!=="label-"+t&&(a("#mark-"+n).fadeOut(),unmark.sidebar_collapse()))})}),void 0)},unmark.update_mark_info=function(e,n){var t=e.mark;t=JSON.stringify(t),a("#mark-data-"+n).html(t)},unmark.label_list=function(a){var e,n,t=a.labels,r="";for(e in t)n=t[e],r+='<li class="label-'+n.label_id+'"><a href="#" rel="'+n.label_id+'"><span>'+n.name+"</span></a></li>";return r},unmark.marks_quitEdit=function(e){if('EDITING MARK <i class="icon-heading_close"></i>'==e.html()){console.log("Quitting editing");var n=e.next(),t=a(n).data("id"),r=a("#mark-"+t+" h2"),i=a("#mark-"+t+" .mark-link a").attr("href");n.attr("contenteditable",!1).removeClass("editable"),r.attr("contenteditable",!1).removeClass("editable"),r.html('<a target="_blank" href="'+i+'">'+r.text()+"</a>"),unmark.tagify_notes(n),e.unbind(),n.unbind(),r.unbind(),e.html('Notes <i class="icon-edit"></i>'),e.attr("data-action","marks_editMarkInfo"),e.data("action","marks_editMarkInfo"),setTimeout(function(){e.addClass("action")},500)}},unmark.tagify_notes=function(a){var e=a.text();""!==e?(e=e.replace(/(https?:\/\/[^\]\s]+)(?: ([^\]]*))?/g,"<a target='_blank' href='$1'>$1</a>"),e=e.replace(/#(\S*)/g,'<a href="/marks/tag/$1">#$1</a>')):a.prev().html('Click To Add A Note or Edit Mark <i class="icon-edit"></i>'),a.html(e)},unmark.delete_mark=function(e){var n=e.data("id"),t=e.data("view");unmark.ajax("/mark/delete/"+n,"post","",function(e){"0"===e.mark.active?"bookmarklet"===t?unmark.close_window(!0):(unmark.sidebar_collapse(),a("#mark-"+n).fadeOut()):alert("This mark could not be deleted, please try again laster.")})}}(window.jQuery),function(a){a(document).ready(function(){function e(e){var n=unmark.label_list(e);a("ul.label-choices").prepend(n)}function n(){var e=a(".mark-added").data("label"),n=a(".mark-added").data("label-name");a("#currLabel").addClass("label-"+e).text(n)}unmark.getData("labels",e),a(document).ready(function(){n(),a(".mark-added-notes-area").on("blur keydown",function(e){if(13===e.which||"blur"===e.type){e.preventDefault();var n=a(this).val(),t=a(this).data("id");unmark.saveNotes(t,n)}})})})}(window.jQuery),function($){unmark.init=function(){this.nav_panel=$(".navigation-pane"),this.main_panel=$(".main-wrapper"),this.main_content=$(".main-content"),this.sidebar_content=$(".sidebar-content"),this.main_panel_width=unmark.main_panel.width(),this.sidebar_default=$(".sidebar-default"),this.sidebar_mark_info=$(".sidebar-mark-info"),this.body_height=$(window).outerHeight(!0),this.special_chars={"\\+":"&#43;"},this.mainpanels=$("#unmark-wrapper");var load=unmark.readQuery("load");load!==!1&&(unmark.overlay(!0),$("#"+load).show().animate({top:0},1e3)),window.unmark_current_page=1,Modernizr.mq("only screen and (min-width: 480px)")&&$("body").animate({opacity:1},1e3),$(".navigation-content a, .navigation-pane-links a").on("click",function(a){unmark.interact_nav(a,$(this))}),$(document).on("mouseenter",".mark",function(){$(this).addClass("hide-dot"),$(this).find(".mark-actions").show()}),$(document).on("mouseleave",".mark",function(){$(this).removeClass("hide-dot"),$(this).find(".mark-actions").hide()}),$(document).on("click","button[data-action], .action",function(e){e.preventDefault(),e.stopPropagation();var action=$(this).data("action"),funct;funct=eval("unmark."+action),funct($(this))}),$(document).on("click",".sidebar-info-panel h4.prev-coll",function(a){a.preventDefault();var e=$(this).next("section"),n=$(this).find("i");e.is(":visible")?(n.removeClass("icon-up"),n.addClass("icon-down"),e.slideUp()):(n.removeClass("icon-down"),n.addClass("icon-up"),e.slideDown())}),$(document).on("click",".mark",function(a){var e=a.target.className,n=$(this).find("a.mark-info");"icon-check"!==e&&"action mark-archive"!==e&&unmark.show_mark_info(n),unmark.hideNavigation()}),$("#unmark").length>0&&($(document).pjax("a[href*='/']",unmark.main_content),$(document).on("submit","#search-form",function(a){$.pjax.submit(a,unmark.main_content)}),$(document).on("pjax:complete",function(){Modernizr.mq("only screen and (max-width: 480px)")&&unmark.mobile_nav(!0),window.unmark_current_page=1,unmark.main_content.scrollTop(0),unmark.main_content.find(".marks").hide().fadeIn(),unmark.updateDom()})),$("form.ajaxsbmt").on("submit",function(e){e.preventDefault();var form=$(this),formid=form.attr("id");funct=eval("unmark."+formid),funct(form,e)}),$("#helperforms input.field-input").on("keydown change",function(){$(this).parent().parent().find(".response-message").hide()}),$(document).on("click","#unmarkModalClose",function(a){return a.preventDefault(),unmark.overlay(!1)}),$(document).on("mouseenter",".label-choices li, .sidebar-label-list li",function(){var a=$(this),e=a.find("span").text(),n=a.attr("class");$("#label-chosen").show().text(e).removeClass().addClass(n)}),$(document).on("mouseleave",".label-choices li, .sidebar-label-list li",function(){$("#label-chosen").show().hide()}),unmark.main_content.on("scroll",function(){unmark.scrollPaginate($(this))}),$(".importer").change(function(){return $("#importForm").submit()}),$(".importerHTML").change(function(){return $("#importFormHTML").submit()})},$(document).ready(function(){unmark.init()})}(window.jQuery);