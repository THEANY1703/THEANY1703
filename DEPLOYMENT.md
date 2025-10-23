# 🚀 Guida al Deployment su GitHub Pages

Questa guida ti aiuterà a pubblicare il tuo portfolio su GitHub Pages.

## 📋 Prerequisiti

- Account GitHub
- Repository GitHub (pubblico o privato con GitHub Pro)
- Git installato localmente

## 🔧 Configurazione Iniziale

### 1. Crea un Repository GitHub

1. Vai su [GitHub](https://github.com) e crea un nuovo repository
2. Nome suggerito: `THEANY1703` o `flavio-leotta-portfolio`
3. Rendilo pubblico (necessario per GitHub Pages gratuito)

### 2. Clona e Configura il Repository

```bash
# Clona il repository
git clone https://github.com/TUOUSERNAME/THEANY1703.git
cd THEANY1703

# Aggiungi i file al repository
git add .
git commit -m "Initial commit: Portfolio setup"
git push origin main
```

### 3. Configura GitHub Pages

1. Vai nelle **Settings** del tuo repository
2. Scorri fino alla sezione **Pages**
3. In **Source**, seleziona **GitHub Actions**
4. Il workflow si attiverà automaticamente

## ⚙️ Configurazione Avanzata

### Aggiorna i Link nel Codice

Prima di pubblicare, aggiorna questi file:

#### `README.md`
```markdown
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://TUOUSERNAME.github.io/THEANY1703)
```

#### `index.html` e `pages.html`
```html
<meta property="og:url" content="https://TUOUSERNAME.github.io/THEANY1703">
```

#### `_config.yml`
```yaml
url: "https://TUOUSERNAME.github.io"
baseurl: "/THEANY1703"
```

### Personalizza il Dominio (Opzionale)

Se hai un dominio personalizzato:

1. Crea un file `CNAME` nella root del repository:
```
tuodominio.com
```

2. Configura i DNS del tuo dominio per puntare a GitHub Pages

## 🎯 Struttura Finale del Repository

```
THEANY1703/
├── index.html              # Pagina principale (GitHub Pages)
├── pages.html              # Versione alternativa
├── styles.css              # Stili CSS
├── script.js               # JavaScript
├── README.md               # Documentazione
├── _config.yml             # Configurazione Jekyll
├── .github/
│   └── workflows/
│       └── deploy.yml      # Workflow GitHub Actions
├── .gitignore              # File da ignorare
└── DEPLOYMENT.md           # Questa guida
```

## 🚀 Deployment Automatico

Il repository è configurato per il deployment automatico:

- **Trigger**: Ogni push sul branch `main`
- **Workflow**: GitHub Actions
- **Output**: Sito live su `https://TUOUSERNAME.github.io/THEANY1703`

### Comandi Utili

```bash
# Aggiorna il sito
git add .
git commit -m "Update portfolio"
git push origin main

# Controlla lo stato del deployment
# Vai su: https://github.com/TUOUSERNAME/THEANY1703/actions
```

## 🔍 Verifica del Deployment

1. **GitHub Actions**: Controlla che il workflow sia completato con successo
2. **GitHub Pages**: Verifica nelle Settings > Pages che il sito sia attivo
3. **URL Live**: Visita `https://TUOUSERNAME.github.io/THEANY1703`

## 🛠️ Troubleshooting

### Problema: Sito non si aggiorna
**Soluzione**: 
- Controlla che il workflow GitHub Actions sia completato
- Verifica che non ci siano errori nel log del workflow
- Assicurati che il branch sia `main`

### Problema: Stili non si caricano
**Soluzione**:
- Verifica che `styles.css` sia presente nella root
- Controlla i percorsi relativi nei file HTML
- Assicurati che il file sia committato

### Problema: JavaScript non funziona
**Soluzione**:
- Verifica che `script.js` sia presente nella root
- Controlla la console del browser per errori
- Assicurati che il file sia committato

## 📱 Test del Sito

Dopo il deployment, testa:

- [ ] **Desktop**: Visualizzazione corretta su browser desktop
- [ ] **Mobile**: Responsive design su dispositivi mobili
- [ ] **Performance**: Tempi di caricamento accettabili
- [ ] **Funzionalità**: Tutte le animazioni e interazioni funzionano
- [ ] **Enigma**: Il puzzle è risolvibile
- [ ] **Contatti**: I link funzionano correttamente

## 🎉 Completato!

Il tuo portfolio è ora live su GitHub Pages! 

**URL del sito**: `https://TUOUSERNAME.github.io/THEANY1703`

### Prossimi Passi

1. **Condividi**: Aggiungi il link al tuo CV e profili social
2. **SEO**: Considera l'aggiunta di Google Analytics
3. **Backup**: Mantieni sempre una copia locale del codice
4. **Aggiornamenti**: Usa Git per versionare le modifiche

---

**Buon lavoro! 🚀**
