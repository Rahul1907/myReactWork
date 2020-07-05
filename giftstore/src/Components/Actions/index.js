
export const addGift=(obj)=>{
  return ({type:'addGift',payload:obj});
}

export const removeGift=(id)=>{
  return ({type:'removeGift',payload:id});

}

export const addPacking=(packtype)=>{
  return ({type:'addPacking',payload:packtype});
}

export const addOne=(id)=>{
  return ({type:'increase',payload:id});
}
