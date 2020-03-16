function VacationRentalProperty(name, price, rating, location, rooms, availability, features){
    this.name = name;
    this.price  = price;
    this.rating = rating;
    this.place = location;
    this.rooms = rooms;
    this.available = Boolean(availability);
    this.features = features;
    this.type = "standard";
}

VacationRentalProperty.prototype.description = function () {
    alert(this.name + " is a rental property with a rating of " + this.rating + ", listed for $" + this.price);
};

VacationRentalProperty.prototype.checkAvailability = function () {
    if(this.available){
        alert(this.name + " is available for rental");
    } else {
        alert(this.name + " is not available for rental");
    }
};

VacationRentalProperty.prototype.descriptionText = function() {
    let rtrnString = this.name + " is a rental property with a rating of " + this.rating + ", listed for $" + this.price;
    if(this.type == "Special Rate") {
        rtrnString += ". This property is available for 20% off, at " + this.price * 0.8;
    }
    if(this.type == "superhost"){
        rtrnString += ". This property is very highly rated, and is a Super Host!"
    }
    return rtrnString;
};

function SpecialRateProperty(name, price, rating, location, rooms, availability, features){
    VacationRentalProperty.call(this, name, price, rating, location, rooms, availability, features);
    this.type = "Special Rate";
}
SpecialRateProperty.prototype = Object.create(VacationRentalProperty.prototype);

SpecialRateProperty.prototype.showSpecialCost = function () {
    let newCost = this.price * 0.8;
    alert("This property's original cost is " + this.price + ", but you'll get it for " + newCost);
}

function SuperHostProperty(name, price, rating, location, rooms, availability, features) {
    VacationRentalProperty.call(this, name, price, rating, location, rooms, availability, features);
    this.type = "superhost";
}
SuperHostProperty.prototype = Object.create(VacationRentalProperty.prototype);
SuperHostProperty.prototype.showSuperhostRating = function () {
    alert(this.name + " has a rating of " + this.rating + "! They're a Super Host!")
}

