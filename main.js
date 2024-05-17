import './src/css/style.css'

const footer = document.getElementById('footer');
const date = new Date();
const year = date.getFullYear();

footer.innerHTML=`&copy; ${year}, all the right reserves.`
