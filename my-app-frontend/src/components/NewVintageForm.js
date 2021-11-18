import React, {useState} from "react";


// name, price, product_despcription, imgUrl, user_id, id

  function NewVintageForm({setVintage}) {
const initialvalue= {
    name: '',
    price: '',
    product_description: '',
    imgUrl: '',
    user_id: '',
    
  }
      const [NewVintage, setNewVintage]= useState(initialvalue)
      function handleChange(e){
          setNewVintage((currentNewVintage)=>{
              return{
                  ...currentNewVintage,
                  [e.target.name]: e.target.value
              }
          })
      }
      function handleSubmit(e){
        e.preventDefault()  
        fetch('http://localhost:9292/items',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(NewVintage)
          }).then(resp=> resp.json())
            .then((data)=>{
                setVintage((currentNewVintage)=>[...currentNewVintage, data])
                setNewVintage(initialvalue)
            })
      }
      return (
          <main className='new-vintage-form'>
              <h2>New Vintage</h2>
              <form className="apple" onSubmit={handleSubmit}>
                  <input className="name" type='text' name='name' placeholder='Product Name' value={NewVintage.name} onChange={handleChange}/>
                  <input className="price" type='text' name='price' placeholder='Price' value={NewVintage.price} onChange={handleChange}/>
                  <input className="product_description" type='text' name='product_description' placeholder='Product description' value={NewVintage.product_description} onChange={handleChange}/>
                  <input className="imgUrl" type='text' name='imgUrl' placeholder='Product Image' value={NewVintage.imgUrl} onChange={handleChange}/>
                  <input className="user_id" type='text' name='user_id' placeholder='Username' value={NewVintage.user_id} onChange={handleChange}/>
                  <button className="submit" type="submit">Sell Vintage</button>
                  

              </form>
          </main>
        
      )
  }
  export default NewVintageForm