# Boss data documentation

### About
This table displays important data values for each phase of a boss.

### Excel file
You can downlad the whole table as a handy excel file here: [bosses.xlsx](../../customData/bosses.xlsx)

### Chapter 2.5

|Boss|ID|Attack|State|StateFrame|I1|I2|V1|V2|Animation|Trigger|TriggerFrame|Comments|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|Tuff Twins|19.2|Idle|4|0|Direction|Phase|V1.X = Armor destroyed|0|WalkHead*| | | |
| | |Spawn|8|0|Direction|Phase|V1.X = Armor destroyed|0|AttackHead*|Shoot|11| |
| | |Body Attack|4|0|Direction|Phase|V1.X = Armor destroyed|0|BodyAttack*|Shoot|9| |
|Hornfel|906|Idle|3| | | | | |Idle*| | | |
| | |1/2 Bomb|8|0|0|0|0|0|Attack1*|Sound/Shoot|6/17 (Left/Right) 6/17/27 (Double)|Bombs need to be spawned and added to summon list before switching to state 8|
| | |Brimstone |9|0|0|0|0|0|Attack2|Shoot|34|Once bombs are thrown, StateFrame indicates how much time Hornfel waits before entering back the room|
| | |Decoys|14|0|0|0|0|0|Idle* + Taunt| | |State will only trigger Taunt animation, summons are independant|
| | |Charge|10|0|0|0|0|0|Charge*| | |If State resets to 6, Hornfel stops the charge|
| | | |7|0|0|0|0|0|Charge*| | |Set for a few frames before Hornfel concludes|
| | | |11|0|0|0|0|0|ChargeFinish|Sound/Shoot|22/46|Entered when Hornfel concludes|
| | |Summons|N/A|N/A|N/A|N/A|N/A|N/A|N/A|N/A|N/A|Decided by the controller of the room (1000.152)|
|Great Gideon|907|Idle|3|Phase|If LSB = 1, summon If bit 8 == 1, spikes done|?|0|0|Idle| | | |
| | |Summons|13| | | |0|0|Summon|Sound|6| |
| | |Bullets|8| | | |0|0|Attack1|Shoot|32| |
| | |Flames|9| | | |0|0|Attack2*|Shoot|52 (Start) 8 (End)| |
| | |Aspiration|7| | | |0|0|Attack4*|Shoot|14 (Start) 11 (End)| |
| | |Spikes|10| | | |0|0|Attack3|Sound Shoot|8/13/18/23/28/33 (Sound) 51 (Shoot)| |
|The Shell|19.3|Idle|4|0|0 if body 2 if head|0 if intact 1 if broken|V1.X = 2.5 if no previous segment broken V1.Y = movement angle, 0 if broken|0|*Rotate / *Idle| | | |
| | |Attack|8|0| | | |0|*Attack|Shoot|14| |
|Singe|915|Idle|3|?|Number of Super Blasts|Fallback to force Super Blast if Singe it busy with another attack|V1.X < 0 triggers Run|0|Walk| | | |
| | |Run|4|Timer before explosion May explode earlier| | |0|0|Run*| | | |
| | |Fart|10|0| | |0|0|Fart|Shoot / Land|15 / 24| |
| | |Flames|11|Time before end| | |0|0|SuperFart*|Sound / Shoot|9 / 22| |
| | |Blast|8|0| | |V1.X defines the initial orientation of the falling rock|0|Blast|Shoot / Sound|13 / 21| |
| | |Jump Blast|9|0| | | |0|JumpBlast|Jump / Land / Shoot / Sound|4 / 13 / 24 / 31| |
| | |Super Blast|12|Time before land| | |0|0|SuperBlast*|Shoot Land / Sound|30 9 / 21| |
|Clickety Clack|889|Chase|4|0|0|ID in Clutch 0 = Possessed|0|0|Walk*|Footstep|9 / 20| |
| | |Wander|4|0|Remaining time| |0|0|Walk*|Footstep|9 / 20|No effect if no other Clickety Clack in room|
| | |Clutch Leave|14|0|0| |0|0|QuickRevert|Shoot|16| |
| | |Clutch Pre Arrive|7|0|0| |0|0|Stunned*| | | |
| | |Clutch Possess|5|0|0| |Movement vector|0|Transition + Burst|Shoot|36 (Transition) 8 (Burst)| |
| | |Throw Bone|3|0|0| |0|0|Head* (overlay)|Shoot|4| |
| | |Collapse|16|Remaining time until revival (locked if Clutch)|0| |0|0|Flame*|Shoot|15 (Collapse) 6 (Shoot)| |
| | |Revive|13|0|0| |0|0|Regen|Shoot|29| |
|Clutch|921|Possessing|6|0|Remaining clacks|0|0|0|Possess|Sound / Shoot|13 / 16| |
| | |Possess|8|Time spent| |0|0|0|Move*|Shoot|30 (MoveStart*)| |
| | |Stun|7|0| |0|V1.X = "Time" before revive|0|Stun*|Shoot|14 (StunEnd)| |
| | |Transition|16|0|0|0|0|0|Transition|Shoot|26| |
| | |Dash (P2)|9|Time spent|0|0|0|0|Move*2|Shoot|5 (MoveStart2)| |
| | |Fires (P2)|10|Number of fires|0|0|0|0|Attack*|Shoot|3 (Attack)| |
| | |Idle (P1)|3|Time spent|0|0|0|0|Idle| | | |
| | |Idle (P2)|4|Time spent|0|0|0|0|Idle2| | | |
