# Boss data documentation

### About
This table displays important data values for each phase of a boss.

### Excel file
You can downlad the whole table as a handy excel file here: [bosses.xlsx](../../customData/bosses.xlsx)

### Chapter 3.5

|Boss|ID|Attack|State|StateFrame|I1|I2|V1|V2|Animation|Trigger|TriggerFrame|Comments|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|The Heretic|905|Idle (P1)|4| | | | | |IdleInvis| | | |
| | |Transition|5| | | | | |InvisEnd| | | |
| | |Idle (P2)|3| | | | | | | | | |
| | |Brimstone|7 (Light)| | | | | |Point*| | |Fires are added to the special list as they are lighten|
| | | |8 (Fire)| | | | | |Attack1| | |AI iterates through fires in order|
| | |Ipecac|14|0|0|0|0|0|Attack2| | |ProjectileCooldown increases by 256 with every shot Resetting ProjectileCooldown to 0 can extend the attack|
| | | |15|0|0|0|V1.X = Speed|Landing|Divebomb| | | |
| | |Shadows|9| | | | | |Exit*| | |Exit room|
| | | |10| | | | | |Charge*| | |True bite|
| | | |12| | | | | |ChargeEnd*| | |Bite|
| | | |13| | | | | |ChargeEnd*| | |Idle after bite|
| | | |11| | | | | |Charge*| | |Fake bite|
|The Siren|904|Idle|3|0|0|0|0|0|Idle| | | |
| | |Tears Rings|8|0|0|0|V1.X = Open Angle|0|Attack1*|Sound Shoot (Start)|6 33| |
| | |Teleport|6|0|0|0|0|0|Teleport|Sound Shoot|18 21| |
| | | |4|0|0|0|0|0| | | | |
| | | |7|0|0|0|0|0|TeleportEnd|Sound Shoot|7 12| |
| | |Summon|12|0|0|0|0|0|Recall|Sound|7| |
| | | |13|0|0|0|0|0|HoverStart HoverLoop| | | |
| | | |5|0|0|0|0|0|Slash*| | | |
| | |Slap|11|0|0|0|0|0|Slash*|Sound Shoot|6 17| |
| | |Charm|10|0|0|0|0|0|Attack2*|Sound Shoot|6 29 (A) / 31 (B)| |
|The Visage (P1)|903.0 + 903.1|Idle|100|0 (Heart) Time before dash allowed (Mask)|0 (Heart) Direction (Mask)|0|(Heart) V1.Y = 150|0|Idle1 (Heart) Move* (Mask)| | | |
| | |Mask Dash|101 (Heart)|0|0|0|V1.Y = 150 + 20 * frames in state|0|Unwind|Wind|13|Synchronized : throw mask Heart transitions into State 100 when V1.Y == 650 Mask transitions into State 102 once charge starts|
| | | |101 (Mask)|0 1 (after trigger)|0|0|0|0|ChargeBegin*|Charge|13| |
| | | |102 (Heart)|0|0|0|V1.Y = 650 - 20 * frames in state 150 once V1.Y == 35|0|Rewind|Rewind|9|Rewind the mask|
| | | |102 (Mask)|1|0|0|0|0|Charge*| | |Actually charging|
| | | |103 (Mask)|1 Cooldown for Idle (once Heart starts Rewind)|0|0|0|0|ChargeHit*| | |Waiting to be reeled back in|
| | |P1 Transition|103 (Mask)|0|0|0|0|0|Transition (0-16)|Break|16| |
| | | |104 (Heart)|0|0|0|0|0|Transition (0-16)|Break|16| |
| | | |104 (Mask)|0|0|0|0|0|Transition (17-End)| | | |
| | | |105 (Heart)|0|0|0|0|0|Transition (17-End)| | | |
|The Visage Heart P2|903.0|Idle|105|0|0|0|0|Position of the heart, updates every second|Idle2| | | |
| | |Throw Chain|106|0|0|0| |Last updated position|Unwind2|Wind|13| |
| | |Chain Attack|107|Time spent|0 = Spiral 1 = Brimstone 2 = Jump|0|V1.X = 0 (I1 = 1, I1 = 2) V1.X = 9 (CW) / -9 (CCW) (I1 = 0) V1 .Y = Something| |Rewind2|Wind|9|Brimstone, Spiral, Jump StateFrame is used to determine when to throw away the mask when spiraling|
| | |Brimstone|109|0|0|0| | |Idle2| | | |
| | |Jump|110|0|0|0| | |JumpUp|Shoot|3| |
| | | |111|0|0|0| |Landing position|JumpDown|Shoot|8| |
| | |Spiral|107|Time spent|0|0| |Last updated position|Rewind2|Wind|9| |
| | |Transition|112 113|0|0|0|0|0|Transition2 (0-17) Transition2 (17-End)|Break N/A|17 N/A| |
|The Visage Mask P2|903.1|Idle|106|0|Direction|?|0|0|MoveAngry*| | | |
| | |Brimstone|108|0| | |0|0|Attack*| | | |
| | |Spiral|107|0| | |0|0|MoveAngry*| | | |
| | |Chained|107|0| | |0|0|MoveAngry*| | | |
| | |Stunned|109|0| | |0|0|Stun*| | | |
|The Visage Heart P3|903.0|Idle|114|0|0|0|0|0|Idle3| | | |
| | |Plasma|115|0|If 1, Plasma will seek Mask|0|0|0|Attack|Shoot|14| |
| | |Tears|116|0|0|0|0|0|Attack3 AttacK3Loop|Shoot N/A|23 N/A| |
| | | |117|0|0|0|0|0|Attack3End| | | |
| | |Vortex|118|Number of plasmas absorbed|0|0|0|0|Attack4|Break Shoot|57 77|Spawns as many waves of fire as StateFrame|
|The Visage Mask P3|903.1|Stunned|109|0|0|0|0|0|Stun*| | | |
| | |Idle|106|0|0|0|0|0|MoveAngry*| | | |
| | |Brimstone|110|0|0|0|0|0|Charge2Loop*| | | |
| | | |111|0|0|0|0|0|Charge2Hit*| | | |
|The Horny Boys|920|Idle|3|Time spent|0|ID of next attack 0 = Fly 1 = Juggle 2 = Dance 3 = TP|0|0|Idle| | | |
| | |Spawn Fly|13|0|0| |0|0|SpawnFly|Shoot|20| |
| | |Dance|11|Number of patterns|0, then +1 for each animation| |0|0|LokiDance*|Shoot     Sound|26/46/66/86 0/17/34/48 0/12/23/33 0/8/16/24 0/10/22 64|LokiDance LokiDance2 LokiDance3 LokiDance4 LokiDance5 LokiDance5|
| | |Brimstone|6|0|Remaining bombs| |0|0|TeleportUp|Sound|27| |
| | | |8|0| | |0|0|TeleportDown|Sound Shoot|6 26| |
| | |Bombs|9|0| | |0|0|BombPoof|Sound Shoot|3 12| |
| | | |7|0| | |0|0|BombPoofBack|Shoot|3| |
| | |Juggle|10|0|0, then +1 for each bomb| |0|0|Juggle*|Shoot (Juggle0/1/2) Shoot (JungleThrow)|10 9 / 15 /21| |
