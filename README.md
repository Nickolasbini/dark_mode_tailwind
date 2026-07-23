# 🌙 Dark Mode com Tailwind CSS (Vanilla JS)

Implementação simples e funcional de um botão de Dark Mode usando apenas **HTML**, **Tailwind CSS (via CDN)** e **JavaScript puro** — sem nenhum framework ou build tool.

🎥 Tutorial completo no canal **Código Prático**: [assista aqui](https://youtu.be/gAq0rr3qzyk)

## ✨ Funcionalidades

- Alternância entre tema claro e escuro com um clique
- Preferência salva no `localStorage` (persiste entre sessões)
- Detecta automaticamente o tema do sistema operacional na primeira visita
- Sem "flash" de tela clara antes de aplicar o tema escuro (FOUC)
- Zero dependências além do Tailwind CSS

## 🧱 Tecnologias

- HTML5
- Tailwind CSS (via CDN, `darkMode: 'class'`)
- JavaScript Vanilla (ES6+)

## 📂 Estrutura do projeto
dark-mode-tailwind-vanilla/
├── index.html
├── script.js
└── README.md

## 🚀 Como rodar localmente

1. Clone o repositório:
```bash
   git clone https://github.com/Nickolasbini/dark_mode_tailwind_vanilla.git
```
2. Abra o arquivo `index.html` direto no navegador (não precisa de servidor, build ou instalação de dependências).

## 🔍 Como funciona

- Um script inline no `<head>` verifica o `localStorage` e a preferência do sistema **antes** do body renderizar, evitando o flash de tela clara.
- O botão de toggle adiciona/remove a classe `dark` no elemento `<html>`.
- Todas as classes com o prefixo `dark:` no Tailwind reagem automaticamente a essa mudança.
- A escolha do usuário é salva no `localStorage` para persistir entre visitas.

## 📌 Aplicando no seu próprio projeto

Basta:
1. Adicionar `tailwind.config = { darkMode: 'class' }` no seu projeto.
2. Colar o script de detecção inicial no `<head>`, antes do restante do conteúdo.
3. Usar `dark:` em qualquer classe Tailwind que você já usa hoje.

## 🔗 Links úteis

- [Documentação oficial do Tailwind — Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Canal Código Prático no YouTube](https://www.youtube.com/@codigopraticooficial)
- [Cervo Digital — Agência de Desenvolvimento](https://cervodigital.com.br)

---
Feito por [Nickolas Bini](https://github.com/Nickolasbini) para o canal **Código Prático**.
