Appcelerator.UI.registerUIComponent("behavior","resizable",{getAttributes:function(){var A=Appcelerator.Types;return[]},getVersion:function(){return"3.0.0"},getSpecVersion:function(){return 1},build:function(B,A){A.resize=function(E){var D=B.resizeListeners;if(D&&D.length>0){for(var F=0;F<D.length;F++){var C=D[F];C.onResize(E)}}};B.resizable=new Resizeable(B.id,A);Appcelerator.Compiler.addTrash(B,function(){B.resizable.destroy()})}});