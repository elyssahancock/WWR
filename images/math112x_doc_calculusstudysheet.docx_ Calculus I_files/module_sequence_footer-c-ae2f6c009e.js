(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[3769,4067,4123],{"65NJ":function(e,t,r){"use strict"
var a=r("ouhR")
var n=r.n(a)
r("w2hD")
n.a.fn.scrollToVisible=function(e){const t={}
const r=n()(e)
if(0===r.length)return
let a=r.offset(),s=r.outerWidth(),o=r.outerHeight(),i=a.top,l=i+o,_=a.left,u=_+s,c="html,body"==this.selector?n.a.windowScrollTop():this.scrollTop(),d=this.scrollLeft(),p=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let e=n()("body").offset()
this.each((function(){try{e=n()(this).offset()
return false}catch(e){}}))
i-=e.top
l-=e.top
_-=e.left
u-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){p=n()(window).height()
n()("#wizard_box:visible").length>0&&(p-=n()("#wizard_box:visible").height())
f=n()(window).width()
i-=c
_-=d
l-=c
u-=d}i<0||p<o&&l>p?t.scrollTop=i+c:l>p&&(t.scrollTop=l+c-p+20)
_<0?t.scrollLeft=_+d:u>f&&(t.scrollLeft=u+d-f+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},BrAc:function(e,t,r){"use strict"
var a=r("vDqi")
var n=r.n(a)
n.a.defaults.xsrfCookieName="_csrf_token"
n.a.defaults.xsrfHeaderName="X-CSRF-Token"
const s=n.a.defaults.headers.common.Accept
n.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+s
n.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=n.a},FZ6K:function(e,t,r){"use strict"
var a=r("An8g")
var n=r("VTBJ")
var s=r("q1tI")
var o=r.n(s)
r("17x9")
var i=r("bZJi")
var l=r("ayAk")
function _(e){return o.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGrader™"))}function u(e){const t=e.className?"icon-speed-grader "+e.className:"icon-speed-grader"
let r={className:t,href:e.href}
e.disabled&&(r=Object(n["a"])(Object(n["a"])({},r),{},{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(a["a"])(i["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,_(r)):_(r)}t["a"]=u},HMVb:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u}))
var a=r("ODXe")
var n=r("i/8D")
var s=r("DUTp")
var o=r("IPIv")
var i={}
function l(e,t){if(!n["a"])return 16
var r=e||Object(s["a"])(e).documentElement
if(!t&&i[r])return i[r]
var a=parseInt(Object(o["a"])(r).getPropertyValue("font-size"))
i[r]=a
return a}var _=r("CyAq")
function u(e,t){var r=t||document.body
if(!e||"number"===typeof e)return e
var n=Object(_["a"])(e),s=Object(a["a"])(n,2),o=s[0],i=s[1]
return"rem"===i?o*l():"em"===i?o*l(r):o}},JOjB:function(e,t,r){"use strict"
var a=r("ouhR")
var n=r.n(a)
var s=r("HGxv")
var o=r("8WeW")
Object(o["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"ca":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra el text citat","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en":{"lib":{"text_helper":{"ellipsis":"...","word_separator":" "}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
r("jQeR")
r("0sPK")
var i=s["default"].scoped("lib.text_helper")
var l=r("gI0r")
var _,u,c
_="LINK-PLACEHOLDER"
u=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t["a"]=c={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(l["a"])(i.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+n.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,r,a,n,s,o,i,d
n=[]
s=[]
e=e.replace(u,(function(e,t){var r
s.push(e===_?_:(r=e,"http://"===r.slice(0,7)||"https://"===r.slice(0,8)||(r="http://"+r),n.push(r),"<a href='"+Object(l["a"])(r)+"'>"+Object(l["a"])(e)+"</a>"))
return _}))
e=Object(l["a"])(e)
e=e.replace(new RegExp(_,"g"),(function(e,t){return s.shift()}))
e=e.replace(/\n/g,"<br />\n")
o=[]
i=[]
d=e.split("\n")
for(t=0,r=d.length;t<r;t++){a=d[t]
if(a.match(/^(&gt;|>)/))i.push(a)
else{i.length&&o.push(c.quoteClump(i))
i=[]
o.push(a)}}i.length&&o.push(c.quoteClump(i))
return o.join("\n")},delimit:function(e){var t,r,a,n,s
if(isNaN(e))return String(e)
s=e<0?"-":""
t=Math.abs(e)
if(Infinity===t)return String(e)
r=Math.floor(t)
n=t===r?"":String(t).replace(/^\d+\./,".")
while(r>=1e3){a=String(r).replace(/\d+(\d\d\d)$/,",$1")
r=Math.floor(r/1e3)
n=a+n}return s+String(r)+n},truncateText:function(e,t){var r,a,n,s,o,l
null==t&&(t={})
a=null!=(s=t.max)?s:30
r=i.t("ellipsis","...")
l=i.t("word_separator"," ")
e=(null!=e?e:"").replace(/\s+/g,l).trim()
if(!e||e.length<=a)return e
o=0
while(true){n=e.indexOf(l,o+1)
if(n<0||n>a-r.length)break
o=n}o||(o=a-r.length)
return e.substring(0,o)+r},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},aq8L:function(e,t,r){"use strict"
var a=r("HGxv")
var n=r("8WeW")
Object(n["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ви впевнені, що хочете це видалити?"}}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
r("jQeR")
r("0sPK")
var s=a["default"].scoped("instructure_misc_plugins")
var o=r("ouhR")
var i=r.n(o)
var l=r("gI0r")
var _=r("3PZ/")
r("dhbk")
r("ESjL")
r("65NJ")
r("w2hD")
i.a.fn.setOptions=function(e,t){let r=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
r+='<option value="'+t+'">'+t+"</option>"})
return this.html(i.a.raw(r))}
i.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
i.a.fn.scrollbarWidth=function(){const e=i()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const r=t.innerWidth()
e.css("overflow-y","scroll")
const a=t.innerWidth()
e.remove()
return r-a}
i.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
i.a.fn.undim=function(e){return this.animate({opacity:1},e)}
i.a.fn.confirmDelete=function(e){e=i.a.extend({},i.a.fn.confirmDelete.defaults,e)
const t=this
let r=null
let a=true
e.noMessage=e.noMessage||e.no_message
const n=function(){if(!a){e.cancelled&&i.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const a=e.prepareData?e.prepareData.call(t,r):{}
a.authenticity_token=Object(_["a"])()
i.a.ajaxJSON(e.url,"DELETE",a,r=>{e.success.call(t,r)},(r,a,n,s)=>{e.error&&i.a.isFunction(e.error)?e.error.call(t,r,a,n,s):i.a.ajaxJSON.unhandledXHRs.push(a)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!i.a.skipConfirmations){if(e.dialog){a=false
const t="object"===typeof e.dialog?e.dialog:{}
const o=e.url.includes("assignments")?"btn-danger":"btn-primary"
r=i()(e.message).dialog(i.a.extend({},{modal:true,close:n,buttons:[{text:s.t("#buttons.cancel","Cancel"),click(){i()(this).dialog("close")}},{text:s.t("#buttons.delete","Delete"),class:o,click(){a=true
i()(this).dialog("close")}}]},t))
return}a=confirm(e.message)}n()}
i.a.fn.confirmDelete.defaults={get message(){return s.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
i.a.fn.fragmentChange=function(e){if(e&&true!==e){const r=(window.location.search||"").replace(/^\?/,"").split("&")
let a=null
for(var t=0;t<r.length;t++){const e=r[t]
e&&0===e.indexOf("hash=")&&(a="#"+e.substring(5))}this.bind("document_fragment_change",e)
const n=this
let s=false
for(t=0;t<i.a._checkFragments.fragmentList.length;t++){const e=i.a._checkFragments.fragmentList[t]
e.doc[0]==n[0]&&(s=true)}s||i.a._checkFragments.fragmentList.push({doc:n,fragment:""})
i()(window).bind("hashchange",i.a._checkFragments)
setTimeout(()=>{a&&a.length>0?n.triggerHandler("document_fragment_change",a):n&&n[0]&&n[0].location&&n[0].location.hash.length>0&&n.triggerHandler("document_fragment_change",n[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
i.a._checkFragments=function(){const e=i.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const r=e[t]
const a=r.doc
if(a[0].location.hash!=r.fragment){a.triggerHandler("document_fragment_change",a[0].location.hash)
r.fragment=a[0].location.hash
i.a._checkFragments.fragmentList[t]=r}}}
i.a._checkFragments.fragmentList=[]
i.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
i.a.fn.showIf=function(e){if(i.a.isFunction(e))return this.each((function(t){i()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
i.a.fn.disableIf=function(e){i.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
i.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}i()(".indicator_box").remove()
let r=this.offset()
e&&e.offset&&(r=e.offset)
const a=this.width()
const n=this.height()
const s=(e.container||this).zIndex()
t=i()(document.createElement("div"))
t.css({width:a+6,height:n+6,top:r.top-3,left:r.left-3,zIndex:s+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){i()(this).stop().fadeOut("fast",(function(){i()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
i()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){i()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){i()(this).remove()}))
e&&e.scroll&&i()("html,body").scrollToVisible(t)}
i.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
i.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
i.a.fn.fillWindowWithMe=function(e){const t=i.a.extend({minHeight:400},e),r=i()(this),a=i()("#wrapper"),n=i()("#main"),s=i()("#not_right_side"),o=i()(window),l=i()(this).add(t.alsoResize)
function _(){l.height(0)
const e=o.height()-(a.offset().top+a.outerHeight())+(n.height()-s.height()),_=Math.max(400,e)
l.height(_)
i.a.isFunction(t.onResize)&&t.onResize.call(r,_)}_()
o.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",_)
return this}
i.a.fn.autoGrowInput=function(e){e=i.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||i()(this).width(),r="",a=i()(this),n=i()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:a.css("fontSize"),fontFamily:a.css("fontFamily"),fontWeight:a.css("fontWeight"),letterSpacing:a.css("letterSpacing"),whiteSpace:"nowrap"}),s=function(){setTimeout(()=>{if(r===(r=a.val()))return
n.text(r)
const s=n.width(),o=s+e.comfortZone>=t?s+e.comfortZone:t,i=a.width(),l=o<i&&o>=t||o>t&&o<e.maxWidth
l&&a.width(o)})}
n.insertAfter(a)
i()(this).bind("keyup keydown blur update change",s)}))
return this}
i.a},ayAk:function(e,t,r){"use strict"
var a=r("HGxv")
var n=r("8WeW")
Object(n["a"])(JSON.parse('{"ar":{"must_select_a_student_group_first_15c6a3cb":"يجب تحديد مجموعة طلاب أولاً","remove_selected_attachment_61f81ee4":"إزالة المرفق المحدد","select_group_to_grade_6df28d80":"حدد مجموعة للدرجة","select_one_8e0af564":"حدد واحدًا","speedgrader_tm_44688790":"SpeedGrader™"},"ca":{"must_select_a_student_group_first_15c6a3cb":"Primer s\'ha de seleccionar un grup d\'estudiants","remove_selected_attachment_61f81ee4":"Suprimeix el fitxer adjunt seleccionat","select_group_to_grade_6df28d80":"Selecciona el grup per qualificar","select_one_8e0af564":"Seleccioneu-ne un","speedgrader_tm_44688790":"SpeedGrader™"},"cy":{"must_select_a_student_group_first_15c6a3cb":"Rhaid dewis grŵp myfyrwyr i ddechrau","remove_selected_attachment_61f81ee4":"Tynnu\'r atodiad dan sylw","select_group_to_grade_6df28d80":"Dewis Grŵp i\'w Raddio","select_one_8e0af564":"Dewiswch Un","speedgrader_tm_44688790":"SpeedGrader™"},"da":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en studiegruppe først","remove_selected_attachment_61f81ee4":"Fjern valgte vedhæftede fil","select_group_to_grade_6df28d80":"Vælg gruppe, der skal have karakter","select_one_8e0af564":"Vælg en","speedgrader_tm_44688790":"SpeedGrader"},"da-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en elevgruppe først","remove_selected_attachment_61f81ee4":"Fjern valgte vedhæftede fil","select_group_to_grade_6df28d80":"Vælg gruppe, der skal vurderes","select_one_8e0af564":"Vælg en","speedgrader_tm_44688790":"SpeedGrader"},"de":{"must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewählt werden","remove_selected_attachment_61f81ee4":"Entfernen des ausgewählten Anhangs","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswählen","select_one_8e0af564":"Einen auswählen","speedgrader_tm_44688790":"SpeedGrader™"},"el":{"select_one_8e0af564":"Επιλέξτε Ένα","speedgrader_tm_44688790":"SpeedGrader™"},"en-AU":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGrader™"},"en-AU-x-unimelb":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGrader™"},"en-CA":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGrader™"},"en-GB":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select one","speedgrader_tm_44688790":"SpeedGrader™"},"en-GB-x-ukhe":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select one","speedgrader_tm_44688790":"SpeedGrader™"},"es":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de estudiantes","remove_selected_attachment_61f81ee4":"Eliminar adjunto seleccionado","select_group_to_grade_6df28d80":"Seleccionar grupo para calificar","select_one_8e0af564":"Seleccionar uno","speedgrader_tm_44688790":"SpeedGrader™"},"fa":{"must_select_a_student_group_first_15c6a3cb":"ابتدا باید یک گروه دانشجویی را انتخاب کنید","select_group_to_grade_6df28d80":"انتخاب گروه برای نمره","select_one_8e0af564":"انتخاب یک مورد","speedgrader_tm_44688790":"برنامه نمره گذاری سریع™"},"fi":{"must_select_a_student_group_first_15c6a3cb":"Täytyy valita ensin opiskelijaryhmä","remove_selected_attachment_61f81ee4":"Poista valittu liite","select_group_to_grade_6df28d80":"Valitse arvioitava ryhmä","select_one_8e0af564":"Valitse yksi","speedgrader_tm_44688790":"SpeedGrader™"},"fr":{"must_select_a_student_group_first_15c6a3cb":"Il faut d\'abord sélectionner un groupe d\'élèves","remove_selected_attachment_61f81ee4":"Supprimer la pièce jointe sélectionnée","select_group_to_grade_6df28d80":"Sélectionnez un groupe à noter","select_one_8e0af564":"Sélectionner un élément","speedgrader_tm_44688790":"SpeedGrader™"},"fr-CA":{"must_select_a_student_group_first_15c6a3cb":"Vous devez d\'abord sélectionner un groupe d\'étudiants","remove_selected_attachment_61f81ee4":"Retirer la pièce jointe sélectionnée","select_group_to_grade_6df28d80":"Sélectionner le groupe à classer","select_one_8e0af564":"Sélectionner un élément","speedgrader_tm_44688790":"SpeedGrader™"},"he":{"select_one_8e0af564":"בחר אחת האפשרויות","speedgrader_tm_44688790":"SpeedGrader™"},"ht":{"must_select_a_student_group_first_15c6a3cb":"Dwe dabò seleksyone yon gwoup elèv","remove_selected_attachment_61f81ee4":"Elimine atachman seleksyone a","select_group_to_grade_6df28d80":"Seleksyone Gwoup pou Evalye a","select_one_8e0af564":"Seleksyone Yonn","speedgrader_tm_44688790":"SpeedGrader™"},"hu":{"select_one_8e0af564":"Válasszon egyet","speedgrader_tm_44688790":"Gyorsértékelő"},"hy":{"select_one_8e0af564":"Ընտրել մեկը","speedgrader_tm_44688790":"«Արագ գնահատման համակարգ™»"},"is":{"must_select_a_student_group_first_15c6a3cb":"Velja þarf nemendahóp fyrst","remove_selected_attachment_61f81ee4":"Fjarlægja valið viðhengi","select_group_to_grade_6df28d80":"Veldu hóp til að gefa einkunnir","select_one_8e0af564":"Velja einn","speedgrader_tm_44688790":"SpeedGrader™"},"it":{"must_select_a_student_group_first_15c6a3cb":"È necessario selezionare prima un gruppo di studenti","remove_selected_attachment_61f81ee4":"Rimuovi allegato selezionato","select_group_to_grade_6df28d80":"Seleziona gruppo a cui assegnare un voto","select_one_8e0af564":"Scegli un\'opzione","speedgrader_tm_44688790":"SpeedGrader™"},"ja":{"must_select_a_student_group_first_15c6a3cb":"受講生グループを先に選択してください","remove_selected_attachment_61f81ee4":"選択された添付書類を削除","select_group_to_grade_6df28d80":"採点するグループを選択する","select_one_8e0af564":"1 つを選択","speedgrader_tm_44688790":"SpeedGrader™"},"ko":{"select_one_8e0af564":"하나 선택","speedgrader_tm_44688790":"SpeedGrader™"},"mi":{"must_select_a_student_group_first_15c6a3cb":"Me tīpakohia te ākonga rōpu i te tuatahi","remove_selected_attachment_61f81ee4":"Tangohia tē tāpiri kua tīpakohia","select_group_to_grade_6df28d80":"Tīpako Rōpu ki te Kōeke","select_one_8e0af564":"Tīpakohia","speedgrader_tm_44688790":"Speedgrader"},"nb":{"must_select_a_student_group_first_15c6a3cb":"Velg en studentgruppe først","remove_selected_attachment_61f81ee4":"Fjern valgt vedlegg","select_group_to_grade_6df28d80":"Velg gruppe for karaktersetting","select_one_8e0af564":"Velg én","speedgrader_tm_44688790":"SpeedGrader™"},"nb-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Velg en elevgruppe først","remove_selected_attachment_61f81ee4":"Fjern valgt vedlegg","select_group_to_grade_6df28d80":"Velg gruppe for vurdering","select_one_8e0af564":"Velg én","speedgrader_tm_44688790":"SpeedGrader™"},"nl":{"must_select_a_student_group_first_15c6a3cb":"Moet eerst een cursistengroep selecteren","remove_selected_attachment_61f81ee4":"Geselecteerde bijlage verwijderen","select_group_to_grade_6df28d80":"Groep selecteren voor beoordeling","select_one_8e0af564":"Eén selecteren","speedgrader_tm_44688790":"SpeedGrader™"},"nn":{"must_select_a_student_group_first_15c6a3cb":"Må først velje ei studentgruppe","select_group_to_grade_6df28d80":"Vel gruppe å vurdere","select_one_8e0af564":"Vel ein","speedgrader_tm_44688790":"SpeedGrader™"},"pl":{"must_select_a_student_group_first_15c6a3cb":"Należy najpierw wybrać grupę uczestników","remove_selected_attachment_61f81ee4":"Usuń wybrany załącznik","select_group_to_grade_6df28d80":"Wybierz grupę do oceny","select_one_8e0af564":"Wybierz jeden","speedgrader_tm_44688790":"SpeedGrader™"},"pt":{"must_select_a_student_group_first_15c6a3cb":"É necessário selecionar um grupo de alunos primeiro","remove_selected_attachment_61f81ee4":"Retirar o anexo selecionado","select_group_to_grade_6df28d80":"Selecionar grupo para nota","select_one_8e0af564":"Selecionar um","speedgrader_tm_44688790":"SpeedGrader™"},"pt-BR":{"must_select_a_student_group_first_15c6a3cb":"Deve selecionar um grupo de alunos primeiro","remove_selected_attachment_61f81ee4":"Remover anexo selecionado","select_group_to_grade_6df28d80":"Selecionar grupo para avaliar","select_one_8e0af564":"Selecionar um","speedgrader_tm_44688790":"SpeedGrader™"},"ru":{"must_select_a_student_group_first_15c6a3cb":"Сначала необходимо выбрать группу студентов","remove_selected_attachment_61f81ee4":"Удалить выбранное вложение","select_group_to_grade_6df28d80":"Выберите группу для оценки","select_one_8e0af564":"Выберите один","speedgrader_tm_44688790":"SpeedGrader™"},"sv":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en studentgrupp","remove_selected_attachment_61f81ee4":"Ta bort valda bilagor","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas","select_one_8e0af564":"Välj en","speedgrader_tm_44688790":"SpeedGrader™"},"sv-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en elevgrupp","remove_selected_attachment_61f81ee4":"Ta bort valda bilagor","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas","select_one_8e0af564":"Välj en","speedgrader_tm_44688790":"SpeedGrader™"},"tr":{"select_one_8e0af564":"Birini Seçiniz","speedgrader_tm_44688790":"SpeedGrader™"},"uk":{"select_one_8e0af564":"Вибрати один","speedgrader_tm_44688790":"SpeedGrader™"},"zh-Hans":{"must_select_a_student_group_first_15c6a3cb":"必须先选择一个学生组","remove_selected_attachment_61f81ee4":"删除所选附件","select_group_to_grade_6df28d80":"选择要评分的组","select_one_8e0af564":"选择一个","speedgrader_tm_44688790":"快速评分器™"},"zh-Hant":{"must_select_a_student_group_first_15c6a3cb":"必須先選擇學生群組","remove_selected_attachment_61f81ee4":"移除所選的附件","select_group_to_grade_6df28d80":"選擇要評分的群組","select_one_8e0af564":"選擇一個","speedgrader_tm_44688790":"SpeedGrader™"}}'))
r("jQeR")
r("0sPK")
t["a"]=a["default"].scoped("assignment")},bZJi:function(e,t,r){"use strict"
r.d(t,"a",(function(){return A}))
var a=r("Ff2n")
var n=r("VTBJ")
var s=r("1OyB")
var o=r("vuIU")
var i=r("Ji7U")
var l=r("LK+K")
var _=r("q1tI")
var u=r.n(_)
var c=r("17x9")
var d=r.n(c)
var p=r("nAyT")
var f=r("KgFQ")
var g=r("jtGx")
var h=r("sQ3t")
var m=r("E+IV")
var b=r("UCAh")
var v=r("BTe1")
var w=r("J2CL")
var x=r("oXx0")
var y=r("jsCG")
var S=r("AdN2")
var k=function(e){var t=e.typography,r=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:r.small}}
var j,G,O,C,T,q
var z={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var A=(j=Object(p["a"])("8.0.0",{tip:"renderTip",variant:"color"}),G=Object(x["a"])(),O=Object(w["l"])(k,z),j(C=G(C=O(C=(q=T=function(e){Object(i["a"])(r,e)
var t=Object(l["a"])(r)
function r(){var e
Object(s["a"])(this,r)
for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o]
e=t.call.apply(t,[this].concat(n))
e._id=Object(v["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(o["a"])(r,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,a=e.as
var s=this.state.hasFocus
var o={"aria-describedby":this._id}
if(a){var i=Object(f["a"])(r,this.props)
var l=Object(g["a"])(this.props,r.propTypes)
return u.a.createElement(i,Object.assign({},l,o),t)}return"function"===typeof t?t({focused:s,getTriggerProps:function(e){return Object(n["a"])({},o,{},e)}}):Object(h["a"])(this.props.children,o)}},{key:"render",value:function(){var e=this
var t=this.props,r=t.renderTip,n=t.isShowingContent,s=t.defaultIsShowingContent,o=t.on,i=t.placement,l=t.mountNode,_=t.constrain,c=t.offsetX,d=t.offsetY,p=t.positionTarget,f=t.onShowContent,h=t.onHideContent,b=t.tip,v=(t.variant,Object(a["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var w=this.props.variant
w=w?"default"===w?"primary-inverse":"primary":this.props.color
return u.a.createElement(y["a"],Object.assign({},Object(g["b"])(v),{isShowingContent:n,defaultIsShowingContent:s,on:o,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:i,color:"primary"===w?"primary-inverse":"primary",mountNode:l,constrain:_,shadow:"none",offsetX:c,offsetY:d,positionTarget:p,renderTrigger:function(){return e.renderTrigger()},onShowContent:f,onHideContent:h,onFocus:this.handleFocus,onBlur:this.handleBlur}),u.a.createElement("span",{id:this._id,className:z.root,role:"tooltip"},r?Object(m["a"])(r):b))}}])
r.displayName="Tooltip"
return r}(_["Component"]),T.propTypes={children:d.a.oneOfType([d.a.node,d.a.func]).isRequired,renderTip:d.a.oneOfType([d.a.node,d.a.func]),isShowingContent:d.a.bool,defaultIsShowingContent:d.a.bool,as:d.a.elementType,on:d.a.oneOfType([d.a.oneOf(["click","hover","focus"]),d.a.arrayOf(d.a.oneOf(["click","hover","focus"]))]),color:d.a.oneOf(["primary","primary-inverse"]),placement:b["a"].placement,mountNode:b["a"].mountNode,constrain:b["a"].constrain,offsetX:d.a.oneOfType([d.a.string,d.a.number]),offsetY:d.a.oneOfType([d.a.string,d.a.number]),positionTarget:d.a.oneOfType([S["a"],d.a.func]),onShowContent:d.a.func,onHideContent:d.a.func,tip:d.a.node,variant:d.a.oneOf(["default","inverse"])},T.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},q))||C)||C)||C)},"dwl/":function(e,t,r){"use strict"
var a=r("An8g")
r("17x9")
var n=r("sTNg")
var s=r("ayAk")
r("q1tI")
function o(e){return Object(a["a"])("option",{value:e.id},e.id,e.name)}function i(e){return Object(a["a"])("optgroup",{label:e.name},"group_category_"+e.id,e.groups.map(e=>o(e)))}function l(e){return Object(a["a"])(n["a"],{id:"student-group-filter",label:e.label},void 0,Object(a["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(a["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",s["a"].t("Select One")),e.categories.map(e=>i(e))))}t["a"]=l},eGSd:function(e,t,r){"use strict"
r.d(t,"a",(function(){return a}))
function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
var a,n,s,o
var i=0
var l=[]
var _=false
if("function"!==typeof e)throw new TypeError("Expected a function")
var u=!!r.leading
var c="maxWait"in r
var d=!("trailing"in r)||!!r.trailing
var p=c?Math.max(+r.maxWait||0,t):0
function f(t){var r=a
var o=n
a=n=void 0
i=t
if(true!==_){s=e.apply(o,r)
return s}}function g(e){i=e
l.push(setTimeout(b,t))
return u?f(e):s}function h(e){var r=e-o
var a=e-i
var n=t-r
return c?Math.min(n,p-a):n}function m(e){var r=e-o
var a=e-i
return"undefined"===typeof o||r>=t||r<0||c&&a>=p}function b(){var e=Date.now()
if(m(e))return v(e)
l.push(setTimeout(b,h(e)))}function v(e){y()
if(d&&a)return f(e)
a=n=void 0
return s}function w(){_=true
y()
i=0
a=o=n=void 0}function x(){return 0===l.length?s:v(Date.now())}function y(){l.forEach((function(e){return clearTimeout(e)}))
l=[]}function S(){var e=Date.now()
var r=m(e)
for(var i=arguments.length,_=new Array(i),u=0;u<i;u++)_[u]=arguments[u]
a=_
n=this
o=e
if(r){if(0===l.length)return g(o)
if(c){l.push(setTimeout(b,t))
return f(o)}}0===l.length&&l.push(setTimeout(b,t))
return s}S.cancel=w
S.flush=x
return S}},gCYW:function(e,t,r){"use strict"
r.d(t,"a",(function(){return i}))
var a=r("QF4Q")
var n=r("i/8D")
var s=r("EgqM")
var o=r("DUTp")
function i(e){var t={top:0,left:0,height:0,width:0}
if(!n["a"])return t
var r=Object(a["a"])(e)
if(!r)return t
if(r===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var l=e===document?document:Object(o["a"])(r)
var _=l&&l.documentElement
if(!_||!Object(s["a"])(_,r))return t
var u=r.getBoundingClientRect()
var c
for(c in u)t[c]=u[c]
if(l!==document){var d=l.defaultView.frameElement
if(d){var p=i(d)
t.top+=p.top
t.bottom+=p.top
t.left+=p.left
t.right+=p.left}}return{top:t.top+(window.pageYOffset||_.scrollTop)-(_.clientTop||0),left:t.left+(window.pageXOffset||_.scrollLeft)-(_.clientLeft||0),width:(null==t.width?r.offsetWidth:t.width)||0,height:(null==t.height?r.offsetHeight:t.height)||0,right:l.body.clientWidth-t.width-t.left,bottom:l.body.clientHeight-t.height-t.top}}},msTH:function(e,t,r){"use strict"
var a=r("ouhR")
var n=r.n(a)
var s=r("Y/W1")
var o=r.n(s)
var i=r("gI0r")
var l=r("HGxv")
var _=r("8WeW")
Object(_["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
r("jQeR")
r("0sPK")
var u=l["default"].scoped("user_content")
const c={translateMathmlForScreenreaders(e){var t,r
if(!(null!==(t=ENV)&&void 0!==t&&null!==(r=t.FEATURES)&&void 0!==r&&r.new_math_equation_handling)){const t=n()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const r=n()('<span class="hidden-readable"></span>')
r.html(t)
return r}},toMediaCommentLink(e){const t=n()(`<a\n        id='media_comment_${Object(i["a"])(n()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(i["a"])(n()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(i["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(i["a"])(n()(e).attr("data-alt"))}'\n      />`)
t.html(n()(e).html())
return t},convert(e,t={}){const r=n()("<div />").html(e)
r.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return c.toMediaCommentLink(this)}))
r.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){r.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=n()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=o.a.uniqueId("uc_")
let r="/object_snippet"
ENV.files_domain&&(r=`//${ENV.files_domain}${r}`)
const a=n()(`<form\n            action='${Object(i["a"])(r)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(i["a"])(t)}'\n            id='form-${Object(i["a"])(t)}'\n          />`)
a.append(n()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
a.append(n()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
n()("body").append(a)
setTimeout(()=>a.submit(),0)
return n()(`<iframe\n            class='user_content_iframe'\n            name='${Object(i["a"])(t)}'\n            style='width: ${Object(i["a"])(e.data("uc_width"))}; height: ${Object(i["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(i["a"])(u.t("User Content"))}'\n          />`)}))
r.find("img.equation_image").each((e,t)=>{const r=n()(t)
const a=c.translateMathmlForScreenreaders(r)
r.removeAttr("x-canvaslms-safe-mathml")
r.after(a)})}return r.html()}}
t["a"]=c},rCtJ:function(e,t,r){"use strict"
r.r(t)
var a=r("ouhR")
var n=r.n(a)
r("fY8A")
var s=r("An8g")
var o=r("BrAc")
var i=r("HGxv")
var l=r("8WeW")
Object(l["a"])(JSON.parse('{"ar":{"must_select_a_student_group_first_15c6a3cb":"يجب تحديد مجموعة طلاب أولاً","select_group_to_grade_6df28d80":"حدد مجموعة للدرجة"},"ca":{"must_select_a_student_group_first_15c6a3cb":"Primer s\'ha de seleccionar un grup d\'estudiants","select_group_to_grade_6df28d80":"Selecciona el grup per qualificar"},"cy":{"must_select_a_student_group_first_15c6a3cb":"Rhaid dewis grŵp myfyrwyr i ddechrau","select_group_to_grade_6df28d80":"Dewis Grŵp i\'w Raddio"},"da":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en studiegruppe først","select_group_to_grade_6df28d80":"Vælg gruppe, der skal have karakter"},"da-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en elevgruppe først","select_group_to_grade_6df28d80":"Vælg gruppe, der skal vurderes"},"de":{"must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewählt werden","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswählen"},"en-AU":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-AU-x-unimelb":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-CA":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-GB":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-GB-x-ukhe":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"es":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de estudiantes","select_group_to_grade_6df28d80":"Seleccionar grupo para calificar"},"fa":{"must_select_a_student_group_first_15c6a3cb":"ابتدا باید یک گروه دانشجویی را انتخاب کنید","select_group_to_grade_6df28d80":"انتخاب گروه برای نمره"},"fi":{"must_select_a_student_group_first_15c6a3cb":"Täytyy valita ensin opiskelijaryhmä","select_group_to_grade_6df28d80":"Valitse arvioitava ryhmä"},"fr":{"must_select_a_student_group_first_15c6a3cb":"Il faut d\'abord sélectionner un groupe d\'élèves","select_group_to_grade_6df28d80":"Sélectionnez un groupe à noter"},"fr-CA":{"must_select_a_student_group_first_15c6a3cb":"Vous devez d\'abord sélectionner un groupe d\'étudiants","select_group_to_grade_6df28d80":"Sélectionner le groupe à classer"},"ht":{"must_select_a_student_group_first_15c6a3cb":"Dwe dabò seleksyone yon gwoup elèv","select_group_to_grade_6df28d80":"Seleksyone Gwoup pou Evalye a"},"is":{"must_select_a_student_group_first_15c6a3cb":"Velja þarf nemendahóp fyrst","select_group_to_grade_6df28d80":"Veldu hóp til að gefa einkunnir"},"it":{"must_select_a_student_group_first_15c6a3cb":"È necessario selezionare prima un gruppo di studenti","select_group_to_grade_6df28d80":"Seleziona gruppo a cui assegnare un voto"},"ja":{"must_select_a_student_group_first_15c6a3cb":"受講生グループを先に選択してください","select_group_to_grade_6df28d80":"採点するグループを選択する"},"mi":{"must_select_a_student_group_first_15c6a3cb":"Me tīpakohia te ākonga rōpu i te tuatahi","select_group_to_grade_6df28d80":"Tīpako Rōpu ki te Kōeke"},"nb":{"must_select_a_student_group_first_15c6a3cb":"Velg en studentgruppe først","select_group_to_grade_6df28d80":"Velg gruppe for karaktersetting"},"nb-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Velg en elevgruppe først","select_group_to_grade_6df28d80":"Velg gruppe for vurdering"},"nl":{"must_select_a_student_group_first_15c6a3cb":"Moet eerst een cursistengroep selecteren","select_group_to_grade_6df28d80":"Groep selecteren voor beoordeling"},"nn":{"must_select_a_student_group_first_15c6a3cb":"Må først velje ei studentgruppe","select_group_to_grade_6df28d80":"Vel gruppe å vurdere"},"pl":{"must_select_a_student_group_first_15c6a3cb":"Należy najpierw wybrać grupę uczestników","select_group_to_grade_6df28d80":"Wybierz grupę do oceny"},"pt":{"must_select_a_student_group_first_15c6a3cb":"É necessário selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para nota"},"pt-BR":{"must_select_a_student_group_first_15c6a3cb":"Deve selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para avaliar"},"ru":{"must_select_a_student_group_first_15c6a3cb":"Сначала необходимо выбрать группу студентов","select_group_to_grade_6df28d80":"Выберите группу для оценки"},"sv":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en studentgrupp","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas"},"sv-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en elevgrupp","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas"},"zh-Hans":{"must_select_a_student_group_first_15c6a3cb":"必须先选择一个学生组","select_group_to_grade_6df28d80":"选择要评分的组"},"zh-Hant":{"must_select_a_student_group_first_15c6a3cb":"必須先選擇學生群組","select_group_to_grade_6df28d80":"選擇要評分的群組"}}'))
r("jQeR")
r("0sPK")
var _=i["default"].scoped("module_sequence_footer")
var u=r("q1tI")
var c=r.n(u)
var d=r("i8i4")
var p=r.n(d)
var f=r("FZ6K")
var g=r("dwl/")
class h extends u["Component"]{constructor(e){super(e)
this.state={selectedStudentGroupId:e.selectedStudentGroupId||"0"}
this.onStudentGroupSelected=this.onStudentGroupSelected.bind(this)}onStudentGroupSelected(e){if("0"!==e){o["a"].put(`/api/v1/courses/${this.props.courseId}/gradebook_settings`,{gradebook_settings:{filter_rows_by:{student_group_id:e}}})
this.setState({selectedStudentGroupId:e})}}render(){const e=this.props.filterSpeedGraderByStudentGroup&&"0"===this.state.selectedStudentGroupId
return c.a.createElement(c.a.Fragment,null,this.props.filterSpeedGraderByStudentGroup&&Object(s["a"])(g["a"],{categories:this.props.groupCategories,label:_.t("Select Group to Grade"),onChange:this.onStudentGroupSelected,value:this.state.selectedStudentGroupId}),Object(s["a"])(f["a"],{className:"btn button-sidebar-wide",disabled:e,disabledTip:_.t("Must select a student group first"),href:this.props.speedGraderUrl}))}}function m(){if(ENV.speed_grader_url){const e=document.getElementById("speed_grader_link_container")
p.a.render(Object(s["a"])(h,{courseId:ENV.COURSE_ID,filterSpeedGraderByStudentGroup:ENV.SETTINGS.filter_speed_grader_by_student_group,groupCategories:ENV.group_categories||[],selectedStudentGroupId:ENV.selected_student_group_id,speedGraderUrl:ENV.speed_grader_url}),e)}}n()(m)}}])

//# sourceMappingURL=module_sequence_footer-c-ae2f6c009e.js.map