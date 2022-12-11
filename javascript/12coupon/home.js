function loadCoupon(){
    document.getElementsByClassName('coupon')[0].style.display = 'block';
    document.getElementById('search').style.opacity='0.7'
}

const closeCoupon = () => {
    document.getElementsByClassName('coupon')[0].style.display = 'none';
    document.getElementById('search').style.opacity='1'
}