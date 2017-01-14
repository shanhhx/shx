window.onload = function(){
	var product = new Product();
	product.name = "HM休闲服登山包";
	product.buySum = 1000;
	product.normalPrice = "$140";
	product.groupPricePrice = "$120";
	product.description = "棒棒的，棒棒的，登山一流，服务一流，你好，我好，他也好，太棒了，一口气等上珠穆朗玛峰";
	product.images = [{
		small:"images/s11.jpg",
		big:"images/s13.jpg"
	},{
		small:"images/s12.jpg",
		big:"images/s12.jpg"
	},
	{
		small:"images/s13.jpg",
		big:"images/s13.jpg"
	}
	]
	product.bindBasic();
	product.bindDOMImage();
	
	var product1 = new Product();
	product1.name = "休闲服登山包";
	product1.buySum = 1000;
	product1.normalPrice = "110";
	product1.groupPricePrice = "120";
	product1.description = "棒棒的，棒棒的，登山一流，服务一流，你好，我好，他也好，太棒了，一口气等上珠穆朗玛峰";
	product1.images = [{
		small:"images/s11.jpg",
		big:"images/s13.jpg"
	},{
		small:"images/s12.jpg",
		big:"images/s12.jpg"
	},
	{
		small:"images/s13.jpg",
		big:"images/s13.jpg"
	}
	]
	product1.bindBasic();
	product1.bindDOMImage();
	
	
	
	
	var cart = new Cart();
	console.log(cart)
	cart.cartProduct.push(product);
	cart.bindBasic();
	cart.bindList();
	
	$("#btnaddcart").on("click",function(){
		cart.cartProduct.push(product1);
		cart.bindBasic();
		cart.bindList();
	})
	
}


