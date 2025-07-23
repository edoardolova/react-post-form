# 📝 React Blog Post Form

Una semplice applicazione React che consente agli utenti di compilare un modulo per la creazione di un post e inviarlo a un'API. Durante l'invio, viene visualizzata una modale che mostra lo stato della richiesta.

## 🚀 Funzionalità

- Form con campi:
  - Autore (stringa)
  - Titolo (stringa)
  - Contenuto del post (stringa)
  - Checkbox per indicare se il post è pubblico (booleano)
- Validazione del form (tutti i campi obbligatori eccetto la checkbox)
- Chiamata `POST` a un endpoint esterno
- Modale che mostra lo stato della richiesta: `loading`, `success`, `error`
- Reset automatico del form al termine dell'invio

## 🛠️ Tecnologie usate

- React
- Bootstrap
- Fetch API
