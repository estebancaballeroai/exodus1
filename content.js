(function(){'use strict';window.GAME_CONTENT={
  "version": "2.5",
  "features": {
    "level": 10,
    "rpg": true,
    "missions": true,
    "factions": true,
    "colony": true,
    "galaxy": true,
    "pwa": true,
    "narrativeLevel": 5,
    "maxTier": 10
  },
  "images": {
    "intro": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=86",
    "station": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=86",
    "moon": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=86",
    "ruins": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=86",
    "derelict": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1800&q=86",
    "anomaly": "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=1800&q=86",
    "battle": "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1800&q=86",
    "planet": "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=1800&q=86",
    "nebula": "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=1800&q=86"
  },
  "origins": {
    "terre": {
      "label": "Terre",
      "desc": "+1 Presence, +1 Diplomatie, +1 Science",
      "stats": {
        "presence": 1
      },
      "skills": {
        "diplomacy": 1,
        "science": 1
      }
    },
    "mars": {
      "label": "Mars",
      "desc": "+1 Physique, +1 Volonte, +2 Combat",
      "stats": {
        "physique": 1,
        "volonte": 1
      },
      "skills": {
        "combat": 2
      }
    },
    "ceinture": {
      "label": "Ceinture",
      "desc": "+1 Reflexes, +1 Survie, +1 Pilotage",
      "stats": {
        "reflexes": 1
      },
      "skills": {
        "survival": 1,
        "pilotage": 1
      }
    },
    "station": {
      "label": "Station orbitale",
      "desc": "+1 Technique, +2 Ingenierie",
      "stats": {
        "technique": 1
      },
      "skills": {
        "engineering": 2
      }
    },
    "lune": {
      "label": "Lune",
      "desc": "+1 Intelligence, +2 Science",
      "stats": {
        "intelligence": 1
      },
      "skills": {
        "science": 2
      }
    }
  },
  "roles": {
    "explorateur": {
      "label": "Explorateur",
      "desc": "+1 Reflexes, +1 Survie, +1 Science",
      "stats": {
        "reflexes": 1
      },
      "skills": {
        "survival": 1,
        "science": 1
      }
    },
    "ingenieur": {
      "label": "Ingenieur",
      "desc": "+1 Technique, +2 Ingenierie",
      "stats": {
        "technique": 1
      },
      "skills": {
        "engineering": 2
      }
    },
    "scientifique": {
      "label": "Scientifique",
      "desc": "+1 Intelligence, +2 Science",
      "stats": {
        "intelligence": 1
      },
      "skills": {
        "science": 2
      }
    },
    "militaire": {
      "label": "Militaire",
      "desc": "+1 Physique, +2 Combat",
      "stats": {
        "physique": 1
      },
      "skills": {
        "combat": 2
      }
    },
    "diplomate": {
      "label": "Diplomate",
      "desc": "+1 Presence, +2 Diplomatie",
      "stats": {
        "presence": 1
      },
      "skills": {
        "diplomacy": 2
      }
    },
    "pilote": {
      "label": "Pilote",
      "desc": "+1 Reflexes, +2 Pilotage",
      "stats": {
        "reflexes": 1
      },
      "skills": {
        "pilotage": 2
      }
    }
  },
  "traits": {
    "curieux": {
      "label": "Curieux",
      "desc": "Les reussites scientifiques peuvent produire +1 donnee.",
      "passive": "science_data"
    },
    "idealiste": {
      "label": "Idealiste",
      "desc": "Les actions heroiques reussies donnent +1 reputation.",
      "passive": "heroic_rep"
    },
    "pragmatique": {
      "label": "Pragmatique",
      "desc": "Reparations et achats techniques coutent moins cher.",
      "passive": "cheap_repairs"
    },
    "ambitieux": {
      "label": "Ambitieux",
      "desc": "Les gains de credits sont augmentes de 10 %.",
      "passive": "more_credits"
    },
    "paranoiaque": {
      "label": "Paranoiaque",
      "desc": "Le premier impact de chaque combat est reduit de 1.",
      "passive": "first_hit_resist"
    }
  },
  "crew": [
    {
      "id": "amira",
      "name": "Dr. Amira Solano",
      "role": "Xenobiologiste",
      "specialty": "Science",
      "specialtySkill": "science",
      "loyalty": 68,
      "stress": 14,
      "relation": 10,
      "hp": 12,
      "maxHp": 12,
      "perk": "xeno"
    },
    {
      "id": "kaito",
      "name": "Kaito Voss",
      "role": "Chef de securite",
      "specialty": "Combat",
      "specialtySkill": "combat",
      "loyalty": 62,
      "stress": 18,
      "relation": 3,
      "hp": 15,
      "maxHp": 15,
      "perk": "guard"
    },
    {
      "id": "mila",
      "name": "Mila Radev",
      "role": "Ingenieure systemes",
      "specialty": "Ingenierie",
      "specialtySkill": "engineering",
      "loyalty": 70,
      "stress": 12,
      "relation": 8,
      "hp": 12,
      "maxHp": 12,
      "perk": "repair"
    },
    {
      "id": "elias",
      "name": "Elias Noor",
      "role": "Pilote secondaire",
      "specialty": "Pilotage",
      "specialtySkill": "pilotage",
      "loyalty": 64,
      "stress": 16,
      "relation": 5,
      "hp": 13,
      "maxHp": 13,
      "perk": "pilot"
    }
  ],
  "cards": [
    {
      "id": "spectral",
      "name": "Analyse spectrale",
      "text": "+2 a un test de Science.",
      "tags": [
        "science"
      ],
      "type": "bonus",
      "value": 2
    },
    {
      "id": "field",
      "name": "Protocole de terrain",
      "text": "+2 a un test d Ingenierie.",
      "tags": [
        "engineering"
      ],
      "type": "bonus",
      "value": 2
    },
    {
      "id": "aim",
      "name": "Tir calibre",
      "text": "+2 a un test de Combat ou Pilotage.",
      "tags": [
        "combat",
        "pilotage"
      ],
      "type": "bonus",
      "value": 2
    },
    {
      "id": "charm",
      "name": "Charme calibre",
      "text": "+2 a un test de Diplomatie.",
      "tags": [
        "diplomacy"
      ],
      "type": "bonus",
      "value": 2
    },
    {
      "id": "survive",
      "name": "Instinct de survie",
      "text": "+2 a un test de Survie.",
      "tags": [
        "survival"
      ],
      "type": "bonus",
      "value": 2
    },
    {
      "id": "quantum",
      "name": "Fenetre quantique",
      "text": "+1 a n importe quel test.",
      "tags": [
        "any"
      ],
      "type": "bonus",
      "value": 1
    },
    {
      "id": "improv",
      "name": "Solution improvisee",
      "text": "Relance le d20 apres un echec.",
      "tags": [
        "any"
      ],
      "type": "reroll",
      "value": 0
    },
    {
      "id": "cover",
      "name": "Couverture alliee",
      "text": "Reduit de 2 les degats subis.",
      "tags": [
        "combat",
        "any"
      ],
      "type": "shield",
      "value": 2
    },
    {
      "id": "deep_scan",
      "name": "Scan profond",
      "text": "+3 Science.",
      "tags": [
        "science"
      ],
      "type": "bonus",
      "value": 3
    },
    {
      "id": "burn",
      "name": "Combustion d urgence",
      "text": "+3 Pilotage.",
      "tags": [
        "pilotage"
      ],
      "type": "bonus",
      "value": 3
    },
    {
      "id": "breach",
      "name": "Brise-coque",
      "text": "+3 Combat.",
      "tags": [
        "combat"
      ],
      "type": "bonus",
      "value": 3
    },
    {
      "id": "cold_read",
      "name": "Lecture froide",
      "text": "+3 Diplomatie.",
      "tags": [
        "diplomacy"
      ],
      "type": "bonus",
      "value": 3
    },
    {
      "id": "lucky",
      "name": "Point de bascule",
      "text": "Avantage : lance deux d20 et garde le meilleur.",
      "tags": [
        "any"
      ],
      "type": "advantage",
      "value": 0
    },
    {
      "id": "focus",
      "name": "Concentration totale",
      "text": "+2 a tout test et -2 stress a l assistant.",
      "tags": [
        "any"
      ],
      "type": "bonus",
      "value": 2
    },
    {
      "id": "medevac",
      "name": "Evacuation medicale",
      "text": "En combat terrestre, soigne 3 PV apres l action.",
      "tags": [
        "combat",
        "survival"
      ],
      "type": "heal",
      "value": 3
    },
    {
      "id": "xeno_phrase",
      "name": "Phrase xeno reconstruite",
      "text": "+4 Diplomatie apres le Premier Contact.",
      "tags": [
        "diplomacy"
      ],
      "type": "bonus",
      "value": 4,
      "requiresFlag": "firstContact"
    }
  ],
  "items": [
    {
      "id": "medkit",
      "name": "Medikit compact",
      "desc": "Soigne 6 PV au commandant.",
      "price": 28,
      "type": "heal",
      "value": 6
    },
    {
      "id": "stimulant",
      "name": "Stimulant neural",
      "desc": "Retire 8 stress a tout l equipage.",
      "price": 32,
      "type": "stress",
      "value": 8
    },
    {
      "id": "field_kit",
      "name": "Kit de terrain",
      "desc": "+1 temporaire au prochain test d Ingenierie ou Survie.",
      "price": 25,
      "type": "check",
      "value": 1
    },
    {
      "id": "fuel_cell",
      "name": "Cellule Helios",
      "desc": "+2 carburant.",
      "price": 30,
      "type": "fuel",
      "value": 2
    },
    {
      "id": "supplies",
      "name": "Rations de mission",
      "desc": "+5 fournitures.",
      "price": 18,
      "type": "supplies",
      "value": 5
    }
  ],
  "modules": [
    {
      "id": "lab_array",
      "name": "Laboratoire spectral",
      "cost": 80,
      "desc": "+1 aux tests de Science.",
      "effect": "science_bonus"
    },
    {
      "id": "shield_coils",
      "name": "Bobines de bouclier",
      "cost": 75,
      "desc": "+3 boucliers maximum.",
      "effect": "shield_max"
    },
    {
      "id": "reactor_mk2",
      "name": "Reacteur Helios Mk II",
      "cost": 90,
      "desc": "+2 carburant maximum.",
      "effect": "fuel_max"
    },
    {
      "id": "medbay",
      "name": "Infirmerie adaptative",
      "cost": 70,
      "desc": "Repos plus efficace et +2 soins.",
      "effect": "rest_bonus"
    },
    {
      "id": "cargo",
      "name": "Soute modulaire",
      "cost": 65,
      "desc": "+10 fournitures maximum.",
      "effect": "supplies_max"
    },
    {
      "id": "combat_ai",
      "name": "IA tactique locale",
      "cost": 110,
      "desc": "+1 Combat spatial.",
      "effect": "combat_bonus"
    }
  ],
  "factions": [
    {
      "id": "coalition",
      "name": "Coalition terrienne",
      "desc": "Institutions, diplomatie et recherche publique.",
      "start": 5
    },
    {
      "id": "mars",
      "name": "Republique martienne",
      "desc": "Puissance militaire et autonomie planetaire.",
      "start": 0
    },
    {
      "id": "helix",
      "name": "Helix Corporation",
      "desc": "Industrie, logistique et contrats lucratifs.",
      "start": 0
    },
    {
      "id": "belt",
      "name": "Ligue de la Ceinture",
      "desc": "Stations libres, passeurs et collectivites minieres.",
      "start": 2
    },
    {
      "id": "xeno",
      "name": "Concordat d Echo",
      "desc": "Interlocuteurs non humains apres le Premier Contact.",
      "start": 0,
      "hiddenUntil": "firstContact"
    }
  ],
  "research": [
    {
      "id": "advanced_scanners",
      "name": "Senseurs interferometriques",
      "cost": 4,
      "desc": "+1 Science.",
      "effect": "science_bonus"
    },
    {
      "id": "combat_algorithms",
      "name": "Algorithmes de combat",
      "cost": 5,
      "desc": "+1 Combat.",
      "effect": "combat_bonus"
    },
    {
      "id": "efficient_drive",
      "name": "Propulsion economique",
      "cost": 6,
      "desc": "Les voyages coutent 1 carburant de moins, minimum 1.",
      "effect": "fuel_efficiency"
    },
    {
      "id": "field_medicine",
      "name": "Medecine de terrain",
      "cost": 5,
      "desc": "Repos : +2 PV commandant.",
      "effect": "healing_bonus"
    },
    {
      "id": "xeno_linguistics",
      "name": "Xenolinguistique",
      "cost": 7,
      "desc": "+1 Diplomatie avec les entites xeno.",
      "effect": "xeno_diplomacy",
      "requiresFlag": "firstContact"
    },
    {
      "id": "colony_methods",
      "name": "Architecture coloniale",
      "cost": 8,
      "desc": "Batiments de colonie -10 % credits.",
      "effect": "colony_discount"
    },
    {
      "id": "quantum_nav",
      "name": "Navigation quantique",
      "cost": 9,
      "desc": "+1 Pilotage et ouvre des routes lointaines.",
      "effect": "pilotage_bonus"
    }
  ],
  "colonyBuildings": [
    {
      "id": "habitat",
      "name": "Habitats pressurises",
      "credits": 80,
      "data": 2,
      "desc": "+15 morale, +60 population max.",
      "effect": "morale"
    },
    {
      "id": "mine",
      "name": "Mine robotisee",
      "credits": 100,
      "data": 2,
      "desc": "+8 credits par jour.",
      "effect": "credits"
    },
    {
      "id": "lab",
      "name": "Laboratoire colonial",
      "credits": 110,
      "data": 4,
      "desc": "+1 donnee tous les 3 jours.",
      "effect": "data"
    },
    {
      "id": "farm",
      "name": "Ferme hydroponique",
      "credits": 85,
      "data": 2,
      "desc": "+3 fournitures par jour.",
      "effect": "supplies"
    },
    {
      "id": "defense",
      "name": "Defense orbitale",
      "credits": 130,
      "data": 5,
      "desc": "Reduit la pression rivale quotidienne.",
      "effect": "defense"
    },
    {
      "id": "shipyard",
      "name": "Chantier spatial",
      "credits": 180,
      "data": 6,
      "desc": "Les avant-postes coutent moins cher.",
      "effect": "outpost_discount"
    }
  ],
  "contracts": [
    {
      "id": "helix_survey",
      "name": "Releve Helix",
      "faction": "helix",
      "desc": "Gagner 5 donnees apres acceptation.",
      "type": "data",
      "goal": 5,
      "reward": {
        "credits": 90,
        "faction": 2
      }
    },
    {
      "id": "belt_security",
      "name": "Securite de la Ceinture",
      "faction": "belt",
      "desc": "Remporter 2 combats apres acceptation.",
      "type": "combats",
      "goal": 2,
      "reward": {
        "credits": 100,
        "reputation": 1,
        "faction": 2
      }
    },
    {
      "id": "coalition_goodwill",
      "name": "Mission de bonne volonte",
      "faction": "coalition",
      "desc": "Gagner 3 reputation apres acceptation.",
      "type": "reputation",
      "goal": 3,
      "reward": {
        "credits": 70,
        "data": 2,
        "faction": 2
      }
    },
    {
      "id": "mars_frontier",
      "name": "Route de Proxima",
      "faction": "mars",
      "desc": "Visiter la Porte de Proxima apres acceptation.",
      "type": "visit",
      "target": "proxima_gate",
      "goal": 1,
      "reward": {
        "credits": 120,
        "faction": 3
      }
    }
  ],
  "locations": [
    {
      "id": "orbital_ring",
      "label": "Anneau orbital d Erebus",
      "system": "Erebus",
      "tag": "STATION",
      "image": "station",
      "tier": 6,
      "fuel": 1
    },
    {
      "id": "ash_moon",
      "label": "Lune cendree Khepri",
      "system": "Erebus",
      "tag": "SURFACE",
      "image": "moon",
      "tier": 6,
      "fuel": 1
    },
    {
      "id": "derelict_field",
      "label": "Champ d epaves de Nadir",
      "system": "Erebus",
      "tag": "EPAVES",
      "image": "derelict",
      "tier": 6,
      "fuel": 1
    },
    {
      "id": "echo_anomaly",
      "label": "Anomalie Echo-7",
      "system": "Erebus",
      "tag": "ANOMALIE",
      "image": "anomaly",
      "tier": 6,
      "fuel": 1
    },
    {
      "id": "proxima_gate",
      "label": "Porte de Proxima",
      "system": "Proxima",
      "tag": "FRONTIERE",
      "image": "nebula",
      "tier": 8,
      "fuel": 2,
      "requiresFlag": "firstContact"
    },
    {
      "id": "tau_ceti",
      "label": "Tau Ceti e - vallee verte",
      "system": "Tau Ceti",
      "tag": "MONDE",
      "image": "planet",
      "tier": 9,
      "fuel": 2,
      "requiresStage": 4
    },
    {
      "id": "luyten_relay",
      "label": "Relais noir de Luyten",
      "system": "Luyten",
      "tag": "RELAIS",
      "image": "nebula",
      "tier": 10,
      "fuel": 3,
      "requiresStage": 5
    }
  ],
  "events": {
    "orbital_ring": [
      {
        "id": "dock9",
        "tier": 6,
        "tag": "DETRESSE",
        "title": "Appel de detresse au quai 9",
        "image": "station",
        "text": "Un cargo civil derive vers les docks, reacteur instable et oxygene en chute.",
        "choices": [
          {
            "label": "Stabiliser le reacteur",
            "skill": "engineering",
            "attr": "technique",
            "dc": 13,
            "success": {
              "text": "Le cargo est sauve.",
              "credits": 35,
              "reputation": 1,
              "xp": 5
            },
            "fail": {
              "text": "La surcharge frappe l Asterion.",
              "shield": -2,
              "xp": 1
            },
            "heroic": true
          },
          {
            "label": "Organiser l evacuation",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 12,
            "success": {
              "text": "La foule evacue sans panique.",
              "data": 1,
              "reputation": 1,
              "xp": 5
            },
            "fail": {
              "text": "Le chaos coute des ressources.",
              "fuel": -1,
              "stressCrew": 3,
              "xp": 1
            },
            "heroic": true
          }
        ]
      },
      {
        "id": "grey_market",
        "tier": 6,
        "tag": "MARCHE",
        "title": "Transaction grise",
        "image": "station",
        "text": "Un courtier vend une route vers un relais militaire oublie.",
        "choices": [
          {
            "label": "Negocier",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 14,
            "success": {
              "text": "Tu obtiens les donnees et une marge.",
              "data": 2,
              "credits": 15,
              "faction": {
                "id": "belt",
                "delta": 1
              },
              "xp": 4
            },
            "fail": {
              "text": "La piste est couteuse et mediocre.",
              "credits": -20,
              "xp": 1
            }
          },
          {
            "label": "Verifier son terminal",
            "skill": "science",
            "attr": "intelligence",
            "dc": 13,
            "success": {
              "text": "La signature est authentique.",
              "data": 2,
              "xp": 5
            },
            "fail": {
              "text": "Le courtier detecte ton intrusion.",
              "reputation": -1,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "strike",
        "tier": 6,
        "tag": "POLITIQUE",
        "title": "Greve des dockers",
        "image": "station",
        "text": "Helix et les dockers s accusent mutuellement de falsifier les quotas d oxygene.",
        "choices": [
          {
            "label": "Mediatiser les preuves",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 14,
            "success": {
              "text": "La pression publique force un accord.",
              "reputation": 2,
              "faction": {
                "id": "belt",
                "delta": 2
              },
              "xp": 6
            },
            "fail": {
              "text": "Helix retourne le recit contre toi.",
              "reputation": -1,
              "faction": {
                "id": "helix",
                "delta": -1
              },
              "xp": 1
            },
            "heroic": true
          },
          {
            "label": "Auditer les compteurs",
            "skill": "engineering",
            "attr": "technique",
            "dc": 13,
            "success": {
              "text": "Les compteurs etaient truques.",
              "data": 2,
              "credits": 18,
              "xp": 5
            },
            "fail": {
              "text": "L audit s enlise.",
              "credits": -10,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "envoy",
        "tier": 8,
        "tag": "DIPLOMATIE",
        "title": "L emissaire martien",
        "image": "station",
        "text": "Une delegation martienne cherche un transport discret vers Echo-7.",
        "choices": [
          {
            "label": "Accepter sous protocole",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 15,
            "success": {
              "text": "Mars te considere comme interlocuteur fiable.",
              "credits": 30,
              "faction": {
                "id": "mars",
                "delta": 3
              },
              "xp": 6
            },
            "fail": {
              "text": "L accord se crispe.",
              "faction": {
                "id": "mars",
                "delta": -2
              },
              "xp": 1
            }
          },
          {
            "label": "Analyser leurs donnees avant accord",
            "skill": "science",
            "attr": "intelligence",
            "dc": 15,
            "success": {
              "text": "Tu reperes une anomalie utile.",
              "data": 3,
              "faction": {
                "id": "mars",
                "delta": 1
              },
              "xp": 6
            },
            "fail": {
              "text": "Ils jugent la demande intrusive.",
              "reputation": -1,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "refugees",
        "tier": 9,
        "tag": "CRISE",
        "title": "Convoi de refugies",
        "image": "station",
        "text": "Un convoi civil fuit une zone de tensions commerciales. Les docks refusent l accueil.",
        "choices": [
          {
            "label": "Garantir l accueil",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 16,
            "success": {
              "text": "Tu obtiens un corridor humanitaire.",
              "reputation": 3,
              "supplies": -2,
              "xp": 8
            },
            "fail": {
              "text": "Le corridor est refuse.",
              "reputation": -1,
              "stressCrew": 4,
              "xp": 2
            },
            "heroic": true
          },
          {
            "label": "Reconfigurer les modules d accueil",
            "skill": "engineering",
            "attr": "technique",
            "dc": 15,
            "success": {
              "text": "Des couchettes temporaires sont ouvertes.",
              "reputation": 2,
              "credits": -15,
              "xp": 7
            },
            "fail": {
              "text": "La reconfiguration echoue.",
              "hull": -1,
              "xp": 2
            }
          }
        ]
      }
    ],
    "ash_moon": [
      {
        "id": "ash_ruins",
        "tier": 6,
        "tag": "EXPLORATION",
        "title": "Ruines sous cendre",
        "image": "ruins",
        "text": "Des structures geometriques emergent d une plaine noire.",
        "choices": [
          {
            "label": "Scanner les motifs",
            "skill": "science",
            "attr": "intelligence",
            "dc": 14,
            "success": {
              "text": "Le motif repond au scanner.",
              "data": 2,
              "xp": 6
            },
            "fail": {
              "text": "Une impulsion frappe les capteurs.",
              "shield": -2,
              "xp": 1
            }
          },
          {
            "label": "Ouvrir un passage",
            "skill": "survival",
            "attr": "physique",
            "dc": 13,
            "success": {
              "text": "Une chambre intacte livre minerais et archives.",
              "credits": 30,
              "data": 1,
              "xp": 6
            },
            "fail": {
              "text": "Le terrain s effondre.",
              "commanderHp": -3,
              "injury": "contusion",
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "microbes",
        "tier": 6,
        "tag": "XENOBIOLOGIE",
        "title": "Vie microbienne active",
        "image": "moon",
        "text": "Amira detecte des organismes qui conduisent l electricite dans le regolithe.",
        "choices": [
          {
            "label": "Prelever un echantillon",
            "skill": "science",
            "attr": "intelligence",
            "dc": 13,
            "success": {
              "text": "La biochimie est inconnue.",
              "data": 2,
              "reputation": 1,
              "crewRelation": {
                "id": "amira",
                "delta": 2
              },
              "xp": 6
            },
            "fail": {
              "text": "Des spores attaquent le materiel.",
              "commanderHp": -2,
              "stressCrew": 2,
              "xp": 1
            }
          },
          {
            "label": "Isoler la zone",
            "skill": "engineering",
            "attr": "technique",
            "dc": 12,
            "success": {
              "text": "Le confinement est propre.",
              "data": 1,
              "xp": 4
            },
            "fail": {
              "text": "Le confinement consomme trop.",
              "supplies": -2,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "ice_fault",
        "tier": 7,
        "tag": "GEOLOGIE",
        "title": "Faille cryovolcanique",
        "image": "moon",
        "text": "Une cavite chaude s ouvre sous la croute.",
        "choices": [
          {
            "label": "Envoyer des drones",
            "skill": "science",
            "attr": "intelligence",
            "dc": 14,
            "success": {
              "text": "Les drones trouvent une chimie prebiotique.",
              "data": 2,
              "xp": 6
            },
            "fail": {
              "text": "Deux drones sont perdus.",
              "credits": -15,
              "xp": 1
            }
          },
          {
            "label": "Descendre en equipe",
            "skill": "survival",
            "attr": "reflexes",
            "dc": 15,
            "success": {
              "text": "Vous remontez avec un cristal rare.",
              "credits": 40,
              "reputation": 1,
              "xp": 8
            },
            "fail": {
              "text": "Une chute blesse le commandant.",
              "commanderHp": -4,
              "injury": "entorse",
              "xp": 1
            },
            "heroic": true
          }
        ]
      },
      {
        "id": "lost_team",
        "tier": 7,
        "tag": "MISSION",
        "title": "Equipe scientifique perdue",
        "image": "moon",
        "text": "Une balise de secours clignote dans un canyon instable.",
        "choices": [
          {
            "label": "Suivre la balise",
            "skill": "survival",
            "attr": "reflexes",
            "dc": 15,
            "success": {
              "text": "Tu retrouves les trois scientifiques.",
              "reputation": 2,
              "supplies": 2,
              "crewRelation": {
                "id": "kaito",
                "delta": 1
              },
              "xp": 8
            },
            "fail": {
              "text": "Une avalanche coupe la route.",
              "commanderHp": -3,
              "supplies": -2,
              "xp": 2
            },
            "heroic": true
          },
          {
            "label": "Trianguler depuis l orbite",
            "skill": "science",
            "attr": "intelligence",
            "dc": 14,
            "success": {
              "text": "La localisation est precise.",
              "data": 2,
              "reputation": 1,
              "xp": 6
            },
            "fail": {
              "text": "Le signal se brouille.",
              "fuel": -1,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "monolith",
        "tier": 9,
        "tag": "ALIEN",
        "title": "Monolithe de Khepri",
        "image": "ruins",
        "text": "Un monolithe noir emerge apres un glissement de terrain.",
        "choices": [
          {
            "label": "Tenter une interface",
            "skill": "engineering",
            "attr": "technique",
            "dc": 17,
            "success": {
              "text": "Le monolithe ouvre une carte stellaire.",
              "data": 4,
              "faction": {
                "id": "xeno",
                "delta": 2
              },
              "xp": 10
            },
            "fail": {
              "text": "La retroaction te projette au sol.",
              "commanderHp": -5,
              "injury": "neural",
              "xp": 2
            }
          },
          {
            "label": "Communiquer par motifs",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 17,
            "success": {
              "text": "Une reponse non humaine apparait.",
              "data": 3,
              "faction": {
                "id": "xeno",
                "delta": 3
              },
              "xp": 10
            },
            "fail": {
              "text": "Le monolithe se ferme.",
              "stressCrew": 5,
              "xp": 2
            }
          }
        ]
      }
    ],
    "derelict_field": [
      {
        "id": "ghost_frigate",
        "tier": 6,
        "tag": "EPAVE",
        "title": "Fregate fantome",
        "image": "derelict",
        "text": "Une vieille fregate derive, balise active.",
        "choices": [
          {
            "label": "Fouiller l epave",
            "skill": "survival",
            "attr": "reflexes",
            "dc": 14,
            "success": {
              "text": "Tu recuperes des modules et des caisses.",
              "credits": 45,
              "data": 1,
              "supplies": 2,
              "xp": 6
            },
            "fail": {
              "text": "Un drone sentinelle s active.",
              "combat": {
                "enemy": "Drone sentinelle",
                "mode": "ground",
                "hp": 18,
                "attack": 4,
                "armor": 1,
                "rewardCredits": 35,
                "rewardData": 1
              },
              "xp": 1
            }
          },
          {
            "label": "Pirater la balise",
            "skill": "engineering",
            "attr": "technique",
            "dc": 14,
            "success": {
              "text": "Tu recuperes les codes de la fregate.",
              "data": 2,
              "credits": 20,
              "xp": 6
            },
            "fail": {
              "text": "Une decharge frappe les boucliers.",
              "shield": -2,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "minefield",
        "tier": 6,
        "tag": "RISQUE",
        "title": "Champ mine oublie",
        "image": "derelict",
        "text": "Des mines a fusion se confondent avec les debris.",
        "choices": [
          {
            "label": "Passer en force",
            "skill": "pilotage",
            "attr": "reflexes",
            "dc": 15,
            "success": {
              "text": "Le passage est net et rapide.",
              "credits": 25,
              "xp": 6
            },
            "fail": {
              "text": "Une mine explose pres de la coque.",
              "shield": -3,
              "hull": -1,
              "xp": 1
            }
          },
          {
            "label": "Cartographier le champ",
            "skill": "science",
            "attr": "intelligence",
            "dc": 13,
            "success": {
              "text": "Une route sure est calculee.",
              "data": 1,
              "xp": 4
            },
            "fail": {
              "text": "Le calcul consomme du temps.",
              "fuel": -1,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "blackbox",
        "tier": 7,
        "tag": "ENQUETE",
        "title": "Boite noire sans vaisseau",
        "image": "derelict",
        "text": "Une boite noire flotte seule. Son horloge accuse 43 ans d avance.",
        "choices": [
          {
            "label": "Decoder l horloge",
            "skill": "science",
            "attr": "intelligence",
            "dc": 16,
            "success": {
              "text": "Les donnees suggerent une boucle gravitationnelle.",
              "data": 3,
              "xp": 8
            },
            "fail": {
              "text": "Les donnees se corrompent.",
              "stressCrew": 3,
              "xp": 2
            }
          },
          {
            "label": "Remonter sa trajectoire",
            "skill": "pilotage",
            "attr": "reflexes",
            "dc": 15,
            "success": {
              "text": "Tu trouves une epave hors des cartes.",
              "credits": 35,
              "data": 1,
              "xp": 7
            },
            "fail": {
              "text": "La trajectoire traverse une zone dangereuse.",
              "fuel": -1,
              "shield": -1,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "salvage_rival",
        "tier": 8,
        "tag": "RIVAL",
        "title": "Course au salvage",
        "image": "derelict",
        "text": "Un recuperateur Helix revendique une epave que ton equipage a localisee en premier.",
        "choices": [
          {
            "label": "Negocier un partage",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 15,
            "success": {
              "text": "Le partage evite l escalade.",
              "credits": 35,
              "faction": {
                "id": "helix",
                "delta": 1
              },
              "xp": 6
            },
            "fail": {
              "text": "Helix saisit la majeure partie.",
              "credits": -10,
              "faction": {
                "id": "helix",
                "delta": -1
              },
              "xp": 1
            }
          },
          {
            "label": "Prendre l epave avant eux",
            "skill": "pilotage",
            "attr": "reflexes",
            "dc": 16,
            "success": {
              "text": "Elias gagne la course.",
              "credits": 60,
              "faction": {
                "id": "helix",
                "delta": -2
              },
              "crewRelation": {
                "id": "elias",
                "delta": 2
              },
              "xp": 9
            },
            "fail": {
              "text": "La manoeuvre endommage la coque.",
              "hull": -2,
              "xp": 2
            }
          }
        ]
      }
    ],
    "echo_anomaly": [
      {
        "id": "signal",
        "tier": 6,
        "tag": "ANOMALIE",
        "title": "Signal d Echo-7",
        "image": "anomaly",
        "text": "Un motif radio se repete avec une precision impossible.",
        "choices": [
          {
            "label": "Decoder la structure",
            "skill": "science",
            "attr": "intelligence",
            "dc": 15,
            "success": {
              "text": "Le signal contient des coordonnees.",
              "data": 3,
              "reputation": 1,
              "xp": 7
            },
            "fail": {
              "text": "Les circuits saturent.",
              "shield": -2,
              "xp": 1
            }
          },
          {
            "label": "Approcher le coeur",
            "skill": "pilotage",
            "attr": "reflexes",
            "dc": 15,
            "success": {
              "text": "Tu detectes un reseau energetique.",
              "data": 2,
              "credits": 20,
              "xp": 7
            },
            "fail": {
              "text": "Un drone xeno s eveille.",
              "combat": {
                "enemy": "Drone xeno reactif",
                "mode": "space",
                "hp": 22,
                "attack": 5,
                "armor": 1,
                "rewardCredits": 40,
                "rewardData": 2
              },
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "artifact",
        "tier": 6,
        "tag": "ALIEN",
        "title": "Artefact dormant",
        "image": "anomaly",
        "text": "Une masse polygonale flotte dans un halo ionise.",
        "choices": [
          {
            "label": "Interface energetique",
            "skill": "engineering",
            "attr": "technique",
            "dc": 16,
            "success": {
              "text": "Un noyau de donnees est extrait.",
              "data": 3,
              "xp": 8
            },
            "fail": {
              "text": "Un choc de retour traverse les systemes.",
              "hull": -2,
              "shield": -2,
              "xp": 1
            }
          },
          {
            "label": "Documenter sans toucher",
            "skill": "science",
            "attr": "intelligence",
            "dc": 13,
            "success": {
              "text": "La prudence produit un dossier solide.",
              "data": 2,
              "reputation": 1,
              "xp": 5
            },
            "fail": {
              "text": "L artefact derive hors de portee.",
              "fuel": -1,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "gravity",
        "tier": 7,
        "tag": "PHYSIQUE",
        "title": "Maree de gravite",
        "image": "anomaly",
        "text": "La gravite locale se met a osciller comme une respiration.",
        "choices": [
          {
            "label": "Synchroniser les moteurs",
            "skill": "pilotage",
            "attr": "reflexes",
            "dc": 16,
            "success": {
              "text": "La vague te propulse vers une poche stable.",
              "data": 2,
              "fuel": 1,
              "xp": 8
            },
            "fail": {
              "text": "La coque encaisse une torsion.",
              "hull": -2,
              "xp": 1
            }
          },
          {
            "label": "Mesurer la frequence",
            "skill": "science",
            "attr": "intelligence",
            "dc": 15,
            "success": {
              "text": "Le phenomene semble artificiel.",
              "data": 3,
              "xp": 8
            },
            "fail": {
              "text": "Les senseurs grillent partiellement.",
              "credits": -15,
              "xp": 1
            }
          }
        ]
      },
      {
        "id": "echo_voice",
        "tier": 8,
        "tag": "CONTACT",
        "title": "La voix dans le bruit",
        "image": "anomaly",
        "text": "Une structure linguistique apparait dans le bruit de fond.",
        "choices": [
          {
            "label": "Repondre par nombres premiers",
            "skill": "science",
            "attr": "intelligence",
            "dc": 16,
            "success": {
              "text": "Le signal adapte son rythme.",
              "data": 3,
              "faction": {
                "id": "xeno",
                "delta": 1
              },
              "xp": 9
            },
            "fail": {
              "text": "Le signal se tait.",
              "stressCrew": 4,
              "xp": 2
            }
          },
          {
            "label": "Repondre avec un message humain",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 16,
            "success": {
              "text": "Un motif equivalent a un salut revient.",
              "reputation": 2,
              "faction": {
                "id": "xeno",
                "delta": 2
              },
              "xp": 9
            },
            "fail": {
              "text": "La reponse est incomprehensible.",
              "stressCrew": 3,
              "xp": 2
            }
          }
        ]
      }
    ],
    "proxima_gate": [
      {
        "id": "gate_debris",
        "tier": 8,
        "tag": "FRONTIERE",
        "title": "Debris autour de la Porte",
        "image": "nebula",
        "text": "Des milliers de fragments tournent autour d une structure alien active.",
        "choices": [
          {
            "label": "Tracer une route",
            "skill": "pilotage",
            "attr": "reflexes",
            "dc": 16,
            "success": {
              "text": "La route ouvre le passage.",
              "data": 2,
              "credits": 25,
              "xp": 8
            },
            "fail": {
              "text": "Un fragment frappe les boucliers.",
              "shield": -3,
              "xp": 2
            }
          },
          {
            "label": "Lire les flux de la Porte",
            "skill": "science",
            "attr": "intelligence",
            "dc": 17,
            "success": {
              "text": "Tu comprends une partie du cycle.",
              "data": 4,
              "xp": 10
            },
            "fail": {
              "text": "Les capteurs saturent.",
              "fuel": -1,
              "xp": 2
            }
          }
        ]
      },
      {
        "id": "xeno_envoy",
        "tier": 8,
        "tag": "CONTACT",
        "title": "Vaisseau emissaire",
        "image": "nebula",
        "text": "Une petite coque non humaine reste immobile au bord du passage.",
        "choices": [
          {
            "label": "Etablir un protocole de salut",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 16,
            "success": {
              "text": "Le vaisseau repond sans hostilite.",
              "faction": {
                "id": "xeno",
                "delta": 4
              },
              "reputation": 2,
              "xp": 10
            },
            "fail": {
              "text": "L emissaire se retire.",
              "faction": {
                "id": "xeno",
                "delta": -1
              },
              "xp": 2
            }
          },
          {
            "label": "Partager une carte stellaire",
            "skill": "science",
            "attr": "intelligence",
            "dc": 16,
            "success": {
              "text": "Une route vers Tau Ceti est ajoutee.",
              "data": 3,
              "faction": {
                "id": "xeno",
                "delta": 2
              },
              "xp": 9
            },
            "fail": {
              "text": "Le format est rejete.",
              "stressCrew": 2,
              "xp": 2
            }
          }
        ]
      }
    ],
    "tau_ceti": [
      {
        "id": "garden_world",
        "tier": 9,
        "tag": "COLONIE",
        "title": "Vallee verte",
        "image": "planet",
        "text": "Une vallee temperee offre eau liquide et sols exploitables.",
        "choices": [
          {
            "label": "Etudier la biosphere",
            "skill": "science",
            "attr": "intelligence",
            "dc": 16,
            "success": {
              "text": "Le site est viable avec precautions.",
              "data": 3,
              "supplies": 4,
              "xp": 9
            },
            "fail": {
              "text": "Des toxines subtiles sont manquees.",
              "commanderHp": -3,
              "supplies": -2,
              "xp": 2
            }
          },
          {
            "label": "Cartographier les ressources",
            "skill": "survival",
            "attr": "reflexes",
            "dc": 15,
            "success": {
              "text": "Des gisements faciles sont identifies.",
              "credits": 45,
              "xp": 8
            },
            "fail": {
              "text": "Une tempete force le repli.",
              "fuel": -1,
              "xp": 2
            }
          }
        ]
      },
      {
        "id": "rival_colony",
        "tier": 9,
        "tag": "STRATEGIE",
        "title": "Balises rivales",
        "image": "planet",
        "text": "Helix pose des balises de concession autour d un plateau mineral.",
        "choices": [
          {
            "label": "Contester juridiquement",
            "skill": "diplomacy",
            "attr": "presence",
            "dc": 17,
            "success": {
              "text": "La concession est gelee.",
              "reputation": 2,
              "faction": {
                "id": "helix",
                "delta": -1
              },
              "xp": 10
            },
            "fail": {
              "text": "Helix obtient gain de cause.",
              "faction": {
                "id": "helix",
                "delta": 2
              },
              "xp": 2
            }
          },
          {
            "label": "Prouver une occupation scientifique",
            "skill": "science",
            "attr": "intelligence",
            "dc": 17,
            "success": {
              "text": "Tes donnees anterieures font foi.",
              "data": 2,
              "credits": 30,
              "xp": 10
            },
            "fail": {
              "text": "Les preuves sont insuffisantes.",
              "credits": -20,
              "xp": 2
            }
          }
        ]
      }
    ],
    "luyten_relay": [
      {
        "id": "dark_relay",
        "tier": 10,
        "tag": "MYSTERE",
        "title": "Relais noir",
        "image": "nebula",
        "text": "Le relais de Luyten diffuse une carte de milliers de portes eteintes.",
        "choices": [
          {
            "label": "Activer un segment",
            "skill": "engineering",
            "attr": "technique",
            "dc": 18,
            "success": {
              "text": "Le reseau reconnait ton identifiant.",
              "data": 5,
              "faction": {
                "id": "xeno",
                "delta": 2
              },
              "xp": 12
            },
            "fail": {
              "text": "Le relais lance une defense autonome.",
              "combat": {
                "enemy": "Gardien de Luyten",
                "mode": "space",
                "hp": 30,
                "attack": 7,
                "armor": 2,
                "rewardCredits": 80,
                "rewardData": 4
              },
              "xp": 2
            }
          },
          {
            "label": "Interpreter la carte",
            "skill": "science",
            "attr": "intelligence",
            "dc": 18,
            "success": {
              "text": "Tu comprends que le reseau est beaucoup plus vaste.",
              "data": 5,
              "xp": 12
            },
            "fail": {
              "text": "Les motifs echappent encore a l equipe.",
              "stressCrew": 5,
              "xp": 2
            }
          }
        ]
      }
    ]
  },
  "missions": [
    {
      "id": "ghost_protocol",
      "tier": 7,
      "title": "Protocole Fantome",
      "desc": "Explorer une fregate dont l equipage semble avoir disparu en quelques secondes.",
      "unlock": {
        "data": 4
      },
      "steps": [
        {
          "tag": "MISSION 1/3",
          "title": "Sas silencieux",
          "image": "derelict",
          "text": "Le sas est intact, mais l atmosphere interne est cryogenique.",
          "choices": [
            {
              "label": "Rechauffer le sas progressivement",
              "skill": "engineering",
              "attr": "technique",
              "dc": 14,
              "success": {
                "text": "Le sas s ouvre sans dommage.",
                "missionAdvance": true,
                "data": 1,
                "xp": 6
              },
              "fail": {
                "text": "Une vanne explose.",
                "missionAdvance": true,
                "commanderHp": -2,
                "xp": 2
              }
            },
            {
              "label": "Entrer en combinaison",
              "skill": "survival",
              "attr": "physique",
              "dc": 14,
              "success": {
                "text": "L equipe progresse rapidement.",
                "missionAdvance": true,
                "xp": 6
              },
              "fail": {
                "text": "Le froid provoque une blessure.",
                "missionAdvance": true,
                "commanderHp": -3,
                "xp": 2
              }
            }
          ]
        },
        {
          "tag": "MISSION 2/3",
          "title": "Journal efface",
          "image": "derelict",
          "text": "Le journal de bord a ete efface a l exception de sept secondes audio.",
          "choices": [
            {
              "label": "Reconstruire les fragments",
              "skill": "science",
              "attr": "intelligence",
              "dc": 15,
              "success": {
                "text": "Une voix prononce Echo-7.",
                "missionAdvance": true,
                "data": 2,
                "xp": 7
              },
              "fail": {
                "text": "Les fragments sont trop corrompus.",
                "missionAdvance": true,
                "xp": 2
              }
            },
            {
              "label": "Interroger l IA de bord",
              "skill": "diplomacy",
              "attr": "presence",
              "dc": 15,
              "success": {
                "text": "L IA accepte de transmettre ses souvenirs.",
                "missionAdvance": true,
                "data": 1,
                "xp": 7
              },
              "fail": {
                "text": "L IA se verrouille.",
                "missionAdvance": true,
                "stressCrew": 2,
                "xp": 2
              }
            }
          ]
        },
        {
          "tag": "MISSION 3/3",
          "title": "Le dernier compartiment",
          "image": "derelict",
          "text": "Une porte blindee contient une source d energie inconnue.",
          "choices": [
            {
              "label": "Ouvrir avec prudence",
              "skill": "engineering",
              "attr": "technique",
              "dc": 16,
              "success": {
                "text": "Un artefact est recupere.",
                "missionComplete": true,
                "data": 3,
                "credits": 45,
                "item": "medkit",
                "xp": 10
              },
              "fail": {
                "text": "Le compartiment se purge, mais l equipe survit.",
                "missionComplete": true,
                "commanderHp": -3,
                "data": 1,
                "xp": 4
              }
            }
          ]
        }
      ]
    },
    {
      "id": "khepri_depths",
      "tier": 7,
      "title": "Sous Khepri",
      "desc": "Descendre dans les galeries chaudes sous la lune cendree.",
      "unlock": {
        "data": 7,
        "visited": "ash_moon"
      },
      "steps": [
        {
          "tag": "MISSION 1/2",
          "title": "Puits thermal",
          "image": "moon",
          "text": "Un puits vertical descend vers une zone chaude.",
          "choices": [
            {
              "label": "Descendre en rappel",
              "skill": "survival",
              "attr": "reflexes",
              "dc": 15,
              "success": {
                "text": "La descente est sure.",
                "missionAdvance": true,
                "xp": 7
              },
              "fail": {
                "text": "Une chute coute du materiel.",
                "missionAdvance": true,
                "supplies": -3,
                "xp": 2
              }
            },
            {
              "label": "Installer un treuil",
              "skill": "engineering",
              "attr": "technique",
              "dc": 14,
              "success": {
                "text": "Le treuil tient.",
                "missionAdvance": true,
                "xp": 7
              },
              "fail": {
                "text": "Le treuil bloque.",
                "missionAdvance": true,
                "credits": -15,
                "xp": 2
              }
            }
          ]
        },
        {
          "tag": "MISSION 2/2",
          "title": "Mer souterraine",
          "image": "ruins",
          "text": "Une mer liquide existe sous la croute. Des lumieres se deplacent sous la surface.",
          "choices": [
            {
              "label": "Prelever sans perturber",
              "skill": "science",
              "attr": "intelligence",
              "dc": 16,
              "success": {
                "text": "Tu confirms une ecosysteme complexe.",
                "missionComplete": true,
                "data": 4,
                "reputation": 2,
                "crewRelation": {
                  "id": "amira",
                  "delta": 3
                },
                "xp": 12
              },
              "fail": {
                "text": "L echantillon se degrade.",
                "missionComplete": true,
                "data": 1,
                "xp": 4
              }
            }
          ]
        }
      ]
    },
    {
      "id": "echo_cipher",
      "tier": 8,
      "title": "Le Chiffre d Echo",
      "desc": "Comprendre le langage du Concordat et sa relation aux Portes.",
      "unlock": {
        "flag": "firstContact"
      },
      "steps": [
        {
          "tag": "MISSION 1/2",
          "title": "Grammaire impossible",
          "image": "anomaly",
          "text": "Le langage xeno encode temps, lieu et intention en un seul motif.",
          "choices": [
            {
              "label": "Modeliser la grammaire",
              "skill": "science",
              "attr": "intelligence",
              "dc": 17,
              "success": {
                "text": "Le modele tient.",
                "missionAdvance": true,
                "data": 3,
                "xp": 10
              },
              "fail": {
                "text": "Le modele diverge.",
                "missionAdvance": true,
                "stressCrew": 3,
                "xp": 3
              }
            },
            {
              "label": "Chercher une analogie emotionnelle",
              "skill": "diplomacy",
              "attr": "presence",
              "dc": 17,
              "success": {
                "text": "Une structure de politesse apparait.",
                "missionAdvance": true,
                "faction": {
                  "id": "xeno",
                  "delta": 2
                },
                "xp": 10
              },
              "fail": {
                "text": "Le sens reste ambigu.",
                "missionAdvance": true,
                "xp": 3
              }
            }
          ]
        },
        {
          "tag": "MISSION 2/2",
          "title": "Phrase de passage",
          "image": "nebula",
          "text": "Une phrase semble ouvrir une Porte sans code machine.",
          "choices": [
            {
              "label": "Prononcer la phrase",
              "skill": "diplomacy",
              "attr": "presence",
              "dc": 18,
              "success": {
                "text": "La Porte repond.",
                "missionComplete": true,
                "faction": {
                  "id": "xeno",
                  "delta": 3
                },
                "data": 3,
                "xp": 14
              },
              "fail": {
                "text": "La Porte ne reagit pas.",
                "missionComplete": true,
                "stressCrew": 4,
                "xp": 4
              }
            },
            {
              "label": "Simuler avant emission",
              "skill": "science",
              "attr": "intelligence",
              "dc": 17,
              "success": {
                "text": "La simulation revele une cle de securite.",
                "missionComplete": true,
                "data": 4,
                "xp": 13
              },
              "fail": {
                "text": "La simulation est incomplete.",
                "missionComplete": true,
                "data": 1,
                "xp": 4
              }
            }
          ]
        }
      ]
    }
  ],
  "specialEvents": {
    "firstContact": {
      "id": "first_contact",
      "tag": "PREMIER CONTACT",
      "title": "Quelqu un repond",
      "image": "anomaly",
      "text": "Le signal se condense en une structure stable. Une intelligence inconnue attend ta reponse.",
      "choices": [
        {
          "label": "Repondre avec une declaration pacifique",
          "skill": "diplomacy",
          "attr": "presence",
          "dc": 17,
          "success": {
            "text": "Le Concordat d Echo accepte le dialogue.",
            "firstContact": true,
            "faction": {
              "id": "xeno",
              "delta": 6
            },
            "reputation": 4,
            "data": 3,
            "xp": 18
          },
          "fail": {
            "text": "La traduction est imparfaite, mais le contact est etabli.",
            "firstContact": true,
            "faction": {
              "id": "xeno",
              "delta": 2
            },
            "data": 2,
            "stressCrew": 3,
            "xp": 10
          },
          "heroic": true
        },
        {
          "label": "Partager les constantes physiques",
          "skill": "science",
          "attr": "intelligence",
          "dc": 17,
          "success": {
            "text": "Le langage commun commence par les etoiles.",
            "firstContact": true,
            "faction": {
              "id": "xeno",
              "delta": 4
            },
            "data": 5,
            "xp": 18
          },
          "fail": {
            "text": "Le message reste incomplet, mais une reponse revient.",
            "firstContact": true,
            "data": 2,
            "xp": 10
          }
        }
      ]
    },
    "finalCouncil": {
      "id": "final_council",
      "tag": "FIN DE CAMPAGNE",
      "title": "Le Conseil des Portes",
      "image": "nebula",
      "text": "A Luyten, le Concordat revele que plusieurs puissances humaines veulent controler le reseau. Tu dois choisir une doctrine pour la nouvelle ere.",
      "choices": [
        {
          "label": "Fonder un pacte inter-especes",
          "skill": "diplomacy",
          "attr": "presence",
          "dc": 18,
          "success": {
            "text": "Une Charte des Portes est signee.",
            "ending": "coexistence",
            "faction": {
              "id": "xeno",
              "delta": 5
            },
            "reputation": 5,
            "xp": 20
          },
          "fail": {
            "text": "Le pacte est fragile, mais il existe.",
            "ending": "coexistence",
            "reputation": 2,
            "xp": 12
          },
          "heroic": true
        },
        {
          "label": "Prendre le controle des Portes",
          "skill": "engineering",
          "attr": "technique",
          "dc": 19,
          "success": {
            "text": "L humanite obtient un avantage strategique decisif.",
            "ending": "dominion",
            "credits": 150,
            "xp": 20
          },
          "fail": {
            "text": "Le controle reste partiel et dangereux.",
            "ending": "dominion",
            "hull": -3,
            "xp": 12
          }
        },
        {
          "label": "Dissoudre les cles et disperser les routes",
          "skill": "science",
          "attr": "intelligence",
          "dc": 19,
          "success": {
            "text": "Aucune puissance ne pourra monopoliser le reseau.",
            "ending": "exodus",
            "data": 6,
            "xp": 20
          },
          "fail": {
            "text": "Une partie du reseau reste accessible.",
            "ending": "exodus",
            "data": 3,
            "xp": 12
          }
        }
      ]
    }
  }
};})();
