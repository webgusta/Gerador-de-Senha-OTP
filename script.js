function generateNumericPassword(time) {
    const chars = "0123456789";
    let password = "";
    // Use o tempo atual para alterar a sequência de caracteres permitidos
    let charIndex = time % chars.length;
    for (let i = 0; i < 6; i++) {
      charIndex = (charIndex + i) % chars.length;
      password += chars[charIndex];
    }
    return password;
  }
  
  function generatePasswordEveryMinute(interval) {
    const passwordInput = document.getElementById("password");
    // Obter o tempo atual em milissegundos desde a época
    const time = new Date().getTime();
    const password = generateNumericPassword(time);
    passwordInput.value = password;
    setTimeout(() => generatePasswordEveryMinute(interval), interval);
  }
  
  // Gerar uma nova senha a cada 30 segundos
  generatePasswordEveryMinute(30000);