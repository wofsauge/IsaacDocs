# Boss data documentation

### About
This table displays important data values for each phase of a boss.

### Excel file
You can downlad the whole table as a handy excel file here: [bosses.xlsx](../../customData/bosses.xlsx)

### Final Bosses
| | | | | | | | | | | | | |
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|Boss|ID|Attack|State|StateFrame|I1|I2|V1|V2|Animation|Trigger|TriggerFrame|Comments|
|Mom (Foot)|45.10|Idle|3|0|0|0|0|0| | | | | |No animation. The game doesn't loop any of the other animations. Initial animation is an immediate Stomp|
| | |Quick Stomp|6|Time Spent|0|Number of stomps|0|0| | |QuickStompBegin (first) QuickStomp (subsequents) QuickStompEnd (final)|Shoot / Lift|27 / 37 7 / 17 7 / 41|Only Mausoleum Mom|
| | |Stomp|7|Time Spent|0|0|0|0| | |Stomp|Lift / Lift|27 / 61| |
|Mom (Door)|45|Idle|3|0|Identifier of the door, if 0 door moves when Mom moves. Should be > 0|0|0|0| | | | | |No animation, the game doesn't loop any of the other animations. Initial animation is Eye locked at frame 0 If the door is not spawned on a valid location (4 doors in a 1*1 room), it morphs into the foot|
| | |Eye|8|0|0|0|0|0| | |Eye|Appear / (Shoot) / Disappear|2 / (4) / 57| |
| | |Hand|9|0|0|0|0|0| | |ArmOpen|Appear / Disappear|7 / 45|Only classic path Mom|
| | |Flesh|10|0|0|0|0|0| | |Fat01 / Fat02|Appear / Shoot / Disappear|6 / 7 /57| |
| | |Eye Brimstone|11|0|0|0|0|0| | |EyeLaser|Appear / Shoot / Disappear|2 / 45 / 90|Only Mausoleum Mom|
|Mom's Heart It Lives|78 78.1|Summon|3|1|1|Phase|V1.X decreases. When 0, retreat upwards|V2.X increases with each summon, transitions into downwards when V2.X reaches 4 / 6 (depends on summon)|Only P4 : timer before next Brimstone|Determines type of summon|HeartbeatN|Heartbeat|1 : 6 2 : 6 3 : 3|Phase 1 : 0 = Eyes, 1 = Hosts, 2 = Globins Phase 2 : 0 = Lumps, 1 = Swingers, 2 = Globins Phase 3 : 0 = Boils,  2 = Tumor, 4 = Hearts Phase 4 : Nothing Works similar on both heart versions, but Mauso heart never transitions here again|
| | |Upward|3|Time spent|5|Phase|V1.Y = 8 Prevents attacks| |Timer before transition into attack, only used when I1 = 5| |HeartRetracted HeartHidingHearbeat|Heartbeat|7|Not in Phase 3 / 4 Works similar on both heart versions…|
| | |Downward|3|Time spent|4|Phase|V1.Y = 8 Prevents attacks|0|Decreases until 8, at which points transitions into attack|Increases by 1 modulo 3 (P1 + P2) Increases by 2 modulo 5 (P3)|HeartComedown|Heartbeat|7|Not in Phase 3 / 4 Works similar on both heart versions…|
| | |P1 10 Projectiles Expand, pause, expand|8|Time spent Transitions into summon when it reaches 180|Theoretical phase (i.e, how much health remains)|Active phase (i.e, what was the theoretical phase on the first frame on the active attack)|V1.Y = 3|0|0|0|HeartbeatN|Heartbeat|1 : 6 2 : 6 3 : 3|Classic path only Changed in P3|
| | |P1 2 Streams| | | | |V1.Y = 0| | | | | | |Classic path only|
| | |P1 2 Rings 10 projectiles Continuous move| | | | |V1.Y = 2| | | | | | |Classic path only Changed in P3|
| | |P1 8 Curved Lines| | | | |V1.Y = 1| | | | | | |Classic path only|
| | |P2 3 Pulsating Lines CW| | | | |V1.Y = 4| | | | | | |Classic path only|
| | |P2 3 Pulsating Lines CCW| | | | |V1.Y = 5| | | | | | |Classic path only|
| | |P2 Line| | | | |V1.Y = 6| | | | | | |Classic path only|
| | |P2 Star| | | | |V1.Y = 7| | | | | | |Classic path only|
| | |P3 2 Rings 4 Projectiles Continous move| | | | |V1.Y = 2| | | | | | |Classic path only|
| | |P2 4 Projectiles Expand, pause, expand| | | | |V1.Y = 3| | | | | | |Classic path only|
| | |Brimstone| |Time spent| | |V1.Y = 9| | | | | | |Classic path only|
| | |P1 Spiral| |Time spent Transitions into Mauso summon when reaching 180| | |V1.Y = 10| | | | | | |Mauso only|
| | |P1  16 Projectiles Continuous| | | | |V1.Y = 12| | | | | | |Mauso only Changed in P3 (never triggered ?)|
| | |P1 16 Projectiles Expand, pause, expand| | | | |V1.Y = 13| | | | | | |Mauso only Changed in P3|
| | |P2 Rings with tears rotating| | | | |V1.Y = 16| | | | | | |Mauso only|
| | |P2 Rings with small loops going inward| | | | |V1.Y = 17| | | | | | |Mauso only|
| | |P2 Curved lines rotating | | | | |V1.Y = 14| | | | | | |Mauso only|
| | |P2 Rings with small loops, going outward| | | | |V1.Y = 15| | | | | | |Mauso only|
| | |P3 Disorganised cluster| | | | |V1.Y = 13| | | | | | |Mauso only|
| | |P3 2 * Rings of 6 projectiles, 1 CW, 1 CCW| | | | |V1.Y = 11| | | | | | |Mauso only Wiki says it can happen in first phase, didn't see it|
| | |P3 Disorganised cluster (duplicate ?)| | | | |V1.Y = 12| | | | | | |Mauso only Never actually seen it, weird duplicate ?|
| | |Brimstone| |Time spent| | |V1.Y = 18| | | | | | |Mauso only|
|Isaac|102|P1 Idle|3|0|0|Timer before attack, decreases by 65536| |X = Health Y = Damage taken past seconds|0|0|1Idle|None|None|Shoots tears if V2.Y > 10, each tear decreases the value|
| | |2 rings of 10 tears CCW + 1 ring CW internal|8|0|0|Attack timer. Increases by 65536| | | | |1Attack (First phase) 3FBAttackStart (Second phase) 3FBAttack4Loop (Second phase) 3FBAttack4End (Second phase)| | |Setting I1 above 29 will keep increasing the amount of tears in the pattern. Al lare reused in third phase|
| | |2 rings or 10 tears CW + 1 ring CCW| | |1| |V1.X = angle (radians)| | | | | | | |
| | |2 rings of 10 tears in line| | |2| | | | | | | | | |
| | |2 rings of 8 tears| | |3| | | | | | | | | |
| | |2 rings of 8 tears CCW homing back on Isaac| | |4| | | | | | | | | |
| | |3 rings of 10 tears CCW + 1 ring CW internal| | |5| | | | | | | | | |
| | |3 rings of 10 tears CW + 1 ring CCW internal| | |6| | | | | | | | | |
| | |3 ring of 10 tears in line| | |7| | | | | | | | | |
| | |3 rings of 8 tears| | |8| | | | | | | | | |
| | |3 rings of 8 tears CCW homing back on Isaac| | |9| | | | | | | | | |
| | |4 rings of 10 tears CCW + 1 ring CW internal| | |10| | | | | | | | | |
| | |4 rings of 10 tears C W + 1 ring CCW internal| | |11| | | | | | | | | |
| | |4 rings of 10 tears in line| | |12| | | | | | | | | |
| | |4 rings of 8 tears| | |13| | | | | | | | | |
| | |4 rings of 8 tears CCW homing back on Isaac| | |14| | | | | | | | | |
| | |5 rings of 10 tears CCW + 1 ring CW internal| | |15| | | | | | | | | |
| | |5 rings of 10 tears C W + 1 ring CCW internal| | |16| | | | | | | | | |
| | |5 rings of 10 tears in line| | |17| | | | | | | | | |
| | |5 rings of 8 tears| | |18| | | | | | | | | |
| | |5 rings of 8 tears CCW homing back on Isaac| | |19| | | | | | | | | |
| | |6 rings of 10 tears CCW + 1 ring CW internal| | |20| | | | | | | | | |
| | |6 rings of 10 tears C W + 1 ring CCW internal| | |21| | | | | | | | | |
| | |6 rings of 10 tears in line| | |22| | | | | | | | | |
| | |6 rings of 8 tears| | |23| | | | | | | | | |
| | |6 rings of 8 tears CCW homing back on Isaac| | |24| | | | | | | | | |
| | |7 rings of 10 tears CCW + 1 ring CW internal| | |25| | | | | | | | | |
| | |7 rings of 10 tears C W + 1 ring CCW internal| | |26| | | | | | | | | |
| | |7 rings of 10 tears in line| | |27| | | | | | | | | |
| | |7 rings of 8 tears| | |28| | | | | | | | | |
| | |7 rings of 8 tears CCW homing back on Isaac| | |29| | | | | | | | | |
| | |P2 4 tears| |Time since last pillar|0|1| | |40 then decrease every frame| |2Attack| | |Resets ProjectileCooldown to 40|
| | |P2 8 tears| |Time since last pillar|1|1| | |40 then decrease every frame| |2Attack| | |Resets ProjectileCooldown to 40|
| | |P2 Idle|3|Time since last pillar|0|Timer before attack, decreases by 65536|0| |Decreases| |2Idle| | | |
| | |Holy Light|3|8 then decreases|Any|Any|Any| |-1| |2Idle| | |Resets ProjectileCooldown to 40 after spawning beams of light. Isaac keeps spawning beams until StateFrame becomes negative|
| | |Summon|3|Any|Any|Any|Any| |-1| |2Idle| | |Resets ProjectileCooldown to 40 after spawning babies.|
| | |Room wide Crack the Sky|9|Any|Any|Any|1000 (Left-Right) + Time Spent 2000 (Right-Left) + Time Spent| |Any|Random()|3FBAttack3 3Appear (end)| | |Triggered every 10% health lost after reaching 50% health, the game checks for the last bits of I2 to detect the different thresholds|
|Satan|84|Idle Fallen|3|Time spent, spawns Fallen at 130|0|0|0|0|0|0|SmallIdle| | | |
| | |Idle post Fallen|3|0|1|0|0|0|0|0|SmallIdle| | | |
| | |Move|4|0|2|Last attack|0|0|0|0|Walk| | | |
| | |5 + 4 tears in arc|8|0|2|8|0|0|0|0|Attack01| | | |
| | |Brimstone Mouth|9|0|2|9|0|0|0|0|Attack02| | | |
| | |Brimstone Hands|10|0|2|10|0|0|0|0|Attack03| | | |
| | |Tear Rings|11|0|2|11|0|0|0|0|Attack03| | | |
|Satan (Foot)|84.10|Idle|3| |4|0| | | | | | | | |
| | |Stomp|7|Time spent|4|0| | | | |Stomp| | | |
| | |Summon Leech|7| |4|0| | | | | | | |50% chance when transitionning|
|???|102.1|P1 Idle|3|0|0|Timer before attack, decreases by 65536|0|X = Health Y = Damage taken past seconds|0|0|1Idle|None| |Flies summons appear randomly|
| | |2 Rings of 7 tears|8|0|0-4|Duration, increases by 65536|X = Angle| | | |1Attack (First phase) 3FBAttackStart (Second phase) 3FBAttack4Loop (Second phase) 3FBAttack4End (Second phase)| | |Used in P1 and P3 Curve once health < 80%|
| | |3 Rings of 7 tears| | |5-9| | | | | | | | | |
| | |4 Rings of 7 tears| | |10-14| | | | | | | | | |
| | |5 Rings of 7 tears| | |15-19| | | | | | | | | |
| | |6 Rings of 7 tears| | |20-24| | | | | | | | | |
| | |7 Rings of 7 tears| | |25-29| | | | | | | | | |
| | |P2 4 tears| | |0|1| | | | |2Attack| | | |
| | |P2 8 tears| | |1|1| | | | | | | | |
| | |P2 Idle|3|0|0|Timer before attack, decreases by 65536|0| | | |2Idle| | | |
| | |P3 Idle|3|0|0|Timer before attack, decreases by 65536|0| | | |3Idle| | | |
| | |Teleportation|6|0|0|0|0| | | |3FBAttack3 3Appear (end)| | | |
|The Lamb|273|Idle|4|Time before next attack|0|0|0|X = Health Y = Damage taken past seconds|0|0|Idle| | | |
| | |3 Homing Wavy Lines|10|Time since attack started|Phase|7|0| |0|0|Charge / HeadCharge Swarm2Start / HeadShoot2Start Swarm2Loop/HeadShoot2Loop Swarm2End / HeadShoot2End| Shoot  Shoot| 3  3|Begins with Charge Once Charge is done, select I2 and start StateFrame timer|
| | |2 Homing Lines|10| | |4| | | | | | | | |
| | |Spiral CCW|10| | |1| | | | | | | | |
| | |Rings of tears|10| | |3| | | | | | | | |
| | |Split tears|10| | |2| | | | | | | | |
| | |3 rotating homing lines|10| | |9| | | | | | | | |
| | |4 Homing wavy lines|10| | |8| | | | | | | | |
| | |2 Homing lines in V shape|10| | |6| | | | | | | | |
| | |Spiral CW|10| | |0| | | | | | | | |
| | |Ipecac|8|0|Phase|0| | | | |Charge Swarm| Shoot| 3| |
|The Lamb (Head)|273|All of the above, except Ipecac| | | | | | | | | | | | |
| | |Homing puke|8|0|0|0|0|X = Health Y = Damage taken past seconds|0|0|HeadCharge HeadShoot| Shoot| 3| |
| | |Brimstone|11|Remaining time|0|0|0| |0|0|HeadCharge HeadShoot2Start HeadShoot2Loop HeadShoot2End| Shoot  Shoot| 3  3|Selection of rotation is purely internal For some reason the timer doesn't start decreasing as soon as the attack starts|
| | |Dash|9|Remaining time|0|0|Direction (???)| |0|0|HeadDash*| | |Sometimes bugged, IDK why|
|The Lamb (Body)|273.10|Idle|16|Increase every frame|0|0|0|0|0|0|Body| | | |
| | |Flies|8|Doesn't increase|0|0|0|0|0|0|BodyAttack|Shoot|5| |
|Mega Satan (First phase)|274|ALL| | |Bits 0 and 1 = subphase Bits 23 - 16 = Counter to respawn left hand Bits 31 - 24 = Counter to respawn right hand| | | | | | | | | |
| | |Idle|3|Time spent|Bits 15-2 are unset|0|0|V2.X is used as 4 uint8|0|0|Idle / NoseBlow| | | |
| | |Mega Blast|8|0|Bit 8 is set|8|0|V2.X is used as 4 uint8|0|0|Charge Shoot1| Shoot| 4| |
| | |3 slow lines|9|Time since attack started|Bits 9 and 10 are set|9|0|V2.X is used as 4 uint8|0|0|Charge Shoot2Start Shoot2Loop Shoot2End| ShootStart  ShootStop| 4  3| |
| | |4 slow lines| | |Bits 8, 9 and 10 are set| | | | | | | | | |
| | |5 slow lines| | |Bit 11 is set| | | | | | | | | |
| | |3 lines with angles| | |Bits 10 and 8 are set| | | | | | | | | |
| | |Waves of 3 rings| | |Bits 11 and 8 are set| | | | | | | | | |
| | |Double spiral| | |Bit 10 is set| | | | | | | | | |
| | |Spiral| | |Bit 9 is set| | | | | | | | | |
| | |Cricket's Head| | |Bits 11 and 9 are set| | | | | | | | | |
| | |Head Smash|7|0|Bit 8 is set Bits 8 and 9 are set (3x) Bits 8 and 10 are set (5x)|7|0|V2.X is used as 4 uint8|0|0|SmashHead*|Smash|27 / 37 / 47 / 57 / 67| |
| | |Summon|14|0|Bits 15-2 are unset|14|0|V2.X is used as 4 uint8|0|0|Summon|Summon|10|Summon is randomly selected|
| | |One hand smash|3|30 * N|Bits 15-2 are unset|4097|0|V2.X is used as 4 uint8|0|0|Idle / NoseBlow| | | |
| | |Two hand smash|3|30 * N|Bits 15-2 are unset|4096|0|V2.X is used as 4 uint8|0|0|Idle / NoseBlow| | | |
| | |Boss wave|13|0|Bit 8 is set during first wave Bits 8 and 9 in second Bit 10 in third|0|0|V2.X is used as 4 uint8|0|0|Hiding| | | |
|Mega Satan Hand|274.1 274.2|Idle|3|0|0|0|0|0|0|0|Idle| | | |
| | |Smash|8|Time spent|0|0|0|0|0|0|SmashHand| | | |
| | |Multi smash|9|Time spent|0|0|0|0|0|0|SmashQuake| | | |
|Mega Satan (Second phase)|275|Idle|3|Time spent|0|0|0|V2.X is used as 4 uint8|0|0|Idle*| | | |
| | |Red and black rings|9|Time spent|Biits 11, 9, 8|9|0|V2.X is used as 4 uint8|0|0|Shoot*Start Shoot*Loop Shoot*End|ShootStart  ShootStop|4  3|Can also use all attacks with State = 9 of first phase|
| | |Red and black rings (more space)| | |Bits 11, 10| | | | | | | | | |
| | |Red and black rings (tight)| | |Bits 11, 10, 8| | | | | | | | | |
| | |Red and black rings (wigly)| | |Bits 11, 10, 9| | | | | | | | | |
| | |Red and black curved lines| | |Bits 11, 10, 9, 8| | | | | | | | | |
| | |Disorganized red and black| | |Bit 12| | | | | | | | | |
| | |Two curving line of flames| | |Bits 12, 8| | | | | | | | | |
| | |Wavy rings of four white tears| | |Bits 12, 9| | | | | | | | | |
| | |Three wavy lines of white tears| | |Bits 12, 9, 8| | | | | | | | | |
| | |Four rings of eleven white tears| | |Bits 12, 10| | | | | | | | | |
| | |Two slow angular lines of white tears| | |Bits 12, 10, 8| | | | | | | | | |
| | |Two fast angular lines of white tears| | |Bits 12, 10, 9| | | | | | | | | |
| | |Angular moving white tears| | |Bits 12, 10, 9, 8| | | | | | | | | |
| | |Spray of fires| | |Bits 12, 11| | | | | | | | | |
| | |Expanding rings of black and red| | |Bits 12, 11, 8| | | | | | | | | |
| | |Expanding rings of black bullets| | |Bits 12, 11, 9| | | | | | | | | |
| | |Wiggly rings of black bullets| | |Bits 12, 11, 9, 8| | | | | | | | | |
