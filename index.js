var fuit1 = {
	image: "image/Nho.png",
	name: "Nho mỹ",
	price: "120000"
}
var fuit2 = {
	image: "image/tao.png",
	name: "Táo Mỹ",
	price: "200000"
}
var fuit3 = {
	image: "image/cam.png",
	name: "Cam Mỹ",
	price: "300000"
}
var fuit4 = {
	image: "image/chuoi.png",
	name: "Chuối",
	price: "350000"
}

var vegetable1 = {
	image: "image/cachua.png",
	name: "Cà chua",
	price: "20000"
}
var vegetable2 = {
	image: "image/carot.png",
	name: "Cà rốt",
	price: "25000"
}
var vegetable3 = {
	image: "image/khoaitay.png",
	name: "Khoai tây",
	price: "30000"
}
var vegetable4 = {
	image: "image/ot.png",
	name: "Ớt chuông",
	price: "50000"
}

var food1 = {
	image: "image/thitbo.png",
	name: "Thịt bò",
	price: "220000"
}
var food2 = {
	image: "image/cangu.png",
	name: "Cá ngừ",
	price: "200000"
}
var food3 = {
	image: "image/ga.png",
	name: "Thịt gà",
	price: "100000"
}
var food4 = {
	image: "image/so.png",
	name: "Sò",
	price: "350000"
}
var convenience1 = {
	image: "image/xucxich.png",
	name: "Xúc xích",
	price: "220000"
}
var convenience2 = {
	image: "image/chaca.png",
	name: "Chả cá",
	price: "200000"
}
var convenience3 = {
	image: "image/nem.png",
	name: "Nem",
	price: "100000"
}
var convenience4 = {
	image: "image/chagio.png",
	name: "Chả giò",
	price: "350000"
}
var products = [vegetable1,vegetable2,vegetable3,vegetable4,fuit1,fuit2,fuit3,fuit4,food1,food2,food3,food4,convenience1,convenience2,convenience3,convenience4];
var fruits = [fuit1,fuit2,fuit3,fuit4];
var vegetables = [vegetable1,vegetable2,vegetable3,vegetable4];
var foods = [food1,food2,food3,food4];
var conveniences = [convenience1,convenience2,convenience3,convenience4]
displayProduct();
var cart = [];
var find = [];
function list_Vegetable(){
	document.getElementById("vegetable").innerHTML = "";
	var vegetable = document.getElementById('vegetable');
	for (var i = 0; i < vegetables.length; i++) {
		var line = document.createElement("div");
		var prName = document.createElement("b");
			prName.innerText = vegetables[i].name;
		var prPrice = document.createElement("p");
			prPrice.innerText = "Giá: "+ vegetables[i].price +"/kg";
		var prImage = document.createElement("img");
			prImage.src= vegetables[i].image;
			prImage.className = "image";
		var btAdd = document.createElement("button");
			btAdd.innerText = "Đặt mua";
			btAdd.onclick = function(arg){
				return function(){
					var iName = vegetables[arg].name;
					var exist = -1;
					for (var j = 0; j < cart.length; j++) {
						if(cart[j].name == iName){
							exist = j;
						}
					}
					if(exist != -1){
						cart[exist].quantity += 1;
					}
					else {
						cart.push({
							name: vegetables[arg].name,
							image: vegetables[arg].image,
							price: vegetables[arg].price,
							quantity: 1
						})
					}
				document.getElementById("containerCart").innerHTML = "";
				}
			}(i);
		line.appendChild(prImage);
		line.appendChild(prName);
		line.appendChild(prPrice);
		line.appendChild(btAdd);
		vegetable.appendChild(line);
		vegetable.className = "line";
		line.className = "border-Pro";
	}		
	document.getElementById("fruit").style.display = "none";
	document.getElementById("vegetable").style.display = "grid";
	document.getElementById("food").style.display = "none";
	document.getElementById("container").style.display = "none";
	document.getElementById("containerCart").style.display = "none";
	document.getElementById("convenience").style.display = "none";
}
function list_Fruits(){
	document.getElementById("fruit").innerHTML = "";
	var fruit = document.getElementById('fruit');
	for (var i = 0; i < fruits.length; i++) {
			var line = document.createElement("div");
		var prName = document.createElement("b");
			prName.innerText = fruits[i].name;
		var prPrice = document.createElement("p");
			prPrice.innerText = "Giá: "+ fruits[i].price +"/kg";
		var prImage = document.createElement("img");
			prImage.src= fruits[i].image;
			prImage.className = "image";
		var btAdd = document.createElement("button");
			btAdd.innerText = "Đặt mua";
			btAdd.onclick = function(arg){
				return function(){
					var iName = fruits[arg].name;
					var exist = -1;
					for (var j = 0; j < cart.length; j++) {
						if(cart[j].name == iName){
							exist = j;
						}
					}
					if(exist != -1){
						cart[exist].quantity += 1;
					}
					else {
						cart.push({
							name: fruits[arg].name,
							image: fruits[arg].image,
							price: fruits[arg].price,
							quantity: 1
						})
					}
				document.getElementById("containerCart").innerHTML = "";
				}
			}(i);
		line.appendChild(prImage);
		line.appendChild(prName);
		line.appendChild(prPrice);
		line.appendChild(btAdd);
		fruit.appendChild(line);
		fruit.className = "line";
		line.className = "border-Pro";
	}		
	document.getElementById("fruit").style.display = "grid";
	document.getElementById("vegetable").style.display = "none";
	document.getElementById("food").style.display = "none";
	document.getElementById("convenience").style.display = "none";
	document.getElementById("container").style.display = "none";
	document.getElementById("containerCart").style.display = "none";
}
function list_Foods(){
	document.getElementById("food").innerHTML = "";
	var food = document.getElementById('food');
	for (var i = 0; i < foods.length; i++) {
		var line = document.createElement("div");
		var prName = document.createElement("b");
			prName.innerText = foods[i].name;
		var prPrice = document.createElement("p");
			prPrice.innerText = "Giá: "+ foods[i].price + "/kg";
		var prImage = document.createElement("img");
			prImage.src= foods[i].image;
			prImage.className = "image";
		var btAdd = document.createElement("button");
			btAdd.innerText = "Đặt mua";
			btAdd.onclick = function(arg){
				return function(){
					var iName = foods[arg].name;
					var exist = -1;
					for (var j = 0; j < cart.length; j++) {
						if(cart[j].name == iName){
							exist = j;
						}
					}
					if(exist != -1){
						cart[exist].quantity += 1;
					}
					else {
						cart.push({
							name: foods[arg].name,
							image: foods[arg].image,
							price: foods[arg].price,
							quantity: 1
						})
					}
				document.getElementById("containerCart").innerHTML = "";
				}
			}(i);
		line.appendChild(prImage);
		line.appendChild(prName);
		line.appendChild(prPrice);
		line.appendChild(btAdd);
		food.appendChild(line);
		food.className = "line";
		line.className = "border-Pro";
	}		
	document.getElementById("fruit").style.display = "none";
	document.getElementById("vegetable").style.display = "none";
	document.getElementById("food").style.display = "grid";
	document.getElementById("convenience").style.display = "none";
	document.getElementById("container").style.display = "none";
	document.getElementById("containerCart").style.display = "none";
}
function list_Convenience(){
	document.getElementById("convenience").innerHTML = "";
	var convenience = document.getElementById('convenience');
	for (var i = 0; i < conveniences.length; i++) {
			var line = document.createElement("div");
		var prName = document.createElement("b");
			prName.innerText = conveniences[i].name;
		var prPrice = document.createElement("p");
			prPrice.innerText = "Giá: "+ conveniences[i].price +"/kg";
		var prImage = document.createElement("img");
			prImage.src= conveniences[i].image;
			prImage.className = "image";
		var btAdd = document.createElement("button");
			btAdd.innerText = "Đặt mua";
			btAdd.onclick = function(arg){
				return function(){
					var iName = conveniences[arg].name;
					var exist = -1;
					for (var j = 0; j < cart.length; j++) {
						if(cart[j].name == iName){
							exist = j;
						}
					}
					if(exist != -1){
						cart[exist].quantity += 1;
					}
					else {
						cart.push({
							name: conveniences[arg].name,
							image: conveniences[arg].image,
							price: conveniences[arg].price,
							quantity: 1
						})
					}
				document.getElementById("containerCart").innerHTML = "";
				}
			}(i);
		line.appendChild(prImage);
		line.appendChild(prName);
		line.appendChild(prPrice);
		line.appendChild(btAdd);
		convenience.appendChild(line);
		convenience.className = "line";
		line.className = "border-Pro";
	}		
	document.getElementById("fruit").style.display = "none";
	document.getElementById("vegetable").style.display = "none";
	document.getElementById("convenience").style.display = "grid";
	document.getElementById("food").style.display = "none";
	document.getElementById("container").style.display = "none";
	document.getElementById("containerCart").style.display = "none";
}
function displayProduct(){
	var container = document.getElementById('container');
	for (var i = 0; i < products.length; i++) {
		var line = document.createElement("div");
		var prName = document.createElement("b");
			prName.innerText = products[i].name;
			prName.className = "styles";
		var prPrice = document.createElement("p");
			prPrice.innerText = "Giá: "+ products[i].price + "/kg";
			prPrice.className = "styles";
		var prImage = document.createElement("img");
			prImage.src= products[i].image;
			prImage.className = "image";
			prName.className = "styles";
		var btAdd = document.createElement("button");
			btAdd.innerText = "Đặt mua";
			btAdd.className = "styles";
			btAdd.onclick = function(arg){
				return function(){
					var iName = products[arg].name;
					var exist = -1;
					for (var j = 0; j < cart.length; j++) {
						if(cart[j].name == iName){
							exist = j;
						}
					}
					if(exist != -1){
						cart[exist].quantity += 1;
					}
					else {
						cart.push({
							name: products[arg].name,
							image: products[arg].image,
							price: products[arg].price,
							quantity: 1
						})
					}
				document.getElementById("containerCart").innerHTML = "";
				}
			}(i);
		line.appendChild(prImage);
		line.appendChild(prName);
		line.appendChild(prPrice);
		line.appendChild(btAdd);
		container.appendChild(line);
		container.className = "line";
		line.className = "border-Pro";
	}
	document.getElementById("sum").style.display = "none";
	document.getElementById("container").style.display = "grid";
	document.getElementById("containerCart").style.display = "none";
}
function displayCart(){
	document.getElementById("containerCart").innerHTML = "";
	var containerCart = document.getElementById('containerCart');
		for (var i = 0; i < cart.length;  i++) {
			var line = document.createElement("div");

			var prName = document.createElement("b");
				prName.innerText = cart[i].name;

			var prPrice = document.createElement("p");
				prPrice.innerText = cart[i].price;

			var quantity = document.createElement("p");
				quantity.innerText = "Số lượng: " + cart[i].quantity;

			var prImage = document.createElement("img");
				prImage.src= cart[i].image;
				prImage.className = "image";

			var btDelete = document.createElement("button");
				btDelete.innerText = "Xóa";
				btDelete.onclick = function(ar){
					return function(){
						cart.splice(ar,1);
						document.getElementById("containerCart").innerHTML = "";
						displayCart();
					}
				}(i);
		line.appendChild(prImage);
		line.appendChild(prName);
		line.appendChild(prPrice);
		line.appendChild(quantity);
		line.appendChild(btDelete);
		line.className = "line";
		containerCart.appendChild(line);
	}	
		var line1 = document.createElement("div");
		var btSum = document.createElement("button");
			btSum.innerText = "Tổng";
			line1.appendChild(btSum);
			sumPrice();
			btSum.className = "border-info";
			btSum.onclick = function(){
				sumPrice();
			};
		var line2 = document.createElement("div");
		var btbuy = document.createElement("button");
			btbuy.innerText = "Mua hàng";
			line2.appendChild(btbuy);
			btbuy.className = "border-info";
			btbuy.onclick = function(){
				Info_Cus();
			};
		containerCart.appendChild(line1);
		containerCart.appendChild(line2);
	document.getElementById("container").style.display = "none";
	document.getElementById("vegetable").style.display = "none";
	document.getElementById("fruit").style.display = "none";
	document.getElementById("food").style.display = "none";
	document.getElementById("convenience").style.display = "none";
	document.getElementById("convenience").style.display = "none";
	document.getElementById("sum").style.display = "grid";
	document.getElementById("containerCart").style.display = "grid";
}
function Info_Cus(){
	document.getElementById('containerCart').innerHTML = "";
	var line = document.createElement("div");
	var customer = document.createElement("h1");
	customer.innerText = "THÔNG TIN KHÁCH HÀNG";
	var name = document.createElement("p");
		name.innerText = "Họ và tên";
	var inputName = document.createElement("input");
		inputName.innerText = " ";
		inputName.className = "form";
	var address = document.createElement("p");
		address.innerText = "Địa chỉ";
	var inputAddress = document.createElement("input");
		inputAddress.innerText = " ";
		inputAddress.className = "form";
	var phone = document.createElement("p");
		phone.innerText = "Số điện thoại";
	var inputPhone = document.createElement("input");
		inputPhone.innerText = " ";
		inputPhone.className = "form";
	var email = document.createElement("p");
		email.innerText = "Email";
	var inputEmail = document.createElement("input");
		inputEmail.innerText = " ";
		inputEmail.className = "form";
	line.appendChild(customer);
	line.appendChild(name);
	line.appendChild(inputName);
	line.appendChild(address);
	line.appendChild(inputAddress);
	line.appendChild(phone);
	line.appendChild(inputPhone);
	line.appendChild(email);
	line.appendChild(inputEmail);
	containerCart.appendChild(line);
	line.className = "border-info";
	var product = document.createElement("h1");
		product.innerText = "XEM LẠI ĐƠN HÀNG";
		containerCart.appendChild(product);
		product.className = "border-info";
	for (var i = 0; i < cart.length;  i++) {
			var line1 = document.createElement("div");

			var prName = document.createElement("b");
				prName.innerText = cart[i].name;

			var prPrice = document.createElement("p");
				prPrice.innerText = cart[i].price;

			var quantity = document.createElement("p");
				quantity.innerText = "Số lượng: " + cart[i].quantity;

			var prImage = document.createElement("img");
				prImage.src= cart[i].image;
				prImage.className = "image";
			var total = document.createElement("p");
				total.innerText = "Thành tiền: " + cart[i].price*cart[i].quantity + " VNĐ";
		line1.appendChild(prImage);
		line1.appendChild(prName);
		line1.appendChild(prPrice);
		line1.appendChild(quantity);
		line1.appendChild(total);
		line1.className = "line";
		containerCart.appendChild(line1);
		line1.className = "line";
	}
	var line2 = document.createElement("div");
		var btSum = document.createElement("button");
			btSum.innerText = "Tổng";
			line2.appendChild(btSum);
			sumPrice();
			btSum.className = "border-info";
			btSum.onclick = function(){
				sumPrice();
			};
		containerCart.appendChild(line2);
	var line3 = document.createElement("div");
	var pay = document.createElement("button");
		pay.innerText = "Thanh toán";
		pay.className = "border-info";
		pay.onclick = function(){
			if(inputName.value == "" || inputAddress.value == "" || inputEmail.value == "" || inputPhone.value == ""){
				alert("Mời bạn nhập đầy đủ thông tin");
			}
			else if(cart.length == 0){
				alert("Mời bạn chọn sản phẩm để thanh toán");
				displayProduct();
			}
			else{
				alert("Bạn đã đặt hàng thành công");
				document.getElementById("containerCart").style.display = "none";
				document.getElementById("sum").style.display = "none";
				cart.splice(0,cart.length);
			}
		}
	line3.appendChild(pay);
	containerCart.appendChild(line3);
	containerCart.className = "line";
	document.getElementById("containerCart").style.display = "grid";
}
function search(){
	document.getElementById("container").innerHTML = "";
	var a = document.getElementById("sea").value;
	for (var i = 0; i < products.length; i++) {
		if(a == products[i].name){
			var line = document.createElement("div");
			var prName = document.createElement("p");
				prName.innerText = products[i].name;
			var prPrice = document.createElement("p");
				prPrice.innerText = "Giá: "+ products[i].price + "/kg";
			var prImage = document.createElement("img");
				prImage.src= products[i].image;
				prImage.className = "image";
			var btAdd = document.createElement("button");
				btAdd.innerText = "Đặt mua";
				btAdd.onclick = function(arg){
					return function(){
						var iName = products[arg].name;
						var exist = -1;
						for (var j = 0; j < cart.length; j++) {
							if(cart[j].name == iName){
								exist = j;
							}
						}
							if(exist != -1){
								cart[exist].quantity += 1;
						}
							else {
								cart.push({
									name: products[arg].name,
									image: products[arg].image,
									price: products[arg].price,
									quantity: 1
								})
							}
					document.getElementById("containerCart").innerHTML = "";
				}
			}(i);
		line.appendChild(prImage);
		line.appendChild(prName);
		line.appendChild(prPrice);
		line.appendChild(btAdd);
		container.appendChild(line);
		container.className = "line";
		line.className = "border-Pro";
		}
	document.getElementById("convenience").style.display = "grid";
	document.getElementById("food").style.display = "grid";
	document.getElementById("fruit").style.display = "grid";
	document.getElementById("vegetable").style.display = "grid";
	document.getElementById("container").style.display = "grid";
	document.getElementById("containerCart").style.display = "none";
	}	
}
function sumPrice(){
	var sumPrice = 0;
	for (var i = 0; i < cart.length; i++) {
		sumPrice += parseInt(cart[i].price) * cart[i].quantity ;
	}
	document.getElementById("sum").innerHTML = sumPrice  + " VNĐ";
}
function contact(){
	document.getElementById("contact").innerHTML = "";
	var contact = document.getElementById("contact");
	var line1 = document.createElement("div");
	var title1 = document.createElement("h1");
	var phone = document.createElement("h2");
	var email = document.createElement("h2");
	var address = document.createElement("h2");
		title1.innerText = "LIÊN HỆ"
		phone.innerText = "Điện thoại: 0359405417";
		email.innerText = "Email: nguyetnguyen@gmail.com";
		address.innerText = "Địa chỉ: 101B Lê Hữu Trác, An Hải Đông, Sơn Trà, ĐN";
	
		line1.appendChild(title1)
		line1.appendChild(address);
		line1.appendChild(phone);
		line1.appendChild(email);

	var line2 = document.createElement("div");
	var	title2 = document.createElement("h1");
	var main = document.createElement("li");
	var product = document.createElement("li");
	var contacts = document.createElement("li");
		title2.innerText = "THÔNG TIN";
		main.innerText = "Trang chủ";
		product.innerText = "Sản phẩm";
		contacts.innerText = "Liên hệ";
		
		line2.appendChild(title2);
		line2.appendChild(main);
		line2.appendChild(product);
		line2.appendChild(contacts);
		contact.appendChild(line1);
		contact.appendChild(line2);
		contact.className = "line";
	document.getElementById("convenience").style.display = "none";
	document.getElementById("food").style.display = "none";
	document.getElementById("fruit").style.display = "none";
	document.getElementById("vegetable").style.display = "none";
	document.getElementById("container").style.display = "none";
	document.getElementById("contact").style.display = "grid";
	document.getElementById("containerCart").style.display = "none";
}