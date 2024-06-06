document.addEventListener('DOMContentLoaded', () => {
    const quoteButton = document.getElementById('get-quote');
    const quoteResult = document.getElementById('quote-result');

    quoteButton.addEventListener('click', () => {
        fetch('https://type.fit/api/quotes')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const randomQuote = data[Math.floor(Math.random() * data.length)];
                quoteResult.innerHTML = `
                    <p>"${randomQuote.text}"</p>
                    <p>- ${randomQuote.author || 'Unknown'}</p>
                `;
            })
            .catch(error => {
                quoteResult.innerHTML = `<p>Error fetching quote: ${error.message}</p>`;
                console.error('Error:', error);
            });
    });
});