# Boss data documentation

### About
This table displays important data values for each phase of a boss.

### Excel file
You can downlad the whole table as a handy excel file here: [bosses.xlsx](../../customData/bosses.xlsx)

### Chapter 4

|Boss|ID|Attack|State|StateFrame|I1|I2|V1|V2|Animation|Trigger|TriggerFrame|Comments|
|-|-|-|-|-|-|-|-|-|-|-|-|-|
|Blastocyst|74|Idle|4|Time spent|0|0|Speed|0|Walk|Jump/Land|7/21| |
| | |In-Place Hop|8|Time spent|0|0|Speed|0|Attack|Jump/Land|7/18| |
| | |Offscreen Jump|6|Time spent|0|0|Speed|0|JumpUp|Jump|10| |
| | | |7|Time spent|0|0|Speed|0|JumpDown|Land|22| |
| |75|Idle|4|Time spent|0|0|Speed|0|Walk|Jump/Land|7/21| |
| | |Attack|8|Time spent|0|0|Speed|0|Attack|Jump/Land|7/18|Kind depends on position|
| |76|Idle|4|Time spent|0|0|0|0|Walk|Jump/Land|7/21| |
| | |Attack|8|Time spent|0|0|0|0|Attack|Land|20| |
|Mama Gurdy|266|Idle|3|Time before next|0|0|Spawn|0|Idle| | | |
| | |Orange puke|10|First phase: 0 -> 42 Second phase: 30 -> 0 Third phase: 0|0: Normal 1: Upwards 2: Waiting 3: Finishing|2|Spawn|0|Puke|Shoot|44|StateFrame is 0 if I1 is 0 StateFrame increases then decreases if I1 is 1 (then 2), then 0 when I1 = 3|
| | |Spikes|9|0|0|1|Spawn|0|Attack1| | | |
| | |Tears|8|0|Kind|0|Spawn|Distance|Shoot|Shoot|32| |
|Scolex|62.1|Idle|4|1|4|0|Y = Height modifier|0| | | | |
| | |Ipecac|8|Time spent|8|0|0|0|Attack1| | | |
| | |Puke|9|Time spent|9|0|0|0|Attack2| | | |
|Mr. Fred|270|Blood Balls|9|0|0|0|0|0|Squirt| | | |
| | |Idle|3|Time before next|0|0|0|0|Idle| | | |
| | |Burrow|8|Decreasing ; when 0: appear|0|0|0|0|Dissapear + Appear| | | |
| | |Call|16|0|0|0|0|0|Cord| | | |
| | |Fred|13|0|0|0|0|0|Barf| | | |
|Daddy Long Legs|101|4 Stomps|9|1|0|Appendice ID (0-4)|0|0|Attack2|Jump/Land|3/75|Triachnid (101.1) uses the same|
| | |Spiders|8|0|0|0|0|0|Attack1|Shoot|20| |
| | |Up|6|0|0|0|0|0|Up|Jump|20| |
| | | |7|0|0|Number of stomps|0|0|Stomp*|Land/Jump|10/32| |
| | | |4|Increases after landing|0|0|0|0|Down|Land|6| |
| | |Idle|3|0|0|0|0|0|Idle| | | |
|Death|66 Horse|Homing Scythes|13|Time spent|0|0|0|0|Attack01| | | |
| | |Normal Scythes|14|Time spent|0|0|0|0|Attack04| | | |
| | |Hourglass|8|Time spent|0|0|0|0|Attack02| | | |
| | |Idle|4|0|0|0|0|0|Walk| | | |
| |66.30 Horseless|Knights|13|Time spent|0|0|0|0|Attack| | | |
| | |Idle|4|0|0|0|0|0|Walk| | | |
|Conquest|65.1|Dash|9|3 on begin 2 when copies arrive 1 when Conquest arrives 0 upon end|1|Number of spawns|0|0|DashStart + Dash| | | |
| | |Idle|4|0|0|0|0|0|Walk| | | |
| | |Bullets|8|Time spent|0|0|0|0|Attack1| | | |
| | |Holy Light|6|Time spent|0|0|0|0|Attack2| | | |
| | | |9|0|0|0|0|0|Dash| | | |
|The Matriarch|413|Idle|3| | | | | |Idle| | |During all attacks, except Rage, I1 increases every time the Matriarch takes damage, a Fistuloid takes damage or dies, a Fistuloid / Fistula is spawned. Its purpose is unknown|
| | |Hop|6| | | | | |Jump/Jump2|Jump/Land|6/16| |
| | |Chubbers|9| | | | | |Attack2|Shoot|29| |
| | |Bleed Ball|10| | | | | |Attack3|Shoot|12| |
| | |Fistuloid|8| | | | | |Attack1|Shoot|15| |
| | |Eject Fistula|5| | | | | |Flinch| | | |
| | |Rage|13|Time spent|Time remaining| | | |RageBegin/Loop/End|Shoot (Begin)|19| |
| | |Death|16| | | | | |Death| | | |
| | |Air Fistula|7| | | | | |Air Flinch|Land|11| |
