var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-3440x1440": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "907",
                    "DialogWidth": "1195"
                },
                "/General": {
                    "positions": "{\"3440x1440\":[]}",
                    "previews": "false"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/kunic/Pictures/Wallpapers/catppuccin-wallpapers/misc/rainbow.png",
                    "SlidePaths": "/home/kunic/.local/share/wallpapers/,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "PreloadWeight": "70",
                            "popupHeight": "286",
                            "popupWidth": "172"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.horizontalbars",
                            "title": "Disk Usage"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/FaceGrid/Appearance": {
                            "chartFace": "org.kde.ksysguard.linechart",
                            "showTitle": "false"
                        },
                        "/FaceGrid/SensorColors": {
                            "disk/.*/usedPercent": "231,130,132",
                            "disk/8b105ca3-2877-43cc-9362-251c836915a3/usedPercent": "116,199,236",
                            "disk/96897f64-3c3f-4016-8a37-c9247d8cacfb/usedPercent": "166,227,161",
                            "disk/all/usedPercent": "203,166,247",
                            "disk/b9486d3c-9baa-4f20-a35c-eb48cf243b56/usedPercent": "243,139,168"
                        },
                        "/FaceGrid/Sensors": {
                            "highPrioritySensorIds": "[\"disk/b9486d3c-9baa-4f20-a35c-eb48cf243b56/usedPercent\"]"
                        },
                        "/SensorColors": {
                            "disk/.*/usedPercent": "231,130,132",
                            "disk/8b105ca3-2877-43cc-9362-251c836915a3/usedPercent": "116,199,236",
                            "disk/96897f64-3c3f-4016-8a37-c9247d8cacfb/usedPercent": "166,227,161",
                            "disk/all/usedPercent": "203,166,247",
                            "disk/b9486d3c-9baa-4f20-a35c-eb48cf243b56/usedPercent": "243,139,168"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"disk/all/usedPercent\",\"disk/96897f64-3c3f-4016-8a37-c9247d8cacfb/usedPercent\",\"disk/8b105ca3-2877-43cc-9362-251c836915a3/usedPercent\",\"disk/b9486d3c-9baa-4f20-a35c-eb48cf243b56/usedPercent\"]",
                            "lowPrioritySensorIds": "[\"disk/all/total\"]",
                            "totalSensors": "[\"disk/all/usedPercent\"]"
                        }
                    },
                    "plugin": "org.kde.plasma.systemmonitor.diskusage"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.plasm6desktopindicator"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "30"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "565",
                            "popupWidth": "805"
                        },
                        "/Appearance": {
                            "iconVisible": "false",
                            "widgetFontSize": "18",
                            "widgetIconSize": "16"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Location": {
                            "firstRun": "false",
                            "places": "[{\"providerId\":\"owm\",\"placeIdentifier\":\"4148757\",\"placeAlias\":\"Brandon\",\"timezoneID\":-1}]"
                        },
                        "/Units": {
                            "pressureType": "inHg",
                            "temperatureType": "fahrenheit",
                            "windSpeedType": "mph"
                        }
                    },
                    "plugin": "weather.widget.plus"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "469",
                            "popupWidth": "665"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "icon": "fedora-logo-icon",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        }
                    },
                    "plugin": "org.kde.plasma.simplekickoff"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "fill": "false",
                            "launchers": "preferred://filemanager,preferred://browser,applications:org.gnome.Rhythmbox3.desktop,applications:com.discordapp.Discord.desktop,applications:appimagekit_f558ce23e8078214804ce0381053ad95-Aonsoku.desktop",
                            "showOnlyCurrentActivity": "false",
                            "showOnlyCurrentDesktop": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "70",
                            "popupHeight": "480",
                            "popupWidth": "320"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "songTextAlignment": "2"
                        }
                    },
                    "plugin": "plasmusic-toolbar"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "30"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "465",
                            "popupWidth": "822"
                        },
                        "/Appearance": {
                            "autoFontAndSize": "false",
                            "customSpacing": "1.7171717171717171",
                            "dateDisplayFormat": "BesideTime",
                            "enabledCalendarPlugins": "/usr/lib/qt5/plugins/plasmacalendarplugins/holidaysevents.so,holidaysevents,astronomicalevents",
                            "fixedFont": "true",
                            "fontFamily": "Droid Sans",
                            "fontSize": "12",
                            "fontStyleName": "Regular",
                            "fontWeight": "400",
                            "showDate": "false"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "510",
                            "DialogWidth": "680"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false",
                            "length": "10"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "423",
                            "popupWidth": "380"
                        },
                        "/Appearance": {
                            "brightness_widget_flat": "true",
                            "brightness_widget_thin": "true",
                            "brightness_widget_title": "false",
                            "customButtonImage": "applications-all-symbolic",
                            "layout": "2",
                            "showBattery": "false",
                            "showBrightness": "false",
                            "showPercentage": "true",
                            "transparencyLevel": "0",
                            "useCustomButtonImage": "true",
                            "volume_widget_flat": "true",
                            "volume_widget_thin": "true",
                            "volume_widget_title": "false"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "706"
                        }
                    },
                    "plugin": "KdeControlStation"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "78",
                    "DialogWidth": "1920"
                }
            },
            "height": 3.611111111111111,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 120,
            "minimumLength": 120,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
