import Ember from 'ember';

/*function addBook()
{
  book=document.getElementById("book");
  author=document.getElementById("author");
  document.getElementById("add").innerHTML="<tr><td>"+no+"</td><td>"+book+"</td><td>"+author+"</td></tr>";
  console.log("hi");
}*/

var lib=[];
var no;
no=0;
var x,y;
//x=function(){return document.getElementById('b').value;};
//y=function(){return document.getElementById('a').value;};
//x=document.getElementById('b').text;
//y=document.getElementById('a').text;
    lib[no]={
      SlNo: no,
      book: 'x',
      author:' y'
    };
no++;
export default Ember.Route.extend({
  model(){
    return lib;
    }
});
