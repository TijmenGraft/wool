class Wool {
	constructor(colour,length,brand,price,amount) {
		this.setColour(colour);
		this.setLength(length);
		this.setBrand(brand);
		this.setPrice(price);
		this.setAmount(amount);
		this.link = '/resources/images/' + this.brand + "_" + this.colour + "_" + this.length + ".jpg";
	}

	getColour() {
		return this.colour;
	}

	getLength() {
		return this.length;
	}

	getBrand() {
		return this.brand;
	}

	getPrice() {
		return this.price;
	}

	getAmount() {
		return this.amount;
	}

	setColour(colour) {
		if(colour !== null) {
			this.colour = colour;
		}
	}

	setLength(length) {
		if(length !== null) {
			this.length = length;
		}
	}

	setBrand(brand) {
		if(brand !== null) {
			this.brand = brand;
		}
	}

	setPrice(price) {
		if(price !== null && price > 0) {
			this.price = price;
		}
	}

	setAmount(amount) {
		if(amount !== null && amount <= 0) {
			this.amount = amount;
		}
	}
}

module.exports = Wool;