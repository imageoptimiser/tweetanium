Appcelerator.UI.registerUIComponent("layout","grid",{getAttributes:function(){var A=Appcelerator.Types;return[{name:"size",optional:true,description:"number of columns",defaultValue:"12",type:A.enumeration("12","16")}]},getVersion:function(){return"1.0"},getSpecVersion:function(){return 1},processChildren:function(D,I,C){var A=D.childNodes;var G=0;var F=0;for(var E=0;E<A.length;E++){if(A[E].nodeType==1&&A[E].nodeName.toUpperCase()=="DIV"){if(!A[E].getAttribute("cols")&&C==true){A[E].style.marginBottom="20px";if(A[E].parentNode.style){A[E].parentNode.style.marginBottom="0px"}if(Appcelerator.Browser.isIE&&D.parentNode.style){D.parentNode.style.marginBottom="0px"}continue}G++;A[E].style.display="inline";if(Appcelerator.Browser.isIE){A[E].style.styleFloat="left"}else{A[E].style.cssFloat="left"}if(C==true&&G==1){A[E].style.marginLeft="0px";A[E].style.marginRight="10px"}else{A[E].style.marginLeft="10px";A[E].style.marginRight="10px";A[E].style.marginBottom="20px"}var B=null;var H=A[E].getAttribute("cols");switch(H){case"1":B=(I=="12")?"60px":"40px";break;case"2":B=(I=="12")?"140px":"100px";break;case"3":B=(I=="12")?"220px":"160px";break;case"4":B=(I=="12")?"300px":"220px";break;case"5":B=(I=="12")?"380px":"280px";break;case"6":B=(I=="12")?"460px":"340px";break;case"7":B=(I=="12")?"540px":"400px";break;case"8":B=(I=="12")?"620px":"460px";break;case"9":B=(I=="12")?"700px":"520px";break;case"10":B=(I=="12")?"780px":"580px";break;case"11":B=(I=="12")?"860px":"640px";break;case"12":B=(I=="12")?"940px":"700px";break;case"13":B="760px";break;case"14":B="820px";break;case"15":B="880px";break;case"16":B="940px";break;default:B="100%";break}A[E].style.width=B;F=E;this.processChildren(A[E],I,true)}}if(C==true&&A[F]&&A[F].style&&A[F].getAttribute("cols")){A[F].style.marginRight="0px";A[F].style.marginLeft="10px"}},build:function(C,B){C.style.marginLeft="auto";C.style.marginRight="auto";if(Appcelerator.Browser.isIE6){C.style.width="980px"}else{C.style.width="960px"}if(Appcelerator.Browser.isIE){C.style.marginBottom="20px"}this.processChildren(C,B.size,false);var A=document.createElement("div");A.style.clear="both";new Insertion.After(C,A)}});