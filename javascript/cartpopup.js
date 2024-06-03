
        document.getElementById('cart-icon').addEventListener('click', function(){
            let cartContainer = document.getElementById('cart-container');
            cartContainer.classList.toggle('visible');
            cartContainer.classList.toggle('hidden');
        });
        document.getElementById('close-cart').addEventListener('click', function(){
            let cartContainer = document.getElementById('cart-container');
            cartContainer.classList.toggle('hidden');
            cartContainer.classList.toggle('visible');
        });
        document.getElementById('add-cart').addEventListener('click', function(){
            let cartContainer = document.getElementById('cart-container');
            cartContainer.classList.toggle('hidden');
            cartContainer.classList.toggle('visible');
        });

        