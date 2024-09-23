document.addEventListener('DOMContentLoaded', function () {
    // Sections
    const socialsSection = document.getElementById('socialsSection');
    const aboutMeSection = document.getElementById('aboutMeSection');
    const instagramSection = document.getElementById('instagramSection');
    const twitterSection = document.getElementById('twitterSection');
    const tiktokSection = document.getElementById('tiktokSection');
    
    // Links
    const instagramLink = document.getElementById('instagramLink');
    const twitterLink = document.getElementById('twitterLink');
    const tiktokLink = document.getElementById('tiktokLink');

    // Show specific platform section
    instagramLink.addEventListener('click', function () {
        showPlatformSection(instagramSection);
    });

    twitterLink.addEventListener('click', function () {
        showPlatformSection(twitterSection);
    });

    tiktokLink.addEventListener('click', function () {
        showPlatformSection(tiktokSection);
    });
    
    // Back Button Functionality
    const backButtons = document.querySelectorAll('.backButton');
    backButtons.forEach(button => {
        button.addEventListener('click', function () {
            resetToMain();
        });
    });

    // Function to show platform section
    function showPlatformSection(section) {
        socialsSection.classList.add('hidden');
        aboutMeSection.classList.add('hidden');
        section.classList.remove('hidden');
    }

    // Function to reset view to main section
    function resetToMain() {
        socialsSection.classList.remove('hidden');
        aboutMeSection.classList.remove('hidden');
        instagramSection.classList.add('hidden');
        twitterSection.classList.add('hidden');
        tiktokSection.classList.add('hidden'); // Hide TikTok section as well
    }
});
