# Boss data documentation

### About
This table displays important data values for each phase of a boss.

### Excel file
You can downlad the whole table as a handy excel file here: [bosses.xlsx](../../customData/bosses.xlsx)

### Chapter 1

|Boss|ID|Attack|State|StateFrame|I1|I2|V1|V2|Animation|Trigger|TriggerFrame|Comments|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|Monstro|20|Small Hop|4|0|0|0|0|0|Walk|Jump|6| |
| | | | | | | | | | |Land|22| |
| | |Bullet Spit|8|0|0|0|0|0|Taunt|Shoot|22| |
| | |Jump|6|0|0|0|0|0|JumpUp|Jump|10| |
| | | |7|0|0|0|0|0|JumpDown|Land|32| |
| | | | | | | | | | |Shoot|34| |
|Gemini (Contusion)|79|Walk|4|0|0|0|0|0|WalkVert/WalkHori| | |Steven uses the same values 79.1 / 79.11|
| | |Chase|8|Time spent (max 101)|0|0|0|0|RageBody| | | |
| | |Pant|3|Time spent (max 101)|0|0|0|0|Pant| | | |
|Gemini (Suture)|79.10|Walk|4|0|0|0|0|0|Walk01| | | |
| | |Attack|8|0|0|0|0|0|Attack01|Shoot|17| |
| | |Rage|4|0|0|0|0|0|Rage| | | |
| | |Chase|4|0|0|0|0|0|Walk02| | | |
|Dingle|261|Idle|3|Time spent|0|0|0|0|Idle| | |Dangle uses the same values 261.1|
| | |Whistle|9|0|0|0|0|0|Whistle| | | |
| | | |8|0|0|0|0|0|Spit|Shoot|3| |
| | |Spit|10|0|0|0|0|0|Dance| | | |
| | | |8|0|0|0|0|0|Spit|Shoot|3| |
| | |Slide|11|0|0|0|0|0|BeforeSlide| | | |
| | | |4|0|Number of dashes|0|0|0|Slide| | | |
| | | |16|Time spent|0|0|0|0|Tired| | | |
|Gurglings|237.1|Idle|4|0|0|0|0|0|Walk*| | |Turdlings use the same values 237.2|
| | |Charge|8|0|0|0|Original pos|0|Charge*| | | |
| | | |3|0|0|0|0|0|Stop|Shoot|7| |
|Larry Jr.|19|Idle|4|0|0|0|0|0| | | | |
| | |Poop|4|0|0|0|X = Cooldown|0| | | | |
|The Duke of Flies|67|Small Flies|13|Time spent|0|0|0|0|Attack01| | | |
| | |Big Fly|14|Time spent|0|0|0|0|Attack02| | | |
| | |Swarm|8|Time spent|0|0|0|0|Attack03| | | |
| | |Idle|4|0|0|0|0|0|Walk| | | |
|Widow|100|Jump|6|0|0|0|Speed ?|0|Jump|Jump|7| |
| | | | | | | | | | |Land|19| |
| | |Sack|8|0|1|0|0|0|Attack01|Shoot|18| |
| | | | | | | | | | |Jump|26| |
| | |Spider|9|Time spent|0|0|0|0|Attack02|Jump|3| |
| | | | | | | | | | |Shoot|6| |
|Blighted Ovum (Contusion)|79.2|Run|4|0|0|0|0|0| | | | |
| | |Chase|8|Time spent (max 101)|0|0|0|0| | | | |
|Blighted Ovum (Suture)|79.12|Idle|4|Time spent|0|0|0|0| | | | |
| | |Fire|8|Time spent|0|0|0|0|Attack01|Shoot|15| |
|The Haunt|260|Idle (P1)|4|0|Number of Lil'Haunts alive|0|0|0|IdleSkin| | | |
| | |FlyUp|4|0|0|0|0|0|AngrySkin| | | |
| | | |16|0|0|0|0|0|Peel| | | |
| | |Idle (P2)|3|Time spent|0|0|0|0|IdleNoSkin| | | |
| | |Spit|8|0|0|0|0|0|SpitNoSkin|Shoot|3| |
| | | | | | | | | | |Stop|19| |
| | |Laser|9|0|0|0|0|0|LaserNoSkin|Shoot|18| |
|Pin|62|Burry|4|1|0|0|0|0| | | | |
| | |Ipecac|8|Time spent|0|0|0|0|Attack1| | | |
|Famine|63|Dash|8|Number of dashes|0|0|0|0|DashAttackStart|Shoot|24| |
| | | | | | | | | |DashAttack| | | |
| | |Spawn|13|0|0|0|0|0|Attack1|Shoot|25| |
| | |Idle|4|0|0|0|0|0|FullFloat| | | |
|Famine (head)|63|Idle|9|0|0|0|0|0|HeadWalk| | | |
| | |Attack|9|0|0|0|0|0|HeadAttack|Shoot|16| |
|The Fallen|81|Idle|4|0|0|0|0|0|Walk| | | |
| | |Spit|8|0|0|0|0|0|Attack1|Shoot|20| |
| | | | | | | | | | |Shoot2|34| |
| | |Charge|9|0|0|0|0|0|ChargeStart| | | |
| | | | |0|0|0|X = Damage taken during attack|0|Charge| | |Damage taken starts only during "Charge" anim Transition into Brimstone depend on MaxHP|
| | | |10|0|0|0|0|0|Attack2|Shoot|20| |
| | |Split|13|0|0|0|0|0|Split| | |Fallen dies and spawns two smaller ones|
|Headless Horseman (Head)|83|Idle|4|0|0|0|0|0|Walk| | | |
| | |Dash|8|Remaining dashes|0|0|0|0|Charge + Shake| | | |
| | |Spit|9|Time spent|0|0|0|0|Attack| | | |
|Headless Horseman (Body)|82|Idle|4|0|0|0|0|0|Walk| | | |
| | |Spit|8|Time spent|0|0|0|0|Attack| | | |
|Rag Man|405|Walk|4|0|0 or timer to revive a spider|0|0|0|Walk*| | | |
| | |Shoot|8|0|0 or timer to revive a spider|0|0|0|Shooting1|Shoot|4| |
| | | | | | | | | |Shooting3|Shoot|4/10/16| |
| | | | | | | | | |Shooting5|Shoot|4/10/16/22/28| |
| | |Spawn|13|0|0 or timer to revive a spider|0|0|0|HeadThrow*|Spawn|17| |
| | |Idle|3|0|0|0|0|0|WalkNoHead*| | |No state for shoot (only on head: 405.1)|
|Little Horn|404|Ball|8|0|0|0|Unknown|0|Shoot|Shoot|25| |
| | |Perma Pit|13|0|0|0|Unknown|0|Summon|Summon|20| |
| | |Multi Pit|14|0|0|0|Unknown|0|Summon|Summon|20|Amount is not parameterized|
| | |Troll|9|0|0|0|Unknown|0|Bomb|Bomb|20| |
| | |Mega Troll|10|0|0|0|Unknown|0|MegaBomb|Bomb|20| |
| | |Teleport|6|0/1 : Down/Up|0|Remaining TP|Unknown|0|Teleport / Return|CollisionOn / Off|13/10|I2 always set to 1 during this attack|
| | |Multi TP|16|0/1 : Down/Up|0|Remaining TP|Unknown|0|Teleport / Return|CollisionOn / Off|13/10| |
| | |Idle|3|0|0|0|Unknown|0| | | | |
|Baby Plum|908|Idle|3|Time spent|0|0|0|0|Idle| | | |
| | |Spiral|8|0|0|0|0|0|Attack1|Shoot / Sound|7/30| |
| | |Rings|9|0|0|0|0|0|Attack2|Jump/Shoot/Sound|7/19/30| |
| | |Bullet hell|10|0|0|0|0|0|Attack3| | | |
| | | | | | | | | |Attack3(Back)Loop| | | |
| | | | | | | | | |Attack3End| | | |
