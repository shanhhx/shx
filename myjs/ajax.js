$(document).ready(function(){
	$$.myAjax("http://127.0.0.1/Single/data/product.json",function(e){
		
		var json = JSON.parse(e);
		
		var product = transformProduct(json);
		console.log(product);
		product.bindBasic();
		product.bindDOMImage();
		
	})
	
	$$.myAjax("http://127.0.0.1/Single/data/cart.json",function(e){
		
		var json = JSON.parse(e);
		
		var car = transformCart(json);
//		console.log(product);
		car.bindBasic();
		car.bindList();
		
	})
})
	function transformProduct(data){
		var product = new Product();
	
		product.name = data.name;
		product.description = data.description;
		product.normalPrice = data.price;
		product.groupPrice = data.youhuijia;
		product.buySum = data.sum;
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
		return product;
		
	}
		
    function transformCart(data){
    	var car = new Cart();
    	car.cartSum = data.sum;
    	car.cartProduct = data.products;
    	car.allPrice = data.sumprice;
    	return car;
    }

	
