/**
 * 作者：传智播客教育集团
 * 开发日期：2015/12/25
 * 描述：通用框架
 * 版权所有 违者必究
 */

//定义一个对象 - 名字是$
var $$ = function() {};
//第二种写法
$$.prototype = {
    $id:function(id){
        return document.getElementById(id)
    },
    //去除左边空格
    ltrim:function(){
        return str.replace(/(^\s*)/g,'');
    },
    //去除右边空格
    rtrim:function(){
        return str.replace(/(\s*$)/g,'');
    },
    //去除空格
    trim:function(){
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },

    //tab
    tab:function(id) {
    //如何获取某个父元素下面的子元素
    var box = document.getElementById(id);
    var spans = box.getElementsByTagName('span');
    var lis = box.getElementsByTagName('li');


    //两步走
    //第一步: 先把上半部分实现
    //群体绑定事件  -- 对所有的span绑定事件
    //群体绑定事件
    for(var i=0;i<spans.length;i++) {
        //相亲法则  -- 给男一号一个代号  --  怎么给 -- 自定义属性
        spans[i].index=i;
        spans[i].onmouseover = function() {
            //排他思想 --  将所有的span置为默认状态  --- 然后再将当前鼠标移上的span置为class -- select
            for(var i=0;i<spans.length;i++) {
                spans[i].className='';
                lis[i].className='';
            }
            this.className='select';
            lis[this.index].className='select';
        }
    }

},
    //简单的数据绑定formateString
    formateString:function(str, data){
    return str.replace(/@\((\w+)\)/g, function(match, key){
        return typeof data[key] === "undefined" ? '' : data[key]});
},
    //arttemplate语法
    //封装成一个函数
    bindTemplate:function (tempalteId,data){
    var html = template(tempalteId, data);
    return html;
    },
    artTemplate:function (str,data){
        var render = template.compile(str);
        return render(data)
    },
    //获取URL查询字符串参数值的通用函数
     queryString: function(){
        var str = window.location.search.substring(1);//获取查询字符串，即"id=1&name=location"的部分
        var arr = str.split("&");//以&符号为界把查询字符串分割成数组
        var json = {};//定义一个临时对象
        for(var i=0;i<arr.length;i++)//遍历数组
        {
            var c = arr[i].indexOf("=");//获取每个参数中的等号小标的位置
            if(c==-1) continue;//如果没有发现测跳到下一次循环继续操作
            var d = arr[i].substring(0,c);//截取等号前的参数名称，这里分别是id和name
            var e = arr[i].substring(c+1);//截取等号后的参数值
            json[d] = e;//以名/值对的形式存储在对象中
        }
        return json;//返回对象
    },
      myAjax:function(URL,fn){
        var xhr = createXHR();	
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                    fn(xhr.responseText);
                }else{
                    alert("������ļ���");
                }
            }
        };
        xhr.open("get",URL,true);
        xhr.send();

        
        function createXHR() {
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"
                        ],
                        i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (ex) {
                            //skip
                        }
                    }
                }

                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        }
    }
}
//在框架中实例化，这样外面使用的使用就不用实例化了
$$ = new $$();

