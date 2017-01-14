////产品属性
//
//var Product = Class.extend({
//	init:function(){
//		this.name = "";
//		this.description = ""//描述
//		this.normalPrice = 140;//原价
//		this.groupPrice = 120 //团购价格
//		this.buySum = 100;
//		this.images = [
//		{small:"",big:""},
//		{small:"",big:""},
//		{small:"",big:""},
//		]
//	},
//	bindDOMImage:function(){
//		//用artTempllate
//		var str = "";
//			str+="{{each images as value i}}"
//			str+="<li>"
//			str+=' <img class="etalage_thumb_image" src="{{value.small}}"  style = "display ="inline"  width = 300px; height = 400px" /> '
//			str+=' <img class="etalage_source_image" src="{{value.big}}"  style = "display ="block" width = 86px; height = 115px"  /> '
//			str+='</li>'
//			str+="{{/each}}"
//		$("#etalage").html($$.artTemplate(str,this));
//		$('#etalage').etalage({
//          thumb_image_width: 300,
//          thumb_image_height: 400,
//
//          show_hint: true,
//          click_callback: function(image_anchor, instance_id){
//              alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
//          }
//      });
//      // This is for the dropdown list example:
//      $('.dropdownlist').change(function(){
//          etalage_show( $(this).find('option:selected').attr('class') );
//      });
//	},
//	bindBasic:function(){
//		$("#pname").html(this.name);
//		$("#buyCount").html(this.buySum);
//		$("#price").html(this.normalPrice);
//		$("#groupPrice").html(this.groupPrice);
//		$("#description").html(this.description);
//		
//	}
//	
//	
//})
//




function Product(){
	
	this.name = "";
	this.description = ""//描述
	this.normalPrice = 140;//原价
	this.groupPrice = 120 //团购价格
	this.buySum = 100;
	this.images = [
	{small:"",big:""},
	{small:"",big:""},
	{small:"",big:""},
	]
	
}
//产品方法
Product.prototype = {
	buy:{},
	//图片初始化
	bindDOMImage:function(){
		//用artTempllate
		var str = "";
			str+="{{each images as value i}}"
			str+="<li>"
			str+=' <img class="etalage_thumb_image" src="{{value.small}}"  style = "display ="inline"  width = 300px; height = 400px" /> '
			str+=' <img class="etalage_source_image" src="{{value.big}}"  style = "display ="block" width = 86px; height = 115px"  /> '
			str+='</li>'
			str+="{{/each}}"
		$("#etalage").html($$.artTemplate(str,this));
		
		
		
//		var str = "";
//		var html = "";
//			str+="<li>"
//			str+=' <img class="etalage_thumb_image" src="@(small)"  style = "display ="inline"  width = 300px; height = 400px" /> '
//			str+=' <img class="etalage_source_image" src="@(big)"  style = "display ="block" width = 86px; height = 115px"  /> '
//			str+='</li>'
//			for(var i = 0; i < this.images.length;i++){
//				html+=$$.formateString(str,this.images[i])
//			}
//		$("#etalage").html(html);
		
		
//		for (var i = 0; i < this.images.length;i++) {
//			str+="<li>"
//			str+=' <img class="etalage_thumb_image" src="'+this.images[i].big+'"  style = "display ="inline"  width = 300px; height = 400px" /> '
//			str+=' <img class="etalage_source_image" src="'+this.images[i].small+'"  style = "display ="block" width = 86px; height = 115px"  /> '
//			str+='</li>'
//		}
//		$("#etalage").html(str);
		
		$('#etalage').etalage({
            thumb_image_width: 300,
            thumb_image_height: 400,

            show_hint: true,
            click_callback: function(image_anchor, instance_id){
                alert('Callback example:\nYou clicked on an image with the anchor: "'+image_anchor+'"\n(in Etalage instance: "'+instance_id+'")');
            }
        });
        // This is for the dropdown list example:
        $('.dropdownlist').change(function(){
            etalage_show( $(this).find('option:selected').attr('class') );
        });
	},
	bindBasic:function(){
		$("#pname").html(this.name);
		$("#buyCount").html(this.buySum);
		$("#price").html(this.normalPrice);
		$("#groupPrice").html(this.groupPrice);
		$("#description").html(this.description);
		
	}
	
}
