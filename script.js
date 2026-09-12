const toast = document.getElementById('toast');
let toastTimer;

function showToast(text){
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1600);
}

document.body.addEventListener('click', async (e) => {
  const copyBtn = e.target.closest('.copy-btn');
  if (copyBtn){
    const value = copyBtn.dataset.copy;
    try {
      await navigator.clipboard.writeText(value);
      showToast(`Copied "${value}"`);
    } catch {
      showToast('Could not copy — select manually');
    }
    return;
  }
  if (e.target.closest('#printBtn')) window.print();
});