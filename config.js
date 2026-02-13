// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Basic Information
    valentineName: "Enu",
    pageTitle: "Will You Be My Valentine baby? 💝",

    // Floating Background Elements
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        extras: ['❤️', '💖', '💝', '💗', '💓']
    },

    // Questions
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes 🙂",
            noBtn: "No 🙃",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me? ❤️",
            startText: "This much! 🥰",
            nextBtn: "Next 💖"
        },
        third: {
            text: "Am I romantic? 🥰💝",
            yesBtn: "Innum konjam improve pannanum 😜",
            noBtn: "Very romantic 😍"
        },
        fourth: {
            text: "You are my ............. ❤️",
            yesBtn: "Panni kutty 🐷💕",
            noBtn: "Chellak kutty 🥰💖"
        },
        fifth: {
            text: "Will you stay with me forever? 💍",
            yesBtn: "Always ❤️",
            noBtn: "Still thinking 🤔"
        },
        sixth: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes, of course! 🥰😍",
            noBtn: "Hmm… maybe 😅😏"
        }
    },

    // Love Meter Messages
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    // Final Celebration
    celebration: {
        title: "Yay! I'm the luckiest person...",
        message: "Now come get your gift...",
        emojis: "🎁💖🤗💝💋❤️💕"
    },

    // Website Colors
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation Settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Music Settings
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "YOUR_CLOUDINARY_URL_HERE",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
