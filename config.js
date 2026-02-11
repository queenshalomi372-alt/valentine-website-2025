// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Enu",
    pageTitle: "Will You Be My Valentine baby? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        extras: ['❤️', '💖', '💝', '💗', '💓']
    },

    // Questions
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes 😄",
            noBtn: "No 😅",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me? ❤️",
            startText: "This much! 🥰",
            nextBtn: "Next 💖"
        },
        third: {
            text: "Am I romantic? 🥰💝",
            noBtn: "Very romantic 😍",
            yesBtn: "Innum konjam improve pannanum 😜"
        },
        fourth: {
            text: "Will you stay with me forever? 💍",
            yesBtn: "Always ❤️",
            noBtn: "Still thinking 🤔"
        },
        fifth: {
            text: "Will you be my Valentine on February 14th, 2025? 🌹",
            yesBtn: "Yes, of course! 🥰😍",
            noBtn: "Hmm… maybe 😅😏"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🥰",
        message: "Come get a tight hug 🤗 and a sweet kiss 😘… you’ve got a little gift today 🎁. Will see 😉. Love you so much ❤️!"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dbak1uki7/video/upload/v1770828545/Kannukulla_efqtuk.mp3",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;

// ============================================
// 💖 MUSIC AUTOPLAY SCRIPT 💖
// ============================================
window.addEventListener('DOMContentLoaded', () => {
    if (CONFIG.music.enabled) {
        const audio = new Audio(CONFIG.music.musicUrl);
        audio.volume = CONFIG.music.volume;
        audio.loop = true;
        audio.play().catch(err => {
            console.warn("Autoplay blocked by browser:", err);
        });
    }
});

