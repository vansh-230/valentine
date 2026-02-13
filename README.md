# 💖 Digital Vault of Love

A beautiful, interactive Valentine's Day web application with a romantic pink/white theme. This app features a playful proposal screen, a secret vault, personalized "Open When" envelopes, and a digital coupon book.

![Valentine's Day App](https://img.shields.io/badge/Made%20with-Love-ff69b4?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-646cff?style=for-the-badge&logo=vite)

---

## ✨ Features

- 💝 **Valentine Proposal Screen** - Playful "Will you be my Valentine?" with an unclickable "No" button
- 🔐 **Vault Lock** - Secret code entry to unlock the main content
- 💌 **Open When Envelopes** - 6 personalized envelopes with messages and images
- 🎟️ **Digital Coupon Book** - Redeemable vouchers for real-life experiences
- 🎨 **Beautiful Design** - Pink/white theme with glassmorphism and smooth animations
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚙️ **Easy Customization** - Change everything through one config file

---

## 🚀 Quick Start (For Beginners)

### Prerequisites

You need to have **Node.js** installed on your computer. If you don't have it:

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** (recommended)
3. Install it (just click "Next" through the installer)

### Step 1: Download the Project

**Option A: Using Git (Recommended)**
```bash
git clone https://github.com/nish2234/Valentine.git
cd Valentine
```

**Option B: Download ZIP**
1. Click the green "Code" button on GitHub
2. Click "Download ZIP"
3. Extract the ZIP file
4. Open the folder in your terminal/command prompt

### Step 2: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will download all the necessary files. It might take a few minutes.

### Step 3: Run the App

```bash
npm run dev
```

The app will open at `http://localhost:5173/` (or another port if 5173 is busy)

---

## 🎨 Customization Guide

All customization is done in **one file**: `src/config.js`

### 1. Change Names

```javascript
partnerName: "My Love",  // ← Change this to your partner's name
yourName: "Me",          // ← Change this to your name
```

**Example:**
```javascript
partnerName: "Sarah",
yourName: "John",
```

### 2. Change the Unlock Code

```javascript
unlockCode: "143",  // ← Change this to your special code
```

**Ideas for codes:**
- Anniversary date: `"02142020"` (Feb 14, 2020)
- Birthday: `"0815"` (August 15)
- Special number: `"143"` (I Love You)
- Custom phrase: `"iloveyou"`

### 3. Customize Envelope Messages

Each envelope has 4 parts you can change:

```javascript
{
  id: 1,
  label: "Open when you miss me",           // ← The envelope title
  type: "message",                           // ← Keep as "message" or "link"
  content: "Your message here...",           // ← The message inside
  image: "/images/envelope_miss_me.png",     // ← Path to image
  link: null,                                // ← Optional: add a URL
}
```

**Example - Adding a Spotify Playlist:**
```javascript
{
  id: 4,
  label: "Open when you can't sleep",
  type: "link",
  content: "Here's a playlist I made for you...",
  image: "/images/envelope_sleep.png",
  link: "https://open.spotify.com/playlist/YOUR_PLAYLIST_ID",  // ← Add your link
}
```

### 4. Customize Coupons

Each coupon has 3 parts:

```javascript
{
  id: 1,
  title: "One Free Foot Rub",                    // ← Coupon title
  description: "Redeemable anytime, anywhere.",  // ← Description
  icon: "💆",                                    // ← Emoji icon
}
```

**Example - Adding Your Own Coupon:**
```javascript
{
  id: 7,
  title: "Weekend Getaway",
  description: "A surprise trip to your dream destination!",
  icon: "✈️",
}
```

### 5. Change Images

**Option A: Use Your Own Images**

1. Add your images to the `public/images/` folder
2. Update the config:

```javascript
image: "/images/your-image-name.jpg",
```

**Option B: Use the Pre-Generated Images**

The app comes with 6 beautiful romantic illustrations:
- `envelope_miss_me.png`
- `envelope_sad.png`
- `envelope_laugh.png`
- `envelope_sleep.png`
- `envelope_motivation.png`
- `envelope_random.png`

Just use these paths in your config!

---

## 📁 Project Structure

```
Valentine/
├── public/
│   └── images/              # Put your images here
├── src/
│   ├── components/          # App components (don't need to edit)
│   ├── config.js           # ⭐ EDIT THIS FILE to customize
│   ├── index.css           # Global styles
│   └── App.jsx             # Main app
├── package.json
└── README.md
```

---

## 🛠️ Common Issues & Solutions

### Issue: Port 5173 is already in use

**Solution:** The app will automatically use another port (like 5174). Check the terminal output for the correct URL.

### Issue: Images not showing

**Solution:** 
1. Make sure your images are in the `public/images/` folder
2. Check that the image path in `config.js` matches the filename exactly
3. Image paths should start with `/images/` (with a forward slash)

### Issue: Changes not appearing

**Solution:** 
1. Save the `config.js` file (Ctrl+S or Cmd+S)
2. The app should auto-reload. If not, refresh your browser

---

## 🚢 Deploying Your App

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Done! You'll get a URL like `your-app.vercel.app`

### Deploy to Netlify

1. Run `npm run build` to create a production build
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Done!

---

## 💡 Tips for Personalization

1. **Be Specific**: Use inside jokes, memorable dates, and personal references
2. **Add Real Links**: Link to playlists, photo albums, or videos you've made
3. **Use Real Photos**: Replace the generated images with actual photos of you two
4. **Make it Interactive**: Add links to online games, quizzes, or virtual experiences
5. **Test Everything**: Go through the entire flow before sharing it

---

## 📝 Step-by-Step Customization Checklist

- [ ] Change `partnerName` to your partner's name
- [ ] Change `unlockCode` to a meaningful number
- [ ] Customize all 6 envelope messages
- [ ] Update coupon titles and descriptions
- [ ] Add your own images (optional)
- [ ] Add Spotify/YouTube links (optional)
- [ ] Test the unlock code
- [ ] Test all envelopes
- [ ] Test all coupons
- [ ] Test on mobile
- [ ] Deploy and share!

---

## 🎓 Learning Resources

If you want to learn more about the technologies used:

- [React Tutorial](https://react.dev/learn)
- [Vite Documentation](https://vitejs.dev/)
- [CSS Glassmorphism](https://css.glass/)

---

## 💝 Made with Love

This project is designed to be a heartfelt gift. Feel free to customize it as much as you want to make it uniquely yours!

**Questions?** Open an issue on GitHub or reach out!

---

## 📄 License

MIT License - Feel free to use this for your own romantic projects! 💕
