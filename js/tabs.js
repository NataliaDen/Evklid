document.addEventListener('DOMContentLoaded',function() {
  
    document.querySelectorAll('.tabs_btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.work-consultation').forEach(function(tabContent) {
                tabContent.classList.remove('work-consultation-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('work-consultation-active')
        })
    })

})