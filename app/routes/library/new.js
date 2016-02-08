import Ember from 'ember';

export default Ember.Route.extend({
  i:0,
  book:"hgg",
  author:null,
  bookarray:[],
  actions:{
    addData(){
      if (this.book==null) {
        alert('Please enter the book name');
      } else if (this.author==null)
      {
        alert('Please enter the author name');
      } else
      {
        this.bookarray[this.i]={};
        this.bookarray[this.i].book=this.book;
        this.bookarray[this.i].author=this.author;
        this.bookarray[this.i].n=this.i+1;
        this.i=this.i+1;
        this.set("book",null);
        this.set('author',null);
      }


    }
  }
});
