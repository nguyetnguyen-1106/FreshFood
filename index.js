var product1 = {
	image: "Nho.png",
	name: "Nho mỹ",
	price: "120000"
}
var product2 = {
	image: "tao.png",
	name: "Táo Mỹ",
	price: "200000đ"
}
var product3 = {
	image: "cam.png",
	name: "Cam Mỹ",
	price: "300000đ"
}
var product4 = {
	image: "chuoi.png",
	name: "Chuối",
	price: "350000đ"
}
var products = [product1,product2,product3,product4];
console.log(products);
var cart = [];
function displayProduct(){
	document.getElementById("container").style.display = "grid";
	document.getElementById('containerCart').style.display = "none";
}
	var container = document.getElementById('container');
	for (var i = 0; i < products.length; i++) {
		var line = document.createElement("div");
		var prName = document.createElement("p");
			prName.innerText = products[i].name;
		var prPrice = document.createElement("p");
			prPrice.innerText = "Giá: "+ products[i].price;
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
		}
function displayCart(){
	document.getElementById("containerCart").innerHTML = "";
	var containerCart = document.getElementById('containerCart');
		for (var i = 0; i < cart.length;  i++) {
			var line = document.createElement("div");
				line.className = "line";
			var prName = document.createElement("p");
				prName.innerText = cart[i].name;
			var prPrice = document.createElement("p");
				prPrice.innerText = cart[i].price;
			var quantity = document.createElement("p");
				quantity.innerText = "Số lượng: " + cart[i].quantity;
			var prImage = document.createElement("img");
				prImage.src= products[i].image;
				prImage.className = "image";
			var btDelete = document.createElement("button");
				btDelete.innerText = "Delete";
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
			containerCart.appendChild(line);
		}
	document.getElementById("container").style.display = "none";
	document.getElementById("containerCart").style.display = "grid";
}
function sumPrice(){
	var sumPrice = 0;
		for (var i = 0; i < cart.length; i++) {
			sumPrice += parseInt(cart[i].price) * cart[i].quantity;
		}
	document.getElementById("container").style.display = "none";
	var tax = (sumPrice/100)*10;
	var total = sumPrice + tax;
	document.getElementById('beforeTax').innerHTML = "Tiền trước thuế: "+ sumPrice +" VNĐ";
	document.getElementById('tax').innerHTML = "Thuế(10%): " + tax + " VNĐ";
	document.getElementById('afterTax').innerHTML = "Tiền sau thuế: " + total+ " VNĐ";
}