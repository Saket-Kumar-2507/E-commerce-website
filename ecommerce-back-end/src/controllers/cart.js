const Cart = require('../models/cart');

exports.addItemToCart = (req,res)=>{
    
    Cart.findOne({userId: req.user._id})
    .exec((error,cart)=>{
        if(error)
        { return res.status(400).json({ error }); }

        if(cart)
        {
            // If the product already exists in the cart, increase the quantity of the product stored in cart
            const product = req.body.cartItems.product;
            const item= cart.cartItems.find(c => c.product == product);    // ".find()" is a JS function

            let condition,update;
            if(item)
            {
                condition= {userId: req.user._id, "cartItems.product": product}
                update= {
                    "$set": {
                        "cartItems.$": {                            // It will update only the cartItem that is asked for, and won't remove any other item
                            ...req.body.cartItems,                  // splitting the object
                            quantity: item.quantity + req.body.cartItems.quantity
                        }
                    }
                };
            }
            else
            {
                condition= {userId: req.user._id};
                update= {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                };
            }

            Cart.findOneAndUpdate(condition,update)
            .exec((error,_cart)=>{
                if(error)
                { return res.status(400).json({ error }); }

                if(_cart)
                { return res.status(201).json({ cart: _cart }); }
            });
            // return res.status(200).json({ message: "This product has already been added to your account" });
        }
        else
        {
            // If product doesn't exist in cart, create one
            const cart = new Cart({
                userId: req.user._id,
                cartItems: [req.body.cartItems]
            });
        
            cart.save((error, cart)=> {
                if(error)
                { return res.status(400).json({ error }); }
        
                if(cart)
                { return res.status(201).json({ cart }); }
            });
        }
    });

    

}