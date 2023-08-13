# Boss data documentation

### About
This table displays important data values for each phase of a boss.

### Excel file
You can downlad the whole table as a handy excel file here: [bosses.xlsx](../../customData/bosses.xlsx)

### Chapter 2

|Boss|ID|Attack|State|StateFrame|I1|I2|V1|V2|Animation|Trigger|TriggerFrame|Comments|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|Fistula|71 / 72 / 73|Idle|4|0|0|0|0|0|Biggest / Big / Small| | |Same for Teratoma (71+.1)|
|Chub|28|Idle|4|Time spent (head) 0 (body 1) 5 (body 2)|Segment ID|0|0|0|WalkNormal* / WalkBody*| | |Same for C.H.A.D 28.1|
| | |Charge|8|Same as Idle|Segment ID|0|X = left / right Y = up / down|0|WalkAttack01* / WalkAttackUp| | | |
| | |Summon|13|Same as Idle|Segment ID|0|0|0|WalkChubby* / WalkAttack02* Poop* (tail)| | | |
| | |Bomb|16|Same as Idle|Segment ID|0|0|0|WalkSad*| | | |
| | | |12|Same as Idle|Segment ID|0|0|0|Spit*|Shoot|12|Only on SubType 1000|
|Gurdy|36|Idle|3|0|0|0|0|0|Idle1/2/3| | | |
| | |Spit|8|0|2/4/5|0|0|0|Attack2/4/5|Shoot|16/17/17|2 Front, 4 Left, 5 Right|
| | |Red Flies|8|0|1|0|0|0|Attack1|Shoot|4| |
| | |Pooter|8|0|3|0|0|0|Attack3|Shoot|5| |
| | |Boils|8|0|6|0|0|0|Attack6|Shoot|19| |
|Mega Fatty|264|Fart|10|0|0|0|0|0|Fart|Fart|21|Hopper or shots is random|
| | |High Jump Low Jump|6/7|0|0 (up) / 2 (down) 1 (up) / 2 (down)|0|X = something|0|Jumping Landing|Jump/EarlyTransition Landed|6/15 3|TargetPosition needs to be set|
| | |Puke|16/8|0|0|0|0|0|Sucking / Puking|StartSucking EndSucking Shoot StopShooting|6 45 3 39| |
| | |Idle|3|0|0|0|0|0|Idle| | | |
|Mega Maw|262|Idle|3|0|0|0|0|0|Idle| | | |
| | |Spit|8|0|0|0|0|0|Spit|Shoot|27| |
| | |Summon|13|0|0|0|0|0|SummonTell Summon|- Shoot|- 42| |
| | |Fire|9|0|0|0|0|0|FireRing|Shoot|15|Attack kind is random|
|Gurdy Jr.|99|Idle|6|0|0|0|0|0|Idle| | | |
| | |Pooter|10|0|0|0|0|0|Attack01|Shoot|13| |
| | |Tears|9|0|0|0|0|0|Attack02|Sound/Shoot|7/18| |
| | |Slide|8|0|I2 = 0 => 0 I2 = 1 => Number of slides I2 = 2 => 0|0: Begin 1: Slide 2: End|0|0|Attack03Start Slide Attack03End| | | |
|Peep|68|Idle|4|0|Phase|0|0|0|Walk| | |Setting phase prevents Peep from spawning eyes accordingly|
| | |Pee|13|Time spent|Phase|0|0|0|Attack01|Shoot|38| |
| | |Tears|8|Time spent|Phase|0|0|0|Attack02|Jump/Shoot|30/31| |
| | |Jump|6/7|Time spent (sep)|Phase|0|0|0|JumpUp / JumpDown|Jump/Shoot|28/28| |
|The Husk|67.1|Idle|4|1|0|0|0|0|Walk| | |Lack of triggers indicates the game uses StateFrame to determine when to perform actions|
| | |Summons|13|Time spent|0|0|0|0|Attack01| | | |
| | |Spit cluster|14|Time spent|0|0|0|0|Attack02| | | |
| | |Tears|8|Time spent|0|0|0|0|Attack03| | | |
|The Hollow|19.1|Idle|4|0|0|0|Head segment has values Butt segment X = cooldown on spawn poop|0|Head: WalkHead* Body: WalkBody* Poop: Butt| | | |
|Carrion Queen|28.2|Idle|4|Head: Time Spent|All: Segment ID|0|0|0|Head: WalkNormal* Body: WalkBody*| | | |
| | |Poop|13|Head: Time spent|All: Segment ID|0|0|0|Poop*| | | |
| | |Bomb|16|Head: Time Spent|All: Segment ID|0|0|0|WalkSad*| | | |
| | |Charge|8|Head: Time Spent|All: Segment ID|0|Head.X = charge direction horizon Head.Y = charge direction vertical|0|Attack01*| | | |
|Dark One|267|Darkness|16|Time spent|0|0|0|0|Darkness| | | |
| | |Ring|8|Time spent|0|0|0|0|Attack1|Shoot|12| |
| | |Idle|4|Time spent|0|0|0|0|Walk| | | |
| | |Charge|10|Traversal number|0|0|0|0|Charge + ChargeShake (loop)|Charge (Charge)|21|Changing StateFrame can extend dash duration|
| | |Brimstone|9|Time spent|0|0|0|0|Attack2|Shoot|20| |
|Polycephalus|269|Idle|3|0|0|0|0|0|Idle| | |I1 is 0 while coming up I1 is 1 while performing an attack I1 is 2 while going underground State = 8: random pattern|
| | |Burrow|4|Time spent underground|Comment|SF|0|0|GoUnder + Dirt| | | |
| | |Tears|8|0|Comment|Time spent|0|0|Attack1| | | |
| | |Cluster|9|0|Comment|Time spent|0|0|Attack2| | | |
| | |Summon|10|0|Comment|Time spent|0|0|Attack3| | | |
|The Wretched|100.1|Jump|6|0|0|0|X = Horizontal speed, Y = Vertical speed|0|Jump|Jump/Land|7/19|Negative = left / up|
| | |Tears|8|Time spent (only from trigger)|0|0|0|0|Attack01|Shoot/Jump|18/27| |
| | |Summon|9|Time spent|0|0|0|0|Attack02|Jump/Shoot|3/6|Kind of spider is random|
| | |Idle|4|0|0|0|0|0|Idle| | |Only used to change state|
|Pestilence|64|Ipecac|8|Time spent|0|0|0|0|Attack1| | | |
| | |Summon|13|Time spent|0|0|0|0|Attack2| | | |
| | |Idle|4|0|0|0|0|0|Walk| | | |
| | |Ipecac (headless)|8|0|1|0|0|0|HeadlessAttack1| | | |
| | |Summon (headless)|13|0|1|0|0|0|HeadlessAttack2| | | |
| | |Idle (headless)|4|0|1|0|0|0|Last animation| | |No idle animation|
|The Stain|401|Idle|3|0|0|0|0|0|Idle| | | |
| | |Burrow|4|Time spent underground|Comment|SF|0|0|GoUnder + Dirt| | |I1 is 0 while coming up I1 is 1 while performing an attack I1 is 2 while going underground  (Except on State = 9)|
| | |Bullet hell|9|Time spent in each animation|I1 = Number of animations played - 1. 1 = core first wave, 4 = core second wave|SF|0|0|Attack2Start Attack2Shooting Attack2End  Repeat|Shoot (Shooting)|0| |
| | |Tendrils|8|0|Comment|Time spent|0|0|Attack1|Shoot|11| |
| | |Summons|13|0|Comment|Time spent|0|0|Summon|Summon|8| |
|The Frail|62.2|Walk|4|1|State|Phase|V1.Y = Vertical Acceleration|0|Head/Body/Tail*| | | |
| | |Ipecac|8|Time spent|State|Phase|0|0|Attack1| | | |
| | |Cum|9|Time spent|State|Phase|0|0|Attack2| | | |
| | |Brimstone (follow)|8|0 = Emerge 1 = Loading 2 = Shooting|State|Remaining time|0|V2.X|Attack3*| | |I2 decreases by interval of 65536 Brimstone is fired when I2 is in an interval|
| | |Brimstone (discrete)|10|0 = Emerge 1 = Loading 2 = Shooting|State|Remaning time|0|V2.X|Attack3*| | |I2 decreases by interval of 65536 Brimstone is fired when I2 is in some intervals|
|The Forsaken|403|Idle|3|Time spent|0|0|0|0|Idle| | | |
| | |Fade|16|Time spent|0 = Fading out 1 = Faded 2 = Moving to act 3 = Fading in|0 (default) 1 (crossed)|0|0|FadeOut / Faded / FadeIn| | |Setting I2 to 1 without moving I1 to 2 as well has no effect|
| | |Summon|13|Time spent|0|0|0|0|Summon| | | |
| | |Blast|8|Time spent on each animation|Number of animations|0 (default) 1 (enraged)|0|0|Blast*|Blast (BlastStart)|23|I2 needs to be set to 1 at the first frame of the attack for enraged version|
|Big Horn|411|Summon balls|13|Time spent|0|0|0|0|Charge / Charge2 / Charge3|Shoot / Shoot / Shoot|37/37/37|Animation determines amount|
| | |Attack|4|Time spent|0|0|0|0|PopDown + BigHoleClose| | |Remain in BigHoleClose until end|
| | |Dizzy|16|0|0|Remaining time|0|0|DizzyLoop| | | |
| |411.1.1/.2|Hands|8|0 (default), 1 (attack)|0|Timer / -1 (att)|0|0|SmallHoleOpen + HandSlam| | |Spawning holes seems really hard|
| |411.1.3/.4|1 Troll Bomb|9|0 (default), 1 (attack)|0|30|0|0|+ HandThrow| | |Mega / Burning bomb is random|
| |411.1.5/.6|3 Troll Bombs|10|0 (default), 1 (attack)|0|30|0|0|+ HandBombs| | |Same as above|
| |411.1.7|Little Horn|11|0 (default), 1 (attack)|0| |0|0|+ HandLittleHorn| | | |
| |411.1.0|Idle|3|0|0|0 / 30|0|0| | | | |
|Rag Mega|409|Idle|4|0|Remaining orbs|0|0|0|Walk| | | |
| | |Cover|8|Remaining time|Remaining orbs|0|0|0|Cover + Covered + Uncover| | | |
| | |Pillars|14|Time spent|Remaining orbs|0|0|0|Rebirth| | | |
| | |Summon|13|Time spent|Remaining orbs|0|0|0|Attack01| | | |
|Bumbino|916|Butt Bomb|11|0|0|Coins gathered|0|0|ButtBomb|Sound/Shoot|6/20| |
| | |Charge|10|0 on init, 1 on charge| |Coins gathered|V1.Y = Speed|0|*Charge|Sound/Shoot|3/12| |
| | | |5|0|Stun cooldown|Coins gathered| | |WallImpact + Dizzy + ShakeOff*| | |On wall impact|
| | |Swipe|8|-1 if clearing rocks 1 on first swipe, 0 on second|0|Coins gathered|Speed|0|Swipe|Shoot/Sound|15/31| |
| | | |9|0|0|Coins gathered|0|0|GroundSlam|Sound/Shoot|4/20|On slam after swipes|
| | |Idle|3|0|Time before Walk|Coins gathered|0|0|Idle| | | |
| | |Walk|4|0 or 1 ?|Time before Idle|Coins gathered|0|0|Walk|Step|9/21| |
| | |Spawn|16|0|0|0|0|0|ItemSpawn|Shoot|22| |
