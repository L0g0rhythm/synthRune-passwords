export function message(text, status = 'success') {
    const successColor = '#9a4efc';
    const dangerColor = '#dc2626';

    Toastify({
        text: text,
        duration: 3000,
        gravity: "bottom",
        position: "center",
        stopOnFocus: true,
        style: {
            background: status === 'success' ? successColor : dangerColor,
            color: status === 'success' ? '#000000' : '#ffffff',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: '500'
        }
    }).showToast();
}

export function getRandomCryptoNumber(max) {
    if (max <= 0 || !Number.isInteger(max)) {
         message('Internal Error: Invalid range for random number.', 'danger');
         throw new Error('Max must be a positive integer.');
    }
    if (!window.crypto || !window.crypto.getRandomValues) {
        message('Error: Secure random generation is not available in this browser. Use HTTPS or localhost.', 'danger');
        throw new Error('Crypto API not available.');
    }
    const randomValues = new Uint32Array(1);
    window.crypto.getRandomValues(randomValues);
    return randomValues[0] % max;
}