import Ember from 'ember';


export default Ember.Controller.extend({
  book:null,
  author:null,
  detail:null,
  actions:{
    addData(){
      if (this.book==null) {
        alert('Please enter the book name');
      } else if (this.author==null)
      {
        alert('Please enter the author name');
      } else if (this.detail==null)
      {
        alert('Please enter the details');
      }
      else
      {
        var database = 'library';
        var book = this.get('book');
        var author = this.get('author');
        var detail = this.get('detail');
        var library = this.store.createRecord(database,{
            book: book,
            author: author,
            detail: detail,
            no:12
        });
        library.save();
        this.set('book',null);
        this.set('author',null);
        this.set('detail',null);


      }
    },
    putData(){
      alert("hello");
    }
  }
});
