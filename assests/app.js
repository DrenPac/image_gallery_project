(function() {

   const buttons = document.querySelectorAll('.btn')
   const branchImages = document.querySelectorAll('.branch')

buttons.forEach((button) => {
    button.addEventListener ('click', (e) => {
        e.preventDefault()
        const filter = e.target.dataset.filter


        branchImages.forEach((item) => {
            if (filter === 'all') {
                item.style.display  = 'block'
            } else {
                if(item.classList.contains(filter)) {
                    item.style.display  = 'block'
                }
                 else {

                    item.style.display  = 'none'
                    

                 }
            }
        })
    })
})

} ) ();