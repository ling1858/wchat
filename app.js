const chatBox = document.querySelector('.chat-box');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function addMessage(text, isUser = true) {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = text;
  msgDiv.style.margin = '10px 0';
  msgDiv.style.padding = '10px';
  msgDiv.style.borderRadius = '5px';
  
  if (isUser) {
    msgDiv.style.background = '#07c160';
    msgDiv.style.color = '#fff';
    msgDiv.style.textAlign = 'right';
    msgDiv.style.marginLeft = 'auto';
    msgDiv.style.width = 'fit-content';
  } else {
    msgDiv.style.background = '#fff';
    msgDiv.style.border = '1px solid #ddd';
  }
  
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if (!text) return;
  
  addMessage(text, true);
  userInput.value = '';
  
  // 模拟回复
  setTimeout(() => {
    addMessage('收到你的消息：' + text, false);
  }, 1000);
});
