## Jobs Search Engine

Hai il compito di migliorare un progetto esistente, un motore di ricerca per offerte di lavoro in remoto.

Puoi trovare il progetto qui –> [d9-hw-start](https://join.epicode.com/wp-content/uploads/2022/08/d9-hw-start.zip)  
Fai un fork o scaricalo come zip, lo dovrai consegnare a fine giornata.

Ecco un breve riassunto di come funziona l’applicazione: nella pagina principale l’utente può effettuare una ricerca per la posizione desiderata, ottenendo dei risultati. In questo elenco di risultati, cliccando il nome di un’azienda si viene re-indirizzati a una pagina `/:company` dove vengono elencati tutte le inserzioni di lavoro di quella specifica azienda.

```
API disponibili:

https://strive-benchmark.herokuapp.com/api/jobs?search=developer&limit=10
https://strive-benchmark.herokuapp.com/api/jobs?company=Olla
https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10
```

**➡️ Oggi il tuo compito è aggiungere Redux al progetto.**

### TASKS:

- Implementa il pattern Redux nell’applicazione, con uno store e un reducer.
- Fornisci all’utente la capacità di aggiungere un’azienda ad un elenco di preferiti.  
  Non c’è limite al numero di aziende che possono essere aggiunte tra i preferiti.  
  Questo elenco di preferiti deve essere salvato interamente nel Redux Store, e renderizzato sotto forma di lista in una pagina separata (es. su una rotta `/favourites)`.
- Non dimenticare che anche la lista renderizzata su `/favourites` deve avere il nome dell’azienda cliccabile come nella pagina principale.[EXTRA]
- Permetti all’utente anche di rimuovere un’azienda dalla lista dei preferiti.
