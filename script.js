clickboardInput.onclick = () => {
    navigator.clipboard.writeText('188.32.190.66:25565')
    successMessage.classList.add('active')
    setTimeout(() => successMessage.classList.remove('active') , 3000)
}