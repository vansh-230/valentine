// ============================================
// DIGITAL VAULT OF LOVE - CONFIGURATION
// ============================================
// Customize this file to personalize the app for your loved one!

export const config = {
  // ============================================
  // PERSONAL DETAILS
  // ============================================
  partnerName: "My Love", // Change to your partner's name
  yourName: "Ullu", // Your name
  
  // ============================================
  // VAULT UNLOCK CODE
  // ============================================
  // This is the secret code to unlock the vault
  // Examples: "02142024" (anniversary), "0214" (Valentine's Day), "iloveyou"
  unlockCode: "24112019", // Change this to your special code
  
  // ============================================
  // OPEN WHEN ENVELOPES
  // ============================================
  // Each envelope contains a message, image, or link
  envelopes: [
    {
      id: 1,
      label: "Open when you miss me",
      type: "message", // "message", "image", or "link"
      content: "I miss you too! Remember, distance means nothing when someone means everything. You're always in my heart. 💕",
      image: "images/20251012_170300.jpg", // Beautiful romantic illustration
      link: "https://youtu.be/pon8irRa8II?si=WW9lqxYPQoOX2Hjf", // Optional: external link (e.g., Spotify playlist)
    },
    {
      id: 2,
      label: "Open when you're sad",
      type: "message",
      content: "Hey beautiful, I know things are tough right now, but remember: you are stronger than you think, braver than you believe, and loved more than you know. I'm always here for you. ❤️",
      image: "images/IMG_20250728_165910.jpg",
      link: null,
    },
    {
      id: 3,
      label: "Open when you need a laugh",
      type: "message",
      content: "Why don't scientists trust atoms? Because they make up everything! 😂 Just like how you make up my entire world. Love you!",
      image: "images/IMG-20230806-WA0009.jpg",
      link: "https://youtu.be/l_63zbTj9Hw?si=KzzgbKjjrgv1vGat",
    },
    {
      id: 4,
      label: "Open when you can't sleep",
      type: "link",
      content: "Here's a playlist I made for you. Close your eyes and let the music carry you to dreamland. Sweet dreams, my love. 🌙",
      image: "/images/IMG_20240106_165933.jpg",
      link: "https://www.youtube.com/watch?v=s-bZD3O3P80&list=RDs-bZD3O3P80&start_radio=1", // Replace with your playlist
    },
    {
      id: 5,
      label: "Open when you need motivation",
      type: "message",
      content: "You are capable of amazing things! Don't let anyone (including yourself) tell you otherwise. I believe in you more than you'll ever know. Now go crush it! 💪✨",
      image: "/images/20251027_161453.jpg",
      link: null,
    },
    {
      id: 6,
      label: "Open on a random Tuesday",
      type: "message",
      content: "Just a reminder that you're the best thing that's ever happened to me. I love you on Tuesdays, and every other day too. 💖",
      image: "images/20260117_144357.jpg",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
  
  // ============================================
  // COUPON BOOK
  // ============================================
  // Digital coupons your partner can "redeem"
  coupons: [
    {
      id: 1,
      title: "One Free Full Body Massage",
      description: "Redeemable anytime, anywhere. No expiration date!",
      icon: "💆",
    },
    {
      id: 2,
      title: "Something sweet and spicy with me",
      description: "You already know what this entails. 😉",
      icon: "😈",
    },
    {
      id: 3,
      title: "Movie Night of Your Choice",
      description: "Even if it's a rom-com I've seen 100 times.",
      icon: "🎬",
    },
    {
      id: 4,
      title: "One Day of No Arguments",
      description: "I'll agree with everything you say. Use wisely!",
      icon: "🤝",
    },
    {
      id: 5,
      title: "Breakfast in Bed",
      description: "Pancakes, waffles, or whatever your heart desires.",
      icon: "🥞",
    },
    {
      id: 6,
      title: "A Surprise Date",
      description: "Let me plan everything. Just show up and enjoy!",
      icon: "🎁",
    },
  ],
  
  // ============================================
  // THEME CUSTOMIZATION (Advanced)
  // ============================================
  theme: {
    primaryColor: "#D4AF37", // Gold
    secondaryColor: "#C9A0DC", // Lavender
    backgroundColor: "#1a0a2e", // Deep purple/midnight
    textColor: "#ffffff",
  },
};
