
export default function() {
  this.get('/libraries', function(db) {
   return {
     data: db.libraries.map(attrs => (
       {type: 'libraries', id: attrs.id, attributes: attrs }
     ))
   };

 });
 this.post('/libraries');
 this.get('/libraries/:id', function(db,request) {
   //var id=request.queryParams.id;
   let id = request.params.id;

   return {
     data: {
       type: 'libraries',
       id: id,
       attributes: db.libraries.find(id)
     }
   };

});

}
 //  this.get('/libraries',function(){
 //      return { data: [{
 //        type:'libraries',
 //        id: 1,
 //        attributes:{
 //          no: 1,
 //          book: 'book 1',
 //          author:'author 1',
 //          detail:'detail 1'
 //        }
 //      },{
 //        type:'libraries',
 //        id: 2,
 //        attributes:{
 //          no: 2,
 //          book: 'book 2',
 //          author:'author 2',
 //          detail:'detail 2'
 //        }
 //      },{
 //        type:'libraries',
 //        id: 3,
 //        attributes:{
 //          no: 3,
 //          book: 'book 3',
 //          author:'author 3',
 //          detail:'detail 3'
 //        }
 //     }] };
 // });
