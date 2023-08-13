# Boss data documentation

### About
This table displays important data values for each phase of a boss.

### Excel file
You can downlad the whole table as a handy excel file here: [bosses.xlsx](../../customData/bosses.xlsx)

### Chapter 1.5

|Boss|ID|Attack|State|StateFrame|I1|I2|V1|V2|Animation|Trigger|TriggerFrame|Comments|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|Rainmaker|902|Idle|3|0|0|0|0|0|Walk| | | |
| | |Ring|8|0|0|1|0|0|Attack1*|Shoot (Attack1End)|13|ProjectileCooldown needs to be reset !|
| | |Follow|9|0|0|0|0|0|Attack2*|Shoot/Clap (Attack2End)|27/32| |
| | |Bubble|10|0|Number|0|0|0|Attack3|Clap/Clap/Shoot|40/46/50| |
| | |Lines|8|0|0|0|0|0|Attack1*|Shoot (Attack1End)|13| |
|Lil Blub|901|Idle|3|0|0|0|0|0|Idle| | |Reset ProjectileCooldown and ProjectileDelay|
| | |Defensive Leech|8|0|0|0|0|0|Attack01|Shoot|18| |
| | |Offensive Leech|9|0|0|0|0|0|Attack02|Shoot|18| |
| | |Jump|11|0|0|0|0|Speed|Attack04|Jump/Land/Shoot|20/35/49| |
| | |Tears|10|0|0|0|X = Angle|0|Attack03|Shoot|16| |
|Wormwood|62.3|Underground|3|Time before emerge|0|0|0|0| | | |Wormwood will start pathfinding towards a near pit when StateFrame reaches 0|
| | |Move|4|Time before underground|0|0|0|0| | | |Same|
| | |Jump|6|Time spent|Number of animations 0: Jump out 1: Spit 2: Swim| |Speed|X = Number of consecutive jumps|Head*|Shoot (Head*Transition)|8| |
| | |Puke|8|0|0|0|0|0|Attack1| | | |
| | |Rage|9| | | | | |Head* + Attack2|Shoot (Attack2)|8| |
|Min-Min|913|Summon 1|13|0|0|0|0|0|Spit|Shoot|14| |
| | |Summon 4|14|0|0|0|0|0|Spit|Shoot|14| |
| | |Idle|3|0|0|0|0|0|Walk| | | |
| | |Transition|16|0|1|0|0|0|Transition| | | |
| | |Throw all|8|1 ?|0|0|0|0|(Reverse)Spin|(15) 19| | |
| | |Summon P2|13|0|1|0|0|0|Spit2|Shoot|10| |
| | |Throw all P2|8|1 ?|1|0|0|0|Spin2|Shoot|14| |
| | |Flies track|9|0|1|0|0|0|Throw|Shoot|14| |
| | |Summon many P2|14|0|1|0|0|0|Spit2|Shoot|10| |
| | |Dive|6|Time spent underground|1|Groups fired|0|0|Dive|Shoot|16|Summon 1000.157 Need to perform UndergroundDive on Willows (+ adapt their AI vars)|
|Min-Min Spawner|1000.157|Idle|0|N/A|N/A|N/A|N/A|N/A|Idle| | | |
| | |Attack|1|N/A|N/A|N/A|N/A|N/A|Spawn| | | |
|Clog|914|Idle|3|0|0|?|0|0|Idle| | | |
| | |Bullet Hell|10|Time spent|0|?|V1.X = Angle V1.Y = Pattern|0|BulletHell*| | |Patterns: 10/-10 = tight 25/-25 = fast, space Sign = (counter)clockwise|
| | |Spit|8|0|0|?|0|0|Spit|Shoot|9| |
| | |Fart|11|0|0|?|0|0|Fart|Shoot/Sound|33/51| |
| | |Spin|9|Time spent|Direction (0 = counter-clockwise, 1 = clockwise)|?|0|0|Spin*| | | |
|Colostomia|917|Dash|8|0|Direction (0 = Left, 1 = Up…) |0|Speed|Position|Charge*|Shoot|23 / 8 (Start / End)| |
| | |Throw bomb|9|0|0|0|0|0|Attack|Shoot / Land|25 / 28| |
| | |Transition|16|0|0|0|0|0|Pop|Shoot / Land|16 / 36| |
| | |Bombs V|10|0|0|0|0|0|Attack2|Shoot|38| |
| | |Jump|6|0|0|0|Target~|V2.X = Speed ?|Dive + Surface| | |Target is not precice Speed is weird|
| | |Idle|4|0|0|0|0|0|Idle2| | | |
| | |Fart|11|0|1|0|0|0|GoUnder + Attack2 + Surface|Shoot + Shoot|3 (GoUnder) 30 (Attack3)|I don't know why I1 is set to 1|
|Turdlet|918|Idle|4|0|0|0|0|V1.X = Rotation angle| | | |Not sure how to alter the AI|
| | |Dash|8 + 6|0|0|0|?|V2.X  = Time spent V2.Y = Time limit| | | | |
