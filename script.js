javascript:!function(undefined){
    let url=location.href;if("https://www.amazon."==url.match(/http.{8,}amazon./))
    {
    let domain=url.match(/www.amazon\.\w{2,3}\.\w{2}\/|www.amazon\.\w{2,3}\//);
    let id=url.match(/dp\/\w{3,}|gp\/product\/\w{3,}./);if(id!=null){alert("https://"+domain+id);
    }
    }
    if("aliexpress.com"==url.match(/aliexpress.com/)){let id=url.match(/.item.{2,}.html/);if(id!=null){alert("https://www.aliexpress.com"+id);
    }
    }
    }();