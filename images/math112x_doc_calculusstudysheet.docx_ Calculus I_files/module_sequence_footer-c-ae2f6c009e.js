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
function _(e){return o.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGraderâ„¢"))}function u(e){const t=e.className?"icon-speed-grader "+e.className:"icon-speed-grader"
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
Object(o["a"])(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Ø¥Ø¸Ù‡Ø§Ø± Ø§Ù„Ù†Øµ Ø§Ù„Ù…Ù‚ØªØ¨Ø³","word_separator":" "}}},"ca":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra el text citat","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wediâ€™i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gÃ¥seÃ¸jne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gÃ¥seÃ¸jne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Ï€Ï?Î¿Î²Î¿Î»Î® ÎºÎµÎ¹Î¼Î­Î½Î¿Ï… Ï€Î¿Ï… Ï€Î±Ï?Î±Ï„Î¯Î¸ÎµÏ„Î±Î¹"}}},"en":{"lib":{"text_helper":{"ellipsis":"...","word_separator":" "}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-AU-x-unimelb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-lbs":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB-x-ukhe":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Ù†Ù…Ø§ÛŒØ´ Ù…ØªÙ† Ù†Ù‚Ù„ Ø´Ø¯Ù‡","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"nÃ¤ytÃ¤ lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"×ž×¦×™×’ ×¦×™×˜×•×˜","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tÃ¨ks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idÃ©zett szÃ¶veg megjelenÃ­tÃ©se","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Ö?Õ¸Ö‚ÕµÖ? Õ¿Õ¡Õ¬ Õ´Õ¥Õ»Õ¢Õ¥Ö€Õ¾Õ¸Õ² Õ¿Õ¥Ö„Õ½Õ¿Õ¨","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"SÃ½na Ã­vitnaÃ°an texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"å¼•ç”¨ã?—ã?Ÿãƒ†ã‚­ã‚¹ãƒˆã‚’è¡¨ç¤º","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ì?¸ìš©ë?œ í…?ìŠ¤íŠ¸ í‘œì‹œ","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaÅ¼ cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ñ†Ð¸Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ Ñ‚ÐµÐºÑ?Ñ‚","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaÅ¾i citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alÄ±ntÄ±lanan metni gÃ¶ster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚Ð¸ Ñ†Ð¸Ñ‚Ð¾Ð²Ð°Ð½Ð¸Ð¹ Ñ‚ÐµÐºÑ?Ñ‚","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"æ˜¾ç¤ºå¼•ç”¨çš„æ–‡æœ¬","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"é¡¯ç¤ºå¼•ç”¨çš„æ–‡å­—","word_separator":" "}}}}'))
r("jQeR")
r("0sPK")
var i=s["default"].scoped("lib.text_helper")
var l=r("gI0r")
var _,u,c
_="LINK-PLACEHOLDER"
u=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?Â«Â»â€œâ€?â€˜â€™]))|(LINK-PLACEHOLDER)/gi
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
Object(n["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"Ø¥Ù„ØºØ§Ø¡","delete":"Ø­Ø°Ù?"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ù‡Ù„ ØªØ±ØºØ¨ Ø¨Ø§Ù„ØªØ£ÙƒÙŠØ¯ Ù?ÙŠ Ø­Ø°Ù? Ù‡Ø°Ø§ØŸ"}}},"ca":{"buttons":{"cancel":"CancelÂ·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chiâ€™n siÅµr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"AnnullÃ©r","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker pÃ¥, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"AnnullÃ©r","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker pÃ¥, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"LÃ¶schen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"MÃ¶chten Sie dies wirklich lÃ¶schen?"}}},"el":{"buttons":{"cancel":"Î‘ÎºÏ?Ï?Ï‰ÏƒÎ·","delete":"Î”Î¹Î±Î³Ï?Î±Ï†Î®"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Î•Î¯ÏƒÏ„Îµ ÏƒÎ¯Î³Î¿Ï…Ï?Î¿Ï‚/Î· ÏŒÏ„Î¹ ÎµÏ€Î¹Î¸Ï…Î¼ÎµÎ¯Ï„Îµ Î½Î± Ï„Î¿ Î´Î¹Î±Î³Ï?Î¬ÏˆÎµÏ„Îµ;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Â¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"Ù„ØºÙˆ","delete":"Ø­Ø°Ù?"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ù…Ø·Ù…Ø¦Ù†ÛŒØ¯ Ú©Ù‡ Ù…ÛŒ Ø®ÙˆØ§Ù‡ÛŒØ¯ Ø§ÛŒÙ† Ù…ÙˆØ±Ø¯ Ø­Ø°Ù? Ø´ÙˆØ¯ØŸ"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tÃ¤mÃ¤n?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet Ã©lÃ©ment ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet Ã©lÃ©ment?"}}},"he":{"buttons":{"cancel":"×‘×™×˜×•×œ","delete":"×‘×™×˜×•×œ"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"×‘×˜×•×—/×” ×©×¨×•×¦×” ×œ×‘×˜×œ ×–×?×ª?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwÃ¨ vrÃ¨man ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"MÃ©gse","delete":"TÃ¶rlÃ©s"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy tÃ¶rli ezt?"}}},"hy":{"buttons":{"cancel":"Õ‰Õ¥Õ²ÕµÕ¡Õ¬ Õ°Õ¡Õ´Õ¡Ö€Õ¥Õ¬","delete":"Õ‹Õ¶Õ»Õ¥Õ¬"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ô´Õ¸Ö‚Ö„ Õ«Õ½Õ¯Õ¡ÕºÕ¥ÕžÕ½ Ö?Õ¡Õ¶Õ¯Õ¡Õ¶Õ¸Ö‚Õ´ Õ¥Ö„ Õ»Õ¶Õ»Õ¥Õ¬ Õ½Õ¡:"}}},"is":{"buttons":{"cancel":"HÃ¦tta viÃ°","delete":"EyÃ°a"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu Ã¶rugglega eyÃ°a Ã¾essu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"ã‚­ãƒ£ãƒ³ã‚»ãƒ«","delete":"å‰Šé™¤"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"ã?“ã‚Œã‚’å‰Šé™¤ã?—ã?¦ã‚‚ã‚ˆã‚?ã?—ã?„ã?§ã?™ã?‹?"}}},"ko":{"buttons":{"cancel":"ì·¨ì†Œ","delete":"ì‚­ì œ"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"ì‚­ì œí•˜ì‹œê² ìŠµë‹ˆê¹Œ?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tÄ“nei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker pÃ¥ at du Ã¸nsker Ã¥ slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker pÃ¥ at du Ã¸nsker Ã¥ slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker pÃ¥ at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"UsuÅ„"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunÄ…Ä‡ ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"ÐžÑ‚Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ","delete":"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ð”ÐµÐ¹Ñ?Ñ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ?"}}},"sl":{"buttons":{"cancel":"PrekliÄ?i","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det hÃ¤r?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det hÃ¤r?"}}},"tr":{"buttons":{"cancel":"Ä°ptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediÄŸinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Ð¡ÐºÐ°Ñ?ÑƒÐ²Ð°Ñ‚Ð¸","delete":"Ð’Ð¸Ð´Ð°Ð»Ð¸Ñ‚Ð¸"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ð’Ð¸ Ð²Ð¿ÐµÐ²Ð½ÐµÐ½Ñ–, Ñ‰Ð¾ Ñ…Ð¾Ñ‡ÐµÑ‚Ðµ Ñ†Ðµ Ð²Ð¸Ð´Ð°Ð»Ð¸Ñ‚Ð¸?"}}},"zh-Hans":{"buttons":{"cancel":"å?–æ¶ˆ","delete":"åˆ é™¤"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"æ˜¯å?¦ç¡®å®šè¦?åˆ é™¤å®ƒ?"}}},"zh-Hant":{"buttons":{"cancel":"å?–æ¶ˆ","delete":"åˆªé™¤"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"æ‚¨æ˜¯å?¦ç¢ºå®šè¦?åˆªé™¤ï¼Ÿ"}}}}'))
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
Object(n["a"])(JSON.parse('{"ar":{"must_select_a_student_group_first_15c6a3cb":"ÙŠØ¬Ø¨ ØªØ­Ø¯ÙŠØ¯ Ù…Ø¬Ù…ÙˆØ¹Ø© Ø·Ù„Ø§Ø¨ Ø£ÙˆÙ„Ø§Ù‹","remove_selected_attachment_61f81ee4":"Ø¥Ø²Ø§Ù„Ø© Ø§Ù„Ù…Ø±Ù?Ù‚ Ø§Ù„Ù…Ø­Ø¯Ø¯","select_group_to_grade_6df28d80":"Ø­Ø¯Ø¯ Ù…Ø¬Ù…ÙˆØ¹Ø© Ù„Ù„Ø¯Ø±Ø¬Ø©","select_one_8e0af564":"Ø­Ø¯Ø¯ ÙˆØ§Ø­Ø¯Ù‹Ø§","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"ca":{"must_select_a_student_group_first_15c6a3cb":"Primer s\'ha de seleccionar un grup d\'estudiants","remove_selected_attachment_61f81ee4":"Suprimeix el fitxer adjunt seleccionat","select_group_to_grade_6df28d80":"Selecciona el grup per qualificar","select_one_8e0af564":"Seleccioneu-ne un","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"cy":{"must_select_a_student_group_first_15c6a3cb":"Rhaid dewis grÅµp myfyrwyr i ddechrau","remove_selected_attachment_61f81ee4":"Tynnu\'r atodiad dan sylw","select_group_to_grade_6df28d80":"Dewis GrÅµp i\'w Raddio","select_one_8e0af564":"Dewiswch Un","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"da":{"must_select_a_student_group_first_15c6a3cb":"Skal vÃ¦lge en studiegruppe fÃ¸rst","remove_selected_attachment_61f81ee4":"Fjern valgte vedhÃ¦ftede fil","select_group_to_grade_6df28d80":"VÃ¦lg gruppe, der skal have karakter","select_one_8e0af564":"VÃ¦lg en","speedgrader_tm_44688790":"SpeedGrader"},"da-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Skal vÃ¦lge en elevgruppe fÃ¸rst","remove_selected_attachment_61f81ee4":"Fjern valgte vedhÃ¦ftede fil","select_group_to_grade_6df28d80":"VÃ¦lg gruppe, der skal vurderes","select_one_8e0af564":"VÃ¦lg en","speedgrader_tm_44688790":"SpeedGrader"},"de":{"must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewÃ¤hlt werden","remove_selected_attachment_61f81ee4":"Entfernen des ausgewÃ¤hlten Anhangs","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswÃ¤hlen","select_one_8e0af564":"Einen auswÃ¤hlen","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"el":{"select_one_8e0af564":"Î•Ï€Î¹Î»Î­Î¾Ï„Îµ ÎˆÎ½Î±","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"en-AU":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"en-AU-x-unimelb":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"en-CA":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"en-GB":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select one","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"en-GB-x-ukhe":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select one","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"es":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de estudiantes","remove_selected_attachment_61f81ee4":"Eliminar adjunto seleccionado","select_group_to_grade_6df28d80":"Seleccionar grupo para calificar","select_one_8e0af564":"Seleccionar uno","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"fa":{"must_select_a_student_group_first_15c6a3cb":"Ø§Ø¨ØªØ¯Ø§ Ø¨Ø§ÛŒØ¯ ÛŒÚ© Ú¯Ø±ÙˆÙ‡ Ø¯Ø§Ù†Ø´Ø¬ÙˆÛŒÛŒ Ø±Ø§ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯","select_group_to_grade_6df28d80":"Ø§Ù†ØªØ®Ø§Ø¨ Ú¯Ø±ÙˆÙ‡ Ø¨Ø±Ø§ÛŒ Ù†Ù…Ø±Ù‡","select_one_8e0af564":"Ø§Ù†ØªØ®Ø§Ø¨ ÛŒÚ© Ù…ÙˆØ±Ø¯","speedgrader_tm_44688790":"Ø¨Ø±Ù†Ø§Ù…Ù‡ Ù†Ù…Ø±Ù‡ Ú¯Ø°Ø§Ø±ÛŒ Ø³Ø±ÛŒØ¹â„¢"},"fi":{"must_select_a_student_group_first_15c6a3cb":"TÃ¤ytyy valita ensin opiskelijaryhmÃ¤","remove_selected_attachment_61f81ee4":"Poista valittu liite","select_group_to_grade_6df28d80":"Valitse arvioitava ryhmÃ¤","select_one_8e0af564":"Valitse yksi","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"fr":{"must_select_a_student_group_first_15c6a3cb":"Il faut d\'abord sÃ©lectionner un groupe d\'Ã©lÃ¨ves","remove_selected_attachment_61f81ee4":"Supprimer la piÃ¨ce jointe sÃ©lectionnÃ©e","select_group_to_grade_6df28d80":"SÃ©lectionnez un groupe Ã  noter","select_one_8e0af564":"SÃ©lectionner un Ã©lÃ©ment","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"fr-CA":{"must_select_a_student_group_first_15c6a3cb":"Vous devez d\'abord sÃ©lectionner un groupe d\'Ã©tudiants","remove_selected_attachment_61f81ee4":"Retirer la piÃ¨ce jointe sÃ©lectionnÃ©e","select_group_to_grade_6df28d80":"SÃ©lectionner le groupe Ã  classer","select_one_8e0af564":"SÃ©lectionner un Ã©lÃ©ment","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"he":{"select_one_8e0af564":"×‘×—×¨ ×?×—×ª ×”×?×¤×©×¨×•×™×•×ª","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"ht":{"must_select_a_student_group_first_15c6a3cb":"Dwe dabÃ² seleksyone yon gwoup elÃ¨v","remove_selected_attachment_61f81ee4":"Elimine atachman seleksyone a","select_group_to_grade_6df28d80":"Seleksyone Gwoup pou Evalye a","select_one_8e0af564":"Seleksyone Yonn","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"hu":{"select_one_8e0af564":"VÃ¡lasszon egyet","speedgrader_tm_44688790":"GyorsÃ©rtÃ©kelÅ‘"},"hy":{"select_one_8e0af564":"Ô¸Õ¶Õ¿Ö€Õ¥Õ¬ Õ´Õ¥Õ¯Õ¨","speedgrader_tm_44688790":"Â«Ô±Ö€Õ¡Õ£ Õ£Õ¶Õ¡Õ°Õ¡Õ¿Õ´Õ¡Õ¶ Õ°Õ¡Õ´Õ¡Õ¯Õ¡Ö€Õ£â„¢Â»"},"is":{"must_select_a_student_group_first_15c6a3cb":"Velja Ã¾arf nemendahÃ³p fyrst","remove_selected_attachment_61f81ee4":"FjarlÃ¦gja valiÃ° viÃ°hengi","select_group_to_grade_6df28d80":"Veldu hÃ³p til aÃ° gefa einkunnir","select_one_8e0af564":"Velja einn","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"it":{"must_select_a_student_group_first_15c6a3cb":"Ãˆ necessario selezionare prima un gruppo di studenti","remove_selected_attachment_61f81ee4":"Rimuovi allegato selezionato","select_group_to_grade_6df28d80":"Seleziona gruppo a cui assegnare un voto","select_one_8e0af564":"Scegli un\'opzione","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"ja":{"must_select_a_student_group_first_15c6a3cb":"å?—è¬›ç”Ÿã‚°ãƒ«ãƒ¼ãƒ—ã‚’å…ˆã?«é?¸æŠžã?—ã?¦ã??ã? ã?•ã?„","remove_selected_attachment_61f81ee4":"é?¸æŠžã?•ã‚Œã?Ÿæ·»ä»˜æ›¸é¡žã‚’å‰Šé™¤","select_group_to_grade_6df28d80":"æŽ¡ç‚¹ã?™ã‚‹ã‚°ãƒ«ãƒ¼ãƒ—ã‚’é?¸æŠžã?™ã‚‹","select_one_8e0af564":"1 ã?¤ã‚’é?¸æŠž","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"ko":{"select_one_8e0af564":"í•˜ë‚˜ ì„ íƒ?","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"mi":{"must_select_a_student_group_first_15c6a3cb":"Me tÄ«pakohia te Ä?konga rÅ?pu i te tuatahi","remove_selected_attachment_61f81ee4":"Tangohia tÄ“ tÄ?piri kua tÄ«pakohia","select_group_to_grade_6df28d80":"TÄ«pako RÅ?pu ki te KÅ?eke","select_one_8e0af564":"TÄ«pakohia","speedgrader_tm_44688790":"Speedgrader"},"nb":{"must_select_a_student_group_first_15c6a3cb":"Velg en studentgruppe fÃ¸rst","remove_selected_attachment_61f81ee4":"Fjern valgt vedlegg","select_group_to_grade_6df28d80":"Velg gruppe for karaktersetting","select_one_8e0af564":"Velg Ã©n","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"nb-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Velg en elevgruppe fÃ¸rst","remove_selected_attachment_61f81ee4":"Fjern valgt vedlegg","select_group_to_grade_6df28d80":"Velg gruppe for vurdering","select_one_8e0af564":"Velg Ã©n","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"nl":{"must_select_a_student_group_first_15c6a3cb":"Moet eerst een cursistengroep selecteren","remove_selected_attachment_61f81ee4":"Geselecteerde bijlage verwijderen","select_group_to_grade_6df28d80":"Groep selecteren voor beoordeling","select_one_8e0af564":"EÃ©n selecteren","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"nn":{"must_select_a_student_group_first_15c6a3cb":"MÃ¥ fÃ¸rst velje ei studentgruppe","select_group_to_grade_6df28d80":"Vel gruppe Ã¥ vurdere","select_one_8e0af564":"Vel ein","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"pl":{"must_select_a_student_group_first_15c6a3cb":"NaleÅ¼y najpierw wybraÄ‡ grupÄ™ uczestnikÃ³w","remove_selected_attachment_61f81ee4":"UsuÅ„ wybrany zaÅ‚Ä…cznik","select_group_to_grade_6df28d80":"Wybierz grupÄ™ do oceny","select_one_8e0af564":"Wybierz jeden","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"pt":{"must_select_a_student_group_first_15c6a3cb":"Ã‰ necessÃ¡rio selecionar um grupo de alunos primeiro","remove_selected_attachment_61f81ee4":"Retirar o anexo selecionado","select_group_to_grade_6df28d80":"Selecionar grupo para nota","select_one_8e0af564":"Selecionar um","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"pt-BR":{"must_select_a_student_group_first_15c6a3cb":"Deve selecionar um grupo de alunos primeiro","remove_selected_attachment_61f81ee4":"Remover anexo selecionado","select_group_to_grade_6df28d80":"Selecionar grupo para avaliar","select_one_8e0af564":"Selecionar um","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"ru":{"must_select_a_student_group_first_15c6a3cb":"Ð¡Ð½Ð°Ñ‡Ð°Ð»Ð° Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð²Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð³Ñ€ÑƒÐ¿Ð¿Ñƒ Ñ?Ñ‚ÑƒÐ´ÐµÐ½Ñ‚Ð¾Ð²","remove_selected_attachment_61f81ee4":"Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð²Ñ‹Ð±Ñ€Ð°Ð½Ð½Ð¾Ðµ Ð²Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ","select_group_to_grade_6df28d80":"Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð³Ñ€ÑƒÐ¿Ð¿Ñƒ Ð´Ð»Ñ? Ð¾Ñ†ÐµÐ½ÐºÐ¸","select_one_8e0af564":"Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¾Ð´Ð¸Ð½","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"sv":{"must_select_a_student_group_first_15c6a3cb":"Du mÃ¥ste fÃ¶rst vÃ¤lja en studentgrupp","remove_selected_attachment_61f81ee4":"Ta bort valda bilagor","select_group_to_grade_6df28d80":"VÃ¤lj en grupp som ska bedÃ¶mas","select_one_8e0af564":"VÃ¤lj en","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"sv-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Du mÃ¥ste fÃ¶rst vÃ¤lja en elevgrupp","remove_selected_attachment_61f81ee4":"Ta bort valda bilagor","select_group_to_grade_6df28d80":"VÃ¤lj en grupp som ska bedÃ¶mas","select_one_8e0af564":"VÃ¤lj en","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"tr":{"select_one_8e0af564":"Birini SeÃ§iniz","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"uk":{"select_one_8e0af564":"Ð’Ð¸Ð±Ñ€Ð°Ñ‚Ð¸ Ð¾Ð´Ð¸Ð½","speedgrader_tm_44688790":"SpeedGraderâ„¢"},"zh-Hans":{"must_select_a_student_group_first_15c6a3cb":"å¿…é¡»å…ˆé€‰æ‹©ä¸€ä¸ªå­¦ç”Ÿç»„","remove_selected_attachment_61f81ee4":"åˆ é™¤æ‰€é€‰é™„ä»¶","select_group_to_grade_6df28d80":"é€‰æ‹©è¦?è¯„åˆ†çš„ç»„","select_one_8e0af564":"é€‰æ‹©ä¸€ä¸ª","speedgrader_tm_44688790":"å¿«é€Ÿè¯„åˆ†å™¨â„¢"},"zh-Hant":{"must_select_a_student_group_first_15c6a3cb":"å¿…é ˆå…ˆé?¸æ“‡å­¸ç”Ÿç¾¤çµ„","remove_selected_attachment_61f81ee4":"ç§»é™¤æ‰€é?¸çš„é™„ä»¶","select_group_to_grade_6df28d80":"é?¸æ“‡è¦?è©•åˆ†çš„ç¾¤çµ„","select_one_8e0af564":"é?¸æ“‡ä¸€å€‹","speedgrader_tm_44688790":"SpeedGraderâ„¢"}}'))
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
Object(_["a"])(JSON.parse('{"ar":{"user_content_aaf0fb5a":"Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…"},"ca":{"user_content_aaf0fb5a":"Contingut de l\'usuari"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Î ÎµÏ?Î¹ÎµÏ‡ÏŒÎ¼ÎµÎ½Î¿ Î§Ï?Î®ÏƒÏ„Î·"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-AU-x-unimelb":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"en-GB-x-lbs":{"user_content_aaf0fb5a":"User content"},"en-GB-x-ukhe":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"Ù…Ø­ØªÙˆØ§ÛŒ Ú©Ø§Ø±Ø¨Ø±"},"fi":{"user_content_aaf0fb5a":"KÃ¤yttÃ¤jÃ¤n sisÃ¤ltÃ¶"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"×ª×•×›×Ÿ ×ž×©×ª×ž×©"},"ht":{"user_content_aaf0fb5a":"Kontni ItilizatÃ¨"},"hu":{"user_content_aaf0fb5a":"FelhasznÃ¡lÃ³i tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ãƒ¦ãƒ¼ã‚¶ãƒ¼ã‚³ãƒ³ãƒ†ãƒ³ãƒ„"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"ZawartoÅ›Ä‡ uÅ¼ytkownika"},"pt":{"user_content_aaf0fb5a":"ConteÃºdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"ConteÃºdo do UsuÃ¡rio"},"ru":{"user_content_aaf0fb5a":"ÐšÐ¾Ð½Ñ‚ÐµÐ½Ñ‚ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ?"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"AnvÃ¤ndarinnehÃ¥ll"},"sv-x-k12":{"user_content_aaf0fb5a":"AnvÃ¤ndarinnehÃ¥ll"},"tr":{"user_content_aaf0fb5a":"KullanÄ±cÄ± Ä°Ã§eriÄŸi"},"uk":{"user_content_aaf0fb5a":"ÐšÐ¾Ð½Ñ‚ÐµÐ½Ñ‚ ÐºÐ¾Ñ€Ð¸Ñ?Ñ‚ÑƒÐ²Ð°Ñ‡Ð°"},"zh-Hans":{"user_content_aaf0fb5a":"ç”¨æˆ·å†…å®¹"},"zh-Hant":{"user_content_aaf0fb5a":"ä½¿ç”¨è€…å…§å®¹"}}'))
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
Object(l["a"])(JSON.parse('{"ar":{"must_select_a_student_group_first_15c6a3cb":"ÙŠØ¬Ø¨ ØªØ­Ø¯ÙŠØ¯ Ù…Ø¬Ù…ÙˆØ¹Ø© Ø·Ù„Ø§Ø¨ Ø£ÙˆÙ„Ø§Ù‹","select_group_to_grade_6df28d80":"Ø­Ø¯Ø¯ Ù…Ø¬Ù…ÙˆØ¹Ø© Ù„Ù„Ø¯Ø±Ø¬Ø©"},"ca":{"must_select_a_student_group_first_15c6a3cb":"Primer s\'ha de seleccionar un grup d\'estudiants","select_group_to_grade_6df28d80":"Selecciona el grup per qualificar"},"cy":{"must_select_a_student_group_first_15c6a3cb":"Rhaid dewis grÅµp myfyrwyr i ddechrau","select_group_to_grade_6df28d80":"Dewis GrÅµp i\'w Raddio"},"da":{"must_select_a_student_group_first_15c6a3cb":"Skal vÃ¦lge en studiegruppe fÃ¸rst","select_group_to_grade_6df28d80":"VÃ¦lg gruppe, der skal have karakter"},"da-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Skal vÃ¦lge en elevgruppe fÃ¸rst","select_group_to_grade_6df28d80":"VÃ¦lg gruppe, der skal vurderes"},"de":{"must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewÃ¤hlt werden","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswÃ¤hlen"},"en-AU":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-AU-x-unimelb":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-CA":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-GB":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"en-GB-x-ukhe":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","select_group_to_grade_6df28d80":"Select Group to Grade"},"es":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de estudiantes","select_group_to_grade_6df28d80":"Seleccionar grupo para calificar"},"fa":{"must_select_a_student_group_first_15c6a3cb":"Ø§Ø¨ØªØ¯Ø§ Ø¨Ø§ÛŒØ¯ ÛŒÚ© Ú¯Ø±ÙˆÙ‡ Ø¯Ø§Ù†Ø´Ø¬ÙˆÛŒÛŒ Ø±Ø§ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯","select_group_to_grade_6df28d80":"Ø§Ù†ØªØ®Ø§Ø¨ Ú¯Ø±ÙˆÙ‡ Ø¨Ø±Ø§ÛŒ Ù†Ù…Ø±Ù‡"},"fi":{"must_select_a_student_group_first_15c6a3cb":"TÃ¤ytyy valita ensin opiskelijaryhmÃ¤","select_group_to_grade_6df28d80":"Valitse arvioitava ryhmÃ¤"},"fr":{"must_select_a_student_group_first_15c6a3cb":"Il faut d\'abord sÃ©lectionner un groupe d\'Ã©lÃ¨ves","select_group_to_grade_6df28d80":"SÃ©lectionnez un groupe Ã  noter"},"fr-CA":{"must_select_a_student_group_first_15c6a3cb":"Vous devez d\'abord sÃ©lectionner un groupe d\'Ã©tudiants","select_group_to_grade_6df28d80":"SÃ©lectionner le groupe Ã  classer"},"ht":{"must_select_a_student_group_first_15c6a3cb":"Dwe dabÃ² seleksyone yon gwoup elÃ¨v","select_group_to_grade_6df28d80":"Seleksyone Gwoup pou Evalye a"},"is":{"must_select_a_student_group_first_15c6a3cb":"Velja Ã¾arf nemendahÃ³p fyrst","select_group_to_grade_6df28d80":"Veldu hÃ³p til aÃ° gefa einkunnir"},"it":{"must_select_a_student_group_first_15c6a3cb":"Ãˆ necessario selezionare prima un gruppo di studenti","select_group_to_grade_6df28d80":"Seleziona gruppo a cui assegnare un voto"},"ja":{"must_select_a_student_group_first_15c6a3cb":"å?—è¬›ç”Ÿã‚°ãƒ«ãƒ¼ãƒ—ã‚’å…ˆã?«é?¸æŠžã?—ã?¦ã??ã? ã?•ã?„","select_group_to_grade_6df28d80":"æŽ¡ç‚¹ã?™ã‚‹ã‚°ãƒ«ãƒ¼ãƒ—ã‚’é?¸æŠžã?™ã‚‹"},"mi":{"must_select_a_student_group_first_15c6a3cb":"Me tÄ«pakohia te Ä?konga rÅ?pu i te tuatahi","select_group_to_grade_6df28d80":"TÄ«pako RÅ?pu ki te KÅ?eke"},"nb":{"must_select_a_student_group_first_15c6a3cb":"Velg en studentgruppe fÃ¸rst","select_group_to_grade_6df28d80":"Velg gruppe for karaktersetting"},"nb-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Velg en elevgruppe fÃ¸rst","select_group_to_grade_6df28d80":"Velg gruppe for vurdering"},"nl":{"must_select_a_student_group_first_15c6a3cb":"Moet eerst een cursistengroep selecteren","select_group_to_grade_6df28d80":"Groep selecteren voor beoordeling"},"nn":{"must_select_a_student_group_first_15c6a3cb":"MÃ¥ fÃ¸rst velje ei studentgruppe","select_group_to_grade_6df28d80":"Vel gruppe Ã¥ vurdere"},"pl":{"must_select_a_student_group_first_15c6a3cb":"NaleÅ¼y najpierw wybraÄ‡ grupÄ™ uczestnikÃ³w","select_group_to_grade_6df28d80":"Wybierz grupÄ™ do oceny"},"pt":{"must_select_a_student_group_first_15c6a3cb":"Ã‰ necessÃ¡rio selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para nota"},"pt-BR":{"must_select_a_student_group_first_15c6a3cb":"Deve selecionar um grupo de alunos primeiro","select_group_to_grade_6df28d80":"Selecionar grupo para avaliar"},"ru":{"must_select_a_student_group_first_15c6a3cb":"Ð¡Ð½Ð°Ñ‡Ð°Ð»Ð° Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð²Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð³Ñ€ÑƒÐ¿Ð¿Ñƒ Ñ?Ñ‚ÑƒÐ´ÐµÐ½Ñ‚Ð¾Ð²","select_group_to_grade_6df28d80":"Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð³Ñ€ÑƒÐ¿Ð¿Ñƒ Ð´Ð»Ñ? Ð¾Ñ†ÐµÐ½ÐºÐ¸"},"sv":{"must_select_a_student_group_first_15c6a3cb":"Du mÃ¥ste fÃ¶rst vÃ¤lja en studentgrupp","select_group_to_grade_6df28d80":"VÃ¤lj en grupp som ska bedÃ¶mas"},"sv-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Du mÃ¥ste fÃ¶rst vÃ¤lja en elevgrupp","select_group_to_grade_6df28d80":"VÃ¤lj en grupp som ska bedÃ¶mas"},"zh-Hans":{"must_select_a_student_group_first_15c6a3cb":"å¿…é¡»å…ˆé€‰æ‹©ä¸€ä¸ªå­¦ç”Ÿç»„","select_group_to_grade_6df28d80":"é€‰æ‹©è¦?è¯„åˆ†çš„ç»„"},"zh-Hant":{"must_select_a_student_group_first_15c6a3cb":"å¿…é ˆå…ˆé?¸æ“‡å­¸ç”Ÿç¾¤çµ„","select_group_to_grade_6df28d80":"é?¸æ“‡è¦?è©•åˆ†çš„ç¾¤çµ„"}}'))
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