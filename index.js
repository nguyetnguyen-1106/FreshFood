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
function list_Vegetable(){
	document.getElementById("vegetable").innerHTML = "";
	var vegetable = document.getElementById('vegetable');
	for (var i = 0; i < vegetables.length; i++) {
		var line = document.createElement("div");
		var prName = document.createElement("p");
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
		var prName = document.createElement("p");
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
		var prName = document.createElement("p");
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
		var prName = document.createElement("p");
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
		document.getElementById("fruit").style.display = "none";
		document.getElementById("vegetable").style.display = "none";
		document.getElementById("container").style.display = "grid";
		document.getElementById("containerCart").style.display = "none";
	}

function displayCart(){
	document.getElementById("containerCart").innerHTML = "";
	var containerCart = document.getElementById('containerCart');
		for (var i = 0; i < cart.length;  i++) {
			var line = document.createElement("div");

			var prName = document.createElement("p");
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
			var btOrder = document.createElement("button");
				btOrder.innerText = "Mua hàng";
				btOrder.onclick = function(a){
					return function(){
						Info_Cus();
					}
				}(i)
			line.appendChild(prImage);
			line.appendChild(prName);
			line.appendChild(prPrice);
			line.appendChild(quantity);
			line.appendChild(btDelete);
			line.appendChild(btOrder);
			containerCart.appendChild(line);
			line.className = "line";
		}
	document.getElementById("container").style.display = "none";
	document.getElementById("vegetable").style.display = "none";
	document.getElementById("fruit").style.display = "none";
	document.getElementById("food").style.display = "none";
	document.getElementById("convenience").style.display = "none";
	document.getElementById("containerCart").style.display = "grid";
}
function Info_Cus(){
	document.getElementById('containerCart').innerHTML = "";
			var line = document.createElement("div");

			var customer = document.createElement("h1");
				customer.innerText = "Thông tin khách hàng";

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
			var line2 = document.createElement("div");

			var pay = document.createElement("button");
				pay.innerText = "Thanh toán"
				pay.onclick = function(){
					if(inputName.value == "" || inputAddress.value == "" || inputEmail.value == "" || inputPhone.value == ""){
						alert("Mời bạn nhập đầy đủ thông tin");
					}
					else{
						alert("Bạn đã đặt hàng thành công");
					}
				}
			var product = document.createElement("h1");
				product.innerText = "Xem lại đơn hàng";

		for (var i = 0; i < cart.length;  i++) {
			var line1 = document.createElement("div");

			var prName = document.createElement("h2");
				prName.innerText = cart[i].name;

			var prPrice = document.createElement("h2");
				prPrice.innerText = "Giá: " + cart[i].price;

			var quantity = document.createElement("h2");
				quantity.innerText = "Số lượng: " + cart[i].quantity;

			var prImage = document.createElement("img");
				prImage.src= cart[i].image;
				prImage.className = "image";

			var totalPrice = document.createElement("h2");
				totalPrice.innerText += "Tổng: " + (cart[i].price * cart[i].quantity);
		}
			line.appendChild(customer);
			line.appendChild(name);
			line.appendChild(inputName);
			line.appendChild(address);
			line.appendChild(inputAddress);
			line.appendChild(phone);
			line.appendChild(inputPhone);
			line.appendChild(email);
			line.appendChild(inputEmail);
			line1.appendChild(product);
			line1.appendChild(prImage);
			line1.appendChild(prName);
			line1.appendChild(prPrice);
			line1.appendChild(quantity);
			line1.appendChild(totalPrice);
			line2.appendChild(pay)
			containerCart.appendChild(line);
			containerCart.appendChild(line1);
			containerCart.appendChild(line2);
			containerCart.className = "line";
			inputName.className = "form";
	document.getElementById("containerCart").style.display = "grid";
}

var research = []
function search(){
	var a = document.getElementById("sea").value;
	document.getElementById("container").innerHTML = "";
	for (var i = 0; i < products.length; i++) {
		if(a == products[i].name){
			document.getElementById('container').innerHTML = products[i].name;
			displayProduct();
		}

	}
}
