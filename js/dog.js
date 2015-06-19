function Dog(fname, owner) {
  this.fname = fname;
  this.owner = owner;
  this.owner.dogs.push(this);
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
}
Dog.all = [];

