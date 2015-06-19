function Owner(fname){
  this.fname = fname;
  this.dogs = [];
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
}
Owner.all = [];