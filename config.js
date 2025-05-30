const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "",  // Your bot's session ID (keep it secure)
    PREFIX: process.env.PREFIX || "*",         // Command prefix (e.g., "., / ! * - +")
    BOT_NAME: process.env.BOT_NAME || "JustJades",  // Bot's display name
    MODE: process.env.MODE || "private",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/Jadenven/SUBZERO-MD",  // Bot's GitHub repo

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "27829212587",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || "JustJades08",           // Owner's name
    DEV: process.env.DEV || "27829212587",                     // Developer's contact number
    DEVELOPER_NUMBER: '27829212587@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SUBZERO 🤍*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?

    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // Custom reaction emojis
    STICKER_NAME: process.env.STICKER_NAME || "Jaden",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?

    // ===== MEDIA & AUTOMATION =====
    AUTO_VOICE: process.env.AUTO_VOICE || "false",              // Auto-send voice messages?
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/zv76KffW/IMG-20250115-WA0020.jpg",  // Bot's "alive" image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_BAD: process.env.ANTI_BAD || "false",                  // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",                 // Block links in groups?
    ANTI_VV: process.env.ANTI_VV || "true",                     // Block view-once messages?
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",          // Log deleted messages (or 'same' to resend)

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© Jaden08",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false", // React to status updates?
};
