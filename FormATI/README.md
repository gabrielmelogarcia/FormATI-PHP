# Formulário de Cadastro ATI-MA
# O README FOI FEITO COM IA ---------------

## 📋 O que o projeto faz

Este projeto implementa um **Formulário de Cadastro** para a ATI - Maranhão. O formulário coleta informações pessoais dos usuários, incluindo:

- Nome completo
- CPF
- Data de nascimento
- Email
- Telefone
- Endereço completo (CEP, rua, número, bairro, cidade e UF)
- Observações

O formulário realiza **validação em tempo real** no navegador antes do envio dos dados para o servidor, garantindo que todos os campos obrigatórios sejam preenchidos corretamente.

---

## 🌐 Como abrir o formulário no navegador

### Pré-requisitos
- Apache 2.4 instalado e configurado
- O projeto está localizado em `c:\Apache24\htdocs\FormATI\`

### Passos para abrir

1. **Inicie o Apache** (se não estiver em execução)
   - Abra o Apache Service Monitor ou reinicie o serviço Apache24

2. **Abra seu navegador** e acesse:
   ```
   http://localhost/FormATI/index.html
   ```

3. O formulário será carregado com toda a estilização CSS e funcionalidades JavaScript

---

## ✅ Como testar o envio

### Teste com validação bem-sucedida

1. Preencha **todos os campos obrigatórios** (*) com dados válidos:
   - **Nome**: Digite um nome completo
   - **CPF**: Use o formato `XXX.XXX.XXX-XX` (ex: 123.456.789-00)
   - **Data de Nascimento**: Selecione uma data
   - **Email**: Digite um email válido
   - **Telefone**: Use o formato `(XX) XXXXX-XXXX` (ex: (98) 99999-9999)
   - **CEP**: Use o formato `XXXXX-XXX` (ex: 65000-000)
   - **Endereço**: Preencha rua, número, bairro, cidade e UF

2. Clique no botão **"Enviar"** ou **"Cadastrar"**

3. Os dados serão validados e enviados via POST para `salvar.php`

4. Você receberá uma mensagem de confirmação: **"Formulário enviado com sucesso!"**

### Teste de validação (erros esperados)

O formulário valida automaticamente e exibe alertas se:
- Um campo obrigatório não for preenchido
- O CPF não tiver o formato correto
- O CEP não for preenchido
- Qualquer outro campo obrigatório estiver vazio

Tente deixar um campo em branco e clicar em "Enviar" para ver a validação em ação.

---

## 🛠️ Tecnologias usadas

### **HTML**
- Estrutura semântica com `<form>`, `<input>`, `<label>`
- Formulário responsivo e acessível
- Suporte a múltiplos tipos de input: text, email, tel, date

### **CSS** (`style.css`)
- Estilização responsiva e moderna
- Layout adaptável para diferentes tamanhos de tela
- Identidade visual da ATI-MA

### **JavaScript** (`app.js`)
- Validação de formulário em tempo real
- Prevenção de envio inválido com `event.preventDefault()`
- Verificação de campos obrigatórios
- Validação de formato (CPF, CEP, email, telefone)
- Integração com APIs de preenchimento automático (via CEP)

### **PHP** (`salvar.php`)
- Recebimento de dados via POST
- Processamento de requisições HTTP
- Resposta em JSON/texto

---

## 📁 Estrutura de arquivos

```
FormATI/
├── index.html          # Arquivo principal com o formulário
├── app.js              # Lógica de validação e interação
├── style.css           # Estilos e layout
├── salvar.php          # Backend para processar dados
├── ati_logo.svg        # Logo da ATI-MA
└── README.md           # Documentação
```

---

## 🚀 Desenvolvido com foco em usabilidade e segurança

- ✅ Validação client-side para melhor UX
- ✅ Responsivo e acessível
- ✅ Tratamento de erros adequado

---


