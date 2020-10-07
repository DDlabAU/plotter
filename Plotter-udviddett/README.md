# plotter-udviddet
I denne guide vil du finde ud af hvordan man kan bruge AxiDraw plotteren i DD-Lab med andre typer software end inkscape. hvis du gerne vil anvende plotteren med Inkscape til at tegne .svg filer så se [plotter](https://github.com/DDlabAU/plotter) på DD-labs github.

DISC: (Udviddet brug af plotter vil løbende blive opdateret med flere måder at bruge plotteren på).

- Der findes andre måder hvorpå man kan arbejde/kontrollere AxiDraw plotteren.
  - [CLi-API ](https://axidraw.com/doc/cli_api)
  - [Python-API](https://axidraw.com/doc/py_api)
- Det er også muligt at interface direkte med AxiDraw's EBB motor control board.
  - [EBB Motor control board command protocol](http://evil-mad.github.io/EggBot/ebb.html)
  
### Python-AxiDraw-Api

<img src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png" alt="alt text" width="300">

Installationerne afhænger af om du bruger PC eller MAC.

- For at kunne bruge Python-API med plotteren kræver det at man har python installeret på sin computer.

1. Hvis du ikke er sikker på om du allerede har python installeret kan du tjekke det ved at åbne din terminal/command-prompt og skriv:
   `python --version`
   Hvis du har python installeret skulle der gerne stå at du har python version x installeret.
2. Hvis ikke python er installeret skal du gå ind på https://www.python.org/downloads/ og downloade python.
3. Herefter tjekker du igen om python er installeret ved at gå tilbage til trin 1. og skrive `python --version`.

4. Udover python skal du også have installeret ["pip"](https://pip.pypa.io/en/stable/installing/) som er python's package manager. Her kan du igen tjekke om du har pip installeret ved at skrive: `pip --version` i din terminal/command-prompt.
5. Hvis ikke pip er installeret kan du installere det ved at skrive:
   `sudo easy_install pip` og trykke ENTER.
6. Gå tilbage til trin 1 og test om pip er installeret.

### Installere afhængige programmer

- Brug pip til at installere **pyaxidraw** og **axicli**.

1. I terminal/command-prompt skriv:
   `cd /Users/username/Documents/axidraw-api/` **NOTE: Your location and path will vary**

2. Skriv: `pip install`

3. Skriv: `pip install -r requirements.txt`

**Vigtigt!!!**: Hvis ikke du allerede har gjort det så download denne mappe som en zip. I mappen er der en mappe der hedder "AxiDraw_API_v256" hvor de resterende elementer der skal til for at bruge python til at styre Axidraw, er i.

#### Python SVG

Brug python til at plotte .svg filer med AxiDraw.

Åben /plotter-udviddet/python/test_SVG.py i en text-editor der kan køre python-scripts.
personligt har jeg brugt [ATOM](https://atom.io/) med [script-package](https://atom.io/packages/script).

- Tilslut din computer med USB til plotteren og compile dit python script.

<img src="https://thumbs.gfycat.com/DistantReasonableDikkops-size_restricted.gif" alt="alt text" width="300">

#### Python interactive

Brug python interaktivt med AxiDraw.

Åben /plotter-udviddet/python/test_Interactive.py i en text-editor der kan køre python-scripts.

- Tilslut din computer med USB til plotteren og compile dit python script.

<img src="https://media2.giphy.com/media/ZfOEduyZdXEPK/giphy.gif" alt="alt text" width="300">

## Source

- https://axidraw.com/
- https://axidraw.com/sw
- https://axidraw.com/docs
- https://wiki.evilmadscientist.com/AxiDraw_User_Guide
- https://github.com/matthewalangreen/kinect-axidraw
- https://www.youtube.com/watch?v=j3yH6FfD_Wk (Pip install)
- https://www.youtube.com/watch?v=5lsAoQ8lF4M (Script package til python)
- https://github.com/piksels-and-lines-orchestra/inkscape (inkscape extension)
- https://courses.ideate.cmu.edu/60-428/s2018/ref/text/tut/max-osc-python.html (Max-osc-python)
