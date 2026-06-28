/**
 * The Outlast Trials Map & Trial Database
 * Contains details on Objectives, Enemies, Descriptions, and Tactics for all Maps.
 */

export const MAPS_DATA = [
  {
    id: "mansion",
    name: "Mansion",
    description: "The tutorial and rebirth location for all Reagents. Where your old life is stripped away and the therapy begins.",
    activities: [
      {
        name: "Introduction",
        type: "Trial",
        description: "The initial intake exam. Reagents must destroy their public records and their private lives, and learn to survive in the dark.",
        difficulty: 1,
        objectives: [
          "Enter the mansion through the intake corridor",
          "Destroy your private criminal records in the incinerator",
          "Reconnoiter the mannequin staging area",
          "Bypass the lock and retrieve your night-vision battery",
          "Navigate the pitch-black basement corridors",
          "Disable the mental security alarms",
          "Shatter the glass wall of your old identity",
          "Reach the gate and escape to the Sleep Room"
        ],
        enemies: ["All Prime Assets", "Grunts"],
        tactics: "This is a tutorial designed to teach basic stealth, jumping, and night-vision mechanics. Listen to Dr. Easterman's voice cues and avoid running directly into light sources."
      },
      {
        name: "Farewell",
        type: "Trial",
        description: "The Trials are inside you now. If you can survive one final test, you can leave this place. This is the hostile womb from which you must claw your way to freedom, to power, to history. You will be a perfect weapon, the most innocent child ever born. You are the future.",
        difficulty: 5,
        objectives: [
          "Infiltrate the release sector of the Mansion",
          "Find and replace the broken machine reels in the theatre",
          "Retrieve three keys from labeled hanging corpses",
          "Unlock the projection chamber and play the Farewell message",
          "Deactivate the frequency scrambler in the central lobby",
          "Evacuate through the double reinforced doors before the security sweep",
          "Walk into the light towards reborn salvation"
        ],
        enemies: ["Leland Coyle", "Mother Gooseberry", "Franco Barbi", "Screamer"],
        tactics: "This is the ultimate test. It combines mechanics from all trials. Move extremely cautiously, conserve battery power, and always have an active brick or bottle on hand to distract enemies near key locations."
      }
    ]
  },
  
  // POLICE STATION
  {
    id: "police_station",
    name: "Police Station",
    description: "Laws are the lifeblood of any community, and a Police Station is every community’s heart: the beating, pumping organ that keeps your property safe. Which side of the law are you on?",
    activities: [
      {
        name: "Kill the Snitch",
        type: "Trial",
        description: "You are the exterminator. Only we can tell you what is true. There is a snitch inside the prison, preparing to testify against our truth. Kill the snitch and we will let you out.",
        difficulty: 1,
        objectives: [
          "Infiltrate the Police Station",
          "Reach the Security Room",
          "Get to the Snitch",
          "Push the Snitch",
          "Reach the Basement (Introductory difficulty)",
          "Start the Generators in the Basement",
          "Get back to the Snitch",
          "Push the Snitch (Again)",
          "Find the Key",
          "Find the Other Keys",
          "Open the Admin Gate (Introductory difficulty)",
          "Open the Detective Gate (Introductory difficulty)",
          "Open the Execution Room Gate (Introductory difficulty)",
          "Electrocute the Snitch"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Avoid Leland Coyle while carrying heavy gas cans in the basement, where you must time your generator cranking to the green dial zone to avoid noise and power depletion. Afterward, push the Snitch to checkpoint rail locks, retrieve keys from correctly marked bodies to unlock gates, and coordinate lever pulls in the Execution Chamber to secure the execution."
      },
      {
        name: "Cancel the Autopsy",
        type: "MK-Challenge",
        description: "You cannot allow evidence to determine the course of justice. Corpus Delicti. Find the bodies and grind them to slurry, and we will let you out.",
        difficulty: 1,
        objectives: [
          "Find Keys to Release Agents to their deaths"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Search mutilated corpses for keys in Sector A, B, and C matching the symbol on the television screen while avoiding lethal Ex-Pop like the Berserker and Big Grunt. Insert the three keys into gymnasium electronic locks to lower the Reagents, then survive Leland Coyle's ambush to escape via the shuttle."
      },
      {
        name: "Sabotage the Lockdown",
        type: "MK-Challenge",
        description: "You are the spider, not the fly. Prisons are how civilizations eat. Power the generators and release yourself.",
        difficulty: 1,
        objectives: [
          "Reach the Exit"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Carry the gas canister through Sector A, B, and C to the generator while avoiding Leland Coyle, who will follow you dynamically to the next Sector as you advance. Powering the final generator overrides the lockdown and opens the escape gate next to it, allowing a quick exit to the shuttle."
      },
      {
        name: "Release the Prisoners",
        type: "MK-Challenge",
        description: "You are the hand of freedom. When you release others, you will find release yourself. Unlock the prison and release the guilty, then we will forgive you, and let you out.",
        difficulty: 1,
        objectives: [
          "Reach the Security Room to free the Prisoners"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Locate the hidden keys in each section of the station to unlock the central Security Room and free the prisoners while avoiding Leland Coyle's hallway patrol. Once you press the release button, navigate the sudden jailbreak chaos and immediately escape through the exit shuttle."
      },
      {
        name: "Teach the Police Officer",
        type: "MK-Challenge",
        description: "You are the teacher. We lend police authority to protect our property and profit. When they overstep their bounds, they must be taught fresh humility. Change the educational film and we will let you out.",
        difficulty: 2,
        objectives: [
          "Switch the Training Film Reel"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Collect keys across the station's floors, basement, and attic to unlock various rooms in search of the film reel guided by the auditorium chalkboard's diagram. Once the reel is retrieved, return to the auditorium projector to switch the training film and escape through the shuttle while dodging Leland Coyle, Ex-Pop, and annoying proximity gates."
      },
      {
        name: "Eliminate the Past",
        type: "MK-Challenge",
        description: "History is mutable, only the future is fixed. If you allow the past to be defined by facts, evidence, and memory, our enemies will be as numerous as our sins. Destroy the historical record and we will let you out.",
        difficulty: 3,
        objectives: [
          "No time to waste",
          "Regroup in the Gymnasium"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Quickly locate and deposit nine hidden document boxes into the gymnasium grinder within the strict time limit while avoiding hunting Ex-Pop and Coyle's intrusions. Destroying all boxes completely clears additional enemies from your exit route, whereas leaving records behind forces you to navigate highly populated sectors and bypass Coyle at the final shuttle."
      },
      {
        name: "Seize the Narcotics",
        type: "MK-Challenge",
        description: "You are the controlled substance. The law enslaves minds by caging bodies, you destroy bodies and liberate minds. Find the narcotics, set yourself free, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Seize the Narcotics",
          "Open the prison door to escape"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Gather drug packets from the central Security Room and stash them inside cut-open corpses on gurneys while crossing paths with roaming Ex-Pop and avoiding passing through lockdown gates more than three times. Once overriding the jail lockdown, race to the exit shuttle before the 180-second countdown runs out while evading Leland Coyle."
      }
    ]
  },

  // ORPHANAGE
  {
    id: "orphanage",
    name: "Orphanage",
    description: "Mother Gooseberry will teach you how to be a good boy or girl. A crumbling school of religion and child rearing.",
    activities: [
      {
        name: "Cleanse the Orphans",
        type: "Trial",
        description: "Education and faith must follow our mandates. Children will learn obedience. Shape them young and they're ours for life. Teach the children, give them first communion, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Enter the Orphanage",
          "Broadcast the Religious Station",
          "Tune Radio Receivers in the Dorms",
          "Return to the Reception Desk",
          "Swap Film Reels in Classrooms",
          "Return to the Reception Desk (Again)",
          "Stop the Blasphemers in the Chapel",
          "Power up Generators",
          "Find Saw Handle Keys",
          "Serve the Body of Christ",
          "Regroup in the Chapel"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Tune the dorms' radio frequency boxes and swap classroom film reels while avoiding Mother Gooseberry and timed gates. Search the cemetery for saw keys to slice Bootleg Jesus' legs, then refuel basement generators to trigger the blood deluge and escape."
      },
      {
        name: "Feed the Children",
        type: "MK-Challenge",
        description: "You are a caretaker. You care with one hand, and take with the other. If the children will not feed themselves, poison them. Then we will let you out.",
        difficulty: 2,
        objectives: [
          "Pour bleach into the soup",
          "Finish the soup of the day",
          "Serve the Soup in the Cafeteria"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Search the Services and Church areas to locate four additional bleach bottles, carrying them back to poison the kitchen soup while evading guarding Ex-Pop like the Night Hunter and Big Grunt. Once all bottles are poured and the poisoned feast is served, immediately head for the exit shuttle to escape Mother Gooseberry's aggressive retaliation."
      },
      {
        name: "Foster the Orphans",
        type: "MK-Challenge",
        description: "Mothers are poison, toxic swamps in which families suffer and drown. Rescue the children from mother, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Adjust the Frequencies to Unlock the Lobby Gate",
          "Open the Lobby gate"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Locate and tune five frequency boxes hidden across the orphanage's rooms and outdoor areas while avoiding Mother Gooseberry and various Ex-Pop. After tuning all boxes, return to the lobby to open the gate via the button switch and escape through the exit shuttle before Gooseberry intercepts you."
      },
      {
        name: "Gather the Children of God",
        type: "MK-Challenge",
        description: "You are the shepherd, who would save the poor little lambs from Mother. Deliver them to the warm embrace of the Church, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Gather the Children of God"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Track down button switches to disconnect child mannequins throughout the dorms and deliver their upper halves to the church's van while avoiding Mother Gooseberry and a Big Grunt patrolling the exterior. Move quietly to prevent triggering sound detector gates that seal off pathways, then escape through the exit shuttle once all deliveries are complete."
      },
      {
        name: "Reunite the Family",
        type: "MK-Challenge",
        description: "Family is the grinding stone of youth, which separates the chafe from the tender meal of obedience. Reunite the child with his family, put them to rest, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Reunite the Family"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Retrieve the gas canister to power the kitchen generator, opening the cafeteria while tinkering with electric panels in the chapel basement and laundry to unseal the lobby gate electronic locks. Evade Mother Gooseberry to locate the cafeteria keys, reuniting the child mannequin with its parents in the grinder before escaping via the exit shuttle."
      }
    ]
  },

  // FUN PARK
  {
    id: "fun_park",
    name: "Fun Park",
    description: "Welcome to Kiddie Land! A colorful, twisted carnival where physical pain and structural comedy go hand in hand.",
    activities: [
      {
        name: "Grind the Bad Apples",
        type: "Trial",
        description: "You are an adult. The youth will not obey our orders and must be corrected. There are children murdering adults in the Root Canal. Punish the children, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Infiltrate the Fun Park",
          "Reach the Root Canal Ride",
          "Get access to the Root Canal Ride",
          "Regroup into the Root Canal",
          "Push the Boat",
          "Power off the Barriers",
          "Raise the Water Level",
          "Push the Boat (Again)"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Acquire ride tickets by completing carnival games using throwable hearts, then gain access to the Root Canal to slowly push the dental-themed boat. Disconnect hidden power modules to bypass toothbrush barriers and follow color-coded pipes to turn correct valves, raising the water level to grind the bad children and escape."
      },
      {
        name: "Punish the Miscreants",
        type: "MK-Challenge",
        description: "Teach teenagers a physical lesson by destroying their secret stash of contraband toys.",
        difficulty: 3,
        objectives: [
          "Collect chemical boxes around the water slides",
          "Use acid solutions to melt prohibited prize toys",
          "Deconstruct water pump safety systems",
          "Flee through the maintenance drain pipes"
        ],
        enemies: ["Mother Gooseberry", "Big Grunt"],
        tactics: "Melt bins are in highly visible, open spots. Hide inside the water slides or under structures if Mother Gooseberry starts patrolling your sector."
      },
      {
        name: "Open the Gates",
        type: "MK-Challenge",
        description: "Bypass park gates so that more test subjects can participate.",
        difficulty: 2,
        objectives: [
          "Find three main gate power boxes",
          "Perform hotwire operations by connecting correct colored wires",
          "Dodge electrical shock traps of Coyle who is vacationing here",
          "Operate manual gates lever and exit"
        ],
        enemies: ["Leland Coyle", "Night Hunter"],
        tactics: "Wire connection mini-game flashes patterns. Connecting the wrong wire causes a massive shock, alerting Coyle and damaging health."
      },
      {
        name: "Drill the Futterman",
        type: "MK-Challenge",
        description: "Use the industrial drills to dismantle the park's iconic mascot costume.",
        difficulty: 2,
        objectives: [
          "Power up the heavy drilling platform",
          "Search for mechanical drill bits in secret utility toolboxes",
          "Insert bits and perform high-pressure drilling drills on the mascot structure",
          "Relocate to escape zone"
        ],
        enemies: ["Mother Gooseberry", "Berserker", "Screamer"],
        tactics: "The drilling creates incredible vibration and sound. Screamers nearby will immediately trigger. Clear out Screamers *before* starting the drills."
      },
      {
        name: "Deface the Futtermans",
        type: "MK-Challenge",
        description: "Shatter the giant fiberglass figures representing Gooseberry's parents.",
        difficulty: 3,
        objectives: [
          "Acquire sledgehammers from the tool workshop",
          "Locate 4 Futterman giant status statues in the amusement area",
          "Smash statues to dust",
          "Evacuate through loading bays"
        ],
        enemies: ["Mother Gooseberry", "Pouncer"],
        tactics: "Sledgehammers are heavy two-handed items. When carrying them, you cannot use items or crouch inside small spaces. Drop the hammer to defend/flee if needed."
      },
      {
        name: "Redeem your Freedom",
        type: "MK-Challenge",
        description: "Turn in outstanding prize tickets in exchange for experimental serum injectors.",
        difficulty: 2,
        objectives: [
          "Play carnival shooting mini-games under fire",
          "Accumulate 100 prize tickets",
          "Exchanging tickets at the main gift shop counter",
          "Run to the shuttle before gas fills the arena"
        ],
        enemies: ["Big Grunt", "Night Hunter"],
        tactics: "Carnival games require throwing bricks or bottles at targets. Keep throwing objects in your inventory. Watch out for Grunts patrolling the targets."
      },
      {
        name: "Beguile the Children",
        type: "MK-Challenge",
        description: "Spray hallucinogenic mist into orphan dorm ventilations.",
        difficulty: 3,
        objectives: [
          "Locate canisters in the supply closet",
          "Hook them up to the park ventilation ducts",
          "Crank the manual pressure valves to spread the mist",
          "Flee through the ticket gates"
        ],
        enemies: ["Mother Gooseberry", "Night Hunter"],
        tactics: "Valves are spread far apart; clearing tasks requires turning them simultaneously in co-op. In solo, time is limited, so plan a quick circular route!"
      },
      {
        name: "Win the Truth",
        type: "MK-Challenge",
        description: "Overpower park announcers to broadcast the truth about Murkoff.",
        difficulty: 2,
        objectives: [
          "Bypass the secure broadcaster DJ office",
          "Cut power cables feeding the signal jamming towers",
          "Insert raw transmission drive",
          "Survive the 2-minute siege in the DJ lobby",
          "Escape via the emergency monorail"
        ],
        enemies: ["Mother Gooseberry", "Leland Coyle", "Berserker"],
        tactics: "Both Prime Assets (Coyle and Gooseberry) are present in this extreme challenge! Focus heavily on stun/blind rigs and keep moving. Never camp in one room too long."
      }
    ]
  },

  // COURTHOUSE
  {
    id: "courthouse",
    name: "Courthouse",
    description: "Innocent until proven guilty, but you are already guilty! A gothic temple of corrupt laws where judges wield axes.",
    activities: [
      {
        name: "Vindicate the Guilty",
        type: "Trial",
        description: "The scales of justice must balance. Reagents must destroy legal files and sentence the betrayers to death.",
        difficulty: 4,
        objectives: [
          "Search courtroom records for corrupt judges' dossiers",
          "Retrieve heavy brass balancing weights from the archives",
          "Place weights on the scales of justice in central courthouse",
          "Carry judicial documents to the incinerator grids",
          "Locate key codes to open the judge's quarters",
          "Sentence the judge by operating the trapdoor lever",
          "Escape the courthouse through security blockades"
        ],
        enemies: ["Leland Coyle", "Judge (Slasher)", "Night Hunter", "Screamer"],
        tactics: "The courthouse contains multiple levels with overlapping balconies. Leland Coyle acts as a high judge, dropping down from higher balconies when you trigger sound traps."
      },
      {
        name: "Escape the Courthouse",
        type: "MK-Challenge",
        description: "Police blockade is closing in. Find a way out of the sealed basements.",
        difficulty: 3,
        objectives: [
          "Overload courthouse circuit breakers to spark electrical fire",
          "Destroy the concrete foundation locks with heavy drills",
          "Scramble through the drainage ducts to street level",
          "Leap onto returning extraction vehicle"
        ],
        enemies: ["Leland Coyle", "Pouncer"],
        tactics: "Drills overheat and require coolants (water buckets) located around the basement floor. Beware of flooded sewage areas!"
      },
      {
        name: "Destroy the Evidence",
        type: "MK-Challenge",
        description: "Shred classified photographs and files of legal experiments.",
        difficulty: 3,
        objectives: [
          "Find files in judge's secret vault",
          "Bring them to industrial paper shredders in office wing",
          "Bypass locked desk drawers using keypins",
          "Escape via the security staircase"
        ],
        enemies: ["Leland Coyle", "Big Grunt"],
        tactics: "Desks may contain alarm triggers. If you pick the lock incorrectly, sirens will sound, attracting Leland Coyle with his stun baton instantly."
      },
      {
        name: "Tilt the Scales of Justice",
        type: "MK-Challenge",
        description: "Add lead weights to bribe the justice scales and lock courthouse sectors open.",
        difficulty: 4,
        objectives: [
          "Locate heavy iron weights in the basement locker",
          "Carry weights to scale terminals in different courtroom rooms",
          "Evade the Judge's deadly axes on the high balconies",
          "Enter shuttle to retreat"
        ],
        enemies: ["Leland Coyle", "Berserker"],
        tactics: "Carrying iron weights drains your stamina bar completely. Coordinate your moves and use lockers as a tactical stepping point to catch your breath."
      },
      {
        name: "Fuel the Release",
        type: "MK-Challenge",
        description: "Refuel the courthouse gas valves to initiate a chemical purging protocol.",
        difficulty: 4,
        objectives: [
          "Locate fuel canisters in courthouse basement gardens",
          "Evade Night Hunter patrols who have infinite night vision inside the garden maze",
          "Connect canisters to central furnace systems",
          "Vent greenhouse gas to trigger the alarm escape"
        ],
        enemies: ["Night Hunter", "Leland Coyle"],
        tactics: "The garden maze is pitch black. Use Night Hunter's glowing eyes to track his movement. Keep your own NVG turned off if he is looking your way, as your visor glow can give you away."
      },
      {
        name: "Sentence the Prosecuted",
        type: "MK-Challenge",
        description: "Drown the mock witnesses in acid baths to purge their perjury.",
        difficulty: 5,
        objectives: [
          "Push the witness cages along the rails to the chemical tank",
          "Search for valve controls matching the color indicator",
          "Open valve pipelines to flood the tank with toxic solutions",
          "Deactivate security shutters in front of the exit doors",
          "Flee to the extraction ship"
        ],
        enemies: ["Leland Coyle", "Mother Gooseberry", "Night Hunter"],
        tactics: "This is a very high intensity MK-challenge. Focus on equipping the Blind Rig or Stun Rig to temporarily stop the two Prime Assets trying to trap you near the levers."
      }
    ]
  },
  {
    id: "toy_factory",
    name: "Toy Factory",
    description: "Mother Gooseberry's workshop of nightmares. Where childhood toys are welded, laced with glass, and stuffed with sharp wires.",
    activities: [
      {
        name: "Pervert the Futterman",
        type: "Trial",
        description: "Destroy Futterman's wholesome image. Replace clean toys with adult items and push them to the incinerator.",
        difficulty: 4,
        objectives: [
          "Gain access to the central factory production deck",
          "Locate non-conforming items inside blue and pink shipping crates",
          "Place illicit toys on the conveyor belt to trigger manual override",
          "Locate three terminal codes and type them in to start the grinders",
          "Solve hydraulic valves puzzles in the sub-level to restore gas flow",
          "Incinerate the giant Futterman mascot by pulling the final safety toggle",
          "Escape through the loading docks to the Sleep Room shuttle"
        ],
        enemies: ["Mother Gooseberry", "Franco Barbi", "Pouncer", "Screamer"],
        tactics: "Franco Barbi attacks with a shotgun! Run in zigzags and jump through vault doors to dodge his ranged shotgun pellets. Listen for his psychotic laugh."
      },
      {
        name: "Crush the Sex Toys",
        type: "MK-Challenge",
        description: "Locate and obliterate inventory batches before shipment.",
        difficulty: 3,
        objectives: [
          "Gather batches from storage cages",
          "Throw them into mechanical hydraulic presses",
          "Hold levers to crush the shipments",
          "Flee down elevator shaft"
        ],
        enemies: ["Franco Barbi", "Screamer"],
        tactics: "Holding levers takes uninterrupted time. Make sure you use a smoke bomb or distract Franco before interacting with the hydraulic console."
      },
      {
        name: "Incinerate the Sex Toys",
        type: "MK-Challenge",
        description: "Burn the contraband in high-temperature furnaces.",
        difficulty: 3,
        objectives: [
          "Retrieve plastic products from locker systems",
          "Load products into active boiler chambers",
          "Re-route fire pipelines",
          "Evacuate through safety door"
        ],
        enemies: ["Mother Gooseberry", "Pouncer"],
        tactics: "Boilers spark up causing minor fire damage if you stand too close. Watch the hot steam gauges to time your deposits safely."
      },
      {
        name: "Shutdown the Factory",
        type: "MK-Challenge",
        description: "Disable the main power core supplying the conveyor assembly corridors.",
        difficulty: 4,
        objectives: [
          "Disconnect three coolant tanks in sub-level lines",
          "Disable main generator lock with lockpins",
          "Survive high-voltage static field sparks on the floor",
          "Safely pull core handles and flee"
        ],
        enemies: ["Franco Barbi", "Big Grunt"],
        tactics: "Static spikes light up on the metal floor in cycles. Memorize the pattern or walk on wooden planks to avoid getting paralyzed and spotted!"
      },
      {
        name: "Fumigate the Factory",
        type: "MK-Challenge",
        description: "Sterilize the toxic assembly lines using specialized chlorine valves.",
        difficulty: 4,
        objectives: [
          "Locate 4 chlorine capsules",
          "Crank open duct systems to load chlorine",
          "Activate exhaust fans to disperse gas safely away from your mask",
          "Jump onto elevator"
        ],
        enemies: ["Mother Gooseberry", "Night Hunter"],
        tactics: "Fumigation creates yellow smoke that damages your sanity and inflicts Psychosis. Keep antidote vials in your quickbar!"
      },
      {
        name: "Flatten the Foreman",
        type: "MK-Challenge",
        description: "Eliminate the factory's tyrant manager by luring him under the hydraulic compactor.",
        difficulty: 5,
        objectives: [
          "Sneak into the foreman's command balcony",
          "Sabotage his remote console wires",
          "Lure him down to the crushing floor sector",
          "Hold the compactor button while he is trapped inside the zone",
          "Execute the smash and escape through floor drains"
        ],
        enemies: ["Mother Gooseberry", "Franco Barbi", "Big Grunt"],
        tactics: "This requires incredible baiting. Let one player act as bait to run inside the crush zone while another stands at the button console on the catwalk level."
      }
    ]
  },
  {
    id: "docks",
    name: "Docks",
    description: "A rusty harbor under high fog. Home to Franco Barbi's toxic operations and contraband logistics.",
    activities: [
      {
        name: "Poison the Medicine",
        type: "Trial",
        description: "Compromise the city's vaccine crates with custom Murkoff mutagen chemicals.",
        difficulty: 4,
        objectives: [
          "Unlock access to the harbor warehouses",
          "Find colored poison flasks inside the secure medical refrigerators",
          "Carry the chemical flasks to the distribution container vessels",
          "Adjust chemical injectors flow rate on the valves consoles",
          "Lower the cranes by hotwiring the circuit control cabinets",
          "Launch the container barge to spread the compound",
          "Escape the foggy harbor docks before the sirens stop"
        ],
        enemies: ["Franco Barbi", "Berserker", "Pouncer", "Screamer"],
        tactics: "Franco Barbi patrols the dock walkways. High fog lines block your standard vision. Use your night vision goggles to cut through the heavy white fog!"
      },
      {
        name: "Empty the Vault",
        type: "MK-Challenge",
        description: "Steal back precious gold bullion Murkoff lent to the mayor.",
        difficulty: 3,
        objectives: [
          "Locate the bank terminal codes inside the harbor office",
          "Enter codes into the vault biometric mechanism",
          "Transfer 6 gold bars to transport trolley",
          "Escape with the heavy trolley out of the canal"
        ],
        enemies: ["Franco Barbi", "Night Hunter"],
        tactics: "Pushing the trolley is slow and noisy. When Franco spots you, abandon the trolley and run into the shipping crates. Return once he logs off his search alert."
      },
      {
        name: "Poison the Cattle",
        type: "MK-Challenge",
        description: "Inject bio-hazardous agents into harbor livestock to halt food supply.",
        difficulty: 3,
        objectives: [
          "Harvest mutagen syringes from medical cases",
          "Infect 5 cattle feeding stations",
          "Flush the waste conduits into the bay",
          "Flee down side canal stairs"
        ],
        enemies: ["Big Grunt", "Pouncer"],
        tactics: "Pouncers frequently hide behind sliding meat hangers! Throw a bottle into suspected spots to flush them out cleanly before approaching."
      },
      {
        name: "Stash the Contraband",
        type: "MK-Challenge",
        description: "Conceal tracking beacons inside cargo crates to set up a future federal bust.",
        difficulty: 4,
        objectives: [
          "Collect tracking boxes in the captain's office",
          "Slip boxes into marked export shipping containers",
          "Bypass mechanical locks using advanced lockpicking techniques",
          "Evacuate through coastal sewage ducts"
        ],
        enemies: ["Franco Barbi", "Screamer"],
        tactics: "The captain's office is elevated and has very few exits. If cornered, utilize your jump-dash or throw a brick on the glass partition to jump down safely to the dock level."
      },
      {
        name: "Cook the Informant",
        type: "MK-Challenge",
        description: "Heat and melt a witness hidden inside an industrial fish cooker.",
        difficulty: 5,
        objectives: [
          "Secure the witness cage on the conveyor track",
          "Ignite three auxiliary gas ovens across the dock houses",
          "Turn up ventilation pressure dials to overheat the fish refinery",
          "Pull the master execution switch to melt the informant",
          "Flee back to the escape boat"
        ],
        enemies: ["Franco Barbi", "Mother Gooseberry", "Big Grunt"],
        tactics: "The ovens are heavily spaced out. Double-team them to avoid the assets checking each oven consecutively. Have active stun batteries fully charged."
      }
    ]
  },
  {
    id: "downtown",
    name: "Downtown",
    description: "An urban district under complete lockdown. Neon signs, dirty alleyways, and absolute madness.",
    activities: [
      {
        name: "Pleasure the Prosecutor",
        type: "Trial",
        description: "Infiltrate the prosecutor's penthouse and teach him Murkoff's code of behavior.",
        difficulty: 4,
        objectives: [
          "Shatter the main lobby glass door of the luxurious hotel",
          "Find the executive elevator card key hidden in guest files",
          "Navigate the trap-laden penthouse suites",
          "Force-feed chemical solutions to the captive prosecutor",
          "Escape via the fire escape stairs down to the street level"
        ],
        enemies: ["Franco Barbi", "Screamer", "Big Grunt"],
        tactics: "Penthouse suites have tight hallways. Standard escape routes are easily blocked by Big Grunts. Keep a health aerosol or smoke grenade active for tight escapes."
      },
      {
        name: "Kidnap the Mistress",
        type: "MK-Challenge",
        description: "Capture the prosecutor's assistant to guarantee absolute silence.",
        difficulty: 3,
        objectives: [
          "Locate mistress inside the VIP hotel suite",
          "Hold her down and lock her into the transport box wheel chair",
          "Roll the transport box to the collection van",
          "Navigate security checkpoints"
        ],
        enemies: ["Franco Barbi", "Pouncer"],
        tactics: "The transport box squeaks loudly when rolled, alerting nearby ex-pops. Move in short bursts and hide the wheelchair in shadows if you hear running feet."
      },
      {
        name: "Spread the Disease",
        type: "MK-Challenge",
        description: "Vent infective pathogen gas through urban grid lines.",
        difficulty: 4,
        objectives: [
          "Bypass downtown sewer access locks",
          "Load toxic solution packs into primary boiler grids",
          "Open five pressure dampers across alleyways",
          "Escape to the subway pickup terminal"
        ],
        enemies: ["Berserker", "Night Hunter"],
        tactics: "Alleyways are narrow and full of garbage piles representing sound traps. The Berserker has high charge speed, so dodge sideways when he charges you down the alley!"
      },
      {
        name: "Traffick the Product",
        type: "MK-Challenge",
        description: "Deliver stolen weapon crates to black market transporters.",
        difficulty: 5,
        objectives: [
          "Locate military boxes in the police barricade yard",
          "Lift and toss cargo boxes to your team over fence blockades",
          "Load crates safely inside the logistics truck",
          "Operate shipping mechanical garage door",
          "Evacuate before tactical lasers target your zone"
        ],
        enemies: ["Franco Barbi", "Leland Coyle", "Big Grunt"],
        tactics: "Coordinating with a teammate is highly beneficial. One player throws the box over the fence; the other catches and packs it, saving high stamina and minimizing exposure."
      }
    ]
  },
  {
    id: "suburbs",
    name: "Suburbs",
    description: "An artificial suburban neighborhood mock-up inside Murkoff's underground dome. Perfectly manicured lawns hiding high-voltage security grids.",
    activities: [
      {
        name: "Liquidate the Union",
        type: "Trial",
        description: "Disrupt the striking factory union. Purge union pamphlets in backyard barbecues and burn their files.",
        difficulty: 4,
        objectives: [
          "Search suburban garages for union strike pamphlet stacks",
          "Bring stacks to backyard BBQ grills and set them ablaze",
          "Hotwire suburban power breaker grids to melt strike electronics",
          "Escape via the simulated highway exit"
        ],
        enemies: ["Franco Barbi", "Night Hunter", "Screamer"],
        tactics: "Suburban backyards are separated by high bushes. Keep an eye out for holes inside fence rows to slide through for instantaneous evasion."
      },
      {
        name: "Get Out the Vote",
        type: "MK-Challenge",
        description: "Rig the neighborhood municipal election terminals to guarantee a 100% Murkoff-friendly vote count.",
        difficulty: 3,
        objectives: [
          "Search mailboxes for voter verification key cards",
          "Operate five digital voting machines",
          "Align frequency vectors to bypass secure firewalls",
          "Flee back to the school bus shuttle"
        ],
        enemies: ["Franco Barbi", "Pouncer"],
        tactics: "The mailboxes are highly variable. Opening a mailbox might trigger a spring-loaded sonic flash trap! Crouch or look slightly away when opening them."
      },
      {
        name: "Disrupt the Neighborhood",
        type: "MK-Challenge",
        description: "Shatter the beautiful family illusion by breaking windows and spraying graffiti.",
        difficulty: 2,
        objectives: [
          "Throw bricks through 12 specific glowing suburban windows",
          "Spray paint Murkoff propaganda icons on marked garage doors",
          "Escape before security bots lock the perimeter down"
        ],
        enemies: ["Big Grunt", "Screamer"],
        tactics: "Bricks are plenty in backyards. Keep tossing them. The sound of shattered glass will alert the Big Grunt, so throw and immediately run to the next yard."
      },
      {
        name: "Eliminate the Legacy",
        type: "MK-Challenge",
        description: "Erase the records of retired Murkoff engineers living inside the mock community.",
        difficulty: 5,
        objectives: [
          "Locate engineering dossiers inside basement safes",
          "Solve keypad puzzles using invisible ink clues (use NVG to see neon codes on wall)",
          "Overload safe charges to spark documents incinerations",
          "Flee before the main generator detonates"
        ],
        enemies: ["Franco Barbi", "Mother Gooseberry", "Berserker"],
        tactics: "This is a high stress MK-challenge. The neon numeric codes are scattered on the basement walls, but only visible under NVG light. Ensure your NVG battery is fully stocked."
      }
    ]
  },
  {
    id: "shopping_mall",
    name: "Shopping Mall",
    description: "The peak of consumerism turned bloody. Neon escalators and dark department stores where killers watch you shop.",
    activities: [
      {
        name: "Kill the Politician",
        type: "Trial",
        description: "An opposition politician is shopping under security coverage. Locate his VIP lounge and execute him.",
        difficulty: 4,
        objectives: [
          "Bypass shopping wing safety steel grates",
          "Locate VIP elevator circuit codes inside the apparel stores",
          "Enter VIP lobby level and locate secure penthouse lounge",
          "Poison his water cooler system with chemical capsules",
          "Operate secondary trash compactor lever to destroy incriminating aftermath",
          "Flee via the central atrium escalator"
        ],
        enemies: ["Otto and Arora Kress", "Berserker", "Pouncer"],
        tactics: "Escalators are fast. Going down is easy, but running up escalators that move down slows you down 50% and drains stamina. Avoid running up moving-down escalators!"
      },
      {
        name: "Investigate the Minotaur",
        type: "MK-Challenge",
        description: "Recover Murkoff's experimental synthetic growth serum from the central gym vault.",
        difficulty: 3,
        objectives: [
          "Locate gym locker combinations on swimming pool bulletin boards",
          "Infiltrate elite health spa vaults",
          "Retrieve three glowing experimental canisters",
          "Export them safely to the rooftop helipad intake chute"
        ],
        enemies: ["Big Grunt", "Night Hunter"],
        tactics: "The swimming pool basin is wet and slowed down by water. Avoid walking there unless you are absolutely sure of the room's current safety."
      },
      {
        name: "Fabricate the Scandal",
        type: "MK-Challenge",
        description: "Arrange fake compromising photo shoots with politician's mannequins.",
        difficulty: 4,
        objectives: [
          "Carry detailed mannequins to designated department store beds",
          "Arrange custom strobe lights and flashes",
          "Perform hotwire operations to trigger automated camera reels",
          "Escape through high-voltage fire alarm exits"
        ],
        enemies: ["Franco Barbi", "Screamer"],
        tactics: "The camera flashes can blind you temporarily if you face them. Stand behind the tripod when hotwiring the automatic photo console!"
      }
    ]
  },
  {
    id: "resort",
    name: "Resort",
    description: "An elite retreat for Reagents undergoing psychiatric vacationing. Luxury pools of blood and heavy wooden cabins.",
    activities: [
      {
        name: "Despoil the Auction",
        type: "Trial",
        description: "A private wealthy auction is selling secret blueprints. Ruin the event by mixing high-sanity gas.",
        difficulty: 4,
        objectives: [
          "Infiltrate the resort's grand ballroom",
          "Find three fertilizer canisters inside the botanical gardens",
          "Combine chemicals in main ballroom HVAC ventilation console",
          "Trigger fire alarms to force evacuees into gas corridors",
          "Flee down to the resort speed boat dock"
        ],
        enemies: ["Liliya Bogomolova", "Berserker", "Night Hunter"],
        tactics: "Ballroom corridors have open windows letting in flashes of lightning. This temporarily blinds your night vision goggles. Turn NVG off when passing windows!"
      },
      {
        name: "Solve the Murder",
        type: "MK-Challenge",
        description: "Inspect the violent remains of failed Reagents and retrieve key logs.",
        difficulty: 3,
        objectives: [
          "Examine body profiles inside five distinct resort cabins",
          "Extract biometric hard drives from their spinal columns",
          "Carry drives to the central transmitter station",
          "Overload satellite towers and flee"
        ],
        enemies: ["Mother Gooseberry", "Pouncer"],
        tactics: "Cabins are spaced far apart. Traveling between them exposes you to outdoor forest regions with very high visibility. Hide in bushes or tall grass if pursued."
      },
      {
        name: "Incinerate the Relic",
        type: "MK-Challenge",
        description: "Destroy ancient religious artifacts that Reagents have started worshipping.",
        difficulty: 4,
        objectives: [
          "Locate historic golden relics in resort museum cases",
          "Break glass cases using bricks or custom tools",
          "Carry items to resort outdoor bonfires and throw them in",
          "Wait for incineration while defending against angry fanatics",
          "Flee via the forest trails shuttle"
        ],
        enemies: ["Big Grunt", "Mother Gooseberry", "Screamer"],
        tactics: "Breaking glass triggers instant alarms. Relics are extremely heavy. Use the health/stamina boosters beforehand to guarantee quick sprints to the bonfire."
      }
    ]
  },
  {
    id: "television_studio",
    name: "Television Studio",
    description: "On Air! A high-voltage broadcasting environment where retro cameras and bright studio spots hide lethal monitors.",
    activities: [
      {
        name: "Silence the Idol",
        type: "Trial",
        description: "The television host is telling Reagents the truth about Murkoff inside the central news cage. Shatter the antennas and mute his broadcasts forever.",
        difficulty: 5,
        objectives: [
          "Force open the television studio's primary security bay",
          "Retrieve heavy optical laser lenses from stage warehouses",
          "Align high-frequency laser nodes to focus thermal beams on the news cage shutters",
          "Cut broadcasting cables in stage A, B, and C in correct chronological sequence",
          "Find transmitter key pins and scramble the broadcast towers",
          "Drown the announcer in liquid coolant by overriding valve levers",
          "Run to the helipad elevator before backup security locks you in"
        ],
        enemies: ["Franco Barbi", "Leland Coyle", "Mother Gooseberry", "Night Hunter"],
        tactics: "This is a full scale Trial where all three Prime Assets may cross paths! Conserve battery, coordinate laser alignment quickly, and keep communication clear."
      }
    ]
  },
  {
    id: "new_map",
    name: "Unnamed New Map",
    description: "",
    activities: [
      {
        name: "TBA",
        type: "Trial",
        description: "",
        difficulty: 5,
        objectives: [
          ""
        ],
        enemies: ["Leland Coyle"],
        tactics: ""
      }
    ]
  },
  {
    id: "waste_tunnel",
    name: "Waste Tunnel",
    description: "The sub-surface sewer networks of the facility. Extremely narrow dark tunnels littered with toxic chemicals and high humidity.",
    activities: [
      {
        name: "Escape",
        type: "MK-Challenge",
        description: "A pipe rupture is flooding the sector. Navigate the narrow corridors before drowning.",
        difficulty: 4,
        objectives: [
          "Shatter three concrete wall blocks with hammers",
          "Align plumbing direction wheels to close sewer breaks",
          "Squeeze through sewer gratings",
          "Climb to the exit deck ladder"
        ],
        enemies: ["Night Hunter", "Berserker"],
        tactics: "Water flows opposite to your escape direction, slowing your steps. Use boxes and metal steps to jump along dry paths to maintain maximum speed."
      },
      {
        name: "Escape the Lies",
        type: "MK-Challenge",
        description: "The ventilation has been contaminated with lethal gas. Seek sanitizing air pods.",
        difficulty: 5,
        objectives: [
          "Search for air breathing canisters in emergency cases",
          "Charge your respirator battery periodically",
          "Locate exit coordinates marked in glowing paint",
          "Release door safety bars and evacuate"
        ],
        enemies: ["Night Hunter", "Pouncer", "Screamer"],
        tactics: "This is a timed challenge with a constant health/sanity degeneration. Always verify your current gas filter state and prioritize speed over thorough exploration."
      }
    ]
  }
];

export const ENEMIES_DATA = {
  "Leland Coyle": {
    name: "Leland Coyle",
    alias: "Sergeant Coyle",
    weapon: "Electrified Shock Baton",
    description: `Leland Coyle was born in the year 1923, in Blackwell, Oklahoma, a small yet well-known sundown town. There are anecdotal accounts of abuse of animals and sexual assault during his childhood, which led to him being enrolled in a military academy education. As a teenager he had criminal tendencies, but this was curbed by his involvement with the local Ku Klux Klan chapter.
                  
                  At the age of nineteen, he entered into his first marriage. Coyle murdered her 6 months later. The circumstances of her murder are unknown, but he told police she had "fallen down the stairs". To avoid further investigation, he joined the U.S. Marine Corps. Serving honorably for two years in the Pacific theatre during World War II, he earned three confirmed enemy kills and his record notes two additional "suspicious" American deaths in his company.
                  
                  Following his return to Oklahoma post-war, he resumed his involvement with the KKK, which naturally transitioned to a career as a police officer starting in 1947. Coyle proved exceptionally adept in his role as a police officer, accumulating numerous commendations for his service. However, his achievements and success were tainted by allegations of profiting from the exploitation of prison labor, extortion, and civil forfeiture, implying corruption on his part. Additionally, he held esteemed positions within the Elks Club and the VFW.
                  
                  After marrying for the second time, Coyle promptly extorted his new family. Following their deaths in a fatal electrical fire, his wife fled to Chicago. Coyle murdered her as well, but her death was officially labeled as 'natural causes'. It is implied he was responsible for her family's death as well, though it has never been confirmed.
                  
                  Sometime later, Coyle was promoted to Sergeant and entered into another marriage. He shot his third wife multiple times in the head, but her death was ruled a suicide. Within a year, her family members also passed away under mysterious circumstances, purportedly by suicide, though it was again implied he was involved as the methodologies became increasingly violent and complex.
                  
                  In February of 1956, Coyle encountered Murkoff's Clyde Perry at a bar on Route 177. While chatting, Coyle drank alcohol heavily and casually ate nuts from the table. Perry's pretext was bribery, but Coyle quickly discerned his deception and stated he was aware Perry had been following him. The interaction turned physical, resulting in Perry sustaining two broken fingers, extensive bruising, and urinary complications. Despite Perry's survival, he believed Coyle toyed with him akin to a cat with its prey, surmising Coyle's restraint from killing him as evidence of this. Nevertheless, or perhaps due to this incident, Perry vehemently endorsed Coyle for PROJECT LATHE.
                  
                  The specifics of Coyle's recruitment into PROJECT LATHE remain unknown, although it seems very unlikely that he was recruited from a prison or asylum, unlike Mother Gooseberry and Franco Barbi.`,
    tactics: ""
  },
  "Mother Gooseberry": {
    name: "Mother Gooseberry",
    alias: "Phyllis Futterman",
    weapon: "Handmade Drill (Doctor Futterman)",
    description: `Before the events of The Outlast Trials, Gooseberry was the daughter of a dentist in Philadelphia. She worked as her father's assistant from a young age, using puppets to distract adolescent patients during drilling/surgery. Back then, her hobbies included taxidermy and musical theater. Due to the popularity of her family locally, Gooseberry had her studio, called Futterland Studios, where she hosted a children's variety show known as 'The Mother Gooseberry Hour', which started airing in 1951. Following Dr. Futterman's death, the cause of which is still unknown, she had a hysterical episode and began experiencing dissociative episodes. The tone of the Mother Gooseberry Hour shifted accordingly.
                  
                  Throughout her tenure on the show, she used her television platform and mail-order "dental drops" business to get children addicted to narcotics, violence, theft, and possibly murder. Over the years, the children watching her show became cult-like, engaging in immoral behavior, drug use, and other shenanigans leading to larceny and assault. In 1955, Futterland Studios was raided by the police, after which she was charged with racketeering, kidnapping, and conspiracy to commit murder. The raid left two police officers dead and five others injured, as she escaped into the tunnels beneath the set to attack them with drills. It is unclear exactly what was inside Futterland Studios, but police captain Stanley Hoad described the contents of the studios as "The most grotesque architectural perversion since H.H. Holmes’ Chicago Murder Castle".
                  
                  After her arrest she was sent to Holmesburg Prison north of Philadelphia, where she underwent dermatological experiments under the supervision of Doctor Kligman. During these experiments, Gooseberry was exposed to carbonic acid and dioxin and had grafts of necrotic flesh as well. Fortunately for her, she survived these experiments, with her physical health remaining remarkable. Clyde Perry was able to secure an interview with Mother Gooseberry, where she attempted to attack him before being restrained. She expresses interest in the facility, saying she would like a change of scenery. Clyde also notes that she has two carnal relations with guards, and that she also had other inmates and staff under her sway as well.`,
    tactics: ""
  },
  "Franco Barbi": {
    name: "Franco Barbi",
    alias: "Il Bambino",
    weapon: "Sawed-off Shotgun",
    description: `Franco Barbi was born to a Louisiana mafia don and an unnamed woman. According to him, he never knew his birth mother and instead grew up with his father's numerous wives. He committed his first murder at the age of 12 and would later become a debt collector and hitman for the crime syndicate. He would become problematic for the Mafia due to his total disregard for human life, especially to those he attempted to engage in sexual activities with. Due to his impotency he would frequently murder his sexual partners for psychosexual reasons. Franco would eventually be sent to Miami, supposedly for Mafia business but the real reason was far more complicated. At some point, Franco engaged in a sexual relationship with his stepmother Angelina Barbi, as her degradation brought him sexual pleasure. Franco's father found out about the affair and severely beat him before exiling him, his life spared due to their blood relation.

                  Franco would eventually move his operations to Cuba and briefly become involved in CIA operations. He participated in numerous raids against revolutionary forces. However, he would once again begin to indiscriminately murder just as he did in New Orleans, seemingly for no benefit to the CIA, leading to his expulsion from operations. Franco would eventually catch the attention of Murkoff after he witnessed a Reagent commit an assassination[1]. Seemingly inspired by the kill, he would go on to murder seven people, leading to Murkoff dispatch Clyde Perry to investigate. Perry would later track down Franco to a hotel where he was meeting a prostitute. Perry was alerted by the hotel clerk that there was an incident in one of the rooms, upon investigation he found a dead prostitute along with Franco's possessions, including his shotgun, Lupara. When Perry attempted to investigate, Franco emerged from the dead prostitutes chest cavity. Clyde Perry was nearly beaten to death and sent to Texas for leg reconstruction and skull surgery. Franco Barbi was later captured and sent to the Sinyala Facility.`,
    tactics: ""
  },
  "Otto and Arora Kress": {
    name: "Otto and Arora Kress",
    alias: "The Kid / Il Bambino",
    weapon: "Lupara Shotgun (Fires toxic pellets)",
    description: "A mafia heir who behaves like an oversized, psychotic toddler. He is the first ranged Prime Asset in the trials. He fires a miniature lupara shotgun loaded with laced pellets.",
    tactics: "Franco is a ranged menace. Run in sudden zigzags when you hear him fire. Crouch behind solid masonry or file cabinets. You can hide inside lockboxes or closets to wait for him to reload."
  },
  "Liliya Bogomolova": {
    name: "Liliya Bogomolova",
    alias: "The Kid / Il Bambino",
    weapon: "Lupara Shotgun (Fires toxic pellets)",
    description: "A mafia heir who behaves like an oversized, psychotic toddler. He is the first ranged Prime Asset in the trials. He fires a miniature lupara shotgun loaded with laced pellets.",
    tactics: "Franco is a ranged menace. Run in sudden zigzags when you hear him fire. Crouch behind solid masonry or file cabinets. You can hide inside lockboxes or closets to wait for him to reload."
  },
  "Stalker": {
    name: "Stalker",
    alias: "The Locker Lurker / Prowler",
    weapon: "Claws & Screwdrivers",
    description: "Hideous Reagents who went mad from therapy. They hide inside lockers and cargo boxes, springing out to slash unsuspecting victims who walk too close.",
    tactics: "Approach lockers cautiously. Tap on lockers with a bottle or run close then back pedal to trigger their spray-slash attack safely without getting seized."
  },
  "Big Grunt": {
    name: "Big Grunt",
    alias: "The Brute",
    weapon: "Heavy Iron Pipes / Wood Cleaver",
    description: "Massive, physically mutated human behemoths possessing colossal strength. They are blind in one eye but can smell or hear Reagents from far distances. They can throw you through walls.",
    tactics: "Do not attempt to block or run through them. They can easily overpower any resistance. Always crouch-walk behind them. Use smoke bombs or stun grids to bypass narrow doorways they block."
  },
  "Night Hunter": {
    name: "Night Hunter",
    alias: "The Goggles Hunter",
    weapon: "Machete",
    description: "An Ex-Pop fitted with custom, glowing orange night vision goggles. He is highly adapted to dark basements and pitch-black sewers, tracking Reagents using their own motion and flashlight beams.",
    tactics: "He is blind in bright daylight or rooms with operational fluorescent lamps. If pursued, lead him into brightly lit chambers (by switching on wall breakers) which will blind him completely, allowing an easy getaway."
  },
  "Screamer": {
    name: "Screamer",
    alias: "The Alarm Ex-Pop",
    weapon: "Sonic Shrill Screech",
    description: "An inactive, trembling Ex-Pop who sits on chair frames or on the floor. If startled by loud noises (sprinting, shattering doors, bumping glass), they emit an intense supersonic screech that alerts all assets and temporarily paralyzes Reagents.",
    tactics: "Walk or crouch-walk past Screamer units slowly. Alternatively, throw a brick at them to put them to sleep/silence them for 20 seconds, letting you sprint through their sector safely."
  },
  "Pouncer": {
    name: "Pouncer",
    alias: "The Hider",
    weapon: "Kitchen Knife & Teeth",
    description: "Frail but highly agile Ex-Pops who hide behind curtains, under beds, or inside laundry bins, leaping on passing Reagents to slash them fiercely.",
    tactics: "When she pounces, tap the escape struggle key instantly. Having a teammate nearby with a brick will instantly smash her off you, saving high vitality health."
  },
  "Berserker": {
    name: "Berserker",
    alias: "The Blind Brute",
    weapon: "Spiked Steel Fists",
    description: "A massive, blind behemoth with a metal head harness. He relies entirely on sound, charging forward linearly with insane speed towards any running step, broken window, or alarm siren.",
    tactics: "If you hear him preparing a charge, stand completely motionless or step aside. He will charge directly past you, smashing into the wall and stunning himself, which gives you ample time to escape."
  }
};
