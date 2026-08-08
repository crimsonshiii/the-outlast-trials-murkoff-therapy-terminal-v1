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
    description: "Everyone deserves a second chance. Some of us even deserve a first. The Orphanage is a sanctuary and gentling box for the abandoned and unwanted. Come inside and find yourself a whole new family.",
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
    description: "Is there anything better than a day at the carnival? Cotton candy, skee-ball, grinning clowns, and the laughter and screams of children. Anything can happen at the Fun Park, so keep your eyes on your kids, or someone else might.",
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
        description: "You have to make an example. If you punish a few children firmly enough, you teach all the children the lesson. Punish the children, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Find and Grind the Bad Children"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Inside the Barn, locate the grinder, then follow color-coded wires to find and press the button switches that disable the four child mannequins hidden across the Barn's Attic, Castle, Diner, and Carousel areas. Once all mannequin upper halves are ripped off and disposed of in the grinder, evade Mother Gooseberry's ambush and escape via the exit shuttle."
      },
      {
        name: "Open the Gates",
        type: "MK-Challenge",
        description: "You are the warden of all your own prisons, your containment requires your will. Disconnect the power, open the doors, and let yourself go.",
        difficulty: 2,
        objectives: [
          "Open the Gates to Reach the Exit"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "To open the four rolling gates blocking your exit, follow the glowing power wires to locate and disconnect three battery modules in each color-coded area. Navigate the Barn's Attic, Castle, Diner, and Carousel areas in sequence while evading Mother Gooseberry and her assisting Ex-Pops, then escape via the final Shuttle."
      },
      {
        name: "Drill the Futterman",
        type: "MK-Challenge",
        description: "You are a consumer, you are not the product. If you allow them to turn us into toys, then you deserve to be played with. Destroy the human toy, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Kill Mr. Futterman in Gooseberry's Office"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Throw hearts at Futterman targets in Canal A and B to disable blocking flamethrowers and gain access to the backrooms. Once inside, bypass patrolling Ex-Pops and a Night Hunter to reach the Office, press the button switch to execute Bootleg Futterman, then escape Mother Gooseberry's ambush."
      },
      {
        name: "Deface the Futtermans",
        type: "MK-Challenge",
        description: "You are not your childhood. Memory is the grotesque narcissism of individuality and reason. Nostalgia. Nostalgia is the testament that will strengthen the flock. Abandon your youth. Deface and demean the infantile puppets that control you, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Reach the Exit"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Navigate through the Carousel, Diner, and Castle areas by throwing hearts at moving Futterman targets to unlock consecutive gates while managing your heart inventory. Upon entering the Barn, quickly grab hearts and hit the final three targets in the attic within 180 seconds to reopen the exit and escape Mother Gooseberry."
      },
      {
        name: "Redeem your Freedom",
        type: "MK-Challenge",
        description: "You are the consumer, whose life's value is revealed by the worthless currency that sustains it. Collect the tickets, turn them in, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Redeem your Freedom"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Collect ten tickets from dispensers spread across the lower canals and upper offices while managing your limited four-ticket carrying capacity. Make multiple runs to redeem them at the ticket booth in Mother Gooseberry's office while evading her and the hostile Ex-Pops before escaping through the shuttle."
      },
      {
        name: "Beguile the Children",
        type: "MK-Challenge",
        description: "You are the mesmerist, gently murmuring behind the pendulum, guiding the sleepwalking children into the grinder we call propriety. Change the channel, switch the program, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Find the codes to modify the messages"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Explore the Illusion Castle to locate three projectors and insert the correct film reels, deciphering a code sequence while evading Mother Gooseberry and roaming Ex-Pops. Memorize this sequence to solve the puzzle boxes in the Space Rocket's auditorium, then activate the button switch to alter the TV program and escape."
      },
      {
        name: "Win the Truth",
        type: "MK-Challenge",
        description: "You are the blind observer, who consumes screen-fed ignorance and swells with the genius of idiot artifice. Regurgitate the knowledge that brings suffering to the wise, win the game which only punishes the defeated, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Complete the First Round",
          "Survive the Game Show"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Search the designated rooms across the Illusion Castle to find the correct symbols, calculate the mathematical solutions displayed on the screens, and input the digits into the puzzle boxes at the Hourglass. Press the confirmation button to complete each round while evading Mother Gooseberry, ensuring accuracy to avoid receiving fatal electrical shocks."
      }
    ]
  },

  // COURTHOUSE
  {
    id: "courthouse",
    name: "Courthouse",
    description: "The Courthouse stands as a monolith of justice, where life and death are a matter of persuasion and expense. Surrender yourself to a higher power and beg for the mercy of the court.",
    activities: [
      {
        name: "Vindicate the Guilty",
        type: "Trial",
        description: "You are justice. You are loyal. We cannot allow the tyranny of facts and impartial reason to condemn the people who protect and guide you. The past is changeable, the future is set. Sabotage the court, kill the judge, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Infiltrate the Courthouse",
          "Reach the Courtroom",
          "Unlock the Evidence",
          "Drop the Evidence in the Fountain",
          "Gather Acid and pour into the Fountain",
          "Destroy the Remaining Evidence",
          "Return to the Courtroom",
          "Kill the Witness",
          "Kill the Remaining Witnesses",
          "Return to the Courtroom (Again)",
          "Execute the Judge"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Decipher blacklight puzzle codes to retrieve evidence heads and carefully transport acid buckets to dissolve the proof in the courtyard fountain while evading Leland Coyle. Then, hunt and execute the remaining Scapegoat witnesses using Microwave Triggers before restoring power to crank the backstage execution machine and hang the Judge and make your way to exit through the trial shuttle."
      },
      {
        name: "Escape the Courthouse",
        type: "MK-Challenge",
        description: "You are special. You are deserving. Civilization is founded on the suffering of the weak. Kill the scapegoats to open the gates, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Escape The Courthouse"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Use Microwave Triggers and Trackers to locate and execute Scapegoats across three sections of the Courthouse while evading patrolling Ex-Pops and a Berserker. Once the final Scapegoat is executed to unlock the exit, bypass Leland Coyle's outside ambush to escape via the shuttle."
      },
      {
        name: "Destroy the Evidence",
        type: "MK-Challenge",
        description: "You are decay, the ceaselessly grinding entropy that destroys fact and makes way for history. Use the acid to destroy the evidence, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Pour Acid to Dissolve the Body in the Courtroom"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Locate and transport acid buckets from marked areas to the Main Courtroom without spilling the contents or falling victim to Leland Coyle's patrolling route. Pour all the acid buckets into the bath to dissolve the dead Reagent, then navigate around the active Timed Gates to escape via the exit shuttle."
      },
      {
        name: "Tilt the Scales of Justice",
        type: "MK-Challenge",
        description: "You are the defense. The guilty cannot be allowed to face justice in opposition to Murkoff's profit and influence. Add physical evidence to the moneyed side to tilt the scales of justice, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Present the Head to Lady Justice",
          "Tilt the Scales of Justice"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Decipher ninety-second blacklight puzzles in the marked wings to unlock evidence heads, carefully avoiding the patrolling Leland Coyle and silent sound-detector gates. Deposit all four heads onto Lady Justice's scales in the lobby to secure a 'Not Guilty' verdict and flee to the escape shuttle."
      },
      {
        name: "Fuel the Release",
        type: "MK-Challenge",
        description: "You are liberty, let nothing contain you. Law is only the word of man, and facts the mere happenstance of existence. Open all the doors that would contain you, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Reach the Exit"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Transport gas cans to locate and reactivate sequential generators in the Main Courtroom, Courtyard, and Lobby to unlock the blocking rolling gates. Avoid Leland Coyle and patrolling Ex-Pops across alternating routes before opening the main entrance and escaping to the shuttle."
      },
      {
        name: "Sentence the Prosecuted",
        type: "MK-Challenge",
        description: "You are the investigator, here to find the evidence that will confirm the political will of the judge. Spell out the story that confirms the guilt of the condemned, and we will let you out.",
        difficulty: 2,
        objectives: [
          "Solve the Word",
          "Sentence the Prosecuted"
        ],
        enemies: ["Leland Coyle"],
        tactics: "Use a Decoder to locate projection symbols in the upper hallways to decipher the codes that spell out the condemning word on the courtroom screens. Once the code is input, press the button switch to drop the hanging Reagent into the meat grinder and escape via the exit shuttle while evading Leland Coyle and patrolling Ex-Pops."
      },
      {
        name: "Bribe the Judges",
        type: "MK-Challenge",
        description: "TBA",
        difficulty: 5,
        objectives: [
          "TBA"
        ],
        enemies: ["Leland Coyle"],
        tactics: "TBA"
      },
    ]
  },

  // TOY FACTORY
  {
    id: "toy_factory",
    name: "Toy Factory",
    description: "A machine erected in celebration of capitalism's steady march toward the cheap, unnecessary, and disposable. Celebrate childhood joy with impossible quotas, slave wages, and zero safety standards.",
    activities: [
      {
        name: "Pervert the Futterman",
        type: "Trial",
        description: "You are the revelator, what you build exposes the perversion latent in every heart. We cannot allow hidden messages and innuendo to corrupt our children. Expose, humiliate, and destroy the deviant, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Infiltrate the Toy Factory",
          "Reach the Production Line",
          "Start the Production Line",
          "Unlock the Security System",
          "Find Wax Boxes in Storage",
          "Complete all Production Steps",
          "Reroute the Production Line",
          "Burn the Sex Toy"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Acquire foreman keys and use conveyor belts to transport specific materials like wax boxes to the input machines, progressing the target through the production line while evading Mother Gooseberry. Once completed, reroute the line to the incinerator, restore gas pressure by turning basement valves, and operate the furnace pumps to destroy the target and unlock the exit shuttle."
      },
      {
        name: "Crush the Sex Toys",
        type: "MK-Challenge",
        description: "I cannot teach you. I can only offer fear and pain and perversion and rage. Let these show you a path to enlightenment. Crush and destroy the toys, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Crush the Sex Toy Boxes"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Activate faulty generators to power up blacklights and reveal hidden puzzle codes on the correct sex toy boxes, carefully avoiding explosive duplicates. Transport the matching boxes to the compactor using conveyor belts and escape via the shuttle while evading Mother Gooseberry and her Ex-Pop assistants."
      },
      {
        name: "Incinerate the Sex Toys",
        type: "MK-Challenge",
        description: "You are the sunlight, that burns away exposed infection. Perversion thrives in the damp, dark places where secrets fester. Incinerate the sex dolls, and we will let you out.",
        difficulty: 1,
        objectives: [
          "Push the Carts into the Incinerator"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Locate and collect specific electronic keys from the signposted areas of the basement to unlock sequential gates blocking the production carts. Push the carts full of toys along the rail line while evading Mother Gooseberry and roaming Ex-Pops, then incinerate them to open the path to the escape shuttle."
      },
      {
        name: "Shutdown the Factory",
        type: "MK-Challenge",
        description: "Workers are capital itself, products bought and engaged to create more easily sellable products. We must control production. Shut down the factory, and we will let you out.",
        difficulty: 4,
        objectives: [
          "Shutdown the Factory"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Locate and tinker with labeled Electric Panels across all four sections of the factory to power and press the main device buttons, locking down corresponding production lines. Slip through the resulting lockouts using alternative pathways and shortcuts while evading Mother Gooseberry and avoiding alarm doors that deploy extra Ex-Pops before escaping through the shuttle."
      },
      {
        name: "Fumigate the Factory",
        type: "MK-Challenge",
        description: "You are the happy accident, the unnoticed leak that invites invisible death, ushering out the workers whose lives linger beyond their productivity. Fumigate the factory, kill the employees, and we will let you out.",
        difficulty: 4,
        objectives: [
          "Spread gas throughout the factory",
          "Regroup at the incinerator"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Trace color-coded pipes to release valve pressure across Sections A and B of the basement while evading Mother Gooseberry and patrolling Ex-Pops. Once all six valves are activated to flood the factory with gas, trigger the central gas chamber to execute the trapped Reagents and flee through the exit shuttle before suffocating."
      },
      {
        name: "Flatten the Foreman",
        type: "MK-Challenge",
        description: "Industrial production must not be hamstrung by the gremlins of workplace safety. A consumer's choice between value and virtue is no choice at all. Kill the foreman and slash production cost, and we will let you out.",
        difficulty: 5,
        objectives: [
          "Power Up the Compactor",
          "Flatten the Foreman"
        ],
        enemies: ["Mother Gooseberry"],
        tactics: "Gather four keys hidden across signposted rooms in each factory section to unlock security locks and power up the compactor while using unstable microwave triggers to open blocked gates. Avoid Mother Gooseberry and act quickly, as the difficulty level and enemy density escalate over time, before activating the compactor to crush the foreman and rushing to the exit within 180 seconds."
      }
    ]
  },

  // DOCKS
  {
    id: "docks",
    name: "Docks",
    description: "Crime and commerce comingle in the fetid waters under The Docks. Any imaginable vice is chum that draws up the sharks omnipresent beneath the calm surface of society. There's money to be made on the frontiers of what's legal.",
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

  // DOWNTOWN
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

  // SUBURBS
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

  // SHOPPING MALL
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

  // RESORT
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

  // TELEVISION STUDIO
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
      },
      {
        name: "Cancel the Broadcast",
        type: "MK-Challenge",
        description: "TBA",
        difficulty: 4,
        objectives: [
          "TBA"
        ],
        enemies: ["Big Grunt", "Mother Gooseberry", "Screamer"],
        tactics: "TBA"
      }
    ]
  },

  // PRISON FARM
  {
    id: "prison_farm",
    name: "Prison Farm",
    description: "TBA",
    activities: [
      {
        name: "Locksock the Warden",
        type: "Trial",
        description: "You are freedom. The indefinable promise that keeps prisoners at the grindstone that turns authority to profit and back again. Don't let false authority stand in the way of real capital. Kill the Warden, and we will let you out.",
        difficulty: 3,
        objectives: [
          "Infiltrate the Prison",
          "Find the Warden",
          "Enter the Panopticon",
          "Incite a Riot (Redirect Steam Flow in Block A)",
          "Incite a Riot (Destroy Food Source in Block B)",
          "Open the Panopticon Cells",
          "Get to the Warden's Office",
          "Locksock the Warden"
        ],
        enemies: ["Leland Coyle"],
        tactics: "TBA"
      }
    ]
  },
  {
    id: "unnamed_map",
    name: "S8 Map",
    description: "TBA",
    activities: [
      {
        name: "TBA",
        type: "Trial",
        description: "TBA",
        difficulty: 3,
        objectives: [
          ""
        ],
        enemies: ["Leland Coyle"],
        tactics: "TBA"
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
  },
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
    alias: "Kress Twins / The Buffalo Minotaur",
    weapon: "Handheld circular saw (Otto), Flasks of poison (Arora)",
    description: `Born in 1899, Otto and Arora Kress were conceived as the firstborn children to Anton Kress, the wealthy patriarch of the Kress Family estate and founder of successful industrial company Kress Chemical; and a mother who died giving birth to the two siblings. During their mother's pregnancy, Anton frequently brought his work home and negligently exposed her to toxic chemicals, which in turn lead to utero exposure to chemicals in the womb. As a bizarre side effect of the chemical contamination, Otto and Arora were horrifically conjoined at birth.
    
                  During their childhood, they each developed and nurtured their own talents: Otto focuses on politics, while Arora focuses on chemistry. Together, the twins used their skills and positions in Kress Chemical to earn a significant amount of influence in Buffalo, New York. This included empowering fellow politicians from behind the scenes to manipulate water pollution regulations and improving Kress Chemical's failing business developments that had occurred as a result of Anton Kress' descent into alcoholism.
    
                  Despite their success, Otto and Arora engaged in increasingly depraved activities. Beginning in the 1920s, Otto and Arora Kress both participated in a series of murders in Buffalo, New York, seemingly as a result of their degraded mental state in response to societal rejection because of their mutual disfigurement. These murders significantly escalated by the 1940s, with many of the siblings' victims reported to be vagrants, prostitutes and Canadian locals. The serial killings would earn the two the pseudonym "The Buffalo Minotaur" by the press. Further investigations the Kress siblings' violent activities revealed that the two had used the Kress family estate as a burial ground for their numerous victims. Additionally, Otto and Arora have engaged in a lengthy incestuous relationship.

                  In 1924, Anton Kress realized the depths of the Twins' depravity and attempted to separate Otto and Arora using a hand saw. However, he was unsuccessful and was sawn in half by the twins, who both proceeded to slowly torture their father to death by sewing him together with both halves upside-down and forcibly kept him alive for weeks before disposing of him.

                  With their involvement in politics and the chemical industry, Otto and Arora managed to design New York politics from behind the scenes for years to come and secured employment for many workers within Kress Chemical. However, Otto and Arora's crimes would catch up to them once Otto Kress' ambitions to become elected as a US Governor convinced him to step out of the limelight and into the public eye. Around 1958, they were arrested after police arrived at their home and found them covered in blood. However, the Buffalo Minotaur's activities had additionally caught the attention of Clyde Perry, who began investigating the so-called Buffalo Minotaur in 1957 following an apparent business partnership between the Murkoff Corporation and Kress Chemical. Perry believed the case could be of substantial interest to the Sinyala Facility's work.
                  
                  Shortly after their imprisonment, Otto and Arora were acquired by Perry in their cell, and the Buffalo Minotaur Murders were swiftly covered up and blamed on the Kress Estate's groundskeeper to protect Kress Chemical's business interests.[5] The Kress Twins were inducted into the Murkoff Corporation as members of the Chemical Research & Development division, with Arora even learning to speak fluent Japanese solely to communicate with Doctor Jun Kusamura, a Consulting Chemical Engineer and former Unit 731 scientist. One day, Kusamura visits their laboratory to deliver two pieces of news; the first is about Clyde Perry's death. When Otto asked Arora about the second news, Kusamura knocked them unconscious with chemical gas while they were not looking and claimed they would know once they woke up. Otto and Arora were then forcibly inducted as Prime Assets for Project Lathe.`,
    tactics: ""
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
