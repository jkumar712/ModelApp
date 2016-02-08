
export default function() {
  this.get('/users',function(){
    return{
      data:[{
        type:'users',
        id: 1,
        attributes:{
          no: 1,
          name: 'xyz',
          rno: 123
        }
      },{
        type:'users',
        id: 2,
        attributes:{
          no:2,
          name: 'abc',
          rno:321
        }
      },{
        type:'users',
        id: 3,
        attributes:{
          no:3,
          name: 'def',
          rno:111
        }
     }]
   };
 });
}
