# Boss data documentation

### About
This table displays important data values for each phase of a boss.

### Excel file
You can downlad the whole table as a handy excel file here: [bosses.xlsx](../../customData/bosses.xlsx)

### Chapter 3

|Boss|ID|Attack|State|StateFrame|I1|I2|V1|V2|Animation|Trigger|TriggerFrame|Comments|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|Monstro II|43.0|Jump|6|0|0: tears 1: flies|2|0|0|JumpUp|Jump|10|Gish (43.1) uses the same values|
| | | |7| | | | | |JumpDown|Land/Shoot|31/34| |
| | |Brimstone|8|0|0|1|0|0|Taunt|Shoot|21| |
| | |Hop|4|0|0|0|0|0|Walk|Jump/Land|6/23| |
|The Cage|265|Idle|3|Time spent|0|0|0|0|Idle| | | |
| | |Puke|9|0|0|0|V1.X = Shoot Angle|0|Puking|Shoot StopShooting|10 32| |
| | |Summon|13|0|0|0|0|0|Attack1|Shoot|22| |
| | |Roll|8|Time spent|Number of animations|0|0|0|RollStart + RollLoop + Taunt| | | |
| | |Jump|6|0|0|0|V1.X ?|0|Jumping + JumpLood|Jump (Jumping)|13| |
| | | |7| | | |V1.X = FallSpeed| |Landing|Landed (Landing)|7| |
|The Gate|263|Summon|13|0 / 30|0|0|0|0|Spawn|Shoot|31| |
| | |Tears|9|0 / 30|0 = Charging 1 = Shooting|0|0|0|Charging + Shooting|Shoot (Shooting)|4|Kind is random|
| | |Brimstone|8|0 / 30|0 = Charging 1 = Shooting|0|0|0|Charging + Shooting|Shoot (Shooting)|4| |
| | |Idle|3|0|0|0|0|0|Idle| | | |
|Loki|69|Summon|8|0|0|0|0|0|Attack02|Shoot|21|I1 = 1 / 2 if Lokii (69.1) I1 identifies each individual Loki|
| | |Ring|9|0|0|0|0|0|Attack03|Shoot|24| |
| | |+ x|10|Number of patterns|0|0|0|0|Attack01|Shoot|25/50/75| |
| | |Teleport|6|0|0|0|0|0|TeleportUp|Jump|23| |
| | | |7|0|0|0|0|0|TeleportDown|Land|5| |
| | |Idle|3|0|0|0|0|0|Walk| | | |
|The Adversary|268|Idle|4|Time spent|0|0|0|0|Walk| | | |
| | |Darken|16|Time spent|0|0|0|0|Scream|Scream|21| |
| | |Spiders|13|0|0|0|0|0|Attack1|SkinPull / Shoot|24/26| |
| | |Fly|6|Time spent|0|0|0|0|FlyUp + FlyDown|Fly / Land|27/9| |
| | |Brimstone|8|Time spent|Direction (W = 0, S = 3)|Cooldown|0|0|Attack2*|Shoot|26| |
|The Bloat|68.1|Jump|6|Time spent|2|0|0|0|JumpUp|Jump|28| |
| | | |7|Time spent|2|0|0|0|JumpDown|Shoot|28| |
| | |Hop|8|Time spent|2|0|0|0|Attack01|Shoot|37| |
| | |Bleed|13|Time spent|2|0|0|0|Attack02|Jump / Shoot|30/31| |
| | |Idle|4|0|2|0|0|0|Walk| | | |
| | |H Brimstone|10|Time spent|2|0|0|0|AttackAlt02|Shoot|10| |
| | |V Brimstone|9|Time spent|2|0|0|0|AttackAlt01|Shoot|10| |
|Mask of Infamy|98 (Heart)|Idle|4|0|0|0|0|0|HeartBeat| | | |
| | |Attack|8|Time spent|0|0|0|0|HeartAttack|Shoot|18| |
| |97 (Mask)|Idle|4|0|0: Normal, 1: Chasing|0|Speed|V2.X = Remaining Heart Health|SadMask*| | | |
| | |Angry|9|0|0: Normal, 1: Chasing|0|Speed|0|AngryMask*| | | |
|War|65 (With horse)|Idle|4|0|0|0|0|0|Walk| | | |
| | |Dash|9|Remaining dashes|0 or 1|0 or 1 or 2|0|0|DashStart + Dash| | |I1 and I2 not clear|
| | |Bombs|6|Time spent|0|0|0|0|Attack2| | | |
| | |Tears|8|Time spent|0|0|0|0|Attack1| | | |
| |65.10 (Horseless)|Chase|4|Time spent|0|0|V1.X = Health when last sobbing|0|Walk*| | | |
| | |Sob|8|Time spent|0|0|V1.X = Health when last sobbing|0|Cry| | | |
|Brownie|402|Idle|3|Time spent|0|0|0|0|Idle_*| | | |
| | |LongSpin|4|Time spent|?|?|?|?|Spinning| | |V1 and V2 have values of unknown purpose: locking them does nothing. I1 and I2 work like the Cycle on Delirium|
| | |Fart|9|0|0|0|?|?|Fart| | | |
| | |Dashing|8|Time spent|?|?|?|?|Dashing| | | |
| | |SpinJump|10|0|?|?|?|?|SpinStart| | | |
| | |ShortSpin|11|Time spent|?|?|?|?|Spinning| | | |
|Sisters Vis|410|Roll|8|Time rolling, but  only if both are rolling|Number of animations|0|0|0|RollStart + RollLoop + Taunt| | |I2 = 119 if the Sister enrages before the death of the other|
| | |Brimstone|10|0|Number of animations|0|0|0|Laser*| | | |
| | |Spawn Vis|14|0|0|0|0|0|Attack1| | | |
| | |Rotating Brimstone|11|0|3-2-3-4 Depends on direction|0|0|0|Laser*| | | |
| | |Idle|3|Time spent| |0|0|0|Idle| | | |
| | |Jump|6|0|1 on Jump, 2 on Loop|0|V1.X = Fall speed|0|Jump + JumpLoop| | | |
| | | |7|0|1|0|V1.X = Fall speed|0|Landing| | | |
| | |Tears|12|Time spent|Number of animations|0|V1.X = Pattern|0|LaserStart*| | | |
| | |Shared Brimstone|9|0|Number of animations|0|0|0|LaserStart* + LaserLoop* + LaserEnd*| | | |
| | |Spawn Begotten|13|0|0|0|0|0|Attack1| | | |
|Reap Creep|900|Wall Creep|13|?|?|0|?|0|Summon1|Open / Shoot / Close|13/14/32|StateFrame seems to indicate whether Reap Creep is moving or not, going down when it moves. I1 seems to work a bit like Delirium's cycle, although it only seems to dictate the phase.|
| | |Bullet Line|8|?|?|0|?|0|Attack1*|Open (Start) Close (End)|7 15| |
| | |Idle|3|?|?|0|Only used in Phase 2 X = horizontal speed Y = 0|0|Idle*| | | |
| | |Puke|9|?|?|0: Lines 1: Puke|X = horizontal speed Y = Dictate angle of fire|0|Attack2*|Open + Shoot + End Shoot + Close|7 / 48 / 62 /82| |
| | |Spiders/Trite|14|?|?|0|0|0|Summon2|Open / Shoot / Close|13 / 14 / 32| |
| | |Charge|7|?|?|0|0|0|Dash*Start + Dash*Loop|Shoot (Start)|11| |
| | |Brimstones|10|?|?|0: 4 Brimstones 1: 1 Brimstone|0|0|Attack3*|Open + Close Open + Shoot Close + EndShoot|7 + 29 21 + 23 15 + 16| |
| | |Transition|16|0|0|0|0|0|Transition*|Close|11|Only on Alt transitions|
|The Pile|269.1|Summon|13|0|0|0|0|0|Attack3|Shoot|11| |
| | |Charge|9|0|0|0|0|0|ChargeBegin + ChargeLoop + ChargeEnd|StartCharge (Begin)|11| |
| | |Spikes|14|0|0|0|0|0|Summon| | | |
| | |Idle|3|Before next attack|0|0|0|0|Idle| | | |
| | |Burrow|6|0|0 on GoUnder 256 on DirtShrink|0|Starting position|0|GoUnder + DirtShrink + ComeUp| | | |
| | | |8|0|256|0|0|0|Attack1 (first two) / Attack3 (final)|Shoot|11| |
