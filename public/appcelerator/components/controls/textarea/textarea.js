Appcelerator.UI.registerUIComponent("control","textarea",{getAttributes:function(){var A=Appcelerator.Types;return[{name:"theme",optional:true,description:"name of theme to use for this control",type:A.identifier}]},getVersion:function(){return"3.0.0"},getSpecVersion:function(){return 1},build:function(C,A){var D=A.theme||Appcelerator.UI.UIManager.getDefaultTheme("textarea");Element.addClassName(C,"textarea_"+D);var F=document.createElement("img");var B=Appcelerator.Core.getModuleCommonDirectory()+"/images/appcelerator/blank.gif";F.src=B;F.className="textarea_"+D+"_left";new Insertion.Before(C,F);var E=document.createElement("img");E.src=B;E.className="textarea_"+D+"_right";new Insertion.After(C,E);if(Appcelerator.Browser.isIE6){F.addBehavior(Appcelerator.Core.getModuleCommonDirectory()+"/images/appcelerator/iepngfix.htc");E.addBehavior(Appcelerator.Core.getModuleCommonDirectory()+"/images/appcelerator/iepngfix.htc")}Appcelerator.Core.loadTheme("control","textarea",D,C,A)}});