$(".highlight").wrap("<div class='code-wrapper' style='position:relative'></div>"),window,document,function(){var i="";i+='<button class="btn-copy" data-clipboard-snippet="">',i+='  <i class="fa fa-clipboard"></i><span>复制</span>',i+="</button>",$(".code-wrapper .highlight table").before('<button class="btn-copy" data-clipboard-snippet="">  <i class="fa fa-clipboard"></i><span>复制</span></button>');i=new ClipboardJS(".btn-copy",{target:function(i){return i.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.nextElementSibling}});i.on("success",function(i){i.trigger.innerHTML="<i class='fa fa-clipboard'></i><span>复制成功</span>",setTimeout(function(){i.trigger.innerHTML="<i class='fa fa-clipboard'></i><span>复制</span>"},1e3),i.clearSelection()}),i.on("error",function(i){i.trigger.innerHTML="<i class='fa fa-clipboard'></i><span>复制失败</span>",setTimeout(function(){i.trigger.innerHTML="<i class='fa fa-clipboard'></i><span>复制</span>"},1e3),i.clearSelection()})}();