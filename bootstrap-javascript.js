const ScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.getElementsByClassName("top-transition").style.transition = "all 1s";
}
