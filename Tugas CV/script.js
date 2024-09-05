// Function to show the selected tab content and highlight the active tab
function showTab(tabName) {
    var i, tabcontent, tabs;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');

    // Remove 'active-tab' class from all tabs
    tabs = document.querySelectorAll('nav ul li a');
    for (i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
    }

    // Add 'active-tab' class to the clicked tab
    document.querySelector('a[href="#' + tabName + '"]').classList.add('active-tab');
}

// Show the first tab by default when the page loads
window.onload = function() {
    document.getElementById('biodata').classList.add('active');
    document.querySelector('a[href="#biodata"]').classList.add('active-tab');
}


// Dark/Light Mode Toggle Script
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.body.classList.add(currentTheme);
    themeToggleBtn.innerHTML = `<i class="fa-solid fa-${currentTheme === 'dark-theme' ? 'sun' : 'moon'}"></i>`;
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const newTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', newTheme);
    themeToggleBtn.innerHTML = `<i class="fa-solid fa-${newTheme === 'dark-theme' ? 'sun' : 'moon'}"></i>`;
});

function openGmail() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=marcohuang552@gmail.com', '_blank');
    return false; // Prevent the default action
}

