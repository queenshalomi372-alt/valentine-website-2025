// ============================================
// 💝 VALENTINE'S DAY WEBPAGE CONFIG 💝
// ============================================

const CONFIG = {
    // Basic Information
    valentineName: "Enu",                     // Your Valentine's name
    pageTitle: "Will You Be My Valentine? 💝", // Browser tab title

    // Floating Background Elements
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'] // Only heart emojis
    },

    // Questions and Buttons
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Am I romantic? 🥰💝",
            yesBtn: "Innum konjam improve pannanum 😜",
            noBtn: "Very romantic 😍"
        },
        fourth: {
            text: "You are my ............. ❤️",
            yesBtn: "Panni kutty 🐷💕",
            noBtn: "Chella kutty 🥰💖"
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
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",  // Above 5000%
        high: "To infinity and beyond! 🚀💝",              // Above 1000%
        normal: "And beyond! 🥰"                           // Above 100%
    },

    // Final Celebration
    celebration: {
        title: "Yay! I'm the luckiest person...",
        message: "Now come get your gift and a tight hug! 🥰",
        emojis: "❤️💖💝💗💓" // Only hearts
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
        musicUrl: "YOUR_CLOUDINARY_URL_HERE", // Replace with your actual music file URL
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

