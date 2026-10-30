# Nymbo: sounds and third-party licences

Every recorded sound in `sounds/` is **CC0 (public domain)**: free for commercial use, no attribution required.
They were downloaded on 29 Oct 2026 and trimmed, normalised and re-encoded for the game (`build_sounds.py`).
Credits below are a courtesy, not a requirement.

| Game sound files | Source | Author | Licence |
|---|---|---|---|
| `amb_bed` (morning meadow: wind + birds) | [BigSoundBank #0912 "Campaign Morning"](https://bigsoundbank.com/campaign-morning-s0912.html) | Joseph Sardin | CC0 |
| `amb_grass` | [BigSoundBank #0908 "Wind in Tall Grass"](https://bigsoundbank.com/wind-in-tall-grass-s0908.html) | Joseph Sardin | CC0 |
| `amb_trees` | [BigSoundBank #0904 "Wind in the Trees"](https://bigsoundbank.com/wind-in-the-trees-s0904.html) | Joseph Sardin | CC0 |
| `roll` | [BigSoundBank #1843 "Running in the Tall Grass"](https://bigsoundbank.com/running-in-the-tall-grass-s1843.html) | Joseph Sardin | CC0 |
| `land`, `land2` | BigSoundBank #1839, #1840 "Jumping on Grass" | Joseph Sardin | CC0 |
| `moo1`–`moo5` | BigSoundBank #2382–#2386 "Cow moos #2–#6" | Joseph Sardin | CC0 |
| `baa1`–`baa9` | BigSoundBank #2343–#2351 "Sheep #1–#9" | Joseph Sardin | CC0 |
| `throw1`–`3`, `whoosh_long`, `whoosh_big` | BigSoundBank #1797, #1798, #1802, #1801, #1796 "Whoosh" | Joseph Sardin | CC0 |
| `glock` (the Nymbo bell notes) | BigSoundBank #0920 "Glockenspiel" | Joseph Sardin | CC0 |
| `chimes` | BigSoundBank #2687 "Cluster Chimes #1" | Joseph Sardin | CC0 |
| `cheer` | BigSoundBank #0236 "Shouts and Applauses of Teens #1" | Joseph Sardin | CC0 |
| `siren` | BigSoundBank #1464 "2 Ton Siren" | Joseph Sardin | CC0 |
| `boom_tail` | BigSoundBank #1023 "Explosion far Away #1" | Joseph Sardin | CC0 |
| `ice_crack`, `shatter2` | BigSoundBank #2207 "Cracking ice #3", #0148 "Glass Burst" | Joseph Sardin | CC0 |
| `clonk1`–`3`, `clonk_big`, `ko`, `jump`, `jump2`, `plop`, `gong`, `heart`, `hoof` | [OpenGameArt "100 CC0 SFX"](https://opengameart.org/content/100-cc0-sfx) | rubberduck | CC0 |
| `boom1`, `boom2` | [OpenGameArt "25 CC0 bang / firework SFX"](https://opengameart.org/content/25-cc0-bang-firework-sfx) | rubberduck | CC0 |
| `crumble1`, `crumble2` | [OpenGameArt "75 CC0 breaking / falling / hit SFX"](https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx) | rubberduck | CC0 |
| `nuke_rumble` | [OpenGameArt "Muffled Distant Explosion"](https://opengameart.org/content/muffled-distant-explosion) | NenadSimic | CC0 |
| `freeze` | [OpenGameArt "Freeze Spell"](https://opengameart.org/content/freeze-spell-0) | artisticdude | CC0 |
| `dodge` | [OpenGameArt "Swishes Sound Pack"](https://opengameart.org/content/swishes-sound-pack) | artisticdude | CC0 |
| `shatter1` | [OpenGameArt "Ice breaking/shattering"](https://opengameart.org/content/ice-breakingshattering) | IgnasD | CC0 |
| `hit1`–`hit3` | [OpenGameArt "Thwack Sounds"](https://opengameart.org/content/thwack-sounds) | AntumDeluge | CC0 |
| `impact_wood`, `impact_stone` | [OpenGameArt "Impact"](https://opengameart.org/content/impact) | qubodup | CC0 |
| `pop` | [OpenGameArt "3 Pop Sounds"](https://opengameart.org/content/3-pop-sounds) | wubitog | CC0 |
| `grab1`–`grab3` | [OpenGameArt "54 Casino sound effects"](https://opengameart.org/content/54-casino-sound-effects-cards-dice-chips) | Kenney | CC0 |
| `cloth` | [OpenGameArt "50 RPG sound effects"](https://opengameart.org/content/50-rpg-sound-effects) | Kenney | CC0 |
| `ui`, `tick`, `lock`, `reload`, `denied`, `full`, `alert`, `portal`, `respawn`, `flagdrop`, `confirm`, `powerdown`, `powerup`, `grab_*` | Kenney "Interface Sounds" ([GitHub mirror](https://github.com/Calinou/kenney-interface-sounds)) | Kenney | CC0 |

Not recorded (still made in code): the falling-bomb whistle and the portal hum. The whole original made-in-code
sound set is kept and can be switched back on with **Classic sounds** in the pause menu.

## Code and fonts

| Thing | Licence | What it means |
|---|---|---|
| three.js 0.169 (3D engine) | MIT | Free to use commercially; keep its licence notice with the code. |
| Rapier 3D 0.12 (physics, by Dimforge) | Apache-2.0 | Free to use commercially; keep its licence notice. |
| Lilita One and Lexend fonts (Google Fonts) | SIL Open Font License 1.1 | Free to use in the game; you just can't sell the font files on their own. |

## The game itself

- **Concept:** capture-the-flag with throwable blocks is inspired by *Toblo* (DigiPen student game, 2006). Game rules and
  mechanics aren't protected by copyright, but names, art, music, code and characters are. Nymbo uses none of Toblo's
  assets, name or characters: the robots (Ali's designs), forts, animals, power-ups, UI and code are all original.
- **Name:** no game, app or registered trademark called "Nymbo" turned up in a quick search (29 Oct 2026). Close but
  different marks exist ("Nymgo", a calling app; "Nymball Games"). Before launch, do a proper trademark search for
  "Nymbo" in your country / app stores (class 9 software and class 41 games) and consider registering it.

## Added later
- `tramp.mp3` (hidden trampoline): from the CC0 "100 CC0 SFX" pack (spring_02), OpenGameArt.
- `vjump1-3.mp3` (your robot shouting "Jump!"): generated with the Piper text-to-speech voice `en_US-kristin-medium`
  (trained on public-domain LibriVox recordings), pitched up about 3 semitones for a younger voice.

## Sound set 3 (current)
Most sound effects were generated with Stable Audio Open Small (Stability AI Community License; outputs are owned by
the creator) from text descriptions written for Nymbo, then chosen and polished by tools/pick.py. Powered by Stability AI.
A few precise UI sounds (heartbeat, countdown beep, clock tick, lock-on, menu click) are synthesised in code (tools/synth_small.py).
Before Nymbo earns money: register (free) at https://stability.ai/community-license and keep this credit visible in the game's about page.
