function modal() {
    let modal = document.querySelector('.modal')
    let open1 = document.querySelector('#listing-1')
    let open2 = document.querySelector('#listing-2')
    let open3 = document.querySelector('#listing-3')
    let open4 = document.querySelector('#listing-4')
    let open5 = document.querySelector('#listing-5')
    let open6 = document.querySelector('#listing-6')
    let close = document.querySelector('#close')
    let back = document.querySelector('.backdrop')
    let connect = document.getElementById('connect')

    open1.addEventListener( 'click',function() {
       modal.style.visibility = 'visible';
       back.style.visibility = 'visible';
    })

    open2.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open3.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open4.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open5.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })
     open6.addEventListener( 'click',function() {
        modal.style.visibility = 'visible';
        back.style.visibility = 'visible';
     })

     close.addEventListener('click', function(){
        modal.style.visibility = 'hidden';
        back.style.visibility = 'hidden';
     })

    
     connect.addEventListener( 'click',function() {
      modal.style.visibility = 'visible';
      back.style.visibility = 'visible';
   })


       
}

modal()