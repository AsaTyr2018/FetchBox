## 🧩 Projekt: **FetchBox**

### 📝 Kurzbeschreibung

**FetchBox** ist ein webbasiertes Tool zum Hochladen, Verwalten und sicheren Teilen von Dateien. Es bietet eine differenzierte Zugriffskontrolle (öffentlich, privat, gruppenbasiert) sowie die Möglichkeit, temporäre Download-Links zu generieren.

---

### 🧠 Hauptfunktionen

1. **Download-Verwaltung**

   * Upload von Dateien via Web-UI
   * Übersicht aller Dateien mit:

     * Vorschau (z. B. Bild, Dateityp-Icon)
     * Beschreibungstext
   * Download-Links generieren (öffentlich oder eingeschränkt)

2. **Zugriffsarten**

   * **Öffentlich**: Jeder mit Link kann Datei herunterladen
   * **Privat**: Nur authentifizierte Benutzer mit Berechtigung
   * **Onetime-Link**: Einmaliger Zugriff, danach ungültig

3. **Benutzerverwaltung**

   * Benutzerkonten anlegen, löschen, verwalten
   * Benutzerberechtigungen je Datei
   * Authentifizierung erforderlich für private Downloads

4. **Gruppenverwaltung**

   * Benutzer in Gruppen organisieren
   * Zugriffsrechte auf Gruppenebene zuweisbar
   * Verwaltung über Admin-Interface

---

### 🔒 Sicherheitsfeatures

* Authentifizierung (z. B. JWT, Session-basiert)
* Berechtigungsprüfung auf File- und Gruppenebene
* Ablaufende & einmalige Links
* Logging von Dateiabrufen (optional)

---

### ⚙️ **Technologie-Stack (lokaler Storage, perfekt abgestimmt)**

| Kategorie     | Technologie                                          | Begründung                                                                                                                         |
| ------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**  | **Next.js**                                          | Moderne, SSR-fähige Web-App mit React – ideal für UI/UX und schnelles Dev-Prototyping.                                             |
| **Backend**   | **FastAPI**                                          | Asynchrones, schnelles Python-Framework mit klarer REST-API-Struktur – ideal für Autorisierung, Upload-Logik und Link-Handling.    |
| **Datenbank** | **PostgreSQL**                                       | Stabil und relational – perfekt für User-Gruppen-Berechtigungen, Datei-Metadaten, Ablauf-Logs etc.                                 |
| **Storage**   | **Lokales Dateisystem** (z. B. `/var/fetchbox/data`) | Einfach zu verwalten, performant bei lokalen Setups, ideal für On-Prem oder private Server. Zugriff über Pfade in der DB geregelt. |
| **Auth**      | **Auth0**                                            | Externer Auth-Service mit einfacher Integration in Frontend und API. Alternativ: lokale Auth mit z. B. FastAPI-Users.              |

---

### 🧠 Anmerkungen zur **lokalen Storage-Integration**

* Uploads werden im Backend entgegengenommen (z. B. `/upload`-Route in FastAPI).
* FastAPI speichert Dateien z. B. unter `/var/fetchbox/data/<uuid>` mit Metadaten in PostgreSQL.
* Für temporäre/onetime-Links werden UUIDs + Signaturen verwendet.
* Berechtigungen (User/Gruppen) werden über DB geprüft, nicht über den Filesystem-Zugriff selbst.

---

### 🔧 Admin-Funktionen

* Dateimanagement-Dashboard
* Benutzer- und Gruppenpflege
* Berechtigungsverwaltung
* Download-Statistiken und Logs

---
