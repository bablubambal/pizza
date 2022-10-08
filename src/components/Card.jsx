import React from 'react'

const Card = ({item}) => {
  return (
  
    <>
   <div class="card m-2" >
  <img src={item.image} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text"> ${item.price}</p>
    <a href="#" class="btn btn-primary">{item.size}</a>
  </div>
</div>     
    </>
  )
}

export default Card
