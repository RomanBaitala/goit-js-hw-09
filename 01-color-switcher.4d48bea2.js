const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0;let n=null;function o(t,e){e.disabled=!0,t.disabled=!1}t.addEventListener("click",(function(){n=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o(e,t)})),e.addEventListener("click",(function(){clearInterval(n),o(t,e)}));
//# sourceMappingURL=01-color-switcher.4d48bea2.js.map
