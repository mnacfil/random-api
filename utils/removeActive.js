const removeActive = icons => {
    icons.forEach(btn => {
        btn.classList.remove('active');
    });
}
export default removeActive