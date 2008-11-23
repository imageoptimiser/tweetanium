Appcelerator.UI.registerUIComponent("behavior","rounded",{getAttributes:function(){var A=Appcelerator.Types;return[{name:"background-color",optional:true,description:"container color for rounded ",defaultValue:"#dddddd"},{name:"width",optional:true,description:"container width for rounded ",defaultValue:"auto"},{name:"height",optional:true,description:"container height for rounded ",defaultValue:"auto"},{name:"tail",optional:true,description:"tail position ",defaultValue:"",type:A.enumeration("lt","lb","rt","rb","bl","br")},{name:"corners",optional:true,description:"round top corners ",defaultValue:"top bottom"}]},getVersion:function(){return"1.0"},getSpecVersion:function(){return 1},build:function(D,I){var F=D.innerHTML;D.innerHTML="";var B=false;var H=false;var A=false;var E=false;var G=I.corners.split(" ");for(var C=0;C<G.length;C++){if(G[C]=="top"){B=true;H=true}if(G[C]=="bottom"){E=true;A=true}if(G[C]=="tl"){B=true}if(G[C]=="tr"){H=true}if(G[C]=="bl"){E=true}if(G[C]=="br"){A=true}}for(var C=1;C<=4;C++){this._roundContent(D,C,I["background-color"],B,H)}D.innerHTML+='<div style="padding-left:10px;padding-right:10px;background-color:'+I["background-color"]+";height:"+I.height+'">'+F+"</div>";D.style.height=I.height;D.style.width=I.width;D.style.position="relative";D.style.marginBottom="15px";D.style.marginLeft="5px";D.style.marginRight="5px";if(Appcelerator.Browser.isIE&&I.width=="auto"){D.style.width="220px"}Appcelerator.UI.addElementUIDependency(D,"behavior","rounded","behavior","shadow",function(J){if(Appcelerator.Browser.isIE6){J.style.marginLeft="-3px";J.style.marginBottom="1px";J.style.marginRight="1px"}else{J.style.marginRight="-1px";J.style.marginBottom=(I.height=="auto")?"0px":"9px";J.style.marginLeft="0px"}if(Appcelerator.Browser.isGecko&&I.width=="auto"){J.style.width="220px"}});if(I.tail&&I.tail.startsWith("l")){D.style.marginLeft="15px"}if(I.tail&&I.tail.startsWith("r")){D.style.marginRight="15px"}if(I.tail&&I.tail.startsWith("b")){D.style.marginBottom="30px"}if(Appcelerator.Browser.isIE){if(D.parentNode&&Element.hasClassName(D.parentNode,"panel_body")){D.style.marginBottom="0px"}}for(var C=4;C>0;C--){this._roundContent(D,C,I["background-color"],E,A)}if(I.tail!=""){this._buildTail(D,I["background-color"],I.tail,I.height)}},_buildTail:function(D,E,B,A){var C=null;if(Appcelerator.Browser.isIE6){C={lt:{value:"top:20px;left:-13px;"},lb:{value:"bottom:20px;left:-13px;"},rt:{value:"top:20px;right:-13px;"},rb:{value:"bottom:20px;right:-13px;"},bl:{value:"bottom:-20px;left:20px;"},br:{value:"bottom:-20px;right:20px;"}}}else{C={lt:{value:"top:20px;left:-19px;"},lb:{value:"bottom:10px;left:-19px;"},rt:{value:"top:20px;right:-18px;"},rb:{value:"bottom:10px;right:-18px;"},bl:{value:"bottom:-28px;left:20px;"},br:{value:"bottom:-29px;right:20px;"}}}if(A=="auto"){if(Appcelerator.Browser.isIE6){C.bl.value="bottom:-26px;left:20px;";C.br.value="bottom:-26px;right:20px;";C.lt.value="top:9px;left:-11px;";C.rt.value="top:9px;right:-11px;"}else{C.bl.value="bottom:-18px;left:20px;";C.br.value="bottom:-19px;right:20px;";C.lt.value="top:9px;left:-19px;";C.rt.value="top:9px;right:-18px;"}}var G='<div style="position:absolute;'+C[B].value+'display:block;">';if(B.startsWith("r")||B=="bl"){var H=18;if(Appcelerator.Browser.isIE6){H=13}for(var F=H;F>0;F--){G+='<div style="height:1px;font-size:0pt;width:'+F+"px;background-color:"+E+';"></div>'}}else{var H=19;for(var F=0;F<H;F++){G+='<div style="height:1px;font-size:0pt;width:'+(H-F)+"px;margin-left:"+F+"px;background-color:"+E+';"></div>'}}G+="</div>";D.innerHTML+=G},_roundContent:function(B,E,C,D,F){var A=document.createElement("b");if(E==1){if(D){A.style.marginLeft="5px"}if(F){A.style.marginRight="5px"}A.style.height="1px"}if(E==2){if(D){A.style.marginLeft="3px"}if(F){A.style.marginRight="3px"}A.style.height="1px"}if(E==3){if(D){A.style.marginLeft="2px"}if(F){A.style.marginRight="2px"}A.style.height="1px"}if(E==4){if(D){A.style.marginLeft="1px"}if(F){A.style.marginRight="1px"}A.style.height="2px"}A.style.overflow="hidden";A.style.display="block";A.style.backgroundColor=C;A.style.fontSize="0px";B.appendChild(A)}});