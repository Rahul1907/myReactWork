var initaildata={}

const bagreducer=(state=initaildata,action)=>{
  const {type,payload} =action;
  switch(type){

    case 'addGift':
      var addState={...state};
      var id = payload.id
        addState['items']={...addState['items'],
          [id]:{
            id:id,
            name:payload.name,
            image:payload.image,
            price:payload.price,
            qty:1
          }
        }
      
      return addState
    
    case 'increase':
      var addOne={...state}
      
      addOne.items[payload].qty+=1
      return addOne;

    case 'removeGift':
      var rmstate={...state}
      
      if(rmstate['items'][payload]['qty']===1){
        delete rmstate['items'][payload]
      }
      else{
        rmstate['items'][payload]['qty']-=1
      }
      
      return rmstate
    case 'addPacking':
      var Upstate={...state}
      if(Upstate['packing'])
        Upstate.packing=payload;
      else{
        Upstate.packing=payload;
      }
      
      return Upstate;
    default :
      return state;

  }


}

export default bagreducer