let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
    resetDetails();
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
    resetDetails();
});

document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('see-more-btn')) {
        const content = e.target.closest('.content');
        const moreInfo = content.querySelector('.more-info');
        
        moreInfo.classList.toggle('show');

        if (moreInfo.classList.contains('show')) {
            e.target.innerText = "See Less";
        } else {
            e.target.innerText = "See More";
        }
    }
});

function resetDetails() {
    document.querySelectorAll('.more-info').forEach(info => {
        info.classList.remove('show');
    });
    document.querySelectorAll('.see-more-btn').forEach(btn => {
        btn.innerText = "See More";
    });
}