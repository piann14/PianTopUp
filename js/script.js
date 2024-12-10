// JavaScript untuk menampilkan atau menyembunyikan form pencarian
document.getElementById('search-toggle').addEventListener('click', function () {
    var searchForm = document.getElementById('search-form');

    // Toggle form pencarian: menampilkan jika tersembunyi, menyembunyikan jika ditampilkan
    if (searchForm.style.display === 'none' || searchForm.style.display === '') {
        searchForm.style.display = 'flex';  // Menampilkan form pencarian
    } else {
        searchForm.style.display = 'none';  // Menyembunyikan form pencarian
    }
});
function processPayment() {
    // Show loading spinner and hide the confirm button
    document.getElementById('confirmPaymentBtn').classList.add('d-none');
    document.getElementById('loadingSpinner').classList.remove('d-none');

    // Simulate a delay for processing payment (e.g., 3 seconds)
    setTimeout(function () {
        // Hide loading spinner and show payment success message
        document.getElementById('loadingSpinner').classList.add('d-none');
        document.getElementById('paymentSuccess').classList.remove('d-none');

        // Optionally, you can close the modal after a successful payment
        setTimeout(function () {
            var modal = new bootstrap.Modal(document.getElementById('paymentModal'));
            modal.hide(); // Close the modal
        }, 2000); // Close after 2 seconds
    }, 3000); // Simulate payment processing for 3 seconds
}
