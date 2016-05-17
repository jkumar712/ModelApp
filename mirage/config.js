
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

  //this.namespace = '/users';
  //this.passthrough('/users');
  this.get('/users', function(db) {
  return {
    data: db.users.map(attrs => (
      {type: 'users', id: attrs.id, attributes: attrs }
    ))
  };
});
}

 //  this.get('/users',function(db,request){
 //    let users=[{
 //        type:'users',
 //        id: 1,
 //        attributes:{
 //          no: 1,
 //          name: 'xyz',
 //          rno: 123
 //        }
 //      },{
 //        type:'users',
 //        id: 2,
 //        attributes:{
 //          no:2,
 //          name: 'abc',
 //          rno:321
 //        }
 //      },{
 //        type:'users',
 //        id: 3,
 //        attributes:{
 //          no:3,
 //          name: 'def',
 //          rno:111
 //        }
 //     }];
 //    //  if(request.queryParams.id !== undefined) {
 //    //   let filteredUsers = users.filter(function() {
 //    //     return id.indexOf(request.queryParams.id) ;
 //    //   });
 //    //   return { data: filteredUsers };
 //    // }
 //    //else {
 //      return { data: users };
 //      //console.log(db);
 //  //  }
 // });

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
