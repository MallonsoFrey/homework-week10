function calculateTotalPrice(quantity = 2, price = 15000000) {
    const result = ((quantity * price).toLocaleString("ru-RU"));
    alert(`Стоимость покупки: ${result} рублей`)

    const text = document.getElementById('hidden-text');
    text.textContent = `Стоимость покупки: ${result} рублей`;
}