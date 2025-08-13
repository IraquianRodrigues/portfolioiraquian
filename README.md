# 🚀 Portfólio Profissional

Um portfólio moderno e responsivo construído com Next.js, React, TypeScript e Tailwind CSS.

## ✨ Características

- 🎨 Design moderno e responsivo
- 🌙 Modo escuro/claro
- ⚡ Animações suaves com Framer Motion
- 📱 Totalmente responsivo
- 🚀 Performance otimizada
- ♿ Acessibilidade
- 📧 Formulário de contato funcional
- 🎯 SEO otimizado

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **React Hooks** - Gerenciamento de estado

## 🚀 Como Executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 📝 Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos para personalizar suas informações:

- **`src/components/Hero.tsx`** - Nome, título e descrição
- **`src/components/About.tsx`** - Biografia e estatísticas
- **`src/components/Contact.tsx`** - Informações de contato
- **`src/components/Projects.tsx`** - Seus projetos

### 2. Cores e Tema

As cores principais estão definidas no arquivo `src/app/globals.css`:

```css
.gradient-text {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
}

.button-primary {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105;
}
```

### 3. Projetos

Edite o array `projects` em `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição do projeto...',
    technologies: ['React', 'Next.js', 'TypeScript'],
    liveUrl: 'https://seu-projeto.com',
    githubUrl: 'https://github.com/seu-usuario/projeto',
    featured: true // true para projetos em destaque
  }
];
```

### 4. Habilidades

Edite o array `skillCategories` em `src/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 }
    ]
  }
];
```

### 5. Links Sociais

Atualize os links nas seguintes seções:
- Hero component (`src/components/Hero.tsx`)
- Contact component (`src/components/Contact.tsx`)
- Footer component (`src/components/Footer.tsx`)

### 6. Metadados

Edite o arquivo `src/app/layout.tsx` para atualizar:
- Título da página
- Descrição
- Palavras-chave
- Autor

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas

- **Netlify**: Conecte seu repositório
- **GitHub Pages**: Configure o workflow
- **AWS Amplify**: Conecte seu repositório

## 📧 Formulário de Contato

O formulário de contato está configurado para simular o envio. Para torná-lo funcional:

1. Configure um serviço de email (SendGrid, EmailJS, etc.)
2. Atualize a função `handleSubmit` em `src/components/Contact.tsx`
3. Adicione as variáveis de ambiente necessárias

## 🎨 Personalização Avançada

### Adicionando Novas Seções

1. Crie um novo componente em `src/components/`
2. Importe e adicione à página principal (`src/app/page.tsx`)
3. Atualize a navegação em `src/components/Navbar.tsx`

### Modificando Animações

As animações usam Framer Motion. Edite as propriedades `initial`, `animate` e `transition` nos componentes.

### Adicionando Novas Funcionalidades

- **Blog**: Adicione uma seção de blog
- **Testimonials**: Seção de depoimentos
- **Timeline**: Linha do tempo de experiência
- **Resume Download**: Download do currículo

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

---

**Desenvolvido com ❤️ por Iraquian Rodrigues**
