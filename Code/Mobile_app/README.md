**Atlantis application structure**
```
.
└── Home
    └── Hub
        ├── User-devices
        │   └── Device-details
        │       └── Display-graph
        ├── [A] Associate-devices
        │   └── Select-devices
        └── [A] List-users
            └── List-user-devices
                └── Device-details
```

<!-- 
#Home
##Hub
###User-devices
####Device-details
#####Display-graph
###[A] Associate-devices
####Select-devices
###[A] List-users
####List-user-devices
#####Device-details


#getUserDevices(userId) -> [device, device, ...]
#getSelectedDevice(deviceId) -> {id, name, {metricName, metricUnit}}
#getLastMetric(deviceId) -> pas implémenté
#sendCommand(deviceId, command) -> pas implémenté


Name: Ascii Tree Generator
Description: A VS Code extension to generate ascii tree of directories or formatting selected text to tree strings.
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=aprilandjan.ascii-tree-generator
-->