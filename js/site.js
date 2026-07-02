// Shared behavior for every page: icons, mobile nav, active link, chat widget.
const PHONE = '(555) 123-4567';
const PHONE_HREF = 'tel:+15551234567';

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => navMobile.classList.toggle('open'));
  }

  const here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-link, .nav-mobile a').forEach((a) => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });

  initChatWidget();
});

function initChatWidget() {
  const fab = document.getElementById('chatFab');
  const panel = document.getElementById('chatPanel');
  const closeBtn = document.getElementById('chatClose');
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const body = document.getElementById('chatBody');
  if (!fab || !panel) return;

  const toggle = () => panel.classList.toggle('open');
  fab.addEventListener('click', toggle);
  closeBtn.addEventListener('click', toggle);

  const addMsg = (from, text) => {
    const row = document.createElement('div');
    row.className = 'chat-msg' + (from === 'user' ? ' user' : '');
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble';
    bubble.textContent = text;
    row.appendChild(bubble);
    body.appendChild(row);
    body.scrollTop = body.scrollHeight;
  };

  const send = () => {
    const text = input.value.trim();
    if (!text) return;
    addMsg('user', text);
    input.value = '';
    setTimeout(() => {
      addMsg('bot', `Thanks! A care advisor will follow up shortly. For immediate help, call ${PHONE} — we answer 24/7.`);
    }, 700);
  };

  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); send(); }
  });
}

function isValidZip(zip) { return /^\d{5}$/.test(zip); }
function isValidEmail(email) { return /^\S+@\S+\.\S+$/.test(email); }
function isValidPhone(phone) { return /^[\d\s()+.-]{7,}$/.test(phone); }

function digitsOnly(el, maxLen) {
  el.value = el.value.replace(/[^0-9]/g, '').slice(0, maxLen);
}
