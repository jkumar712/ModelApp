
export default function() {
  //this.namespace = '/users';
  //this.passthrough('/users');
  this.get('/users', function(db) {
  return {
    data: db.users.map(attrs => (
      {type: 'users', id: attrs.id, attributes: attrs }
    ))
  };
});

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
}
