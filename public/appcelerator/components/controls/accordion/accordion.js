Appcelerator.UI.registerUIComponent("control","accordion",{getAttributes:function(){var A=Appcelerator.Types;return[{name:"theme",optional:true,description:"name of theme to use for this control",type:A.identifier,defaultValue:Appcelerator.UI.UIManager.getDefaultTheme("accordion")},{name:"height",optional:true,description:"height of content data",defaultValue:"100px"},{name:"width",optional:true,description:"width of accordion",defaultValue:"300px"},{name:"speed",optional:true,description:"speed of the accordion",defaultValue:0.5,type:A.number}]},getVersion:function(){return"3.0.0"},getSpecVersion:function(){return 1},open:function(H,D,F,C,A,B,G,E){if(B[0]&&B[0].key=="row"){$MQ("l:accordion."+H+".click",{val:B[0].value})}},getActions:function(){return["open"]},build:function(D,J){var I="accordion_"+J.theme;D.style.width=J.width;Element.addClassName(D,I);var E="";var F=0;for(var H=0,G=D.childNodes.length;H<G;H++){var B=D.childNodes[H];if(B.nodeType==1){E+='<div class="'+I+'_row" on="click then l:accordion.'+D.id+".click[val="+F+']">';E+=' <div id="'+D.id+"_accordion_left_"+F+'" class="'+I+'_row_left" on="l:accordion.'+D.id+".click[val="+F+"] then add[class="+I+"_row_left_active] else remove[class="+I+'_row_left_active]"></div>';E+=' <div id="'+D.id+"_accordion_middle_"+F+'" class="'+I+'_row_middle" style="width:'+J.width+'"  on="l:accordion.'+D.id+".click[val="+F+"] then add[class="+I+"_row_middle_active] else remove[class="+I+'_row_middle_active]">';if(B.getAttribute("title")){E+=B.getAttribute("title")}E+='</div><div id="'+D.id+"_accordion_right_"+F+'" class="'+I+'_row_right"  on="l:accordion.'+D.id+".click[val="+F+"] then add[class="+I+"_row_right_active] else remove[class="+I+'_row_right_active]"></div></div>';E+='<div class="'+I+'_row_data" on="l:accordion.'+D.id+".click[val="+F+"] then effect[Morph,style=height:"+J.height+",duration:"+J.speed+"]";E+=" else effect[Morph,style=height:0px,duration:"+J.speed+']" style="width:'+J.width+'">';if(Appcelerator.Browser.isIE){E+='<div on="l:accordion.'+D.id+".click[val="+F+"] then effect[Appear] after "+J.speed+'s else hide" style="display:none">'+B.outerHTML+"</div>"}else{E+='<div on="l:accordion.'+D.id+".click[val="+F+"] then effect[Appear] after "+J.speed+'s else hide" style="display:none">'+Appcelerator.Util.Dom.toXML(B,true,Appcelerator.Compiler.getTagname(B))+"</div>"}E+="</div>";F++}}var A="accordion_container_"+D.id;D.innerHTML='<div id="'+A+'" class="'+I+'_container">'+E+"</div>";if(Appcelerator.Browser.isIE6){for(var C=0;C<F;C++){$(D.id+"_accordion_left_"+C).addBehavior(Appcelerator.Core.getModuleCommonDirectory()+"/images/appcelerator/iepngfix.htc");$(D.id+"_accordion_middle_"+C).addBehavior(Appcelerator.Core.getModuleCommonDirectory()+"/images/appcelerator/iepngfix.htc");$(D.id+"_accordion_right_"+C).addBehavior(Appcelerator.Core.getModuleCommonDirectory()+"/images/appcelerator/iepngfix.htc")}}Appcelerator.Compiler.dynamicCompile($(A));Appcelerator.Core.loadTheme("control","accordion",J.theme,D,J)}});