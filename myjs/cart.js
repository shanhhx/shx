function Cart(){
	this.cartSum = 0;
	this.cartProduct = [];
	this.allPrice = 2000
}
Cart.prototype = {
	bindBasic:function(){
		$(".cartsum").html(this.getSum());
		$("#cartprice").html(this.getAllPrice());
	},
	bindList:function(){
		var str = "";
		for(var i = 0; i<this.cartProduct.length;i++){
			str+='<div class="cart_box">'
			str+='<div class="message">'
			str+='<div class="alert-close"> </div>'
				str+='<div class="list_img"><img src="images/1.jpg" class="img-responsive" alt=""/></div>'
				str+='<div class="list_desc"><h4><a href="#">'+this.cartProduct[i].name+'</a></h4>1 x<span class="actual"> '+this.cartProduct[i].groupPrice+'</span></div>';
					str+=' <div class="clearfix"></div>';
				str+='</div>'
			str+=' </div>'
		}
	$(".shopping_cart").html(str);
	},
	getSum:function(){
		return  this.cartSum = this.cartProduct.length; 
	},
	getAllPrice:function(){
		var allPrice = 0;
		for(len=0;len<this.cartProduct.length;len++){
			allPrice += this.cartProduct[len].groupPrice;
		}
		return allPrice;
	}
	
}
