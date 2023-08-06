# Boss data documentation

### About
This table displays important data values for each phase of a boss.

### Excel file
You can downlad the whole table as a handy excel file here: [bosses.xlsx](../../customData/bosses.xlsx)

### Chapter 4.5

|Boss|ID|Attack|State|StateFrame|I1|I2|V1|V2|Animation|Trigger|TriggerFrame|Comments|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|Rotgut|911|Idle|3|Time spent|0|0|0|0|Idle| | | |
| | |Attack 8|8|0|0 = Slow double ring 1 = Fast rotation 2 = lines in a fan, up then down|0|0|0|Attack1*|Sound1 (Begin) Shoot (Begin) Sound1 (End)|6 42 9| |
| | |Puke|9|0|0|0|0|0|Attack2*|Sound1 (Begin) Sound2 (Begin) Shoot (Begin) Sound1 (End)|8 15 47 14| |
| | |Munch|10|Number of munches|0 = Triple munch 1 = Munch|0|0|0|Munch|Shoot Sound1|6 14| |
|Scourge|909|Idle|3|0|0|0|?|Not used as floats visibly…|Idle IdleLeft IdleRight| | |0xAF2 is the time spent Idle|
| | |Slice Both Arms|10|0|0|0|?|Not used as floats visibly…|SliceLeft / SliceRight / SliceBoth SlicePullRight/Left SlicePullLoopRight/Left|Sound (4) / Shoot (14) Shoot (18) |4 / 14 18 |0xAF6 (16 bits) for attack. Do not switch in the middle of attack. 0 = slice both arms, 1 = slice single arm. If AF6 == 1, attack lasts 60 frames. If AF6 == 0, attack last 240 frames, and bullets are emitted every 30 frames. AF4 (16 bits) is initialy used to detect whether arms have hit walls or not (frame timer)|
| | |End Trap / Slice|9|0|0|0|?|Not used as floats visibly…|TrapEndDown| | |Transition into it once state 10 nears end |
| | |Spiral|6|0|0|0|?|Not used as floats visibly…|HoverStart HoverLoop|Shoot (11) |11 |The angle of the tear is determined by a summon entities like dyn array of floats located at 0xB54. Timer is indicated by 0xAF0 (16 bits), lasts for 240 frames. If the attack is triggered before the list has been initialized, angle will be 0 for the entire attack|
| | |Spiral End|7|0|0|0|?|Not used as floats visibly…|HoverEnd|Shoot (11)|11|Switch happens at the end of the spiral attack, once 0xAF0 reaches 240|
| | |Trap down|8|0|0|0|?|Not used as floats visibly…|TrapDown TrapDownLoop|Sound (4) / Shoot(9) |4 / 9|0xAF6 (16 bits) for attack. Switch can be done at any time and attack will transition. 0 = Lines with holes, 1 = shooting from tentacles. 0xAF0 (16 bits) is the timer |
| | |Brocolli|11|0|0|0|?|Not used as floats visibly…|BrocolliAttack|Sound (10 / 25 / 67) Shoot (46)|10 / 25 / 67 46|AF0 = 0 at beginning of attack, 1 when brocolli fired, 2 upon explosion. Whether it is three attacks depends on HP once attack is initiated, amount of tears in the brocolli depends on HP when brocolli is fired. Animation is looped to allow multiple shots|
|Chimera (Phase 1)|910|Walk / Maggots|3|0|0|0|0|0|WalkHori / WalkVert There is no distinct animation for spitting Magots as the game simply overlays an animation on the top layer of the sprite| | |Transitions after executing State 6.  Maggots can be identified by AF0 (32 bits) == -1 AF0 decreases during this time; transition to State 4 can only be performed when the timer is lower than 29 (because of a bug, if AF0 == -1 this will softlock the boss)|
| | |Run / Maggots|4|0|0|0|0|0|RunHori / RunVert No distinct animation for maggots for the same reason| | |Transitions after spending a certain time in State 3. Maggots can be identified by AF0 (32 bits) == -1 AF4 (32 bits) indicates how much time is spent in the state. Transitions automatically if health drops below 50%|
| | |Boom Fly|8|0|0|0|0|0|SpitFly|Shoot (spawn) Jump (throw)|21 41|Only performed if State = 3. The fly is part of the sprite, replacing the enemy is difficult|
| | |Jump|6|0|0|0|0|0|Leap|Jump Shoot|14, 39 28, 54|Only performed if State = 4. AF4 (32 bits) indicates how many jumps have been performed. If AF4 != 0, landing will trigger shockwaves, if AF4 == 0 landing will trigger bullets|
| | |Ipecac|9|0|0|0|0|0|FallBack|Jump Shoot|13 23|Only performed if State = 3. AF4 (32 bits) indicates how much time is spent in the state. Projectiles are fired every two frames once trigger emitted (can be checked using AF4). AF4 is used as a position offset for the projectiles as the tears are fired in an arc.|
| | |Transition|7|0|0|0|0|0|Trip*|Shoot|9|This replaces the transition to State 6 if Chimera has less than 50% HP|
|Chimera Body (Phase 2)|910.1|Walk|3|0|0|0|0|V2 is used as four integral bytes|WalkHoriHeadless / WalkVertHeadless| | |Transition back after State 11. 0xB0C (8 bits) decreases by 1 every 16 frames at which point there is a 1/60 % chance the body transitions into State 4|
| | |Brimstone|10|0|0|0|0|0|BrimstoneStart BrimstoneLoop BrimstoneEnd|Jump, Shoot  Jump|4, 14  8|AF4 seems to represent how many triggers have been fired (why ?)|
| | |Run|4|0|0|0|0|0|RunHoriHeadless / RunVertHeadless| | |AF4 (32 bits) indicates how much time spent. Transitions into 11 after 100 frames|
| | |Slide|11|0|0|0|0|0|RollBegin Roll RollEnd| | |AF4 (32 bits) indicates how much time spent. Once done, back to 3 and 0xB0C (8 bits) is set to 0xF|
| | |Throw Head|16|0|0|0|0|0|ThrowHead| | | |
|Chimera Head (Phase 2)|910,2|Idle|3|Time spent|0|0|0|0|Idle| | | |
| | |Hop|6|-1|0|Number of consecutive hops|A point in the general direction of the hop|0|Jump|Jump Shoot|7 19| |
| | |Bullets|8|Time spent|0|0|0|0|Shoot|Shoot|24| |
| | |Dash|9|0|0|0|0|0|ChargeAnnounce| | |Only on very first dash|
| | | |10|0|Set to 1 if Chimera targets the body|0|0|0|ChargeBegin ChargeLoop ChargeEndShort ChargeEnd| | |ChargeEndShort while performing the first two dashes, ChargeEnd on the last if not on the body|
