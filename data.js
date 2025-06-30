var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.032689963481242756,
        "pitch": 0.0014595220956508115,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0.04772382987773938,
          "pitch": 0.14642834300607177,
          "rotation": 6.283185307179586,
          "target": "1-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining-area",
      "name": "Dining Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -3.1100635617985013,
          "pitch": 0.0074916691757884735,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.9723977261111258,
        "pitch": 0.01776955668478486,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-entrance"
        },
        {
          "yaw": -0.6896736954309848,
          "pitch": 0.12433944742476655,
          "rotation": 5.497787143782138,
          "target": "5-stairs"
        },
        {
          "yaw": 3.104205345526063,
          "pitch": 0.1150541822819875,
          "rotation": 0,
          "target": "1-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 3.1265136947249514,
        "pitch": 0.006219107148508485,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.3009235710484148,
          "pitch": 0.12045197155069687,
          "rotation": 0,
          "target": "4-common-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-common-bathroom",
      "name": "Common Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.4968845523534853,
        "pitch": 0.033000092616751076,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 3.085968379594819,
          "pitch": 0.011379241550432795,
          "rotation": 0,
          "target": "3-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-stairs",
      "name": "stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -1.412291607928772,
        "pitch": -0.21577225437486902,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.412291607928772,
          "pitch": -0.21577225437486902,
          "rotation": 0,
          "target": "6-upstairs"
        },
        {
          "yaw": -0.05601720058285409,
          "pitch": 0.3513060896245399,
          "rotation": 0.7853981633974483,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-upstairs",
      "name": "Upstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -1.114199693465963,
        "pitch": 0.01169800926889053,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.0543543383831988,
          "pitch": 0.011574114475594754,
          "rotation": 0,
          "target": "10-2nd-bedroom"
        },
        {
          "yaw": -1.4291091063017411,
          "pitch": 0.020678699042399273,
          "rotation": 5.497787143782138,
          "target": "7-upstairs-bathroom"
        },
        {
          "yaw": -0.7795895522965033,
          "pitch": 0.0333730724208916,
          "rotation": 0.7853981633974483,
          "target": "9-2nd-living-room"
        },
        {
          "yaw": 0.3840147129035554,
          "pitch": 0.7089948432665203,
          "rotation": 0.7853981633974483,
          "target": "5-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-upstairs-bathroom",
      "name": "Upstairs Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.04630526590567463,
        "pitch": -0.043154637663048945,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -2.181477252421658,
          "pitch": 0.2428822710989067,
          "rotation": 0,
          "target": "6-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-3rd-bedroom",
      "name": "3rd Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.8708836777808564,
        "pitch": -0.005077016195652817,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -1.5293875993443855,
          "pitch": 0.03199766297660034,
          "rotation": 0,
          "target": "6-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-2nd-living-room",
      "name": "2nd Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 1.663408789068046,
          "pitch": 0.08376531027566259,
          "rotation": 0,
          "target": "11-master-bedroom"
        },
        {
          "yaw": 0.8186571167838075,
          "pitch": 0.07731238842567656,
          "rotation": 7.0685834705770345,
          "target": "10-2nd-bedroom"
        },
        {
          "yaw": -1.8606752797108932,
          "pitch": 0.17740446474341454,
          "rotation": 5.497787143782138,
          "target": "6-upstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2nd-bedroom",
      "name": "2nd Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.21905663060745617,
        "pitch": -0.060924194347833804,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 1.7788697206634945,
          "pitch": 0.1487500451224708,
          "rotation": 0.7853981633974483,
          "target": "9-2nd-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 0.04274275719169296,
        "pitch": 0.040616129565222536,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 2.203123434182106,
          "pitch": 0.09910418595732651,
          "rotation": 0,
          "target": "9-2nd-living-room"
        },
        {
          "yaw": 1.052793282232976,
          "pitch": 0.0673715356206479,
          "rotation": 0.7853981633974483,
          "target": "12-master-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-master-bathroom",
      "name": "Master Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": -0.000002365041488872066,
        "pitch": -0.043154637663048945,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": -2.7430308757657915,
          "pitch": 0.09772547844999302,
          "rotation": 0,
          "target": "11-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Ayat-360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
