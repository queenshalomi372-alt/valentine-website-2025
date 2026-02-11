// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Enu",
    pageTitle: "Will You Be My Valentine baby? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],   // Heart emojis
        extras: ['❤️', '💖', '💝', '💗', '💓']    // Stars, flowers, chocolates
    },

    // Updated Questions
    questions: {
        first: {
            text: "When did you first start liking me? 😊",
            yesBtn: "From the start 💕",
            noBtn: "Later 🙃",
            secretAnswer: "Honestly… I fell for you instantly ❤️ (Mn oyata kamathi. Karanna deyak nh mn oyata kamathi)"
        },
        second: {
            text: "How much do you love me? ❤️",
            startText: "This much!",
            nextBtn: "Next 💖"
        },
        third: {
            text: "Am I romantic? 🥰💝",
            noBtn: "Very romantic ❤️",
            yesBtn: "Innum konjam improve pannanum 😜"
        },
        fourth: {
            text: "Will you stay with me forever? 💍",
            yesBtn: "Always ❤️",
            noBtn: "Still thinking 😜"
        }
    },

    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "To infinity and beyond! 🚀💝",
        normal: "And beyond! 🥰"
    },

    celebration: {
        title: "Yay! I'm the luckiest person in the world!",
        message: "Come get a tight hug 🤗 and a sweet kiss 😘… you’ve got a little gift today 🎁. Will see 😉. Love you so much ❤️!",
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
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;

